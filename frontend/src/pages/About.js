import React from 'react';
import './About.css';
import '../global.css';

function About() {
  return (
    <div style={{maxWidth: '900px', margin: '0 auto'}}>
      {/* Banner Section */}
      <h1 className="page-title">About Us</h1>
      <section className="shadow-container">
        <h2 style={{color: '#fff'}}>Who We Are</h2>
        {/* <img className="dummy-img" src="/images/robot-logo.jpg" alt="Club Logo" /> */}
        <p>The Experimental Division is the University of Texas's combat robotics club. 
          We focus on teaching and inspiring students of all majors to build competitive robots for competitions across the nation. </p>
      </section>
      <section className="shadow-container">
        <h2 style={{color: '#fff'}}>Our History</h2>
        {/* <img className="dummy-img" src="/images/robot-history.jpg" alt="Club History" /> */}
        <p>Our club was founded in 2024, by a group of UT students who wanted to foster a passionate community of roboticists to compete in events across Texas. 
          What started as a group of friends creating hobby robots grew into the largest university combat robotics club in Texas.</p>
      </section>
    </div>
  );
}

export default About;