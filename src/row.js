import React from "react";
import Minus from "./minus";
import Plus from "./plus";
import Number from "./number";

export default function Row() {
    return (
        <div className="click-container">
            <div className="title">Rows</div>
            <div className="counter">
                <div className="row-minus">
                    <Minus />
                </div>
                <div className="row number">
                    <Number />
                </div>
                <div className="row-plus">
                    <Plus />
                </div>
            </div>
        </div>
    );
}
