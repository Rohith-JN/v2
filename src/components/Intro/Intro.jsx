import '../Social-menu/Social-menu.scss';
import SocialMenu from '../Social-menu/Social-menu';
import './intro.scss';
import { init } from "ityped";
import { useEffect, useRef } from "react";


function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500, 
      backSpeed:60,
      strings: ["Student", "Geek", "Tech Enthusiast"],
    });
  }, []);

  return (
    <>
    <div className='intro' id = "About">
      <p class="popout">
      <span>Hi</span><span>,</span>
      <span>I</span><span>Am</span><span>Rohith</span><span>.</span><br></br>
      </p>
      <p class="popout-1">
        <span>Trying</span><span>to</span>
        <span>Learn</span><span>As</span><span>Much</span><span>As</span><span>I</span><span>Can</span>
      </p>
      <div className="wrapper">
        <h3>A  <span style = {{color: 'lightblue'}}ref={textRef}></span></h3>
      </div>
    </div>
    <SocialMenu />
    </>
  )
}

export default Intro