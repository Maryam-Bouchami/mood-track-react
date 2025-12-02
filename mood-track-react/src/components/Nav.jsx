import React, { useContext } from "react";
import MyTheme from "../MyTheme";

export default function Nav() {
  const backgColor = useContext(MyTheme);
  return (
    <div style={{ backgroundColor: backgColor }}>
      <h1>Modd Track App</h1>
    </div>
  );
}
