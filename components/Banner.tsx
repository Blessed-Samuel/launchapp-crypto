"use client";

import React from "react";
import Button from "@/components/Button";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
    return (
        <section id="banner" className="mb-28">
            <div className="flex flex-col items-center justify-center mt-6">
                <div className="mb-14 text-center">
                    <h1 className="text-6xl text-transparent font-extrabold  bg-gradient-to-r from-[#5200FF] via-[#FFAF36] to-[#FF3C6A] bg-clip-text mb-6 text-gray-300">Swift Blockchain Revolution</h1>
                    <p className="font-extralight max-w-2xl mx-auto text-gray-300">Ready to energize your life and turn it into earnings? With Move to Earn, your steps hold real value. Simply walk, run, or exercise to earn. Each step matters.</p>
                </div>

                <div className="flex flex-col md:flex-row md:space-y-0 space-y-4 space-x-0 md:space-x-12 md:mb-32 mb-20">
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

                <Image src="./nftimages.svg" alt="nftImage" width={100} height={100} className="w-auto h-auto md:px-0 px-6" />
            </div>
        </section>
    )
}

export default Banner;
