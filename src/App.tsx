import Topbar from './components/Topbar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import './App.scss';
import Projects from './pages/Projects';

export default function App() {
    return (
        <div>
            <div className="app">
                <Topbar />
                <div className="parts">
                    <Home />
                    <About />
                    <Projects />
                    <Contact />
                </div>
            </div>
        </div>
    );
}
