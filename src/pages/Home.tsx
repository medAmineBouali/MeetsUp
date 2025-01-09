import "./homepage.css"
import NavBar from "@/components/nav-bar";
import bureau from '@/assets/7/2.jpg'
import espacecolab from '@/assets/1/1.jpg'
import salepriv from '@/assets/11/3.jpg'

const HomePage = () =>
{

    return <div className="home-page d-flex">
        <NavBar />
        <section id="hero" className="hero">
            <h1>Trouvez l'espace parfait pour travailler, étudier ou organiser une réunion</h1>
            <p>Réservez un espace moderne et flexible dans quelques clics.</p>
            <button className="cta-button">Explorer les espaces</button>
        </section>

        <section className="search">
            <form id="searchForm">
                <input type="text" placeholder="Lieu (ville ou quartier)" required/>
                <input type="date" required/>
                <input type="number" placeholder="Nombre de personnes" required/>
                <button className="bg-primary" type="submit">Rechercher</button>
            </form>
        </section>

        <section id="spaces" className="spaces">
            <h2>Espaces disponibles</h2>
            <div className="space-grid">
                <div className="space-item">
                    <img src={espacecolab} alt="Espace 1"/>
                    <h3>Espace Collaboratif</h3>
                    <p>20€/jour - Wi-Fi rapide, café gratuit</p>
                </div>
                <div className="space-item">
                    <img src={bureau} alt="Espace 2"/>
                    <h3>Salle de Réunion</h3>
                    <p>30€/jour - Projecteur, tableau blanc</p>
                </div>
                <div className="space-item">
                    <img src={salepriv} alt="Espace 3"/>
                    <h3>Bureau Privé</h3>
                    <p>25€/jour - Confort et tranquillité</p>
                </div>
            </div>
        </section>

        <section id="testimonials" className="testimonials">
            <h2>Ce que disent nos clients</h2>
            <div className="testimonial">
                <p>"Un espace idéal pour mes réunions d'équipe, merci CoworkEasy !"</p>
                <p>- Clara M.</p>
            </div>
            <div className="testimonial">
                <p>"Un endroit parfait pour étudier avec mes amis. Super services !"</p>
                <p>- Julien R.</p>
            </div>
        </section>

        <footer className="footer bg-secondary">
            <div className="footer-content">
                <div>CoworkEasy &copy; 2025</div>
                <div>
                    <a href="#">Mentions légales</a>
                    <a href="#">Confidentialité</a>
                </div>
                <div className="socials">
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                </div>
            </div>
        </footer>
    </div>

}

export default HomePage;