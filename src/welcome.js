import React from "react";
// import axios from "./axios";
import { HashRouter, Route, Link } from "react-router-dom";
import Register from "./register";
import Login from "./login";
// import ResetPassword from "./reset"

export default function Welcome() {
    return (
        <section className="welcome container">
            <div className="welcome-component">
                <HashRouter>
                    <div>
                        <Route exact path="/" component={Register} />
                        <Route path="/login" component={Login} />
                        {/* <Route path="/reset" component={ResetPassword} /> */}
                    </div>
                </HashRouter>
            </div>
        </section>
    );
}
