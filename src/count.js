import React, { useState } from "react";

export default function Count(props) {
    const [number, setNumber] = useState(0);

    let i = number;

    function add() {
        i++;

        setNumber(i);
    }

    function minus() {
        if (i > 0) {
            i--;

            setNumber(i);
        } else {
            return;
        }
    }

    function clear() {
        i = 0;
        setNumber(i);
    }

    return (
        <div className="click-container">
            <div className="title">{props.title} </div>
            <div className="counter">
                <div className="count down">
                    <button
                        className="minus"
                        onClick={() => minus(this, number)}
                    >
                        -
                    </button>
                </div>
                <div className="number">{number}</div>
                <div className="count up">
                    <button className="plus" onClick={add}>
                        +
                    </button>
                </div>
            </div>
            <div className="count clear">
                <button className="reset" onClick={clear}>
                    clear
                </button>
            </div>
        </div>
    );
}
