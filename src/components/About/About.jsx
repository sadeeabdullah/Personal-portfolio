import photo from "../../assets/images/biograpy (2).png";
import design from "../../assets/images/biograpy (1).png";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import react from "../../assets/images/reactjs.png"
import tailwind from "../../assets/images/tailwindcss.png"
import js from "../../assets/images/js.png"
import html from "../../assets/images/html-5.png"
import css from "../../assets/images/css-3.png"
import daisy from "../../assets/images/daisyui.png"
import Bootstrap from "../../assets/images/bootstrap.png"
const About = () => {
  return (
   
      <div id="about" className="w-[85vw] mx-auto mt-20 flex lg:flex-row flex-col justify-center items-center gap-12">
        {/* div for picture */}
        <div className="lg:w-1/3 flex ">
          <img
            className="rounded-xl w-4/5  shadow-[#38b6ff] shadow-xl"
            src={photo}
            alt=""
          />
          <img className="h-[20vh]  lg:w-1/5 -mt-10 -ml-14 lg:-mt-12 lg:-ml-12 " src={design} alt="" />
        </div>
        {/* div for text */}
        <div className="text-white w-2/3">
          <SectionTitle
            className=" text-start"
            header={"MY BIOGRAPHY"}
          ></SectionTitle>
          <p>
            As a front-end enthusiast skilled in React.js, HTML, CSS, and
            Tailwind CSS, I&apos;ve dived into the MERN stack, refining my expertise
            in MongoDB and Express.js. My portfolio mirrors a fusion of engaging
            user interfaces and resilient backend solutions, illustrating my
            dedication to MERN development. Consistency defines my work—I
            deliver high-quality projects consistently, fueled by an unwavering
            passion for coding.
          </p>
          {/* div for skill */}
          <div>
            <h2 className="text-white text-3xl font-mono uppercase my-6 font-bold ">Skill & Interest</h2>
            <div className="flex flex-wrap gap-4">
                
                <p className="flex items-center gap-2 shadow-[#38b6ff] shadow-md border-2 w-fit px-3 py-1 rounded-full text-lg border-[#38b6ff]"><img className="h-10 rounded-full" src={react} alt="" />React Js</p>
                <p className="flex items-center gap-2 shadow-[#38b6ff] shadow-md border-2 w-fit px-3 py-1 rounded-full text-lg border-[#38b6ff]"><img className="h-10 rounded-full" src={js} alt="" />Js</p>
                <p className="flex items-center gap-2 shadow-[#38b6ff] shadow-md border-2 w-fit px-3 py-1 rounded-full text-lg border-[#38b6ff]"><img className="h-10 rounded-full" src={html} alt="" />HTML</p>
                <p className="flex items-center gap-2 shadow-[#38b6ff] shadow-md border-2 w-fit px-3 py-1 rounded-full text-lg border-[#38b6ff]"><img className="h-10 rounded-full" src={css} alt="" />Css</p>
                <p className="flex items-center gap-2 shadow-[#38b6ff] shadow-md border-2 w-fit px-3 py-1 rounded-full text-lg border-[#38b6ff]"><img className="h-10 rounded-full" src={tailwind} alt="" />Tailwind Css</p>
                <p className="flex items-center gap-2 shadow-[#38b6ff] shadow-md border-2 w-fit px-3 py-1 rounded-full text-lg border-[#38b6ff]"><img className="h-10 rounded-full" src={Bootstrap} alt="" />Bootstrap</p>
                <p className="flex items-center gap-2 shadow-[#38b6ff] shadow-md border-2 w-fit px-3 py-1 rounded-full text-lg border-[#38b6ff]"><img className="h-10 rounded-full" src={daisy} alt="" />DaisyUi</p>
                <p className="flex items-center gap-2 shadow-[#38b6ff] shadow-md border-2 w-fit px-3 py-1 rounded-full text-lg border-[#38b6ff]"><img className="h-10 rounded-full" src={Bootstrap} alt="" />Bootstrap</p>
                <p className="flex items-center gap-2 shadow-[#38b6ff] shadow-md border-2 w-fit px-3 py-1 rounded-full text-lg border-[#38b6ff]"><img className="h-10 rounded-full" src="https://skillicons.dev/icons?i=mongodb" alt="" />Mongodb</p>
                <p className="flex items-center gap-2 shadow-[#38b6ff] shadow-md border-2 w-fit px-3 py-1 rounded-full text-lg border-[#38b6ff]"><img className="h-10 rounded-full" src="https://skillicons.dev/icons?i=express" alt="" />Express Js</p>
                <p className="flex items-center gap-2 shadow-[#38b6ff] shadow-md border-2 w-fit px-3 py-1 rounded-full text-lg border-[#38b6ff]"><img className="h-10 rounded-full" src="https://skillicons.dev/icons?i=github" alt="" />Github</p>
                <p className="flex items-center gap-2 shadow-[#38b6ff] shadow-md border-2 w-fit px-3 py-1 rounded-full text-lg border-[#38b6ff]"><img className="h-10 rounded-full" src="https://skillicons.dev/icons?i=firebase" alt="" />Firebase</p>
                
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
