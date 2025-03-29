import Button from "../Button/Button";
import "./Card.css";

interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <article className="card">
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
      <Button>Button</Button>
    </article>
  );
};

export default Card;
