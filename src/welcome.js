import React from "react";
//import axios from "./axios";
import { HashRouter, Route } from "react-router-dom";
import Register from "./register";
import Login from "./login";
// import ResetPassword from "./reset"

export default function Welcome() {
    return (
        <section className="welcome centred">
            <div className="welcome-component">
                <div className="welcome-text">
                    <h1>Welcome to StashTrack.</h1>
                    <p>
                        Keep track of your craft supplies with this easy-to-use
                        app. Decide how much information to add, upload
                        pictures, easily edit your stash as you use materials or
                        buy more{" "}
                    </p>
                </div>
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
