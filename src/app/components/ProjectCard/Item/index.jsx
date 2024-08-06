import React from "react";
import { BiCodeAlt } from "react-icons/bi";

const Item = ({ title = "", value = [], lista = false }) => {
  return (
    value !== "" && (
      <li className="text-xl font-bold">
        {title}
        <div className="w-40 h-[5px] bg-blue-600"></div>
        <p className="font-normal pt-3 pb-5">
          <ul
            className={`pl-3 grid grid-cols-1 ${
              lista ? "md:grid-cols-3" : "gap-5"
            }`}
          >
            {value.map((item, index) => (
              <li
                key={title + index}
                className={`mb-1 w-full flex gap-2 items-center`}
              >
                {" "}
                <span className="font-bold text-blue-500 ">
                  {lista && <BiCodeAlt size={"23"} />}
                </span>{" "}
                {item}
              </li>
            ))}
          </ul>
        </p>
      </li>
    )
  );
};

export default Item;
