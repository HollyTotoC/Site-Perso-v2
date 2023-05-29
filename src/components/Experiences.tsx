import { useState } from "react";
import experiences from "../assets/experiences.json";

function Experiences() {
    const [collapsedStates, setCollapsedStates] = useState(
        experiences.map(() => true) // Initial state: all items are collapsed
    );

    const toggleCollapse = (index: number) => {
        setCollapsedStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index]; // Toggle the state of the item at `index`
            return newStates;
        });
    };

    return (
        <section id="experiences">
            <h2 className="title">Experiences</h2>
            <div className="container">
                {experiences.map((experience, index) => {
                    return (
                        <article className="exp" key={index}>
                            <h3 className="exp_title">{experience.years}</h3>
                            <p
                                className="exp_text"
                                onClick={() => toggleCollapse(index)}
                            >
                                {experience.part1}{" "}
                                {collapsedStates[index] && "..."}
                                {!collapsedStates[index] &&
                                    `${experience.part2}`}
                            </p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default Experiences;
