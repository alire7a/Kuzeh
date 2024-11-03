import React from 'react';
import CustomButton from "@/components/CustomButton";

const Discover = () => {
    return (
        <div className={"padLayout !py-[90px] flex flex-col gap-[45px]"}>
            <div className={"flex items-center justify-between"}>
                <h2 className={"font-semibold text-32 text-black-100 leading-[40px] w-[425px]"}>
                    Discover your next business opportunity
                </h2>
                <CustomButton text={"View more"} className={"bg-transparent border-1 border-black-0"}/>
            </div>

            <div className={"grid grid-cols-2 gap-6"}>
                <div className={"flex flex-col gap-8"}>
                    <div className={"flex items-center justify-between pr-10"}>
                        <div className={"font-semibold text-24 text-black-200 leading-[30px]"}>
                            Top ranking
                        </div>
                        <div className={"font-semibold leading-[36px] opacity-55"}>
                            View more
                        </div>
                    </div>
                    <div className={"px-8 py-[26px] flex flex-col gap-5 bg-white rounded-24"}>
                        <div className={"flex flex-col gap-2"}>
                            <div className={"font-medium text-20 leading-[26px] text-black-200"}>
                                Most popular
                            </div>
                            <div className={"text-black-300 leading-[22px]"}>
                                Men's Oem Service Hoodies & Sweatshirts
                            </div>
                        </div>
                        <div className={"grid grid-cols-4 grid-rows-3 gap-x-8 gap-y-4"}>
                            <div className={"col-span-3 row-span-3"}>
                                <img src="/images/Discover/pic1.png" className={"h-full w-full"} alt=""/>
                            </div>
                            <div>
                                <img src="/images/Discover/pic2.png" className={"h-full w-full"} alt=""/>
                            </div>
                            <div>
                                <img src="/images/Discover/pic3.png" className={"h-full w-full"} alt=""/>
                            </div>
                            <div>
                                <img src="/images/Discover/pic4.png" className={"h-full w-full"} alt=""/>
                            </div>
                        </div>
                        <div className={"flex items-center justify-between"}>
                            <div className={"flex gap-1 items-center"}>
                                <div className={"w-[25px] h-[6px] bg-greenBg rounded-8"}></div>
                                <div className={"w-1.5 h-1 bg-black-0 opacity-15 rounded-8"}></div>
                                <div className={"w-1.5 h-1 bg-black-0 opacity-15 rounded-8"}></div>
                                <div className={"w-1.5 h-1 bg-black-0 opacity-15 rounded-8"}></div>
                            </div>

                            <div className={"flex items-center gap-3"}>
                                <div className={"cursor-pointer"}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                            stroke="#141B34" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                        <path d="M13.5 8L10 12L13.5 16" stroke="#141B34" stroke-width="1.5"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div className={"cursor-pointer"}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                            stroke="#141B34" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                        <path d="M10.5 8L14 12L10.5 16" stroke="#141B34" stroke-width="1.5"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col gap-8"}>
                    <div className={"flex items-center justify-between pr-10"}>
                        <div className={"font-semibold text-24 text-black-200 leading-[30px]"}>
                            New arrivals
                        </div>
                        <div className={"font-semibold leading-[36px] opacity-55"}>
                            View more
                        </div>
                    </div>
                    <div className={"px-8 py-[26px] flex flex-col gap-5 bg-white rounded-24"}>
                        <div className={"flex py-[15px]"}>
                            <div className={"font-medium text-20 leading-[26px] text-black-200"}>
                                109,000+ products added today
                            </div>
                        </div>
                        <div className={"grid grid-cols-3 gap-x-8 gap-y-6"}>
                            <div className={"col-span-1"}>
                                <img src="/images/Discover/pic5.png" className={"h-full w-full"} alt=""/>
                            </div>
                            <div className={"col-span-2"}>
                                <img src="/images/Discover/pic7.png" className={"h-full w-full"} alt=""/>
                            </div>
                            <div className={"col-span-1"}>
                                <img src="/images/Discover/pic6.png" className={"h-full w-full"} alt=""/>
                            </div>
                            <div className={"col-span-2"}>
                                <img src="/images/Discover/pic8.png" className={"h-full w-full"} alt=""/>
                            </div>
                        </div>
                        <div className={"flex items-center justify-between"}>
                            <div className={"flex gap-1 items-center"}>
                                <div className={"w-[25px] h-[6px] bg-greenBg rounded-8"}></div>
                                <div className={"w-1.5 h-1 bg-black-0 opacity-15 rounded-8"}></div>
                                <div className={"w-1.5 h-1 bg-black-0 opacity-15 rounded-8"}></div>
                                <div className={"w-1.5 h-1 bg-black-0 opacity-15 rounded-8"}></div>
                            </div>

                            <div className={"flex items-center gap-3"}>
                                <div className={"cursor-pointer"}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                            stroke="#141B34" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                        <path d="M13.5 8L10 12L13.5 16" stroke="#141B34" stroke-width="1.5"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div className={"cursor-pointer"}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                            stroke="#141B34" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                        <path d="M10.5 8L14 12L10.5 16" stroke="#141B34" stroke-width="1.5"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Discover;