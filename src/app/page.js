"use client";
import Profile_pic from "./components/Profile_pic";
import { technologies } from "../../data/technologies.json";
import { projects } from "../../data/projects.json";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import Link from "next/link";
import WhatsAppIcon from "./components/Icons/WhatsAppIcon";
import WhatsApp from "./components/Icons/WhatsAppIcon";
import LinkedIn from "./components/Icons/LinkedInIcon";

export default function Home() {
  return (
    <Fullpage>
      <FullpageNavigation
        itemStyle={{
          backgroundColor: "white",
          height: "20px",
          width: "20px",
          margin: "10px",
          scroll: "hidden",
        }}
      />
      <FullPageSections>
        <FullpageSection className="flex justify-center items-center flex-col w-screen h-screen gap-5 container mx-auto">
          <div className="absolute top-10 right-10 flex gap-5">
            <Link href="https://www.linkedin.com/in/luis-alberto-camarillo-flores-a95b81271">
              <LinkedIn
                width={50}
                height={50}
                className="cursor-pointer bg-white rounded-md"
              />
            </Link>
            <Link href={"https://wa.me/525563714643"} target="_blank">
              <WhatsApp width={50} height={50} />
            </Link>
          </div>

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
          style={{ backgroundColor: "rgb(10,10,20)", width: "100vw" }}
        >
          <div className="flex justify-center items-center flex-col w-screen h-screen gap-10 container mx-auto">
            <h3 className="font-normal text-[40px] tracking-wide">
              Domained Technologies:
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
          </div>
        </FullpageSection>
        <FullpageSection className="flex justify-center items-center flex-col w-screen h-screen gap-10 container mx-auto">
          <h3 className="font-normal text-[40px] tracking-wide">Projects</h3>
          <ul className="flex items-center gap-[100px] w-full flex-wrap justify-center">
            {projects.slice(0, 8).map((t, index) => {
              console.log("t", t);
              return (
                <li key={t.alt}>
                  <Link
                    href={t.url ?? "#"}
                    alt={"url" + t.name}
                    target="_blank"
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
                  </Link>
                </li>
              );
            })}
          </ul>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
}
