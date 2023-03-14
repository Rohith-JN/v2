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
      'TypeScript',
      'Dart',
      'Tailwind',
      'Flutter',
      'React.js',
      'Next.js',
      'Firebase',
      'XD',
      'git',
      'Redux',
      'PostgreSQL',
      'node.js',
      'express',
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
            Hi, I'm a driven and passionate junior developer with over 2 years of experience in developing web applications.
          </p>
          <br></br>
          <p>My expertise lies in using technologies such as <span onClick={() =>
            window.open(
              `https://www.google.com/search?q=React.js`,
              '_blank'
            )
          } style={{ cursor: "pointer" }}>React</span>, <span onClick={() =>
            window.open(
              `https://www.google.com/search?q=python`,
              '_blank'
            )
          } style={{ cursor: "pointer" }}>Python</span>, to create seamless and user-friendly experiences. I have a strong desire to continuously improve and learn new skills. When I'm not coding, you can find me exploring new technologies and experimenting with different programming languages.
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
