import Card, { type CardProps } from "./Card";
import { useState } from "react";

interface DraggableCardProps extends CardProps {
  draggable: true;
}

const DraggableCard = (props: DraggableCardProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const { dragEnd, drop } = props;
  const { id } = props;

  const handleDrag = (event: React.DragEvent) => {};
  const handleDragEnd = (event: React.DragEvent) => {
    console.log("draggable card handleDragEnd");
    setIsDragging(false);
  };
  const handleDragOver = (event: React.DragEvent) => {};
  const handleDragEnter = (event: React.DragEvent) => {
    console.log("draggable card handleDragEnter");
    setIsDragging(true);
  };
  const handleDragLeave = (event: React.DragEvent) => {
    console.log("draggable card handleDragLeave");
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      setIsDragging(false);
    }
  };
  const handleDragStart = (event: React.DragEvent) => {
    console.log("draggable card handleDragStart");
    event.dataTransfer.setData("text/plain", id.toString());
    setIsDragging(true);
  };
  const handleDrop = (event: React.DragEvent) => {
    setIsDragging(false);
    if (drop) {
      drop(event);
    }
  };

  return (
    <Card
      {...props}
      draggable={true}
      isDragging={isDragging}
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
export type { DraggableCardProps };
