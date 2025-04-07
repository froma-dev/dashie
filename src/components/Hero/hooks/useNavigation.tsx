import { useState, useEffect, useCallback } from "react";

interface UseAutoPlayProps {
  intervalMs: number;
  autoplay?: boolean;
}

type UseAutoPlayDependencies = number[];

const DEFAULT_INTERVAL_MS = 5000;
const DEFAULT_CURRENT_INDEX = 0;
const DEFAULT_AUTOPLAY = false;
const DEFAULT_COUNTDOWN_INTERVAL_MS = 1000;
const DEFAULT_COUNTDOWN = 1000;
const COUNTDOWN_STEP_MS = 1000;

const useNavigation = (
  {
    autoplay = DEFAULT_AUTOPLAY,
    intervalMs = DEFAULT_INTERVAL_MS,
  }: UseAutoPlayProps,
  [dataLength]: UseAutoPlayDependencies = []
) => {
  const [currentIndex, setCurrentIndex] = useState(DEFAULT_CURRENT_INDEX);
  const [countdown, setCountdown] = useState(DEFAULT_COUNTDOWN);
  const [isPaused, setIsPaused] = useState(false);
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
    if (autoplay) setIsPaused(() => true);
  }, [autoplay]);
  const handleResume = useCallback(() => {
    if (autoplay) setIsPaused(() => false);
  }, [autoplay]);

  useEffect(() => {
    if (!autoplay || isPaused) return;

    let elapsedTime = 0;
    const countdownInterval = setInterval(() => {
      elapsedTime += COUNTDOWN_STEP_MS;

      if (elapsedTime > intervalMs) {
        elapsedTime = 0;
        handleNavigation("next");
      }

      setCountdown(elapsedTime);
    }, DEFAULT_COUNTDOWN_INTERVAL_MS);

    return () => {
      clearInterval(countdownInterval);
      setCountdown((prev) => prev);
    };
  }, [intervalMs, isPaused, autoplay, handleNavigation]);

  return {
    currentIndex,
    handleNavigation,
    handlePause,
    handleResume,
    countdown,
  };
};

export default useNavigation;
