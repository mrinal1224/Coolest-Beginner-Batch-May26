import React, { useState } from 'react'
import Timer from './components/Timer'

function App() {
  const [showTimer , setShowTimer]= useState(false)

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={() => setShowTimer((prev) => !prev)}>
        {showTimer ? "Stop Timer" : "Start Timer"}
      </button>
      {showTimer && <Timer />}
    </div>
  )
}

export default App