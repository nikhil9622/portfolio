import type { Metadata } from 'next';
import ProjectCard from '@/components/sections/ProjectCard';
import { projects, getProjectsByCategory } from '@/lib/data/projects';
import { useState } from 'react';

export const metadata: Metadata = {
  title: 'Projects | Nikhil Chandan',
  description: 'Explore my portfolio of cybersecurity and machine learning projects',
};

export default function ProjectsPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="heading-1 mb-6">Projects</h1>
          <p className="body-text text-xl">
            A showcase of my work in cybersecurity, machine learning, and software development
          </p>
        </div>

        {/* All Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
