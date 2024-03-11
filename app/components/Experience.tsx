import React from "react";
import { TypeAnimation } from "react-type-animation";

const Experience = () => {
  return (
    <div
      style={{ fontFamily: "Montserrat, sans-serif" }}
      className="bg-black p-6 py-12 mb-12"
    >
      <h2 className="text-orange-500 text-4xl text-center mb-20">
        {" "}
        <TypeAnimation
          sequence={["Experience", 1000, "", 1000]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "1em", display: "inline-block" }}
          repeat={Infinity}
        />
      </h2>

      {/* Internship 1 */}
      <div className="text-white lg:px-20  max-sm:text-justify">
        <h3 className="text-lg font-semibold">Web Development Internship</h3>
        <p className="mb-2 font-semibold">Tsalla Aerospace</p>
        <p className="mb-2 text-sm">February 2024 - Present</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
          sit amet felis ac fringilla. Donec ac hendrerit dolor. Fusce
          sollicitudin odio vitae turpis convallis, et convallis nisi
          vestibulum. Vivamus volutpat ligula ac dui viverra, in mattis nisl
          consequat. Brief Description: Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed tincidunt sit amet felis ac fringilla. Donec ac
          hendrerit dolor. Fusce sollicitudin odio vitae turpis convallis, et
          convallis nisi vestibulum. Vivamus volutpat ligula ac dui viverra, in
          mattis nisl consequat. Brief Description: Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed tincidunt sit amet felis ac
          fringilla. Donec ac hendrerit dolor. Fusce sollicitudin odio vitae
          turpis convallis, et convallis nisi vestibulum. Vivamus volutpat
          ligula ac dui viverra, in mattis nisl consequat.
        </p>
      </div>

      {/* Internship 2 */}
      <div className="text-white lg:px-20  max-sm:text-justify mt-12">
        <h3 className="text-lg font-semibold">VLSI Design Internship</h3>
        <p className="mb-2 font-semibold">Maven Silicon Pvt. Ltd.</p>
        <p className="mb-2 text-sm">May - July 2023</p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
          sit amet felis ac fringilla. Donec ac hendrerit dolor. Fusce
          sollicitudin odio vitae turpis convallis, et convallis nisi
          vestibulum. Vivamus volutpat ligula ac dui viverra, in mattis nisl
          consequat. Brief Description: Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed tincidunt sit amet felis ac fringilla. Donec ac
          hendrerit dolor. Fusce sollicitudin odio vitae turpis convallis, et
          convallis nisi vestibulum. Vivamus volutpat ligula ac dui viverra, in
          mattis nisl consequat. Brief Description: Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed tincidunt sit amet felis ac
          fringilla. Donec ac hendrerit dolor. Fusce sollicitudin odio vitae
          turpis convallis, et convallis nisi vestibulum. Vivamus volutpat
          ligula ac dui viverra, in mattis nisl consequat.
        </p>
      </div>
    </div>
  );
};

export default Experience;
