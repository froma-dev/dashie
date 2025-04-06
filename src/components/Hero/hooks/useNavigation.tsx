import { useState, useEffect, useCallback } from "react";

interface UseAutoPlayProps {
  intervalMs: number;
  maxSteps: number;
  autoplay?: boolean;
}

type UseAutoPlayDependencies = number[];

const DEFAULT_INTERVAL_MS = 5000;
const DEFAULT_MAX_STEPS = 3;
const DEFAULT_CURRENT_INDEX = 0;
const DEFAULT_AUTOPLAY = false;
const DEFAULT_COUNTDOWN_INTERVAL_MS = 1000;
const DEFAULT_COUNTDOWN = 1000;

const useNavigation = (
  {
    autoplay = DEFAULT_AUTOPLAY,
    intervalMs = DEFAULT_INTERVAL_MS,
    maxSteps = DEFAULT_MAX_STEPS,
  }: UseAutoPlayProps,
  [dataLength]: UseAutoPlayDependencies = []
) => {
  const [currentIndex, setCurrentIndex] = useState(DEFAULT_CURRENT_INDEX);
  const [countdown, setCountdown] = useState(DEFAULT_COUNTDOWN);
  const [isPaused, setIsPaused] = useState(false);
  const handleAutoPlay = useCallback(() => {
    setCurrentIndex((prev) => (prev === maxSteps - 1 ? 0 : prev + 1));
  }, [maxSteps]);
  const handleNavigation = useCallback(
    (dir: string) => {
      if (dir === "previous") {
        setCurrentIndex((prev) => (prev === 0 ? dataLength - 1 : prev - 1));
      } else if (dir === "next") {
        setCurrentIndex((prev) => (prev === dataLength - 1 ? 0 : prev + 1));
      }
    },
    [dataLength]
  );
  const handlePause = useCallback(() => {
    console.log("handlePause");
    if (autoplay) setIsPaused(() => true);
  }, [autoplay]);
  const handleResume = useCallback(() => {
    console.log("handleResume");
    if (autoplay) setIsPaused(() => false);
  }, [autoplay]);

  // autoplay effect
  useEffect(() => {
    if (autoplay && !isPaused) {
      const autoplayInterval = setInterval(() => handleAutoPlay(), intervalMs);
      return () => clearInterval(autoplayInterval);
    }
  }, [autoplay, isPaused, handleAutoPlay, intervalMs]);

  // countdown effect
  useEffect(() => {
    if (autoplay && !isPaused) {
      const countdownInterval = setInterval(() => {
        console.log("-->setCountdown", isPaused);
        setCountdown((prevMs: number) => {
          if (prevMs >= intervalMs) return DEFAULT_COUNTDOWN;
          return prevMs + DEFAULT_COUNTDOWN_INTERVAL_MS;
        });
      }, DEFAULT_COUNTDOWN_INTERVAL_MS);

      return () => clearInterval(countdownInterval);
    }
  }, [intervalMs, handleAutoPlay, isPaused, autoplay]);

  return {
    currentIndex,
    handleNavigation,
    handlePause,
    handleResume,
    countdown,
  };
};

export default useNavigation;
