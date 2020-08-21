import React, { useEffect } from "react";
import Row from "./row";
import Stitch from "./stitch";
import Repeat from "./repeat";

export default function Counter() {
    useEffect(() => {}, []);

    return (
        <>
            <Row />

            <Stitch />

            <Repeat />
        </>
    );
}
