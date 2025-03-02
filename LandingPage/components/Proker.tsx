import React from "react";

const Proker: React.FC = () => {
    return (
        <div className="relative flex flex-col items-center p-6 w-full mx-auto">
            {/* Elips Atas */}
            <img
                src="/Ellipse Atas.png"
                alt="Elips Atas"
                className="w-full h-auto absolute -top-10 z-10"
            />

            {/* Proker Section */}
            <img
                src="/Proker Section.png"
                alt="Proker Section"
                className="w-full h-[1000px] object-cover"
            />

            {/* Elips Bawah */}
            <img
                src="/Ellipse Bawah.png"
                alt="Elips Bawah"
                className="w-full h-auto absolute -bottom-10 z-10"
            />
        </div>
    );
};

export default Proker;