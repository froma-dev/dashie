import "./ProgressCountdown.css";

interface ProgressCountdownProps {
  length: number;
  activeIndex: number;
}

const ProgressCountdown = ({ length, activeIndex }: ProgressCountdownProps) => {
  return (
    <div className="progress-countdown">
      {Array.from({ length }).map((_, index) => (
        <progress
          className={`progress-countdown__bullet ${
            index === activeIndex ? "active" : ""
          }`}
          key={index}
          value={0}
        ></progress>
      ))}
    </div>
  );
};

export default ProgressCountdown;
