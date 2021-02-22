import React from "react";
import styles from "./Title.module.scss";

export default function Title(props) {
  return (
    <div className={styles.container}>
      <h1>{props.label}</h1>
    </div>
  );
}
