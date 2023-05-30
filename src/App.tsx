import Topbar from './components/Topbar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import './app.scss';
import Projects from './pages/Projects';

export default function App() {
    return (
        <div>
            <div className="app">
                <Topbar />
                <div className="parts">
                    <Home />
                    <Projects />
                    <Contact />
                </div>
            </div>
        </div>
    );
}
