"use client";

import React from "react";
import Button from "./Button";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
    return (
        <section id="banner" className="mt-12">
            <div className="flex flex-col items-center text-center">
                <div className="mb-16">
                    <h1 className="text-[55px] font-extrabold bg-clip-text mb-2 text-transparent bg-gradient-to-r from-[#5200FF] via-[#FFAF36] to-[#FF3C6A]">Swift Blockchain Revolution</h1>
                    <p className="font-extralight">Ready to energize your life and turn it into earnings? With Move to Earn, your steps hold real value. Simply walk, run, or exercise to earn. Each step matters.</p>
                </div>

                <div className="flex space-x-12 mb-16">
                    <Button
                        icon="/googlePlayicon.svg"
                        label="Play Store"
                        bgColor="bg-white"
                        borderColor="border-gray-500 border-opacity-40"
                        borderThickness="border-2"
                        buttonOpacity="bg-opacity-10"
                    />
                    <Button
                        icon="/AppleLogoBlack.svg"
                        label="Apple Store"
                        bgColor="bg-white"
                        buttonOpacity="bg-opacity-70"
                        borderThickness="border-none"
                        textColor="text-black"
                    />
                </div>

                <Image
                    src="/nftImages.svg"
                    alt="nft Images"
                    width={100}
                    height={100}
                    className="w-full"
                />
            </div>
        </section>
    )
}

export default Banner;
