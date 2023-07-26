import React, { useState, Suspense } from "react";
import HeroImage from "../assets/HeroImage.jpg";
import { Link } from "react-scroll";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { Shapes } from "./Shapes";
import { transition } from "./settings";
import useMeasure from "react-use-measure";
import Typewriter from "typewriter-effect";
import "./styles.css";

export const Home = () => {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  return (
    <div name="home">
      <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 overflow-x-hidden">
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full text-white px-4 md:flex-row">
          {/* text intro */}
          <motion.div className="flex flex-col justify-center items-start h-full">
            <h2 className="text-4xl sm:text-7xl font-bold z-10 text-green-500">
              <Typewriter
                options={{
                  strings: ["Hi! ✋", "I'm Hossam"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>

            <h2 className="text-4xl sm:text-7xl font-bold z-10">
              I'm A Frontend developer
            </h2>
            <p className="text-gray-300 py-8 max-w-md z-10">
              As a skilled front-end developer with expertise in geospatial data
              and UI design, I bring a unique blend of technical knowledge and
              creative problem-solving to my work. I specialize in utilizing
              React, to build intuitive and visually appealing user interfaces.
            </p>
            <div className="z-10">
              {/* 3D button */}
              <Link to="contact" smooth duration={500}>
                <MotionConfig transition={transition} className="my-2">
                  <motion.button
                    id="button-3d"
                    ref={ref}
                    initial={false}
                    animate={isHover ? "hover" : "rest"}
                    whileTap="press"
                    variants={{
                      rest: { scale: 1 },
                      hover: { scale: 1.5 },
                      press: { scale: 1.4 },
                    }}
                    onHoverStart={() => {
                      resetMousePosition();
                      setIsHover(true);
                    }}
                    onHoverEnd={() => {
                      resetMousePosition();
                      setIsHover(false);
                    }}
                    onTapStart={() => setIsPress(true)}
                    onTap={() => setIsPress(false)}
                    onTapCancel={() => setIsPress(false)}
                    onPointerMove={(e) => {
                      mouseX.set(e.clientX - bounds.x - bounds.width / 2);
                      mouseY.set(e.clientY - bounds.y - bounds.height / 2);
                    }}
                  >
                    <motion.div
                      className="shapes"
                      variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1 },
                      }}
                    >
                      <div className="pink blush" />
                      <div className="blue blush" />
                      <div className="container">
                        <Suspense fallback={null}>
                          <Shapes
                            isHover={isHover}
                            isPress={isPress}
                            mouseX={mouseX}
                            mouseY={mouseY}
                          />
                        </Suspense>
                      </div>
                    </motion.div>
                    <motion.div
                      variants={{
                        hover: { scale: 0.85 },
                        press: { scale: 1.1 },
                      }}
                      className="label"
                    >
                      Hire me
                    </motion.div>
                  </motion.button>
                </MotionConfig>
              </Link>
            </div>
          </motion.div>

          <div
            initial={{ opacity: 0 }}
            whileinview={{ opacity: 1 }}
            animate={{ x: 0 }}
            transition={{
              delay: 0.5,
              ease: "easeOut",
              duration: 0.5,
              type: "spinner",
            }}
            className="imgConatainer"
          >
            <img
              src={HeroImage}
              alt="my porfile"
              className=" z-20 rounded-2xl mx-auto w-1/3 md:w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
