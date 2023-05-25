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
};

interface ProjectProps {
    project: Project;
}

function ProjectBox({ project }: ProjectProps) {
    return (
        <article className="projectbox">
            <div className="projectbox_picture">
                <a href="">
                    <img src={project.mainPicture} alt="" />
                </a>
            </div>
            <div className="projectbox_container">
                <h3 className="title">{project.title}</h3>
                <p className="text">{project.desc}</p>
                <div className="buttons">
                    <a href={project.link === "" ? project.git : project.link}>
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
