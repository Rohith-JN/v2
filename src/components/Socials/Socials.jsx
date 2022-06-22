import React from 'react';
import './socials.scss';

function Socials() {
  return (
    <div className="main-menu">
      <div className="social-menu">
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
        <li>
          <a
            href="https://www.linkedin.com/in/rohith-nambiar-496a52240/"
            target="__blank"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://stackoverflow.com/users/15747757/rohith-nambiar"
            target="__blank"
          >
            <i className="fa fa-stack-overflow"></i>
          </a>
        </li>
      </div>
    </div>
  );
}

export default Socials;
