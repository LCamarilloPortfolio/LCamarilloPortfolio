import Image from "next/image";
import React from "react";
import Link from "next/link";
import Item from "./Item";
import Boton from "../Boton";
import Cerrar from "../Cerrar";
import { MdArrowCircleRight } from "react-icons/md";

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
      <div className="fixed w-screen h-screen bg-slate-900/80 z-[150] top-0 left-0">
        <div
          className="flex flex-col items-center justify-center h-full relative"
          id="baseLayer"
          onClick={(e) => {
            if (e.target.id === "baseLayer") hider();
          }}
        >
          <div className="flex flex-col md:flex-row items-start sm:gap-5 justify-center w-[95%] md:w-[90%] h-[95%]  bg-slate-200 rounded-2xl text-black relative gap-5 p-5">
            <div className="flex flex-col md:flex-row w-full overflow-y-scroll gap-5">
              <Cerrar
                onClick={(e) => {
                  e.preventDefault();
                  hider();
                }}
                className="absolute top-11 right-11 md:right-14 z-50 bg-red-700 p-1 rounded-full text-white shadow-md shadow-slate-800"
              />
              <div>
                <div className="flex flex-col gap-5 w-full md:h-full self-start mt-20">
                  <h3 className="text-2xl font-bold pl-2 ">{name}</h3>

                  <Image
                    src={src}
                    width={400}
                    height={400}
                    className="rounded-lg border-2 border-blue-600/50 w-full"
                  />
                </div>
              </div>
              <div className="self-start md:mt-20 h-[90%] xl:h-[320px] w-full">
                <ul className="grid grid-col-3">
                  <Item
                    title={"Technologies"}
                    value={technologies}
                    lista={true}
                  />
                  <Item title={"Description"} value={description} />
                </ul>
                <div className="absolute max-md:top-10 max-md:left-6 md:bottom-10 md:right-16 text-2xl text-gray-800 shadow-lg shadow-blue-900 rounded-md">
                  <Link
                    href={url ?? "#"}
                    alt={"url" + name}
                    target="_blank"
                    className="flex flex-col rounded-lg"
                  >
                    <Boton
                      text={
                        <div className="flex gap-2 items-center">
                          Go to App <MdArrowCircleRight size={"30"} />
                        </div>
                      }
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProjectCard;
