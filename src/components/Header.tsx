import React from "react";

import iconGithub from "../assets/github.svg";
import iconLinkedin from "../assets/linkedin.svg";
import iconSO from "../assets/so.svg";
import * as styles from "./Header.module.scss";
import Layout from "./Layout";

const LINK_GITHUB = "https://github.com/farbodsz/";
const LINK_SO = "https://stackoverflow.com/users/4230345/";
const LINK_LINKEDIN = "https://www.linkedin.com/in/farbodsz/";
const LINK_WARWICK_DCS = "https://warwick.ac.uk/fac/sci/dcs/";

interface ProfileChipProps {
  index: number;
  icon: string;
  text: string;
  link: string;
}

class ProfileChip extends React.Component<ProfileChipProps> {
  constructor(props: ProfileChipProps) {
    super(props);
  }

  render() {
    return (
      <a
        className={styles.profileChip}
        tabIndex={this.props.index}
        href={this.props.link}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className={styles.profileIcon}
          src={this.props.icon}
          alt={this.props.text}
        />
        <span className={styles.profileLabel}>{this.props.text}</span>
      </a>
    );
  }
}

const Intro = (): JSX.Element => (
  <div className={styles.introContainer}>
    <p className={styles.tagline}>
      Hi, my name is Farbod.{" "}
      <span className={styles.wave} role="img" aria-label="wave">
        👋
      </span>
    </p>
    <p style={{ paddingBottom: "30px" }}>
      I'm currently a 2nd year Computer Science student at the{" "}
      <a href={LINK_WARWICK_DCS} target="_blank" rel="noreferrer">
        University of Warwick
      </a>
      .{" "}
      <span className={styles.laptop} role="img" aria-label="laptop">
        💻
      </span>
    </p>
    <p>Welcome to my website!</p>
  </div>
);

export default function Header(): JSX.Element {
  return (
    <header className={styles.headerContainer}>
      <Layout>
        <h1>Farbod Salamat-Zadeh</h1>
        <div className={styles.linksContainer}>
          <ProfileChip
            text="GitHub"
            icon={iconGithub}
            link={LINK_GITHUB}
            index={0}
          />
          {" | "}
          <ProfileChip
            text="Stack Overflow"
            icon={iconSO}
            link={LINK_SO}
            index={1}
          />
          {" | "}
          <ProfileChip
            text="LinkedIn"
            icon={iconLinkedin}
            link={LINK_LINKEDIN}
            index={2}
          />
        </div>
        <Intro />
      </Layout>
    </header>
  );
}
