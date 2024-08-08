import React from "react";
import technologies from "../../../../../data/technologies.json";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <div className="flex justify-center items-center flex-col w-screen h-screen gap-10 container mx-auto">
      <h3 className="font-normal text-[40px] tracking-wide">
        Domained Technologies:
      </h3>
      <ul className="flex items-center gap-5 w-full md:w-[700px] flex-wrap justify-center">
        {technologies.technologies.map((t) => {
          return (
            <motion.li
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgb(30, 29, 29)",
                shadow: "2px 20px rgb(255,255,255)",
              }}
              whileTap={{ scale: 1, backgroundColor: "rgb(50,50,50)" }}
              key={t.alt}
              className={`w-[80px] h-[80px] bg-slate-800 border border-white/10 shadow-md shadow-gray-600 flex items-center justify-center rounded-full`}
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
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default Technologies;
