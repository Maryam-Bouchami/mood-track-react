import { useState } from "react";
import MoodsList from "./components/MoodsList";
import MyTheme from "./MyTheme";
import Nav from "./components/Nav";
import Calendar from "./components/Calendar";
import SaveMood from "./components/SaveMood";
import "./App.css";
import MoodChart from "./components/MoodChart";
import MoodDonut from "./components/MoodDonut";

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

  // Historique
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("moodHistory");
    return saved ? JSON.parse(saved) : [];
  });

  // 💾 Fonction SAVE déclenchée par le bouton Save
  const saveMood = () => {
    const newEntry = { ...moodState, date: selectedDate };

    const updated = [...history, newEntry];

    // 🔥 Sauvegarde dans localStorage SEULEMENT ici
    localStorage.setItem("moodState", JSON.stringify(moodState));
    localStorage.setItem("selectedDate", selectedDate);
    localStorage.setItem("moodHistory", JSON.stringify(updated));

    setHistory(updated);

    console.log("Mood Saved :", newEntry);
  };

  // Reset complet
  const clearStorage = () => {
    localStorage.clear();
    const defaultMood = { name: "Neutral", color: "#C7C9C7", score: 2 };
    const today = new Date().toISOString().slice(0, 10);
    setMoodState(defaultMood);
    setSelectedDate(today);
    setHistory([]);
  };

  // Convertir history => tableau pour le Donut
  const donutData = history.reduce((acc, mood) => {
    const existing = acc.find((m) => m.name === mood.name);

    if (existing) {
      existing.value += 1;
    } else {
      acc.push({
        name: mood.name,
        value: 1,
        color: mood.color, // tu récupères la couleur du mood
      });
    }

    return acc;
  }, []);

  return (
    <MyTheme.Provider value={moodState.color}>
      <Nav />

      <div className="AppContainer">
        {/*  Nouveau composant SaveMood */}
        <SaveMood
          moodState={moodState}
          setMoodState={setMoodState}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          onSave={saveMood}
        />
        <div className="history">
          <h3>History</h3>
          <ul>
            {/*      historique des moods 
        
            history.map((m, i) => (
              <li key={i}>
                {m.date} — {m.name}— {m.color} — Score {m.score}
              </li>
            )) */}
          </ul>

          <MoodChart data={history} />
          <MoodDonut data={donutData} />
          <button className="emptyButton" onClick={clearStorage}>
            Clear History
          </button>
        </div>
      </div>
    </MyTheme.Provider>
  );
}

export default App;
