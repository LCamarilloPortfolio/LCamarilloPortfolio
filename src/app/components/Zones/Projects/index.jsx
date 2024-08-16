import React, { useState, forwardRef } from "react";
import ProjectCard from "../../ProjectCard";
import projects from "../../../../../data/projects.json";
import { motion } from "framer-motion";

const Projects = forwardRef(function RefProjects({ isOnScreen = false }, ref) {
  const [project, setProject] = useState({
    name: "",
    src: "",
    url: "",
    visible: false,
  });
  const showProjectCard = (project) => {
    setProject({ ...project, visible: true });
  };

  const hider = () => {
    setProject({ ...project, visible: false });
  };
  return (
    <>
      <div
        ref={ref}
        className="relative flex items-center justify-center gap-10 flex-col"
      >
        <h3 className="font-normal text-[40px] tracking-wide">Projects</h3>
        <ul className="flex items-center gap-5 w-full flex-wrap justify-center">
          {projects.projects.slice(0, 8).map((t, index) => {
            return (
              <li key={t.alt}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="opacity-0 relative rounded-lg w-[240px] h-[300px]flex flex-col"
                  animate={{
                    top: isOnScreen ? 0 : "-100px",
                    opacity: isOnScreen ? 1 : 0,
                    transition: {
                      duration: 0.3,
                      delay: 0.2 + 0.2 * index,
                    },
                  }}
                  transition={{
                    duration: 1,
                    ease: "backOut",
                    delay: 0,
                  }}
                  onClick={() => showProjectCard(t)}
                >
                  {/*                 
                className=" transition-all duration-500 hover:scale-105 "
              > */}
                  <div
                    className={`w-[240px] h-[240px] mx-auto shadow-md rounded-xl shadow-slate-200 border border-slate-100`}
                  >
                    <img
                      src={t.src}
                      alt={t.alt}
                      className={`w-full h-full mx-auto shadow-md rounded-xl shadow-slate-200 border border-slate-100`}
                    />
                  </div>
                  <h3 className="font-bold text-[20px] py-3 mt-3 text-center">
                    {t.name ?? "Project " + (index + 1)}
                  </h3>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </div>
      <ProjectCard
        name={project.name}
        src={project.src}
        url={project.url}
        description={project.description}
        technologies={project.technologies}
        visible={project.visible}
        hider={hider}
      />
    </>
  );
});

export default Projects;
