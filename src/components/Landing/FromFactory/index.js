import React from 'react';

const FromFactory = () => {
    return (
        <div className={"px-20 pt-[70px] pb-[109px] bg-white flex flex-col gap-12"}>
            <div>
                <h2 className={"text-32 font-semibold leading-[40px] text-black-200"}>
                    Source direct-from-factory
                </h2>
            </div>
            <div className={"flex gap-5 items-center items-stretch"}>
                <div className={"rounded-16 bg-wheatBg overflow-hidden flex flex-col justify-between"}>
                    <div>
                        <img src="/images/FromFactory/pic1.png" alt=""/>
                    </div>
                    <div className={"flex items-center justify-between gap-4 px-6 py-8"}>
                        <div className={"font-semibold text-24 leading-[32px] text-black-500"}>
                            Take factory live tours
                        </div>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#101828" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={"rounded-16 bg-wheatBg overflow-hidden"}>
                    <div>
                        <img src="/images/FromFactory/pic2.png" alt=""/>
                    </div>
                    <div className={"flex items-center justify-between gap-4 px-6 py-8"}>
                        <div className={"font-semibold text-24 leading-[32px] text-black-500"}>
                            Connect with top-ranking manufacturers
                        </div>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#101828" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={"rounded-16 bg-wheatBg overflow-hidden"}>
                    <div>
                        <img src="/images/FromFactory/pic3.png" alt=""/>
                    </div>
                    <div className={"flex items-center justify-between gap-4 px-6 py-8"}>
                        <div className={"font-semibold text-24 leading-[32px] text-black-500"}>
                            Get samples
                        </div>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#101828" stroke-width="2"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FromFactory;