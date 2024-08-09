import { forwardRef, useEffect } from "react";
import technologies from "../../../../../data/technologies.json";
import { motion } from "framer-motion";

const Technologies = forwardRef(function RefTechnologies(
  { isOnScreen = false },
  ref
) {
  useEffect(() => {
    console.log("isOnScreen", isOnScreen, ref);
  }, [isOnScreen, ref]);
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        ref={ref}
        className="relative flex justify-center items-center flex-col gap-10 container h-[90vh]"
      >
        <h3 className="font-normal text-xl md:text-[40px] tracking-wide">
          Domained Technologies:
        </h3>
        <ul className="flex items-center gap-7 w-full md:w-[700px] flex-wrap justify-center">
          {technologies.technologies.map((t, index) => {
            return (
              <motion.li
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "rgb(30, 29, 29)",
                  transition: {
                    scale: { duration: 0.2, delay: 0, ease: "easeInOut" },
                  },
                }}
                animate={{
                  borderColor: !isOnScreen
                    ? "rgb(30,40,59)"
                    : "rgb(42, 201, 95)",
                  boxShadow: !isOnScreen
                    ? "5px 5px 20px 10px rgba(0, 0, 0, 0.2)"
                    : "5px 5px 20px 10px rgba(30, 214, 100, 0.2)",
                  scale: !isOnScreen ? 1.2 : 1,
                }}
                transition={{
                  borderColor: {
                    type: "spring",
                    stiffness: 20,
                    duration: 0.5,
                    delay: !isOnScreen ? 0 : 0.2 * index,
                  },
                  boxShadow: {
                    duration: 0.5,
                    delay: !isOnScreen ? 0 : 0.2 * index,
                  },
                  scale: {
                    type: "spring",
                    stiffness: 30,
                    duration: 0.5,
                    damping: 7,
                  },
                }}
                whileTap={{ scale: 1, backgroundColor: "rgb(50,50,50)" }}
                key={t.alt}
                className={`w-[80px] h-[80px] border-2 shadow-lg shadow-[rgb(42,201,95)] flex items-center justify-center rounded-full select-none`}
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
    </div>
  );
});

export default Technologies;
