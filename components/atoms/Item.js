import React from "react";
import styles from "./Item.module.scss";

export default function Item(props) {
  return (
    <div key={props.id} className={styles.container}>
      {props.label}
    </div>
  );
}
