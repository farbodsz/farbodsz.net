import React from "react";
import styles from "./Footer.module.sass";
import Layout from "../Layout";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Layout>
        <p>Copyright (C) 2020 Farbod Salamat-Zadeh</p>
        <p>
          Skills icons made by{" "}
          <a href={"https://freeicons.io/profile/3"}>icon king</a> from{" "}
          <a href={"https://www.freeicons.io/"}>www.freeicons.io</a>
        </p>
      </Layout>
    </footer>
  );
}
