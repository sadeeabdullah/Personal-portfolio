import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import ProjectCard from "./ProjectCard";
import bistro from "../../assets/images/forbistro.png"
import zen from "../../assets/images/forzen.png"
import tech from "../../assets/images/fortech.png"


const Projects = () => {
    return (
        <div id="projects" className="w-[85vw] mx-auto flex justify-center flex-col">
            <div className="flex justify-center mt-20 mb-8">
            <SectionTitle  header={"MY PROJECTS"}></SectionTitle>
            </div>
            {/* div for the projects card */}
            <div className="  lg:pl-16 w-full mx-auto grid grid-cols-1 md:grid-cols-2 space-y-4 lg:grid-cols-3"> 
                <ProjectCard image={bistro} projectName={"Bistro Boss Resturant"} code={"https://github.com/sadeeabdullah/bistro-boss-client"} live={"https://bistro-boss-a82f9.firebaseapp.com/"}></ProjectCard>
                <ProjectCard image={zen} projectName={"Zenhotel Online Booking"} code={"https://github.com/sadeeabdullah/zental-hotel"} live={"https://zenhotel-3e57c.firebaseapp.com/"}></ProjectCard>
                <ProjectCard image={tech} projectName={"Bistro Boss Resturant"} code={"https://github.com/sadeeabdullah/tech-spot"} live={"https://tech-spot-49674.firebaseapp.com/"}></ProjectCard>
            </div>
        </div>
    );
};

export default Projects;