import React from 'react';

const Heading = () => {
    return (
        <div className={"flex items-center fixed top-0 z-[100] w-full h-[60px] justify-between padLayout !py-3 bg-white"}>
            <div className={"flex items-center gap-5"}>
                <div className={"p-[10px] cursor-pointer rounded-8 shadow-lg"}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 8.5H20" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
                        <path d="M4 15.5H20" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
                    </svg>
                </div>
                <ul className={"flex items-center gap-5 text-black-100 text-14"}>
                    <li>
                        <a href="">
                        All categories

                        </a>
                    </li>
                    <li>
                        <a href="">
                        Featured selections
                        </a>

                    </li>
                    <li>
                        <a href="">
                        Trade Assurance
                        </a>

                    </li>
                </ul>
            </div>
            <ul className={"flex items-center gap-5 py-3 text-black-100 text-14"}>
                <li>
                    <a href="">
                          Buyer Central

                    </a>
                </li>
                <li>
                    <a href="">
                        Help Center

                    </a>
                </li>
                <li>
                    <a href="">
                         Get the app

                    </a>
                </li>
                <li>
                    <a href="">
                          Become a supplier

                    </a>
              </li>
            </ul>
        </div>
    );
};

export default Heading;
