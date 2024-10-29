"use client";

import Container from "@/components/Container";
import { useState } from "react";

export default function Career() {
    const [count, setCount] = useState(0);
    const [isBouncing, setIsBouncing] = useState(false);

    function handleClick() {
        setCount(count + 1);
        setIsBouncing(true);

        setTimeout(() => setIsBouncing(false), 200);
    }


    return (
        <Container>
            <h1 className="mb-2">Career Opportunities at Coinary Crypto</h1>
            <button onClick={handleClick} className={`p-4 bg-green-700 rounded-lg mr-2 transition-transform duration-300 ${isBouncing ? "scale-95" : ""} `}>Click me to Increment!</button>
            <span>the count is incremented by: {count}</span>
        </Container>
    );
}
