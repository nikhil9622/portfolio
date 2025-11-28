import type { Metadata } from 'next';
import SkillBadge from '@/components/sections/SkillBadge';
import { skills, getSkillsByCategory } from '@/lib/data/skills';
import { Code, Shield, Brain, Database, Cloud, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Skills | Nikhil Chandan',
  description: 'My technical skills in cybersecurity, programming, and machine learning',
};

const categoryIcons = {
  language: Code,
  security: Shield,
  ml: Brain,
  database: Database,
  cloud: Cloud,
  tool: Wrench,
};

const categoryTitles = {
  language: 'Programming Languages',
  security: 'Security Tools',
  ml: 'Machine Learning & AI',
  database: 'Databases',
  cloud: 'Cloud Platforms',
  tool: 'Tools & Technologies',
};

export default function SkillsPage() {
  const categories = ['language', 'security', 'ml', 'database', 'cloud', 'tool'] as const;

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="heading-1 mb-6">Technical Skills</h1>
          <p className="body-text text-xl">
            A comprehensive overview of my technical expertise across cybersecurity, 
            programming, and machine learning
          </p>
        </div>

        {/* Skills by Category */}
        {categories.map((category) => {
          const categorySkills = getSkillsByCategory(category);
          const Icon = categoryIcons[category];

          return (
            <div key={category} className="mb-16">
              <div className="flex items-center space-x-3 mb-8">
                <Icon className="text-primary" size={32} />
                <h2 className="heading-2">{categoryTitles[category]}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {categorySkills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    category={skill.category}
                    proficiency={skill.proficiency}
                    description={skill.description}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {/* Proficiency Legend */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Proficiency Levels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-2 bg-gradient-to-r from-primary to-secondary rounded-full" style={{ width: '25%' }} />
                <span className="text-sm text-gray-600 dark:text-gray-400">Beginner</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-2 bg-gradient-to-r from-primary to-secondary rounded-full" style={{ width: '50%' }} />
                <span className="text-sm text-gray-600 dark:text-gray-400">Intermediate</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-2 bg-gradient-to-r from-primary to-secondary rounded-full" style={{ width: '75%' }} />
                <span className="text-sm text-gray-600 dark:text-gray-400">Advanced</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-2 bg-gradient-to-r from-primary to-secondary rounded-full" style={{ width: '100%' }} />
                <span className="text-sm text-gray-600 dark:text-gray-400">Expert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
