import React, { useState } from 'react';
import './Gallery.css';
import '../global.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

// Use the same image for all slides/grid items as a placeholder
const images = [
  { label: "Robot 1", src: "/images/team.jpg", details: "Robot 1 details." },
  { label: "Robot 2", src: "/images/whopper.jpg", details: "Robot 2 details." },
  { label: "Robot 3", src: "/images/PLAnts.jpg", details: "Robot 3 details." },
  { label: "Robot 4", src: "/images/bevo.jpg", details: "Robot 4 details." },
  { label: "Robot 5", src: "/images/trr.jpg", details: "Robot 5 details." },
  { label: "Robot 6", src: "/images/robot-action1.jpg", details: "Robot 6 details." },
  { label: "Robot 7", src: "/images/testDrive.jpg", details: "Robot 7 details." }
];

function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

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
        <h2 style={{color: '#fff'}}>Featured</h2>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          modules={[Pagination, Navigation]}
          centeredSlides={true}
          className="gallerySwiper"
        >
          {images.map(({ label, src }, idx) => (
            <SwiperSlide key={idx}>
              <div className="carousel-slide">
                <img src={src} alt={label} className="carousel-img" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
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
