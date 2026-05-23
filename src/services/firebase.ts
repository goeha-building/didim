import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInAnonymously,
  signOut as signOutFirebase,
  onAuthStateChanged,
  User,
  UserCredential,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  query,
  where,
  collection,
  getDocs,
  updateDoc,
  arrayUnion,
  serverTimestamp,
  addDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function requireFirebaseConfig() {
  const missing = [];
  if (!firebaseConfig.apiKey) missing.push('VITE_FIREBASE_API_KEY');
  if (!firebaseConfig.authDomain) missing.push('VITE_FIREBASE_AUTH_DOMAIN');
  if (!firebaseConfig.projectId) missing.push('VITE_FIREBASE_PROJECT_ID');
  if (!firebaseConfig.storageBucket) missing.push('VITE_FIREBASE_STORAGE_BUCKET');
  if (!firebaseConfig.messagingSenderId) missing.push('VITE_FIREBASE_MESSAGING_SENDER_ID');
  if (!firebaseConfig.appId) missing.push('VITE_FIREBASE_APP_ID');
  if (missing.length) {
    throw new Error(`Firebase 환경 변수가 누락되었습니다: ${missing.join(', ')}`);
  }
}

export function initFirebase() {
  requireFirebaseConfig();
  return app;
}

export async function signInUserAnonymously(): Promise<UserCredential> {
  requireFirebaseConfig();
  return signInAnonymously(auth);
}

export async function signOutUser() {
  return signOutFirebase(auth);
}

export function onAuthStateChangedListener(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}

export function getCurrentUser() {
  return auth.currentUser;
}

function generateConnectionCode() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID().slice(0, 8).toUpperCase();
  }
  return Math.random().toString(36).slice(2, 10).toUpperCase();
}

export async function createUserProfile(user: User) {
  const userRef = doc(db, 'users', user.uid);
  const snapshot = await getDoc(userRef);
  if (!snapshot.exists()) {
    const code = generateConnectionCode();
    await setDoc(userRef, {
      uid: user.uid,
      createdAt: serverTimestamp(),
      lastSeenAt: serverTimestamp(),
      connectionCode: code,
      connections: [],
      role: 'learner',
    });
    return { uid: user.uid, connectionCode: code, connections: [] };
  }
  const data = snapshot.data();
  return {
    uid: user.uid,
    connectionCode: data.connectionCode,
    connections: data.connections || [],
  };
}

export async function saveActivity(userId: string, event: string, details: Record<string, any> = {}) {
  const logRef = collection(db, 'users', userId, 'activityLogs');
  await addDoc(logRef, {
    event,
    details,
    createdAt: serverTimestamp(),
  });
}

export async function connectGuardian(userId: string, guardianCode: string) {
  const usersCollection = collection(db, 'users');
  const codeQuery = query(usersCollection, where('connectionCode', '==', guardianCode));
  const querySnapshot = await getDocs(codeQuery);
  if (querySnapshot.empty) {
    throw new Error('유효한 보호자 코드가 없습니다. QR 또는 코드가 정확한지 확인하세요.');
  }

  const guardianDoc = querySnapshot.docs[0];
  const guardianId = guardianDoc.id;
  if (guardianId === userId) {
    throw new Error('자기 자신의 코드는 연결할 수 없습니다.');
  }

  const userRef = doc(db, 'users', userId);
  const guardianRef = doc(db, 'users', guardianId);

  await updateDoc(userRef, {
    connections: arrayUnion({ uid: guardianId, connectedAt: serverTimestamp() }),
  });
  await updateDoc(guardianRef, {
    connections: arrayUnion({ uid: userId, connectedAt: serverTimestamp() }),
  });

  return { guardianId, guardianCode };
}

export async function getActivityLogs(userId: string): Promise<Array<{ id: string; event: string; details: Record<string, any>; createdAt: any }>> {
  const logsRef = collection(db, 'users', userId, 'activityLogs');
  const snapshot = await getDocs(logsRef);
  return snapshot.docs
    .map((doc) => ({ id: doc.id, ...(doc.data() as any) }))
    .sort((a, b) => {
      const aTime = a.createdAt?.seconds || 0;
      const bTime = b.createdAt?.seconds || 0;
      return bTime - aTime;
    });
}
