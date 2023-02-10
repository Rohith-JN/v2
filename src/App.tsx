import ReactDOM from "react-dom/client";
import Topbar from './components/Topbar';
import Contact from './pages/Contact';
import About from './pages/About';
import './App.scss';
import React, { useEffect } from 'react';
import Projects from './pages/Projects';

export default function App() {
    return (
        <div>
            <div className="app">
                <Topbar />
                <div className="parts">
                    <About />
                    <Projects />
                    <Contact />
                </div>
            </div>
        </div>
    );
}
