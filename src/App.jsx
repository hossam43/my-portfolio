import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./components/Home.jsx";
import { SocialLink } from "./components/SocialLink.jsx";
import { About } from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import { Experience } from "./components/Experience.jsx";
import { Contact } from "./components/Contact.jsx";
import { useState, useEffect, Suspense } from "react";
import { Audio } from "react-loader-spinner";
import "./Apps.css";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

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
          <SocialLink></SocialLink>
          <About></About>
          <Portfolio></Portfolio>

          <Experience></Experience>
          <Contact></Contact>
        </>
      )}
    </div>
  );
}

export default App;
