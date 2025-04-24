import React from 'react';
import { BookOpen, Award, Code, Coffee } from 'lucide-react';

interface AboutSectionProps {
  darkMode: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ darkMode }) => {
  return (
    <section 
      id="about" 
      className={`py-20 ${
        darkMode ? 'bg-slate-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className={`p-8 rounded-lg shadow-lg ${
            darkMode ? 'bg-slate-700' : 'bg-gray-50'
          }`}>
            <p className={`mb-6 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm a Computer Science student at Lovely Professional University with a passion for web development, 
              algorithms, and problem-solving. I enjoy creating applications and games that are both functional and 
              engaging for users.
            </p>
            
            <p className={`mb-6 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              My journey in programming began during high school, and I've since developed expertise in various 
              languages and frameworks. I'm particularly interested in front-end development and algorithmic 
              challenges, as evidenced by my competitive programming achievements.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-full ${
                  darkMode ? 'bg-blue-500/20' : 'bg-blue-100'
                } flex items-center justify-center mb-3`}>
                  <BookOpen size={24} className="text-blue-500" />
                </div>
                <h3 className="font-medium text-center">Computer Science Student</h3>
              </div>
              
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-full ${
                  darkMode ? 'bg-green-500/20' : 'bg-green-100'
                } flex items-center justify-center mb-3`}>
                  <Code size={24} className="text-green-500" />
                </div>
                <h3 className="font-medium text-center">Web Developer</h3>
              </div>
              
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-full ${
                  darkMode ? 'bg-purple-500/20' : 'bg-purple-100'
                } flex items-center justify-center mb-3`}>
                  <Award size={24} className="text-purple-500" />
                </div>
                <h3 className="font-medium text-center">Problem Solver</h3>
              </div>
              
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-full ${
                  darkMode ? 'bg-orange-500/20' : 'bg-orange-100'
                } flex items-center justify-center mb-3`}>
                  <Coffee size={24} className="text-orange-500" />
                </div>
                <h3 className="font-medium text-center">Lifelong Learner</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;