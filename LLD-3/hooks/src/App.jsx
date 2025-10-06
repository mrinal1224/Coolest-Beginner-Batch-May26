import { useState } from 'react';
import MouseTracker from './components/MouseTracker'

export default function App() {
  const [track, setTrack] = useState("x");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={() => setTrack(track === "x" ? "y" : "x")}>
        Toggle Tracking ({track === "x" ? "Y" : "X"})
      </button>
      <MouseTracker track={track} />
    </div>
  );
}
