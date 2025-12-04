import { useState, useEffect } from "react";
import MoodsList from "./components/MoodsList";
import MyTheme from "./MyTheme";
import Nav from "./components/Nav";
import Calendar from "./components/Calendar";

function App() {
  // Mood actuel
  const [moodState, setMoodState] = useState(() => {
    const savedMood = localStorage.getItem("moodState");
    return savedMood
      ? JSON.parse(savedMood)
      : { name: "Neutral", color: "#C7C9C7", score: 2 };
  });

  // Date sélectionnée
  const [selectedDate, setSelectedDate] = useState(() => {
    const savedDate = localStorage.getItem("selectedDate");
    return savedDate || new Date().toISOString().slice(0, 10);
  });

  // Historique des moods (avec date)
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("moodHistory");
    return saved ? JSON.parse(saved) : [];
  });

  // Ajouter un mood à l'historique à chaque changement de mood
  useEffect(() => {
    // Sauvegarder le mood actuel
    localStorage.setItem("moodState", JSON.stringify(moodState));

    // Ajouter dans l'historique uniquement si mood ET date ont changé
    setHistory((prev) => {
      const lastEntry = prev[prev.length - 1];
      if (
        !lastEntry ||
        lastEntry.name !== moodState.name ||
        lastEntry.date !== selectedDate
      ) {
        // On vérifie que **les deux** sont différents pour ajouter
        if (
          !lastEntry ||
          (lastEntry.name !== moodState.name && lastEntry.date !== selectedDate)
        ) {
          const newEntry = { ...moodState, date: selectedDate };
          const updated = [...prev, newEntry];
          localStorage.setItem("moodHistory", JSON.stringify(updated));
          return updated;
        }
      }
      return prev;
    });
  }, [moodState, selectedDate]);

  // Fonction pour vider l'historique et reset mood/date
  const clearStorage = () => {
    localStorage.clear();
    const defaultMood = { name: "Neutral", color: "#C7C9C7", score: 2 };
    const today = new Date().toISOString().slice(0, 10);
    setMoodState(defaultMood);
    setSelectedDate(today);
    setHistory([]);
  };

  return (
    <MyTheme.Provider value={moodState.color}>
      <Nav />

      {/* Sélecteur de date */}
      <Calendar selectedDate={selectedDate} onDateChange={setSelectedDate} />

      {/* Liste des moods */}
      <MoodsList moodState={moodState} setMoodState={setMoodState} />

      <p>
        Current mood: {moodState.name} (Date: {selectedDate})
      </p>

      <h3>Historique des moods :</h3>
      <ul>
        {history.map((m, i) => (
          <li key={i}>
            {m.date} — {m.name} — {m.color} — Score {m.score}
          </li>
        ))}
      </ul>

      <button onClick={clearStorage}>Vider le stockage</button>
    </MyTheme.Provider>
  );
}

export default App;
