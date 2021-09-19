import React from "react";
import * as styles from "./Layout.module.scss";

const Layout = (props) => (
  <div className={styles.layout} {...props}>
    {props.children}
  </div>
);

export default Layout;
