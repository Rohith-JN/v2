import React from 'react';
import './projects.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Projects() {
  return (
    <div className="Projects" id="Projects">
      <div className="heading">
        <h1>PROJECTS</h1>
      </div>
      <div class="entries">
        <div
          class="entry"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="900"
          data-aos-easing="ease"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div class="title">Categorize-CLI</div>
          <div class="body">
            <p>
              Categorize-CLI is a command-line-tool made using python to
              organize files in a given directory based on categories like
              extension, keyword, creation time, etc.
            </p>
            <p>Languages: Python</p>
            <p>
              Check out the project on <a href="https://github.com/Rohith-JN/Categorize-CLI">Github</a> |{' '}
              <a href="https://pypi.org/project/categorize-cli/">PyPI</a>
            </p>
          </div>
        </div>
        <div
          class="entry"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="900"
          data-aos-easing="ease"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div class="title">Friday</div>
          <div class="body">
            <p>
              A minimal but highly functional assistant made to automate common
              Windows tasks and other apps like Telegram.
            </p>
            <p>Languages: Python</p>
            <p>
              Check out the project on <a href="https://github.com/Rohith-JN/Friday">Github</a>
            </p>
          </div>
        </div>
        <div
          class="entry"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="900"
          data-aos-easing="ease"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div class="title">Tasks</div>
          <div class="body">
            <p>
              A minimal Todo / Reminders app to quickly add reminders or todos
              and recieve notifications, made using Flutter, GETX for
              state-management and get_storage for storage.
            </p>
            <p>Languages: Dart</p>
            <p>
              Check out the project on <a href="https://github.com/Rohith-JN/Tasks">Github</a>
            </p>
          </div>
        </div>
        <div
          class="entry"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="900"
          data-aos-easing="ease"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div class="title">Clock</div>
          <div class="body">
            <p>
              A minimal clock app inspired by the design of the clock app in
              Google Android OS.
            </p>
            <p>Features:</p>
            <p>
              • View the current time through analog clock or digital clock
              <br></br>• Get time of various locations<br></br>• Stopwatch
            </p>
            <p>Languages: Dart</p>
            <p>
              Check out the project on <a href="https://github.com/Rohith-JN/Clock">Github</a>
            </p>
          </div>
        </div>
        <div
          class="entry"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="900"
          data-aos-easing="ease"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div class="title">Neumorphic JS Auth-Page</div>
          <div class="body">
            <p>
              A Neumorphic authentication page made using HTML, SCSS and
              Javascript for Frontend and Firebase for backend.
            </p>
            <p>Languages: Javascript | HTML | CSS | SCSS</p>
            <p>
              Check out the project on <a href="https://github.com/Rohith-JN/JS-authentication">Github</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
