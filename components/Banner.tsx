"use client";

import React from "react";
import Button from "./Button";

const Banner: React.FC<{}> = () => {
    return (
        <section id="banner">
            <div className="flex flex-col items-center text-center mt-6">
                <div className="mb-16">
                    <h1 className="text-5xl font-extrabold bg-clip-text mb-6 text-transparent bg-gradient-to-r from-[#5200FF] via-[#FFAF36] to-[#FF3C6A]">Swift Blockchain Revolution</h1>
                    <p className="font-extralight">Ready to energize your life and turn it into earnings? With Move to Earn, your steps hold real value. Simply walk, run, or exercise to earn. Each step matters.</p>
                </div>

                <div className="flex space-x-12">
                    <Button
                        icon="/googlePlayicon.svg"
                        label="Play Store"
                        bgColor="bg-white"
                        borderColor="border-gray-500"
                        borderThickness="border-2"
                        buttonOpacity="bg-opacity-10"
                    />
                    <Button
                        icon="/AppleLogoBlack.svg"
                        label="Apple Store"
                        bgColor="bg-white"
                        buttonOpacity="bg-opacity-70"
                        textColor="text-black"
                    />
                </div>
            </div>
        </section>
    )
}

export default Banner;
