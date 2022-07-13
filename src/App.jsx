import Topbar from './components/Topbar/Topbar';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import './app.scss';
import React, { useEffect } from 'react';
import Load from './components/Loading-screen/Load';
import DocumentMeta from 'react-document-meta';

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };
  window.addEventListener('load', handleLoading);

  useEffect(() => {
    return () => window.removeEventListener('load', handleLoading);
  }, []);

  const meta = {
    title: 'Rohith J Nambiar',
    description:
      'Hi I am Rohith Nambiar a junior developer aspiring to be a full-stack web developer, specializing in React.js, Python, APIs',
    canonical: 'https://rohithnambiar.in/',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'portfolio, about, projects, contact',
      },
    },
  };

  return (
    <DocumentMeta {...meta}>
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
    </DocumentMeta>
  );
}
