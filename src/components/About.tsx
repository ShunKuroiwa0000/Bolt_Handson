import React from 'react';
import { Code, Briefcase, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="pt-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-lg text-gray-600 mb-12">
          こんにちは。IT系の学科に6年所属し、現在は企業で転職活動中です。
          フロントエンド開発に情熱を持ち、ユーザー体験の向上に貢献したいと考えています。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl">
            <Code className="w-8 h-8 mx-auto mb-4 text-blue-500" />
            <h3 className="font-semibold mb-2">専門性と興味分野</h3>
            <p className="text-gray-600">フロントエンド開発に特化したいと考えています</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl">
            <Briefcase className="w-8 h-8 mx-auto mb-4 text-blue-500" />
            <h3 className="font-semibold mb-2">主要なスキル</h3>
            <p className="text-gray-600">Python を中心としたバックエンド開発</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl">
            <Heart className="w-8 h-8 mx-auto mb-4 text-blue-500" />
            <h3 className="font-semibold mb-2">個人的な背景</h3>
            <p className="text-gray-600">IT系の学科での6年間の経験を活かし、新しい挑戦を求めています</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;