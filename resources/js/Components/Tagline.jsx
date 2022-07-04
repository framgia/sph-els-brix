import React from "react";

const Tagline = ({ className = "" }) => {
    return (
        <>
            <h1 className={className}>
                The next <span className="font-extrabold">big</span> thing in
                learning
            </h1>
        </>
    );
};

export default Tagline;
