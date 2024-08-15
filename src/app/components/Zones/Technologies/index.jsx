import { forwardRef, useEffect, useState } from "react";
import technologies from "../../../../../data/technologies.json";
import { motion } from "framer-motion";
import Tooltip from "../../Tooltip";

const Technologies = forwardRef(function RefTechnologies(
  { isOnScreen = false },
  ref
) {
  const [animacion, setAnimacion] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setAnimacion(isOnScreen);
  }, [isOnScreen]);

  useEffect(() => {
    console.log("animacion", animacion);
  }, [animacion]);

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
              <Tooltip
                key={t.alt}
                toolTipText={t.alt?.toUpperCase()}
                selected={selected === t.alt}
                onClick={() => setSelected(t.alt)}
              >
                <motion.li
                  whileHover={{
                    scale: 1.2,
                    transition: {
                      scale: { duration: 0.2, delay: 0, ease: "easeInOut" },
                    },
                  }}
                  initial={false}
                  animate={
                    animacion
                      ? {
                          name: "Inicial",
                          borderColor: [
                            "rgb(30,40,59)",
                            "rgb(33, 255, 107)",
                            "rgb(39, 155, 77)",
                          ],
                          boxShadow: "5px 5px 20px 7px rgba(30, 214, 100, 0.4)",
                          scale: [1, 1.2, 1],
                          transition: {
                            delay: index * 0.1,
                            ease: "easeInOut",
                            duration: 1,
                          },
                        }
                      : {
                          name: "Final",
                          borderColor: "rgb(39, 155, 77)",
                          scale: 1,
                          borderShadow: "5px 5px 20px 7px rgba(0, 0, 0, 0.2)",
                          transition: {
                            duration: 0.5,
                          },
                        }
                  }
                  transition={{
                    borderColor: {
                      type: "tween",
                      stiffness: 20,
                      duration: 0.5,
                      delay: !isOnScreen ? 0 : 0.2 * index,
                    },
                    boxShadow: {
                      duration: 0.5,
                      delay: !isOnScreen ? 0 : 0.2 * index,
                    },
                    scale: {
                      duration: 0.5,
                      delay: !isOnScreen ? 0 : 0.2 * index,
                    },
                  }}
                  whileTap={{
                    scale: 1,
                    backgroundColor: "rgb(24, 22, 22)",
                    transition: { ease: "easeInOut" },
                  }}
                  onAnimationComplete={(e) => {
                    if (
                      e.name === "Inicial" &&
                      isOnScreen &&
                      technologies.technologies.length - 1 === index
                    ) {
                      setAnimacion(false);
                    }
                  }}
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
              </Tooltip>
            );
          })}
        </ul>
      </div>
    </div>
  );
});

export default Technologies;
