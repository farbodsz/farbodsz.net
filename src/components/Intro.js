import React from "react";
import styles from "./Intro.module.scss";

export default function Intro() {
  const LINK_WARWICK_DCS = "https://warwick.ac.uk/fac/sci/dcs/";
  return (
    <div className={styles.container}>
      <p className={styles.tagline}>
        Hi, my name is Farbod. <span className={styles.wave}>👋</span>
      </p>
      <p>
        I'm currently a 2nd year Computer Science student at the{" "}
        <a href={LINK_WARWICK_DCS} target="_blank" rel="noreferrer">
          University of Warwick
        </a>
        . <span className={styles.laptop}>💻</span>
      </p>
      <p>Welcome to my website!</p>
    </div>
  );
}
