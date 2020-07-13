import React from "react";
import intro from "./Intro.module.sass";
import Layout from "../Layout";

export default function Intro() {
  return (
    <div className={intro.Container}>
      <Layout>
        <p className={intro.Body}>Hi, my name is</p>
        <h1 className={intro.Heading}>Farbod Salamat-Zadeh</h1>
        <p className={intro.Body}>
          I'm a 2nd year CompSci student at the <b>University of Warwick.</b>
        </p>
      </Layout>
    </div>
  );
}
