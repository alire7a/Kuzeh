import React from 'react';
import Hero from "@/components/Landing/Hero";
import Heading from "@/components/Landing/Heading";
import Explore from "@/components/Landing/Explore";
import Discover from "@/components/Landing/Discover";
import TopDeals from "@/components/Landing/TopDeals";

const Landing = () => {
    return (
        <div className={"relative"}>
            <Heading/>
            <Hero/>
            <Explore/>
            <Discover/>
            <TopDeals/>
        </div>
    );
};

export default Landing;
