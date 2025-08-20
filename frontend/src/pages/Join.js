import React from 'react';
import './Join.css';
import '../global.css';

function Join() {
  return (
    <div style={{maxWidth: '900px', margin: '0 auto'}}>
      <h1 className="page-title">Join Us</h1>
      <section className="shadow-container">
        <h2 style={{color: '#fff'}}>Become a Member</h2>
        <img className="dummy-img" src="/images/robot-join.jpg" alt="Join the Club" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur cursus, nisl erat dictum enim, nec dictum urna erat euismod erat.</p>
        <p>Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, nec dictum urna erat euismod erat.</p>
      </section>
      <section className="shadow-container">
        <h2 style={{color: '#fff'}}>Benefits</h2>
        <img className="dummy-img" src="/images/robot-benefits.jpg" alt="Member Benefits" />
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Pellentesque euismod, nisi eu consectetur cursus.</li>
          <li>Suspendisse potenti. Etiam euismod, urna eu tincidunt consectetur.</li>
        </ul>
      </section>
    </div>
  );
}

export default Join;