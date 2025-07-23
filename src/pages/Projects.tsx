import '../styles/projects.css';
import { useEffect, useRef } from 'react';

const Card = ({
    title,
    description,
    stack,
    delay,
    link
}: {
    title: string,
    description: string,
    stack: string,
    delay: string,
    link: string
}) => {
    return (
        <div
            className="card"
            data-aos={(window.innerWidth > 500) ? "fade-up" : ""}
            onClick={() => window.open(link, '_blank')}
            data-aos-offset="200"
            data-aos-delay={delay}
            data-aos-duration="900"
            data-aos-easing="ease"
            data-aos-mirror="false"
            data-aos-once="true"
        >
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
};


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
        <div className='projects' id="Projects">
            <div id="cards" ref={containerRef}>
                <Card title={'Numagix (Internship)'} description={'Built an internal dashboard for developers to track payments, analytics, logs, etc.'} stack={'Next.js Postgres Azure'} delay={'50'} link={"https://numagix.in"} />

                <Card title={'Categorize-CLI'} description={'A command-line-tool made to help you categorize/organize files in a given directory'} stack={'Python PyPi'} delay={'150'} link={"https://github.com/Rohith-JN/Categorize-CLI"} />
                <Card title={'type'} description={'A typing test site to improve your typing skills and track your progress.'} stack={'PERN Firebase'} delay={'200'} link={"https://typeio.vercel.app/"} />
                <Card title={'FFCS-inator'} description={'Contributed to a platform that helps VIT students easily plan and manage their FFCS timetables.'} stack={'Next.js MongoDB'} delay={'250'} link={"https://ffcs.codechefvit.com/"} />
                <Card title={'Tasks'} description={'A minimal todo app made using Flutter for iOS and Android'} stack={'Flutter Firebase'} delay={'300'} link={"https://github.com/Rohith-JN/Tasks-Android"} />
                <Card title={'Portfolio-Site'} description={'Since this felt like a project I put a lot of effort in, I decided to put it here!'} stack={'React.js TypeScript'} delay={'350'} link={"/"} />
            </div>
        </div>
    )
}

export default Projects;
