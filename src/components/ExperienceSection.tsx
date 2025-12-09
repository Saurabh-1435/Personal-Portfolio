"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    title: "Software Engineer (Java)",
    company: "AccureSoft Technologies",
    period: "October 2024 — Present",
    description: [
      "Design, develop, and maintain Java-based applications aligned with business requirements.",
      "Write clean, efficient, and reusable code following best practices and coding standards.",
      "Troubleshoot, debug, and resolve technical issues to ensure high performance.",
      "Collaborate with cross-functional teams to deliver high-quality software solutions.",
      "Conduct unit testing and participate in code reviews for quality and reliability.",
      "Stay updated with the latest Java frameworks, tools, and technologies."
    ],
  },

  {
    title: "Software Developer Intern",
    company: "Pawar Technology Services",
    period: "8 Months Internship",
    description: [
      "Worked on real-world frontend and backend development tasks using React and Java.",
      "Built responsive UI components and collaborated on API integration.",
      "Improved understanding of full-stack workflows, debugging, version control, and deployment.",
      "Gained hands-on experience in scalable web application development."
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-transparent">
      <div className="container mx-auto max-w-5xl">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white">
            My <span className="text-red-500">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-gray-700 pl-10 space-y-16">

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="relative glassmorphism p-8 rounded-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >

              {/* Timeline dot */}
              <div className="absolute -left-5 top-4 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_10px_2px_rgba(255,0,0,0.6)]"></div>

              <h3 className="text-2xl font-semibold text-white mb-1">
                {item.title}
              </h3>

              <p className="text-red-400 text-sm font-medium">
                {item.company}
              </p>

              <p className="text-gray-400 text-sm mb-4">{item.period}</p>

              <ul className="space-y-2">
                {item.description.map((point, i) => (
                  <li key={i} className="text-gray-300 text-[15px] leading-relaxed flex">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
