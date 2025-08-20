import React from 'react';
import './Home.css';
import '../global.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

// Carousel images (using the same placeholder)
const images = [
  { label: "Robot 1", src: "/images/team.jpg" },
  { label: "Robot 2", src: "/images/whopper.jpg" },
  { label: "Robot 3", src: "/images/PLAnts.jpg" },
  { label: "Robot 4", src: "/images/bevo.jpg" },
  { label: "Robot 5", src: "/images/trr.jpg" },
  { label: "Robot 6", src: "/images/robot-action1.jpg" },
  { label: "Robot 7", src: "/images/testDrive.jpg" }
];

function Home() {
  return (
    <div className="home-container">
      <h1 className="page-title">Experimental Division</h1>
      <h2 className="page-subtitle">Combat Robotics</h2>
      {/* Carousel Section replaces static image */}
      <section className="home-carousel-section">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          modules={[Pagination, Navigation]}
          centeredSlides={true}
          className="homeSwiper"
        >
          {images.map(({ label, src }, idx) => (
            <SwiperSlide key={idx}>
              <div className="home-carousel-slide">
                <img
                  src={src}
                  alt={label}
                  className="home-carousel-img no-select"
                  draggable={false}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="shadow-container">
        <h2 style={{color: '#fff'}}>Our Mission</h2>
        <p>We are the premier combat robotics team at the University of Texas at Austin. We are driven to teach our members the skills they need in order to design, build, and compete in combat robotics competitions.</p>
        <p>Want to see more of what we do? Meet our bots!</p>
      </section>
      <section className="shadow-container">
        <h2 style={{color: '#fff'}}>Upcoming Events</h2>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=theexperimentaldivision%40gmail.com&ctz=UTC"
            style={{border: 0, width: '100%', height: '500px', borderRadius: '10px'}}
            frameBorder="0"
            scrolling="no"
            title="Google Calendar"
          ></iframe>
        </div>
      </section>
      <section className="shadow-container">
        <h2 style={{color: '#fff'}}>Get Involved</h2>
        <img className="dummy-img" src="/images/robot-build.jpg" alt="Building Robots" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur cursus, nisl erat dictum enim, nec dictum urna erat euismod erat.</p>
        <p>Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, nec dictum urna erat euismod erat.</p>
      </section>
    </div>
  );
}

export default Home;