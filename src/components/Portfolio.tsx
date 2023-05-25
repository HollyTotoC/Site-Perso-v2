import ProjectBox from "./ProjectBox";
import dataPortfolio from "../assets/portfolio.json";

function Portfolio() {
    return (
        <>
            <section id="portfolio">
                <h2 className="portfolio_title">Portfolio</h2>
                <h3 className="portfolio_subtitle">
                    Chaque projet est une nouvelle aventure dans le monde du
                    développement web 🚀.
                </h3>
                <p className="portfolio_text">
                    Voici ceux que j'ai eu le plaisir d'explorer ! J'espère
                    pouvoir ajouter le vôtre à mon parcours.
                </p>

                <div className="portfolio_container">
                    {dataPortfolio.map((project, index) => (
                        <ProjectBox key={index} project={project} />
                    ))}
                </div>
            </section>
        </>
    );
}

export default Portfolio;
