import type { Metadata } from 'next';
import Image from 'next/image';
import { EDUCATION, CERTIFICATIONS } from '@/lib/constants';
import { Award, BookOpen, Download } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Me | Nikhil Chandan',
  description: 'Learn more about my journey in cybersecurity and AI research',
};

export default function AboutPage() {
  return (
    <div className="section-padding">
      <div className="container-custom max-w-6xl">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Pioneering the Future of Secure and Intelligent Systems
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Bio */}
          <div className="lg:col-span-2 space-y-6 text-gray-600 dark:text-gray-400">
            <p>
              Hello! I'm <span className="text-primary font-semibold">Nikhil Chandan</span>, an aspiring technologist, a Final year student pursuing my Bachelor 
              of Technology in Cyber Security at Amrita Vishwa Vidyapeetham. My journey is 
              fueled by a profound passion for leveraging cutting-edge technologies, 
              particularly in AI/ML and advanced security systems, to solve complex real-world 
              problems.
            </p>
            
            <p>
              From building intelligent chatbots for endpoint risk remediation to developing 
              deep learning models for drug response prediction, I thrive on pushing the 
              boundaries of what's possible. My leadership roles in academic and community 
              initiatives have further honed my ability to collaborate, innovate, and drive impact.
            </p>
            
            <p>
              I am deeply committed to a proactive approach to cybersecurity. I believe in not 
              just detecting threats but actively remediating them using intelligent automation. 
              Beyond the code, I love to lead and collaborate, fostering a culture of innovation 
              among my peers.
            </p>

            <div className="pt-4">
              <Link 
                href="/resume" 
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-lg font-semibold"
              >
                Download Resume
              </Link>
            </div>
          </div>

          {/* Right Column - Image Placeholder and Info */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg overflow-hidden aspect-square border-2 border-gray-700">
              <Image 
                src="/Nikhil.jpg" 
                alt="Nikhil Chandan"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="text-primary" size={20} />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Education</h3>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-gray-900 dark:text-white">B.Tech CSE (Cyber Security)</p>
                <p className="text-gray-600 dark:text-gray-400">Amrita Vishwa Vidyapeetham</p>
                <p className="text-gray-500 dark:text-gray-500">2022 - 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
