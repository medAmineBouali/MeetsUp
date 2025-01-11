import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Search } from 'lucide-react';
import {useAuth} from "@/lib/Store.tsx";
import logo from "@/assets/logo.png";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { isLoggedIn, login, logout } = useAuth();

    const isGalleryPage = location.pathname.startsWith("/gallery"); // Detect /gallery pages

    return (
        <div className="fixed top-0 left-0 w-full bg-primary shadow-lg z-50 flex flex-col">
            {/* Top Section */}
            <div className="flex items-center justify-between px-10 w-full h-16">

                {/* Logo & Brand Name */}
                <div className="flex items-center space-x-2 px-6">
                    <img className="h-8" src={logo} alt="MeetsUp Logo" />
                    <h1 className="text-white text-2xl font-bold">MEETSUP</h1>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex h-full">
                    <a href="#hero" className="text-white px-4 flex items-center h-full hover:bg-accent hover:text-yellow-400 transition">Accueil</a>
                    <a href="#spaces" className="text-white px-4 flex items-center h-full hover:bg-accent hover:text-yellow-400 transition">Espaces</a>
                    <a href="#pricing" className="text-white px-4 flex items-center h-full hover:bg-accent hover:text-yellow-400 transition">Tarifs</a>
                    <a href="#about" className="text-white px-4 flex items-center h-full hover:bg-accent hover:text-yellow-400 transition">À propos</a>
                    <a href="#contact" className="text-white px-4 flex items-center h-full hover:bg-accent hover:text-yellow-400 transition">Contact</a>
                </nav>

                {/* Search Bar (Visible Only on Gallery Page) */}
                {isGalleryPage ? (
                    <div className="relative hidden md:flex items-center">
                        <input
                            type="text"
                            placeholder="Rechercher dans la galerie..."
                            className="px-4 py-2 rounded-full text-sm focus:outline-none border border-gray-300 bg-white text-black pl-10"
                        />
                        <Search className="absolute left-3 text-gray-500"/> {/* Magnifying Glass Icon */}

                        <a href="/login"
                           className="hidden md:inline-block bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-600 transition ml-4">
                            Connexion
                        </a>
                    </div>
                ) : (
                    <div className="relative md:flex items-center">
                        {/* Réserver un espace Button (Always Visible) */}
                        <button
                            onClick={() => navigate("/gallery")}
                            className="bg-destructive text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-600 transition">
                            Réserver un espace
                        </button>

                        {/* Login Button (Hidden on Mobile) */}
                        <a href="/login"
                           className="hidden md:inline-block bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-600 transition ml-4">
                            Connexion
                        </a>
                    </div>

                )}
            </div>

            {/* Bottom Hamburger Menu Button (Only for Mobile) */}
            <div className="md:hidden w-full flex justify-center border-t border-gray-700 py-2">
                <button
                    className="text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "✖ Fermer" : "☰ Menu"}
                </button>
            </div>

            {/* Mobile Menu (Slide Down) */}
            {isOpen && (
                <div className="md:hidden bg-primary w-full flex flex-col items-center py-4 space-y-3">
                    <a href="#hero" className="text-white hover:bg-accent w-full text-center py-2 transition">Accueil</a>
                    <a href="#spaces" className="text-white hover:bg-accent w-full text-center py-2 transition">Espaces</a>
                    <a href="#pricing" className="text-white hover:bg-accent w-full text-center py-2 transition">Tarifs</a>
                    <a href="#about" className="text-white hover:bg-accent w-full text-center py-2 transition">À propos</a>
                    <a href="#contact" className="text-white hover:bg-accent w-full text-center py-2 transition">Contact</a>

                    {/* Show Search Bar in Mobile Menu for Gallery Page */}
                    {isGalleryPage && (
                        <div className="relative w-5/6">
                            <input
                                type="text"
                                placeholder="Rechercher dans la galerie..."
                                className="px-4 py-2 rounded-full text-sm focus:outline-none border border-gray-300 bg-white text-black pl-10 w-full"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                    )}

                    <a href="/login" className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-600 transition">
                        Connexion
                    </a>
                </div>
            )}
        </div>
    );
};

export default NavBar;
