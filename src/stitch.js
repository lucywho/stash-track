import React, { useState } from "react";

export default function Stitch() {
    const [number, setNumber] = useState(0);
    let i = number;

    function add() {
        i++;

        setNumber(i);
    }

    function minus() {
        i--;

        setNumber(i);
    }

    return (
        <div className="click-container">
            <div className="title">Stitches</div>
            <div className="counter">
                <div className="stitch-minus">
                    <button className="minus" onClick={minus}>
                        -
                    </button>
                </div>
                <div className="stitch number">{number}</div>
                <div className="stitch-plus">
                    <button className="plus" onClick={add}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}
