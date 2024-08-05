import Socials from '../components/Socials';
import '../styles/home.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Home = () => {
    return (
        <div className='Home' id="Home">
            <div className='home-container'>
                <div className='header' data-aos={(window.innerWidth > 500) ? "fade-up" : ""}
                    data-aos-offset="200"
                    data-aos-delay="500"
                    data-aos-duration="500"
                    data-aos-easing="ease"
                    data-aos-mirror="false"
                    data-aos-once="true">
                    <h4>Hi, my name is</h4>
                </div>
                <div className='title' data-aos={(window.innerWidth > 500) ? "fade-up" : ""}
                    data-aos-offset="200"
                    data-aos-delay="700"
                    data-aos-duration="500"
                    data-aos-easing="ease"
                    data-aos-mirror="false"
                    data-aos-once="true">
                    <h1>Rohith Nambiar</h1>
                    <h1 className='secondary'>Coding The Path To Success</h1>
                </div>
                <div className='footer' data-aos={(window.innerWidth > 500) ? "fade-up" : ""}
                    data-aos-offset="200"
                    data-aos-delay="900"
                    data-aos-duration="500"
                    data-aos-mirror="false"
                    data-aos-once="true">
                    <p>I'm a First-Year BTech IT Student at VIT Vellore. I build
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
                <div className="footer-btn" data-aos={(window.innerWidth > 500) ? "fade-up" : ""}
                    data-aos-offset="200"
                    data-aos-delay="1100"
                    data-aos-duration="500"
                    data-aos-easing="ease"
                    data-aos-mirror="false"
                    data-aos-once="true">
                    <button className="slide" onClick={() => window.open(
                        `https://github.com/Rohith-JN`,
                        "__blank"
                    )}>
                        Github
                    </button>
                </div>
            </div>
            <Socials />
        </div>
    );
}

export default Home