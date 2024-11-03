import React from 'react';
import Hero from "@/components/Landing/Hero";
import Heading from "@/components/Landing/Heading";
import Explore from "@/components/Landing/Explore";
import Discover from "@/components/Landing/Discover";

const Landing = () => {
    return (
        <div className={"relative"}>
            <Heading/>
            <Hero/>
            <Explore/>
            <Discover/>
        </div>
    );
};

export default Landing;
