import '../styles/topbar.scss';
import pi from '../assets/pi.jpg';

const Topbar = () => {

  return (
    <div className="navbar">
      <div className="left" data-aos="fade-down"
        data-aos-offset="150"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease"
        data-aos-mirror="false"
        data-aos-once="true">
        <img src={pi} width={40} style={{ borderRadius: "30px", border: "2px solid white" }}></img>
      </div>
      <div className="right" data-aos="fade-down"
        data-aos-offset="150"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease"
        data-aos-mirror="false"
        data-aos-once="true">
        <nav>
          <ul>
            <li><a href="#Home">
              HOME
            </a></li>
            <li>
              <a href="#Projects">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#Contact">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Topbar;
