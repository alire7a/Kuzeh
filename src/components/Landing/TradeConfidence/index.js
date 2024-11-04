import React from 'react';

const TradeConfidence = () => {
    return (
        <div className={"px-20 pt-[120px] pb-[90px] flex flex-col gap-[100px] justify-between"}>
            <div>
                <h2 className={"font-semibold text-[44px] leading-[52px] w-[800px]"}>
                    Trade with confidence from
                    production quality to purchase
                    protection
                </h2>
            </div>
            <div className={"flex gap-5 justify-between"}>
                <div className={"w-full bg-white rounded-20 px-[50px] pt-[54px] pb-[75px] flex flex-col justify-between"}>
                    <div className={"text-20 leading-[26px] mb-8"}>
                        Ensure production quality with
                    </div>
                    <div className={"leading-[22px] mb-[46px] max-w-[570px]"}>
                        Connect with a variety of suppliers with third-party-verified credentials and
                        capabilities. Look for the "Verified" logo to begin sourcing with experienced
                        suppliers your business could rely on.
                    </div>
                    <div className={"flex gap-5 items-center"}>
                        <div
                            className={"border-1 border-black-0 cursor-pointer rounded-[99px] flex gap-1 items-center px-5 py-3"}>
                            <div>
                                <img src="/images/TradeConfidence/pic1.png" alt=""/>
                            </div>
                            <div className={"font-medium"}>
                                Watch video
                            </div>
                        </div>
                        <div className={"font-medium leading-[50px] underline"}>
                            Learn more
                        </div>
                    </div>
                </div>
                <div className={"w-full bg-white rounded-20 px-[50px] pt-[54px] pb-[75px] flex flex-col justify-between"}>
                    <div className={"text-20 leading-[26px] mb-8"}>
                        Protect your purchase with
                    </div>
                    <div className={"leading-[22px] mb-[46px] max-w-[570px]"}>
                        Source confidently with access to secure payment options, protection against
                        product or shipping issues, and mediation support for any purchase-related
                        concerns when you order and pay on Alibaba.com.
                    </div>
                    <div className={"flex gap-5 items-center"}>
                        <div className={"border-1 border-black-0 cursor-pointer rounded-[99px] flex gap-1 items-center px-5 py-3"}>
                            <div>
                                <img src="/images/TradeConfidence/pic1.png" alt=""/>
                            </div>
                            <div className={"font-medium"}>
                                Watch video
                            </div>
                        </div>
                        <div className={"font-medium leading-[50px] underline"}>
                            Learn more
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradeConfidence;