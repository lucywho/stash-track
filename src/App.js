import React from "react";
import Name from "./name";
import { BrowserRouter } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Name />
            </div>
        </BrowserRouter>
    );
}
