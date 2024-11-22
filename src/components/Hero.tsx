import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 text-center">
      <h1 className="text-6xl font-bold mb-6 gradient-text">黒岩舜</h1>
      <p className="text-xl text-gray-600 mb-8">ソフトウェアエンジニア</p>
      <a
        href="#contact"
        className="inline-flex items-center px-6 py-3 bg-[#5856D6] text-white rounded-full hover:bg-[#7A79E0] transition-colors"
      >
        お問い合わせ
        <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </section>
  );
};

export default Hero;