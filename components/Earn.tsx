import React from "react";
import Button from "./Button";
import Card from "./Card";
import Image from "next/image";

const Earn: React.FC<{}> = () => {
    return (
        <section id="banner" className="mt-60 mb-16">
            <div className="flex flex-col items-center justify-center text-center mt-6">
                <div className="mb-16">
                    <h1 className="text-5xl font-extrabold bg-clip-text mb-6 text-gray-300">Earn To Move</h1>
                    <p className="font-extralight">Ready to energize your life and turn it into earnings? With Move to Earn, your steps hold real value. Simply walk, run, or exercise to earn. Each step matters.</p>
                </div>

                <div className="flex space-x-12 mb-32">
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

                <div className="grid grid-cols-2 grid-rows-2 gap-10">
                    <Card
                        title="+112,256.60"
                        subtext="Kcal"
                        content="Calories burned"
                        icon="/fireIcon.svg"
                        textColor="text-transparent bg-clip-text bg-gradient-to-r from-[#C5882D] to-[#B72346]"
                    />
                    <Card
                        title="+112,256.60"
                        subtext="Kcal"
                        content="Calories burned"
                        icon="/roadIcon.svg"
                        textColor="text-transparent bg-clip-text bg-gradient-to-r from-[#979DD8] to-[#4431BA]"
                    />
                    <Card
                        title="+112,256.60"
                        subtext="Kcal"
                        content="Calories burned"
                        icon="/scale.svg"
                        textColor="text-transparent bg-clip-text bg-gradient-to-r from-[#236D49] to-[#30AE35]"
                    />
                    <Card
                        title="+112,256.60"
                        subtext="Kcal"
                        content="Calories burned"
                        icon="/group.svg"
                        textColor="text-transparent bg-clip-text bg-gradient-to-r from-[#705612] to-[#EDB628]"
                    />
                </div>
            </div>
        </section>
    )
}

export default Earn;
