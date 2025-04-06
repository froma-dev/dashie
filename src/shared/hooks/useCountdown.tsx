import { useEffect, useState } from "react";

const DEFAULT_COUNTDOWN_INTERVAL_MS = 1000;

const useCountdown = ({
  intervalMs = DEFAULT_COUNTDOWN_INTERVAL_MS,
}: {
  intervalMs: number;
}) => {
  const [countdown, setCountdown] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCountdown((prev) => prev + 1);
      }, intervalMs);
      return () => clearInterval(interval);
    }
  }, [intervalMs, isPaused]);

  return { countdown, setCountdown, handlePause, handleResume };
};

export default useCountdown;
