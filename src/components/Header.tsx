import React from "react";

const Header: React.FC = () => {

    return (
        <header className="h-16 px-6 py-2 bg-teal-500 flex items-center justify-center shadow-sm md:justify-start">
            <span className="uppercase text-2xl text-white md:text-xl">
                x-change
            </span>
        </header>
    );
};

export default Header;