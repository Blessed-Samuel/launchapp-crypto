"use client";

import Container from "@/components/Container";
import { useState } from "react";

export default function Features() {
    const [index, setIndex] = useState(0);
    const [isBouncing, setIsBouncing] = useState(false);

    const [showMore, setShowMore] = useState(false);

    function handleClick() {
        setIndex(index + 1);
        setIsBouncing(true);

        setTimeout(() => setIsBouncing(false), 200);
    }

    function handleShowMore() {
        setShowMore(!showMore);
    }

    return (
        <Container>
            <div>
                <button onClick={handleClick} className={`mr-2 text-white text-lg transition-transform duration-300 rounded-md ${isBouncing ? "scale-95" : ""} bg-blue-500 p-4`}>Click Me!</button>
                <span>Index + {index}</span>
            </div>
            <button onClick={handleShowMore} className="text-white text-lg">{showMore ? 'hide' : ''}</button>
            <h1> Features at Coinary <span className="text-red-200">Crypto</span></h1>
        </Container>
    );
}
