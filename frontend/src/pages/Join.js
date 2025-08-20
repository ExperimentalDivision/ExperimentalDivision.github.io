import React from 'react';
import './Join.css';
import '../global.css';

function Join() {
  return (
    <div style={{maxWidth: '900px', margin: '0 auto'}}>
      <h1 className="page-title">Join Us</h1>
      <section className="shadow-container">
        <h2 style={{color: '#fff'}}>Become a Member</h2>
        <p>Interested in becoming a member? Come to our meetings: every Friday from 3-5 PM, usually in EER 1.504. Join our <a href="https://discord.gg/VPjuK8f5kq">Discord</a> for more information!</p>
        <p>Note: Members will be required to pay $40 dues via Zelle (preferred) or cash. See below for what benefits are included for members.</p>
      </section>
      <section className="shadow-container">
        <h2 style={{color: '#fff'}}>Benefits</h2>
        <p>After paying your membership dues, you will gain:</p>
        <ul>
          <li>An Experimental Division shirt</li>
          <li>Comped registration fees for external competitions</li>
          <li>Free registration for internal competitions</li>
          <li>Access to PLAnt kits (the electronic components necessary to make a combat robot)</li>
          <li>Access to the club's 3D-print queue</li>
          <li>Personalized design reviews and guidance</li>
        </ul>
        <img className="join-img" src="/images/EXD_Uniform_2024.png" alt="Club T Shirt" />
      </section>
    </div>
  );
}

export default Join;