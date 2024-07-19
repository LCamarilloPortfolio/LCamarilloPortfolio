import React from "react";

const Item = ({ title = "", value = [] }) => {
  return (
    value !== "" && (
      <li className="text-xl font-bold">
        {title}
        <div className="w-40 h-[5px] bg-blue-600"></div>
        <p className="font-normal pt-3 pb-5">
          <ul className={`pl-3 grid grid-cols-3`}>
            {value.map((item, index) => (
              <li key={title + index} className={`mb-1 w-full`}>
                {" "}
                <span className="font-bold text-blue-500 ">✦</span> {item}
              </li>
            ))}
          </ul>
        </p>
      </li>
    )
  );
};

export default Item;
