/* eslint-disable react/prop-types */

import { SiAppwrite } from "react-icons/si";
import { TbLiveView } from "react-icons/tb";
const ProjectCard = ({image,projectName,code,live}) => {
    return (
        <div className=" w-72 rounded-lg shadow-[#3199d1] mb-4 lg:mb-0 shadow-xl">
            {/* div for image */}
            <div>
                <img className="h-64 w-full rounded-t-lg" src={image} alt="" />
            </div>
            {/* div for the text */}
            <div className="bg-slate-600 p-4 text-white rounded-b-lg">
                <h2 className="text-lg font-semibold">{projectName}</h2>
                {/* div for button */}
                <div className="flex  justify-between mt-4 ">
                    <a href={code}>
                        <button className="bg-slate-800 hover:shadow-[#a5a6ff] shadow-xl hover:bg-[#a5a6ff] rounded-xl px-2 flex gap-2 items-center"><SiAppwrite />code</button>
                    </a>
                    <a href={live}>
                        <button className="bg-slate-800 hover:shadow-[#a5a6ff] shadow-xl hover:bg-[#a5a6ff] rounded-xl px-2 flex gap-2 items-center"><TbLiveView />Live Preview</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;