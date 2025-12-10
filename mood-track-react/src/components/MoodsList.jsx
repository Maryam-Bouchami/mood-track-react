import moods from "../data/moods.json";
import Mood from "./Mood";
import styles from "../styles/MoodsList.module.css";
export default function MoodsList({ moodState, setMoodState }) {
  return (
    <div className={styles.moodsContainer}>
      {moods.map((mood, index) => (
        <Mood
          moodState={moodState}
          setMoodState={setMoodState}
          key={index}
          name={mood.name}
          color={mood.color}
          score={mood.score}
        />
      ))}
    </div>
  );
}
