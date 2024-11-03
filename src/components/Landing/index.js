import React from 'react';
import Hero from "@/components/Landing/Hero";
import Heading from "@/components/Landing/Heading";
import Explore from "@/components/Landing/Explore";

const Landing = () => {
    return (
        <div className={"relative"}>
            <Heading/>
            <Hero/>
            <Explore/>
        </div>
    );
};

export default Landing;
