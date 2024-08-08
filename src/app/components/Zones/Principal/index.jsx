import Profile_pic from "../../Profile_pic";
import WhatsApp from "../../Icons/WhatsAppIcon";
import LinkedIn from "../../Icons/LinkedInIcon";
import Github from "../../Icons/GithubIcon";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import Link from "next/link";

const Principal = forwardRef(function RefPrincipal(
  { isOnScreen = false },
  ref
) {
  return (
    <div ref={ref} className="h-screen flex items-center justify-center">
      <div className="absolute top-[100px] right-10 flex gap-7">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="opacity-0 relative top-[-100px]"
          animate={{
            top: isOnScreen ? 0 : "-100px",
            opacity: isOnScreen ? 1 : 0,
          }}
          transition={{ duration: 1, ease: "backOut" }}
        >
          <Link
            href="https://github.com/LCamarilloFlores"
            target="_blank"
            className="hover:scale-110 transition-all duration-500 ease-in-out"
          >
            <Github
              width={50}
              height={50}
              className="cursor-pointer rounded-md"
            />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="opacity-0 relative top-[-100px]"
          animate={{
            top: isOnScreen ? 0 : "-100px",
            opacity: isOnScreen ? 1 : 0,
          }}
          transition={{ duration: 1, ease: "backOut", delay: 0.2 }}
        >
          <Link
            href="https://www.linkedin.com/in/luis-alberto-camarillo-flores-a95b81271"
            target="_blank"
            className="hover:scale-110 transition-all duration-500 ease-in-out"
          >
            <LinkedIn
              width={50}
              height={50}
              className="cursor-pointer bg-white rounded-md"
            />
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="opacity-0 relative top-[-100px]"
          animate={{
            top: isOnScreen ? 0 : "-100px",
            opacity: isOnScreen ? 1 : 0,
          }}
          transition={{ duration: 1, ease: "backOut", delay: 0.4 }}
        >
          <Link
            href={"https://wa.me/525563714643"}
            target="_blank"
            className="hover:scale-110 transition-all duration-500 ease-in-out"
          >
            <WhatsApp width={50} height={50} />
          </Link>
        </motion.div>
      </div>
      <div className="space-y-5">
        <motion.h3
          className="relative text-center md:text-right font-normal leading-7 md:leading-[50px] text-xl md:text-[40px] tracking-wide opacity-0"
          animate={{
            right: isOnScreen ? 0 : "100px",
            opacity: isOnScreen ? 1 : 0,
          }}
          exit={{ right: "300px", opacity: 0 }}
          transition={{ duration: 1, ease: "backOut", delay: 0.4 }}
        >
          Hi, my name is <br />
          <span className="text-blue-400 font-bold">
            Luis Alberto Camarillo Flores
          </span>
        </motion.h3>
        <div className="flex items-center gap-5 flex-col md:flex-row">
          <Profile_pic isOnScreen={isOnScreen} />
          <motion.div
            className="relative texl-xl md:text-[26px] text-center md:text-right font-light w-[95%] top-24 opacity-0"
            animate={{
              top: isOnScreen ? 0 : "-100px",
              opacity: isOnScreen ? 1 : 0,
            }}
            transition={{ duration: 1, ease: "backOut" }}
          >
            Developer Junior who loves the tech industry. Persistent and
            adaptable.
          </motion.div>
        </div>
      </div>
    </div>
  );
});

export default Principal;
