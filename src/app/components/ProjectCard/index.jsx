import Image from "next/image";
import React from "react";
import Link from "next/link";
import Item from "./Item";

const ProjectCard = ({
  technologies = "",
  name = "",
  src = "",
  url = "",
  description = [],
  visible = false,
  hider = () => {},
}) => {
  return (
    visible && (
      <div className="fixed w-screen h-screen bg-slate-900/80 z-[150]">
        <div
          className="flex flex-col items-center justify-center h-full relative"
          id="baseLayer"
          onClick={(e) => {
            if (e.target.id === "baseLayer") hider();
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-[90%] h-[90%] xl:h-[500px] bg-slate-200 rounded-2xl text-black relative gap-5 p-5 overflow-y-scroll">
            <button
              onClick={(e) => {
                e.preventDefault();
                hider();
              }}
              className="absolute top-5 right-10"
            >
              ❌
            </button>
            <div className="flex flex-col gap-5 w-full md:w-[500px] md:h-[400px] self-start mt-8">
              <h3 className="text-2xl font-bold pl-2">{name}</h3>

              <Image
                src={src}
                width={400}
                height={400}
                className="rounded-lg border-2 border-blue-600/50 w-full md:w-[400px]"
              />
            </div>
            <div className="self-start md:mt-20 h-[90%] xl:h-[320px] w-full overflow-scroll">
              <ul>
                <Item title={"Technologies"} value={technologies} cols={3} />
                <Item title={"Description"} value={description} />
              </ul>
              <div className="absolute bottom-10 right-16 text-2xl text-blue-800">
                <Link
                  href={url ?? "#"}
                  alt={"url" + name}
                  target="_blank"
                  className="flex flex-col rounded-lg"
                >
                  Go to App ➡️
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProjectCard;
