import '../styles/project.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Project({ heading, para, language, url, color, text }) {
  const style = { "--color": color } as React.CSSProperties;

  return (
    <div className="Project" style={style}>
      <div className="strip"></div>
      <h2>{heading}</h2>
      <br></br>
      <p>{para}</p>
      <br></br>
      <p className="Language">Tech stack: {language}</p>
      <a href={url}>
        <button className="raise">{text}</button>
      </a>
    </div>
  );
}

export default Project;
