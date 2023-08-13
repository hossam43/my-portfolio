import React from "react";
import dataCollector from "../assets/portfolio/data-collector.jpg";
import landing from "../assets/portfolio/landingv1.jpg";
import navbar from "../assets/portfolio/weather.jpg";
import travelAdvisor from "../assets/portfolio/travelAdvisor.jpg";
import wireToPro from "../assets/portfolio/wirToproto.jpg";
import spher from "../assets/portfolio/spher.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: dataCollector,
      title: "Data Collector",
      code: "https://github.com/hossam43/data-collector-app",
      demo: "https://hossam43.github.io/data-collector-app/",
    },
    {
      id: 2,
      src: spher,
      code: "https://github.com/hossam43/shper",
      title: "Shper",
      demo: "https://classy-meringue-d5f736.netlify.app/",
    },
    {
      id: 3,
      src: navbar,
      code: "https://github.com/hossam43/weather-app-update",
      demo: "https://hossam43.github.io/weather-app-update/",
    },
    {
      id: 4,
      src: travelAdvisor,
    },
    {
      id: 5,
      src: wireToPro,
      code: "https://github.com/hossam43/from-wire-to-prototype.git",
      demo: "",
    },
    {
      id: 6,
      src: landing,
      title: "Landing Page",
      code: "https://github.com/hossam43/landing-page",
      demo: "https://hossam43.github.io/landing-page/",
    },
  ];

  const handleCodeClick = (url) => {
    window.open(url, "_blank");
  };

  const handleDemoClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 text-white w-full md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Projects
          </p>
          <p className="py-6">Check out my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-12">
          {projects.map(({ id, src, code, demo }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button
                    className="w-1/2 px-6 py-3 m4  duration-200 hover:scale-105"
                    onClick={() => handleCodeClick(code)}
                  >
                    Code
                  </button>
                  <button
                    className="w-1/2 px-6 py-3 m4  duration-200 hover:scale-105"
                    onClick={() => handleDemoClick(demo)}
                  >
                    Demo
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
