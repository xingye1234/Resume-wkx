import {
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoVuejs,
} from "react-icons/bi";
import { motion } from "framer-motion";
import { useI18n } from "../context/in18context";
import { SiNextdotjs, SiNuxtdotjs } from "react-icons/si";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const { t } = useI18n();

  return (
    <section
      id="tech"
      className="flex min-h-[70vh] w-full flex-col flex-wrap items-center justify-center p-5 md:gap-10"
    >
      <motion.h1
        className="mb-8 text-5xl md:text-7xl"
        variants={{ ...variants, hidden: { opacity: 0, y: -50 } }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.7, delay: 0.4 }}
        // viewport={{ once: true, amount: 0.5 }}
      >
        {t("tech")}
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-10">
        <motion.div
          variants={{ ...variants, initial: { opacity: 0, y: 50 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <BiLogoVuejs className="cursor-pointer text-[80px] text-green-300 transition-all duration-300 hover:-translate-y-5 hover:text-green-500 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={{ ...variants, initial: { opacity: 0, y: 50 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <BiLogoReact className="cursor-pointer text-[80px] text-sky-300 transition-all duration-300 hover:-translate-y-5 hover:text-sky-500 sm:text-[100px] md:text-[120px]" />
        </motion.div>
        <motion.div
          variants={{ ...variants, initial: { opacity: 0, y: 50 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <BiLogoTypescript className="cursor-pointer text-[80px] text-sky-300 transition-all duration-300 hover:-translate-y-5 hover:text-sky-500 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={{ ...variants, initial: { opacity: 0, y: 50 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <BiLogoNodejs className="cursor-pointer text-[80px] text-green-400 transition-all duration-300 hover:-translate-y-5 hover:text-green-600 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={{ ...variants, initial: { opacity: 0, y: 50 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <BiLogoTailwindCss className="cursor-pointer text-[80px] text-sky-300 transition-all duration-300 hover:-translate-y-5 hover:text-sky-400 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={{ ...variants, initial: { opacity: 0, y: 50 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <SiNuxtdotjs className="cursor-pointer text-[80px] text-green-300 transition-all duration-300 hover:-translate-y-5 hover:text-green-500 sm:text-[100px] md:text-[120px]" />
        </motion.div>

        <motion.div
          variants={{ ...variants, initial: { opacity: 0, y: 50 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.9, delay: 0.9 }}
        >
          <SiNextdotjs className="cursor-pointer text-[80px] text-white transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;
