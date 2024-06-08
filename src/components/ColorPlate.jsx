"use client";
import { useState } from "react";

export default function ColorPlate() {
  const initialColors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
  ];

  const [colors, setColors] = useState(initialColors);

  const handleReplaceColor = (index, newColor) => {
    const newColors = [...colors];
    newColors[index] = newColor;
    setColors(newColors);
  };

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData("colorIndex", index);
  };

  const handleDrop = (event, dropIndex) => {
    const dragIndex = event.dataTransfer.getData("colorIndex");
    const newColors = [...colors];
    const [draggedColor] = newColors.splice(dragIndex, 1);
    newColors.splice(dropIndex, 0, draggedColor);
    setColors(newColors);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto">
      <p className="my-4 mt-24 text-2xl font-bold text-center">
        Change the Color and Reorder
      </p>
      <div className="color-palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-item max-w-[400px] gap-10"
            style={{ backgroundColor: color }}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={handleDragOver}
          >
            <input
              type="color"
              value={color}
              onChange={(e) => handleReplaceColor(index, e.target.value)}
              className="color-picker"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
