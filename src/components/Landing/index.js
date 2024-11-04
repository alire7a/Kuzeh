import React from 'react';
import Hero from "@/components/Landing/Hero";
import Heading from "@/components/Landing/Heading";
import Explore from "@/components/Landing/Explore";
import Discover from "@/components/Landing/Discover";
import TopDeals from "@/components/Landing/TopDeals";
import FromFactory from "@/components/Landing/FromFactory";
import TradeConfidence from "@/components/Landing/TradeConfidence";
import TailoredDiscount from "@/components/Landing/TailoredDiscount";
import GetStarted from "@/components/Landing/GetStarted";
import Empowering from "@/components/Landing/Empowering";
import CountryBox from "@/components/Landing/CountryBox";
import Footer from "@/components/Landing/Footer";

const Landing = () => {
    return (
        <div className={"relative"}>
            <Heading/>
            <Hero/>
            <Explore/>
            <Discover/>
            <TopDeals/>
            <FromFactory/>
            <TradeConfidence/>
            <TailoredDiscount/>
            <GetStarted/>
            <Empowering/>
            <CountryBox/>
            <Footer/>
        </div>
    );
};

export default Landing;
