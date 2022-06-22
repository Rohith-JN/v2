import React, { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';
import './about.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function About() {
  const IsTagCloudLoaded = useRef(false);

  useEffect(() => {
    const Tags = [
      'Python',
      'Javascript',
      'HTML',
      'CSS',
      'Tailwind',
      'SASS',
      'Dart',
      'Flutter',
      'React JS',
      'Firebase',
      'Azure',
      'XD',
      'Figma',
      'Linux',
      'JSON',
      'git',
      'Vscode',
    ];

    if (IsTagCloudLoaded.current) return;

    TagCloud('.content', Tags, {
      radius: 350,
      maxSpeed: 'fast',
      initSpeed: 'fast',
      direction: 135,
      keep: true,
    });

    IsTagCloudLoaded.current = true;
  }, []);

  return (
    <div className="About" id="About">
      <div
        className="left"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-mirror="false"
        data-aos-once="true"
      >
        <div className="heading">
          <h1>ABOUT</h1>
        </div>
        <div className="para">
          <p>
            I am a high school student located in India, passionate about{' '}
            <span>UI designing</span>, <span>android development</span>,{' '}
            <span>web development</span> and <span>automation</span>.
          </p>
          <br></br>
          <p>
            I like to build interactive and minimal websites using{' '}
            <span>React</span>, When I am not building something for the web, I
            automate something using <span>Python</span>
          </p>
          <br></br>
          <p>
            <a href="#Contact">Contact me</a>
          </p>
        </div>
      </div>
      <div className="right">
        <span
          className="content"
          onClick={(e) =>
            window.open(
              `https://www.google.com/search?q=${e.target.innerText}`,
              '_blank'
            )
          }
        ></span>
      </div>
    </div>
  );
}

export default About;
