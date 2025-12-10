import React, { useContext } from "react";
import MyTheme from "../MyTheme";
import styles from "../styles/Nav.module.css";
export default function Nav() {
  const backgColor = useContext(MyTheme);
  return (
    <div
      style={{ backgroundColor: backgColor }}
      className={styles.navContainer}
    >
      <img src="./mood-logo.png" />
      <h1>Mood Track</h1>
    </div>
  );
}
