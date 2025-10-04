// import { newtools } from '@/utils/image'
// import React from 'react'

// const GenerativeAi = () => {
//   return (
//     <div>
//         <div className="bg-cover bg-center rounded-[30px] mx-12.5"
//                         style={{ backgroundImage: `url(${newtools.src})` }}>
//         </div>
//     </div>
//   )
// }

// export default GenerativeAi



"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/Typography/header/Header";
import Paragraph from "@/Typography/text/Paragraph";
import Image from "next/image";
import { Ai1, Ai2, Ai3, note, obremover, sound, textspech, textspechimage } from "@/utils/image";

const   GenerativeAi = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (

        <div>
            <div
                className="relative bg-cover bg-center rounded-[30px] mx-12 my-10 py-20 px-6 text-center overflow-hidden"
            //   style={{ backgroundImage: `url(${newtools.src})` }}
            >
                {/* Background Faint Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <Header
                        level={2}
                        text="NEW TOOLS"
                        className="text-[100px] md:text-[160px] !font-bold text-[var(--litesceen)] opacity-30 tracking-widest select-none"
                    />
                </div>

                {/* Foreground Heading */}
                <h2 className="relative top-[30px] text-[50px] font-bold text-[var(--doubelblack)] leading-snug">
                    Spark Your Imagination With{" "}
                    <span className="text-[var(--orange)]">Generative AI</span>
                </h2>

                {/* Subtext (optional) */}
                <Paragraph className="relative top-[55px] font-medium text-lg  text-[var(--paragraphtitle)] !mx-auto !text-center max-w-[1138px]" text="Unleash your creativity with generative AI, transforming your ideas into
        unique and inspiring designs. Explore endless possibilities and elevate
        your projects to new heights."/>
            </div>


            <div className="flex justify-between items-center px-51.5">
                <div>
                    <div className="">
                        <button
                            type="button"
                            className="text-[var(--orange)] bg-[var(--liteorange)] rounded-[44px] px-4 py-1.5 font-bold text-sm leading-4"
                        >
                            NEW
                        </button>
                    </div>
                    <Header className="text-[var(--doubelblack)] text-[40px] font-bold" text="AI Image Generator" />
                    <Paragraph className="font-medium text-lg text-[var(--paragraphtitle)] !max-w-[563px]" text="Create stunning visuals effortlessly with our AI Image Generator. Transform your ideas into high-quality images with advanced technology that brings your concepts to life." />
                    <button
                        type="button"
                        disabled
                        className="mt-11 font-bold text-base leading-5 px-16 py-3.5 rounded-[var(--radius)] bg-[var(--btnbg)] text-[var(--white)]"
                    >
                        Try Now
                    </button>
                </div>

                <div className="flex justify-end items-center w-[738px] h-[494px]">
                    <div className="relative group w-[664px] h-[420px]
                    
                    ">
                        {/* Card 1 */}
                        <div className="absolute transition-all duration-500 ease-in-out group-hover:-rotate-6 group-hover:-translate-x-50">
                            <Image
                                src={Ai1}
                                alt="ai image1"
                                width={325}
                                height={380}
                                className="rounded-xl shadow-xl"
                            />
                        </div>

                        {/* Card 2 (middle - main card) */}
                        <div className="absolute transition-all duration-500 ease-in-out z-10">
                            <Image
                                src={Ai2}
                                alt="ai image2"
                                width={325}
                                height={380}
                                className="rounded-xl shadow-xl"
                            />
                        </div>

                        {/* Card 3 */}
                        <div className="absolute transition-all duration-500 ease-in-out group-hover:rotate-6 group-hover:translate-x-50">
                            <Image
                                src={Ai3}
                                alt="ai image3"
                                width={325}
                                height={380}
                                className="rounded-xl shadow-xl"
                            />
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex justify-between items-center px-51.5">
                {/* ==== Left Side (Images) ==== */}
                <div className="relative flex items-center w-[738px] h-[494px] overflow-hidden">

                    {/* First Image (fixed) */}
                    <div className="absolute z-50 top-0 left-0">
                        <Image
                            src={obremover}
                            alt="obremover image"
                            height={340}
                            width={460}
                        />
                    </div>

                    {/* Second Image (animated + hover) */}
                    <motion.div
                        className="absolute top-20 left-48 cursor-pointer"
                        initial={{ x: 0, y: 0, opacity: 1 }} // 👈 Pela static j position ma dekhay
                        animate={{
                            x: isHovered ? 110 : 0,   // 👈 Hover pr move thay
                            y: isHovered ? 80 : 0,
                            opacity: 1,
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <Image
                            src={obremover}
                            alt="obremover image"
                            height={340}
                            width={460}
                        />
                    </motion.div>
                </div>

                {/* ==== Right Side (Text Content) ==== */}
                <div>
                    <div>
                        <button
                            type="button"
                            className="text-[var(--orange)] bg-[var(--liteorange)] rounded-[44px] px-4 py-1.5 font-bold text-sm leading-4"
                        >
                            NEW
                        </button>
                    </div>

                    <Header
                        className="text-[var(--doubelblack)] text-[40px] font-bold mt-4"
                        text="AI Image Generator"
                    />

                    <Paragraph
                        className="font-medium text-lg text-[var(--paragraphtitle)] !max-w-[563px] mt-3"
                        text="Create stunning visuals effortlessly with our AI Image Generator. Transform your ideas into high-quality images with advanced technology that brings your concepts to life."
                    />

                    <button
                        type="button"
                        disabled
                        className="mt-11 font-bold text-base leading-5 px-16 py-3.5 rounded-[var(--radius)] bg-[var(--btnbg)] text-[var(--white)]"
                    >
                        Try Now
                    </button>
                </div>
            </div>

            <div className="relative  !h-[751px]  ml-12 mr-12.5">
                {/* Background Image */}
                <Image
                    src={textspech}
                    alt="textspech"
                    className="w-full !h-[751px]  object-cover rounded-lg"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex justify-between items-center px-[157px] !h-[751px]">
                    {/* ==== left Side (Text Content) ==== */}
                    <div>
                        <div>
                            <button
                                type="button"
                                className="text-[var(--orange)] bg-[var(--liteorange)] rounded-[44px] px-4 py-1.5 font-bold text-sm leading-4"
                            >
                                NEW
                            </button>
                        </div>

                        <Header
                            className="text-[var(--doubelblack)] text-[40px] font-bold mt-4"
                            text="AI Image Generator"
                        />

                        <Paragraph
                            className="font-medium text-lg text-[var(--paragraphtitle)] !max-w-[563px] mt-3"
                            text="Create stunning visuals effortlessly with our AI Image Generator. Transform your ideas into high-quality images with advanced technology that brings your concepts to life."
                        />

                        <button
                            type="button"
                            disabled
                            className="mt-11 font-bold text-base leading-5 px-16 py-3.5 rounded-[var(--radius)] bg-[var(--btnbg)] text-[var(--white)]"
                        >
                            Try Now
                        </button>
                    </div>

                    {/* ==== right Side (Images) ==== */}
                    <div className="relative w-[500px] h-[350px] group">
                        {/* Main Image */}
                        <Image
                            src={textspechimage}
                            alt="textspech image"
                            className="w-full h-full object-cover rounded-lg"
                        />

                        {/* Note Icon - Top Right (slide out on hover) */}
                        <Image
                            src={note}
                            alt="note"
                            className="absolute top-4 right-4 w-[118.76px] h-[146.3px] 
                   transition-all duration-500 
                   group-hover:translate-x-[80%]"
                        />

                        {/* Sound Bar - Bottom Center (slide out on hover) */}
                        <Image
                            src={sound}
                            alt="sound"
                            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                   !w-[378.43px] h-[95.61px] 
                   transition-all duration-500 
                   group-hover:translate-y-[80%]"
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GenerativeAi;




