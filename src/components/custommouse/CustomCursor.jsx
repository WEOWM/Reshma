import React, { useEffect } from "react";
import gsap from "gsap";
import "./CustomCursor.scss";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    // Track mouse movement and animate with GSAP
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Handle hover effect
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    const hoverTargets = document.querySelectorAll(".hover-target");

    const addHoverEffect = () => {
      gsap.to(cursor, {
        scale: 3.5,
        backgroundColor: "white",
        mixBlendMode: "difference",
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const removeHoverEffect = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "white",
        duration: 0.3,
        ease: "power3.out",
      });
    };

    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", addHoverEffect);
      target.addEventListener("mouseleave", removeHoverEffect);
    });

    return () => {
      hoverTargets.forEach((target) => {
        target.removeEventListener("mouseenter", addHoverEffect);
        target.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, []);

  // Handle click animation
  // useEffect(() => {
  //   const cursor = document.querySelector(".custom-cursor");

  //   const handleMouseDown = () => {
  //     gsap.to(cursor, {
  //       scale: 0.8,
  //       backgroundColor: "red",
  //       duration: 0.2,
  //       ease: "power3.out",
  //     });
  //   };

  //   const handleMouseUp = () => {
  //     gsap.to(cursor, {
  //       scale: 1,
  //       backgroundColor: "black",
  //       duration: 0.3,
  //       ease: "power3.out",
  //     });
  //   };

  //   window.addEventListener("mousedown", handleMouseDown);
  //   window.addEventListener("mouseup", handleMouseUp);

  //   return () => {
  //     window.removeEventListener("mousedown", handleMouseDown);
  //     window.removeEventListener("mouseup", handleMouseUp);
  //   };
  // }, []);

  return <div className="custom-cursor"></div>;
};

export default CustomCursor;
