import React from "react";

export const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full
      "
      >
        <div className="pb-8">
          {/* inline to make it only just in the content */}
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          repellendus tempora distinctio iure, non eos doloremque ullam beatae
          eligendi labore veritatis ipsum maxime obcaecati, ratione omnis minus
          nesciunt nulla cumque magni nobis reiciendis. Molestias illum sequi
          laborum deserunt, reprehenderit magnam!
        </p>
        <br />
        <p className="text-xl pb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugit
          quidem voluptatum magnam repellat? Ullam, aut earum. Hic aliquam
          cupiditate odit voluptas minima, est fugiat aspernatur adipisci
          eveniet optio quis, enim inventore. Error rem molestias minima animi
          molestiae minus dolorem. Error rem molestias minima animi molestiae
          minus dolorem.
        </p>
      </div>
    </div>
  );
};
