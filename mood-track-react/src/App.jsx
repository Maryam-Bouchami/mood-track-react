import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import MoodsList from "./components/MoodsList";
import MyTheme from "./MyTheme";
import Nav from "./components/Nav";
function App() {
  const [moodState, setMoodState] = useState({
    name: "Neutral",
    color: "#C7C9C7",
    score: 2,
  });
  return (
    <MyTheme.Provider value={moodState.color}>
      <Nav />
      <MoodsList moodState={moodState} setMoodState={setMoodState} />
      <p>Current mood is: {moodState.name}</p>
    </MyTheme.Provider>
  );
}
export default App;
