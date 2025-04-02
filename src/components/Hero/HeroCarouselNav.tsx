import Button from "../Button/Button";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

type Direction = "previous" | "next";
interface HeroNavCarouselProps {
  onClick: (dir: Direction) => void;
}
const HeroCarouselNav = ({ onClick }: HeroNavCarouselProps) => {
  return (
    <nav className="hero__nav">
      <Button className="hero__nav__button" onClick={() => onClick("previous")}>
        <IconChevronLeft size={48} />
      </Button>
      <Button className="hero__nav__button" onClick={() => onClick("next")}>
        <IconChevronRight size={48} />
      </Button>
    </nav>
  );
};

export default HeroCarouselNav;
export { type Direction, type HeroNavCarouselProps };
