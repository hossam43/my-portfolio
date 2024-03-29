import React, { useState, useEffect } from "react";
import ContactImage from "../../src/assets/contactImageIso1.png";
import "./styles.css";
import SocialIcon from "./SocialIcon";
export const Contact = ({ icons }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the threshold as needed
    };

    handleResize(); // Call the function initially

    window.addEventListener("resize", handleResize); // Add event listener for window resize

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleIsoClick = () => {
    const myEmail = "mailto:hossamayman2399.com";
    window.location.href = myEmail;
  };
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      {/* first container */}
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        {/* row 1 */}
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-8">Contact me and let's start a conversation.</p>
        </div>
        {/* row 2 */}
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* The form */}
          <form
            action="https://getform.io/f/d5d11ba1-57e6-4369-b303-bb4134dad530"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-teal-500 to-green-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
          {isSmallScreen ? null : (
            <div
              style={{ width: "400px", height: "400px" }}
              className="imgContact"
            >
              <img
                src={ContactImage}
                onClick={handleIsoClick}
                alt="Isometric"
                className="w-4/5 hover:scale-105 duration-100 "
              />
            </div>
          )}
        </div>
        {isSmallScreen ? <SocialIcon icons={icons}></SocialIcon> : null}
      </div>
    </div>
  );
};

export default Contact;
