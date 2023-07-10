import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";
// import { styles } from "../styles";

// import { sectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import contactImg from "../assets/contact.png";

export const Contact = () => {
  const forRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};

  // return (
  //   <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
  //     {/* to make the form slid from the left */}
  //     <motion.div
  //       variants={slideIn("left", "tween", 0.2, 1)}
  //       className="flex-[0.75] bg-gray-900 text-red-600 p-8 rounded-2xl"
  //     >
  //       <p className="styles-sectionSubText">Get in touch</p>
  //       <h3 className="styles-sectionHeadText">Contact.</h3>
  //     </motion.div>

  //     <motion.div
  //       variants={slideIn("right", "tween", 0.2, 1)}
  //       className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
  //     >

  //     </motion.div>
  //   </div>
  // );
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-8">Submit the form below to get in touch with me</p>
        </div>
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
