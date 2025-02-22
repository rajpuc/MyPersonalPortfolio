import React from "react";
import ContactInfoCard from "../components/ContactInfoCard";
import { ABOUT_ME } from "../utils/data";
import { IoMdMail } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";

function ContactMe() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "eb221714-b44e-44eb-b4bc-d6c09801fe4e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="">
      <div className="container mx-auto p-10 ">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">Contact Me</h4>
          <p className="text-sm text-center mt-4 leading-6 ">
            A versatile developer with hands-on expertise in modern
            technologies, tools and frameworks, dedicated to building efficient,
            scalable, and user-centric solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16">
          <div className="">
            <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} />
            <ContactInfoCard
              icon={<IoPhonePortraitOutline />}
              text={ABOUT_ME.phone}
            />
            <ContactInfoCard icon={<MdOutlineWeb />} text={ABOUT_ME.website} />
          </div>
          <div className="">
            <h5 className="md:hidden text-secondary text-lg font-medium mt-4 pb-4 ">
              Contact Form
            </h5>
            <form onSubmit={onSubmit} className="flex flex-col">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                id=""
                className="input-box"
                autoComplete="off"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                id=""
                className="input-box"
                autoComplete="off"
              />
              <textarea
                type="text"
                name="message"
                placeholder="Message..."
                rows={3}
                id=""
                className="input-box"
                autoComplete="off"
              />
              <button type="submit" className="action-btn btn-scale-anim">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
