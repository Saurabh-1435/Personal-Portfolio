"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaBrain,
  FaUsers,
  FaComments,
  FaRegClock,
  FaSync,
  FaLightbulb,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiSpringboot,
  SiHibernate,
  SiFirebase,
  SiMysql,
  SiMongodb,
  // SiVisualstudio,
  SiSpring,
  SiEclipseide,
  SiPostman,
} from "react-icons/si";

import { TbDatabase } from "react-icons/tb";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: FaReact, color: "#61DBFB" },
        { name: "HTML", icon: FaHtml5, color: "#E34F26" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
        { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", icon: FaJava, color: "#E51F24" },
        { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
        { name: "Hibernate", icon: SiHibernate, color: "#59666C" },
        { name: "JDBC", icon: TbDatabase, color: "#4FD1C5" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "MySQL", icon: SiMysql, color: "#00758F" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
        // { name: "VS Code", icon: SiVisualstudio, color: "#007ACC" },
        { name: "STS", icon: SiSpring, color: "#6DB33F" },
        { name: "Eclipse", icon: SiEclipseide, color: "#2C2255" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", icon: FaBrain, color: "#FBBF24" },
        { name: "Team Collaboration", icon: FaUsers, color: "#60A5FA" },
        { name: "Communication", icon: FaComments, color: "#34D399" },
        { name: "Time Management", icon: FaRegClock, color: "#F87171" },
        { name: "Adaptability", icon: FaSync, color: "#A78BFA" },
        { name: "Creativity", icon: FaLightbulb, color: "#FCD34D" },
      ],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="relative py-24 px-6 bg-[#0a0a0a] overflow-hidden">
      {/* Background Glow */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[500px] h-[500px] 
          bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 
          rounded-full blur-3xl opacity-15"
      />

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] 
          bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 
          rounded-full blur-3xl opacity-15"
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-extrabold text-red-500 mb-16"
        >
          My Technical <span className="text-white">Skills</span>
        </motion.h2>

        <div className="space-y-16">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="p-10 rounded-2xl bg-white/5 backdrop-blur-lg 
                border border-white/10 shadow-lg"
            >
              <h3 className="text-3xl font-semibold text-center text-red-400 mb-10">
                {category.title}
              </h3>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map(({ name, icon: Icon, color }) => (
                  <motion.div
                    key={name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.22 }}
                    className="flex flex-col items-center justify-center h-28 
                      rounded-xl bg-gradient-to-br from-white/10 to-white/5 
                      border border-white/10 shadow-md text-center"
                  >
                    <Icon size={36} color={color} className="mb-3" />
                    <span className="text-sm font-medium text-gray-300">
                      {name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
