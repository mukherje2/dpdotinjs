import React from "react";
import Item from "../atoms/Item";
import styles from "./List.module.scss";

export default function List(props) {
  return <div className={styles.container}>{renderLists(props.items)}</div>;
}

function renderLists(items) {
  return items.map((i) => <Item key={i.id} label={i.label} />);
}
