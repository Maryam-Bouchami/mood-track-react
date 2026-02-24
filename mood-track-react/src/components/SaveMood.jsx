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
    // SaveMood.jsx – version avec disposition côte-à-côte sur desktop
    <div className={`${styles.saveMoodContainer} ${styles.container}`}>
      <div className={styles.calendarSection}>
        <Calendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
      </div>

      <div className={styles.moodsSection}>
        <MoodsList moodState={moodState} setMoodState={setMoodState} />
        <button className={styles.saveButton} onClick={onSave}>
          Save Mood
        </button>
        {children}
      </div>
    </div>
  );
}

export default SaveMood;
