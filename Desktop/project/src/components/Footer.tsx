import React from 'react';
import { Github as GitHub, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer 
      className={`py-10 ${
        darkMode ? 'bg-slate-800 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              Binit<span className="text-blue-500">.dev</span>
            </h2>
            <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Computer Science Student & Aspiring Web Developer
            </p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="https://github.com/BinItpandey09" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-2 rounded-full transition-colors ${
                darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <GitHub size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/binit-pandey" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-2 rounded-full transition-colors ${
                darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:vinitpandey858@gmail.com"
              className={`p-2 rounded-full transition-colors ${
                darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+919507442952"
              className={`p-2 rounded-full transition-colors ${
                darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <Phone size={20} />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className={`p-3 rounded-full transition-colors ${
              darkMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-500 hover:bg-blue-600'
            } text-white`}
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            &copy; {new Date().getFullYear()} Binit Kumar Pandey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
