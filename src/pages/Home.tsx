import Socials from '../components/Socials';
import '../styles/home.scss';

const Home = () => {

  return (
    <div className="Home" id="Home">
      <div className="heading">
        <p>Hi, my name is</p>
        <p className="popout">
          <h1>Rohith J</h1>
          <h1>Nambiar</h1>
        </p>
        <span>
          I am a{' '}
          <span style={{ textDecoration: 'underline' }}>Junior developer</span>
        </span>
        <span>
          Specialising in{' '}
          <span style={{ textDecoration: 'underline' }}>web development</span>
        </span>
      </div>
      <Socials />
      <div className="scroll">
        <p>Scroll down</p>
        <i className="arrow down"></i>
      </div>
    </div>
  );
}

export default Home;
