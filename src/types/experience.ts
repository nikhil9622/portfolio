export interface Experience {
  id: string;
  role: string;
  organization: string;
  type: 'work' | 'leadership' | 'volunteer';
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  skills: string[];
  location?: string;
}
