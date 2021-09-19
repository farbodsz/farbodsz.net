import React from "react";
import * as styles from "./Footer.module.scss";
import Layout from "./Layout";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <Layout>
        <p className={styles.text}>
          Designed and developed by Farbod Salamat-Zadeh.
        </p>
        <p className={styles.text}>
          Built using React and Gatsby. Hosted with Netlify.
          <br />
          <a href="https://github.com/farbodsz/farbodsz.net">
            View source code on GitHub.
          </a>
        </p>
      </Layout>
    </footer>
  );
}
