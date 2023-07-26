import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./components/Home.jsx";
import { SocialLink } from "./components/SocialLink.jsx";
import { About } from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Skills from "./components/Skills.jsx";
import { Contact } from "./components/Contact.jsx";
import { useState, useEffect } from "react";
import { Audio } from "react-loader-spinner";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import "./Apps.css";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
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

  const icons = [
    {
      id: 1,
      child: <FaLinkedin size={30}></FaLinkedin>,
      href: "https://www.linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: <FaGithub size={30}></FaGithub>,
      href: "https://www.github.com/hossam43",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: <HiOutlineMail size={30}></HiOutlineMail>,
      href: "mailto:hossamayman2399.com",
      style: "rounded-tr-md",
    },
    {
      id: 4,
      child: <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>,
      href: "/Hossam_Ayman_2023.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="App">
      {loading ? (
        <Audio
          height="100"
          width="100"
          radius="20"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      ) : (
        <>
          <Navbar />
          <Home />

          <SocialLink links={links}></SocialLink>
          <About></About>
          <Portfolio></Portfolio>
          <Skills></Skills>

          {/* all of the erros layed here */}
          {/* <Experience></Experience> */}

          <Contact icons={icons}></Contact>
        </>
      )}
    </div>
  );
}

export default App;
