import React from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";

const Earn: React.FC<{}> = () => {
    return (
        <section id="earn" className="mb-16 flex flex-col mt-6">
            <div className="flex flex-col items-center justify-center mt-6">
                <div className="mb-14 text-center">
                    <h1 className="text-6xl font-extrabold mb-6 text-gray-300">Earn To Move</h1>
                    <p className="font-extralight max-w-2xl text-gray-300">Ready to energize your life and turn it into earnings? With Move to Earn, your steps hold real value. Simply walk, run, or exercise to earn. Each step matters.</p>
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-10 px-6 md:px-0">
                <Card
                    title="+112,256.60"
                    subtext="Kcal"
                    content="Calories burned"
                    icon="/fireIcon.svg"
                    textColor="text-transparent bg-clip-text bg-gradient-to-r from-[#C5882D] to-[#B72346]"
                />
                <Card
                    title="+1,600,000.35"
                    subtext="Meter(M)"
                    content="Distance covered"
                    icon="/roadIcon.svg"
                    textColor="text-transparent bg-clip-text bg-gradient-to-r from-[#979DD8] to-[#4431BA]"
                />
                <Card
                    title="+16,256.20"
                    subtext="Kilogram(KG)"
                    content="Given kilogram"
                    icon="/scale.svg"
                    textColor="text-transparent bg-clip-text bg-gradient-to-r from-[#236D49] to-[#30AE35]"
                />
                <Card
                    title="+12,600.10"
                    subtext="User"
                    content="Total users"
                    icon="/group.svg"
                    textColor="text-transparent bg-clip-text bg-gradient-to-r from-[#705612] to-[#EDB628]"
                />
            </div>
        </section>
    )
}

export default Earn;
