import React from "react";
import Minus from "./minus";
import Plus from "./plus";
import Number from "./number";

export default function Row() {
    return (
        <div className="row-container">
            <div className="row-title"></div>
            <div className="row-counter">
                <div className="row-minus">
                    <Minus />
                </div>
                <div className="row-number">
                    <Number />
                </div>
                <div className="row-plus">
                    <Plus />
                </div>
            </div>
        </div>
    );
}
