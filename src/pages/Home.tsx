import Socials from '../components/Socials';
import '../styles/home.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Home = () => {
    return (
        <div className='Home' id="Home">
            <div className='Container'>
                <div className='header'>
                    <h4>Hi, my name is</h4>
                </div>
                <div className='title'>
                    <h1>Rohith J Nambiar</h1>
                    <h1 className='secondary'>Coding The Path To Success</h1>
                </div>
                <div className='footer'>
                    <p>I'm a junior developer located in India, currently studying in 12th grade. I build
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
                <div className="footer-btn">
                    <a href='#Contact'><button className="slide">
                        Contact me!
                    </button></a>
                </div>
            </div>
            <Socials />
        </div>
    );
}

export default Home