import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const SocialLink = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30}></FaLinkedin>
        </>
      ),
      href: "https://www.linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30}></FaGithub>
        </>
      ),
      href: "https://www.github.com/hossam43",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30}></HiOutlineMail>
        </>
      ),
      href: "mailto:hossamayman2399.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
        </>
      ),
      href: "/Hossam_Ayman_2023.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    // it will show it if it is on a big screen
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ child, id, download, style, href }) => {
          // to add custome style
          return (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 text-white bg-gray-500 px-4 ml-[-100px] hover:ml-[-10px] duration-300" +
                " " +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLink;
