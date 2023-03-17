import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog, faFile } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div id="contact" className='section'>
      <div className="contact__links">
        <a href="https://github.com/chaevivin" target="blank">
          <FontAwesomeIcon icon={faGithub} className="contact__icon" />
          <p className="contact__url">GITHUB</p>
        </a>
        <a href="https://velog.io/@chaevivi" target="blank">
          <FontAwesomeIcon icon={faBlog} className="contact__icon" /> 
          <p className="contact__url">BLOG</p>
        </a>
        <a href="https://shy-gardenia-3b6.notion.site/cd2d214fc35743aa97889ae50e3462e7i" target="blank">
          <FontAwesomeIcon icon={faFile} className="contact__icon" /> 
          <p className="contact__url">RESUME</p>
        </a>
      </div>
      <p className="contact__right">Copyright © Chaebin Jeong. All rights reserved.</p>
    </div>
  );
}

