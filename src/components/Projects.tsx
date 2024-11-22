import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'タスク管理アプリ',
      description: 'チームメンバー間のタスク共有と進捗管理が簡単に行えるアプリケーション',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800&h=500',
      github: '#',
      live: '#',
    },
    {
      name: 'IoTホームセキュリティシステム',
      description: 'IoTデバイスを使用してホームセキュリティを強化するシステム',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800&h=500',
      github: '#',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="pt-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <Github className="w-5 h-5 mr-1" />
                  GitHub
                </a>
                <a
                  href={project.live}
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <ExternalLink className="w-5 h-5 mr-1" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;