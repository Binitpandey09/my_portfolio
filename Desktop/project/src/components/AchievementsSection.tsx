import React from 'react';
import { Trophy, Award, Code, Star } from 'lucide-react';

interface AchievementsProps {
  darkMode: boolean;
}

interface CodingProfile {
  platform: string;
  username: string;
  rank: string;
  rating: string;
  icon: React.ReactNode;
  color: string;
  url: string;
}

const AchievementsSection: React.FC<AchievementsProps> = ({ darkMode }) => {
  const codingProfiles: CodingProfile[] = [
    {
      platform: 'CodeForces',
      username: 'binItpandey09',
      rank: 'Newbie',
      rating: 'Max Rating: 1120',
      icon: <Trophy size={24} />,
      color: 'bg-gray-500',
      url: 'https://codeforces.com/profile/binItpandey09'
    },
    {
      platform: 'CodeChef',
      username: 'binItpandey09',
      rank: '2-Star',
      rating: 'Max Rating: 1275',
      icon: <Star size={24} />,
      color: 'bg-yellow-500',
      url: 'https://www.codechef.com/users/binItpandey09'
    },
    {
      platform: 'LeetCode',
      username: 'binItpandey09',
      rank: 'Beginner',
      rating: 'Max Rating: 1459',
      icon: <Code size={24} />,
      color: 'bg-orange-500',
      url: 'https://leetcode.com/binit_pandey09/'
    },
    {
      platform: 'AtCoder',
      username: 'binItpandey09',
      rank: 'Beginner',
      rating: 'Max Rating: 130',
      icon: <Award size={24} />,
      color: 'bg-blue-500',
      url: 'https://atcoder.jp/users/binItpandey09'
    }
  ];

  const achievements = [
    "Solved around 500+ problems across different coding platforms",
    "One among Dean's top 10% students at university",
    "Completed Front-End Web Development Training with Excellence",
    "Created multiple projects with React.js and other technologies"
  ];

  return (
    <section 
      id="achievements" 
      className={`py-20 ${
        darkMode ? 'bg-slate-800 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Achievements</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className={`p-8 rounded-lg shadow-lg mb-12 ${
            darkMode ? 'bg-slate-700' : 'bg-gray-50'
          }`}>
            <h3 className="text-xl font-bold mb-6 text-center">Notable Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg flex items-start space-x-3 ${
                    darkMode ? 'bg-slate-800' : 'bg-white'
                  }`}
                >
                  <div className="mt-1">
                    <Trophy size={20} className="text-yellow-500" />
                  </div>
                  <p>{achievement}</p>
                </div>
              ))}
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-6 text-center">Coding Profiles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {codingProfiles.map((profile) => (
              <a 
                key={profile.platform} 
                href={profile.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-6 rounded-lg shadow-lg flex items-center space-x-4 transition-transform duration-300 hover:-translate-y-1 ${
                  darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className={`w-12 h-12 rounded-full ${profile.color} flex items-center justify-center text-white`}>
                  {profile.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{profile.platform}</h4>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {profile.username}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="font-medium">{profile.rank}</span>
                    <span className="text-sm text-gray-500">({profile.rating})</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
