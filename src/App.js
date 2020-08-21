import React from "react";
import Logo from "./logo";
import Name from "./name";
import Counter from "./counter";
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
                    <div className="counter-container">
                        <Counter />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}
