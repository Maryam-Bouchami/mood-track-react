import { useState, useEffect } from "react";

export default function Calendar({ selectedDate, onDateChange }) {
  const [date, setDate] = useState(() => {
    // Charger la date du localStorage si elle existe
    const saved = localStorage.getItem("selectedDate");
    return saved || new Date().toISOString().slice(0, 10); // format yyyy-mm-dd
  });

  useEffect(() => {
    localStorage.setItem("selectedDate", date);
    if (onDateChange) {
      onDateChange(date); // remonter la date au parent
    }
  }, [date, onDateChange]);

  return (
    <div>
      <label>
        Sélectionnez la date :{" "}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
    </div>
  );
}
