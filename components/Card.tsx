import React from "react";
import Image from "next/image";

interface CardProps {
    title: string;
    subtext: string;
    content: string;
    icon: string;
    textColor?: string;
}

const Card: React.FC<CardProps> = ({
    title,
    subtext,
    content,
    icon,
    textColor = "text-white"
}) => {

    return (
        <div className="bg-white bg-opacity-15 backdrop-blur-3xl relative p-6 rounded-2xl border-2 border-opacity-30 border-gray-500 text-start">
            <div>
                <h5 className={`${textColor} font-bold mb-6 text-3xl`}>{title}</h5>
                <h4 className="font-semibold">{subtext}</h4>
                <h1 className="text-3xl text-white font-black">{content}</h1>
            </div>

            <div className="absolute rounded-full -top-6 -right-6 backdrop-blur-3xl">
                <Image
                    src={icon}
                    alt={icon}
                    width={60}
                    height={60}
                />
            </div>
        </div>
    )
};

export default Card;
