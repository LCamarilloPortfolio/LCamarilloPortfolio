import Image from "next/image";
import profile_pic from "../../../../public/images/profile.png";
import { motion } from "framer-motion";
import "./styles.css";

const Profile_pic = () => {
  return (
    <motion.div
      className="relative md:self-start self-center top-11 opacity-0"
      layout
      animate={{ top: "0px", opacity: 1 }}
      transition={{
        duration: 1,
        ease: "backOut",
      }}
      whileTap={{ scale: 1.1 }}
    >
      <Image
        className="z-[0]"
        src={profile_pic}
        height={250}
        width={250}
        alt="Profile Picture"
      />
      <div className="radial-gradient absolute top-0 left-0 w-[105%] h-[105%] z-[10]"></div>
    </motion.div>
  );
};

export default Profile_pic;
