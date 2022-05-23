import Topbar from './components/Topbar/Topbar';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import './app.scss';
import React, { useEffect } from 'react';
import Load from './components/Loading-screen/Load';

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };
  window.addEventListener('load', handleLoading);

  useEffect(() => {
    return () => window.removeEventListener('load', handleLoading);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Load />
      ) : (
        <div className="app">
          <Topbar />
          <div className="parts">
            <Intro />
            <About />
            <Projects />
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
}
