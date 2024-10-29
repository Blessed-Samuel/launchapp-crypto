import Container from "@/components/Container";
import { Poppins } from "next/font/google";
import { useState } from "react";

export default function Features() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleClick() {
        setIndex(index + 1);
    }

    function handleShowMore() {
        setShowMore(!showMore);
    }

    return (
        <Container>
            <button onClick={handleClick} className="text-teal-900 text-lg">Click Me!{index}</button>
            <button onClick={handleShowMore} className="text-teal-900 text-lg">{showMore ? 'hide' : 'show'}</button>
            <h1 style={{color: "blue", fontFamily: "poppins", backgroundColor: "white"}}> Features at Coinary <span className="text-red-200">Crypto</span></h1>
        </Container>
    );
}
