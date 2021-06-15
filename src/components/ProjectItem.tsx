import React from "react";
import styles from "./ProjectItem.module.scss";

import LanguageDot from "./LanguageDot";
import { formatLangs, formatYears } from "../utils";

import Img from "gatsby-image";
import { FluidObject } from "gatsby-image";

type ProjectItemProps = {
  title: string;
  startYear?: number;
  endYear?: number;
  langs: [string];
  imgSrc: FluidObject;
  github?: string;
  link?: string;
  linkText?: string;
  imgRight: boolean;
  children: React.ReactNode;
};

export default class ProjectItem extends React.Component<ProjectItemProps> {
  constructor(props: ProjectItemProps) {
    super(props);
  }

  render() {
    const props = this.props;

    const miniItem = !props.imgSrc;
    const hasYears = props.startYear || props.endYear;

    const subtitleText = formatLangs(props.langs);
    var subtitleElement = <></>;

    if (subtitleText || hasYears) {
      const space = miniItem ? <br /> : " ";

      const yearsText = formatYears(props.startYear, props.endYear, true);
      subtitleElement = (
        <h4 className={styles.subtitle}>
          <LanguageDot langName={props.langs[0]} />
          {subtitleText}
          {space}
          <span className={styles.years}>{yearsText}</span>
        </h4>
      );
    }

    const githubButton = props.github ? (
      <div className={styles.button}>
        <a href={props.github} target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      </div>
    ) : (
      ""
    );

    const linkButton = props.link ? (
      <div className={styles.button}>
        <a href={props.link} target="_blank" rel="noreferrer">
          {props.linkText ? props.linkText : "View project"}
        </a>
      </div>
    ) : (
      ""
    );

    const imgContainer = !miniItem ? (
      <div className={styles.imgContainer}>
        <Img className={styles.img} fluid={props.imgSrc} />
      </div>
    ) : (
      ""
    );

    const description = (
      <div className={miniItem ? styles.descriptionSmall : styles.description}>
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

    var containerClasses;
    if (miniItem) {
      containerClasses = styles.containerSmall;
    } else if (props.imgRight) {
      containerClasses = `${styles.container} ${styles.containerReverse}`;
    } else {
      containerClasses = styles.container;
    }

    return (
      <div className={containerClasses}>
        {imgContainer}
        {description}
      </div>
    );
  }
}
