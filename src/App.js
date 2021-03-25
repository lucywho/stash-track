import React from "react";
import Name from "./name";
import Logo from "./logo";
import Welcome from "./welcome";
import { BrowserRouter } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <div className="app container">
                <div id="nav-bar">
                    <Logo />
                </div>

                <div id="main-section">
                    <div id="banner">
                        <Name />
                    </div>
                    <div id="display">
                        <Welcome />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}
