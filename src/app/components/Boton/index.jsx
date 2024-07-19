import React from "react";

const Boton = ({ className = "", text, onClick = () => {}, children }) => {
  return (
    <button
      className={`${
        className === ""
          ? "rounded-md bg-blue-700 text-white py-2 px-5"
          : className
      }`}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Boton;
