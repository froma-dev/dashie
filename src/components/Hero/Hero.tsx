import { classNamesBuilder } from "../../utils/utils";
import "./Hero.css";

interface HeroProps {
  image?: string;
  title?: string;
  description?: string;
  isCarousel?: boolean;
  children?: React.ReactNode;
  className?: string;
  id?: string;
}
const Hero = ({
  title,
  image,
  description,
  isCarousel = false,
  children,
  className = "",
}: HeroProps) => {
  const classNames = classNamesBuilder("hero", className);

  return (
    <section className={classNames}>
      {!isCarousel ? (
        <div className="hero__content">
          <img className="hero__image" src={image} alt={title} />
          <div className="hero__items items-start">
            <section className="hero__items__metadata">
              <h1>{title}</h1>
              {description ? (
                <p className="description">{description}</p>
              ) : null}
            </section>
          </div>
        </div>
      ) : (
        children
      )}
    </section>
  );
};

export default Hero;
export { type HeroProps };
