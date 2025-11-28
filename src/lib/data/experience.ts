import { Experience } from '@/types/experience';

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Team Lead',
    organization: 'Live-in-Labs Program - Assam',
    type: 'leadership',
    startDate: '2024-01',
    endDate: '2024-06',
    current: false,
    description: 'Led a multidisciplinary team in rural development project focusing on technology implementation and community engagement in Assam.',
    achievements: [
      'Successfully led team of 12 members across 6-month rural immersion program',
      'Implemented technology solutions impacting 500+ community members',
      'Coordinated with local government and NGOs for project sustainability',
      'Presented findings at university symposium with 200+ attendees',
    ],
    skills: ['Leadership', 'Project Management', 'Community Engagement', 'Presentation'],
    location: 'Assam, India',
  },
  {
    id: '2',
    role: 'Mentor',
    organization: 'FACT Club (Forensics and Cyber Security)',
    type: 'leadership',
    startDate: '2023-06',
    current: true,
    description: 'Mentoring junior students in cybersecurity concepts, tools, and practical applications. Organizing workshops and CTF competitions.',
    achievements: [
      'Mentored 30+ students in cybersecurity fundamentals',
      'Organized 5 hands-on workshops on penetration testing and digital forensics',
      'Led team to top 10 finish in national CTF competition',
      'Developed training curriculum for security tool usage',
    ],
    skills: ['Mentoring', 'Cybersecurity', 'Teaching', 'CTF', 'Workshop Planning'],
    location: 'Chennai, India',
  },
  {
    id: '3',
    role: 'Core Team Member',
    organization: 'Tantrostav (Technical Festival)',
    type: 'volunteer',
    startDate: '2023-09',
    endDate: '2024-03',
    current: false,
    description: 'Core organizing team member for annual technical festival, managing event coordination and participant engagement.',
    achievements: [
      'Coordinated 15+ technical events with 1000+ participants',
      'Managed logistics and sponsorship worth ₹5L+',
      'Led marketing campaign reaching 10K+ students across India',
      'Ensured smooth execution of 3-day technical festival',
    ],
    skills: ['Event Management', 'Coordination', 'Marketing', 'Teamwork'],
    location: 'Chennai, India',
  },
];

// Helper function to get current experiences
export const getCurrentExperiences = (): Experience[] => {
  return experiences.filter(exp => exp.current);
};

// Helper function to get experiences by type
export const getExperiencesByType = (type: 'work' | 'leadership' | 'volunteer'): Experience[] => {
  return experiences.filter(exp => exp.type === type);
};

// Helper function to sort experiences by date
export const getSortedExperiences = (): Experience[] => {
  return [...experiences].sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });
};
