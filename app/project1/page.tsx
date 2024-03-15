import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <section
        style={{ fontFamily: "Montserrat, sans-serif" }}
        className="text-gray-400 bg-gray-900 body-font"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 lg:relative lg:left-16">
            <a href="https://aerospace-two.vercel.app/">
              <Image
                className="object-cover object-center rounded hover:transition duration-200 ease-in-out hover:scale-105"
                alt="hero"
                src="/tsallaaerospace.png"
                width={720}
                height={600}
              />
            </a>
          </div>
          <div className="lg:flex-grow lg:pl-56 flex flex-col lg:items-start lg:text-left items-center text-center  max-sm:text-start">
            <h1 className="title-font sm:text-4xl text-3xl mb-8 font-semibold text-white">
              Tsalla Aerospace
            </h1>

            <p className="inline text-orange-500 font-semibold  max-sm:mr-9">
              Creating Tsalla Aerospace&apos;s Online Identity
            </p>
            <p className="mb-8  inline">
              Develop Tsalla Aerospace&apos;s official website, aimed at
              representing the company&apos;s brand identity and offerings
              effectively.
            </p>

            <p className="inline text-orange-500 font-semibold">
              Building Dynamic Website for User Engagement
            </p>
            <p className="mb-8 leading-relaxed">
              Building a dynamic website for user engagement involves crafting
              an interactive digital platform that captivates users through
              personalized experiences and responsive design. By integrating
              engaging content, interactive features, and seamless navigation,
              such a website aims to foster meaningful interactions and
              encourage prolonged user engagement.
            </p>

            <p className="inline text-orange-500 font-semibold">
              Full-Stack Project: Robust UI & Database Integration
            </p>
            <p className="mb-8 leading-relaxed">
              Create a dynamic website with contemporary features and
              functionalities to enhance user experience and engagement.
            </p>

            <p className="inline text-orange-500 font-semibold">
              Global Audience Outreach: Diverse Demographics Targeted
            </p>
            <p className="mb-8 leading-relaxed">
              Implement a full-stack project, incorporating robust UI design and
              efficient database facilities to ensure seamless performance.
            </p>

            <p className="inline text-orange-500 font-semibold">
              Global Audience Outreach: Diverse Demographic Targeting
            </p>
            <p className="mb-8 leading-relaxed">
              Focus on outreach strategies to attract a global audience,
              catering to diverse demographics and regions.
            </p>

            <p className="inline text-orange-500 font-semibold">
              Leading Online Presence with Innovative Design
            </p>
            <p className="mb-8 leading-relaxed">
              Strive to establish Tsalla Aerospace&apos;s online presence as a
              leading player in the aerospace industry, leveraging innovative
              web technologies and captivating design elements.
            </p>
            <div className="flex justify-center">
              <a
                href="https://aerospace-two.vercel.app/"
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 transition duration-150 rounded text-lg"
              >
                Live Link
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
