import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import './app.scss';

function App() {
  return (
    <>
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
      </div>
    </div>
    </>
  );
}

export default App;
