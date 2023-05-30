import { useState } from "react";
import menuLogo from "../assets/images/menu.svg";
import menuClose from "../assets/images/close.svg";

function Header() {
    const [menu, setMenu] = useState(false);

    const menuDisplay = () => {
        setMenu(!menu);
    };

    const pageUp = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <header>
                {/* LOGO */}
                <p onClick={pageUp} className="logo">
                    totocerta
                </p>

                {/* NAV*/}
                <nav>
                    <ul className="menu">
                        <li>
                            <a href="#home" aria-label="">
                                Accueil
                            </a>
                        </li>
                        <li>
                            <a href="#about" aria-label="">
                                A propos
                            </a>
                        </li>
                        <li>
                            <a href="#experiences" aria-label="">
                                Expériences
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio" aria-label="">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#contact" aria-label="">
                                Contact
                            </a>
                        </li>
                        <li
                            className="menu-button"
                            onClick={() => menuDisplay()}
                        >
                            <img src={menuLogo} alt="bouton menu" />
                        </li>
                    </ul>
                </nav>

                {/* MOBILE NAV */}
                <div className={`menu-mobile ${menu ? "open" : "close"}`}>
                    <span onClick={() => menuDisplay()}>
                        <img src={menuClose} alt="" />
                    </span>

                    <ul className="menu-mobile-nav">
                        <li onClick={() => menuDisplay()}>
                            <a href="#home" aria-label="">
                                Accueil
                            </a>
                        </li>
                        <li onClick={() => menuDisplay()}>
                            <a href="#about" aria-label="">
                                A propos
                            </a>
                        </li>
                        <li onClick={() => menuDisplay()}>
                            <a href="#experiences" aria-label="">
                                Expériences
                            </a>
                        </li>
                        <li onClick={() => menuDisplay()}>
                            <a href="#portfolio" aria-label="">
                                Portfolio
                            </a>
                        </li>
                        <li onClick={() => menuDisplay()}>
                            <a href="#contact" aria-label="">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;
