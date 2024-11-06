"use client";

import React from "react";
import Container from "@/components/Container";
import Image from "next/image";

const Feature: React.FC<{}> = () => {

    return (
        <section id="level" className="mb-16">
            <Container>
                <div className="md:px-0 px-6">
                    <div className="mb-12 flex flex-col md:flex-col gap-14 items-center">
                        <div className="-mb-12 text-center">
                            <h1 className="text-3xl font-extrabold mb-4 text-gray-300">Feature Level</h1>
                            <p className="font-extralight text-md max-w-2xl mx-auto text-gray-300">More information about the rarity levels of NFTs</p>
                        </div>

                        <Image src="./Circles.svg" alt="card-1-image" width={300} height={300} className="w-auto h-auto" />
                    </div>

                    <div className="space-y-32">
                        <Image src="./RarityTable.svg" alt="card-2-image" width={100} height={100} className="w-auto h-auto" />

                        <Image src="./nftimages.svg" alt="nft-image" width={100} height={100} className="w-auto h-auto" />

                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Feature;
