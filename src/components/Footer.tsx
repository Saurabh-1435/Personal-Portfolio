
import { Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="font-orbitron font-bold text-xl text-white">
              Saurabh Prakash <span className="text-red-500">Lakhan</span>
            </h3>
            <p className="text-gray-400 mt-2">
              © 2025 Saurabh Lakhan. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/saurabh-lakhan-015777327/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-red-500/20 rounded-lg hover:bg-red-500 transition-colors group"
            >
              <Linkedin className="w-5 h-5 text-red-500 group-hover:text-white" />
            </a>
            <a 
              href="https://github.com/Saurabh-1435"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-red-500/20 rounded-lg hover:bg-red-500 transition-colors group"
            >
              <Github className="w-5 h-5 text-red-500 group-hover:text-white" />
            </a>

            <a 
              href="https://www.instagram.com/iam_dev45/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-red-500/20 rounded-lg hover:bg-red-500 transition-colors group"
            >
              <Instagram className="w-5 h-5 text-red-500 group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
