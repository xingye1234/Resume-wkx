import React from "react";
import { motion } from "framer-motion";

type Project = {
  name: string;
  description: string;
  technologies: string[];
  image: string;
};

const projects: Project[] = [
  {
    name: "江西美术馆数字藏品库",
    description: "主要用于展示美术馆藏品以及藏品细节查看",
    technologies: ["Vue", "Unocss", "Typescript"],
    image: "https://via.placeholder.com/150",
  },
  {
    name: "AI 智能问答",
    description: "针对 B 端客户以及内部人员使用便利，制作的问答知识库",
    technologies: ["React", "Nextjs", "Typescript", "TailWindCSS"],
    image: "https://via.placeholder.com/150",
  },
  {
    name: "南钞大屏可视化",
    description: "该项目将各项数据可视化处理，直观展示了各项计划进度、产品作废率和成品率以及车间各项数据变化，更加方便于领导管理",
    technologies: ["Vue", "Echarts"],
    image: "https://via.placeholder.com/150",
  },
  {
    name: "化工网盘数据平台",
    description: "实现网盘数据管理",
    technologies: ["Vue", "Vite", "Typescript"],
    image: "https://via.placeholder.com/150",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full min-h-screen flex flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
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
            <div className="text-xl font-semibold">{project.name}</div>
            <p className="text-gray-400">{project.description}</p>
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
