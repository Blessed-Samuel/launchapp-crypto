"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar: React.FC<{}> = () => {
    return (
        <div className="h-[120px] mt-10 rounded-lg z-50 px-16">
            <div className="p-4 rounded-full bg-slate-800 bg-opacity-20 backdrop-blur-sm flex flex-row items-center justify-between m-auto px-[30px]">
                <Link href="/" title="Launchapp Logo" className="h-auto w-auto flex flex-row items-center">
                    <Image
                        src="/Launchapp-logo.svg"
                        alt="Launchapp Logo"
                        width={20}
                        height={20}
                        sizes="100vw"
                    />
                </Link>

                <div className="flex space-x-8">
                    <Link href="/" className="font-light text-[13px]">
                        Home
                    </Link>
                    <Link href="/features" className="font-light text-[13px]">
                        Features
                    </Link>
                    <Link href="/career" className="font-light text-[13px]">
                        Career
                    </Link>
                </div>

                <div className="">
                    <button
                        onClick={() => window.open("mailto:samuelalisigwe22@gmail.com", "_blank")}
                        className="text-[13px] z-[1]bg-clip-text  bg-gradient-to-br from-[#5200FF] to-[#FFAF36] text-white rounded-3xl cursor-pointer font-semibold py-3 px-5"
                    >
                        Launch App
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
