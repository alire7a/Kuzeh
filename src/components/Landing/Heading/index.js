import React from 'react';

const Heading = () => {
    return (
        <div className={"flex items-center justify-between padLayout !py-3 bg-white"}>
            <div className={"flex items-center gap-5"}>
                <div className={"p-[10px] rounded-8"}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 8.5H20" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
                        <path d="M4 15.5H20" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
                    </svg>
                </div>
                <ul className={"flex items-center gap-5 text-black-100 text-14"}>
                    <li>
                        All categories
                    </li>
                    <li>
                        Featured selections
                    </li>
                    <li>
                        Trade Assurance
                    </li>
                </ul>
            </div>
            <ul className={"flex items-center gap-5 py-3 text-black-100 text-14"}>
                <li>
                    Buyer Central
                </li>
                <li>
                    Help Center
                </li>
                <li>
                    Get the app
                </li>
                <li>
                    Become a supplier
                </li>
            </ul>
        </div>
    );
};

export default Heading;