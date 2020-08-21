import React, { useState } from "react";

export default function Row() {
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
            <div className="title">Rows</div>
            <div className="counter">
                <div className="row-minus">
                    <button className="minus" onClick={minus}>
                        -
                    </button>
                </div>
                <div className="row number">{number}</div>
                <div className="row-plus">
                    <button className="plus" onClick={add}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}
