import React, { useState, useRef } from 'react';

function Timer() {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const timerIntervalRef = useRef(null);

  const startTimer = () => {
    if (!timerIntervalRef.current) { // Check if timer is not already running
      const duration = 10; // Set the duration in seconds
      setTimeRemaining(duration);
      timerIntervalRef.current = setInterval(updateTimer, 1000);
    }
  };

  const pauseTimer = () => {
    clearInterval(timerIntervalRef.current);
    timerIntervalRef.current = null; // Reset the interval ref
  };

  const resetTimer = () => {
    clearInterval(timerIntervalRef.current);
    timerIntervalRef.current = null; // Reset the interval ref
    setTimeRemaining(0);
  };

  const updateTimer = () => {
    setTimeRemaining(prevTime => prevTime - 1);
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <div>Timer: {formatTime(timeRemaining)}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
