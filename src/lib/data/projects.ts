import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Cancer Drug Response Prediction (AINN)',
    slug: 'cancer-drug-response-prediction',
    description: 'CNN + RNN model to predict LN_IC50, AUC, RMSE and Z-Score using GDSC & GENIE datasets with realtime patient pipeline.',
    longDescription: 'Deep learning system combining CNN and RNN architectures to predict cancer drug responses. Uses GDSC and GENIE datasets for training and provides real-time patient-specific predictions including LN_IC50, AUC, RMSE, and Z-Score metrics.',
    image: '/images/projects/drug-prediction.jpg',
    technologies: ['Python', 'CNN', 'RNN', 'Bioinformatics'],
    github: 'https://github.com/nikhil9622/Cancer-Drug-Response-Prediction-Using-AINN',
    category: 'ml',
    featured: true,
    date: '2024-01',
  },
  {
    id: '2',
    title: 'ZERA — Device Endpoint Security AI',
    slug: 'zera-security-chatbot',
    description: 'Security chatbot built with LangChain and LLaMA for endpoint diagnostics, automated incident response and remediation suggestions.',
    longDescription: 'AI-powered security chatbot designed for endpoint security management. Built with LangChain and LLaMA, ZERA provides automated diagnostics, incident response capabilities, and intelligent remediation suggestions for security teams.',
    image: '/images/projects/zera.jpg',
    technologies: ['LangChain', 'LLaMA', 'AI', 'Security', 'Agents'],
    github: 'https://github.com/nikhil9622/ZERA-Chatbot',
    category: 'security',
    featured: true,
    date: '2024-02',
  },
  {
    id: '3',
    title: 'LogSHIELD — Network Anomaly Detection',
    slug: 'logshield-anomaly-detection',
    description: 'Graph-based deep learning system for real-time log ingestion, anomaly detection and VAPT-ready reporting with GUI.',
    longDescription: 'Advanced network security system using graph neural networks for real-time log analysis. Features automated anomaly detection, VAPT-ready reporting, and an intuitive GUI for security monitoring and threat visualization.',
    image: '/images/projects/logshield.jpg',
    technologies: ['GNN', 'Logs', 'Anomaly'],
    category: 'security',
    featured: true,
    date: '2024-03',
  },
  {
    id: '4',
    title: 'Phishing Email Detector',
    slug: 'phishing-email-detector',
    description: 'NLP-powered classifier combining TF-IDF and BiLSTM for high-accuracy phishing email detection and URL analysis.',
    longDescription: 'Intelligent phishing detection system using natural language processing. Combines TF-IDF feature extraction with BiLSTM neural networks to identify malicious emails and analyze suspicious URLs with high accuracy.',
    image: '/images/projects/phishing-detection.jpg',
    technologies: ['NLP', 'BiLSTM'],
    category: 'security',
    featured: false,
    date: '2023-11',
  },
  {
    id: '5',
    title: 'Medichain (Ongoing)',
    slug: 'medichain',
    description: 'Blockchain-backed API for secure medical record exchange supporting role-based access, immutability, and audits.',
    longDescription: 'Blockchain-based medical records management system. Provides secure API for medical data exchange with role-based access control, immutable audit trails, and compliance with healthcare data privacy regulations.',
    image: '/images/projects/medichain.jpg',
    technologies: ['Blockchain', 'API'],
    github: 'https://github.com/nikhil9622/medichain2-api',
    category: 'blockchain',
    featured: true,
    date: '2024-11',
  },
  {
    id: '6',
    title: 'Stock Price Forecasting',
    slug: 'stock-price-forecasting',
    description: 'ARIMA + XGBoost pipeline with feature engineering, EDA and backtesting on major tech stocks.',
    longDescription: 'Time-series forecasting system for stock price prediction. Combines ARIMA and XGBoost models with comprehensive feature engineering, exploratory data analysis, and rigorous backtesting on major technology stocks.',
    image: '/images/projects/stock-forecast.jpg',
    technologies: ['Time-Series', 'XGBoost'],
    github: 'https://github.com/nikhil9622/invsto-stock-forecasting',
    category: 'ml',
    featured: false,
    date: '2023-09',
  },
  {
    id: '7',
    title: 'Employee Leave Tracker',
    slug: 'employee-leave-tracker',
    description: 'Responsive leave tracking system with request flow for employees and admin approval dashboard.',
    longDescription: 'Full-stack web application for employee leave management. Features responsive design, streamlined leave request workflow, and comprehensive admin dashboard for approval management and reporting.',
    image: '/images/projects/leave-tracker.jpg',
    technologies: ['HTML', 'Dashboard'],
    category: 'web',
    featured: false,
    date: '2023-07',
  },
];

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};
