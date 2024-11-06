import React, { useRef, useEffect, useState } from 'react';
import CustomButton from "@/components/CustomButton";
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

const TopDeals = () => {
    const scrollContainerRef = useRef(null);
    const itemsRef = useRef([]);
    const [isHovered, setIsHovered] = useState(false);


    const configSlider = {
        slidesPerView:4,
        centeredSlides:true,
        initialSlide:2,
        loop:true,
        spaceBetween:24,
        modules:[Navigation],
        navigation:{
            nextEl:"#nextSlideTop",
            prevEl:"#prevSlideTop",
        }
    }



    return (
        <div className="flex flex-col gap-9 !pb-[100px]">
            <div className="flex items-center justify-between padLayout">
                <h2 className="font-semibold text-24 text-black-100 leading-[30px]">Top deals</h2>
                <CustomButton text={"View more"} className={"bg-transparent border-1 border-black-0"} />
            </div>

            <div className="relative overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className={`absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent opacity-100 transition-opacity duration-300 z-10`}></div>
                <div className={`absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent opacity-100 transition-opacity duration-300 z-10`}></div>

                <button id={"prevSlideTop"} className={`absolute left-4 bottom-0 top-0 my-auto z-20 cursor-pointer transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src="/images/TopDeals/leftArrow.png" alt="Scroll Left" />
                </button>
                <button id={"nextSlideTop"} className={`absolute right-4 bottom-0 top-0 my-auto rotate-180 z-20 cursor-pointer transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src="/images/TopDeals/leftArrow.png" alt="Scroll Left" />
                </button>


                <Swiper className={"w-full "} {...configSlider}>
                    <SwiperSlide>
                        <div className={"py-4"}>
                            <div className="flex flex-col gap-5  flex-shrink-0 bg-white rounded-16 shadow-sm p-5 snap-start">
                                <img src="/images/TopDeals/pic1.png" className="rounded-lg" alt="Deal 1" />
                                <p className="text-black-400 font-medium text-20 leading-[26px]">Deals on best sellers</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"py-4"}>
                            <div className="flex flex-col gap-5  flex-shrink-0 bg-white rounded-16 shadow-sm p-5 snap-start">
                                <img src="/images/TopDeals/pic2.png" className="rounded-lg" alt="Deal 2" />
                                <p className="text-black-400 font-medium text-20 leading-[26px]">Deals on best sellers</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"py-4"}>
                            <div className="flex flex-col gap-5  flex-shrink-0 bg-white rounded-16 shadow-sm p-5 snap-start">
                                <img src="/images/TopDeals/pic3.png" className="rounded-lg" alt="Deal 3" />
                                <p className="text-black-400 font-medium text-20 leading-[26px]">Deals on best sellers</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"py-4"}>
                            <div className="flex flex-col gap-5  flex-shrink-0 bg-white rounded-16 shadow-sm p-5 snap-start">
                                <img src="/images/TopDeals/pic1.png" className="rounded-lg" alt="Deal 4" />
                                <p className="text-black-400 font-medium text-20 leading-[26px]">Deals on best sellers</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"py-4"}>
                            <div className="flex flex-col gap-5  flex-shrink-0 bg-white rounded-16 shadow-sm p-5 snap-start">
                                <img src="/images/TopDeals/pic2.png" className="rounded-lg" alt="Deal 5" />
                                <p className="text-black-400 font-medium text-20 leading-[26px]">Deals on best sellers</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"py-4"}>
                            <div className="flex flex-col gap-5  flex-shrink-0 bg-white rounded-16 shadow-sm p-5 snap-start">
                                <img src="/images/TopDeals/pic2.png" className="rounded-lg" alt="Deal 2" />
                                <p className="text-black-400 font-medium text-20 leading-[26px]">Deals on best sellers</p>
                            </div>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"py-4"}>
                            <div className="flex flex-col gap-5  flex-shrink-0 bg-white rounded-16 shadow-sm p-5 snap-start">
                                <img src="/images/TopDeals/pic3.png" className="rounded-lg" alt="Deal 3" />
                                <p className="text-black-400 font-medium text-20 leading-[26px]">Deals on best sellers</p>
                            </div>
                        </div>

                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    );
};

export default TopDeals;
