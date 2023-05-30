import { useState, useEffect } from "react";
import experiences from "../assets/experiences.json";

function Experiences() {
    interface Experience {
        years: string;
        part1: string;
        part2: string;
    }

    const [collapsedStates, setCollapsedStates] = useState(
        experiences.map(() => true)
    );
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleCollapse = (experience: Experience) => {
        setCollapsedStates((prevStates) => {
            const newStates = [...prevStates];
            const index = experiences.indexOf(experience);
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

    const half = Math.ceil(experiences.length / 2);
    const firstHalf = experiences.slice(0, half);
    const secondHalf = experiences.slice(half, experiences.length);

    const renderExperience = (experience: Experience) => (
        <article className="exp" key={experience.years}>
            <h3 className="exp_title">{experience.years}</h3>
            <p className="exp_text" onClick={() => toggleCollapse(experience)}>
                {experience.part1}{" "}
                {collapsedStates[experiences.indexOf(experience)] && "..."}
                {!collapsedStates[experiences.indexOf(experience)] &&
                    `${experience.part2}`}
            </p>
        </article>
    );

    return (
        <section id="experiences">
            <h2 className="title">Experiences</h2>
            <div className="container">
                {windowWidth >= 768 ? (
                    <>
                        <div>{firstHalf.map(renderExperience)}</div>
                        <div>{secondHalf.map(renderExperience)}</div>
                    </>
                ) : (
                    experiences.map(renderExperience)
                )}
            </div>
        </section>
    );
}

export default Experiences;
