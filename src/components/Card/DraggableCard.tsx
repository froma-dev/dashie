import Card, { type CardProps } from "./Card";
import "./DraggableCard.css";
import { useState } from "react";

interface DraggableCardProps extends CardProps {
  draggable: true;
}

const DraggableCard = (props: DraggableCardProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isDropTarget, setIsDropTarget] = useState(false);
  const { drop } = props;
  const { id } = props;

  const handleDrag = (event: React.DragEvent) => {};
  const handleDragEnd = (event: React.DragEvent) => {
    console.log("draggable card handleDragEnd");
    setIsDragging(false);
    setIsDropTarget(false);
  };
  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };
  const handleDragEnter = (event: React.DragEvent) => {
    console.log("draggable card handleDragEnter");
    setIsDropTarget(true);
  };
  const handleDragLeave = (event: React.DragEvent) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      console.log("draggable card handleDragLeave");
      setIsDropTarget(false);
    }
  };

  // Handle the item to be dragged
  const handleDragStart = (event: React.DragEvent) => {
    console.log("draggable card handleDragStart");
    event.dataTransfer.setData("text/plain", id.toString());
    event.dataTransfer.effectAllowed = "move";
    setIsDragging(true);
  };
  const handleDrop = (event: React.DragEvent) => {
    setIsDropTarget(false);
    if (drop) {
      drop(event);
    }
  };

  return (
    <Card
      {...props}
      draggable={true}
      isDragging={isDragging}
      isDropTarget={isDropTarget}
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
