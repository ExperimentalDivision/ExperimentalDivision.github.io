import React from 'react';
import './Resources.css';
import '../global.css';

function Resources() {
  return (
    <div style={{maxWidth: '900px', margin: '0 auto'}}>
      <h1 className="page-title">Resources</h1>
      <section className="shadow-container">
        <h2 style={{color: '#fff'}}>Helpful Videos</h2>
        <p>We pride ourselves on making combat robotics more accessible to beginners. 
          For this reason, all of our YouTube content is public, and we've also included
          other resources that you might find helpful when getting started.</p>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem'}}>
          <iframe width="400" height="220" src="https://www.youtube.com/embed/ub266dZmodA?si=ghUgbxivyqU_PQzm" title="EXD CAD Training EP. 1" frameBorder="0" allowFullScreen></iframe>
          <iframe width="400" height="220" src="https://www.youtube.com/embed/QTminssccr0?si=MSFQRx-mXgQRKDtR" title="EXD CAD Training EP. 2" frameBorder="0" allowFullScreen></iframe>
        </div>
      </section>
      <section className="shadow-container">
        <h2 style={{color: '#fff'}}>Information & Guides</h2>
        <ul>
          <li><a href="https://www.riobotz.com/riobotz-combot-tutorial" target="_blank" rel="noopener noreferrer">Riobotz Tutorial</a> - A thorough and comprehensive guide to building a combat robot.</li>
          <li><a href="https://repeat-robotics.com/handbook/" target="_blank" rel="noopener noreferrer">Repeat Robotics Combat Tutorial</a> - Tips from a world-renowned combat roboticist.</li>
          <li><a href="https://sparc.tools/" target="_blank" rel="noopener noreferrer">SPARC Guidelines</a> - Some ground rules for what your combat robot can/can't do.</li>
        </ul>
      </section>
    </div>
  );
}

export default Resources;
