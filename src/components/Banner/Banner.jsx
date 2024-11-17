import image from "../../assets/images/portfolioImage.webp";
import resume from "../../assets/resume/resume.pdf";
import "./Banner.css";
import { VscSaveAs } from "react-icons/vsc";

const Banner = () => {
  return (
    <div
      id="home"
      className="banner-background text-white h-[900px] lg:h-[100vh] bg-fixed bg-cover bg-center flex items-center font-rethink-sans"
    >
      {/* Circles for background effect */}
      <div className="circle top-left"></div>
      <div className="circle top-right"></div>
      <div className="circle bottom"></div>

      <div className="flex lg:flex-row flex-col items-center max-w-screen-xl mx-auto w-full px-4 lg:px-8">
        {/* Text Section */}
        <div
          className="lg:w-1/2 w-full space-y-4 text-center lg:text-left"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1500"
        >
          <p className="text-[#a5a6ff] glow-text text-xl font-semibold">Hello!</p>
          <h1 className="text-3xl lg:text-5xl glow-text">I&apos;m Sadee Abdullah</h1>
          <p className="text-xl bg-gradient-to-r from-[#331959] to-[#a769cc] bg-cover w-fit mx-auto lg:mx-0 p-1 rounded-lg">
            Frontend Web Developer
          </p>
          <p className="text-md max-w-lg mx-auto lg:mx-0 text-white shadow-lg">
            I&apos;m a frontend developer fluent in React.js, HTML, CSS, and Tailwind CSS. I&apos;ve delved into the MERN stack, honing my skills in MongoDB and Express.js. My portfolio reflects a blend of captivating UIs and robust backend solutions, showcasing my passion for MERN development.
          </p>
          <div
            data-aos="zoom-out-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1500"
            className="flex justify-center lg:justify-start"
          >
            <a
              href={resume}
              download="sadee-abdullah-resume-Pdf"
              rel="noreferrer"
              target="_blank"
              className="p-3 border-slate-500 rounded-lg hover:bg-[#a5a6ff] border-2 bg-black shadow-black-500 hover:shadow-slate-400 shadow-2xl mt-8 flex items-center gap-2 w-fit text-lg"
            >
              <VscSaveAs />
              Download Resume 🙌
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end"
          data-aos="fade-down"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1500"
        >
          <img src={image} alt="Sadee Abdullah" className="w-[80%] lg:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;