"use client";

import React from "react";
import Image from "next/image";
import { teamMembers } from "@/components/TeamData";

const Team: React.FC<{}> = () => {
    return (
        <section id="Team" className="md:px-0 mx-auto flex flex-col items-center px-6 mb-16 mt-48">
            <h1 className="text-3xl font-extrabold mb-20 text-gray-300">Our Team</h1>

            {/* Image Card Container */}
            <div className="grid grid-row-1 gap-7 md:gap-20 md:grid-cols-3">
                {teamMembers.map((member) => (
                    <div key={member.id} className="space-y-8 flex flex-col justify-center items-center">
                        <Image
                            src={member.imageSrc}
                            alt={member.altText}
                            width={200}
                            height={200}
                            className="h-auto w-auto rounded-xl border-2 border-gray-400"
                        />
                        <div className="-space-y-2 text-center">
                            <h1 className="text-3xl font-extrabold mb-4 text-gray-300">{member.name}</h1>
                            <h4 className="text-md font-light mb-4 text-gray-300">{member.role}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;
