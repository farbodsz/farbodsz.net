import React from "react";
import styles from "./Header.module.sass";
import iconGithub from "../../icons/github.svg";
import iconSO from "../../icons/so.svg";
import iconLinkedIn from "../../icons/linkedin.svg";

export default function Header() {
  return (
    <header className={styles.container}>
      <a href="https://github.com/farbodsz/" target="_blank">
        <img className={styles.icon} src={iconGithub} alt={"GitHub"} />
      </a>
      <a href="https://stackoverflow.com/users/4230345/" target="_blank">
        <img className={styles.icon} src={iconSO} alt={"Stack Overflow"} />
      </a>
      <a href="https://www.linkedin.com/in/farbodsz/" target="_blank">
        <img className={styles.icon} src={iconLinkedIn} alt={"LinkedIn"} />
      </a>
    </header>
  );
}
