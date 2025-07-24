import Socials from '../components/Socials';
import '../styles/home.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Home = () => {
    var fadeUp = (window.innerWidth > 500) ? "fade-up" : ""
    return (
        <div className='Home' id="Home">
            <div className='home-container'>
                <div className='header' >
                    <h4>Hi, my name is</h4>
                </div>
                <div className='title' data-aos={fadeUp}
                    data-aos-offset="200"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    data-aos-easing="ease"
                    data-aos-mirror="false"
                    data-aos-once="true">
                    <h1>Rohith Nambiar</h1>
                </div>
                <div className='footer' data-aos={fadeUp}
                    data-aos-offset="200"
                    data-aos-delay="900"
                    data-aos-duration="500"
                    data-aos-mirror="false"
                    data-aos-once="true">
                    <p>I'm a BTech IT Student at <span onClick={() => window.open(
                        `https://www.google.com/search?q=VIT Vellore`,
                        '_blank'
                    )} style={{ cursor: "pointer" }}>VIT Vellore</span>. I build
                        interactive, minimal websites using libraries like <span onClick={() =>
                            window.open(
                                `https://www.google.com/search?q=React.js`,
                                '_blank'
                            )
                        } style={{ cursor: "pointer" }} >React</span>, Currently learning the <span onClick={() =>
                            window.open(
                                `https://www.google.com/search?q=PERN%20Stack`,
                                '_blank'
                            )
                        } style={{ cursor: "pointer" }}>PERN</span> stack, specialising in <span onClick={() =>
                            window.open(
                                `https://www.google.com/search?q=full-stack%20web%20development`,
                                '_blank'
                            )
                        } style={{ cursor: "pointer" }}>full-stack</span> web development.
                    </p>
                </div>
                <div className="footer-btn" data-aos={fadeUp}
                    data-aos-offset="200"
                    data-aos-delay="1100"
                    data-aos-duration="500"
                    data-aos-easing="ease"
                    data-aos-mirror="false"
                    data-aos-once="true">
                    <button
                        className="slide"
                        onClick={() => window.open("/resume.pdf", "_blank")}
                    >
                        Resume
                    </button>
                </div>
            </div>
            <Socials />
        </div>
    );
}

export default Home