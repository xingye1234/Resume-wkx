import React from "react";
import { motion } from "framer-motion";
import { I18n, useIn18 } from "../context/in18context";

type Project = {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  times:string;
};

const projects: Project[] = [
  {
    name: "projects.one.title",
    times:"2024.07-2024.09",
    description: "projects.one.description",
    technologies: ["Vue", "Unocss", "Typescript"],
    image: "https://via.placeholder.com/150",
  },
  {
    name: "projects.two.title",
    times:"2024.05-2024.07",
    description: "projects.two.description",
    technologies: ["React", "Nextjs", "Typescript", "TailWindCSS"],
    image: "https://via.placeholder.com/150",
  },
  {
    name: "projects.three.title",
    times:"2024.03-2024.04",
    description: "projects.three.description",
    technologies: ["Vue", "Echarts"],
    image: "https://via.placeholder.com/150",
  },
  {
    name: "projects.four.title",
    times:"2023.10-2023.12",
    description: "projects.four.description",
    technologies: ["Vue", "Vite", "Typescript","ElementUI"],
    image: "https://via.placeholder.com/150",
  },
  {
    name: "projects.five.title",
    times:"2023.12-2024.01",
    description: "projects.five.description",
    technologies: ["Vue2", "Corejs", "ElementUI"],
    image: "https://via.placeholder.com/150",
  },
];

const Projects = () => {
  const {t}:I18n = useIn18()!
  return (
    <div
      id="projects"
      className="w-full min-h-screen flex flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          {t('myprojects')}
        </h1>
      </ScrollReveal>
      <div className="flex flex-col max-w-[1000px] gap-16 text-white">
        {projects.map((project, index) => (
          <ProJectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProJectCard = ({ project }: { project: Project }) => {

  const {t}:I18n = useIn18()!
  return (
    <ScrollReveal>
      <div className="flex flex-col  gap-8 md:flex-row md:gap-24">
        {/* <img
          src={project.image}
          alt=""
          className="w-full cursor-pointer rounded-2xl transition-all 
          duration-300 hover:scale-105 md:w-[300px]"
        /> */}



        <div className="flex flex-col gap-5 flex-grow">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold flex justify-between">
              <p>{t(project.name)}</p>
              <p>{project.times}</p>
            </div>
            <p className="text-gray-400">{t(project.description)}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((item, idx) => (  
              <span key={idx} className="rounded-lg bg-black">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default Projects;
