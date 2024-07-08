import React from "react";
import Profile_pic from "../../Profile_pic";
import WhatsApp from "../../Icons/WhatsAppIcon";
import LinkedIn from "../../Icons/LinkedInIcon";
import Github from "../../Icons/GithubIcon";
import Link from "next/link";

const Principal = () => {
  return (
    <>
      <div className="absolute top-10 right-10 flex gap-7">
        <Link href="https://github.com/LCamarilloFlores" target="_blank">
          <Github
            width={50}
            height={50}
            className="cursor-pointer rounded-md"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/luis-alberto-camarillo-flores-a95b81271"
          target="_blank"
        >
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
      <div>
        <h3 className="text-center md:text-right font-normal text-[40px] tracking-wide">
          Hi, my name is <br />
          <span className="text-blue-400 font-bold">
            Luis Alberto Camarillo Flores
          </span>
        </h3>
        <div className="flex items-center gap-5 flex-col md:flex-row">
          <Profile_pic />
          <div className="text-[26px] text-center md:text-right font-light w-[500px]">
            Developer Junior who loves the tech industry. Persistent and
            adaptable..
          </div>
        </div>
      </div>
    </>
  );
};

export default Principal;
