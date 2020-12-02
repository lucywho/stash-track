import React, { useState } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

export default function Register() {
    const [error, setError] = useState(false);
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formDeets = {
        first: first,
        last: last,
        email: email,
        password: password,
    };

    function submitReg(e) {
        axios
            .post("/register", formDeets)
            .then((response) => {
                console.log("response.data: ", response.data);

                if (response.data.success) {
                    console.log("success");
                } else {
                    setError("true");
                }
            })
            .catch((err) => {
                console.log("register.js error in post register", err);
            });
    }

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
                <form>
                    <label htmlFor="first">first name</label>
                    <input
                        onChange={(event) => setFirst(event.target.value)}
                        type="text"
                        name="first"
                        placeholder="first name..."
                    />
                    <label htmlFor="first">last name</label>
                    <input
                        onChange={(event) => setLast(event.target.value)}
                        type="text"
                        name="last"
                        placeholder="last name..."
                    />
                    <label htmlFor="email">email address</label>
                    <input
                        onChange={(event) => setEmail(event.target.value)}
                        name="email"
                        type="email"
                        placeholder="email address..."
                    />
                    <label htmlFor="password">choose a password</label>
                    <input
                        onChange={(event) => setPassword(event.target.value)}
                        name="password"
                        type="password"
                        placeholder="choose a password..."
                    />
                    This site needs to use functional cookies to keep track of
                    your stash. Please check this box if you agree to cookies.
                    We do not share any data with third parties.
                    <input
                        type="submit"
                        value="click to accept cookies and register"
                        onClick={() => submitReg()}
                    />
                </form>
                <div>
                    <br />
                    <h3>Already a member?</h3>
                    <Link to="/login">
                        <button>click here to log in</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
