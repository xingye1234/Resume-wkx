import { BsArrow90DegRight, BsArrowBarRight } from "react-icons/bs";
import { I18n, useIn18 } from "../context/in18context";
import { AiOutlineArrowRight } from "react-icons/ai";

const Contact = () => {
  const {t}:I18n = useIn18()!
  return (
    <div
      id="contact"
      className="flex min-h-screen min-w-full items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-4xl text-center md:text-7xl">
          <span
            className="bg-gradient-to-r from-indigo-500 to-blue-500 
          bg-clip-text text-transparent"
          >
           {t("contact")}
          </span>
        </h1>
        <p className="text-center text-lg font-semibold text-gray-500">
         {t('contactmedesc')}
        </p>
        <a
          href="mailto:1989163733@qq.com"
          className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 inline-flex gap-1 items-center
        text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all 
        duration-300 hover:shadow-xl hover:shadow-indigo-600 hover:-translate-y-2"
        >
          {t('contactme')} <AiOutlineArrowRight/>
        </a>
      </div>
    </div>
  );
};

export default Contact;
