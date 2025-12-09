"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const AboutSection = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Make sure this file is in the public folder
    link.download = "Saurabh_Prakash_Lakhan_Resume.pdf";
    link.click();
  };

  return (
    <section id="about" className="py-20 px-6 bg-[#0A0A0A]">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            About <span className="text-red-500">Me</span>
          </h2>
        </div>

        <div className="space-y-10">
          {/* About Me */}
          <div className="glassmorphism p-8 rounded-lg hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
              About Me
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I am a passionate Full Stack Developer with expertise in building scalable web applications.
              My journey in software development has been fueled by curiosity, continuous learning, and
              the desire to create high-quality digital experiences using modern technologies.
            </p>
          </div>

          {/* What Drives Me */}
          <div className="glassmorphism p-8 rounded-lg hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
              What Drives Me
            </h3>
            <p className="text-gray-300 leading-relaxed">
              The intersection of creativity and technology motivates me. I constantly explore new frameworks,
              design patterns, and architectural techniques to stay ahead in modern development and deliver
              meaningful, efficient, and visually appealing solutions.
            </p>
          </div>

          {/* Resume Button */}
          <div className="flex justify-center mt-8">
            <Button
              onClick={handleResumeDownload}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
