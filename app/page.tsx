"use client";

import React from "react";
import "@fontsource/montserrat";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <div className="bg-black">
      {/* Image for laptop */}
      <Image
        className="max-sm:hidden h-full w-full"
        src="/hero-image3.jpg"
        alt="hero image"
        width={0}
        height={0}
        sizes="100vw"
      />

      {/* Image for mobile */}
      <Image
        className="lg:hidden  h-full w-full mb-56  relative top-14"
        src="/hero-image3.jpg"
        alt="hero image"
        width={0}
        height={0}
        sizes="100vw"
      />

      {/* Text for laptop */}
      <div
        className="max-sm:hidden flex flex-col absolute top-60 left-96 pl-36 text-white"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <h1 className="text-6xl">Hi, I&apos;m Krapansh,</h1>
        <div className="flex">
          <p className="text-4xl mt-1">Your Go To</p>
          <span className="text-lg text-orange-500 ml-2 mt-2">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Frontend Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Backend Developer",
                1000,
                "Full-Stack Developer",
                1000,
                "Web Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </span>
        </div>
      </div>

      {/* Text for mobile */}
      <div
        className="lg:hidden flex flex-col text-justify absolute top-72 left-10 mt-48 text-white "
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <h1 className="text-3xl">Hi, I&apos;m Krapansh,</h1>

        <div className="">
          <p className="text-3xl mb-2">Your Go To</p>
          <span className="text-sm text-orange-500">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Frontend Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Backend Developer",
                1000,
                "Full-Stack Developer",
                1000,
                "Web Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
              className=""
            />
          </span>
        </div>
      </div>

      <div className="lg:hidden max-sm:pt-5 max-sm:bg-black"></div>

      {/* About section */}
      <section
        style={{ fontFamily: "Montserrat, sans-serif" }}
        className="text-white bg-black body-font relative max-sm:top-40  max-sm:mb-60"
      >
        <div className="container px-5 py-12 mx-auto">
          <h1 className="text-center text-4xl text-orange-500 my-3">
            <TypeAnimation
              sequence={["About Me", 1000, "", 1000]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
            </svg>
            <p className="leading-relaxed text-xl text-justify  max-sm:text-lg">
              I am a dedicated Full Stack Developer with a strong command of
              Next.js and expertise in the MERN (MongoDB, Express.js, React,
              Node.js) stack. Currently, I am a full-time Full Stack Developer
              at IITI Drishti CPS, IIT Indore, where I specialize in creating
              scalable web solutions and robust applications. Over the course of
              my career, I have built and deployed multiple projects and
              software solutions that are actively running in the market,
              delivering tangible value to clients and users. I am driven by a
              passion for innovation, constantly learning and adapting to new
              technologies to deliver the best possible solutions. I believe in
              crafting clean, efficient, and intuitive code that meets both user
              needs and business goals.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-8 mb-6" />
            <h2 className="font-medium title-font tracking-wider text-">
              KRAPANSH SHRIVASTAVA
            </h2>
            <p className="text-orange-500">Web Developer</p>
          </div>
        </div>
      </section>

      <div className="flex justify-center my-10">
        <div className="h-1 w-80 relative bg-gray-800 rounded overflow-hidden">
          <div className="w-24 h-full bg-indigo-500" />
        </div>
      </div>

      {/* Projects */}
      <Projects />

      <div className="flex justify-center mb-10">
        <div className="h-1 w-80 relative bg-gray-800 rounded overflow-hidden">
          <div className="w-24 h-full bg-indigo-500" />
        </div>
      </div>

      {/* Experience */}
      <Experience />

      <div className="flex justify-center my-10">
        <div className="h-1 w-80 relative bg-gray-800 rounded overflow-hidden">
          <div className="w-24 h-full bg-indigo-500" />
        </div>
      </div>

      {/* Contact */}
      <Contact />
    </div>
  );
};

export default Home;
