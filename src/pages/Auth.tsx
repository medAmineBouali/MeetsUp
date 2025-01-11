import { useState } from "react";
import LoginRegisterForm from "@/components/login.tsx";
import background from "@/assets/backgroundimage.jpg";

const AuthPage = () => {
    const [message, setMessage] = useState("");

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
            {message && (
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded shadow">
                    {message}
                </div>
            )}
            {/* Login card */}
            <div className="relative bg-transparent p-8 rounded-lg backdrop-blur shadow-lg">
                {/* Add your Login component here */}
                <LoginRegisterForm setMessage={setMessage} />
            </div>
        </div>
    );
};

export default AuthPage;
