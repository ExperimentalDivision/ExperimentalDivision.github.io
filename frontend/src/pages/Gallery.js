import React from 'react';
import './Gallery.css';
import '../global.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

// Use the same image for all slides/grid items as a placeholder
const images = [
  { label: "Robot 1", src: "/images/team.jpg" },
  { label: "Robot 2", src: "/images/whopper.jpg" },
  { label: "Robot 3", src: "/images/PLAnts.jpg" },
  { label: "Robot 4", src: "/images/bevo.jpg" },
  { label: "Robot 5", src: "/images/trr.jpg" },
  { label: "Robot 6", src: "/images/robot-action1.jpg" },
  { label: "Robot 7", src: "/images/testDrive.jpg" }
];

function Gallery() {
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
        <h2 style={{color: '#fff'}}>Our Robots</h2>
        <div className="gallery-grid">
          {images.map(({ label, src }, idx) => (
            <div key={idx} className="gallery-grid-item">
              <img src={src} alt={label} className="grid-img" />
              <div className="grid-label">{label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gallery;
