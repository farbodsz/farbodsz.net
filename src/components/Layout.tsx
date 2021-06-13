import React from "react";
import styles from "./Layout.module.scss";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = (props) => (
  <div className={styles.layout}>{props.children}</div>
);

export default Layout;
