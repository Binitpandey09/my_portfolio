import React, { useState } from 'react';

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  github?: string;
  live?: string;
}

const ProjectsSection: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Space War Game',
      description: 'A nostalgic arcade-style space shooter game offering an engaging and fun retro gaming experience.',
      technologies: ['C++', 'SFML'],
      features: [
        'Developed and engineered the game using C++ and the SFML framework',
        'Optimized game performance to handle up to 50+ concurrent in-game objects smoothly',
        'Integrated advanced features like physics, sprites, preloader, groups, animations, input controls, sound effects, and a high-score display'
      ],
      image: 'https://images.pexels.com/photos/2694037/pexels-photo-2694037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      github: 'https://github.com/BinItpandey09'
    },
    {
      id: 2,
      title: 'N-Queen Visualizer',
      description: 'An interactive visualizer that demonstrates the N-Queen problem and its solution using backtracking algorithms.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'DOM', 'Backtracking'],
      features: [
        'Developed an N-Queen Visualizer using HTML, CSS, and JavaScript to demonstrate backtracking algorithms',
        'Constructed a real-time N-Queen Visualizer that highlighted valid and invalid queen placements',
        'Integrated synchronous animation controls with speed adjustment for enhanced user experience'
      ],
      image: 'https://images.pexels.com/photos/163427/chess-figure-chess-pieces-black-163427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      github: 'https://github.com/BinItpandey09'
    },
    {
      id: 3,
      title: 'Car Parking System',
      description: 'An online system for managing car parking spaces, improving booking efficiency by 60%.',
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript'],
      features: [
        'Built with React.js for a responsive user interface',
        'Implemented a booking system that improved efficiency by 60%',
        'Used Tailwind CSS for modern, responsive design'
      ],
      image: 'https://images.pexels.com/photos/9311484/pexels-photo-9311484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      github: 'https://github.com/BinItpandey09'
    },
    {
      id: 4,
      title: 'Quiz Application',
      description: 'An online quiz application with various categories and difficulty levels.',
      technologies: ['React.js', 'JavaScript', 'API Integration'],
      features: [
        'Developed a React app using JavaScript and external API',
        'Implemented multiple quiz categories and difficulty levels',
        'Created a user-friendly interface with real-time scoring'
      ],
      image: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      github: 'https://github.com/BinItpandey09'
    }
  ];

  const toggleProject = (id: number) => {
    if (activeProject === id) {
      setActiveProject(null);
    } else {
      setActiveProject(id);
    }
  };

  return (
    <section 
      id="projects" 
      className={`py-20 ${
        darkMode ? 'bg-slate-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">My Projects</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 cursor-pointer ${
                darkMode ? 'bg-slate-700' : 'bg-gray-50'
              }`}
              onClick={() => toggleProject(project.id)}
            >
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="h-full w-full bg-black bg-opacity-30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold text-center px-4">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded dark:bg-blue-900 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                
                {activeProject === project.id && (
                  <div className="mt-4 animate-fadeIn">
                    <h4 className="font-bold mb-2">Key Features:</h4>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex gap-4 mt-4">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                          onClick={(e) => e.stopPropagation()}
                        >
                          GitHub
                        </a>
                      )}
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                )}
                
                <div className="text-center mt-4">
                  <button 
                    className={`text-blue-500 hover:underline ${activeProject === project.id ? 'font-bold' : ''}`}
                  >
                    {activeProject === project.id ? 'Show Less' : 'Show More'}
                  </button>
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