import React, { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';
import '../styles/about.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const About = () => {
  const IsTagCloudLoaded = useRef(false);

  useEffect(() => {
    const Tags = [
      'Python',
      'JavaScript',
      'TypeScript',
      'Dart',
      'Tailwind',
      'SASS',
      'Flutter',
      'React.js',
      'Next.js',
      'Firebase',
      'XD',
      'Linux',
      'JSON',
      'git',
      'Nvim',
      'Lua'
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
            Hi, I am Rohith, I am a <span>self taught junior developer</span> located in India passionate about{' '}
            <span>software</span> and <span>automation</span>.
          </p>
          <br></br>
          <p>
            I like to build interactive and minimal websites using frameworks like{' '}
            <span>React.js</span>, and building backend tools with {' '} languages like <span>Python</span> and <span>Rust</span>
          </p>
          <br></br>
        </div>
      </div>
      <div className="right">
        <span
          className="content"
          onClick={(e: any) =>
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
