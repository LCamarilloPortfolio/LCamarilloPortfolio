import React from "react";
import "./styles.css";

const Tooltip = ({ children, toolTipText }) => {
  return (
    <div className="tooltip">
      {children}
      <span className="tooltiptext">{toolTipText}</span>
    </div>
  );
};

export default Tooltip;
