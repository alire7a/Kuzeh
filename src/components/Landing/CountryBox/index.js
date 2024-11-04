import React from 'react';
import CustomButton from "@/components/CustomButton";

const CountryBox = () => {
    return (
        <div className={"bg-white padLayout !pt-[80px] !pb-[124px] flex flex-col justify-between gap-[100px]"}>
            <div className="flex items-center justify-between">
                <h2 className="w-[425px] font-semibold text-32 text-black-100 leading-[40px]">
                    Find suppliers by country or region
                </h2>
                <CustomButton text={"View more"} className={"bg-transparent border-1 border-black-0"}/>
            </div>
            <div className={"flex items-center gap-[68px]"}>
                <div className={"flex flex-col gap-3 items-center w-[170px]"}>
                    <img src="/images/CountryBox/Japan.png" alt=""/>
                    <p className={"text-[22px] text-black-100 leading-[34px]"}>
                        Japan
                    </p>
                </div>
                <div className={"flex flex-col gap-3 items-center w-[170px]"}>
                    <img src="/images/CountryBox/Malaysia.png" alt=""/>
                    <p className={"text-[22px] text-black-100 leading-[34px]"}>
                        Malaysia
                    </p>
                </div>
                <div className={"flex flex-col gap-3 items-center w-[170px]"}>
                    <img src="/images/CountryBox/Türkiye.png" alt=""/>
                    <p className={"text-[22px] text-black-100 leading-[34px]"}>
                        Türkiye
                    </p>
                </div>
                <div className={"flex flex-col gap-3 items-center w-[170px]"}>
                    <img src="/images/CountryBox/South%20Korea.png" alt=""/>
                    <p className={"text-[22px] text-center text-black-100 leading-[34px]"}>
                        South Korea
                    </p>
                </div>
                <div className={"flex flex-col gap-3 items-center w-[170px]"}>
                    <img src="/images/CountryBox/Italy.png" alt=""/>
                    <p className={"text-[22px] text-black-100 leading-[34px]"}>
                        Italy
                    </p>
                </div>
                <div className={"flex flex-col gap-3 items-center w-[170px]"}>
                    <img src="/images/CountryBox/Vietnam.png" alt=""/>
                    <p className={"text-[22px] text-black-100 leading-[34px]"}>
                        Vietnam
                    </p>
                </div>
                <div className={"flex flex-col gap-3 items-center w-[170px]"}>
                    <img src="/images/CountryBox/Russia.png" alt=""/>
                    <p className={"text-[22px] text-black-100 leading-[34px]"}>
                        Russia
                    </p>
                </div>
                <div className={"flex flex-col gap-3 items-center w-[170px]"}>
                    <img src="/images/CountryBox/Thailand.png" alt=""/>
                    <p className={"text-[22px] text-black-100 leading-[34px]"}>
                        Thailand
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CountryBox;