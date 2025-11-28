import type { Metadata } from 'next';
import ContactForm from '@/components/sections/ContactForm';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact | Nikhil Chandan',
  description: 'Get in touch with me for collaborations, opportunities, or inquiries',
};

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="heading-1 mb-6">Get In Touch</h1>
          <p className="body-text text-xl">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to collaborate. Feel free to reach out!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="heading-3 mb-8">Contact Information</h2>
            
            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                  <p className="text-gray-600 dark:text-gray-400">{PERSONAL_INFO.email}</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 rounded-lg">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                  <p className="text-gray-600 dark:text-gray-400">{PERSONAL_INFO.phone}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-bold mb-4 text-gray-900 dark:text-white">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-8 p-6 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
              <h3 className="font-bold mb-2 text-green-800 dark:text-green-400">
                Currently Available
              </h3>
              <p className="text-sm text-green-700 dark:text-green-300">
                I'm open to internship opportunities, research collaborations, and interesting 
                projects in cybersecurity and AI.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="heading-3 mb-8">Send Me a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
