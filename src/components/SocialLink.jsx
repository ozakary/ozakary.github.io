import React from 'react';

const SocialLink = ({ href, title, children, className = "text-white" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative flex items-center justify-center w-12 h-12 rounded-lg
    bg-white/5 backdrop-blur-sm transform transition-all duration-300
    hover:bg-white/10 hover:scale-105 hover:-translate-y-1 ${className}`}
    title={title}
  >
    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/10 to-transparent opacity-0
      group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative">
      {children}
    </div>
    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
      bg-gray-900/90 text-white px-2 py-1 rounded text-xs opacity-0
      group-hover:opacity-100 transition-opacity duration-200 pointer-events-none
      backdrop-blur-sm border border-white/10">
      {title}
    </div>
  </a>
);

export default SocialLink;