import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./components/Home.jsx";
import { SocialLink } from "./components/SocialLink.jsx";
import { About } from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";
import { Experience } from "./components/Experience.jsx";
import { Contact } from "./components/Contact.jsx";
function App() {
  return (
    <div className="App">
      {/* <h1 className="text-4xl font-bold font-signature">Hello</h1> */}
      <Navbar />
      <Home />
      <SocialLink></SocialLink>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  );
}

export default App;
