// ATOM: next/image
import Image from "next/image";
import styles from "./Logo.module.scss";

export default function Logo(props) {
  return (
    <div className={styles.container}>
      <Image
        src="/logo.png"
        alt="discovery plus logo"
        width={190}
        height={38}
      />
    </div>
  );
}
