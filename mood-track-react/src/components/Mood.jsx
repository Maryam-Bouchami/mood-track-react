import styles from "../styles/Mood.module.css";

export default function Mood({ name, color, score, moodState, setMoodState }) {
  function handleClick() {
    setMoodState({
      name,
      color,
      score,
    });
  }

  const isSelected = moodState?.name === name;

  return (
    <div>
      <button
        className={styles.moodButton}
        style={{
          backgroundColor: color,
          border: isSelected ? "3px solid black" : "2px solid transparent",
        }}
        onClick={handleClick}
      >
        {name}
      </button>
    </div>
  );
}
