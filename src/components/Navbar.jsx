import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import logo from "../assets/InToReact.png";

export const Navbar = () => {
  const [hambIcon, setHambIcon] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "Projects" },
    { id: 4, link: "skills" },
    { id: 5, link: "contact" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{
        opacity: 1,
        duration: 40,
      }}
      className="flex justify-between items-center w-full h-20 px-4 text-white bg-black sticky top-0 z-30"
    >
      <div>
        {/* <h1 className="text-5xl font-signature">Hossam</h1> */}
        <img src={logo} alt="" className="w-1/4" />
      </div>
      {/* The md prefix stands for medium screens or larger. */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-100 hover:text-teal-500"
            >
              <Link to={link} smooth duration={500}>
                {" "}
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden"
        onClick={() => {
          setHambIcon(!hambIcon);
        }}
      >
        {hambIcon ? <FaTimes size={30}></FaTimes> : <FaBars size={30} />}
      </div>

      {hambIcon && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="py-4 px-4 text-4xl cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-100 hover:text-teal-500"
              >
                <Link
                  onClick={() => {
                    setHambIcon(!hambIcon);
                  }}
                  to={link}
                  smooth
                  duration={500}
                >
                  {" "}
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </motion.div>
  );
};
