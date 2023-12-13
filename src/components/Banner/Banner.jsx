import image from "../../assets/images/portfolioImage.png"
import "./Banner.css"
import { VscSaveAs } from "react-icons/vsc"


const Banner = () => {
    return (
        <div id="home" className="bg-banner-bg text-white  h-[900px] lg:h-[100vh] bg-fixed bg-cover flex justify-center items-center font-rethink-sans">
            
            <div className="flex lg:flex-row flex-col items-center justify-center   w-[85vw] mx-auto flex-grow ">
                {/* div for text */}
                <div className="lg:w-1/2 space-y-4 w-[90vw] mx-auto">
                    <p className="text-[#a5a6ff] text-shadow text-xl font-semibold">Hello !!!</p>
                    <h1 className=" text- lg:text-7xl">I&apos;m Sadee Abdullah</h1>
                    <p className="text-xl bg-[#a769cc] bg-cover w-fit p-1  rounded-lg">Frontend Web Developer</p>
                    <p className="text-sm ">
I&apos;m a frontend developer fluent in React.js, HTML, CSS, and Tailwind CSS. I&apos;ve delved into the MERN stack, honing my skills in MongoDB and Express.js. My portfolio reflects a blend of captivating UIs and robust backend solutions, showcasing my passion for MERN development.</p>
                    <div>
                        
                        <button className="p-3 border-slate-500 rounded-lg hover:bg-[#a5a6ff] border-2 bg-black shadow-black-500 hover:shadow-slate-400 shadow-2xl mt-8 flex justify-center items-center gap-2 text-lg"><VscSaveAs />Download Resume 🙌</button>
                    </div>
                    
                </div>
                {/* div for image */}
                <div className="lg:w-2/5">
                    <img src={image} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Banner;