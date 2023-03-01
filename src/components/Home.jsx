import React from 'react';

export default function Home() {
  return (
    <div id="home">
      <div className="home__container">
        <img
            src="img/profile.jpg"
            alt="chaevivin's profile photo"
            className="home__avatar"
          />
          <h1 className="home__title">Welcome to my vivid coding life!</h1>
          <h2 className="home__description">
            Developer with strong attention to detail.
          </h2>
          <h3>디테일에 강한 개발자 정채빈입니다.</h3>
          <button className="home__contact">Contact me</button>
      </div>
    </div>
  );
}

