import "./Card.css";

interface CardProps {
  title: string;
  description: string;
  footer: string;
};

const Card = ({ title, description, footer }: CardProps) => {
  return (
    <article className="card">
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
      <footer className="card__footer">{footer}</footer>
    </article>
  );
};

export default Card;
