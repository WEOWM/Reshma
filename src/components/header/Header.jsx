import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import "./Header.scss";

const Header = () => {
 

  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.from(".head  a", {
      y: -30,
      duration: 1.5,
      opacity: 0,
      
      
    });

    gsap.from(".nav-item p", {
      x: 30,
      duration: 1,
      opacity: 0,
      
    });
  });

  return (
    <div className="head">
      <a href="/" className="hover-target">
         Reshma
      </a>
      <div className="nav-item ">
       <p> <RiMenuUnfold2Fill size={30} /></p>
      </div>
    </div>
  );
};

export default Header;
