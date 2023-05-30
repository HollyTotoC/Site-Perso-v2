import { useState } from "react";

type Project = {
    title: string;
    desc: string;
    descfull: string;
    mainPicture: string;
    pictures: string[];
    link: string;
    git: string;
    client: string;
    tags: string[];
    scrollY: string;
};

interface ProjectProps {
    project: Project;
}

function ProjectBox({ project }: ProjectProps) {
    const [scroll, setScroll] = useState(false);
    return (
        <article className="projectbox">
            <div className="projectbox_picture">
                <a
                    href={project.link === "" ? project.git : project.link}
                    aria-label=""
                >
                    <img
                        src={project.mainPicture}
                        alt="website"
                        style={{
                            transform: scroll
                                ? `translateY(${project.scrollY})`
                                : "translateY(0%)",
                            transition: "transform 10s ease-in-out",
                        }}
                        onMouseEnter={() => setScroll(true)}
                        onMouseLeave={() => setScroll(false)}
                    />
                </a>
            </div>
            <div className="projectbox_container">
                <h4 className="title">{project.title}</h4>
                <p className="text">{project.desc}</p>
                <div className="buttons">
                    <a
                        href={project.link === "" ? project.git : project.link}
                        aria-label=""
                    >
                        <button>
                            {project.link === "" ? "Githib" : "View"}
                        </button>
                    </a>
                    <button>More</button>
                </div>
            </div>
        </article>
    );
}

export default ProjectBox;
