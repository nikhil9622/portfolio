import type { Metadata } from 'next';
import { Download, Eye, FileText } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Resume | Nikhil Chandan',
  description: 'Download my resume and view my qualifications',
};

export default function ResumePage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="heading-1 mb-6">Resume</h1>
          <p className="body-text text-xl mb-8">
            Download my resume or view my qualifications below
          </p>
          
          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/Resume.pdf"
              download
              className="btn btn-primary flex items-center justify-center space-x-2"
            >
              <Download size={20} />
              <span>Download PDF</span>
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline flex items-center justify-center space-x-2"
            >
              <Eye size={20} />
              <span>View in Browser</span>
            </a>
          </div>
        </div>

        {/* Resume Preview */}
        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div className="card mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="text-primary" size={28} />
              <h2 className="heading-3">Education</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {EDUCATION.degree}
                </h3>
                <p className="text-lg text-primary">{EDUCATION.institution}</p>
                <p className="text-gray-600 dark:text-gray-400">{EDUCATION.duration}</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="card mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="text-primary" size={28} />
              <h2 className="heading-3">Certifications</h2>
            </div>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.name} className="border-l-4 border-primary pl-4">
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                  <p className="text-sm text-gray-500">Issued: {cert.date}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
