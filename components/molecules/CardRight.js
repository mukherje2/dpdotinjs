import React from "react";
import styles from "./CardRight.module.scss";
import Image from "next/image";

export default function CardRight(props) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.nxt_image}
        src="/catsvdogs.jpeg"
        alt="cats v dogs"
        width={800}
        height={480}
      />
    </div>
  );
}
