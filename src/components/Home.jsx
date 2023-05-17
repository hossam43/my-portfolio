import React from "react";
import HeroImage from "../assets/profile.jpg";
import { TbCircleArrowRight } from "react-icons/tb";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div name="home">
      <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full text-white px-4 md:flex-row">
          {/* text intro */}
          <div className="flex flex-col justify-center items-start h-full">
            <h2 className="text-4xl sm:text-7xl font-bold">
              I'm A Frontend developer
            </h2>
            <p className="text-gray-300 py-4 max-w-md">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
              necessitatibus, voluptatibus vitae minus sequi ea, nam veniam
              nihil repudiandae pariatur voluptas porro quas nisi odit neque!
              Earum tempora rerum vero.
            </p>
            <div>
              <Link to="portfolio" smooth duration={500}>
                <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                  Portfolio
                  <span className="group-hover:rotate-90 duration-300">
                    <TbCircleArrowRight size={25} className="ml-1" />
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className="imgConatainer py-12">
            <img
              src={HeroImage}
              alt="my porfile"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
