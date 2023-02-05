import '../styles/topbar.scss';
import { useRef } from 'react';
import { Outlet, Link } from "react-router-dom";

const Topbar = () => {
  const checkboxes: any = useRef()

  const timeout = () => {
    setTimeout(() => {
      if (window.location.pathname === '/') {
        uncheckAll();
      }
    }, 600);
  };

  function check(checked:boolean = true) {
    checkboxes.forEach((checkbox: { checked: boolean; }) => {
      checkbox.checked = checked;
    });
  }

  function uncheckAll() {
    check(false);
  }

  return (
    <div className="nav">
      <div className="navbar">
        <div className="menu">
          <div className="label">Navbar</div>
          <div className="spacer"></div>
          <div className="item">
          </div>
          <div className="item">
            <span>
              <Link to="/" className="link">
                ABOUT
              </Link>
            </span>
          </div>
          <div className="item">
            <span>
              <Link to="/projects" className="link">
                PROJECTS
              </Link>
            </span>
          </div>
          <div className="item">
            <span>
              <Link to="/contact" className="link">
                CONTACT
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="nav-menu">
        <div id="menuToggle">
          <input type="checkbox" className="checkbox" ref = {checkboxes}/>
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li>
              <Link to="/" className="link" onClick={timeout}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="link" onClick={timeout}>
               Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link" onClick={timeout}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
