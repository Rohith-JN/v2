import '../styles/projects.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Project from '../components/Project';

AOS.init();

const Projects = () => {
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
        <Project
          heading={'Categorize-CLI'}
          para={
            'A command-line-tool made to help you categorize/organize files in a given directory'
          }
          language={'Python'}
          url={'https://github.com/Rohith-JN/Categorize-CLI'}
          color="#e4cb58"
          text={'View it on github'}
        />
        <Project
          heading={'Friday'}
          para={
            'A simple personal assistant to automate Windows made using Python'
          }
          language={'Python'}
          url={'https://github.com/Rohith-JN/Friday'}
          color="#e4cb58"
          text={'View it on github'}
        />
        <Project
          heading={'Tasks'}
          para={
            'A simple todo/reminders app made using Flutter, Getx for state management and get_storage'
          }
          language={'Flutter, Dart'}
          url={'https://github.com/Rohith-JN/Tasks'}
          color="#58d8e4"
          text={'View it on github'}
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
        <Project
          heading={'Clock'}
          para={
            'A minimal clock app made using Flutter inspired by the clock app in Google pixels'
          }
          language={'Flutter, Dart'}
          url={'https://github.com/Rohith-JN/Clock'}
          color="#58d8e4"
          text={'View it on github'}
        />
        <Project
          heading={'npm-search'}
          para={'A site to view and compare npm-package stats'}
          language={'Next JS, Tailwind CSS, TypeScript'}
          color="#e35f5f"
          url={'http://npm-search-beige.vercel.app/'}
          text={'Demo'}
        />
        <Project
          heading={'Portfolio website'}
          para={
            'Since this felt like a project I put a lot of effort in, I decided to put it here!'
          }
          language={'React JS'}
          url={'https://github.com/Rohith-JN/personal-site'}
          color="#e35f5f"
          text={'View it on github'}
        />
      </div>
    </div>
  );
}

export default Projects;
