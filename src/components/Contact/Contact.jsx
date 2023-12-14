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
        
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="mt-20 w-[85vw] mx-auto text-center text-white">
      <SectionTitle header={"GOT ANY PROJECT?"}></SectionTitle>
      <h2 className="text-3xl font-bold font-mono text-white">
        --Contact with me--
      </h2>
      <h4>contact</h4>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
