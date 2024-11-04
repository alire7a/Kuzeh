import React from 'react';
import CustomButton from "@/components/CustomButton";

const GetStarted = () => {
    return (
        <div className={"padLayout !pb-[60px] !pt-[90px] bg-white flex items-center justify-between"}>
            <div className={"flex flex-col gap-10 w-[452px]"}>
                <div className={"font-semibold text-[44px] leading-[52px]"}>
                    Ready to get started?
                </div>
                <div className={"text-20 w-[370px]"}>
                    Explore millions of products from trusted suppliers by signing up today!
                </div>
                <CustomButton text={"Sign up"} isSecondary className={"w-fit"}/>
            </div>
            <div>
                <img src="/images/GetStarted/pic1.png" alt=""/>
            </div>
        </div>
    );
};

export default GetStarted;