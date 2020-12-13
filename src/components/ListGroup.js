import React from "react";

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
    <table>
      <tr>
        <td style={{ paddingRight: "10px" }}>
          <b>{props.groupName}</b>
        </td>
        <td>{props.items[0]}</td>
      </tr>
      {extraRows}
    </table>
  );
}
