import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import Boton from "../Boton";

const Cerrar = (props) => {
  return (
    <Boton {...props}>
      <IoMdCloseCircle size="30" />
    </Boton>
  );
};

export default Cerrar;
