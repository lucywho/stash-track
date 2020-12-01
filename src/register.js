import React, { useState } from "react";
//import axios from "./axios";
import { Link } from "react-router-dom";

export default function Register() {
    const [error, setError] = useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    //ToDo: add functions to save inputs and send to backend

    return (
        <section className="register container">
            <div className="register-component">
                {error && (
                    <div className="error">
                        Registration failed. Please complete all fields and try
                        again.
                    </div>
                )}
                <input name="first" placeholder="first name..." />
                <input name="last" placeholder="last name..." />
                <input
                    name="email"
                    type="email"
                    placeholder="email address..."
                />
                <input
                    name="password"
                    type="password"
                    placeholder="choose a password..."
                />
                <p id="nb">
                    By signing up, you agree to allow the site to use functional
                    cookies.
                </p>
                <button onClick={() => this.submit()}>
                    click to accept cookies and register!
                </button>
                <div>
                    <br />
                    <h3>Already a member?</h3>
                    <Link to="/login">
                        <button>click here to log in!</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
