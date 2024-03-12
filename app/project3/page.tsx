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
            <a href="https://drive.google.com/file/d/139UeqnAepw5KN7-s7izWABJ8A6Si1F1i/view">
              <Image
                className="object-cover object-center rounded hover:transition duration-200 ease-in-out hover:scale-105"
                alt="hero"
                src="/meditrack.jpg"
                width={720}
                height={600}
              />
            </a>
          </div>
          <div className="lg:flex-grow lg:pl-56 flex flex-col lg:items-start lg:text-left items-center text-center  max-sm:text-start">
            <h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-white">
              MediTrack Web Application
            </h1>

            <p className="inline text-orange-500">Upload Medical Records: </p>
            <p className="mb-8  inline">
              Easily upload your important medical records, such as
              prescriptions, lab results, and medical images. MediTrack allows
              you to organize and store these records in one secure location.
            </p>

            <p className="inline text-orange-500">Access Anytime, Anywhere: </p>
            <p className="mb-8 leading-relaxed">
              With MediTrack, you can access your medical records from any
              device with an internet connection. This flexibility ensures you
              have your health information readily available when needed,
              whether at home or on the go.
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

            <p className="inline text-orange-500">Secured Authentication: </p>
            <p className="mb-8 leading-relaxed">
              MediTrack prioritizes the security of your sensitive medical data.
              The application features user authentication to ensure that only
              authorized users can access their records. .
            </p>

            <p className="inline text-orange-500">Beautiful User Interface:</p>
            <p className="mb-8 leading-relaxed">
              MediTrack boasts a user-friendly and aesthetically pleasing user
              interface, making it easy for users to navigate and manage their
              medical records. The UI is designed to enhance the overall user
              experience.
            </p>
            <div className="flex justify-center">
              <a
                href="https://github.com/Krips24/MediTrack"
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
