import Button from "../Button/Button";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

type Direction = "previous" | "next";
interface HeroNavCarouselProps {
  handleNavClick: (dir: Direction) => void;
}
const HeroCarouselNav = ({ handleNavClick }: HeroNavCarouselProps) => {
  return (
    <nav className="hero__nav">
      <Button
        className="hero__nav__button"
        onClick={() => handleNavClick("previous")}
      >
        <IconChevronLeft size={48} />
      </Button>
      <Button
        className="hero__nav__button"
        onClick={() => handleNavClick("next")}
      >
        <IconChevronRight size={48} />
      </Button>
    </nav>
  );
};

export default HeroCarouselNav;
export { type Direction, type HeroNavCarouselProps };
