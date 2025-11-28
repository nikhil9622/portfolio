'use client';

import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  category: 'language' | 'security' | 'ml' | 'database' | 'cloud' | 'tool';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  description?: string;
}

const categoryColors = {
  language: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  security: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
  ml: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  database: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
  cloud: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20',
  tool: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
};

const proficiencyLevels = {
  beginner: 25,
  intermediate: 50,
  advanced: 75,
  expert: 100,
};

export default function SkillBadge({
  name,
  category,
  proficiency,
  description,
}: SkillBadgeProps) {
  const proficiencyPercentage = proficiencyLevels[proficiency];

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`relative p-4 rounded-lg border-2 ${categoryColors[category]} transition-all duration-300 group cursor-pointer`}
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold">{name}</h4>
        <span className="text-xs px-2 py-1 rounded-full bg-white/50 dark:bg-black/20">
          {proficiency}
        </span>
      </div>
      
      {/* Proficiency Bar */}
      <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${proficiencyPercentage}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
        />
      </div>

      {/* Description (shows on hover) */}
      {description && (
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
      )}
    </motion.div>
  );
}
