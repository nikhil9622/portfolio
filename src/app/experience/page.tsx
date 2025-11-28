import type { Metadata } from 'next';
import ExperienceCard from '@/components/sections/ExperienceCard';
import { experiences, getSortedExperiences } from '@/lib/data/experience';

export const metadata: Metadata = {
  title: 'Experience | Nikhil Chandan',
  description: 'My professional experience and leadership roles',
};

export default function ExperiencePage() {
  const sortedExperiences = getSortedExperiences();

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="heading-1 mb-6">Experience</h1>
          <p className="body-text text-xl">
            My journey through various roles in leadership, and community service
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedExperiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
