import React, { useState } from "react";

export default function Wallets({ imageSrc }) {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`item p-2 mr-2 mt-1 rounded-md bg-slate-600 bg-opacity-15 border-opacity-20 backdrop-blur-lg ${
        isSelected ? "bg-slate-400 bg-opacity-50" : ""
      }`}
      onClick={toggleSelection}
    >
      <img className="w-8 h-8 rounded-full" src={imageSrc} alt="" />
    </div>
  );
}
