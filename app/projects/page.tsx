import React from "react";
import Image from "next/image";
import Link from "next/link";

import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiCanva } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";

const icons = [
  {
    id: 1,
    name: "next.js",
    icon: <TbBrandNextjs className="text-8xl text-white animate-pulse" />,
  },
  {
    id: 2,

    name: "react.js",
    icon: <RiReactjsLine className="text-8xl text-white animate-pulse" />,
  },

  {
    id: 3,

    name: "react.js",
    icon: <FaNodeJs className="text-8xl text-white animate-pulse" />,
  },
  {
    id: 4,

    name: "react.js",
    icon: <SiExpress className="text-8xl text-white animate-pulse" />,
  },
  {
    id: 5,

    name: "react.js",
    icon: <DiMongodb className="text-8xl text-white animate-pulse" />,
  },
  {
    id: 6,

    name: "react.js",
    icon: <SiTailwindcss className="text-8xl text-white animate-pulse" />,
  },
  {
    id: 7,

    name: "react.js",
    icon: <DiJavascript className="text-8xl text-white animate-pulse" />,
  },
  {
    id: 8,

    name: "react.js",
    icon: <FaHtml5 className="text-8xl text-white animate-pulse" />,
  },
  {
    id: 9,

    name: "react.js",
    icon: <IoLogoCss3 className="text-8xl text-white animate-pulse" />,
  },
  {
    id: 10,

    name: "react.js",
    icon: <FaGitAlt className="text-8xl text-white animate-pulse" />,
  },
  {
    id: 11,

    name: "react.js",
    icon: <BiLogoTypescript className="text-8xl text-white animate-pulse" />,
  },
  {
    id: 12,

    name: "react.js",
    icon: <SiCanva className="text-8xl text-white animate-pulse" />,
  },
];
const page = () => {
  return (
    <div>
      <section
        style={{ fontFamily: "Montserrat, sans-serif" }}
        className="text-gray-400 bg-black body-font"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-800 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500" />
            </div>
            <div className="flex flex-wrap flex-row py-6 lg:mb-12  max-sm:mb-12">
              <div className="font-semibold">
                <h1 className="text-white text-4xl text-center inline  max-sm:text-3xl  max-sm:mb-12">
                  Explore My
                </h1>
                <h1 className="text-orange-500 text-4xl text-center inline ml-3 max-sm:text-3xl">
                  Creations
                </h1>
              </div>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 lg:relative lg:left-56  max-sm:text-justify">
                Embark on a journey through innovation as we unveil our
                groundbreaking project section, where creativity meets purpose.
                Explore the realms of cutting-edge solutions and transformative
                ideas that define the essence of our commitment to excellence.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Link href="/project1">
                  <Image
                    width={0}
                    height={0}
                    alt="content"
                    className="object-cover object-center h-full w-full hover:transition duration-200 ease-in-out hover:scale-105"
                    src=""
                  />
                </Link>
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">
                Shooting Stars
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Swag shoindxgoitch literally meditation subway tile tumblr
                cold-pressed. Gastropub street art beard dreamcatcher neutra,
                ethical XOXO lumbersexual.
              </p>
              <a
                href="/project1"
                className="text-indigo-400 inline-flex items-center mt-3"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Link href="/project2">
                  <Image
                    width={0}
                    height={0}
                    alt="content"
                    className="object-cover object-center h-full w-full hover:transition duration-200 ease-in-out hover:scale-105"
                    src=""
                  />
                </Link>
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">
                Organic.in
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Pioneered an AI-driven health website offering personalized meal
                plans with detailed macros, fostering informed dietary choices.
                Empowering users to achieve goals with ease, whether at home or
                on the go.
              </p>
              <a
                href="/project2"
                className="text-indigo-400 inline-flex items-center mt-3"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Link href="/project3">
                  <Image
                    width={0}
                    height={0}
                    alt="content"
                    className="object-cover object-center h-full w-full hover:transition duration-200 ease-in-out hover:scale-105"
                    src=""
                  />
                </Link>
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">
                MediTrack Healthcare
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Innovated a secure medical data management app, ensuring users
                have instant access to their complete medical history,
                addressing the issue of lost or unavailable records in crucial
                situations.
              </p>
              <a
                href="/project3"
                className="text-indigo-400 inline-flex items-center mt-3"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{ fontFamily: "Montserrat, sans-serif" }}
        className="bg-black body-font"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <div className="mb-6 font-semibold">
              <h1 className="text-white text-4xl text-center inline">My</h1>
              <h1 className="text-orange-500 text-4xl text-center inline ml-2">
                Skills
              </h1>
            </div>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300">
              Navigating the Digital Landscape: A Showcase of My Diverse and
              Honed Skill Set
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
            </div>
          </div>

          {/* Icons */}
          <div className="flex justify-center items-center gap-20 flex-wrap max-w-lg mx-auto">
            {icons.map((item, index) => {
              return <div key={item.id}>{item.icon}</div>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
