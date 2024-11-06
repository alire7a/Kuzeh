import React from 'react';

const Empowering = () => {
    return (
        <div className={"padLayout !pt-[100px] !pb-[120px] flex flex-col gap-20"}>
            <div className={"flex gap-20"}>
                <h2 className={"font-semibold text-shadow text-[44px] leading-[52px] w-[660px]"}>
                    Empowering businesses through global trade
                </h2>
                <div className={"text-20 leading-[26px] w-[660px]"}>
                    Kouzeh offers one-stop B2B trading solutions for global small and medium-sized businesses,
                    empowering them to transform through digital trade, grasp opportunities, and accelerate growth
                    internationally.
                </div>
            </div>
            <div className={"flex items-center gap-5"}>
                <div>
                    <img src="/images/Empowering/pic1.png" alt=""/>
                </div>
                <div>
                    <img src="/images/Empowering/pic2.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Empowering;
