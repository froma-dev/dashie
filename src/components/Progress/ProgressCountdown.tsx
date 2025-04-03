import "./ProgressCountdown.css";
import { useState, useEffect } from "react";

interface ProgressCountdownProps {
  length: number;
  activeIndex: number;
  autoPlayIntervalMs: number;
  autoPlayMaxSteps: number;
}

const ProgressCountdown = ({
  length,
  activeIndex,
  autoPlayIntervalMs,
  autoPlayMaxSteps,
}: ProgressCountdownProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev === autoPlayMaxSteps) {
          clearInterval(interval);
          return 0;
        }
        return prev + 1;
      });
    }, autoPlayIntervalMs);
    return () => clearInterval(interval);
  }, [length, autoPlayIntervalMs, autoPlayMaxSteps]);

  return (
    <div className="progress-countdown">
      {Array.from({ length }).map((_, index) => (
        <progress
          className={`progress-countdown__bullet ${
            index === activeIndex ? "active" : ""
          }`}
          key={index}
          value={progress}
          max={autoPlayMaxSteps}
        ></progress>
      ))}
    </div>
  );
};

export default ProgressCountdown;
export { type ProgressCountdownProps };
