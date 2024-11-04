import React from 'react';
import CustomButton from "@/components/CustomButton";

const Footer = () => {
    return (
        <div className={"flex flex-col gap-[128px] px-[70px] pt-[70px] pb-[120px]"}>
            <div className={"flex items-center gap-[80px] p-2"}>
                <div className={"flex flex-col gap-2 w-full"}>
                    <h3 className={"font-semibold text-32"}
                        style={{color:"rgb(16,24,40)"}}
                    >
                        Join our newsletter
                    </h3>
                    <p className={""}
                       style={{color:"rgb(71,84,103)"}}
                    >
                        We’ll send you a nice letter once per week. No spam.
                    </p>
                </div>
                <div className={"flex items-center gap-4"}>
                    <input type="text"
                           className={"bg-white w-[330px] outline-none px-[28px] py-4 rounded-[48px]"}
                           placeholder={"Enter your email"}
                           style={{
                               border: "1px solid rgb(208,213,221)",
                           }}
                    />
                    <CustomButton text={"Subscribe"} isSecondary className={"px-[28px] py-4"}/>
                </div>
            </div>
            <div className={"px-8 flex gap-8"}>
                <div className={"flex flex-col gap-4 w-[256px]"}>
                    <div className={"font-semibold text-14"}
                         style={{
                             color: "rgb(102,112,133)",
                         }}
                    >
                        Product
                    </div>
                    <ul className={"flex flex-col gap-4"}>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Overview
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Features
                        </li>
                        <li className={"flex items-center gap-4"}>
                            <div className={"font-semibold leading-[24px]"}
                                 style={{
                                     color: "rgb(71,84,103)",
                                 }}
                            >
                                Solutions
                            </div>
                            <div className={"py-0.5 px-2 text-12 font-medium rounded-16"}
                                 style={{
                                     color: "rgb(6,118,71)",
                                     backgroundColor: "rgb(236,253,243)",
                                     border: "1px solid rgb(171,239,198)",
                                 }}
                            >
                                New
                            </div>
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Tutorials
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Pricing
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Releases
                        </li>
                    </ul>
                </div>
                <div className={"flex flex-col gap-4 w-[256px]"}>
                    <div className={"font-semibold text-14"}
                         style={{
                             color: "rgb(102,112,133)",
                         }}
                    >
                        Company
                    </div>
                    <ul className={"flex flex-col gap-4"}>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            About us
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Careers
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Press
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            News
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Media kit
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Contact
                        </li>
                    </ul>
                </div>
                <div className={"flex flex-col gap-4 w-[256px]"}>
                    <div className={"font-semibold text-14"}
                         style={{
                             color: "rgb(102,112,133)",
                         }}
                    >
                        Resources
                    </div>
                    <ul className={"flex flex-col gap-4"}>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Blog
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Newsletter
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Events
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Help centre
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Tutorials
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Support
                        </li>
                    </ul>
                </div>
                <div className={"flex flex-col gap-4 w-[256px]"}>
                    <div className={"font-semibold text-14"}
                         style={{
                             color: "rgb(102,112,133)",
                         }}
                    >
                        Use cases
                    </div>
                    <ul className={"flex flex-col gap-4"}>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Startups
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Enterprise
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Government
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            SaaS centre
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Marketplaces
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Ecommerce
                        </li>
                    </ul>
                </div>
                <div className={"flex flex-col gap-4 w-[256px]"}>
                    <div className={"font-semibold text-14"}
                         style={{
                             color: "rgb(102,112,133)",
                         }}
                    >
                        Social
                    </div>
                    <ul className={"flex flex-col gap-4"}>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Twitter
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            LinkedIn
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Facebook
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            GitHub
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            AngelList
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Dribbble
                        </li>
                    </ul>
                </div>
                <div className={"flex flex-col gap-4 w-[256px]"}>
                    <div className={"font-semibold text-14"}
                         style={{
                             color: "rgb(102,112,133)",
                         }}
                    >
                        Legal
                    </div>
                    <ul className={"flex flex-col gap-4"}>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Terms
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Privacy
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Cookies
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Licenses
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Settings
                        </li>
                        <li className={"font-semibold leading-[24px]"}
                            style={{
                                color: "rgb(71,84,103)",
                            }}
                        >
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;