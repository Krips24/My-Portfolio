import React from "react";
import "@fontsource/montserrat";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="">
      {/* Image for laptop */}
      <Image
        className="max-sm:hidden  h-full w-full"
        src="/hero-image3.jpg"
        alt="hero image"
        width={0}
        height={0}
        sizes="100vw"
      />

      {/* Image for mobile */}
      <Image
        className="lg:hidden  h-full w-full"
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
          <p className="text-4xl">Your Go To</p>
          <p className="text-4xl text-orange-500 ml-2">Web Developer</p>
        </div>
      </div>

      {/* Text for mobile */}
      <div
        className="lg:hidden flex flex-col text-center absolute top-72 left-16 ml-3 text-white"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <h1 className="text-2xl">Hi, I&apos;m Krapansh,</h1>

        <div className="flex">
          <p className="text-xl">Your Go To</p>
          <p className="text-xl text-orange-500 ml-2"> Web Developer</p>
        </div>
      </div>

      {/* Bottom section */}
      <section
        style={{ fontFamily: "Montserrat, sans-serif" }}
        className="text-white bg-black body-font relative"
      >
        <div className="container px-5 py-24 mx-auto">
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
              Hello! I&apos;m a passionate MERN developer, specializing in
              Next.js, Typescript, and Tailwind. Fueled by my enthusiasm for
              emerging technologies, I bring hands-on project experience to the
              table. Committed to staying ahead of industry trends, I thrive on
              translating innovative ideas into seamless web applications.
              Let&apos;s embark on a journey where I leverage my skills to
              create captivating digital experiences.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-8 mb-6" />
            <h2 className="font-medium title-font tracking-wider text-">
              KRAPANSH SHRIVASTAVA
            </h2>
            <p className="text-orange-500">Web Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
