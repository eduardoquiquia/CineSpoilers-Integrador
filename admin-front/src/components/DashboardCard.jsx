import React from "react";

const DashboardCard = ({ title, value }) => {
    return (
        <div
            className="
                bg-bgCard 
                rounded-xl 
                p-5 
                border border-borderSoft
                hover:bg-bgHover
                transition
            "
        >
            <p className="text-textSoft text-sm uppercase tracking-wide">
                {title}
            </p>

            <h2 className="text-2xl font-bold mt-2">
                {value}
            </h2>
        </div>
    );
};

export default DashboardCard;