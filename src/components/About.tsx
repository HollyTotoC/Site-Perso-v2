import midOffice from "../assets/images/midOffice.png";

function About() {
    return (
        <section id="about" className="about">
            <div className="about_picture">
                <img src={midOffice} alt="" />
            </div>
            <div className="about_container">
                <h2 className="title">A Propos</h2>
                <p className="subtitle">
                    Allier programmation et passion pour créer des expériences
                    web uniques. 👨‍💻
                </p>
                <p className="text">
                    J’ai une double formation. Développeur web passionné et
                    créatif et diplômé en cinéma avec une pratique de 10 ans
                    comme réalisateur/vidéaste, monteur et motion designer. Fort
                    d'une expérience en conseil en communication digitale, j'ai
                    décidé de me diriger vers le développement web en suivant
                    une formation chez OpenClassrooms. Compétent en HTML, CSS,
                    JavaScript, React, Bootstrap, Git, Adobe Creative Suite et
                    Figma, je suis en mesure de créer des expériences web
                    innovantes et conviviales.
                </p>
            </div>
        </section>
    );
}

export default About;
