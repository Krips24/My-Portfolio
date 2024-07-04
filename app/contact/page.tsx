"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        // Reset form fields after successful submission if needed
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div>
      <section
        style={{ fontFamily: "Montserrat, sans-serif" }}
        className="text-gray-400 bg-gray-950 body-font relative"
      >
        <div className="flex justify-center relative top-10 font-semibold max-sm:top-16">
          <h1 className="text-white text-4xl text-center inline">Contact</h1>
          <h1 className="text-orange-500 text-4xl text-center inline ml-2">
            Me
          </h1>
        </div>
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="max-sm:hidden  lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
          >
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=INDORE&t=&z=14&iwloc=B&output=embed"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}
            />

            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md w-3/5  max-sm:w-68">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">IIT Indore, India</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  href="mailto:krapansh.work@gmail.com"
                  className="text-indigo-400 leading-relaxed"
                >
                  krapansh.work@gmail.com
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <a href="tel:+91 6281284310" className="leading-relaxed">
                  +91 6281284310
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <div className="flex relative bottom-5">
              <h1 className="text-white text-2xl text-center inline">Get in</h1>
              <h1 className="text-orange-500 text-2xl text-center inline ml-2 font-semibold">
                touch
              </h1>
            </div>
            <p className="leading-relaxed mb-5">
              Ready to collaborate? Let&apos;s make magic happen.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-400"
                >
                  Message
                </label>
                <textarea
                  typeof="text"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 transition duration-200 rounded text-lg"
              >
                Submit
              </button>
            </form>
          </div>

          {/* address for mobile */}
          <div
            style={{ fontFamily: "Montserrat, sans-serif" }}
            className="lg:hidden  lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative top-12"
          >
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Bangalore&t=&z=14&iwloc=B&output=embed"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}
            />

            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md  max-sm:w-68">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">BMT Layout, Mathikere, Bangalore</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  href="mailto:krapansh.work@gmail.com"
                  className="text-indigo-400 leading-relaxed"
                >
                  krapansh.work@gmail.com
                </a>
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <a href="tel:+91 6281284310" className="leading-relaxed">
                  +91 6281284310
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
