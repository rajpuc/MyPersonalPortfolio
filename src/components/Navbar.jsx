import React, { useEffect, useState } from "react";
import { MENU_LINKS } from "../utils/data";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true); //Always show menu on large screens
      } else {
        setIsOpen(false); //hide menu by default on small screens
      }
    };
    //Set initial state based on screen size
    handleResize();

    //listen to resize events
    window.addEventListener("resize", handleResize);

    //cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="container mx-auto sticky top-5 z-10">
      <div className="flex items-center justify-between rounded-full bg-white/25 border border-[#fee6cc] backdrop-blur-[10px] m-5 p-3 md:p-0">
        {/* Logo */}
        {/* <img
          className="h-7 ml-6 -mb-1"
          src="https://picsum.photos/200/300/?blur=2"
          alt="Logo"
        /> */}
        <h1 className="font-allura text-4xl font-bold ml-3 bg-gradient-primary bg-clip-text text-transparent whitespace-pre">
          Rajesh Pal &nbsp; 
        </h1>
        {/* hamburger icon visible only small screens */}
        <button
          className="block md:hidden text-[#333] mr-6 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              // X icon (close)
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger menu icon (open)
              <>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 12h16"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 18h16"
                />
              </>
            )}
          </svg>
        </button>
        {/* Navigation Links */}
        <ul className={`${isOpen ? "flex" : "hidden"} menu-wrapper`}>
          {MENU_LINKS.map((item) => (
            <li key={item.id}>
              <Link
                activeClass="active"
                to={item.to}
                smooth
                spy
                offset={item.offset}
                className="menu-item"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/*Hire Me Button  */}
        <Link
          activeClass="active"
          to="contact"
          smooth={true}
          spy={true}
          offset={-50}
          duration={500}
          className="hidden md:block"
        >
          <button className="h-12 text-[15px] font-medium text-[#fff] bg-gradient-primary rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105">
            Hire Me
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
