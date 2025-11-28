import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://nikhilchandan.dev'),
  title: 'Nikhil Chandan | Cyber Security & AI Researcher',
  description: 'Cyber Security student and AI researcher specializing in security automation, threat intelligence, and machine learning applications.',
  keywords: 'cyber security, AI researcher, machine learning, security automation, threat intelligence, penetration testing, ethical hacking, python developer',
  authors: [{ name: 'Belide Nikhil Chandan' }],
  openGraph: {
    title: 'Nikhil Chandan | Cyber Security & AI Researcher',
    description: 'Cyber Security student and AI researcher specializing in security automation and machine learning',
    type: 'website',
    url: 'https://nikhilchandan.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nikhil Chandan | Cyber Security & AI Researcher',
    description: 'Cyber Security student and AI researcher',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
