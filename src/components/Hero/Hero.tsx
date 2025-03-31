import "./Hero.css";

interface HeroProps {
  image: string;
  title: string;
  description?: string;
}
const Hero = ({ title, image, description }: HeroProps) => {
  return (
    <section className="hero">
      <img className="hero__image" src={image} alt={title} />
      <div className="hero__content items-start">
        <section className="hero__content__metadata">
          <h1>{title}</h1>
          {description ? <p className="description">{description}</p> : null}
        </section>
      </div>
    </section>
  );
};

export default Hero;
