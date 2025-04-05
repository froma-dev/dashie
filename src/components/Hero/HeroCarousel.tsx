import Hero, { type HeroProps } from "./Hero";
import "./HeroCarousel.css";
import { classNamesBuilder } from "../../utils/utils";
import BasicNavigator from "../Navigator/BasicNavigator";
import BulletIndicator from "../BulletIndicator/BulletIndicator";
import useAutoPlay from "./hooks/useAutoPlay";
import { USE_AUTOPLAY_INTERVAL_MS, USE_AUTOPLAY_MAX_STEPS } from "../../config";

interface HeroCarouselProps extends HeroProps {
  data: HeroProps[];
}

const HeroCarousel = (props: HeroCarouselProps) => {
  const dataLength = props.data.length;
  const {
    currentIndex,
    handleNavigation,
    handlePause,
    handleResume,
    countdown,
  } = useAutoPlay(
    {
      autoplay: true,
      intervalMs: USE_AUTOPLAY_INTERVAL_MS,
      maxSteps: USE_AUTOPLAY_MAX_STEPS,
    },
    [dataLength]
  );

  const prevIndex = (currentIndex - 1 + dataLength) % dataLength;
  const nextIndex = (currentIndex + 1) % dataLength;

  const prevHero = props.data[prevIndex];
  const currentHero = props.data[currentIndex];
  const nextHero = props.data[nextIndex];
  const heroes = [prevHero, nextHero, currentHero];

  const getHeroClass = (hero: HeroProps) => {
    if (hero.id === currentHero.id) return "active";
    if (hero.id === prevHero.id) return "prev";
    if (hero.id === nextHero.id) return "next";
    return "";
  };

  console.log("countdown", countdown);

  return (
    <Hero isCarousel {...props} className="hero--carousel">
      <div
        className="hero-container"
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
      >
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
      </div>
      <div className="hero__navigation">
        <BasicNavigator
          onClick={handleNavigation}
          onKeyDown={handleNavigation}
        />
        <div className="indicators-wrapper">
          {Array.from({ length: dataLength }).map((_, index) => (
            <BulletIndicator
              key={index}
              className={index === currentIndex ? "active" : ""}
            />
          ))}
        </div>
      </div>
    </Hero>
  );
};

export default HeroCarousel;
export { type HeroCarouselProps, type HeroProps };
