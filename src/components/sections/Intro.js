import React from "react";
import intro from "./Intro.module.sass";

export default function Intro() {
  return (
    <div className={intro.Container}>
      <p className={intro.Body}>Hi, my name is</p>
      <h1 className={intro.Heading}>Farbod Salamat-Zadeh</h1>
      <p className={intro.Body}>
        I'm a 2nd year CompSci student at the <b>University of Warwick.</b>
      </p>
    </div>
  );
}
