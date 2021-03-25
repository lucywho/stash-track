import React from "react";
import Name from "./name";
import Logo from "./logo";
import Welcome from "./welcome";
import { BrowserRouter } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <div id="app">
                <div id="logo">
                    <Logo />
                </div>
                <div id="nav-bar"></div>

                <div id="banner">
                    <Name />
                </div>
                <div id="display-area">
                    <Welcome />
                </div>
            </div>
        </BrowserRouter>
    );
}
