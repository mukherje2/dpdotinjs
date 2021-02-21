import React from "react";
import styles from "./Item.module.scss";

export default function Item(props) {
  console.log(props);
  return <div className={styles.container}>{props.label}</div>;
}
