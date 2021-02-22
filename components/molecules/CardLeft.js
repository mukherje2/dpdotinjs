import React from "react";
import Title from "../atoms/Title";
import SubTitle from "../atoms/SubTitle";
import Tag from "../atoms/Tag";
import Play from "../atoms/Play";
import styles from "./CardLeft.module.scss";

export default function CardLeft(props) {
  return (
    <div className={styles.container}>
      <Title label="Cats vs Dogs" />
      <SubTitle />
      <div className={styles.tags}>
        <Tag label="New" />
        <Tag label="Family" />
        <Tag label="Trending" />
      </div>
      <div className={styles.play__card}>
        <Play />
        <h3>Play</h3>
      </div>
    </div>
  );
}
