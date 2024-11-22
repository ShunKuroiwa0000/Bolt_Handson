import React from 'react';
import { Code2, Database, Wrench, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code2 className="w-6 h-6" />,
      skills: ['HTML'],
    },
    {
      title: 'Backend',
      icon: <Database className="w-6 h-6" />,
      skills: ['Python'],
    },
    {
      title: 'Tools',
      icon: <Wrench className="w-6 h-6" />,
      skills: ['Git'],
    },
    {
      title: 'Other',
      icon: <Cloud className="w-6 h-6" />,
      skills: ['AWS'],
    },
  ];

  return (
    <section id="skills" className="pt-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-4 text-blue-500">
              {category.icon}
              <h3 className="text-xl font-semibold ml-2">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="flex items-center text-gray-600"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;