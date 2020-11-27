import React from "react";
import Name from "./name";
import Logo from "./logo";
import Welcome from "./welcome";
import { BrowserRouter } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <div className="app container">
                <div className="banner">
                    <Logo />
                    <Name />
                </div>
                <Welcome />
            </div>
        </BrowserRouter>
    );
}
