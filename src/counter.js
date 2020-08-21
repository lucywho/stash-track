import React, { useState, useEffect } from "react";

import Number from "./number";

export default function Counter() {
    const { number, setNumber } = useState(0);

    useEffect(() => {
        //
    }, []);

    function add() {
        setNumber = number + 1;
    }

    function minus() {
        setNumber = number - 1;
    }

    return (
        <>
            <div className="click-container">
                <div className="title">Rows</div>
                <div className="counter">
                    <div className="row-minus">
                        <button className="minus" onClick={minus}>
                            -
                        </button>
                    </div>
                    <div className="row number">
                        <Number />
                    </div>
                    <div className="row-plus">
                        <button className="plus" onClick={add}>
                            +
                        </button>
                    </div>
                </div>
            </div>

            <div className="click-container">
                <div className="title">Stitches</div>
                <div className="counter">
                    <div className="stitch-minus">
                        <button className="minus" onClick={minus}>
                            -
                        </button>
                    </div>
                    <div className="stitch number">
                        <Number />
                    </div>
                    <div className="stitch-plus">
                        <button className="plus" onClick={add}>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
