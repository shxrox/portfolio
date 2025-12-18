
import React from 'react';
import DomeGallery from './DomeGallery';

const Gallery = () => {
  return (
    <div
      id="pics"
      style={{
        background: "#0d0d0d",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: `'Segoe UI', system-ui, -apple-system, sans-serif`,
        padding: "1rem",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          textAlign: 'center',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: '800',
          margin: '0rem 0 2rem 0',
          color: '#fff',
        }}
      >
        Some sky pics from my gallery
      </h2>

      {/* Gallery */}
      <div
        style={{
          width: '100%',
          height: '80vh', // adjust height for mobile
          overflowY: 'auto', // enable vertical scroll
          padding: "0.5rem",
        }}
      >
        <DomeGallery />
      </div>
    </div>
  );
}

export default Gallery;
