import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Ensure it's in public folder
    link.download = 'Saurabh_Prakash_Lakhan_Resume.pdf';
    link.click();
  };

  return (
    <section
      id="home"
  className="relative w-full h-screen bg-no-repeat bg-center flex items-center justify-center px-2 md:px-0"
      style={{
        backgroundImage: "url('/saurabh-bg-.jpg')" ,
          backgroundSize: "contain",
      }}// Replace with high-res image
    >
      {/* REMOVE the overlay for full image clarity */}
      {/* <div className="absolute inset-0 bg-black/60 z-0" /> */}

      {/* Content */}
      <div className="text-center z-10 max-w-3xl text-white py-12  backdrop-brightness-250 rounded-lg">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-orbitron font-black mb-4">
          Saurabh  <span className="text-red-500">Lakhan</span>
        </h1>
        <p className="text-lg sm:text-xl font-light mb-6">
          Full Stack Developer
        </p>
        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
          A passionate developer who loves building dynamic, scalable, and responsive web and mobile applications. Specialized in full-stack solutions using modern technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Button
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 text-base sm:text-lg"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            onClick={handleResumeDownload}
            className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-6 py-3 text-base sm:text-lg flex items-center space-x-2"
          >
            <Download className="w-5 h-5" />
            <span>Resume</span>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-3 text-base sm:text-lg"
          >
            Get in Touch
          </Button>
        </div>
      </div>

      {/* Scroll Icon */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="text-white w-6 h-6" />
      </div>
    </section>
  );
};

export default HeroSection;
