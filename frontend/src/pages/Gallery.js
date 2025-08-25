import React, { useState, useEffect } from 'react';
import './Gallery.css';
import '../global.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Use the same image for all slides/grid items as a placeholder
const images = [
  { label: "brat", src: "/images/bots/brat.png", details: "Hook ‘em and brat are opposites. Hook ‘em uses its forks to reach and lift opponents, while brat drives over them." },
  { label: "Hook 'em", src: "/images/bots/hookem.jpg", details: "Hook ‘em and brat are opposites. Hook ‘em uses its forks to reach and lift opponents, while brat drives over them" },
  { label: "Valstrax", src: "/images/bots/valstrax.jpg", details: "The winner of 2025 TRR!" },
  { label: "Whopper", src: "/images/bots/whopper.jpg", details: "Lost in the sauce." },
  { label: "Mechaniacs", src: "/images/bots/mechaniacs.jpg", details: "Mechaniacs." },
  { label: "Dreamsiccle", src: "/images/bots/dreamsiccle.jpg", details: "DreamSiccle is a horizontal spinner, with a strong chassis and lots of weight put into the weapon it can take a deal lots of hits." },
  { label: "Fri3d", src: "/images/bots/fri3d.jpg", details: "Fri3d was designed and built in 3 days." },
  { label: "Miralis", src: "/images/bots/miralis.jpg", details: "Miralis." },
];

function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  // Preload images for faster rendering
  useEffect(() => {
    images.forEach(img => {
      const preloadImg = new window.Image();
      preloadImg.src = img.src;
    });
  }, []);

  const handleGridClick = (img) => {
    setModalData(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalData(null);
  };

  return (
    <div style={{maxWidth: '900px', margin: '0 auto'}}>
      <h1 className="page-title">Gallery</h1>
      <section className="shadow-container">
        <h2 style={{color: '#fff'}}>2024-2025 Robots</h2>
        <div className="gallery-grid">
          {images.map((img, idx) => (
            <div key={idx} className="gallery-grid-item" onClick={() => handleGridClick(img)} tabIndex={0} role="button">
              <img src={img.src} alt={img.label} className="grid-img" />
              <div className="grid-label">{img.label}</div>
            </div>
          ))}
        </div>
      </section>
      {modalOpen && modalData && (
        <div className="gallery-modal-overlay" onClick={closeModal}>
          <div className="gallery-modal" onClick={e => e.stopPropagation()}>
            <img src={modalData.src} alt={modalData.label} className="gallery-modal-img" />
            <h2 className="gallery-modal-title">{modalData.label}</h2>
            <p className="gallery-modal-details">{modalData.details}</p>
            <button className="gallery-modal-close" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
