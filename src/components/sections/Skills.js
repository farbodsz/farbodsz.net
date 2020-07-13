import React from "react";
import Skill from "../Skill";
import styles from "./Skills.module.sass";
import Subheading from "../Subheading";
import Layout from "../Layout";

export default function Skills() {
  return (
    <div className={styles.container}>
      <Layout>
        <Subheading text={"Skills"} />
        <div className={styles.skillsContainer}>
          <Skill name={"Java"} duration={"5+"} icon={"java"} />
          <Skill name={"Kotlin"} duration={"4+"} icon={"kotlin"} />
          <Skill name={"Android"} duration={"3+"} icon={"android"} />
          <Skill name={"Git"} duration={"3+"} icon={"git"} />
          <Skill name={"MySQL"} duration={"2+"} icon={"mysql"} />
          <Skill name={"Python"} duration={"2"} icon={"python"} />
          <Skill name={"Linux/Bash"} duration={"2"} icon={"terminal"} />
          <Skill name={"React"} duration={"<1"} icon={"react"} />
        </div>
      </Layout>
    </div>
  );
}
