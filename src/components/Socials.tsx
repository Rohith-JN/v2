import '../styles/socials.scss';

const Socials = () => {
  return (
    <div className="main-menu">
      <div className="social-menu" data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease"
        data-aos-mirror="false"
        data-aos-once="true">
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
          <a
            href="https://www.linkedin.com/in/rohith-nambiar-496a52240/"
            target="__blank"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
      </div>
    </div>
  );
};

export default Socials;
