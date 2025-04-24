import React from 'react';

interface SkillsProps {
  darkMode: boolean;
}

interface Skill {
  name: string;
  percent: number;
  color: string;
}

const SkillsSection: React.FC<SkillsProps> = ({ darkMode }) => {
  const languages: Skill[] = [
    { name: 'C++', percent: 85, color: 'bg-blue-500' },
    { name: 'Java', percent: 80, color: 'bg-orange-500' },
    { name: 'Python', percent: 75, color: 'bg-yellow-500' },
    { name: 'JavaScript', percent: 90, color: 'bg-green-500' },
    { name: 'PHP', percent: 65, color: 'bg-purple-500' },
    { name: 'C', percent: 70, color: 'bg-red-500' },
  ];

  const frameworks: Skill[] = [
    { name: 'React.js', percent: 90, color: 'bg-blue-400' },
    { name: 'Node.js', percent: 80, color: 'bg-green-600' },
    { name: 'Express.js', percent: 75, color: 'bg-gray-500' },
    { name: 'Redux', percent: 70, color: 'bg-purple-400' },
  ];

  const tools: Skill[] = [
    { name: 'Git/GitHub', percent: 85, color: 'bg-gray-700' },
    { name: 'Docker', percent: 70, color: 'bg-blue-600' },
    { name: 'Postman', percent: 75, color: 'bg-orange-500' },
    { name: 'VS Code', percent: 95, color: 'bg-blue-500' },
    { name: 'Linux', percent: 75, color: 'bg-yellow-600' },
    { name: 'Windows', percent: 90, color: 'bg-sky-500' },
    { name: 'Jenkins', percent: 65, color: 'bg-red-500' },
  ];

  const databases: Skill[] = [
    { name: 'MySQL', percent: 80, color: 'bg-blue-400' },
    { name: 'MongoDB', percent: 75, color: 'bg-green-500' },
  ];

  const courses: string[] = [
    'Data Structures',
    'Algorithm Design and Analysis',
    'Graph Algorithms',
    'Database Management System',
    'Object Oriented Programming',
    'Operating System',
    'Computer Networks',
  ];

  const renderSkillBar = (skill: Skill) => (
    <div key={skill.name} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span>{skill.percent}%</span>
      </div>
      <div className={`w-full h-2 bg-gray-200 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
        <div 
          className={`h-full rounded-full ${skill.color}`} 
          style={{ width: `${skill.percent}%`, transition: 'width 1s ease-in-out' }}
        ></div>
      </div>
    </div>
  );

  return (
    <section 
      id="skills" 
      className={`py-20 ${
        darkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`p-6 rounded-lg shadow-lg ${
            darkMode ? 'bg-slate-800' : 'bg-white'
          }`}>
            <h3 className="text-xl font-bold mb-4 text-blue-500">Programming Languages</h3>
            {languages.map(renderSkillBar)}
          </div>
          
          <div className={`p-6 rounded-lg shadow-lg ${
            darkMode ? 'bg-slate-800' : 'bg-white'
          }`}>
            <h3 className="text-xl font-bold mb-4 text-green-500">Frameworks</h3>
            {frameworks.map(renderSkillBar)}
          </div>
          
          <div className={`p-6 rounded-lg shadow-lg ${
            darkMode ? 'bg-slate-800' : 'bg-white'
          }`}>
            <h3 className="text-xl font-bold mb-4 text-orange-500">Tools</h3>
            {tools.map(renderSkillBar)}
          </div>
          
          <div className={`p-6 rounded-lg shadow-lg ${
            darkMode ? 'bg-slate-800' : 'bg-white'
          }`}>
            <h3 className="text-xl font-bold mb-4 text-purple-500">Databases</h3>
            {databases.map(renderSkillBar)}
            
            <h3 className="text-xl font-bold mb-4 mt-8 text-red-500">Courses</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {courses.map((course, index) => (
                <div 
                  key={index} 
                  className={`p-2 rounded ${
                    darkMode ? 'bg-slate-700' : 'bg-gray-100'
                  } text-sm`}
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;