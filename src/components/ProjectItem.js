import React from "react";
import styles from "./ProjectItem.module.scss";

/**
 * Separator to use between years.
 *
 * This is the en-dash character.
 */
const SEP_YEARS = "–";

/**
 * Returns a string representing the year range.
 *
 * @param {number?} startYear
 * @param {number?} endYear
 *
 * If start year is given but no end year, then it will be assumed it is until
 * the present.
 * If end year is given but no start year, then it will be assumed they are in
 * the same year.
 */
function formatYears(startYear, endYear) {
  if (startYear) {
    var endYearText = endYear
      ? `'${endYear.toString().substring(2)}`
      : "present";
    return `(${startYear}${SEP_YEARS}${endYearText})`;
  } else if (endYear) {
    return `(${endYear})`;
  } else {
    return "";
  }
}

/**
 * Returns a string representing the list of programming languages.
 *
 * @param {array} langs
 */
function formatLangs(langs) {
  return langs.join(" | ");
}

/**
 * Props:
 *  - title
 *  - startYear
 *  - endYear
 *  - langs (array)
 *  - img
 *  - github
 *  - link
 *  - imgRight (0 = left, 1 = right)
 *  - children (the body)
 */
export default function ProjectItem(props) {
  const hasYears = props.startYear || props.endYear;

  const subtitleText = props.langs ? formatLangs(props.langs) : null;
  var subtitleElement = "";

  if (subtitleText || hasYears) {
    const yearsText = formatYears(props.startYear, props.endYear);
    subtitleElement = (
      <h4 className={styles.subtitle}>
        {subtitleText} <span className={styles.years}>{yearsText}</span>
      </h4>
    );
  }

  const githubButton = props.github ? (
    <div className={styles.button}>
      <a href={props.github} target="_blank" rel="noreferrer">
        View GitHub repo
      </a>
    </div>
  ) : (
    ""
  );

  const linkButton = props.link ? (
    <div className={styles.button}>
      <a href={props.link} target="_blank" rel="noreferrer">
        View project
      </a>
    </div>
  ) : (
    ""
  );

  const imgContainer = (
    <div className={styles.imgContainer}>
      <img className={styles.img} src={props.imgSrc} />
    </div>
  );

  const description = (
    <div className={styles.description}>
      <div className={styles.header}>
        <h3>{props.title}</h3>
        {subtitleElement}
      </div>
      {props.children}
      <div className={styles.buttonContainer}>
        {linkButton} {githubButton}
      </div>
    </div>
  );

  const contentLeft = props.imgRight ? description : imgContainer;
  const contentRight = props.imgRight ? imgContainer : description;

  return (
    <div className={styles.container}>
      {contentLeft}
      {contentRight}
    </div>
  );
}
