"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/Typography/header/Header";
import Paragraph from "@/Typography/text/Paragraph";
import Image from "next/image";
import { Ai1, Ai2, Ai3, } from "@/utils/image";
const ImageGenerator = () => {
    return (
        <div>
            <div
                className="relative bg-cover bg-center rounded-[30px] lg:mx-12 mx-3.5 my-10 py-20 px-6 text-center overflow-hidden"
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <Header
                        level={2}
                        text="NEW TOOLS"
                        className=" xl:text-[160px] md:text-[100px] text-[50px] sm:block hidden !font-bold text-[var(--litesceen)] opacity-30 tracking-widest select-none"
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
  {/* Left Side (Text Section) */}
  <div className="text-center xl:text-left max-w-[600px] mx-auto xl:mx-0">
    <div className="mb-4">
      <button
        type="button"
        className="text-[var(--orange)] bg-[var(--liteorange)] rounded-[44px] px-4 py-1.5 font-bold text-sm leading-4"
      >
        NEW
      </button>
    </div>

    <Header
      className="text-[var(--doubelblack)] md:text-5xl text-3xl font-bold leading-tight"
      text="AI Image Generator"
    />
    <Paragraph
      className="font-medium md:text-lg text-base text-center xl:text-left mx-auto xl:mx-0 text-[var(--paragraphtitle)] max-w-[563px] mt-4"
      text="Create stunning visuals effortlessly with our AI Image Generator. Transform your ideas into high-quality images with advanced technology that brings your concepts to life."
    />
    <button
      type="button"
      disabled
      className="mt-8 font-bold text-base leading-5 px-10 md:px-16 py-3.5 rounded-[var(--radius)] bg-[var(--btnbg)] text-[var(--white)]"
    >
      Try Now
    </button>
  </div>

  {/* Right Side (Images Section) */}
  <div className="flex justify-center items-center xl:w-[738px] w-full h-auto">
    <div className="relative group md:w-[500px] w-full h-[380px] md:h-[420px] flex justify-center">
      {/* Card 1 */}
      <div className="absolute transition-all duration-500 ease-in-out group-hover:-rotate-6 group-hover:-translate-x-8">
        <Image
          src={Ai1}
          alt="ai image1"
          width={280}
          height={340}
          className="rounded-xl shadow-xl"
        />
      </div>

      {/* Card 2 (Main Card) */}
      <div className="absolute transition-all duration-500 ease-in-out z-10">
        <Image
          src={Ai2}
          alt="ai image2"
          width={280}
          height={340}
          className="rounded-xl shadow-xl"
        />
      </div>

      {/* Card 3 */}
      <div className="absolute transition-all duration-500 ease-in-out group-hover:rotate-6 group-hover:translate-x-8">
        <Image
          src={Ai3}
          alt="ai image3"
          width={280}
          height={340}
          className="rounded-xl shadow-xl"
        />
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default ImageGenerator
