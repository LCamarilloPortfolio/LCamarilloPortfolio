import React, { useState } from "react";
import ProjectCard from "../../ProjectCard";
import projects from "../../../../../data/projects.json";

const Projects = () => {
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
      <h3 className="font-normal text-[40px] tracking-wide">Projects</h3>
      <ul className="flex items-center gap-[100px] w-full flex-wrap justify-center">
        {projects.projects.slice(0, 8).map((t, index) => {
          console.log("t", t);
          return (
            <li key={t.alt}>
              <div
                onClick={() => showProjectCard(t)}
                className="flex flex-col transition-all duration-500 hover:scale-105 rounded-lg"
              >
                <img
                  src={t.src}
                  alt={t.alt}
                  className={`w-[240px] h-[240px] mx-auto shadow-md rounded-xl shadow-slate-200 border border-slate-100`}
                />
                <h3 className="font-bold text-[20px] py-3 mt-3 text-center">
                  {t.name ?? "Project " + (index + 1)}
                </h3>
              </div>
            </li>
          );
        })}
      </ul>

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
};

export default Projects;
