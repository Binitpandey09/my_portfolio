import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  score: string;
  icon: React.ReactNode;
}

interface Training {
  id: number;
  title: string;
  organization: string;
  duration: string;
  description: string[];
}

const EducationSection: React.FC<EducationProps> = ({ darkMode }) => {
  const educations: Education[] = [
    {
      id: 1,
      institution: 'Lovely Professional University',
      degree: 'Bachelor of Technology in Computer Science',
      duration: 'August 2022 - Expected July 2026',
      location: 'Phagwara, Punjab, India',
      score: 'CGPA: 7.29',
      icon: <GraduationCap size={24} className="text-blue-500" />
    },
    {
      id: 2,
      institution: 'S.B. College',
      degree: 'Intermediate',
      duration: 'April 2020 - March 2022',
      location: 'Ara, Bihar, India',
      score: 'Percentage: 77.60%',
      icon: <BookOpen size={24} className="text-green-500" />
    },
    {
      id: 3,
      institution: "Jean Paul's High School",
      degree: 'Matriculation',
      duration: 'April 2019 - March 2020',
      location: 'Ara, Bihar, India',
      score: 'Percentage: 67.80%',
      icon: <Award size={24} className="text-orange-500" />
    }
  ];

  const trainings: Training[] = [
    {
      id: 1,
      title: 'Front-End Web Development Training',
      organization: 'Goalborii Tech Pvt. Ltd.',
      duration: 'June 2024 - July 2024 (7 Weeks)',
      description: [
        'Mastered HTML, CSS, JavaScript, and React.js through a 7-week course, building responsive web applications with Bootstrap and Tailwind CSS',
        'Developed a React app using JavaScript and Spoonacular API, applying a responsive interface on Netlify',
        'Built an online Quiz app and a Car Parking System with React.js and Tailwind CSS, improving user interaction and boosting booking efficiency by 60%'
      ]
    }
  ];

  const certificates = [
    {
      id: 1,
      title: 'Data Structure & Algorithms using C and C++',
      provider: 'UDEMY',
      date: 'December 2023'
    },
    {
      id: 2,
      title: 'Programming in C++ - A Hands-on Introduction Specialization',
      provider: 'Coursera',
      date: 'November 2023'
    },
    {
      id: 3,
      title: 'IBM DevOps and Software Engineering',
      provider: 'Coursera',
      date: 'December 2024'
    }
  ];

  return (
    <section 
      id="education" 
      className={`py-20 ${
        darkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Education & Training</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-blue-500">Education</h3>
            <div className="relative border-l-2 border-blue-500 pl-8 pb-8 ml-6">
              {educations.map((edu, index) => (
                <div 
                  key={edu.id} 
                  className={`mb-10 ${index === educations.length - 1 ? 'mb-0' : ''}`}
                >
                  <div className="absolute -left-6 w-12 h-12 rounded-full flex items-center justify-center border-2 border-blue-500 ${darkMode ? 'bg-slate-800' : 'bg-white'}">
                    {edu.icon}
                  </div>
                  <div className={`p-6 rounded-lg shadow-lg ${
                    darkMode ? 'bg-slate-800' : 'bg-white'
                  }`}>
                    <h4 className="text-xl font-bold">{edu.institution}</h4>
                    <p className="text-blue-500 font-medium">{edu.degree}</p>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{edu.duration}</p>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{edu.location}</p>
                    <p className="font-medium mt-2">{edu.score}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center text-green-500">Training & Certificates</h3>
            
            <div className="mb-12">
              {trainings.map((training) => (
                <div 
                  key={training.id} 
                  className={`p-6 rounded-lg shadow-lg mb-8 ${
                    darkMode ? 'bg-slate-800' : 'bg-white'
                  }`}
                >
                  <h4 className="text-xl font-bold">{training.title}</h4>
                  <p className="text-green-500 font-medium">{training.organization}</p>
                  <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{training.duration}</p>
                  
                  <ul className="list-disc pl-5 space-y-2">
                    {training.description.map((desc, idx) => (
                      <li key={idx} className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-center text-purple-500">Certificates</h3>
            
            <div className="grid grid-cols-1 gap-4">
              {certificates.map((cert) => (
                <div 
                  key={cert.id} 
                  className={`p-4 rounded-lg shadow ${
                    darkMode ? 'bg-slate-800' : 'bg-white'
                  }`}
                >
                  <h4 className="font-bold">{cert.title}</h4>
                  <div className="flex justify-between mt-2">
                    <p className="text-purple-500">{cert.provider}</p>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;