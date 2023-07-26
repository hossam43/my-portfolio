import React from "react";

const SocialIcon = ({ icons }) => {
  return (
    <div className="ml-5 flex justify-center">
      <ul className="flex">
        {icons.map((icon) => {
          return (
            <li
              key={icon.id}
              className="w-20 text-gray-300 hover:scale-105 duration-100"
            >
              {icon.child}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialIcon;
