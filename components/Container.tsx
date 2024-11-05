"use client";

import React, { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <>
            <div className="max-w-5xl mx-auto sm:px-8 lg:px-8">
                {children}
            </div>
        </>
    );
};

export default Container;
