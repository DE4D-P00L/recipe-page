import React from "react";

function VegLogo({ isVeg }) {
  const color = isVeg ? "bg-green-600" : "bg-red-800";
  const borderColor = isVeg ? "border-green-600" : "border-red-800";
  return (
    <div
      className={`absolute top-6 right-6 box-border border-[3px] ${borderColor} w-6 h-6 grid place-content-center`}>
      <div className={`w-[12px] h-[12px] ${color} rounded-full`}></div>
    </div>
  );
}

export default VegLogo;
