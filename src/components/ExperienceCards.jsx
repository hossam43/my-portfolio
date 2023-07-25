import React from "react";

function ExperienceCards({ id, src, title, style }) {
  return (
    <div
      className={`text-center m-8 shadow-md hover:scale-105 duration-500 p-10 rounded-lg ${style}`}
    >
      <img src={src} alt="" className="w-30 mx-auto" />
      {/* change the font */}
      <p className="mt-4 text-lg">{title}</p>
    </div>
  );
}

export default ExperienceCards;
