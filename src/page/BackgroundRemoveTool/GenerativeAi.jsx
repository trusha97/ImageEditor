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

const GenerativeAi = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (

        <>
            <div className="relative  !h-[751px]  ml-12 mr-12.5 !mb-12">
                {/* Background Image */}
                <Image
                    src={textspech}
                    alt="textspech"
                    className="w-full !h-[620px]  object-cover rounded-lg absolute -top-16.5"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 -top-[70px] flex justify-between items-center px-[157px] !h-[620px] ">
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

        </>
    );
};

export default GenerativeAi;




