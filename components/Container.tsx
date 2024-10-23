"use client";

import React, { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <>
            <div className="max-w-screen-md mx-auto">
                {children}
            </div>
        </>
    );
};

export default Container;
