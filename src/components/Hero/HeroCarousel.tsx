import Hero, { type HeroProps } from "./Hero";
import "./HeroCarousel.css";
import { useState } from "react";
import HeroCarouselNav from "./HeroCarouselNav";
import { classNamesBuilder, delay } from "../../utils/utils";

interface HeroCarouselProps
  extends Omit<
    HeroProps,
    "image" | "title" | "description" | "isCarousel" | "children"
  > {
  data: HeroProps[];
}

const HeroCarousel = (props: HeroCarouselProps) => {
  const dataLength = props.data.length;
  const [current, setCurrent] = useState(0);
  const handleNavClick = async (dir: string) => {
    if (dir === "previous") {
      setCurrent((prev) => (prev === 0 ? dataLength - 1 : prev - 1));
    } else if (dir === "next") {
      setCurrent((prev) => (prev === dataLength - 1 ? 0 : prev + 1));
    }
  };

  const prevIndex = (current - 1 + dataLength) % dataLength;
  const nextIndex = (current + 1) % dataLength;

  const prevHero = props.data[prevIndex];
  const currentHero = props.data[current];
  const nextHero = props.data[nextIndex];
  const heroes = [prevHero, nextHero, currentHero];

  const getHeroClass = (hero: HeroProps) => {
    if (hero.id === currentHero.id) return "active";
    if (hero.id === prevHero.id) return "prev";
    if (hero.id === nextHero.id) return "next";
    return "";
  };

  return (
    <Hero isCarousel {...props} className="carousel">
      {heroes.map((hero) => (
        <div
          className={classNamesBuilder("hero__content", getHeroClass(hero))}
          key={hero.id}
        >
          <img className="hero__image" src={hero.image} alt={hero.title} />
          <div className="hero__items items-start">
            <section className="hero__items__metadata">
              <h1>{hero.title}</h1>
              {hero.description ? (
                <p className="description">{hero.description}</p>
              ) : null}
            </section>
          </div>
        </div>
      ))}
      <HeroCarouselNav onClick={handleNavClick} />
    </Hero>
  );
};

export default HeroCarousel;
