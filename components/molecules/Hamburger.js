// ATOM: svg
import React from "react";
import styles from "./Hamburger.module.scss";

export default function Hamburger(props) {
  return (
    <div className={styles.container}>
      <svg viewBox="0 0 100 80" width="40" height="40">
        <rect width="60" height="10" rx="4"></rect>
        <rect y="20" width="60" height="10" rx="4"></rect>
        <rect y="40" width="60" height="10" rx="4"></rect>
      </svg>
    </div>
  );
}
