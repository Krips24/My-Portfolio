import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-800 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500" />
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
                Explore My Creations
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
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
    </div>
  );
};

export default page;
