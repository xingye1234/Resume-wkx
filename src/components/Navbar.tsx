import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsChat, BsGithub, BsTranslate } from "react-icons/bs";
import { motion } from "framer-motion";
import { useI18n } from "../context/in18context";
import { useClientWH } from "../hooks/useClientWH";

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
  const { language, setLanguage, t } = useI18n();
  const { isMobile } = useClientWH();

  const handleIsOpen = () => {
    setisOpen(!isOpen);
  };
  const handleLanguageChange = () => {
    setLanguage(() => (language === "en" ? "zh-cn" : "en"));
  };

  return (
    <nav className="fixed top-0 z-10 box-border flex w-full items-center justify-between border-b border-gray-700 bg-black px-4 py-4 text-white backdrop-blur-md md:px-16">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-3xl font-semibold tracking-widest text-transparent opacity-80 transition-all duration-300 hover:opacity-100"
      >
        {isMobile ? "WKX" : "KeXing Wang"}
      </a>

      <ul className="text-md hidden items-center gap-x-4 sm:flex md:text-lg">
        {navs.map((item) => {
          return (
            <a
              href={item.link}
              key={item.id}
              className="opacity-50 transition-all duration-500 hover:opacity-100"
            >
              <li>{t(item.name)}</li>
            </a>
          );
        })}
      </ul>
      <ul className="hidden items-center gap-x-3 sm:flex">
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
          className="text-md opacity-50 transition-all duration-500 hover:opacity-100 md:text-lg"
        >
          <li>
            <BsGithub />
          </li>
        </a>
        <a
          href=""
          title="wechat 13635985831"
          className="text-md opacity-50 transition-all duration-500 hover:opacity-100 md:text-lg"
        >
          <li>
            <BsChat />
          </li>
        </a>

        <li
          onClick={handleLanguageChange}
          className="text-md cursor-pointer opacity-50 transition-all duration-500 hover:opacity-100 md:text-lg"
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
          className="fixed left-0 top-0 z-10 h-screen min-w-[150px] bg-black/80 pt-16 text-center"
        >
          <ul className="text-md flex flex-col items-center gap-4 gap-x-4 py-4 sm:hidden md:text-lg">
            {navs.map((item) => {
              return (
                <a
                  href={item.link}
                  key={item.id}
                  className="opacity-50 transition-all duration-500 hover:opacity-100"
                >
                  <li>{t(item.name)}</li>
                </a>
              );
            })}
          </ul>

          <ul className="flex flex-wrap items-center justify-center gap-x-2 sm:hidden">
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
              className="text-lg opacity-50 transition-all duration-500 hover:opacity-100 md:text-xl"
            >
              <li>
                <BsGithub />
              </li>
            </a>
            <a
              href=""
              className="text-lg opacity-50 transition-all duration-500 hover:opacity-100 md:text-xl"
            >
              <li>
                <BsChat />
              </li>
            </a>

            <li
              onClick={handleLanguageChange}
              className="cursor-pointer text-lg opacity-50 transition-all duration-500 hover:opacity-100 md:text-xl"
            >
              <BsTranslate />
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
