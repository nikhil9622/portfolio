'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/types/experience';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const formatDateRange = (start: string, end?: string, current?: boolean) => {
    const startDate = new Date(start).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
    
    if (current) return `${startDate} - Present`;
    if (!end) return startDate;
    
    const endDate = new Date(end).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
    
    return `${startDate} - ${endDate}`;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
    >
      {/* Title */}
      <h3 className="text-xl font-medium mb-1 text-gray-900 dark:text-white">
        {experience.role}
      </h3>
      
      {/* Organization */}
      <p className="text-sm text-primary font-semibold mb-4">
        {experience.organization}
      </p>

      {/* Date & Location */}
      <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-1">
          <Calendar size={14} />
          <span>{formatDateRange(experience.startDate, experience.endDate, experience.current)}</span>
        </div>
        {experience.location && (
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{experience.location}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="body-text text-sm mb-4">
        {experience.description}
      </p>

      {/* Achievements */}
      <div className="space-y-2 flex-grow">
        {experience.achievements.slice(0, 3).map((achievement, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-primary mt-1">›</span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {achievement}
            </span>
          </div>
        ))}
      </div>
    </motion.article>
  );
}
