import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { DangerZone } from '../services/map';

const markerIcon = new L.Icon({
  iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
  iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
  shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

type SafeZone = {
  id: number;
  name: string;
  description: string;
  lat: number;
  lng: number;
  type: 'safe' | 'risk';
  radius?: number;
};

type MapViewProps = {
  safeZones: SafeZone[];
  dangerZones: DangerZone[];
  currentLocation: { lat: number; lng: number } | null;
  vworldKey?: string;
};

function AutoPan({ position }: { position: { lat: number; lng: number } | null }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView([position.lat, position.lng], 14, { animate: true });
    }
  }, [map, position]);

  return null;
}

export default function MapView({ safeZones, dangerZones, currentLocation, vworldKey }: MapViewProps) {
  const tileUrl = vworldKey
    ? `https://api.vworld.kr/req/wmts/1.0.0/${vworldKey}/Base/geo/{z}/{x}/{y}.png`
    : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  const attribution = vworldKey
    ? '© VWorld / 국토지리정보원'
    : '&copy; OpenStreetMap contributors';

  const center = currentLocation ? [currentLocation.lat, currentLocation.lng] : [37.5665, 126.9780];

  return (
    <MapContainer center={center as [number, number]} zoom={13} className="map-view" scrollWheelZoom={true}>
      <TileLayer url={tileUrl} attribution={attribution} />
      {currentLocation && (
        <Marker position={[currentLocation.lat, currentLocation.lng]} icon={markerIcon}>
          <Popup>현재 위치</Popup>
        </Marker>
      )}
      {safeZones.map((zone) => (
        <Marker key={`safe-${zone.id}`} position={[zone.lat, zone.lng]} icon={markerIcon}>
          <Popup>
            <strong>{zone.name}</strong>
            <div>{zone.description}</div>
            <div>유형: {zone.type === 'safe' ? '세이프존' : '주의 지역'}</div>
          </Popup>
        </Marker>
      ))}
      {dangerZones.map((zone) => (
        <>
          <Circle
            key={`danger-${zone.id}`}
            center={[zone.lat, zone.lng]}
            radius={zone.radius}
            pathOptions={{ color: '#ef4444', fillColor: 'rgba(239, 68, 68, 0.18)', weight: 2 }}
          />
          <Marker key={`danger-marker-${zone.id}`} position={[zone.lat, zone.lng]} icon={markerIcon}>
            <Popup>
              <strong>{zone.name}</strong>
              <div>{zone.description}</div>
              <div>위험 반경: {zone.radius}m</div>
            </Popup>
          </Marker>
        </>
      ))}
      <AutoPan position={currentLocation} />
    </MapContainer>
  );
}
