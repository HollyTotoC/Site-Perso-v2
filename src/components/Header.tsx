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
                            <a href="#home">Accueil</a>
                        </li>
                        <li>
                            <a href="#about">A propos</a>
                        </li>
                        <li>
                            <a href="#experiences">Expériences</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
