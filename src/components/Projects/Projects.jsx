import React from 'react';
import './projects.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Work from '../Work/Work';

AOS.init();

function Projects() {
  return (
    <div className="Projects" id="Projects">
      <div className="heading">
        <h1>PROJECTS</h1>
      </div>
      <div
        className="row-1"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-mirror="false"
        data-aos-once="true"
      >
        <Work
          heading={'Categorize-CLI'}
          para={
            'A command-line-tool made to help you categorize/organize files in a given directory'
          }
          language={'Python'}
          url={'https://github.com/Rohith-JN/Categorize-CLI'}
          color="#e4cb58"
        />
        <Work
          heading={'Friday'}
          para={
            'A simple Personal assistant to automate windows made using Python'
          }
          language={'Python'}
          url={'https://github.com/Rohith-JN/Friday'}
          color="#e4cb58"
        />
        <Work
          heading={'Tasks'}
          para={
            'A simple Todo/Reminders app made using Flutter, Getx for state management and get_storage'
          }
          language={'Flutter, Dart'}
          url={'https://github.com/Rohith-JN/Tasks'}
          color="#58d8e4"
        />
      </div>
      <div
        className="row-2"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease"
        data-aos-mirror="false"
        data-aos-once="true"
      >
        <Work
          heading={'Clock'}
          para={
            'A minimal clock app made using Flutter inspired by the clock app in Google pixels'
          }
          language={'Flutter, Dart'}
          url={'https://github.com/Rohith-JN/Clock'}
          color="#58d8e4"
        />
        <Work
          heading={'JS-authentication'}
          para={
            'A simple authentication service made using javascript, HTML, CSS for Frontend and Firebase'
          }
          language={'Javascript, HTML, SASS'}
          url={'https://github.com/Rohith-JN/JS-authentication'}
          color="#e35f5f"
        />
      </div>
    </div>
  );
}

export default Projects;
