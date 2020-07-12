import React from "react";
import Intro from "../components/sections/Intro";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <div>
      <Intro />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
