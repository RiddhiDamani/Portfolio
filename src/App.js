import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-tsparticles";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
// import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import particlesConfig from "./particles.json";

function App() {
  useEffect(() => {
    document.title = `Portfolio`;
  });
  return (
    <>
      <Particles className="particles-canvas" options={particlesConfig} />
      <Navbar />
      <Header />
      <AboutMe />
      <Education />
      {/* <Services /> */}
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
