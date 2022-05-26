import React from 'react';
import './socials.scss';

function Socials() {
  return (
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
    </div>
  );
}

export default Socials;
