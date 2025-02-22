import React from "react";
import RajeshImg2 from "../assets/images/RajeshImg2.jpg";
import ICON_1 from "../assets/images/ICON_1.png";
import ICON_3 from "../assets/images/ICON_3.png";
import ICON_4 from "../assets/images/ICON_4.png";
import ICON_5 from "../assets/images/ICON_5.png";
import { STATS } from "../utils/data";
import StatInfoCard from "../components/StatInfoCard";
import { Link } from "react-scroll";

const Hero = () => {
  const downloadPDF = () => {
    const pdfUrl = "/RajeshPalResume.pdf"; // Public folder reference
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "RajeshPalResume.pdf"; // Set the file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="container  mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
        <div className="order-2 lg:order-1  text-center lg:text-left mt-16 lg:mt-0">
          <h3 className="text-xl lg:text-2xl font-medium text-black">
            👋 Hi, I'm RAJESH PAL
          </h3>
          <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-primary bg-clip-text text-transparent ">
              MERN Stack Developer & Problem Solver
          </h1>
          <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
            I’m a passionate full-stack developer with expertise in building
            scalable, efficient, and user-centric web applications using React,
            Node.js, Express, and MongoDB. I also have experience in problem
            solving.
          </p>
          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
            <Link
              activeClass="active"
              to="projects"
              smooth={true}
              spy={true}
              offset={-50}
              duration={500}
            >
              <button className="flex-1 md:flex-none action-btn-outline btn-scale-anim ">
                View My Work
              </button>
            </Link>
            <button
              onClick={downloadPDF}
              className="flex-1 md:flex-none action-btn btn-scale-anim"
            >
              Download Resume
            </button>
          </div>
        </div>
        <div className="w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-[#dd9fa2] rounded-3xl relative order-1 lg:order-2 ">
          <img
            src={RajeshImg2}
            alt="portfolio img"
            className="profile-pic rounded-[2.5rem]"
          />
          <img
            src={ICON_1}
            alt="icon 1"
            className="icon-img -left-10 bottom-20 rotate-[1.75deg]"
          />
          <img
            src={ICON_5}
            alt="icon 1"
            className="icon-img left-5 md:left-10 -bottom-2 md:-bottom-5 rotate-[2.75deg]"
          />
          <img
            src={ICON_3}
            alt="icon 1"
            className="icon-img left-[110px] md:left-[150px] -bottom-6 md:-bottom-8 rotate-[3.75deg]"
          />
          <img
            src={ICON_4}
            alt="icon 1"
            className="icon-img left-[200px] md:left-[255px] -bottom-8 md:-bottom-10 rotate-[4.75deg]"
          />
        </div>
      </div>
      <div className="flex gap-12 mt-16 md:mt-24 flex-wrap">
        {STATS.map((item) => (
          <StatInfoCard key={item.id} count={item.count} label={item.label} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
