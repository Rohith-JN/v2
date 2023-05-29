import '../styles/topbar.scss';
import { useRef } from 'react';

const Topbar = () => {
  const checkboxes: any = useRef()

  const timeout = () => {
    setTimeout(() => {
      if (window.location.pathname === '/') {
        uncheckAll();
      }
    }, 600);
  };

  function check(checked: boolean = true) {
    checkboxes.forEach((checkbox: { checked: boolean; }) => {
      checkbox.checked = checked;
    });
  }

  function uncheckAll() {
    check(false);
  }

  return (
    <div className="nav">
      <div className="navbar"
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="900"
        data-aos-easing="ease"
        data-aos-mirror="false"
        data-aos-once="true">
        <div className="item">
        </div>
        <div className="item">
          <span>
            <a href="#Home" className="link">
              {'{'}HOME{'}'}
            </a>
          </span>
        </div>
        <div className="item">
          <span>
            <a href="#About" className="link">
              {'{'}ABOUT{'}'}
            </a>
          </span>
        </div>
        <div className="item">
          <span>
            <a href="#Projects" className="link">
              {'{'}PROJECTS{'}'}
            </a>
          </span>
        </div>
        <div className="item">
          <span>
            <a href="#Contact" className="link">
              {'{'}CONTACT{'}'}
            </a>
          </span>
        </div>
      </div>
      <div className="nav-menu">
        <div id="menuToggle">
          <input type="checkbox" className="checkbox" ref={checkboxes} />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li>
              <a href="#Home" className="link" onClick={timeout}>
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="link" onClick={timeout}>
                About
              </a>
            </li>
            <li>
              <a href="#Projects" className="link" onClick={timeout}>
                Projects
              </a>
            </li>
            <li>
              <a href="#Contact" className="link" onClick={timeout}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
