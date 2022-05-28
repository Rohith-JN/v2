import './topbar.scss';

function Topbar() {
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
    </div>
  );
}

export default Topbar;
