import '../styles/projects.css';
import { useEffect, useRef } from 'react';

const Card = ({ project, title, description, stack, delay }: { project: string, title: string, description: string, stack: string, delay: string }) => {
    return (
        <div className="card" data-aos="fade-up" onClick={() => window.open(`https://github.com/Rohith-JN/${project}`, '_blank')}
            data-aos-offset="200"
            data-aos-delay={delay}
            data-aos-duration="900"
            data-aos-easing="ease"
            data-aos-mirror="false"
            data-aos-once="true">
            <div className="card-content">
                <div className="card-info-wrapper">
                    <div className="card-info-title">
                        <h2>{title}</h2>
                        <h4>{description}</h4>
                    </div>
                </div>
                <div className="card-info-wrapper">
                    <div className="card-info">
                        <div className="card-info-title" style={{ wordSpacing: "20px" }}>
                            <h4>{stack}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

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
                <Card project={'Categorize-CLI'} title={'Categorize-CLI'} description={'A command-line-tool made to help you categorize/organize files in a given directory'} stack={'Python PyPi'} delay={'50'} />
                <Card project={'type-frontend'} title={'type'} description={'A typing test site to improve your typing skills and track your progress.'} stack={'PERN Firebase'} delay={'150'} />
                <Card project={'Tasks-Android'} title={'Tasks-Android'} description={'A minimal todo app made using Flutter for Android'} stack={'Flutter Firebase'} delay={'200'} />
                <Card project={'Tasks-iOS'} title={'Tasks-iOS'} description={'A minimal todo app made using Flutter for iOS'} stack={'Flutter Firebase'} delay={'250'} />
                <Card project={'npm-search'} title={'npm-search'} description={'A site to view and compare npm-package stats'} stack={'Next.js Tailwind'} delay={'300'} />
                <Card project={'v2'} title={'Portfolio-Site'} description={'Since this felt like a project I put a lot of effort in, I decided to put it here!'} stack={'React.js TypeScript'} delay={'300'} />
            </div>
        </div>
    )
}

export default Projects;
