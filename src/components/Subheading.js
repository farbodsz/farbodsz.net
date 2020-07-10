import React from "react";
import styles from "./Subheading.module.sass";

/**
 * @param props takes `text` property
 */
export default function Subheading(props) {
  return <h3 className={styles.subheader}>{props.text}</h3>;
}
