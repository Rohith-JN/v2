import '../styles/projects.css';
import { useEffect, useRef } from 'react';

const Projects = () => {
    const containerRef: any = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e: any) => {
            const cards = containerRef.current.getElementsByClassName("card");
            Array.from(cards).forEach((card: any) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            });
        };

        containerRef.current.addEventListener("mousemove", handleMouseMove);

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener("mousemove", handleMouseMove);
            }
        };
    }, []);

    return (
        <div className='Projects' id="Projects">
            <div id="cards" ref={containerRef}>
                <a href='https://github.com/Rohith-JN/Categorize-CLI' target="__blank" data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="900"
                    data-aos-easing="ease"
                    data-aos-mirror="false"
                    data-aos-once="true">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-info-wrapper">
                                <div className="card-info-title">
                                    <h2>Categorize-CLI</h2>
                                    <h4>A command-line-tool made to help you categorize/organize files in a given directory</h4>
                                </div>
                            </div>
                            <div className="card-info-wrapper">
                                <div className="card-info">
                                    <div className="card-info-title" style={{ wordSpacing: "20px" }}>
                                        <h4>{'<'}Python{'>'} {'<'}PyPi{'>'}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://github.com/Rohith-JN/Friday" target="__blank">
                    <div className="card" data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="150"
                        data-aos-duration="900"
                        data-aos-easing="ease"
                        data-aos-mirror="false"
                        data-aos-once="true">
                        <div className="card-content">
                            <div className="card-info-wrapper">
                                <div className="card-info-title">
                                    <h2>Friday</h2>
                                    <h4>A simple personal assistant to automate Windows made using Python</h4>
                                </div>
                            </div>
                            <div className="card-info-wrapper">
                                <div className="card-info">
                                    <div className="card-info-title">
                                        <h4>{'<'}Python{'>'}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://github.com/Rohith-JN/Tasks-Android" target="__blank">
                    <div className="card" data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="200"
                        data-aos-duration="900"
                        data-aos-easing="ease"
                        data-aos-mirror="false"
                        data-aos-once="true">
                        <div className="card-content">
                            <div className="card-info-wrapper">
                                <div className="card-info-title">
                                    <h2>Tasks-Android</h2>
                                    <h4>A minimal todo app made using Flutter for Android</h4>
                                </div>
                            </div>
                            <div className="card-info-wrapper">
                                <div className="card-info">
                                    <div className="card-info-title" style={{ wordSpacing: "20px" }}>
                                        <h4>{'<'}Flutter{'>'} {'<'}Firebase{'>'}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href='https://github.com/Rohith-JN/Tasks-iOS' target="__blank">
                    <div className="card" data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="250"
                        data-aos-duration="900"
                        data-aos-easing="ease"
                        data-aos-mirror="false"
                        data-aos-once="true">
                        <div className="card-content">
                            <div className="card-info-wrapper">
                                <div className="card-info-title">
                                    <h2>Tasks-iOS</h2>
                                    <h4>A minimal todo app made using Flutter for iOS</h4>
                                </div>
                            </div>
                            <div className="card-info-wrapper">
                                <div className="card-info">
                                    <div className="card-info-title" style={{ wordSpacing: "20px" }}>
                                        <h4>{'<'}Flutter{'>'} {'<'}Firebase{'>'}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></a>
                <a href="https://github.com/Rohith-JN/npm-search" target="__blank">
                    <div className="card" data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="300"
                        data-aos-duration="900"
                        data-aos-easing="ease"
                        data-aos-mirror="false"
                        data-aos-once="true">
                        <div className="card-content">
                            <div className="card-info-wrapper">
                                <div className="card-info-title">
                                    <h2>npm-search</h2>
                                    <h4>A site to view and compare npm-package stats</h4>
                                </div>
                            </div>
                            <div className="card-info-wrapper">
                                <div className="card-info">
                                    <div className="card-info-title" style={{ wordSpacing: "20px" }}>
                                        <h4>{'<'}Next.js{'>'} {'<'}Tailwind{'>'}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/Rohith-JN/rohith-jn.github.io" target="__blank">
                    <div className="card" data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="350"
                        data-aos-duration="900"
                        data-aos-easing="ease"
                        data-aos-mirror="false"
                        data-aos-once="true">
                        <div className="card-content">
                            <div className="card-info-wrapper">
                                <div className="card-info-title">
                                    <h2>Portfolio Site</h2>
                                    <h4>Since this felt like a project I put a lot of effort in, I decided to put it here!</h4>
                                </div>
                            </div>
                            <div className="card-info-wrapper">
                                <div className="card-info">
                                    <div className="card-info-title" style={{ wordSpacing: "20px" }}>
                                        <h4>{'<'}React.js{'>'} {'<'}TypeScript{'>'}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Projects;
