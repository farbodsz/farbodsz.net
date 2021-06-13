import React from "react";
import styles from "./ListGroup.module.scss";

type ListGroupProps = {
  groupName: string;
  items: [JSX.Element];
};

export default class ListGroup extends React.Component<ListGroupProps> {
  constructor(props: ListGroupProps) {
    super(props);
  }

  render() {
    const extraRows = this.props.items.slice(1).map((item) => (
      <tr>
        <td />
        <td>{item}</td>
      </tr>
    ));

    return (
      <table className={styles.table}>
        <tr>
          <td className={styles.groupName}>
            <b>{this.props.groupName}</b>
          </td>
          <td>{this.props.items[0]}</td>
        </tr>
        {extraRows}
      </table>
    );
  }
}
