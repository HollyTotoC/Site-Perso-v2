function Header() {
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
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
