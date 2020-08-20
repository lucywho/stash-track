import React from "react";
import Logo from "./logo";
import Name from "./name";
import { BrowserRouter } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <div className="startelem">
                <div className="app-container">
                    <div className="strapline">
                        <Logo />
                        <Name />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}
