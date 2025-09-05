import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const AboutSection = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Change this later to a public file URL
    link.download = 'Saurabh_Prakash_Lakhan_Resume.pdf';
    link.click();
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            About <span className="text-red-500">Us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glassmorphism p-8 rounded-lg hover-glow">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                About Me
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I am a passionate Full Stack Developer with expertise in building scalable web applications. 
                My journey in software development has been driven by curiosity and a constant desire to learn 
                and implement cutting-edge technologies.
              </p>
            </div>

            <div className="glassmorphism p-8 rounded-lg hover-glow">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                What Drives Me
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The intersection of technology and creativity fascinates me. I'm constantly exploring 
                new frameworks, design patterns, and architectural approaches to stay at the forefront 
                of modern development practices.
              </p>
            </div>

            <div className="flex justify-center">
              <Button 
                onClick={handleResumeDownload}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg hover-glow flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </Button>
            </div>
          </div>

          {/* Updated Internship Section */}
          <div className="glassmorphism p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-6">Internship Experience</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-medium">Software Developer Intern at Pawar Technology and Services</h4>
                  <p className="text-gray-400 text-sm">
                    Currently working as a Software Developer Intern where I am actively contributing to both frontend and backend development. I am involved in building responsive user interfaces using React, managing backend logic, and integrating APIs. This role is helping me strengthen my practical understanding of full-stack development workflows in a real-world environment.
                  </p>
                  <a
                    href="https://pawartechnologyservices.com/" // replace with actual company link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:underline text-sm block mt-2"
                  >
                    Visit Company Website →
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
