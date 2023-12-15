import { useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1xgla8q",
        "template_nlts07i",
        form.current,
        "jrGhkNsvomLTFkem9"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message send successfully")
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Email Send Successfully",
            showConfirmButton: false,
            timer: 1500
          });
        e.target.reset()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="mt-20 max-w-screen-xl mx-auto flex lg:flex-row flex-col   text-white">
      <div className="lg:w-1/3">
      <SectionTitle header={"GOT ANY PROJECT?"}></SectionTitle>
      <h2 className="text-3xl font-bold font-mono text-white">
        --Contact with me--
      </h2>
      </div>
      <form className="lg:w-1/2 mx-auto text-black flex flex-col mt-4 lg:mt-0" ref={form} onSubmit={sendEmail}>
       <div className="">
       <label className="text-start text-lg text-white pl-2">Your Name</label>
        <input placeholder="your name here" className="w-full bg-slate-800 opacity-60 p-4 text-white border-2 h-12 shadow-[#3199d1] shadow-lg border-[#3199d1] rounded-lg" type="text" name="user_name" />
       </div>
        <div className="">
        <label className="text-start text-lg text-white pl-2">Email</label>
        <input placeholder="your email here" className="w-full bg-slate-800 opacity-60 p-4 text-white border-2 h-12 shadow-[#3199d1] shadow-lg border-[#3199d1] rounded-lg" type="email" name="user_email" />
        </div>
       <div >
       <label className="text-start text-lg text-white pl-2">Message</label>
        <textarea placeholder="type your message  here" className="w-full bg-slate-800 opacity-60 p-4 text-white border-2 h-24 shadow-[#3199d1] shadow-lg border-[#3199d1] rounded-lg" name="message" />
       </div>
        <input className="p-3 border-slate-500 rounded-lg hover:bg-[#a5a6ff] border-2 bg-black shadow-black-500 hover:shadow-slate-400 shadow-2xl mt-8 flex justify-center items-center gap-2 text-lg text-white" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
