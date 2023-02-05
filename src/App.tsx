import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from './components/Topbar';
import Contact from './pages/Contact';
import About from './pages/About';
import './App.scss';
import React, { useEffect } from 'react';
import Projects from './pages/Projects';

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
        <BrowserRouter>
            <Topbar />
                <Routes>
                    <Route>
                        <Route index element={<About />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                </Routes>
        </BrowserRouter>
    );
}
