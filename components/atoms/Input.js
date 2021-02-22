import React from "react";
import styles from "./Input.module.scss";

export default function Input(props) {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
}
