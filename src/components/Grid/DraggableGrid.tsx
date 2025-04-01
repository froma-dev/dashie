import { useState } from "react";
import Grid, { type GridProps } from "./Grid";
import "./DraggableGrid.css";
import DraggableCard, { type DraggableCardProps } from "../Card/DraggableCard";

interface DraggableGridProps extends Omit<GridProps, "children"> {
  data: DraggableCardProps[];
}

const DraggableGrid = ({ data, auto = false }: DraggableGridProps) => {
  const [dragging, setDragging] = useState(false);
  const [gridData, setGridData] = useState(data);

  const handleDragStart = (event: React.DragEvent) => {
    console.log("handleDragStart", event);

    setDragging(true);
  };

  const handleDragEnd = (event: React.DragEvent) => {
    console.log("--->>>>handleDragEnd", event);
    setDragging(false);
  };

  // Allows drop
  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDragEnter = (event: React.DragEvent) => {
    console.log("---> handleDragEnter", event.target);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    console.log("<--- handleDragLeave", event.target);
  };

  const handleDrop = (
    event: React.DragEvent,
    dropTarget: DraggableCardProps
  ) => {
    console.log("<---> handleDrop", event.target);
    console.log("<---> handleDrop", dropTarget);
    const draggedTargetId = event.dataTransfer.getData("text/plain");
    const dropTargetIndex = gridData.findIndex(
      (gridItem) => gridItem.id === dropTarget.id
    );

    console.log("draggedTargetId", draggedTargetId);
    console.log("dropTargetIndex", dropTargetIndex);

    if (draggedTargetId) {
      const draggedTargetData = gridData.find(
        (gridItem) => gridItem.id === draggedTargetId
      );

      const newGridData = gridData.filter((gridItem) => {
        console.log(
          "gridItem.id",
          gridItem.id,
          draggedTargetId,
          gridItem.id !== draggedTargetId
        );
        return gridItem.id !== draggedTargetId;
      });

      console.log("newGridData", newGridData);
      console.log("draggedTargetData", draggedTargetData);
      if (draggedTargetData) {
        newGridData.splice(dropTargetIndex, 0, draggedTargetData);
        setGridData(newGridData);
      }
    }
  };

  return (
    <Grid
      auto={auto}
      dragging={dragging}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      {gridData.map((card) => (
        <DraggableCard
          key={card.id}
          id={card.id}
          title={`${card.title} ${card.id}`}
          description={`${card.description}`}
          draggable
          dragStart={handleDragStart}
          dragEnd={handleDragEnd}
          drop={(event) => handleDrop(event, card)}
        />
      ))}
    </Grid>
  );
};

export default DraggableGrid;
