import React from "react";

const Item = ({ title = "", value = [], cols = 1 }) => {
  return (
    value !== "" && (
      <li className="text-xl font-bold">
        {title}
        <div className="w-40 h-[5px] bg-blue-600"></div>
        <p className="font-normal pt-3 pb-5">
          <ul className={`pl-3 flex ${cols !== 1 ? "flex-wrap" : "flex-col"}`}>
            {value.map((item, index) => (
              <li
                key={title + index}
                className={`mb-1 w-[${
                  Math.round(100 / cols) - (Math.round(100 / cols) % 10)
                }%]`}
              >
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
