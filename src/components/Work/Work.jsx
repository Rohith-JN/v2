import React from 'react';
import './work.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Work({ heading, para, language, url, color }) {
  return (
    <div className="Work" style={{ '--color': color }}>
      <div className="strip"></div>
      <h2>{heading}</h2>
      <br></br>
      <p>{para}</p>
      <br></br>
      <p className="Language">Tech stack: {language}</p>
      <a href={url}>
        <button class="raise">View it on github</button>
      </a>
    </div>
  );
}

export default Work;
