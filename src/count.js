import React, { useState } from "react";

export default function Count(props) {
    const [number, setNumber] = useState(0);
    const [inc, setInc] = useState(1);

    const title = props.title;

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
    }

    function submit() {
        x = document.getElementById("increment").value;

        x = parseInt(x);
        console.log(x);

        setInc(x);
    }

    return (
        <div className="click-container">
            <div className="title">{title} </div>
            <div className="settings">
                <div className="count clear">
                    <button className="reset" onClick={clear}>
                        clear
                    </button>
                </div>
                {title === "Stitches" && (
                    <>
                        <input
                            id="increment"
                            type="number"
                            name="increment"
                            placeholder="1"
                        />
                        <button className="submit" onClick={submit}>
                            Submit
                        </button>
                    </>
                )}
            </div>
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
        </div>
    );
}
