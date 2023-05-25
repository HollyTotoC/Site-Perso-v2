import profilePicture from "../assets/images/toto.jpg";

//import logos
import html5 from "../assets/images/logos/html5.svg";
import css3 from "../assets/images/logos/css3.svg";
import javascript from "../assets/images/logos/javascript.svg";
import react from "../assets/images/logos/react.svg";
import typescript from "../assets/images/logos/typescript.svg";
import sass from "../assets/images/logos/sass.svg";
import bootstrap from "../assets/images/logos/bootstrap.svg";

function Hero() {
    return (
        <>
            <section className="hero">
                <div className="content">
                    <div className="content_picture">
                        <img
                            src={profilePicture}
                            alt="portrait de Toto Certa"
                        />
                    </div>
                    <div className="content_info">
                        <p>
                            <i>je suis disponible</i> <span>👋</span>
                        </p>
                        <h1>Toto Certa</h1>
                        <p>
                            est développeur front avec un expérience de motion
                            designer, installé à Paris. 📍
                        </p>
                        <div>
                            <a href="">
                                <i></i>
                            </a>
                            <a href="">
                                <i></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="skills">
                    <p>Tech Stack</p>
                    <div>
                        <ul>
                            <li>
                                <img src={html5} alt="" title="HTML5" />
                            </li>
                            <li>
                                <img src={css3} alt="" title="CSS3" />
                            </li>
                            <li>
                                <img
                                    src={javascript}
                                    alt=""
                                    title="Javascript"
                                />
                            </li>
                            <li>
                                <img src={react} alt="" title="React" />
                            </li>
                            <li>
                                <img
                                    src={typescript}
                                    alt=""
                                    title="TypeScript"
                                />
                            </li>
                            <li>
                                <img src={sass} alt="" title="Sass" />
                            </li>
                            <li>
                                <img src={bootstrap} alt="" title="Bootstrap" />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
