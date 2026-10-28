import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

import chatappImg from '../assets/projects/D-agency-1.jpg';
import dashboardImg from '../assets/projects/interior-2.jpg';
import dentalImg from '../assets/projects/dental-bar.jpg'; // or correct file name
import agencyImg from '../assets/projects/D-agency-3.png'
import PortfolioImg from '../assets/projects/Portfolio.jpg';

// import billingImg from '../assets/projects/D-agency-2.jpg';
import shilpkar from '../assets/projects/shilpkar.jpg';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
  
{
  title: "Portfolio",
  description:
    "🚀 Modern & Responsive Full Stack Developer Portfolio — crafted with ⚛️ React (TSX), 🌱 Spring Boot, 🧠 TypeScript. Showcases projects, skills, experience, and contact — built by Saurabh Prakash Lakhan..",
  tech: ["React", "JSX", "Tailwind CSS"],
  category: "React",
  github: "https://github.com/Saurabh-1435/Portfolio", // <-- replace with actual repo if different
  demo: "https://portfolio-personal-new.netlify.app/",              // <-- replace with actual live demo link
  image: PortfolioImg, // Make sure you import this at the top
  video: "/videos/Portfolio.mp4", // Place your hover video in public/videos
    },
 

    {
      title: "Shilpkar",
      description:
        "✨ Shilpkar is a modern interior-design platform built with React and Vite 🏡, offering: 🔧 Modular Components for rapid UI assembly 📱 Responsive Layouts optimized for all devices 🎨 Theming Support (light & dark modes) ⚡ Vite-Powered fast development & builds",
      tech: ["React", "JSX", "CSS"],
      category: "Frontend",
      github: "https://github.com/Saurabh-1435/Shilpkar",
      demo: "https://shilpkar.netlify.app/",
      image: shilpkar,
      video: "/videos/shilpkar-1.mp4",
    },
    {
      title: "Digital-Agency",
      description:
        "Creative digital agency delivering innovative design, web development, and marketing solutions for modern brands.",
      tech: ["React", "TSX", "Tailwind Css"],
      category: "React",
      github: "https://github.com/Saurabh-1435/digital-agency-04",
      demo: "https://digital-agency-04.netlify.app/",
      image: chatappImg,
      video: "/videos/agency-1.mp4",
    },
    // {
    //   title: "Digital-Agency No-2",
    //   description:
    //     "Professional digital agency platform featuring web solutions, branding, and client showcases.",
    //   tech: ["React", "TSX", "Tailwind Css"],
    //   category: "React",
    //   github: "#",
    //   demo: "#",
    //   image: billingImg,
    //   video: "/videos/agency2.mp4",
    // },
    {
      title: "Interior Website.",
      description:
        "Elegant interior design website showcasing projects, services, and client testimonials.",
      tech: ["React", "TSX", "Tailwind Css"],
      category: "React",
      github:
        "https://github.com/Saurabh-1435/furniture-collection--Using-ReactsJs-and-Tailwind-Css.",
      demo: "https://furnitures-collection.netlify.app/",
      image: dashboardImg,
      video: "/videos/interior-1.mp4",
    },

          {
      title: "Digital Agency Website.",
      description:
        "Empowering brands with cutting-edge design, powerful development, and strategic marketing for a digital-first world.",
      tech: ["React", "TSX", "Tailwind Css"],
      category: "React",
      github:
        "https://github.com/Saurabh-1435/Digital-agency-03",
      demo: "https://ditital-agency-03.netlify.app/",
      image: agencyImg,
      video: "/videos/agency-3.mp4",
    },




  ];

  const filters = ['All', 'Frontend', 'React'];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            My <span className="text-red-500">Projects</span>
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterName) => (
            <Button
              key={filterName}
              variant={filter === filterName ? 'default' : 'outline'}
              onClick={() => setFilter(filterName)}
              className={
                filter === filterName
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
              }
            >
              {filterName}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="glassmorphism rounded-lg overflow-hidden hover-glow group transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image + Video Wrapper */}
              <div className="h-72 overflow-hidden relative group">
                {/* Static image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover absolute top-0 left- group-hover:opacity-0 transition-opacity duration-500"
                />

                {/* Video on hover */}
                {project.video && (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github !== '#' ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      disabled
                      className="border-gray-500 text-gray-500 cursor-not-allowed"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  <Button
                    size="sm"
                    className="bg-red-500 hover:bg-red-600 text-white"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default ProjectsSection;
