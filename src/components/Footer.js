import React from "react";
import styles from "./Footer.module.scss";
import Frame from "./Frame";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Frame>
        <p className={styles.text}>
          Designed and developed by Farbod Salamat-Zadeh.
        </p>
        <p className={styles.text}>
          Built using React.{" "}
          <a href="https://github.com/farbodsz/farbodsz.net">
            View source code on GitHub.
          </a>
        </p>
      </Frame>
    </footer>
  );
}
