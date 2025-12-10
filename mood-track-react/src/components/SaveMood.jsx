// SaveMood.jsx
import MoodsList from "./MoodsList";
import Calendar from "./Calendar";
import styles from "../styles/SaveMood.module.css";
function SaveMood({
  moodState,
  setMoodState,
  selectedDate,
  setSelectedDate,
  onSave,
  children,
}) {
  return (
    <div className={styles.saveMoodContainer}>
      {/* Calendar */}
      <Calendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
      {/* Mood Selector */}
      <MoodsList moodState={moodState} setMoodState={setMoodState} />
      <button className={styles.saveButton} onClick={onSave}>
        Save Mood
      </button>
      {children}
    </div>
  );
}

export default SaveMood;
