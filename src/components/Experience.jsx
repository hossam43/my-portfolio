import React from "react";
import Html from "../assets/html.png";
import ReactImage from "../assets/react.png";
import Javascript from "../assets/javascript.png";
import CSS from "../assets/css.png";
import Github from "../assets/github.png";
import Nextjs from "../assets/nextjs.png";
import Tailwind from "../assets/tailwind.png";
import Graphql from "../assets/graphql.png";
import FigmaImage from "../assets/figma.png";
import BootstrapImage from "../assets/bootstrap.png";
import EsriImage from "../assets/esri.png";
import WebpackImage from "../assets/webpack.png";
import Carousel from "react-elastic-carousel";
import ExperienceCards from "./ExperienceCards";
import "./styles.css";
const Experience = () => {
  const breakPoints = [
    {
      width: 1,
      itemsToShow: 1,
    },
    {
      width: 400,
      itemsToShow: 2,
    },
    {
      width: 650,
      itemsToShow: 3,
    },
  ];
  const techs = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },

    {
      id: 2,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: Javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: ReactImage,
      title: "React",
      style: "shadow-blue-600",
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
      src: FigmaImage,
      title: "Figma",
      style: "shadow-green-600",
    },

    {
      id: 8,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },

    {
      id: 9,
      src: BootstrapImage,
      title: "Bootstrap",
      style: "shadow-purple-600",
    },

    {
      id: 10,
      src: Graphql,
      title: "Graphql",
      style: "shadow-pink-400",
    },

    {
      id: 11,
      src: WebpackImage,
      title: "Webpack",
      style: "shadow-sky-300",
    },
    {
      id: 12,
      src: EsriImage,
      title: "Esri Packages",
      style: "shadow-blue-500",
    },
  ];
  return (
    <div
      name="oldskills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        {/* stop here in 1:28 */}
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
        </div>
        {/* now the mobile devices will have 2 cols */}
        {/* 1 is here */}
        <Carousel
          breakPoints={breakPoints}
          className="w-full p-12 px-12 sm:px-0 "
        >
          {techs.map(({ id, src, title, style }) => (
            <ExperienceCards key={id} src={src} title={title} style={style} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Experience;
