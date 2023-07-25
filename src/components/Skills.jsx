import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import images from "../images.js";
import "./styles.css";

const Skills = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        {/* stop here in 1:28 */}
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
        </div>

        <motion.div ref={carousel} className="carousel">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="innerCarousel"
          >
            {images.map((image) => {
              return (
                <motion.div
                  className="item text-center m-8 shadow-md hover:scale-105 duration-500 p-10 rounded-lg"
                  key={image}
                >
                  <img src={image} alt="" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
