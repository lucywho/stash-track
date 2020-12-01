import React, { useState } from "react";
//import axios from "./axios";
import { Link } from "react-router-dom";

export default function Login() {
    const [error, setError] = useState(false);
    //ToDo: add functions to send inputs to backend

    return (
        <section className="login container">
            <div className="login-component">
                {error && (
                    <div className="error">
                        Login failed. Please check your email address and
                        password.
                        <h3>Don't have an account?</h3>
                        <Link to="/">
                            <button>click here to register</button>
                        </Link>
                    </div>
                )}
                <h3>Please enter your email and password</h3>
                <input
                    name="email"
                    type="email"
                    placeholder="email address..."
                />
                <input
                    name="password"
                    type="password"
                    placeholder="password..."
                />
            </div>
        </section>
    );
}
