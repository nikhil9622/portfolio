import { Testimonial } from '@/types/testimonial';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Rajesh Kumar',
    role: 'Professor',
    organization: 'Amrita Vishwa Vidyapeetham',
    content: 'Nikhil has demonstrated exceptional aptitude in both cybersecurity and machine learning. His work on the ZERA security chatbot shows innovative thinking and strong technical execution. He consistently goes above and beyond in his research projects.',
    rating: 5,
    date: '2024-01',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Project Coordinator',
    organization: 'Live-in-Labs Program',
    content: 'As team lead, Nikhil showed remarkable leadership skills and the ability to bridge technology with real-world community needs. His dedication to the project and team management capabilities made our Assam initiative a great success.',
    rating: 5,
    date: '2024-06',
  },
  {
    id: '3',
    name: 'Arun Menon',
    role: 'Senior Security Researcher',
    organization: 'CyberSec Labs',
    content: 'I had the opportunity to mentor Nikhil during a security workshop. His understanding of threat intelligence and ability to quickly grasp complex security concepts is impressive. He has a bright future in cybersecurity.',
    rating: 5,
    date: '2023-11',
  },
  {
    id: '4',
    name: 'Sneha Patel',
    role: 'FACT Club President',
    organization: 'Amrita Vishwa Vidyapeetham',
    content: 'Nikhil has been an invaluable mentor in our cybersecurity club. His workshops on penetration testing and CTF strategies have helped many students develop practical security skills. He explains complex topics in an accessible way.',
    rating: 5,
    date: '2023-09',
  },
  {
    id: '5',
    name: 'Karthik Reddy',
    role: 'Team Member',
    organization: 'Tantrostav Festival',
    content: 'Working with Nikhil on Tantrostav was a great experience. His organizational skills and ability to coordinate multiple events simultaneously ensured our technical festival was a huge success. A natural leader and team player.',
    rating: 5,
    date: '2024-03',
  },
];

// Helper function to get recent testimonials
export const getRecentTestimonials = (limit: number = 3): Testimonial[] => {
  return [...testimonials]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

// Helper function to get average rating
export const getAverageRating = (): number => {
  const ratings = testimonials.map(t => t.rating || 0);
  return ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
};
