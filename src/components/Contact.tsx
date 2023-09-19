function Contact() {
    return (
        <section id="contact">
            <h2 className="contact_title">Contact</h2>
            <h3 className="contact_subtitle">
                N'ayez pas peur de faire le premier pas !
            </h3>
            <p className="contact_text">
                Qu'il s'agisse d'une demande de devis, d'une proposition de
                projet ou simplement d'un échange d'idées, je suis toujours
                ouvert à la conversation. Contactez-moi et voyons comment nous
                pouvons réaliser de grandes choses ensemble. 👇
            </p>

            <div className="contact_container">
                <div className="social">
                    <div className="social_picto">
                        <p>🗺️</p>
                    </div>
                    <div className="social_text">
                        <h3>Remote or on site from</h3>
                        <p>Paris, France</p>
                    </div>
                </div>
                <div className="social">
                    <div className="social_picto">
                        <p>📬</p>
                    </div>
                    <div className="social_text">
                        <h3>Mail</h3>
                        <a href="mailto:totoc.contact@gmail.com" aria-label="">
                            totoc.contact@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
