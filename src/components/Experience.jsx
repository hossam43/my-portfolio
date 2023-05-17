import React from "react";
import Html from "../assets/html.png";
import ReactImage from "../assets/react.png";
import Javascript from "../assets/javascript.png";
import CSS from "../assets/css.png";
import Github from "../assets/github.png";
import Nextjs from "../assets/nextjs.png";
import Tailwind from "../assets/tailwind.png";
import Graphql from "../assets/graphql.png";

export const Experience = () => {
  const techs = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: ReactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: Javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: Github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: Nextjs,
      title: "Next Js",
      style: "shadow-white",
    },
    {
      id: 7,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 8,
      src: Graphql,
      title: "Graphql",
      style: "shadow-pink-400",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        {/* stop here in 1:28 */}
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the technoloise I'v worked with</p>
        </div>
        {/* now the mobile devices will have 2 cols */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => {
            return (
              <div
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                key={id}
              >
                {/* w-20 makes the conetent in the grid become smaller and the auto center it inside it's cell  and the HTML is center */}
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
