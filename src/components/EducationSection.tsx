const EducationSection = () => {
  const education = [
   {
      title: "Full Stack Development Course",
      institution: "Testing Shastra, Pune",
      period: "2024",
      description:
        "Covered React, Spring Boot, Git, testing, and deployment workflows.",
      icon: "💻",
    },
    {
      title: "Bachelor of Engineering (Computer Engineering)",
      institution: "North Maharashtra University, Jalgaon",
      period: "2021–2024",
      description:
        "Focused on full-stack development, DSA, and software architecture. Built real-world applications and participated in coding contests.",
      icon: "🎓",
    },
  
    {
      title: "HSC (Science Stream)",
      institution: "DDSP College, Erandol",
      period: "2019–2020",
      description: "Strong foundation in mathematics, logic, and core sciences.",
      icon: "📚",
    },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-dark-matter-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            Academic <span className="text-red-500">Journey</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-red-400 to-red-300"></div>

          <div className="space-y-12">
            {education.map((item, index) => (
              <div key={item.title} className="relative flex items-start space-x-8">
                {/* Timeline dot with icon */}
                <div className="relative flex-shrink-0 mt-6">
                  <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-black"></div>
                  <div className="absolute -left-4 -top-4 w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className="glassmorphism p-6 rounded-lg hover-glow flex-1 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-red-500 font-medium bg-red-500/10 px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                      {item.period}
                    </span>
                  </div>
                  <h4 className="text-gray-300 font-medium mb-3 flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                    {item.institution}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
