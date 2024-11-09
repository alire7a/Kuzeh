import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from "swiper/modules";
import s from "./styles.module.scss"
import 'swiper/css';
import "swiper/css/navigation";


const Explore = () => {


    const configSlider = {
        slidesPerView:1,
        modules:[Navigation],
        navigation:{
            nextEl:"#nextSlide",
            prevEl:"#prevSlide",
        }
    }

    return (
        <div className={`${s.container} -mt-[20px] relative z-10 padLayout grid grid-cols-3 gap-x-5 gap-y-6 `}>
            <div className={"exploreBoxPad flex flex-col gap-6 justify-between rounded-16 boxShadow bg-white"}>
                <div>
                    <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="84" height="84" rx="17" fill="#F4F4F4"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M26.9997 33.6667C26.9997 37.5327 30.1337 40.6667 33.9997 40.6667C37.8657 40.6667 40.9997 37.5327 40.9997 33.6667C40.9997 29.8007 37.8657 26.6667 33.9997 26.6667C30.1337 26.6667 26.9997 29.8007 26.9997 33.6667Z"
                              fill="#005160"/>
                        <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd"
                              d="M26.9997 50.3333C26.9997 54.1993 30.1337 57.3333 33.9997 57.3333C37.8657 57.3333 40.9997 54.1993 40.9997 50.3333C40.9997 46.4673 37.8657 43.3333 33.9997 43.3333C30.1337 43.3333 26.9997 46.4673 26.9997 50.3333Z"
                              fill="#005160"/>
                        <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd"
                              d="M42.9997 33.6667C42.9997 37.5327 46.1337 40.6667 49.9997 40.6667C53.8657 40.6667 56.9997 37.5327 56.9997 33.6667C56.9997 29.8007 53.8657 26.6667 49.9997 26.6667C46.1337 26.6667 42.9997 29.8007 42.9997 33.6667Z"
                              fill="#005160"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M42.9997 50.3333C42.9997 54.1993 46.1337 57.3333 49.9997 57.3333C53.8657 57.3333 56.9997 54.1993 56.9997 50.3333C56.9997 46.4673 53.8657 43.3333 49.9997 43.3333C46.1337 43.3333 42.9997 46.4673 42.9997 50.3333Z"
                              fill="#005160"/>
                    </svg>
                </div>
                <div className={"flex flex-col gap-2"}>
                    <h2 className={"font-semibold text-24 leading-[30px] max-w-[256px]"}>
                        Millions of business
                        offerings
                    </h2>
                    <p className={"leading-[22px]"}>
                        Explore products and suppliers for your business from millions of offerings worldwide.
                    </p>
                </div>

            </div>
            <div className={"exploreBoxPad flex flex-col gap-6 rounded-16 boxShadow bg-white"}>
                <div>
                    <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="84" height="84" rx="17" fill="#F4F4F4"/>
                        <path opacity="0.4"
                              d="M31.7878 48.5041L30.2371 39.2474C29.9849 37.7417 29.8588 36.9889 30.2472 36.4944C30.6355 36 31.3529 36 32.7877 36H51.2123C52.6471 36 53.3645 36 53.7528 36.4944C54.1412 36.9889 54.0151 37.7417 53.7628 39.2474L52.2121 48.5041C52.1556 48.8417 52.102 49.1619 52.0501 49.4657H31.9499C31.898 49.1619 31.8444 48.8417 31.7878 48.5041Z"
                              fill="#005160"/>
                        <path
                            d="M41.3333 55.3333H39.4395C36.3289 55.3333 34.7735 55.3333 33.6908 54.3669C32.608 53.4007 32.3346 51.7685 31.7878 48.5041L30.2371 39.2474C29.9849 37.7417 29.8588 36.9889 30.2472 36.4944C30.6355 36 31.3529 36 32.7877 36H51.2123C52.6471 36 53.3645 36 53.7528 36.4944C54.1412 36.9889 54.0151 37.7417 53.7628 39.2474L52.8551 44.6667"
                            stroke="#005160" stroke-width="2" stroke-linecap="round"/>
                        <path
                            d="M44.6667 53.1111C44.6667 53.1111 45.8334 53.1111 47 55.3334C47 55.3334 50.7059 49.7778 54 48.6667"
                            stroke="#005160" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M35.3333 36.0001V35.3334C35.3333 31.6515 38.3181 28.6667 42 28.6667C45.6818 28.6667 48.6666 31.6515 48.6666 35.3334V36.0001"
                            stroke="#005160" stroke-width="2"/>
                        <path d="M32 49.3333H41.3333" stroke="#005160" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
                <div className={"flex flex-col gap-2"}>
                    <h2 className={"font-semibold text-24 leading-[30px] max-w-[256px]"}>
                        Assured quality and transactions
                    </h2>
                    <p className={"leading-[22px]"}>
                        Explore products and suppliers for your business from millions of offerings worldwide.
                    </p>
                </div>

            </div>
            <div className={"exploreBoxPad flex flex-col gap-6 rounded-16 boxShadow bg-white"}>
                <div>
                    <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="84" height="84" rx="17" fill="#F4F4F4"/>
                        <path opacity="0.4"
                              d="M42 54C48.6274 54 54 48.6274 54 42C54 35.3726 48.6274 30 42 30C35.3726 30 30 35.3726 30 42C30 48.6274 35.3726 54 42 54Z"
                              fill="#005160"/>
                        <path
                            d="M48.6356 52C51.8689 49.8501 54 46.174 54 42C54 35.3726 48.6275 30 42 30C41.0835 30 40.1909 30.1027 39.3333 30.2974M48.6356 52V47.3333M48.6356 52H53.3333M35.3333 32.0207C32.1174 34.1734 30 37.8394 30 42C30 48.6275 35.3726 54 42 54C42.9165 54 43.8091 53.8972 44.6667 53.7027M35.3333 32.0207V36.6667M35.3333 32.0207H30.6667"
                            stroke="#005160" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className={"flex flex-col gap-2"}>
                    <h2 className={"font-semibold text-24 leading-[30px] max-w-[256px]"}>
                        One-stop trading
                        solution
                    </h2>
                    <p className={"leading-[22px]"}>
                        Explore products and suppliers for your business from millions of offerings worldwide.
                    </p>
                </div>
            </div>

            <div className={"col-span-3 flex flex-col items-center justify-center gap-20 rounded-16 bg-white boxShadow pt-[100px] px-[100px] pb-[137px]"}>
                <div>
                    <h2 className={"w-[771px] text-center text-black-100 leading-[52px] font-semibold text-[44px]"}>
                        Explore millions of offerings tailored
                        to your business needs
                    </h2>
                </div>
                <div className={"relative w-full"}>
                    <div className={`absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white/50 to-transparent opacity-100 transition-opacity duration-300 z-10`}></div>
                    <div className={`absolute inset-y-0 right-0 w-12 bg-gradient-to-r from-transparent to-white/50 opacity-100 transition-opacity duration-300 z-10`}></div>

                    <Swiper {...configSlider}>
                        <SwiperSlide>
                            <div className={"grid  grid-cols-5 gap-x-4 gap-y-6"}>
                                <div><img src="/images/Explore/pic1.png" alt=""/></div>
                                <div><img src="/images/Explore/pic2.png" alt=""/></div>
                                <div><img src="/images/Explore/pic3.png" alt=""/></div>
                                <div><img src="/images/Explore/pic4.png" alt=""/></div>
                                <div><img src="/images/Explore/pic5.png" alt=""/></div>
                                <div><img src="/images/Explore/pic6.png" alt=""/></div>
                                <div><img src="/images/Explore/pic7.png" alt=""/></div>
                                <div><img src="/images/Explore/pic8.png" alt=""/></div>
                                <div><img src="/images/Explore/pic9.png" alt=""/></div>
                                <div><img src="/images/Explore/pic10.png" alt=""/></div>
                            </div>
                        </SwiperSlide>   <SwiperSlide>
                        <div className={"grid  grid-cols-5 gap-x-4 gap-y-6"}>
                            <div><img src="/images/Explore/pic1.png" alt=""/></div>
                            <div><img src="/images/Explore/pic2.png" alt=""/></div>
                            <div><img src="/images/Explore/pic3.png" alt=""/></div>
                            <div><img src="/images/Explore/pic4.png" alt=""/></div>
                            <div><img src="/images/Explore/pic5.png" alt=""/></div>
                            <div><img src="/images/Explore/pic6.png" alt=""/></div>
                            <div><img src="/images/Explore/pic7.png" alt=""/></div>
                            <div><img src="/images/Explore/pic8.png" alt=""/></div>
                            <div><img src="/images/Explore/pic9.png" alt=""/></div>
                            <div><img src="/images/Explore/pic10.png" alt=""/></div>
                        </div>
                    </SwiperSlide>   <SwiperSlide>
                        <div className={"grid  grid-cols-5 gap-x-4 gap-y-6"}>
                            <div><img src="/images/Explore/pic1.png" alt=""/></div>
                            <div><img src="/images/Explore/pic2.png" alt=""/></div>
                            <div><img src="/images/Explore/pic3.png" alt=""/></div>
                            <div><img src="/images/Explore/pic4.png" alt=""/></div>
                            <div><img src="/images/Explore/pic5.png" alt=""/></div>
                            <div><img src="/images/Explore/pic6.png" alt=""/></div>
                            <div><img src="/images/Explore/pic7.png" alt=""/></div>
                            <div><img src="/images/Explore/pic8.png" alt=""/></div>
                            <div><img src="/images/Explore/pic9.png" alt=""/></div>
                            <div><img src="/images/Explore/pic10.png" alt=""/></div>
                        </div>
                    </SwiperSlide>
                    </Swiper>
                    <button id={"prevSlide"}   className={`absolute  -left-10 bottom-0 top-0  my-auto z-20 cursor-pointer transition-opacity duration-300`}>
                        <img src="/images/TopDeals/leftArrow.png" alt="Scroll Left" />
                    </button>
                    <button id={"nextSlide"} className={`absolute  -right-10 bottom-0 top-0  my-auto z-20 cursor-pointer transition-opacity duration-300 rotate-180`}>

                        <img className={"relative z-[2]"} src="/images/TopDeals/leftArrow.png" alt="Scroll right" />
                    </button>
                </div>


            </div>
        </div>
    );
};

export default Explore;
