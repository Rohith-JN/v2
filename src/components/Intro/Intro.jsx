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
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@700&display=swap" rel="stylesheet"></link>
        <link href = "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel = "stylesheet"></link>
        <div className='social-menu'>
            <ul>
                <li><a href = "https://twitter.com/RohithNambiar4" target = "__blank"><i class="fa fa-twitter"></i></a></li>
                <li><a href = "https://github.com/Rohith-JN" target = "__blank"><i class="fa fa-github"></i></a></li>
                <li><a href = "https://t.me/RohithJN" target = "__blank"><i class="fa fa-telegram"></i></a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Intro