import React from "react";
import styles from "./Skill.module.sass";
import IconAndroid from "../icons/android.svg";
import IconGit from "../icons/git.svg";
import IconJava from "../icons/java.svg";
import IconKotlin from "../icons/kotlin.svg";
import IconMySql from "../icons/mysql.svg";
import IconPython from "../icons/python.svg";
import IconReact from "../icons/react.svg";
import IconTerminal from "../icons/terminal.svg";

const icons = {
  android: IconAndroid,
  git: IconGit,
  java: IconJava,
  kotlin: IconKotlin,
  mysql: IconMySql,
  python: IconPython,
  react: IconReact,
  terminal: IconTerminal,
};

/**
 * A single Skill component.
 *
 * Takes the following `props`:
 *  - `name`
 *  - `duration` in years
 *  - `icon` filename (excluding extension)
 */
export default function Skill(props) {
  return (
    <div className={styles.container}>
      <img src={icons[props.icon]} alt={props.name} className={styles.icon} />
      <p className={styles.skillName}>{props.name}</p>
      <p className={styles.skillDuration}>{props.duration} yrs</p>
    </div>
  );
}
