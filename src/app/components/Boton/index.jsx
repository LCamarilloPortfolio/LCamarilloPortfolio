import React from "react";

const Boton = ({ className, text, onClick = () => {} }) => {
  return (
    <button
      className={`${className} rounded-md bg-blue-700 text-white py-2 px-5`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Boton;
