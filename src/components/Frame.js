import React from "react";
import styles from "./Frame.module.scss";

export default function Frame({ children }) {
  return <div className={styles.layout}>{children}</div>;
}
