import './topbar.scss';

function Topbar() {
  const timeout = () => {
    setTimeout(() => {
      if (window.location.pathname === '/') {
        uncheckAll();
      }
    }, 600);
  };

  function check(checked = true) {
    const checkboxes = document.querySelectorAll('input.checkbox');
    checkboxes.forEach((checkbox) => {
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
            <span>
              <a href="#Intro" className="link">
                HOME
              </a>
            </span>
          </div>
          <div className="item">
            <span>
              <a href="#About" className="link">
                About
              </a>
            </span>
          </div>
          <div className="item">
            <span>
              <a href="#Projects" className="link">
                PROJECTS
              </a>
            </span>
          </div>
          <div className="item">
            <span>
              <a href="#Contact" className="link">
                CONTACT
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="nav-menu">
        <div id="menuToggle">
          <input type="checkbox" className="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li>
              <a href="#Intro" className="link" onClick={timeout}>
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
