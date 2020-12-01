import React, { useState } from "react";
//import axios from "./axios";
import { Link } from "react-router-dom";

export default function Register() {
    const [error, setError] = useState(false);
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleChange(e) {
        console.log("handle change");
        console.log("first", first);
        console.log("pass", password);
    }

    function submitReg(e) {
        console.log("submit reg fires");
        // console.log("target values", [e.target.name], e.target.value);
        console.log("first", first);
        console.log("last", last);
        console.log("pass", password);
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
                This site needs to use functional cookies to keep track of your
                stash. Please check this box if you agree to cookies. We do not
                share any data with third parties.
                <button onClick={() => submitReg()}>
                    click to accept cookies and register
                </button>
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
