import styles from "./Mood.module.css";

export default function Mood({ name, color, score, moodState, setMoodState }) {
  function handleClick() {
    setMoodState({
      name: name,
      color: color,
      score: score,
    });
  }
  return (
    <>
      <div>
        <button
          className={styles.moodButton}
          style={{ backgroundColor: color }}
          onClick={() => handleClick()}
        >
          {name}
        </button>
      </div>
    </>
  );
}
