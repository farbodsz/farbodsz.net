import React from "react";
import styles from "./Project.module.sass";

/**
 * A component to display information about a personal project.
 *
 * Takes the following props:
 *  - `name`:   name of the project
 *  - `desc`:   project description
 *  - `stack`:  a list of technologies used in this project (tech stack)
 *  - `img`:    screenshot or image
 *  - 'repo':   link to the GitHub repository, if there is one
 */
export default function Project(props) {
  const descParagraphs = props.desc.split("\\");

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{props.name}</h2>
        <p className={styles.subtitle}>{props.stack.join(" | ")}</p>
        {descParagraphs.map((paragraph) => (
          <p className={styles.body}>{paragraph}</p>
        ))}
        <br />
        <a className={styles.linkRepo} href={props.repo}>
          View on GitHub
        </a>
      </div>
      <div className={styles.imgContainer}>
        <img
          src={props.img}
          alt={props.name + " demo"}
          className={styles.img}
        />
      </div>
    </div>
  );
}
