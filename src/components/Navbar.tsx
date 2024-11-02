import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsChat, BsGithub, BsTranslate } from "react-icons/bs";
import { motion } from "framer-motion";
import { I18n, useIn18 } from "../context/in18context";

type NavItem = {
  id: number;
  name: string;
  link: string;
};

const navs: NavItem[] = [
  { id: 2, name: "nav.home", link: "#home" },
  { id: 3, name: "nav.tech", link: "#tech" },
  { id: 4, name: "nav.projects", link: "#projects" },
  { id: 5, name: "nav.contact", link: "#contact" },
];

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const { language, setLanguage, t }: I18n = useIn18()!;

  const handleIsOpen = () => {
    setisOpen(!isOpen);
  };
  const handleLanguageChange = () => {
    setLanguage(() => language === "en" ? "zh-cn" : "en");
  };

  return (
    <nav
      className="fixed top-0 z-10 w-full flex justify-between items-center border-b box-border
    px-4 md:px-16 border-gray-700 py-4 text-white backdrop-blur-md bg-black"
    >
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent
      opacity-80 text-3xl font-semibold hover:opacity-100 transition-all duration-300 tracking-widest"
      >
        WKX
      </a>

      <ul className="hidden sm:flex text-md md:text-lg gap-x-4 items-center">
        {navs.map((item) => {
          return (
            <a
              href={item.link}
              key={item.id}
              className="opacity-50 hover:opacity-100 transition-all duration-500"
            >
              <li>{t(item.name)}</li>
            </a>
          );
        })}
      </ul>
      <ul className="hidden sm:flex gap-x-3 items-center">
        {/* <a
          href=""
          title="youtube"
          className="text-md md:text-xl opacity-50 hover:opacity-100 transition-all duration-500"
        >
          <li>
            <BsYoutube />
          </li>
        </a> */}
        {/* <a
          href=""
          title="linkedin"
          className="text-md md:text-lg opacity-50 hover:opacity-100 transition-all duration-500"
        >
          <li>
            <BsLinkedin />
          </li>
        </a> */}
        {/* <a
          href=""
          title="twitter"
          className="text-md md:text-lg opacity-50 hover:opacity-100 transition-all duration-500"
        >
          <li>
            <BsTwitterX />
          </li>
        </a> */}
        <a
          href="https://github.com/xingye1234"
          title="github"
          className="text-md md:text-lg opacity-50 hover:opacity-100 transition-all duration-500"
        >
          <li>
            <BsGithub />
          </li>
        </a>
        <a
          href=""
          title="wechat 13635985831"
          className="text-md md:text-lg opacity-50 hover:opacity-100 transition-all duration-500"
        >
          <li>
            <BsChat />
          </li>
        </a>
     
          <li
            onClick={handleLanguageChange}
            className="text-md cursor-pointer md:text-lg opacity-50 hover:opacity-100 transition-all duration-500"
          >
            <BsTranslate />
          </li>
      </ul>

      <div className="sm:hidden">
        {isOpen ? (
          <BiX className="text-3xl" onClick={handleIsOpen} />
        ) : (
          <BiMenu className="text-3xl" onClick={handleIsOpen} />
        )}
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          whileTap={{ opacity: 0, x: -200 }}
          className="fixed top-0 left-0 min-w-[150px] h-screen bg-black/80 z-10 text-center pt-16"
        >
          <ul className="flex flex-col gap-4 py-4 sm:hidden text-md md:text-lg gap-x-4 items-center">
            {navs.map((item) => {
              return (
                <a
                  href={item.link}
                  key={item.id}
                  className="opacity-50 hover:opacity-100 transition-all duration-500"
                >
                  <li>{item.name}</li>
                </a>
              );
            })}
          </ul>

          <ul className="flex flex-wrap sm:hidden gap-x-2 items-center justify-center">
            {/* <a
              href=""
              className="text-lg md:text-2xl opacity-50 hover:opacity-100 transition-all duration-500"
            >
              <li>
                <BsYoutube />
              </li>
            </a>
            <a
              href=""
              className="text-md md:text-xl opacity-50 hover:opacity-100 transition-all duration-500"
            >
              <li>
                <BsLinkedin />
              </li>
            </a>
            <a
              href=""
              className="text-md md:text-xl opacity-50 hover:opacity-100 transition-all duration-500"
            >
              <li>
                <BsTwitterX />
              </li>
            </a> */}
            <a
              href=""
              className="text-lg md:text-xl opacity-50 hover:opacity-100 transition-all duration-500"
            >
              <li>
                <BsGithub />
              </li>
            </a>
            <a
              href=""
              className="text-lg md:text-xl opacity-50 hover:opacity-100 transition-all duration-500"
            >
              <li>
                <BsChat />
              </li>
            </a>
            <a
              href="javascript:;"
              title="wechat 13635985831"
              className="text-lg md:text-xl opacity-50 hover:opacity-100 transition-all duration-500"
              onClick={handleLanguageChange}
            >
              <li>
                <BsTranslate />
              </li>
            </a>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
