import React from 'react';
import { Github as GitHub, Linkedin, Mail, Phone } from 'lucide-react';

interface HeroSectionProps {
  darkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ darkMode }) => {
  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center justify-center ${
        darkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="animate-fadeIn">
            <p className="text-blue-500 font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Binit Kumar Pandey
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-300 mb-6">
              Computer Science Student & Web Developer
            </h2>
            <p className={`mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm passionate about building web applications, solving algorithms, and creating meaningful projects.
              Currently pursuing my Bachelor's in Computer Science at Lovely Professional University.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a 
                href="https://github.com/BinItpandey09" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300"
              >
                <GitHub size={18} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/binit-pandey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:vnitpandey05@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
            
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;