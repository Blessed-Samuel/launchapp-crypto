"use client";

import React, {useState} from "react";
import Image from "next/image";

const Rarity: React.FC<{}> = () => {
    const [scale, setScale] = useState(false);
    const handleScale = () => {
        setScale(true);

        setTimeout(() => {
            setScale(false);
        }, 200)
    };

    return (
        <section id="rarity" className="mb-16 mt-60">
            <div className="space-y-48 md:px-0 px-6">
                <div className="flex flex-col md:flex-row gap-14 items-center">
                    <div className="mb-14">
                        <h1 className="text-[2.7rem] font-extrabold mb-6 text-gray-300">Download Betterstep</h1>
                        <p className="font-extralight text-xl max-w-2xl mx-auto text-gray-300">Start earning money by walking! Download our app now and convert your steps into earnings with our blockchain and cryptocurrency-based experience.</p>
                    </div>

                    <Image src="./Card-1.svg" alt="card-1-image" width={500} height={500} />
                </div>

                <div className="flex flex-col md:flex-row-reverse gap-14 items-center">
                    <div className="mb-14">
                        <h1 className="text-[2.5rem] font-extrabold mb-6 text-gray-300">Walk, Earn, and Thrive</h1>
                        <p className="font-extralight text-xl max-w-2xl text-gray-300">The earned rewards are distributed equally in $BTT and $BFF tokens. Our goal is to provide users with a fun, rewarding, and innovative experience. Discover our project now and turn your steps into earnings.</p>

                        <button className={`mt-8 text-[#5283FF] text-sm bg-[#363636] bg-opacity-60 backdrop-blur-lg border-2 border-gray-500 px-6 py-4 rounded-lg hover:bg-[#2a2a2a] transition-transform duration-300 ${scale ? "scale-95" : ""}`} onClick={handleScale}>Launch App</button>
                    </div>

                    <Image src="./Card-2.svg" alt="card-2-image" width={500} height={500} />
                </div>
            </div>
        </section>
    );
};

export default Rarity;
