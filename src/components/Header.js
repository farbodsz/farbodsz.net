import React from "react";
import styles from "./Header.module.scss";

import iconGithub from "../icons/github.svg";
import iconSO from "../icons/so.svg";
import iconLinkedin from "../icons/linkedin.svg";
import iconGithubActive from "../icons/github_active.svg";
import iconSOActive from "../icons/so_active.svg";
import iconLinkedinActive from "../icons/linkedin_active.svg";

const LINK_GITHUB = "https://github.com/farbodsz/";
const LINK_SO = "https://stackoverflow.com/users/4230345/";
const LINK_LINKEDIN = "https://www.linkedin.com/in/farbodsz/";

class ProfileChip extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  render() {
    return (
      <span
        className={styles.profileChip}
        onMouseEnter={() => this.setState({ active: true })}
        onMouseLeave={() => this.setState({ active: false })}
      >
        <img
          className={styles.icon}
          src={this.state.active ? this.props.iconActive : this.props.icon}
          alt={this.props.text}
        />
        <a
          className={styles.iconText}
          href={this.props.link}
          target="_blank"
          rel="noreferrer"
        >
          {this.props.text}
        </a>
      </span>
    );
  }
}

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1>Farbod Salamat-Zadeh</h1>
      <div className={styles.linksContainer}>
        <ProfileChip
          text="GitHub"
          icon={iconGithub}
          iconActive={iconGithubActive}
          link={LINK_GITHUB}
        />
        {" | "}
        <ProfileChip
          text="Stack Overflow"
          icon={iconSO}
          iconActive={iconSOActive}
          link={LINK_SO}
        />
        {" | "}
        <ProfileChip
          text="LinkedIn"
          icon={iconLinkedin}
          iconActive={iconLinkedinActive}
          link={LINK_LINKEDIN}
        />
      </div>
    </header>
  );
}
