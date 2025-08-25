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
  { label: "Team", src: "/images/team.jpg" },
  { label: "Whopper", src: "/images/whopper.jpg" },
  { label: "PLAnts", src: "/images/PLAnts.jpg" },
  { label: "Bevo", src: "/images/bevo.jpg" },
  { label: "TRR", src: "/images/trr.jpg" },
  { label: "Lineup", src: "/images/lineup.png" },
  { label: "TestDrive", src: "/images/testDrive.jpg" }
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
        <p>Want to see more of what we do? <a href="/gallery">Meet our bots!</a></p>
      </section>
      <section className="shadow-container">
        <h2 style={{color: '#fff'}}>Upcoming Events</h2>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=theexperimentaldivision%40gmail.com&ctz=America%2FChicago"
            style={{border: 0, width: '100%', height: '600px', borderRadius: '10px'}}
            frameBorder="0"
            scrolling="no"
            title="Google Calendar"
          ></iframe>
        </div>
      </section>
      <section className="shadow-container">
        <h2 style={{color: '#fff'}}>Get Involved</h2>
        {/* <img className="dummy-img" src="/images/robot-build.jpg" alt="Building Robots" /> */}
        <p>Interested in getting involved? We would love to have you as a member! We accept members from all backgrounds and skill levels- 
          there is no major requirement. We meet every Friday from 3-5 PM. See <a href="/join">how to join</a> for more information.
        </p>
        <p>Want to get a head start on your robotics journey? Check out our <a href="/resources">resources page</a> for tutorials and guides.
        </p>
      </section>
    </div>
  );
}

export default Home;