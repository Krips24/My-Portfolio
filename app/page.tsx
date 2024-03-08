import React from "react";
import "@fontsource/montserrat";
import Navbar from "./components/Navbar";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      {/* Image for laptop */}
      <Image
        className="max-sm:hidden  h-full w-full"
        src="/hero-image4.jpg"
        alt="hero image"
        width={0}
        height={0}
        sizes="100vw"
      />

      {/* Image for mobile */}
      <Image
        className="lg:hidden  h-full w-full"
        src="/hero-image4.jpg"
        alt="hero image"
        width={0}
        height={0}
        sizes="100vw"
      />

      {/* Text for laptop */}
      <div
        className="max-sm:hidden flex flex-col justify-start absolute top-1/2 left-1/2 text-white"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <h1 className="text-5xl">Hi, I&apos;m Krapansh!</h1>
        <p className="text-3xl">Your Go To Web Developer</p>
      </div>

      {/* Text for mobile */}
      <div
        className="lg:hidden flex flex-col justify-start absolute top-64 left-8 text-white"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <h1 className="text-2xl">Hi, I&apos;m Krapansh!</h1>
        <p className="text-xl">Your Go To Web Developer</p>
      </div>
    </div>
  );
};

export default Home;
