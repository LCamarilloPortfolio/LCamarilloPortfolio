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
    <div className="p-0">
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
      <div className="flex justify-center p-3 md:p-5 items-center flex-col max-w-screen max-h-screen gap-5 container mx-auto">
        <Principal ref={ref1} isOnScreen={isOnScreen1} />
      </div>
      <div className="bg-[rgb(10,10,20)] w-[95%] min-h-screen  p-3 md:p-5">
        <Technologies ref={ref2} isOnScreen={isOnScreen2} />
      </div>
      <div className="relative flex justify-center p-3 md:p-5items-center flex-col w-full gap-10 container mx-auto">
        <Projects ref={ref3} isOnScreen={isOnScreen3} />
      </div>
    </div>
  );
}
