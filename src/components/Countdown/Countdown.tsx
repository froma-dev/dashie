import useCountdown from "../../shared/hooks/useCountdown";

const DEFAULT_COUNTDOWN_INTERVAL_MS = 1000;

const Countdown = ({
  intervalMs = DEFAULT_COUNTDOWN_INTERVAL_MS,
}: {
  intervalMs: number;
}) => {
  const { countdown } = useCountdown({ intervalMs });
  
  return <div>{countdown}</div>;
};

export default Countdown;
