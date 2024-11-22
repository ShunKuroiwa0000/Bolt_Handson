import React from 'react';
import { Calendar, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'ソフトウェアエンジニア',
      company: 'ABCテクノロジー',
      period: '2023 - Present',
      description: '〇〇というアプリのシステムの設計に従事',
    },
    {
      title: '大規模システムのバックエンド開発',
      company: 'ABCテクノロジー',
      period: '2022 - 2023',
      description: '〇〇というアプリのシステムの設計に従事',
    },
  ];

  return (
    <section id="experience" className="pt-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Building2 className="w-4 h-4 mr-2" />
                  {exp.company}
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;