import logo from '@/assets/logo.png';

const NavBar = () => {
    return (
        <div className="fixed top-0 left-0 w-full bg-primary shadow-lg z-50">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo & Brand Name */}
                <div className="flex items-center space-x-2">
                    <img className="h-8" src={logo} alt="MeetsUp Logo" />
                    <h1 className="text-white text-2xl font-bold">MEETSUP</h1>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#hero" className="text-white hover:text-yellow-400 transition">Accueil</a>
                    <a href="#spaces" className="text-white hover:text-yellow-400 transition">Espaces</a>
                    <a href="#pricing" className="text-white hover:text-yellow-400 transition">Tarifs</a>
                    <a href="#about" className="text-white hover:text-yellow-400 transition">À propos</a>
                    <a href="#contact" className="text-white hover:text-yellow-400 transition">Contact</a>
                </nav>

                {/* CTA Button */}
                <a href="#reserve" className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-600 transition">
                    Réserver un espace
                </a>
            </div>
        </div>
    );
};

export default NavBar;
