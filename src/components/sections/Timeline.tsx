'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/types/experience';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

interface TimelineProps {
  experiences: Experience[];
}

export default function Timeline({ experiences }: TimelineProps) {
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

  const typeColors = {
    work: 'bg-blue-500',
    leadership: 'bg-purple-500',
    volunteer: 'bg-green-500',
  };

  return (
    <div className="relative">
      {/* Vertical line (desktop) */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-secondary" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Content */}
            <div className="w-full md:w-5/12 card">
              {/* Type Badge */}
              <div className="mb-3">
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full text-white ${
                    typeColors[exp.type]
                  }`}
                >
                  {exp.type.toUpperCase()}
                </span>
              </div>

              {/* Role & Organization */}
              <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                {exp.role}
              </h3>
              <h4 className="text-lg font-semibold text-primary mb-3">
                {exp.organization}
              </h4>

              {/* Date & Location */}
              <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>{formatDateRange(exp.startDate, exp.endDate, exp.current)}</span>
                </div>
                {exp.location && (
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="body-text mb-4">{exp.description}</p>

              {/* Achievements */}
              <div className="space-y-2">
                {exp.achievements.slice(0, 3).map((achievement, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <ChevronRight
                      size={16}
                      className="text-primary mt-1 flex-shrink-0"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline dot (desktop) */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-dark" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
