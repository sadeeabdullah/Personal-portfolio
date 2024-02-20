import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";
import { FaFacebookMessenger } from "react-icons/fa6";




const Freequote = () => {
  return (
    <div className="flex flex-col mt-20 justify-center items-center">
      
      <div data-aos="zoom-in-down" data-aos-duration="1500" >
      <SectionTitle header={"--FREE QUOTE--"}></SectionTitle>
      </div>
      <div data-aos="zoom-in-up" data-aos-duration="1500" className="flex gap-4 text-3xl text-[#a5a6ff] ">
      <a className=" hover:text-[#3199d1] hover:text-[26px]  ease-in-out duration-500 " href="mailto:hello@sadeeabdullah.com"><SiGmail /></a>
      <a className="hover:text-[#3199d1] hover:text-[26px] ease-in-out duration-500" href="https://wa.me/+8801682451146"><IoLogoWhatsapp /></a>
      <a className="hover:text-[#3199d1] hover:text-[26px] ease-in-out duration-500" href="https://t.me/sadee_abdullah"><BiLogoTelegram /></a>
      <a className="hover:text-[#3199d1] hover:text-[26px] ease-in-out duration-500" href="https://m.me/SadeeAbdullahNow"><FaFacebookMessenger /></a>
      </div>
    </div>
  );
};

export default Freequote;
