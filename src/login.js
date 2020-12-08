import React, { useState } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

export default function Login() {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginDeets = {
        email: email,
        password: password,
    };

    function submitLogin(e) {
        axios
            .post("/login", loginDeets)
            .then((response) => {
                console.log("login response ", response.data);

                if (!response.data.error) {
                    console.log("login success");
                } else {
                    setError(true);
                }
            })
            .catch((err) => {
                console.log("login.js error in post login", err);
            });
    }
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
                <input
                    type="submit"
                    value="click to log in"
                    onClick={() => submitLogin()}
                />
                <br />
                <h3>Don't have an account yet?</h3>
                <Link to="/">
                    <button>click here to register</button>
                </Link>
            </div>
        </section>
    );
}
