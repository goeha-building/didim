import React from 'react';

interface ImageCanvasProps {
  src?: string;
  alt?: string;
}

const ImageCanvas: React.FC<ImageCanvasProps> = ({ src, alt }) => {
  if (!src) return <div className="image-placeholder">이미지 없음</div>;
  return (
    <div className="image-canvas">
      <img src={src} alt={alt || 'generated'} style={{maxWidth:'100%'}} />
    </div>
  );
};

export default ImageCanvas;
