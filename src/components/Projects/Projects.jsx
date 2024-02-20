import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import ProjectCard from "./ProjectCard";
import bistro from "../../assets/images/forbistro.webp"
import zen from "../../assets/images/forzen.webp"
import tech from "../../assets/images/fortech.webp"


const Projects = () => {
    return (
        <div className="max-w-screen-xl mx-auto flex justify-center flex-col">
            <div className="flex justify-center mt-20 mb-8" data-aos="fade-down"  data-aos-duration="3000" id="projects" >
            <SectionTitle  header={"MY PROJECTS"}></SectionTitle>
            </div>
            {/* div for the projects card */}
            <div className="   flex flex-1 md:gap-12 lg:gap-24  w-full justify-center flex-col lg:flex-row "> 

            <div data-aos="fade-right"  data-aos-duration="1500">
            <ProjectCard  className="" image={tech} projectName={"Bistro Boss Resturant"} code={"https://github.com/sadeeabdullah/tech-spot"} live={"https://tech-spot-49674.firebaseapp.com/"}></ProjectCard>
            </div>
            <div data-aos="fade-up"  data-aos-duration="1500">
            <ProjectCard image={zen} projectName={"Zenhotel Online Booking"} code={"https://github.com/sadeeabdullah/zental-hotel"} live={"https://zenhotel-3e57c.firebaseapp.com/"}></ProjectCard>
            </div>
                <div data-aos="fade-left"  data-aos-duration="1500">
                <ProjectCard image={bistro} projectName={"Bistro Boss Resturant"} code={"https://github.com/sadeeabdullah/bistro-boss-client"} live={"https://bistro-boss-a82f9.firebaseapp.com/"}></ProjectCard>
                </div>
                
               
            </div>
        </div>
    );
};

export default Projects;