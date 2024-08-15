import React, { useState } from "react";
import "./styles.css";

const Tooltip = ({ children, toolTipText, selected, onClick }) => {
  return (
    <div
      className={`tooltip transition-all duration-200 ${
        selected ? "scale-120" : ""
      }`}
      onClick={() => onClick()}
    >
      {children}
      <span className="tooltiptext">{toolTipText}</span>
    </div>
  );
};

export default Tooltip;
