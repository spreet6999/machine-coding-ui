import { useEffect, useState } from "react";

//* Import Components
import Time from "./components/Time";
import Controls from "./components/Controls";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    let intervalId = null;
    if (!isPaused) {
      intervalId = setInterval(() => {
        setTime((prevState) => prevState + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isPaused]);

  const handlePausePlay = () => {
    setIsPaused((prevState) => !prevState);
  };

  const handleReset = () => {
    setTime(0);
    setIsPaused(true);
  };

  const handleSkip = (factor = 1) => {
    if (factor < 0 && time + factor < 0) {
      setTime(0);
      return;
    }
    setTime((prevState) => prevState + factor);
  };

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor(time / 60) % 60;
  const seconds = time % 60;

  return (
    <div className="App">
      <Controls
        time={time}
        isPaused={isPaused}
        handlePausePlay={handlePausePlay}
        handleReset={handleReset}
        handleSkip={handleSkip}
      >
        <Time hours={hours} minutes={minutes} seconds={seconds} />
      </Controls>
    </div>
  );
}
