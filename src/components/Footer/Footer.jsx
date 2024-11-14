import { TfiFacebook } from "react-icons/tfi";
import { BsGithub } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black mt-24 h-full py-6 lg:py-0 lg:h-12 opacity-50 backdrop-blur-sm flex text-white items-center justify-between lg:flex-row flex-col">
      {/* div for icon */}
      <div className="text-white flex lg:pl-6  text-2xl gap-4 h-full items-center">
        <a href="https://www.facebook.com/profile.php?id=100061974881370">
          <TfiFacebook />
        </a>
        <a href="https://github.com/sadeeabdullah">
          <BsGithub />{" "}
        </a>
        <a href="https://bd.linkedin.com/in/sadeeabdullah">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/theabdullahspeaks/">
          <RiInstagramFill />
        </a>
      </div>
      {/* div for the text */}
      <div className="text-center py-4 lg:pr-6 lg:py-0">
        <p>©sadeeabdullah.com All rights reserved 2023</p>
      </div>
    </div>
  );
};

export default Footer;
