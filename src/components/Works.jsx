import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, live } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from "react";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  const [gitHover, setGitHover] = useState(false);
  const [liveHover, setLiveHover] = useState(false);

  return (
    <motion.div variants={textVariant()}>
      <Tilt
        options={{
          max: 25,
          scale: 0.95,
          speed: 450,
        }}
        className="z-0 bg-tertiary p-5 rounded-2xl sm:w-[380px] w-full shadow-card dark:bg-slate-100 dark:text-neutral-900"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {gitHover && (
              <>
                <span className="px-2 text-[14px] z-10 absolute -top-14 -right-7 bg-secondary bg-opacity-20 text-white p-1 rounded-md shadow-5xl border-2 border-t-0 border-l-0 border-white/25 backdrop-filter backdrop-blur-sm">
                  See source
                </span>
                <div className="border h-14 absolute rotate-45 -top-9 right-10 z-0" />
              </>
            )}

            {liveHover && (
              <>
                <span className="px-2 text-[14px] z-20 absolute -top-14 -right-14 bg-secondary bg-opacity-20 text-white p-1 rounded-md shadow-5xl border-2 border-t-0 border-l-0 border-white/25 backdrop-filter backdrop-blur-sm">
                  Live demo
                </span>
                <div className="border h-14 absolute rotate-45 -top-9 z-0" />
              </>
            )}
            <button
              type="button"
              onMouseEnter={() => setGitHover(true)}
              onMouseLeave={() => setGitHover(false)}
              onClick={() => window.open(source_code_link, "_blank")}
              className="z-10 mr-2 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </button>
            <button
              type="button"
              onMouseEnter={() => setLiveHover(true)}
              onMouseLeave={() => setLiveHover(false)}
              onClick={() => window.open(live_demo_link, "_blank")}
              className="z-10 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={live}
                alt="live"
                className="w-1/2 h-1/2 object-contain"
              />
            </button>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] dark:text-neutral-900">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} dark:text-neutral-900`}>What I have built</p>
        <h2 className={`${styles.sectionHeadText} dark:text-neutral-900`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] dark:text-neutral-900"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. It reflects my ability to solve
          complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
