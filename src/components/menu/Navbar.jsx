
import navLogo from "../../assets/images/logo.png"
import { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
const Navbar = () =>{
  const scrollTo = (elementId) => {
    scroll.scrollTo(document.getElementById(elementId), {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };


  const [scrolled, setScrolled] = useState(false);

  // eslint-disable-next-line no-unused-vars
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   

  const navItems = <>
  
    <li>
      <Link
        activeClass="bg-gradient-to-r from-[#331959] to-[#a769cc] text-white"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        onClick={() => scrollTo('home')}
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        activeClass="bg-gradient-to-r from-[#331959] to-[#4d54cf] text-white"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        onClick={() => scrollTo('about')}
      >
        About
      </Link>
    </li>
    <li>
      <Link
        activeClass="bg-gradient-to-r from-[#331959] to-[#4d54cf] text-white"
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        onClick={() => scrollTo('projects')}
      >
        Projects
      </Link>
    </li>
    <li>
      <Link
        activeClass="bg-gradient-to-r from-[#331959] to-[#4d54cf] text-white"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        onClick={() => scrollTo('contact')}
      >
        Contact Us
      </Link>
    </li>
 
</>

    return (
      
        <div
        className={` ${
          scrolled
            ? "navbar  sticky top-0  z-10 bg-base-500  bg-opacity-100 backdrop-blur-sm bg-black lg:bg-transparent text-white  max-w-screen-xl mx-auto font-rethink-sans  "
            : "navbar absolute left-[50%] translate-x-[-50%]  bg-opacity-100 backdrop-blur-sm bg-black lg:bg-transparent text-white z-10  max-w-screen-xl mx-auto font-rethink-sans  "
        }`}
      
    >
      <div className=" navbar-start">
        <div className="dropdown">
          <label tabIndex={0} htmlFor="my-drawer-2"  className="drawer lg:drawer-open drawer-button   btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#a769cc] " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <div className="">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-2/5  min-h-full bg-transparent backdrop-filter space-y-2 backdrop-blur-lg  text-lg   text-white">
      {/* Sidebar content here */}
      <img className="w-[100px] mb-4" src={navLogo} alt="" />
      {navItems}
    </ul>
  
  </div>
</div>
        </div>
        <a className="btn btn-ghost text-2xl">
        <img className="bg-transparent w-[150px]"  src={navLogo} alt="" />
        </a>
      </div>
      
      <div className="navbar-end">
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg space-x-2">
          {navItems}
        </ul>
        
      </div>
      
      </div>
    </div>
    );
};

export default Navbar;