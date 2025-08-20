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
        <img className="dummy-img" src="/images/robot-logo.jpg" alt="Club Logo" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur cursus, nisl erat dictum enim, nec dictum urna erat euismod erat.</p>
        <p>Suspendisse potenti. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, nec dictum urna erat euismod erat.</p>
      </section>
      <section className="shadow-container">
        <h2 style={{color: '#fff'}}>Our History</h2>
        <img className="dummy-img" src="/images/robot-history.jpg" alt="Club History" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur cursus, nisl erat dictum enim, nec dictum urna erat euismod erat.</p>
        <p>Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, nec dictum urna erat euismod erat.</p>
      </section>
      <section className="shadow-container">
        <h2 style={{color: '#fff'}}>Our Team</h2>
        <img className="dummy-img" src="/images/robot-team2.jpg" alt="Team Members" />
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Pellentesque euismod, nisi eu consectetur cursus.</li>
          <li>Suspendisse potenti. Etiam euismod, urna eu tincidunt consectetur.</li>
        </ul>
      </section>
    </div>
  );
}

export default About;