import './intro.scss';
import { init } from 'ityped';
import React, { useEffect, useRef } from 'react';

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Student', 'Geek', 'Tech Enthusiast'],
    });
  }, []);

  return (
    <div className="intro" id="Intro">
      <div className="heading">
        <p className="popout">
          <h1>ROH I TH </h1>
          <h1>NAMB I AR</h1>
        </p>
        <span ref={textRef}></span>
      </div>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      ></link>
      <div className="social-menu">
        <ul>
          <li>
            <a href="https://twitter.com/RohithNambiar4" target="__blank">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/Rohith-JN" target="__blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://t.me/RohithJN" target="__blank">
              <i className="fa fa-telegram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="scroll">
        <p>Scroll down</p>
        <i class="arrow down"></i>
      </div>
    </div>
  );
}

export default Intro;
