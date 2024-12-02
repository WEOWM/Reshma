import { useEffect, useRef } from "react";
import "./Hero.scss";
import gsap from "gsap";


const Hero = () => {
  const overlayRef = useRef(null);
  

  const overlay = overlayRef.current;
  useEffect(() => {

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPercent = (clientX / window.innerWidth) * 100;
      const yPercent = (clientY / window.innerHeight) * 100;

      
      gsap.to(overlay, {
        clipPath: `circle(100px at ${xPercent}% ${yPercent}%)`,
        duration: 0.3,
        ease: "sine.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="hero-sction w-full h-auto ">
      <div className="overlay hover-target">
      <p>Hey Hey Hey</p>
      <p>RESHMA</p>
      <p>RESHMA</p>
      </div>

      <div className="overlay-1" ref={overlayRef}>
      <p>RESHMA</p>
      <p>RESHMA</p>
      <p>RESHMA</p>
      </div>

    
    </div>
  );
};

export default Hero;
