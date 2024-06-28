"use client";
import Profile_pic from "./components/Profile_pic";
import { technologies } from "../../data/technologies.json";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

export default function Home() {
  return (
    <Fullpage>
      <FullpageNavigation
        itemStyle={{
          backgroundColor: "white",
          height: "20px",
          width: "20px",
          margin: "10px",
        }}
      />
      <FullPageSections>
        <FullpageSection className="flex justify-center items-center flex-col w-screen h-screen gap-5 container mx-auto">
          <h3 className=" font-normal text-[40px] tracking-wide">
            Hi, my name is{" "}
            <span className="text-blue-400 font-bold">
              Luis Alberto Camarillo Flores
            </span>
          </h3>
          <div className="flex items-center gap-5">
            <Profile_pic />
            <div className="text-[26px] text-right font-light w-[500px]">
              Developer Junior passionate for the tech industry. Persistent and
              adaptable.
            </div>
          </div>
        </FullpageSection>
        <FullpageSection
          style={{ backgroundColor: "gray" }}
          className="flex justify-center items-center flex-col w-screen h-screen gap-10 container mx-auto"
        >
          <h3 className="font-normal text-[40px] tracking-wide">
            Technologies Domain:
          </h3>
          <ul className="flex items-center gap-5 w-full md:w-[700px] flex-wrap justify-center">
            {technologies.map((t) => {
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
        </FullpageSection>
        <FullpageSection className="flex justify-center items-center flex-col w-screen h-screen gap-10 container mx-auto">
          <h3 className="font-normal text-[40px] tracking-wide">Projects</h3>
          <ul className="flex items-center gap-5 w-full md:w-[700px] flex-wrap justify-center">
            {technologies.map((t) => {
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
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
}
