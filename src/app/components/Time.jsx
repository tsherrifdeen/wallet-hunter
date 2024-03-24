import React, { useState } from "react";

export default function Time({ time }) {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`p-2 my-2 mr-2 rounded-md bg-slate-600 bg-opacity-15 border-opacity-20 backdrop-blur-lg ${
        isSelected ? "bg-slate-400 bg-opacity-50" : ""
      }`}
      onClick={toggleSelection}
    >
      {time}
    </div>
  );
}
