import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import  "./Edu.css"


const MyEducation = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-20 flex lg:flex-row-reverse flex-col justify-center items-center gap-12">
            {/* div for education */}
            <div className="text-white lg:w-1/3" data-aos="fade-left"
     data-aos-easing="linear"
     data-aos-duration="1000">
                <SectionTitle header={"EDUCATION"}></SectionTitle>
                <p className="">Having completed my Secondary School Certificate (SSC) in 2020, I embarked on a journey in Computer Science and Technology for my diploma. This educational pursuit has been a gateway to my exploration of the vast realm of software development. Envisioning the end of my diploma by 2024, I am passionately diving into the software development field, aiming to broaden my horizons. Post-graduation, I aspire to venture abroad, seeking new perspectives and opportunities to further enrich my skills and expertise in this dynamic domain.</p>
            </div>
            {/* div for year and degree */}
            <div className="text-white text-right" data-aos="fade-right"
     data-aos-easing="linear"
     data-aos-duration="1000">
                <h2 className="text-4xl bordered-text ">2020 - 2023</h2>

               <div className="mt-12">
               <h4 className="text-lg font-bold">Secondary School Certificate</h4>
                <p className="font-semibold">Jahur Pur Ram Gopal High School | 2020</p>
               <h4 className="text-lg font-bold mt-4">Diploma in Computer Science and Technology</h4>
                <p className="font-semibold">Jashore Polytechnic Institue | ongoing | 2023</p>
               </div>
            </div>
            
        </div>
    );
};

export default MyEducation;