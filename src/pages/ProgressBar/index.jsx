import { useEffect, useRef, useState } from "react";
import ProgressBar from "./components/ProgressBar";
import ControlButtons from "./components/ControlButtons";
import useToggleState from "../../hooks/useToggleState/useToggleState";

const totalms = 10 * 1000;
const intervalms = 1000;
const totalCycles = totalms / intervalms;
const progressEachCycle = (1 / totalCycles) * 100;
function ProgressBarContainer() {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useToggleState(true);
  const [isStopped, setIsStopped] = useToggleState();

  const timerIdRef = useRef();
  const cyclesCompletedRef = useRef(0);

  useEffect(() => {
    if (isPlaying && !isStopped) {
      timerIdRef.current = setInterval(() => {
        cyclesCompletedRef.current = cyclesCompletedRef.current + 1;
        setProgress((prevProgress) => prevProgress + progressEachCycle);
        if (cyclesCompletedRef.current >= totalCycles) {
          clearInterval(timerIdRef.current);
        }
      }, intervalms);
    }
    return () => clearInterval(timerIdRef.current);
  }, [isPlaying, isStopped]);

  const handlePlayPause = () => {
    if (isPlaying) {
      if (timerIdRef.current) clearInterval(timerIdRef.current);
    }
    setIsPlaying();
  };

  const handleStartStop = () => {
    if (!isStopped) {
      //* if stopped
      if (timerIdRef.current) clearInterval(timerIdRef.current);
      cyclesCompletedRef.current = 0;
      setProgress(0);
      setIsPlaying(false);
    } else {
      cyclesCompletedRef.current = 0;
      setProgress(0);
      setIsPlaying();
    }
    setIsStopped();
  };

  const handleSkip = (factor = 1) => {
    if (factor) {
      if (cyclesCompletedRef.current + factor < 0) {
        setProgress(0);
        cyclesCompletedRef.current = 0;
      } else if (cyclesCompletedRef.current + factor > totalCycles) {
        setProgress(100);
        cyclesCompletedRef.current = 100;
      } else {
        cyclesCompletedRef.current += factor;
        setProgress(
          (prevProgress) => prevProgress + factor * progressEachCycle
        );
      }
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <ProgressBar height={32} progress={progress} />
      <ControlButtons
        isPlaying={isPlaying}
        isStopped={isStopped}
        disableSkipBackward={cyclesCompletedRef.current === 0}
        disableSkipForward={cyclesCompletedRef.current === totalCycles}
        handlePlay={handlePlayPause}
        handleStop={handleStartStop}
        handleSkip={handleSkip}
      />
    </div>
  );
}

export default ProgressBarContainer;
