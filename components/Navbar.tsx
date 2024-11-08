"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
    const [isShow, setShow] = useState(false);

    const handleToggle = () => {
        setShow(!isShow);
    }

    return (
        <nav className="h-[120px] mt-10 rounded-lg z-50 px-4 md:px-16"> {/* Responsive padding */}
            <div className="p-4 px-6 rounded-full bg-slate-800 bg-opacity-20 backdrop-blur-sm flex flex-row items-center justify-between max-w-[95%] md:max-w-full m-auto">
                <Link href="/" title="Launchapp Logo" className="h-auto w-auto flex flex-row items-center">
                    <Image
                        src="/Launchapp-logo.svg"
                        alt="Launchapp Logo"
                        width={20}
                        height={20}
                        sizes="100vw"
                        className="w-auto -h-auto"
                    />
                </Link>

                <div className="hidden md:flex space-x-8"> {/* Hidden on mobile */}
                    <Link href="/" className="font-light text-[13px]">Home</Link>
                    <Link href="/features" className="font-light text-[13px]">Features</Link>
                    <Link href="/career" className="font-light text-[13px]">Career</Link>
                </div>

                <div className="hidden md:block"> {/* Hidden on mobile */}
                    <button
                        onClick={() => window.open("mailto:samuelalisigwe22@gmail.com", "_blank")}
                        className="text-[13px] bg-gradient-to-br from-[#5200FF] to-[#FFAF36] text-white rounded-3xl cursor-pointer font-semibold py-3 px-5"
                    >
                        Launch App
                    </button>
                </div>

                {/* Menu Icon for Mobile */}
                <div className="md:hidden z-50 flex items-center">
                    <button onClick={handleToggle} className="text-white">
                        {isShow ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Sidebar for Mobile */}
            {isShow && (
                <div className="z-50 fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center md:hidden">
                    <div className="space-y-6 text-white text-center text-lg">
                        <Link href="/" onClick={handleToggle} className="block">Home</Link>
                        <Link href="/features" onClick={handleToggle} className="block">Features</Link>
                        <Link href="/career" onClick={handleToggle} className="block">Career</Link>

                        <button
                            onClick={() => { window.open("mailto:samuelalisigwe22@gmail.com", "_blank"); handleToggle(); }}
                            className="mt-4 bg-gradient-to-br from-[#5200FF] to-[#FFAF36] text-white rounded-3xl cursor-pointer font-semibold py-3 px-5"
                        >
                            Launch App
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
