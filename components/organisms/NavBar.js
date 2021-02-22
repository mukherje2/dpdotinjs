import React from "react";
import Hamburger from "../molecules/Hamburger";
import Logo from "../molecules/Logo";
import List from "../molecules/List";
import Search from "../molecules/Search";
import Button from "../atoms/Button";
import styles from "./NavBar.module.scss";

export default function NavBar(props) {
  // console.log(props);
  return (
    <div className={styles.container}>
      <Hamburger />
      <Logo />
      <List items={props.menuitems} />
      <Search />
      <Button text="Sign In" />
    </div>
  );
}
