import React from "react";
import { useMediaQuery } from "@react-hook/media-query";
import firstImage from "../assets/first.png";
import secondImage from "../assets/second.png";

export const About = () => {
  const isLargeScreen = useMediaQuery("(min-width: 768px)");
  const screenWidth = window.innerWidth;

  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        {/* container about */}
        <div className="flex flex-col md:flex-row">
          {/* left col */}
          <div className="md:w-1/2">
            <p className="text-xl mt-20">
              I'm an enthusiastic front-end developer passionate about
              Geographic Information Systems (GIS) and creating seamless user
              experiences. Through my transformative experience at the Intensive
              Code Camp (ICC) in the GIS track offered by the esteemed
              Information Technology Institute (ITI) under the Ministry of
              Communication and Information Technology (MCIT), my understanding
              of GIS deepened, and I developed an unwavering passion for
              frontend development.
            </p>

            <br />

            <p className="text-xl">
              Exploring the world of geospatial technologies, I discovered the
              intriguing intersection between frontend interfaces and
              geoapplications."
            </p>
          </div>
          {/* right corner the screen should be greater than 400 to show it  */}
          {screenWidth >= 400 && (
            <div className="md:w-1/2">
              <img
                src={isLargeScreen ? firstImage : secondImage}
                alt=""
                // className="w-40 h-40 mx-auto"
                className={`mx-auto ${
                  isLargeScreen ? "" : "w-40 h-40 mx-auto"
                }`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
