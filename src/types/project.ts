export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  features?: string[];
  category: 'security' | 'ml' | 'ai' | 'web' | 'blockchain' | 'other';
  featured: boolean;
  date: string;
}
