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
      'git',
      'Redux',
      'PostgreSQL',
      'Node.js',
      'Express.js',
      'TypeORM',
      'GraphQL',
      'Docker',
      'URQL'
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
        data-aos-duration="500"
        data-aos-easing="ease"
        data-aos-mirror="false"
        data-aos-once="true"
      >
        <div className="heading">
          <h1>ABOUT</h1>
        </div>
        <div className="para">
          <p>
            I'm a driven and passionate software developer with over 2 years of experience in developing web applications.
          </p>
          <br></br>
          <p>My expertise lies in using technologies such as <span onClick={() =>
            window.open(
              `https://www.google.com/search?q=React.js`,
              '_blank'
            )
          } style={{ cursor: "pointer" }}>React</span> to create seamless and user-friendly experiences. I have a strong desire to continuously improve and learn new skills.
          </p>
          <br></br>
          <p> Currently learning and developing full-stack sites using the <span onClick={() =>
            window.open(
              `https://www.google.com/search?q=React.js`,
              '_blank'
            )
          } style={{ cursor: "pointer" }}>PERN</span> stack along with <span onClick={() =>
            window.open(
              `https://www.google.com/search?q=React.js`,
              '_blank'
            )
          } style={{ cursor: "pointer" }}>GraphQL</span> or <span onClick={() =>
            window.open(
              `https://www.google.com/search?q=React.js`,
              '_blank'
            )
          } style={{ cursor: "pointer" }}>Rest APIs</span>
          </p>
        </div>
      </div>
      <div className="right">
        <span
          className="content"
        ></span>
      </div>
    </div>
  );
}

export default About;
