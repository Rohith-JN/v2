import Topbar from './components/Topbar/Topbar';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import './app.scss';
import React, { useEffect, useState } from 'react';
import Load from './components/Loading-screen/Load';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
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
