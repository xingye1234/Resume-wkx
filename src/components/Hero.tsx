import { useI18n } from "../context/in18context";
import photo from "/avatar.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useI18n();

  return (
    <section
      id="home"
      className="flex min-h-screen w-full flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src={photo}
          alt=""
          className="h-[300px] w-[300px] rounded-full object-cover shadow-xl transition-all duration-300 hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-x-[600px] mt-10 flex flex-col items-center justify-center gap-3 text-center"
      >
        <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-5xl font-semibold tracking-widest text-transparent opacity-80 transition-all duration-300 hover:opacity-100">
          WangKeXing
        </h1>
        <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-xl font-semibold tracking-widest text-transparent opacity-80 transition-all duration-300 hover:opacity-100">
          {t("subjects.subject")}
        </h3>
        <p className="text-gray-400">{t("description")}</p>
      </motion.div>
    </section>
  );
};

export default Hero;
