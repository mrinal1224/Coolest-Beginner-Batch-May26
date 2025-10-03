// src/App.jsx
import React from "react";
import useToggle from "./components/useToggle.jsx";

function App() {
  const [isOn, toggleIsOn] = useToggle(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{isOn ? "The Light is ON 💡" : "The Light is OFF 🌑"}</h1>
      <button onClick={toggleIsOn}>
        {isOn ? "Turn Off" : "Turn On"}
      </button>
    </div>
  );
}

export default App;