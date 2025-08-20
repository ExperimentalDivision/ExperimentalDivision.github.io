import React from 'react';
import './Resources.css';
import '../global.css';

function Resources() {
  return (
    <div style={{maxWidth: '900px', margin: '0 auto'}}>
      <h1 className="page-title">Resources</h1>
      <section className="shadow-container">
        <h2 style={{color: '#fff'}}>Helpful Videos</h2>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem'}}>
          <iframe width="400" height="220" src="https://www.youtube.com/embed/8pTEmbeENF4" title="Combat Robotics Documentary" frameBorder="0" allowFullScreen></iframe>
          <iframe width="400" height="220" src="https://www.youtube.com/embed/1QwFvQb7bqg" title="How to Build a Combat Robot" frameBorder="0" allowFullScreen></iframe>
        </div>
      </section>
      <section className="shadow-container">
        <h2 style={{color: '#fff'}}>Information & Guides</h2>
        <ul>
          <li><a href="https://www.robotmarketplace.com/" target="_blank" rel="noopener noreferrer">Robot Marketplace</a> - Parts and guides for building robots.</li>
          <li><a href="https://battlebots.com/build/" target="_blank" rel="noopener noreferrer">BattleBots Build Guide</a> - Official tips for combat robotics.</li>
          <li><a href="https://www.youtube.com/user/BattleBots" target="_blank" rel="noopener noreferrer">BattleBots YouTube Channel</a> - Inspiration and matches.</li>
        </ul>
      </section>
    </div>
  );
}

export default Resources;
