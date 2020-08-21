import React, { useState, useEffect } from "react";

export default function Counter() {
    const [rownumber, setRowNumber] = useState(0);
    const [stnumber, setStNumber] = useState(0);

    let s = stnumber;
    let r = rownumber;

    useEffect(() => {}, []);

    function radd() {
        r++;

        setRowNumber(r);
    }

    function rminus() {
        r--;

        setRowNumber(r);
    }

    function sadd() {
        s++;

        setStNumber(s);
    }

    function sminus() {
        s--;

        setStNumber(s);
    }

    return (
        <>
            <div className="click-container">
                <div className="title">Rows</div>
                <div className="counter">
                    <div className="row-minus">
                        <button className="minus" onClick={rminus}>
                            -
                        </button>
                    </div>
                    <div className="row number">{rownumber}</div>
                    <div className="row-plus">
                        <button className="plus" onClick={radd}>
                            +
                        </button>
                    </div>
                </div>
            </div>

            <div className="click-container">
                <div className="title">Stitches</div>
                <div className="counter">
                    <div className="stitch-minus">
                        <button className="minus" onClick={sminus}>
                            -
                        </button>
                    </div>
                    <div className="stitch number">{stnumber}</div>
                    <div className="stitch-plus">
                        <button className="plus" onClick={sadd}>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
