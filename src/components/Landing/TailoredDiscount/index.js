import React from 'react';

const TailoredDiscount = () => {
    return (
        <div className={"py-[96px] flex flex-col items-center gap-20"}>
            <div className={"w-[966px] flex flex-col gap-5 text-center"}>
                <h2 className={"font-semibold text-[44px] leading-[52px]"}>
                    Get tailored discounts, services, and tools for
                    your business stage.
                </h2>
                <p className={"text-20 leading-[26px]"}>
                    Grow with curated benefits offered by the free Kouzeh.com Membership, whether you are a small
                    business needing the essentials to start sourcing or a well-established enterprise looking for tools and
                    solutions for more complex orders.
                </p>
            </div>
            <div className={"flex flex-col gap-8"}>
                <div className={"text-32 w-[800px] text-center"}>
                    “As an entrepreneur who is deeply involved in the
                    Beauty industry, I have been very devoted to creating
                    my original products. Kouzeh has been my trusted
                    partner in this process.”
                </div>
                <div className={"flex flex-col gap-4 items-center"}>
                    <div>
                        <img src="/images/TailoredDiscount/pic1.png" alt=""/>
                    </div>
                    <div className={"flex flex-col gap-1 text-center"}>
                        <div className={"font-semibold text-18 leading-[28px]"}>
                            Eva Jane
                        </div>
                        <div className={"leading-[24px]"}>
                            Founder of Eva Jane Beauty
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TailoredDiscount;