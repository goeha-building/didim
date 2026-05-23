import React from 'react';

interface GeoOverlayProps {
  geojson?: any;
}

const GeoOverlay: React.FC<GeoOverlayProps> = ({ geojson }) => {
  if (!geojson) return null;
  return (
    <div className="geo-overlay">
      <pre style={{maxHeight:200,overflow:'auto'}}>{JSON.stringify(geojson, null, 2)}</pre>
    </div>
  );
};

export default GeoOverlay;
