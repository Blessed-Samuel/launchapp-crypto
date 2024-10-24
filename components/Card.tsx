import React from "react";
import Image from "next/image";

interface CardProps {
    title: string;
    subtext: string;
    content: string;
    icon: string;
    textColor?: string;
}

const Card: React.FC<CardProps> = ({ title, subtext, content, icon, textColor = "text-white" }) => {
    return (
        <div className="bg-white bg-opacity-15 backdrop-blur-3xl relative p-6 rounded-lg border-2 border-opacity-30 border-gray-500 text-start">
            <div>
                <h3 className={`${textColor} font-bold bg-clip-text mb-6 text-transparent bg-gradient-to-r from-[#5200FF] via-[#FFAF36] to-[#FF3C6A] text-3xl`}>{title}</h3>
                <h4 className="font-semibold">{subtext}</h4>
                <h5 className="text-3xl text-white font-black">{content}</h5>
            </div>

            <div className="absolute -top-6 -right-6 backdrop-blur-3xl rounded-full ">
                <Image
                    src={icon}
                    alt="fire icon"
                    width={60}
                    height={60}
                />
            </div>
        </div>
    )
};

export default Card;