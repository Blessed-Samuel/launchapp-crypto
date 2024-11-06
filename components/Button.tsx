"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ButtonProps {
    icon: string;
    label: string;
    bgColor?: string;
    borderColor?: string;
    borderThickness?: string;
    buttonOpacity?: string;
    textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
    icon,
    label,
    bgColor = "bg-white",
    borderColor = "border-gray-300",
    borderThickness = "border",
    buttonOpacity = "bg-opacity-30",
    textColor = "text-white"
}) => {

    // Bouncing Function for Button.
    const [isBouncing, setIsBouncing] = useState<boolean>(false);
    const handleClick = () => {
        setIsBouncing(true);

        setTimeout(() => {
            setIsBouncing(false);
        }, 200);
    };

    return (
        <button type="button"
            onClick={handleClick}
            className={`transition-transform duration-300 ${isBouncing ? "scale-95" : ""} ${bgColor} ${borderColor} ${borderThickness} ${buttonOpacity} ${textColor} backdrop-blur-lg flex items-center space-x-4 font-normal py-4 px-6 rounded-lg border`}
        >
            <Image src={icon} alt={label} width={20} height={20} className="w-auto h-auto"/>
            <span>{label}</span>
        </button>
    );
};

export default Button;
