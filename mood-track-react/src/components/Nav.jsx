import React, { useContext } from "react";
import MyTheme from "../MyTheme";
import styles from "./Nav.module.css";
export default function Nav() {
  const backgColor = useContext(MyTheme);
  return (
    <div
      style={{ backgroundColor: backgColor }}
      className={styles.navContainer}
    >
      <img src="./mood-logo.png" />
      <h1>My Mood Journal</h1>
    </div>
  );
}
