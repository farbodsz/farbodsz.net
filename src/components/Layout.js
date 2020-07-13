import React from "react";
import styles from "./Layout.module.sass";

export default function Layout({ children }) {
  return <div className={styles.layout}>{children}</div>;
}
