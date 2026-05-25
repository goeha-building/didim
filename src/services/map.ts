export type DangerZone = {
  id: string;
  name: string;
  description: string;
  lat: number;
  lng: number;
  radius: number;
  level: 'risk' | 'crime';
};

export async function fetchDangerZones(): Promise<DangerZone[]> {
  try {
    const response = await fetch('/api/police/danger-zones');
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`위험지역 API 오류: ${response.status} ${text}`);
    }

    const body = await response.json();
    if (Array.isArray(body?.zones)) {
      return body.zones;
    }

    if (Array.isArray(body)) {
      return body;
    }

    return [];
  } catch (error) {
    console.error('fetchDangerZones error', error);
    throw error;
  }
}
