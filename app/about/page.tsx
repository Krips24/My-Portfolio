import React from "react";

const page = () => {
  return (
    <div>
      <section
        style={{ fontFamily: "Montserrat, sans-serif" }}
        className="bg-black body-font"
      >
        <div className="container px-5 py-24 mx-auto text-center">
          <div className="mb-10 font-semibold">
            <h1 className="text-white text-4xl text-center inline">About</h1>
            <h1 className="text-orange-500 text-4xl text-center inline ml-2">
              Me
            </h1>
          </div>
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-gray-200 text-justify">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 text-gray-400 mb-8 justify-center"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
              </svg>
            </div>
            <p className="leading-relaxed text-lg text-gray-200 my-5">
              {" "}
              I am passionate about technology with a strong inclination toward
              software development. Over the years, I have honed my skills in
              web development, gaining hands-on experience in designing and
              building user-friendly, responsive websites and applications. I am
              driven by a commitment to crafting efficient and scalable
              solutions that meet real-world challenges and enhance user
              experiences.{" "}
            </p>
            <p className="leading-relaxed text-lg text-gray-200 my-5">
              Skills: I excel in Full Stack Development, boasting a versatile
              skill set that covers both front-end and back-end technologies. My
              proficiency includes React.js and Next.js allowing me to craft
              dynamic and interactive user interfaces. I&apos;m well-versed in
              state management, component lifecycle, and Redux for creating
              scalable applications. Additionally, I am experienced in Node.js,
              enabling me to build robust server-side applications, implement
              RESTful APIs, and efficiently handle asynchronous operations.
              Alongside this, my expertise extends to Express.js, where I
              utilize its middleware capabilities and routing features to create
              scalable and high-performance web applications.
            </p>
            <p className="leading-relaxed text-lg text-gray-200 my-5">
              In the realm of UI/UX Design, I have developed a keen eye for
              design principles. My focus is on ensuring that the websites and
              applications I create are not only functional but also visually
              appealing and user-friendly. I prioritize user-centered design,
              conduct usability testing, and excel in crafting intuitive
              interfaces. Moreover, I am proficient in Canva, a versatile
              graphic design tool, which I use to create stunning visuals,
              graphics, and marketing materials. These assets enhance user
              engagement and establish a strong brand identity.
            </p>
            <p className="leading-relaxed text-lg text-gray-200 my-5">
              I am actively seeking opportunities as a Full Stack Developer. My
              commitment to staying current with the latest industry trends and
              my adaptability to new technologies make me a valuable asset to
              any development team. I am eager to leverage my skills and
              contribute to innovative web projects.
            </p>
            <p className="leading-relaxed text-lg text-gray-200my-5">
              Programming Languages: I have a strong command of Javascript and
              C++, the versatile programming languages, and I am well-versed in
              utilizing their functionalities to solve complex problems.
              Additionally, I am familiar with various data structures, enabling
              me to efficiently organize and manipulate data.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-orange-500 mt-8 mb-6" />
            <h2 className="text-gray-200 font-semibold title-font tracking-wider">
              KRAPANSH SHRIVASTAVA
            </h2>
            <p className="text-gray-400 font-semibold ">Web Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
