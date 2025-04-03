import Button from "../Button/Button";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import ProgressCountdown from "../Progress/ProgressCountdown";

type Direction = "previous" | "next";
interface HeroNavCarouselProps {
  onClick: (dir: Direction) => void;
  onKeyDown: (dir: Direction) => void;
  length: number;
  current: number;
  autoPlayIntervalMs: number;
  autoPlayMaxSteps: number;
}
const NEXT: Direction = "next";
const PREVIOUS: Direction = "previous";
const HeroCarouselNav = ({
  onClick,
  onKeyDown,
  length,
  current,
  autoPlayIntervalMs,
  autoPlayMaxSteps,
}: HeroNavCarouselProps) => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.code === "ArrowLeft") {
      onKeyDown(PREVIOUS);
    } else if (event.code === "ArrowRight") {
      onKeyDown(NEXT);
    }
  };

  return (
    <nav className="hero__navigation">
      <div className="hero__nav">
        <Button
          className="hero__nav__button"
          onKeyDown={handleKeyDown}
          onClick={() => onClick(PREVIOUS)}
        >
          <IconChevronLeft size={48} />
        </Button>
        <ProgressCountdown
          length={length}
          activeIndex={current}
          autoPlayIntervalMs={autoPlayIntervalMs}
          autoPlayMaxSteps={autoPlayMaxSteps}
        />
        <Button
          className="hero__nav__button"
          onKeyDown={handleKeyDown}
          onClick={() => onClick(NEXT)}
        >
          <IconChevronRight size={48} />
        </Button>
      </div>
    </nav>
  );
};

export default HeroCarouselNav;
export { type Direction, type HeroNavCarouselProps };
