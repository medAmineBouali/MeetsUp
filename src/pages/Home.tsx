import {useState} from "react";
import "./homepage.css"
import card1img1 from "@/assets/1/1.jpg";
import card1img2 from "@/assets/1/2.png";
import card1img3 from "@/assets/1/3.jpg";

import card2img1 from "@/assets/2/1.jpeg";
import card2img2 from "@/assets/2/2.jpeg";
import card2img3 from "@/assets/2/3.jpeg";

import card3img1 from "@/assets/3/1.jpg";
import card3img2 from "@/assets/3/2.jpg";
import card3img3 from "@/assets/3/3.jpg";

import meetingImg from "@/assets/25444.jpg"
import salle1 from "@/assets/salle1.jpeg"
import salle2 from "@/assets/salle2.jpg"
import contactImg from "@/assets/contact nous.png";

import fblogo from "@/assets/facb.png";
import instagramLogo from "@/assets/insta.png";
import linkedinLogo from "@/assets/linkd.webp";
import whatsappLogo from "@/assets/whatssapff.jpg";

const HomePage = () => {
    const [currentIndexes, setCurrentIndexes] = useState({
        1: 0,
        2: 0,
        3: 0,
    });

    // Image data for each space
    const spaceImages = {
        1: [card1img1, card1img2, card1img3],
        2: [card2img1, card2img2, card2img3],
        3: [card3img1, card3img2, card3img3],
    };

    // Function to handle arrow clicks
    const handleArrowClick = (spaceId: number, direction: 'left' | 'right') => {
        setCurrentIndexes((prevIndexes) => {
            const currentIndex = prevIndexes[spaceId];
            const totalImages = spaceImages[spaceId].length;

            let newIndex;
            if (direction === 'left') {
                newIndex = (currentIndex - 1 + totalImages) % totalImages;
            } else {
                newIndex = (currentIndex + 1) % totalImages;
            }

            return {
                ...prevIndexes,
                [spaceId]: newIndex,
            };
        });
    };
    return (
        <div>

            <section id="hero" className="hero">
                <div className="hero-content m-auto">
                    <h1>Trouvez l'espace parfait pour travailler, étudier ou organiser une réunion</h1>
                    <p>Réservez un espace moderne et flexible en quelques clics.</p>
                    <div className="button-container">
                        <button className="cta-button">Explorer les espaces</button>
                    </div>
                </div>
                <div className="hero-image m-auto">
                    <img src={meetingImg} alt="Discussion en groupe" />
                </div>
            </section>

            {/* Spaces Section */}
            <section id="spaces" className="spaces">
                <h2>Espaces disponibles</h2>
                <div className="space-grid">
                    {/* Espace 1 */}
                    <div className="space-item min-w-96 min-h-96">
                        <div className="arrow left-arrow" onClick={() => handleArrowClick(1, 'left')}>
                            &#9664;
                        </div>
                        <img
                            id="space-image-1"
                            className="min-h-64"
                            src={spaceImages[1][currentIndexes[1]]}
                            alt="Espace Collaboratif"
                        />
                        <div className="arrow right-arrow" onClick={() => handleArrowClick(1, 'right')}>
                            &#9654;
                        </div>
                        <h3>Espace Collaboratif</h3>
                        <p>20€/jour - Wi-Fi rapide, café gratuit</p>
                    </div>

                    {/* Espace 2 */}
                    <div className="space-item min-w-96 min-h-96">
                        <div className="arrow left-arrow" onClick={() => handleArrowClick(2, 'left')}>
                            &#9664;
                        </div>
                        <img
                            id="space-image-2"
                            className="min-h-64"
                            src={spaceImages[2][currentIndexes[2]]}
                            alt="Salle de Réunion"
                        />
                        <div className="arrow right-arrow" onClick={() => handleArrowClick(2, 'right')}>
                            &#9654;
                        </div>
                        <h3>Salle de Réunion</h3>
                        <p>30€/jour - Projecteur, tableau blanc</p>
                    </div>

                    {/* Espace 3 */}
                    <div className="space-item min-w-96 min-h-96">
                        <div className="arrow left-arrow" onClick={() => handleArrowClick(3, 'left')}>
                            &#9664;
                        </div>
                        <img
                            id="space-image-3"
                            className="min-h-64"
                            src={spaceImages[3][currentIndexes[3]]}
                            alt="Bureau Privé"
                        />
                        <div className="arrow right-arrow" onClick={() => handleArrowClick(3, 'right')}>
                            &#9654;
                        </div>
                        <h3>Bureau Privé</h3>
                        <p>25€/jour - Confort et tranquillité</p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about">
                <div className="about-content">
                    <div className="about-text">
                        <h2>À propos de MeetsUp</h2>
                        <p>
                            Chez MeetsUp, nous croyons que l'environnement de travail a un impact énorme
                            sur la productivité et la créativité. Nous offrons des espaces flexibles et
                            modernes pour répondre aux besoins de professionnels, étudiants et entrepreneurs.
                        </p>
                        <p>
                            Rejoignez une communauté dynamique et bénéficiez de toutes les commodités nécessaires
                            pour atteindre vos objectifs !
                        </p>
                        <button className="cta-button">En savoir plus</button>
                    </div>
                    <div className="about-images">
                        <img src={salle1} alt="Espace collaboratif moderne" className="about-img about-img-main" />
                        <img src={salle2} alt="Réunion professionnelle" className="about-img about-img-overlay" />
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <div className="contact-header">
                    <h2>Contactez-nous</h2>
                    <p>Vous avez des questions ? Nous sommes là pour vous aider !</p>
                </div>

                <div className="contact-container">
                    {/* Left Column with Image */}
                    <div className="contact-info">
                        <img src={contactImg} alt="Image de contact" className="contact-image" />
                    </div>

                    {/* Right Column with Form */}
                    <div className="contact-form">
                        <form action="submit_form.php" method="POST">
                            <h3>Envoyez-nous un message</h3>
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Votre nom" required />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Votre email" required />
                            </div>
                            <div className="form-group">
                                <textarea name="message" rows={5} placeholder="Votre message" required></textarea>
                            </div>
                            <button type="submit" className="submit-button">Envoyer</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer id="footer" className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h2>MeetsUp</h2>
                        <p>Votre espace de travail collaboratif moderne et flexible.</p>
                    </div>

                    <div className="footer-nav">
                        <h4>Navigation</h4>
                        <ul>
                            <li><a href="#hero">Accueil</a></li>
                            <li><a href="#spaces">Espaces</a></li>
                            <li><a href="#pricing">Tarifs</a></li>
                            <li><a href="#about">À propos</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contactez-nous</h4>
                        <ul>
                            <li><strong>Email:</strong> <a href="mailto:contact@coworkeasy.com">contact@coworkeasy.com</a></li>
                            <li><strong>Téléphone:</strong> <a href="tel:+11234567890">+1 234 567 890</a></li>
                            <li><strong>Adresse:</strong> 123 Rue de l'Innovation, Paris, France</li>
                        </ul>
                    </div>

                    <div className="footer-socials">
                        <h4>Suivez-nous</h4>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/coworkeasy" target="_blank" rel="noopener noreferrer">
                                <img src={fblogo} alt="Facebook" className="social-icon" />
                            </a>
                            <a href="https://www.instagram.com/coworkeasy" target="_blank" rel="noopener noreferrer">
                                <img src={instagramLogo} alt="Instagram" className="social-icon" />
                            </a>
                            <a href="https://www.linkedin.com/company/coworkeasy" target="_blank" rel="noopener noreferrer">
                                <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
                            </a>
                            <a href="https://whatssap.com/coworkeasy" target="_blank" rel="noopener noreferrer">
                                <img src={whatsappLogo} alt="WhatsApp" className="social-icon" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 MeetsUp. Tous droits réservés.</p>
                    <p>
                        <a href="#privacy-policy">Politique de confidentialité</a> |{' '}
                        <a href="#terms-of-service">Conditions d'utilisation</a>
                    </p>
                </div>
            </footer>
        </div>
    );

}

export default HomePage;