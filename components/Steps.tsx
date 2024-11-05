"use client";

import React from "react";
import Image from "next/image";

const Steps: React.FC<{}> = () => {
    return (
        <section id="steps" className="mt-52 mb-16 flex flex-col items-center  justify-center px-6 md:px-0">
            <h1 className="text-center text-6xl font-extrabold  mb-16 text-gray-300">Earn while walking</h1>
            <Image src="./steps.svg" alt="step-image" width={1000} height={1000} />
        </section>
    )
}

export default Steps;
