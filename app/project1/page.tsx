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
            <a href="https://careers-in.vercel.app/">
              <Image
                className="object-cover object-center rounded hover:transition duration-200 ease-in-out hover:scale-105"
                alt="hero"
                src="/careers.jpg"
                width={720}
                height={600}
              />
            </a>
          </div>
          <div className="lg:flex-grow lg:pl-56 flex flex-col lg:items-start lg:text-left items-center text-center  max-sm:text-start">
            <h1 className="title-font sm:text-4xl text-3xl mb-8 font-semibold text-white">
              Careers.in Job Portal
            </h1>

            <p className="inline text-orange-500 font-semibold  max-sm:mr-9">
              Seamless Job Management:
            </p>
            <p className="mb-8  inline">
              Our Next.js-powered job portal simplifies job posting and deletion
              processes, ensuring a seamless experience for employers. With just
              a few clicks, jobs can be effortlessly posted online and promptly
              removed when vacancies are filled, optimizing efficiency and user
              satisfaction.
            </p>

            <p className="inline text-orange-500 font-semibold">
              Intuitive UI/UX Design:
            </p>
            <p className="mb-8 leading-relaxed">
              Experience a user-friendly interface tailored for quick and
              efficient job searches. Our platform features intuitive design
              elements that enable users to filter through job listings
              effortlessly, helping them find their desired positions with ease
              and speed.
            </p>

            <p className="inline text-orange-500 font-semibold">
              Comprehensive Job Descriptions:
            </p>
            <p className="mb-8 leading-relaxed">
              Dive into detailed and engaging job descriptions for each position
              listed on our portal. Candidates can explore comprehensive
              information about specific job opportunities, empowering them to
              make informed decisions and enhancing their overall job-seeking
              experience.
            </p>

            <p className="inline text-orange-500 font-semibold">
              Simplified Application Process:
            </p>
            <p className="mb-8 leading-relaxed">
              Applying for a job has never been easier. Our streamlined
              application process eliminates unnecessary steps, making it
              convenient for candidates to submit their applications swiftly and
              efficiently, maximizing their chances of success.
            </p>

            <p className="inline text-orange-500 font-semibold">
              Robust Data Management:
            </p>
            <p className="mb-8 leading-relaxed">
              Leveraging PostgreSQL database technology, our platform ensures
              secure and reliable data storage. Employers can trust that their
              job listings and candidate information are stored safely,
              maintaining the integrity of the recruitment process.
            </p>

            <p className="inline text-orange-500 font-semibold">
              Enhanced Security and Administration:
            </p>
            <p className="mb-8 leading-relaxed">
              Benefit from secured login/signup mechanisms and authenticated
              access to the admin panel. Administrators have full control over
              job postings, deletions, and other essential actions, safeguarding
              the platform against unauthorized access and ensuring smooth
              operations.
            </p>
            <div className="flex justify-center space-x-5">
              <a
                href="https://careers-in.vercel.app/"
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 transition duration-150 rounded text-lg"
              >
                Live Link
              </a>

              <a
                href="https://github.com/Krips24/Careers.in/"
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 transition duration-150 rounded text-lg"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
