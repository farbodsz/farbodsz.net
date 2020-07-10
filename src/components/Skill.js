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
export default class Skill extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  toggleIconActive() {
    this.setState((currState) => ({
      isActive: !currState.isActive,
    }));
  }

  render() {
    let iconStyles = styles.icon;
    if (!this.state.isActive) {
      iconStyles += " " + styles.iconInactive;
    }

    return (
      <div className={styles.container}>
        <img
          src={icons[this.props.icon]}
          alt={this.props.name}
          className={iconStyles}
          onMouseEnter={() => this.toggleIconActive()}
          onMouseLeave={() => this.toggleIconActive()}
        />
        <p className={styles.skillName}>{this.props.name}</p>
        <p className={styles.skillDuration}>{this.props.duration} yrs</p>
      </div>
    );
  }
}
