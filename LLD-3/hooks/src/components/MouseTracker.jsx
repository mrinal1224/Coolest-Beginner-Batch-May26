import React, { useState, useEffect } from "react";

function MouseTracker({ track }) {
  useEffect(() => {
    function handleMouseMove(e) {
      if (track === "x") {
        console.log("Mouse X:", e.clientX);
      } else {
        console.log("Mouse Y:", e.clientY);
      }
    }

    // add event listener
    window.addEventListener("mousemove", handleMouseMove);
    console.log(`🎯 Now tracking ${track.toUpperCase()} coordinate`);

    // cleanup before next effect or unmount
    return ()=>{
    window.removeEventListener("mousemove", handleMouseMove);
    console.log(`🧹 Stopped tracking ${track.toUpperCase()}`);
    }
   

    
  }, [track]); // cleanup runs each time 'track' changes

  return (
    <h3>Tracking Mouse {track.toUpperCase()} Coordinate — Move your mouse!</h3>
  );
}

export default MouseTracker