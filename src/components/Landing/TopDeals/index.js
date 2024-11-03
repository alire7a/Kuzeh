import React, { useRef, useEffect, useState } from 'react';
import CustomButton from "@/components/CustomButton";

const TopDeals = () => {
    const scrollContainerRef = useRef(null);
    const itemsRef = useRef([]);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            const items = Array.from(container.children);
            itemsRef.current = items;
            items.forEach(item => {
                const clone = item.cloneNode(true);
                container.appendChild(clone);
            });
            container.scrollLeft = items.length * 420;
        }
    }, []);

    const scrollLeft = () => {
        const container = scrollContainerRef.current;
        if (container) {
            container.scrollBy({
                left: -420,
                behavior: 'smooth',
            });
            setTimeout(() => {
                if (container.scrollLeft < 420) {
                    container.scrollLeft = itemsRef.current.length * 420;
                }
            }, 500);
        }
    };

    return (
        <div className="padLayout flex flex-col gap-9">
            <div className="flex items-center justify-between">
                <h2 className="font-semibold text-24 text-black-100 leading-[30px]">Top deals</h2>
                <CustomButton text={"View more"} className={"bg-transparent border-1 border-black-0"} />
            </div>

            <div className="relative overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className={`absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent opacity-100 transition-opacity duration-300 z-10`}></div>
                <div className={`absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent opacity-100 transition-opacity duration-300 z-10`}></div>

                <button className={`absolute left-4 bottom-[45%] z-20 cursor-pointer transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                        onClick={scrollLeft}
                >
                    <img src="/images/TopDeals/leftArrow.png" alt="Scroll Left" />
                </button>

                <div ref={scrollContainerRef}
                    className="relative flex gap-6 overflow-x-auto scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <div className="flex flex-col gap-5 min-w-[420px] flex-shrink-0 bg-white rounded-16 shadow-md p-5 snap-start">
                        <img src="/images/TopDeals/pic1.png" className="rounded-lg" alt="Deal 1" />
                        <p className="text-black-400 font-medium text-20 leading-[26px]">Deals on best sellers</p>
                    </div>
                    <div className="flex flex-col gap-5 min-w-[420px] flex-shrink-0 bg-white rounded-16 shadow-md p-5 snap-start">
                        <img src="/images/TopDeals/pic2.png" className="rounded-lg" alt="Deal 2" />
                        <p className="text-black-400 font-medium text-20 leading-[26px]">Deals on best sellers</p>
                    </div>
                    <div className="flex flex-col gap-5 min-w-[420px] flex-shrink-0 bg-white rounded-16 shadow-md p-5 snap-start">
                        <img src="/images/TopDeals/pic3.png" className="rounded-lg" alt="Deal 3" />
                        <p className="text-black-400 font-medium text-20 leading-[26px]">Deals on best sellers</p>
                    </div>
                    <div className="flex flex-col gap-5 min-w-[420px] flex-shrink-0 bg-white rounded-16 shadow-md p-5 snap-start">
                        <img src="/images/TopDeals/pic1.png" className="rounded-lg" alt="Deal 4" />
                        <p className="text-black-400 font-medium text-20 leading-[26px]">Deals on best sellers</p>
                    </div>
                    <div className="flex flex-col gap-5 min-w-[420px] flex-shrink-0 bg-white rounded-16 shadow-md p-5 snap-start">
                        <img src="/images/TopDeals/pic2.png" className="rounded-lg" alt="Deal 5" />
                        <p className="text-black-400 font-medium text-20 leading-[26px]">Deals on best sellers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopDeals;
