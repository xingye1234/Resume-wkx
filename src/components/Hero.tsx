import { I18n, useIn18 } from "../context/in18context";
import photo from "/avatar.jpg";
import { motion } from "framer-motion";

const Hero = () => {

  const {t}:I18n = useIn18()!

  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src={photo}
          alt=""
          className="w-[300px] h-[300px] object-cover rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600
        shadow-xl transition-all duration-300 hover:-translate-y-4"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex max-x-[600px] flex-col items-center justify-center gap-3 text-center mt-10"
      >
        <h1
          className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent
      opacity-80 text-5xl font-semibold hover:opacity-100 transition-all duration-300 tracking-widest"
        >
          WangKeXing
        </h1>
        <h3
          className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent
      opacity-80 text-xl font-semibold hover:opacity-100 transition-all duration-300 tracking-widest"
        >
          {t('subjects.subject')}
        </h3>
        <p className="text-gray-400">
          {t('description')}
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
