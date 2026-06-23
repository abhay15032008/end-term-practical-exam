import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!dob) return;

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="App">
      <h2>Interactive Age Calculator</h2>
      <label>Enter your Date of Birth: </label>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <br />
      <button onClick={calculateAge}>Calculate Age</button>

      {age && (
        <h3 className="result">
          You are {age.years} years, {age.months} months, and {age.days} days old.
        </h3>
      )}
    </div>
  );
};

export default App;