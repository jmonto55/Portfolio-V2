import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery1 = window.matchMedia("(max-width: 768px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery1.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery1.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery1.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (isMobile) {
    return (
      <div>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} dark:text-neutral-900`}>Appart from advanced JavaScript, HTML & CSS</p>
          <h2 className={`${styles.sectionHeadText} mb-10 dark:text-neutral-900`}>Technologies.</h2>
        </motion.div>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((tech) => (
            <img
              className="animate-spin-mid ease-in-out blacky-gradient p-3 rounded-full h-16 w-16"
              src={tech.icon}
              alt={tech.name}
              key={tech.name}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} dark:text-neutral-900`}>Appart from advanced JavaScript, HTML & CSS</p>
          <h2 className={`${styles.sectionHeadText} mb-10 dark:text-neutral-900`}>Technologies.</h2>
        </motion.div>
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((tech) => (
            <div className="w-28 h-28 dark:text-black" key={tech.name}>
              <BallCanvas icon={tech.icon} />
              <h2 className="text-[12px] text-center tracking-wider">{tech.name}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default SectionWrapper(Tech, "");
