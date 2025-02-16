import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import MolecularPattern from './MolecularPattern';
import SocialLink from './SocialLink';

const InfoPanel = () => (
  <div className="w-full relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 mt-12 overflow-hidden">
    {/* Animated gradient background */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 animate-gradient"></div>

    {/* Molecular pattern overlay */}
    <MolecularPattern />

    <div className="relative">
      <div className="max-w-4xl mx-auto py-12 px-4">
        {/* Glowing orb decorations */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="flex flex-wrap justify-center gap-6">
          {/* ORCID */}
          <SocialLink
            href="https://orcid.org/0000-0002-7793-3306"
            title="ORCID Profile"
          >
            <img
              src="https://info.orcid.org/wp-content/uploads/2019/11/orcid_32x32.png"
              alt="ORCID"
              className="w-8 h-8"
            />
          </SocialLink>

          {/* Google Scholar */}
          <SocialLink
            href="https://scholar.google.com/citations?user=kKUFATIAAAAJ&hl=en"
            title="Google Scholar"
            className="text-[#4285f4]"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
            </svg>
          </SocialLink>

          {/* Email */}
          <SocialLink
            href="mailto:ouail.zakary@oulu.fi"
            title="Email"
          >
            <Mail className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors duration-300" />
          </SocialLink>

          {/* ResearchGate */}
          <SocialLink
            href="https://www.researchgate.net/profile/Ouail-Zakary"
            title="ResearchGate"
            className="text-[#00ccbb]"
          >
            <div className="font-bold text-3xl leading-none tracking-tighter group-hover:text-[#00ccbb]/80">
              R<sup className="text-2xl">G</sup>
            </div>
          </SocialLink>

          {/* GitHub */}
          <SocialLink
            href="https://github.com/ozakary"
            title="GitHub"
          >
            <Github className="w-8 h-8 text-white group-hover:text-gray-300 transition-colors duration-300" />
          </SocialLink>

          {/* LinkedIn */}
          <SocialLink
            href="https://www.linkedin.com/in/ouail-zakary-a63a521b9/"
            title="LinkedIn"
            className="text-[#0077b5]"
          >
            <Linkedin className="w-8 h-8 group-hover:text-[#0077b5]/80 transition-colors duration-300" />
          </SocialLink>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </div>
  </div>
);

export default InfoPanel;