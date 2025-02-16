import React from 'react';

// Molecular background pattern component
const MolecularPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="molecular-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        {/* Hexagonal structure */}
        <circle cx="50" cy="50" r="3" fill="white"/>
        <circle cx="20" cy="50" r="3" fill="white"/>
        <circle cx="80" cy="50" r="3" fill="white"/>
        <circle cx="35" cy="25" r="3" fill="white"/>
        <circle cx="65" cy="25" r="3" fill="white"/>
        <circle cx="35" cy="75" r="3" fill="white"/>
        <circle cx="65" cy="75" r="3" fill="white"/>

        {/* Bonds */}
        <line x1="23" y1="50" x2="47" y2="50" stroke="white" strokeWidth="1"/>
        <line x1="53" y1="50" x2="77" y2="50" stroke="white" strokeWidth="1"/>
        <line x1="38" y1="28" x2="47" y2="47" stroke="white" strokeWidth="1"/>
        <line x1="62" y1="28" x2="53" y2="47" stroke="white" strokeWidth="1"/>
        <line x1="38" y1="72" x2="47" y2="53" stroke="white" strokeWidth="1"/>
        <line x1="62" y1="72" x2="53" y2="53" stroke="white" strokeWidth="1"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#molecular-grid)"/>
  </svg>
);

export default MolecularPattern;