"use client";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "HTML", icon: "🌐" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "CSS", icon: "🎭" },
        { name: "JavaScript", icon: "⚡" },
        { name: "Bootstrap", icon: "🅱️" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", icon: "☕" },
        { name: "Spring Boot", icon: "🍃" },
        { name: "Hibernate", icon: "🔄" },
        { name: "JDBC", icon: "🔗" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "Firebase", icon: "🔥" },
        { name: "MySQL", icon: "🐬" },
        { name: "MongoDB", icon: "🍃" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: "📝" },
        { name: "GitHub", icon: "🐙" },
        { name: "VS Code", icon: "💻" },
        { name: "STS", icon: "🔧" },
        { name: "Eclipse", icon: "🌙" },
        { name: "Postman", icon: "📮" },
        // { name: "Figma", icon: "🎨" }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", icon: "🧩" },
        { name: "Team Collaboration", icon: "🤝" },
        { name: "Communication", icon: "💬" },
        // { name: "Critical Thinking", icon: "🎯" },
        { name: "Time Management", icon: "⏰" },
        { name: "Adaptability", icon: "🔄" },
        { name: "Creativity", icon: "✨" }
      ]
    }
  ];

  // Animation Variants
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const categoryVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  const skillVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 10 }
    }
  };

  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Floating gradient background blobs */}
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 rounded-full mix-blend-overlay blur-3xl opacity-20"
      />
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 rounded-full mix-blend-overlay blur-3xl opacity-20"
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl md:text-5xl font-extrabold text-red-500 mb-16"
        >
          My Technical <span >Skills</span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-16"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={categoryVariant}
              className="p-10 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg relative"
            >
              {/* Category Title */}
              <h3 className="text-3xl font-semibold text-center text-red-400 mb-10">
                {category.title}
              </h3>

              {/* Skills Grid */}
              <motion.div
                variants={container}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-6"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariant}
                    whileHover={{
                      scale: 1.08,
                      rotate: 2,
                      boxShadow: "0px 0px 20px rgba(255,255,255,0.25)"
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    className="relative group flex flex-col items-center justify-center h-36 w-full rounded-xl 
                               bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-md 
                               cursor-pointer overflow-hidden text-center"
                  >
                    {/* Hover Glow */}
                    <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                                    bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 blur-lg transition duration-500" />

                    {/* Icon */}
                    <span className="relative text-4xl mb-3 group-hover:scale-125 transition-transform duration-500">
                      {skill.icon}
                    </span>

                    {/* Skill Name */}
                    <span className="relative text-sm font-sm text-gray-400 group-hover:text-white transition-colors duration-500">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
