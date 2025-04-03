import "./ProgressCountdown.css";
import { useState, useEffect } from "react";

interface ProgressCountdownProps {
  length: number;
  activeIndex: number;
  autoPlayIntervalMs: number;
  autoPlayMaxSteps: number;
  onAutoPlay: () => void;
}

const ProgressCountdown = ({
  length,
  activeIndex,
  autoPlayIntervalMs,
  autoPlayMaxSteps,
  onAutoPlay,
}: ProgressCountdownProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev === autoPlayMaxSteps) {
          clearInterval(interval);
          onAutoPlay();
          return 0;
        }
        return prev + 1;
      });
    }, autoPlayIntervalMs);
    return () => clearInterval(interval);
  }, [autoPlayIntervalMs, autoPlayMaxSteps, onAutoPlay]);

  return (
    <div className="progress-countdown">
      {Array.from({ length }).map((_, index) => (
        <progress
          className={`progress-countdown__bullet ${
            index === activeIndex ? "active" : ""
          }`}
          key={index}
          value={index === activeIndex ? progress : 0}
          max={autoPlayMaxSteps}
        ></progress>
      ))}
    </div>
  );
};

export default ProgressCountdown;
export { type ProgressCountdownProps };
