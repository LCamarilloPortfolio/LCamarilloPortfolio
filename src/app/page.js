"use client";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import Principal from "./components/Zones/Principal";
import Technologies from "./components/Zones/Technologies";
import Projects from "./components/Zones/Projects";

export default function Home() {
  return (
    <Fullpage className="font-sm md:font-xl">
      {/* <FullpageNavigation
        itemStyle={{
          backgroundColor: "white",
          height: "20px",
          width: "20px",
          margin: "10px",
          scroll: "hidden",
          zIndex: "150",
        }}
      /> */}
      <FullPageSections>
        <FullpageSection className="flex justify-center p-5 items-center flex-col w-screen h-screen gap-5 container mx-auto">
          <Principal />
        </FullpageSection>
        <FullpageSection
          style={{ backgroundColor: "rgb(10,10,20)", width: "100vw" }}
        >
          <Technologies />
        </FullpageSection>
        <FullpageSection className="flex justify-center p-5 items-center flex-col w-screen h-screen gap-10 container mx-auto">
          <Projects />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
}
