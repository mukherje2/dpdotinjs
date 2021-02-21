import React from "react";
import Hamburger from "../molecules/Hamburger";
import Logo from "../molecules/Logo";
import List from "../molecules/List";
import styles from "./NavBar.module.scss";

export default function NavBar(props) {
  // console.log(props);
  return (
    <div className={styles.container}>
      <Hamburger />
      <Logo />
      <List items={props.menuitems} />
    </div>
  );
}
