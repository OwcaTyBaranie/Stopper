// Timer.js
import React, { useState, useEffect } from 'react';
import styles from './Timer.module.scss';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const milliseconds = (`0${time % 100}`).slice(-2);
    const seconds = (`0${Math.floor((time / 100) % 60)}`).slice(-2);
    const minutes = (`0${Math.floor((time / 6000) % 60)}`).slice(-2);
    const hours = (`0${Math.floor((time / 360000) % 24)}`).slice(-2);

    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <><div className='container'>
    <div className={styles.timer}>
          {formatTime()}
      </div>
      <div className={styles.controls}>
              <button onClick={handleStart}>Start</button>
              <button onClick={handleStop}>Stop</button>
              <button onClick={handleReset}>Reset</button>
          </div>
          </div></>

  );
};

export default Timer;
