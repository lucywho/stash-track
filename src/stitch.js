import React from "react";
import Minus from "./minus";
import Plus from "./plus";
import Number from "./number";

export default function Stitch() {
    return (
        <div className="stitch-container">
            <div className="stitch-title"></div>
            <div className="stitch-counter">
                <div className="stitch-minus">
                    <Minus />
                </div>
                <div className="stitch-number">
                    <Number />
                </div>
                <div className="stitch-plus">
                    <Plus />
                </div>
            </div>
        </div>
    );
}
