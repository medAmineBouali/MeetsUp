import { useState } from "react";
import "./pagelogin.css";
import {useAuth} from "@/lib/Store.tsx";
import { useNavigate } from "react-router-dom";

type LoginRegisterFormProps = {
    setMessage: (message: string) => void;
};

function LoginRegisterForm({ setMessage }: LoginRegisterFormProps) {
    const [isLoginVisible, setIsLoginVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleRegisterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        (event.target as HTMLFormElement).reset();

        setTimeout(() => {
            setIsLoading(false);
            setIsLoginVisible(true);
            setMessage("Compte créé avec succès !");
            setTimeout(() => {
                setMessage("");
            }, 2000);
        }, 2000);
    };

    const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            await login();
            navigate("/");
        } catch (error) {
            setMessage("Échec de la connexion. Veuillez réessayer.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="authform"  className="relative max-w-md border-2 border-white/50 rounded-2xl backdrop-blur-lg p-8 overflow-hidden">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLoginSubmit} className={`form ${isLoginVisible ? "visible push-in" : "hidden push-out"}`}>
                <h1 className="text-2xl text-gray-800 text-center">Log in</h1>
                <div className="relative my-5 max-w-sm border-b-2 border-white inputbox">
                    <input type="email" placeholder=" " required className="w-full h-12 px-2 bg-transparent text-white outline-none authinput"/>
                    <label className="absolute top-1/2 left-1 transform -translate-y-1/2 text-white text-sm transition-all">User</label>
                </div>
                <div className="relative my-5 max-w-sm border-b-2 border-white inputbox">
                    <input type="password" placeholder=" " required className="w-full h-12 px-2 bg-transparent text-white outline-none authinput"/>
                    <label className="absolute top-1/2 left-1 transform -translate-y-1/2 text-white text-sm transition-all">Password</label>
                </div>
                <div className="my-5 text-xs text-white flex justify-between items-center">
                    <label className="flex items-center gap-2">
                        <input type="checkbox"/> Remember
                    </label>
                    <a href="#" className="font-semibold">Forgot Password</a>
                </div>
                <button className="w-full h-10 rounded-full bg-blue-700/50 text-gray-900 font-semibold transition-all hover:bg-gray-300 hover:text-blue-900">Login</button>
                <div className="text-sm text-white text-center my-6">
                    <p>I don't have an account <a href="#" className="font-semibold hover:underline" onClick={(e) => { e.preventDefault(); setIsLoginVisible(false); }}>Register</a></p>
                </div>
            </form>

            {/* Register Form */}
            <form onSubmit={handleRegisterSubmit} className={`form ${!isLoginVisible ? "visible push-in" : "hidden push-out"}`}>
                <h1 className="text-2xl text-gray-800 text-center">Register</h1>
                <div className="relative my-5 max-w-sm border-b-2 border-white inputbox">
                    <input type="text" placeholder=" " required className="w-full h-12 px-2 bg-transparent text-white outline-none authinput"/>
                    <label className="absolute top-1/2 left-1 transform -translate-y-1/2 text-white text-sm transition-all">First Name</label>
                </div>
                <div className="relative my-5 max-w-sm border-b-2 border-white inputbox">
                    <input type="text" placeholder=" " required className="w-full h-12 px-2 bg-transparent text-white outline-none authinput"/>
                    <label className="absolute top-1/2 left-1 transform -translate-y-1/2 text-white text-sm transition-all">Last Name</label>
                </div>
                <div className="relative my-5 max-w-sm border-b-2 border-white inputbox">
                    <input type="email" placeholder=" " required className="w-full h-12 px-2 bg-transparent text-white outline-none authinput"/>
                    <label className="absolute top-1/2 left-1 transform -translate-y-1/2 text-white text-sm transition-all">Email</label>
                </div>
                <div className="relative my-5 max-w-sm border-b-2 border-white inputbox">
                    <input type="tel" placeholder=" " required className="w-full h-12 px-2 bg-transparent text-white outline-none authinput"/>
                    <label className="absolute top-1/2 left-1 transform -translate-y-1/2 text-white text-sm transition-all">Phone Number</label>
                </div>
                <div className="relative my-5 max-w-sm border-b-2 border-white inputbox">
                    <input type="text" placeholder=" " required className="w-full h-12 px-2 bg-transparent text-white outline-none authinput"/>
                    <label className="absolute top-1/2 left-1 transform -translate-y-1/2 text-white text-sm transition-all">Origin</label>
                </div>
                <button type="submit" className="w-full h-10 rounded-full bg-blue-700/50 text-gray-900 font-semibold transition-all hover:bg-gray-300 hover:text-blue-900">Register</button>
                <div className="text-sm text-white text-center my-6">
                    <p>I already have an account <a href="#" className="font-semibold hover:underline" onClick={(e) => { e.preventDefault(); setIsLoginVisible(true); }}>Login</a></p>
                </div>
            </form>
        </section>
    );
};

export default LoginRegisterForm;
