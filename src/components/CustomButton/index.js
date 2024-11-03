import React from 'react';

const CustomButton = ({className,text,isSecondary,onClick}) => {
    return (
        <button
            className={`py-4 rounded-30 px-[45px] font-semibold ${isSecondary ? "bg-greenBg text-white" : "bg-white text-black-200"} ${className}`}
            onClick={onClick}
            style={{
                boxShadow: isSecondary ? "" : "",
                border: isSecondary ? "" : "",
                background: isSecondary ? "" : ""
            }}
        >
            {text}
        </button>
    );
};

export default CustomButton;