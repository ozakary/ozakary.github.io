import React from 'react';

const MolecularBackground = () => (
  <svg className="fixed inset-0 w-full h-full pointer-events-none opacity-[0.03] z-0" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="molecular-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        {/* Hexagonal molecular structure */}
        <circle cx="50" cy="50" r="2" fill="currentColor"/>
        <circle cx="20" cy="50" r="2" fill="currentColor"/>
        <circle cx="80" cy="50" r="2" fill="currentColor"/>
        <circle cx="35" cy="25" r="2" fill="currentColor"/>
        <circle cx="65" cy="25" r="2" fill="currentColor"/>
        <circle cx="35" cy="75" r="2" fill="currentColor"/>
        <circle cx="65" cy="75" r="2" fill="currentColor"/>
        
        {/* Chemical bonds */}
        <line x1="23" y1="50" x2="47" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2"/>
        <line x1="53" y1="50" x2="77" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2"/>
        <line x1="38" y1="28" x2="47" y2="47" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2"/>
        <line x1="62" y1="28" x2="53" y2="47" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2"/>
        <line x1="38" y1="72" x2="47" y2="53" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2"/>
        <line x1="62" y1="72" x2="53" y2="53" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#molecular-pattern)"/>
  </svg>
);

export default MolecularBackground;