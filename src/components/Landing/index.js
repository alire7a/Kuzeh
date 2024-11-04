import React from 'react';
import Hero from "@/components/Landing/Hero";
import Heading from "@/components/Landing/Heading";
import Explore from "@/components/Landing/Explore";
import Discover from "@/components/Landing/Discover";
import TopDeals from "@/components/Landing/TopDeals";
import FromFactory from "@/components/Landing/FromFactory";

const Landing = () => {
    return (
        <div className={"relative"}>
            <Heading/>
            <Hero/>
            <Explore/>
            <Discover/>
            <TopDeals/>
            <FromFactory/>
        </div>
    );
};

export default Landing;
