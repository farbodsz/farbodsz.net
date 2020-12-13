import React from "react";
import styles from "./Intro.module.scss";

export default function Intro() {
  const LINK_WARWICK_DCS = "https://warwick.ac.uk/fac/sci/dcs/";
  return (
    <div className={styles.container}>
      <p className={styles.tagline}>Hi, my name is Farbod. 👋</p>
      <p>
        I'm currently a 2nd year Computer Science student at the{" "}
        <a href={LINK_WARWICK_DCS}>University of Warwick</a>. 💻
      </p>
      <p>Welcome to my website!</p>
    </div>
  );
}
