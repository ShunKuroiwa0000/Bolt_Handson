import React from 'react';
import { Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="pt-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Contact</h2>
      <div className="max-w-xl mx-auto text-center">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/ShunKuroiwa0000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="w-6 h-6 mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;