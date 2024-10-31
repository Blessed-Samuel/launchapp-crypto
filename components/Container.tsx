"use client";

import React, { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <>
            <div className="max-w-4xl mx-auto sm:px-6 lg:px-6">
                {children}
            </div>
        </>
    );
};

export default Container;
