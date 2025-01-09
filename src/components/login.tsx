import  { useState } from "react";
import "./pagelogin.css";

function LoginRegisterForm () {

    // State to manage form visibility
    const [isLoginVisible, setIsLoginVisible] = useState(true);

    return (
        <section className="form-container">
            {/* Login Form with animation */}
            <form
                id="loginForm"
                className={`form ${isLoginVisible ? "visible push-in" : "hidden push-out"}`}
            >
                <h1>Log in</h1>
                <div className="inputbox">
                    <input type="email" placeholder=" " required/>
                    <label htmlFor="email">User</label>
                </div>
                <div className="inputbox">
                    <input type="password" placeholder=" " required/>
                    <label htmlFor="password">Password</label>
                </div>
                <div className="forget">
                    <label>
                        <input type="checkbox"/> Remember
                    </label>
                    <a href="#">Forgot Password</a>
                </div>
                <button type="button">Login</button>
                <div className="register">
                    <p>
                        I don't have an account{" "}
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsLoginVisible(false);
                            }}
                        >
                            Register
                        </a>
                    </p>
                </div>
            </form>

            {/* Register Form with animation */}
            <form
                id="registerForm"
                className={`form ${!isLoginVisible ? "visible push-in" : "hidden push-out"}`}
            >
                <h1>Register</h1>
                <div className="inputbox">
                    <input type="text" placeholder=" " required/>
                    <label htmlFor="firstName">First Name</label>
                </div>
                <div className="inputbox">
                    <input type="text" placeholder=" " required/>
                    <label htmlFor="lastName">Last Name</label>
                </div>
                <div className="inputbox">
                    <input type="email" placeholder=" " required/>
                    <label htmlFor="email">Email</label>
                </div>
                <div className="inputbox">
                    <input type="tel" placeholder=" " required/>
                    <label htmlFor="phone">Phone Number</label>
                </div>
                <div className="inputbox">
                    <input type="text" placeholder=" " required/>
                    <label htmlFor="origin">Origin</label>
                </div>
                <button type="button">Register</button>
                <div className="register">
                    <p>
                        I already have an account{" "}
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsLoginVisible(true);
                            }}
                        >
                            Login
                        </a>
                    </p>
                </div>
            </form>
        </section>
    );
};

export default LoginRegisterForm;
