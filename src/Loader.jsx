import gsap from "gsap";
import { useRef, useEffect } from "react";

const Loader = () => {
    const textRef = useRef(null);

    useEffect(() => {
      // Overlay slide-up animation
      gsap.fromTo(
        ".overlay",
        { opacity: 1, y: 0 },
        { y: "-100%", duration: 1.5, delay: 2.5, ease: "power2.inOut" }
      );
  
      // Stagger animation for text letters
      if (textRef.current) {
        gsap.fromTo(
          textRef.current.children,
          { opacity: 1, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
          }
        );
  
        // Fade-out letters before the overlay exits
        gsap.to(textRef.current.children, {
          opacity: 0,
          duration: 0.5,
          delay: 2,
          stagger: 0.1,
          ease: "power2.inOut",
        });
      }
    }, []);

  return (
    <div className=" min-w-screen min-h-screen">
      <div className="z-50 overlay top-0 left-0 absolute bg-gradient-to-r from-teal-800 to-zinc-900 w-screen h-screen flex justify-center items-center">
        <h1 ref={textRef} className="text-overlay text-white text-3xl">
          {"Loading...".split("").map((char, i) => (
            <span key={i} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </div>

     
    </div>
  );
};

export default Loader;
