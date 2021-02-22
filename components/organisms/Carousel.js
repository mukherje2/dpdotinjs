import React from "react";
import CardLeft from "../molecules/CardLeft";
import CardRight from "../molecules/CardRight";
import styles from "./Carousel.module.scss";
export default function Carousel(props) {
  return (
    <div className={styles.container}>
      <CardLeft />
      <CardRight />
    </div>
  );
}
