"use client";

import React, { useState } from "react";
import { faqItems } from "@/components/FAQData";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ: React.FC = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleFAQ = (id: number) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <section id="FAQ" className="mx-auto flex flex-col items-center px-6 md:px-0 mb-24 mt-48 md:mt-60">
            <h1 className="text-3xl text-center font-extrabold mb-10 text-gray-300">Frequently Asked Questions</h1>

            <div className="w-full max-w-2xl space-y-6">
                {faqItems.map((item) => (
                    <div key={item.id} className="bg-[#363636] border border-gray-500 rounded-lg p-6 mb-4">
                        <button
                            onClick={() => toggleFAQ(item.id)}
                            className="flex justify-between items-center w-full text-left text-gray-300"
                        >
                            <span className="text-lg font-semibold">{item.question}</span>
                            {openFAQ === item.id ? (
                                <FiChevronUp className="text-[#5283FF] text-2xl transition-transform duration-300" />
                            ) : (
                                <FiChevronDown className="text-[#5283FF] text-2xl transition-transform duration-300" />
                            )}
                        </button>

                        {/* Transition for answer */}
                        <div
                            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${openFAQ === item.id ? "max-h-screen" : "max-h-0"
                                }`}
                        >
                            <p className="mt-3 text-gray-400 font-light">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
