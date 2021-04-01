import React from "react";
import Name from "./name";
import Logo from "./logo";
import Welcome from "./welcome";
import { BrowserRouter, HashRouter, Route, Link } from "react-router-dom";
import Register from "./register";
import Login from "./login";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <div id="app">
                    <div id="logo">
                        <Logo />
                    </div>

                    <div id="banner">
                        <Name />
                    </div>

                    <div id="nav-bar">
                        <Link to="/register">
                            <button>register</button>
                        </Link>
                        <Link to="/login">
                            <button>login</button>
                        </Link>
                    </div>
                    <div id="display-area">
                        <HashRouter>
                            <div>
                                <Route path="/" component={Welcome} />
                                <Route path="/register" component={Register} />
                                <Route path="/login" component={Login} />
                                {/* <Route path="/reset" component={ResetPassword} /> */}
                            </div>
                        </HashRouter>
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}
