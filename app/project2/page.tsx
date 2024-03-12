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
            <a href="https://drive.google.com/file/d/1cljChAmgeQDDKvzNMBo9r8Pk-SJUYS5X/view">
              <Image
                className="object-cover object-center rounded hover:transition duration-200 ease-in-out hover:scale-105"
                alt="hero"
                src="/organic.jpg"
                width={720}
                height={600}
              />
            </a>
          </div>
          <div className="lg:flex-grow lg:pl-56 flex flex-col lg:items-start lg:text-left items-center text-center  max-sm:text-start">
            <h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-white">
              Organic.in Web Application
            </h1>

            <p className="inline text-orange-500">
              AI-Generated Personalized Meal Plans:
            </p>
            <p className="mb-8  inline">
              Organic.in leverages advanced artificial intelligence to craft
              personalized meal plans tailored to the user&apos;s health and
              wellness objectives.
            </p>

            <p className="inline text-orange-500">
              Comprehensive Recipe Database:
            </p>
            <p className="mb-8 leading-relaxed">
              Explore a vast collection of recipes that align with your dietary
              preferences and health goals. Whether you&apos;re aiming to lose
              weight, build muscle, or maintain a balanced diet, Organic.in has
              the recipes for you.
            </p>

            <p className="inline text-orange-500">
              Detailed Nutritional Information:
            </p>
            <p className="mb-8 leading-relaxed">
              Gain insights into the nutritional content of each meal.
              Organic.in provides detailed information about macros, enabling
              users to make informed decisions and meet their nutritional
              requirements.
            </p>

            <p className="inline text-orange-500">
              Enhance Your Healthy Lifestyle:
            </p>
            <p className="mb-8 leading-relaxed">
              Organic.in is your partner in improving overall well-being. With
              personalized guidance and insights, users can make informed
              choices to enhance their healthy lifestyle.
            </p>

            <p className="inline text-orange-500">Cook Anywhere, Anytime:</p>
            <p className="mb-8 leading-relaxed">
              Access recipes and meal plans on the go. Organic.in ensures that
              you can make healthy and delicious meals at home or anywhere,
              making it convenient to stick to your health goals.
            </p>
            <div className="flex justify-center">
              <a
                href="https://github.com/Krips24/Organic.in"
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 transition duration-150 rounded text-lg"
              >
                GITHUB
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
