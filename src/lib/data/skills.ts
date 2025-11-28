export interface Skill {
  name: string;
  category: 'language' | 'security' | 'ml' | 'database' | 'cloud' | 'tool';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
  description?: string;
}

export const skills: Skill[] = [
  // Programming Languages
  {
    name: 'Python',
    category: 'language',
    proficiency: 'advanced',
    description: 'Primary language for ML, security automation, and scripting',
  },
  {
    name: 'C++',
    category: 'language',
    proficiency: 'intermediate',
    description: 'System programming and performance-critical applications',
  },
  {
    name: 'JavaScript',
    category: 'language',
    proficiency: 'intermediate',
    description: 'Web development and full-stack applications',
  },
  {
    name: 'TypeScript',
    category: 'language',
    proficiency: 'intermediate',
    description: 'Type-safe JavaScript for large-scale applications',
  },
  {
    name: 'SQL',
    category: 'language',
    proficiency: 'advanced',
    description: 'Database queries and data manipulation',
  },

  // Security Tools
  {
    name: 'Wireshark',
    category: 'security',
    proficiency: 'advanced',
    description: 'Network protocol analysis and packet inspection',
  },
  {
    name: 'Burp Suite',
    category: 'security',
    proficiency: 'advanced',
    description: 'Web application security testing',
  },
  {
    name: 'OWASP ZAP',
    category: 'security',
    proficiency: 'intermediate',
    description: 'Automated security scanning and penetration testing',
  },
  {
    name: 'Nmap',
    category: 'security',
    proficiency: 'advanced',
    description: 'Network discovery and security auditing',
  },
  {
    name: 'Metasploit',
    category: 'security',
    proficiency: 'intermediate',
    description: 'Penetration testing framework',
  },

  // Machine Learning & AI
  {
    name: 'TensorFlow',
    category: 'ml',
    proficiency: 'advanced',
    description: 'Deep learning model development and deployment',
  },
  {
    name: 'Scikit-learn',
    category: 'ml',
    proficiency: 'advanced',
    description: 'Classical machine learning algorithms',
  },
  {
    name: 'PyTorch',
    category: 'ml',
    proficiency: 'intermediate',
    description: 'Deep learning research and experimentation',
  },
  {
    name: 'NumPy',
    category: 'ml',
    proficiency: 'advanced',
    description: 'Numerical computing and array operations',
  },
  {
    name: 'Pandas',
    category: 'ml',
    proficiency: 'advanced',
    description: 'Data manipulation and analysis',
  },
  {
    name: 'Matplotlib',
    category: 'ml',
    proficiency: 'advanced',
    description: 'Data visualization and plotting',
  },

  // Databases
  {
    name: 'MySQL',
    category: 'database',
    proficiency: 'advanced',
    description: 'Relational database management',
  },
  {
    name: 'MongoDB',
    category: 'database',
    proficiency: 'intermediate',
    description: 'NoSQL document database',
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    proficiency: 'intermediate',
    description: 'Advanced relational database',
  },

  // Cloud Platforms
  {
    name: 'AWS',
    category: 'cloud',
    proficiency: 'intermediate',
    description: 'Cloud infrastructure and services',
  },
  {
    name: 'Azure',
    category: 'cloud',
    proficiency: 'beginner',
    description: 'Microsoft cloud platform',
  },
  {
    name: 'Google Cloud',
    category: 'cloud',
    proficiency: 'beginner',
    description: 'GCP services and infrastructure',
  },

  // Tools & Technologies
  {
    name: 'Git',
    category: 'tool',
    proficiency: 'advanced',
    description: 'Version control and collaboration',
  },
  {
    name: 'Docker',
    category: 'tool',
    proficiency: 'intermediate',
    description: 'Containerization and deployment',
  },
  {
    name: 'Linux',
    category: 'tool',
    proficiency: 'advanced',
    description: 'System administration and scripting',
  },
  {
    name: 'VS Code',
    category: 'tool',
    proficiency: 'expert',
    description: 'Primary development environment',
  },
];

// Helper functions
export const getSkillsByCategory = (category: Skill['category']): Skill[] => {
  return skills.filter(skill => skill.category === category);
};

export const getSkillsByProficiency = (proficiency: Skill['proficiency']): Skill[] => {
  return skills.filter(skill => skill.proficiency === proficiency);
};

export const getTopSkills = (limit: number = 10): Skill[] => {
  const proficiencyOrder = { expert: 4, advanced: 3, intermediate: 2, beginner: 1 };
  return [...skills]
    .sort((a, b) => proficiencyOrder[b.proficiency] - proficiencyOrder[a.proficiency])
    .slice(0, limit);
};
