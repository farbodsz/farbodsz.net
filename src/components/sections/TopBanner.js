import React from "react";
import Layout from "../Layout";
import styles from "./TopBanner.module.sass";
import iconGithub from "../../icons/github.svg";
import iconLinkedIn from "../../icons/linkedin.svg";

export default function TopBanner() {
  return (
    <div className={styles.container}>
      <a href="https://github.com/farbodsz/" target="_blank">
        <img className={styles.icon} src={iconGithub} alt={"GitHub"} />
      </a>
      <a href="https://www.linkedin.com/" target="_blank">
        <img className={styles.icon} src={iconLinkedIn} alt={"LinkedIn"} />
      </a>
    </div>
  );
}
