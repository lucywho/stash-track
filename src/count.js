import React, { useState } from "react";

export default function Count(props) {
    const title = props.title;

    const [number, setNumber] = useState(0);
    const [inc, setInc] = useState(1);

    let i = number;
    let x;

    function add() {
        i = number + inc;

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
        x = 1;
        setInc(x);
        document.getElementById("increment").value = "";
    }

    function setIncrement() {
        x = document.getElementById("increment").value;
        x = parseInt(x);

        setInc(x);
    }

    return (
        <div className="click-container">
            <div className="title">{title} </div>
            {title === "Stitches" && (
                <div className="settings">
                    <div className="count info">count in multiples of:</div>
                    <input
                        id="increment"
                        type="number"
                        name="increment"
                        placeholder="1"
                    />
                    <button className="count submit" onClick={setIncrement}>
                        confirm
                    </button>
                </div>
            )}
            <div className="counter">
                <div className="count down">
                    <button className="minus" onClick={minus}>
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
