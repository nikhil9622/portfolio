'use client';

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
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
        {project.title}
      </h3>
      
      {/* Category */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        {project.category.toUpperCase()} · {project.technologies.slice(0, 2).join(' · ')}
      </p>

      {/* Description */}
      <p className="body-text text-sm mb-6 flex-grow">
        {project.description}
      </p>

      {/* Bottom section with tags and link */}
      <div className="flex items-center justify-between mt-auto">
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub Link */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:shadow-sm hover:border-primary dark:hover:border-primary transition-colors"
          >
            <Github size={14} /> Code
          </a>
        )}
      </div>
    </motion.article>
  );
}
