import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { logo } from "../assets";

const Modal = () => {
  return (
    <div className="fixed w-screen inset-0 h-screen flex backdrop-filter backdrop-blur-sm">
      <motion.div variants={textVariant()} className="flex flex-col items-center gap-6 w-5/6 max-w-3xl text-center md:text-xl p-5 md:p-10 bg-neutral-200 m-auto bg-opacity-10 text-white font-bold rounded-2xl shadow-5xl border-2 border-t-0 border-l-0 border-white/25 backdrop-filter backdrop-blur-xl">
        Thank you! I will get back to you as soon as possible.
        <img src={logo} alt="logo" className="w-14 opacity-60" />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Modal, '');