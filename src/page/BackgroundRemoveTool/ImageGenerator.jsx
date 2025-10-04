"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/Typography/header/Header";
import Paragraph from "@/Typography/text/Paragraph";
import Image from "next/image";
import { Ai1, Ai2, Ai3, note, obremover, sound, textspech, textspechimage } from "@/utils/image";

const ImageGenerator = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <div
                class="relative bg-cover bg-center rounded-[30px] lg:mx-12 mx-3.5 my-10 sm:py-20 pt-0 px-6 text-center overflow-hidden"
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <Header
                        level={2}
                        text="NEW TOOLS"
                        className=" xl:text-[160px] md:text-[100px] sm:block hidden text-[50px] !font-bold text-[var(--litesceen)] opacity-30 tracking-widest select-none"
                    />
                </div>

                {/* Foreground Heading */}
                <h2 className="relative top-[30px] xl:text-[50px] text-[30px] font-bold text-[var(--doubelblack)] leading-snug">
                    Spark Your Imagination With{" "}
                    <span className="text-[var(--orange)]">Generative AI</span>
                </h2>

                {/* Subtext (optional) */}
                <Paragraph className="relative top-[55px] font-medium text-lg  text-[var(--paragraphtitle)] !mx-auto !text-center max-w-[1138px] " text="Unleash your creativity with generative AI, transforming your ideas into
        unique and inspiring designs. Explore endless possibilities and elevate
        your projects to new heights."/>
            </div>

            <div className="flex flex-col xl:flex-row justify-between items-center lg:px-20 md:px-12 px-4 gap-12">
                <div className="xl:text-left text-center !mx-auto">
                    <div className="xl:text-left text-center !mx-auto">
                        <button
                            type="button"
                            className=" text-[var(--orange)] bg-[var(--liteorange)] rounded-[44px] px-4 py-1.5 font-bold text-sm leading-4"
                        >
                            NEW
                        </button>
                    </div>
                    <Header className="text-[var(--doubelblack)] text-[40px] font-bold" text="AI Image Generator" />
                    <Paragraph className="font-medium text-lg xl:text-left text-center !mx-auto  text-[var(--paragraphtitle)] !max-w-[563px]" text="Create stunning visuals effortlessly with our AI Image Generator. Transform your ideas into high-quality images with advanced technology that brings your concepts to life." />
                    <button
                        type="button"
                        disabled
                        className=" mt-11 font-bold text-base leading-5 px-16 py-3.5 rounded-[var(--radius)] bg-[var(--btnbg)] text-[var(--white)]"
                    >
                        Try Now
                    </button>
                </div>

                <div className="flex justify-end items-center xl:w-[738px] w-full sm:h-[494px] h-[300px]">
                    <div className="relative group xl:w-[664px] w-full sm:h-[420px] h-[290px] flex justify-center">

                        {/* Card 1 */}
                        <div className="absolute transition-all duration-500 ease-in-out
                    xl:group-hover:-translate-x-50
                    sm:group-hover:-translate-x-30
                    group-hover:-translate-x-15
                    group-hover:-rotate-6">
                            <Image
                                src={Ai1}
                                alt="ai image1"
                                
                                height={380}
                                className="rounded-xl shadow-xl md:w-[325px] sm:w-[250px] w-[197px]"
                            />
                        </div>

                        {/* Card 2 (middle - main card) */}
                        <div className="absolute transition-all duration-500 ease-in-out z-10">
                            <Image
                                src={Ai2}
                                alt="ai image2"
                                height={380}
                                className="rounded-xl shadow-xl md:w-[325px] sm:w-[250px] w-[197px]"
                            />
                        </div>

                        {/* Card 3 */}
                        <div className="absolute transition-all duration-500 ease-in-out
                    xl:group-hover:translate-x-50
                    sm:group-hover:translate-x-30
                    group-hover:translate-x-15
                    group-hover:rotate-6">
                            <Image
                                src={Ai3}
                                alt="ai image3"
                                height={380}
                                className="rounded-xl shadow-xl md:w-[325px] sm:w-[250px] w-[197px]"
                            />
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default ImageGenerator
