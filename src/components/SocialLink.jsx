import React from "react";

export const SocialLink = ({ links }) => {
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
