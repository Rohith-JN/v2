import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Works/Projects";
import Contact from "./components/Contact/Contact";
import './app.scss';

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="parts">
        <Intro />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
