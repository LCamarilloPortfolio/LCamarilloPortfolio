import React, { useState } from "react";
import "./styles.css";

const Tooltip = ({ children, toolTipText }) => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className={`tooltip ${selected ? "scale-105" : ""}`}
      onClick={() => setSelected((prev) => !prev)}
    >
      {children}
      <span className="tooltiptext">{toolTipText}</span>
    </div>
  );
};

export default Tooltip;
