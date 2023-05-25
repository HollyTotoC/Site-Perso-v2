import pictureTest from "../assets/images/acceuilfull.png";

function ProjectBox() {
    return (
        <article className="projectbox">
            <div className="projectbox_picture">
                <a href="">
                    <img src={pictureTest} alt="" />
                </a>
            </div>
            <div className="projectbox_container">
                <h3 className="title">Projet Name</h3>
                <p className="text">Description</p>
                <div className="buttons">
                    <button>View/Source Code</button>
                    <button>More</button>
                </div>
            </div>
        </article>
    );
}

export default ProjectBox;
