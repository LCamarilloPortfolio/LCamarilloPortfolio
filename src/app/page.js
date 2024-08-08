"use client";
import { useRef } from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  // FullpageNavigation,
} from "@ap.cx/react-fullpage";
import Principal from "./components/Zones/Principal";
import Technologies from "./components/Zones/Technologies";
import Projects from "./components/Zones/Projects";
import { useOnScreen } from "@/app/hooks/useOnScreen";

export default function Home() {
  const ref1 = useRef(null);
  const isOnScreen1 = useOnScreen(ref1);
  const ref2 = useRef(null);
  const isOnScreen2 = useOnScreen(ref2);
  const ref3 = useRef(null);
  const isOnScreen3 = useOnScreen(ref3);
  return (
    <Fullpage>
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
        <FullpageSection className="flex justify-center p-5 items-center flex-col max-w-screen max-h-screen gap-5 container mx-auto">
          <Principal ref={ref1} isOnScreen={isOnScreen1} />
        </FullpageSection>
        <FullpageSection className="bg-[rgb(10,10,20)] w-screen h-full">
          <Technologies ref={ref2} isOnScreen={isOnScreen2} />
        </FullpageSection>
        <FullpageSection className="flex justify-center p-5 items-center flex-col max-w-screen max-h-screen gap-10 container mx-auto overflow-y-auto">
          <Projects />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
}
