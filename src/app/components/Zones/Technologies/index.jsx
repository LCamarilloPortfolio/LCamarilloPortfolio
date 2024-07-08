import React from "react";
import technologies from "../../../../../data/technologies.json";

const Technologies = () => {
  return (
    <div className="flex justify-center items-center flex-col w-screen h-screen gap-10 container mx-auto">
      <h3 className="font-normal text-[40px] tracking-wide">
        Domained Technologies:
      </h3>
      <ul className="flex items-center gap-5 w-full md:w-[700px] flex-wrap justify-center">
        {technologies.technologies.map((t) => {
          console.log("t", t);
          return (
            <li
              key={t.alt}
              className={`w-[80px] h-[80px] border border-white/10 shadow-md shadow-gray-600 flex items-center justify-center rounded-full`}
            >
              <img
                src={t.src}
                alt={t.alt}
                className={`w-[45px] h-[45px] ${
                  t.alt === "express" || t.alt === "github"
                    ? "invert"
                    : "invert-1"
                }`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Technologies;
