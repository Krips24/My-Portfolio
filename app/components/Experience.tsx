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
          During my immersive internship in web development, I took charge of
          creating the company&apos;s flagship website utilizing cutting-edge
          Next.js technology. This endeavor involved crafting a dynamic and
          visually stunning online platform, equipped with state-of-the-art
          features, to comprehensively showcase the company&apos;s diverse
          offerings. Throughout this extensive project, I not only mastered
          complex technical intricacies but also honed invaluable soft skills
          such as teamwork, adept time management, and navigating the nuances of
          a corporate work environment. This experience has significantly
          broadened my professional horizons and fortified my proficiency in the
          field.
        </p>
      </div>

      {/* Internship 2 */}
      <div className="text-white lg:px-20  max-sm:text-justify mt-12">
        <h3 className="text-lg font-semibold">VLSI Design Internship</h3>
        <p className="mb-2 font-semibold">Maven Silicon Pvt. Ltd.</p>
        <p className="mb-2 text-sm">May - July 2023</p>
        <p className="text-sm">
          Throughout my internship tenure, I played a pivotal role in the
          collaborative development of a sophisticated RISC-V processor design,
          concentrating on crucial microarchitecture components. Employing my
          expertise in Verilog HDL, I adeptly undertook the coding, simulation,
          and debugging of RTL to guarantee precise and optimized functionality.
          Demonstrating an unwavering commitment to excellence, I seamlessly
          communicated technical progress to peers and supervisors, underscoring
          my adept problem-solving prowess. Completing the project within the
          designated internship timeframe underscored my capacity to deliver
          results with efficiency and efficacy, solidifying my standing as a
          capable and resourceful team member.
        </p>
      </div>
    </div>
  );
};

export default Experience;
