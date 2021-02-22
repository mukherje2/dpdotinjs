import React from "react";
import styles from "./Tag.module.scss";

export default function Tag(props) {
  return <span className={styles.container}>{props.label}</span>;
}
