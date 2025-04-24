import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? `${darkMode ? 'bg-slate-900/95 shadow-lg' : 'bg-white/95 shadow-md'}` 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>
              <span className="text-blue-500">PORTFOLIO</span>
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => scrollToSection('home')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                } hover:bg-opacity-20 transition-colors duration-200`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                } hover:bg-opacity-20 transition-colors duration-200`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                } hover:bg-opacity-20 transition-colors duration-200`}
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                } hover:bg-opacity-20 transition-colors duration-200`}
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('education')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                } hover:bg-opacity-20 transition-colors duration-200`}
              >
                Education
              </button>
              <button 
                onClick={() => scrollToSection('achievements')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                } hover:bg-opacity-20 transition-colors duration-200`}
              >
                Achievements
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                } hover:bg-opacity-20 transition-colors duration-200`}
              >
                Contact
              </button>
              <button 
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${
                  darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-200 text-gray-700'
                } hover:bg-opacity-80 transition-colors duration-200`}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>

          <div className="flex md:hidden items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-200 text-gray-700'
              } hover:bg-opacity-80 transition-colors duration-200`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md ${
                darkMode ? 'text-white' : 'text-gray-700'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection('home')}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                darkMode ? 'text-white' : 'text-gray-900'
              } w-full text-left`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                darkMode ? 'text-white' : 'text-gray-900'
              } w-full text-left`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                darkMode ? 'text-white' : 'text-gray-900'
              } w-full text-left`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                darkMode ? 'text-white' : 'text-gray-900'
              } w-full text-left`}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                darkMode ? 'text-white' : 'text-gray-900'
              } w-full text-left`}
            >
              Education
            </button>
            <button 
              onClick={() => scrollToSection('achievements')}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                darkMode ? 'text-white' : 'text-gray-900'
              } w-full text-left`}
            >
              Achievements
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                darkMode ? 'text-white' : 'text-gray-900'
              } w-full text-left`}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;