import React from "react";
import consulting from "../images/consulting.png";
import vision1 from "../images/vision1.png";

const About = () => {
  return (
    <div id="about" className="bg-gray-50">
      <div className="py-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
        <h1 className="text-center text-4xl font-bold mb-24 text-[#25aae1]">
          About Us
        </h1>
        <div className="space-y-16">
          <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-72 md:justify-center md:flex md:items-center">
            <div className="w-full md:w-1/4 space-y-8">
              <h3 className="font-medium text-xl">
                Our <span className="text-[#25aae1]">Vision</span>
              </h3>
              <h3 className="font-medium text-2xl text-[#25aae1]">
                Advanced Facial Recognition
              </h3>
              <p>
                The product is equipped with an advanced facial recognition
                system that can accurately identify and authenticate individuals
                based on their unique facial features. This feature provides
                enhanced security by allowing access only to authorized users.
              </p>
            </div>
            <div className="mx-auto w-1/2 md:w-1/3">
              <img src={consulting} alt="consulting" />
            </div>
          </div>
          <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-32 md:justify-between md:flex md:items-center md:flex-row-reverse">
            <div className="w-full md:w-1/4 space-y-4">
              <h3 className="font-medium text-xl">
                Our <span className="text-[#25aae1]">Mission</span>
              </h3>
              <h3 className="font-medium text-2xl text-[#25aae1]">
                Multi-Device Synchronization
              </h3>
              <p>
                This product offers seamless synchronization across multiple
                devices. Users can easily sync their data, settings, and
                preferences across devices such as smartphones, tablets, and
                computers.
              </p>
            </div>
            <div className="mx-auto w-1/2 md:w-1/3">
              <img src={vision1} alt="vision1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
