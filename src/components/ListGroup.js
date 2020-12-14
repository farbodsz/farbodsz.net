import React from "react";
import styles from "./ListGroup.module.scss";

/**
 * Props:
 * - groupName
 * - items (array)
 */
export default function ListGroup(props) {
  const extraRows = props.items.slice(1).map((item) => (
    <tr>
      <td />
      <td>{item}</td>
    </tr>
  ));

  return (
    <table className={styles.table}>
      <tr>
        <td className={styles.groupName}>
          <b>{props.groupName}</b>
        </td>
        <td>{props.items[0]}</td>
      </tr>
      {extraRows}
    </table>
  );
}
