import { useEffect, useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

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
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    const openDialog = () => {
        if (dialogRef.current) dialogRef.current.showModal();
    };

    const closeDialog = () => {
        if (dialogRef.current) dialogRef.current.close();
    };

    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.addEventListener("cancel", closeDialog);
        }
        return () => {
            if (dialogRef.current) {
                dialogRef.current.removeEventListener("cancel", closeDialog);
            }
        };
    }, []);

    const images = project.pictures.map((image) => ({
        original: image,
        thumbnail: image,
    }));

    return (
        <>
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
                            href={
                                project.link === "" ? project.git : project.link
                            }
                            aria-label=""
                        >
                            <button>
                                {project.link === "" ? "Github" : "View"}
                            </button>
                        </a>
                        <button onClick={openDialog}>More</button>
                    </div>
                </div>
            </article>

            <dialog className="dialogBox" ref={dialogRef}>
                <button className="closeButton" onClick={closeDialog}>
                    X
                </button>
                <div className="container">
                    <div className="slider">
                        <ImageGallery items={images} />
                    </div>
                    <div className="content">
                        <h4 className="title">{project.title}</h4>
                        <p className="text">{project.descfull}</p>
                        <p className="client">{project.client}</p>

                        <div className="tags">
                            <ul>
                                {project.tags.map((tag, index) => {
                                    return (
                                        <li key={index}>
                                            <span>{tag}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className="buttons">
                            {project.link !== "" && (
                                <>
                                    <a href={project.link} aria-label="">
                                        <button>View</button>
                                    </a>
                                </>
                            )}
                            <a href={project.git} aria-label="">
                                <button>Code Source</button>
                            </a>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
}

export default ProjectBox;
