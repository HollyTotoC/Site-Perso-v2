import github from "../assets/images/logos/github.svg";
import linkedin from "../assets/images/logos/linkedin.svg";

function Footer() {
    return (
        <footer id="footer">
            <h5 className="footer_title">
                Copiright © {new Date().getFullYear()} - Tout droits réservés.
            </h5>
            <div className="footer_container">
                <a href="https://github.com/HollyTotoC" className="social">
                    <img src={github} alt="" />
                </a>
                <a
                    href="https://www.linkedin.com/in/toto-certa/"
                    className="social"
                >
                    <img src={linkedin} alt="" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
