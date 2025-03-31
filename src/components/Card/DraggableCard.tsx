import Card, { type CardProps } from "./Card";

interface DraggableCardProps extends CardProps {
  drag: (event: React.DragEvent) => void;
  dragEnd: (event: React.DragEvent) => void;
  dragOver: (event: React.DragEvent) => void;
  dragEnter: (event: React.DragEvent) => void;
  dragLeave: (event: React.DragEvent) => void;
  dragStart: (event: React.DragEvent) => void;
  drop: (event: React.DragEvent) => void;
}

const DraggableCard = (props: DraggableCardProps) => {
  const handleDrag = (event: React.DragEvent) => {};
  const handleDragEnd = (event: React.DragEvent) => {};
  const handleDragOver = (event: React.DragEvent) => {};
  const handleDragEnter = (event: React.DragEvent) => {};
  const handleDragLeave = (event: React.DragEvent) => {};
  const handleDragStart = (event: React.DragEvent) => {};
  const handleDrop = (event: React.DragEvent) => {};

  return (
    <Card
      {...props}
      draggable={true}
      drag={handleDrag}
      dragEnd={handleDragEnd}
      dragOver={handleDragOver}
      dragEnter={handleDragEnter}
      dragLeave={handleDragLeave}
      dragStart={handleDragStart}
      drop={handleDrop}
    />
  );
};

export default DraggableCard;
