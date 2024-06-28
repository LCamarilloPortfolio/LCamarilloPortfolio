import Image from "next/image";
import profile_pic from "../../../../public/images/profile.png";
import "./styles.css";

const Profile_pic = () => {
  return (
    <div className="relative respirar self-start">
      <Image
        className="z-[0]"
        src={profile_pic}
        height={250}
        width={250}
        alt="Profile Picture"
      />
      <div className="radial-gradient absolute top-0 left-0 w-[105%] h-[105%] z-[10]"></div>
    </div>
  );
};

export default Profile_pic;
