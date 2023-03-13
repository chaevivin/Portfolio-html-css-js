import React from 'react';
import AboutCard from './AboutCard';

export default function About() {
  return (
    <div id="about" className='section'>
      <div className="section__container">
        <h1>About me</h1>
        <p className="about__sub">
          I'm an aspiring Front-end student. I'm really passionate and love coding
          & solving problems.
        </p>
        <p className="about__hover">hover ID Card 👇</p>
        <AboutCard />
      </div>
    </div>
  );
}

