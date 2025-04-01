import Button from "../Button/Button";
import "./Card.css";

interface CardProps {
  id: string;
  title: string;
  description: string;
  draggable?: boolean;
  isDragging?: boolean;
  drag?: (event: React.DragEvent) => void;
  dragEnd?: (event: React.DragEvent) => void;
  dragOver?: (event: React.DragEvent) => void;
  dragEnter?: (event: React.DragEvent) => void;
  dragLeave?: (event: React.DragEvent) => void;
  dragStart?: (event: React.DragEvent) => void;
  drop?: (event: React.DragEvent) => void;
}

const Card = ({
  title,
  description,
  draggable = false,
  drag,
  dragEnd,
  dragOver,
  dragEnter,
  dragLeave,
  dragStart,
  drop,
  isDragging = false,
}: CardProps) => {
  const cardClassName = `card ${isDragging ? "dragging" : ""}`;
  
  return (
    <article
      className={cardClassName}
      draggable={draggable}
      onDrag={drag}
      onDragEnd={dragEnd}
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDragStart={dragStart}
      onDrop={drop}
    >
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
      <Button>Button</Button>
    </article>
  );
};

export default Card;
export type { CardProps };
