import React from 'react';

const MolecularPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
    <defs>
      {/* Define different atom types with vibrant gradients */}
      <radialGradient id="carbonGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="#4A90E2" />
        <stop offset="100%" stopColor="#1A5FB4" />
      </radialGradient>
      
      <radialGradient id="oxygenGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="#E74C3C" />
        <stop offset="100%" stopColor="#C0392B" />
      </radialGradient>
      
      <radialGradient id="nitrogenGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="#9B59B6" />
        <stop offset="100%" stopColor="#8E44AD" />
      </radialGradient>
      
      <radialGradient id="metalGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="#3498DB" />
        <stop offset="100%" stopColor="#2980B9" />
      </radialGradient>
      
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      
      {/* Pattern for crystal structures and molecules */}
      <pattern id="molecular-grid" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
        {/* Benzene ring structure */}
        <polygon 
          points="100,60 130,80 130,120 100,140 70,120 70,80" 
          fill="none" 
          stroke="#3498DB" 
          strokeWidth="1.5"
        />
        
        {/* Carbon atoms in benzene */}
        <circle cx="100" cy="60" r="5" fill="url(#carbonGradient)" filter="url(#glow)" />
        <circle cx="130" cy="80" r="5" fill="url(#carbonGradient)" filter="url(#glow)" />
        <circle cx="130" cy="120" r="5" fill="url(#carbonGradient)" filter="url(#glow)" />
        <circle cx="100" cy="140" r="5" fill="url(#carbonGradient)" filter="url(#glow)" />
        <circle cx="70" cy="120" r="5" fill="url(#carbonGradient)" filter="url(#glow)" />
        <circle cx="70" cy="80" r="5" fill="url(#carbonGradient)" filter="url(#glow)" />
        
        {/* Oxygen atom with bond */}
        <circle cx="155" cy="80" r="6" fill="url(#oxygenGradient)" filter="url(#glow)" />
        <line x1="130" y1="80" x2="149" y2="80" stroke="#3498DB" strokeWidth="2" />
        
        {/* Nitrogen atom with bond */}
        <circle cx="100" cy="35" r="6" fill="url(#nitrogenGradient)" filter="url(#glow)" />
        <line x1="100" y1="60" x2="100" y2="41" stroke="#3498DB" strokeWidth="2" />
        
        {/* Double bond representation */}
        <line x1="130" y1="82" x2="130" y2="118" stroke="#3498DB" strokeWidth="2" />
        <line x1="127" y1="82" x2="127" y2="118" stroke="#3498DB" strokeWidth="2" />
        
        {/* Hydrogen atoms (smaller) */}
        <circle cx="135" cy="120" r="2.5" fill="#ECF0F1" stroke="#3498DB" strokeWidth="0.5" />
        <circle cx="105" cy="140" r="2.5" fill="#ECF0F1" stroke="#3498DB" strokeWidth="0.5" />
        
        {/* Octahedral structure (replacing DNA) */}
        <circle cx="180" cy="100" r="7" fill="url(#metalGradient)" filter="url(#glow)" />
        
        {/* Octahedral bonds */}
        <line x1="180" y1="100" x2="180" y2="70" stroke="#3498DB" strokeWidth="1.5" />
        <line x1="180" y1="100" x2="180" y2="130" stroke="#3498DB" strokeWidth="1.5" />
        <line x1="180" y1="100" x2="155" y2="100" stroke="#3498DB" strokeWidth="1.5" />
        <line x1="180" y1="100" x2="205" y2="100" stroke="#3498DB" strokeWidth="1.5" />
        <line x1="180" y1="100" x2="195" y2="115" stroke="#3498DB" strokeWidth="1.5" />
        <line x1="180" y1="100" x2="165" y2="85" stroke="#3498DB" strokeWidth="1.5" />
        
        {/* Oxygen atoms at octahedral vertices */}
        <circle cx="180" cy="70" r="4" fill="url(#oxygenGradient)" filter="url(#glow)" />
        <circle cx="180" cy="130" r="4" fill="url(#oxygenGradient)" filter="url(#glow)" />
        <circle cx="155" cy="100" r="4" fill="url(#oxygenGradient)" filter="url(#glow)" />
        <circle cx="4" cy="100" r="4" fill="url(#oxygenGradient)" filter="url(#glow)" />
        <circle cx="195" cy="115" r="4" fill="url(#oxygenGradient)" filter="url(#glow)" />
        <circle cx="165" cy="85" r="4" fill="url(#oxygenGradient)" filter="url(#glow)" />
        
        {/* Tetrahedral structure */}
        <circle cx="40" cy="160" r="6" fill="url(#metalGradient)" filter="url(#glow)" />
        
        {/* Tetrahedral bonds */}
        <line x1="40" y1="160" x2="20" y2="140" stroke="#3498DB" strokeWidth="1.5" />
        <line x1="40" y1="160" x2="60" y2="140" stroke="#3498DB" strokeWidth="1.5" />
        <line x1="40" y1="160" x2="20" y2="180" stroke="#3498DB" strokeWidth="1.5" />
        <line x1="40" y1="160" x2="60" y2="180" stroke="#3498DB" strokeWidth="1.5" />
        
        {/* Corner atoms for tetrahedral */}
        <circle cx="20" cy="140" r="4" fill="url(#nitrogenGradient)" filter="url(#glow)" />
        <circle cx="60" cy="140" r="4" fill="url(#nitrogenGradient)" filter="url(#glow)" />
        <circle cx="20" cy="180" r="4" fill="url(#nitrogenGradient)" filter="url(#glow)" />
        <circle cx="60" cy="180" r="4" fill="url(#nitrogenGradient)" filter="url(#glow)" />
        
        {/* Square planar structure */}
        <circle cx="120" cy="170" r="6" fill="url(#metalGradient)" filter="url(#glow)" />
        
        {/* Square planar bonds */}
        <line x1="120" y1="170" x2="100" y2="170" stroke="#3498DB" strokeWidth="1.5" />
        <line x1="120" y1="170" x2="140" y2="170" stroke="#3498DB" strokeWidth="1.5" />
        <line x1="120" y1="170" x2="120" y2="150" stroke="#3498DB" strokeWidth="1.5" />
        <line x1="120" y1="170" x2="120" y2="190" stroke="#3498DB" strokeWidth="1.5" />
        
        {/* Corner atoms for square planar */}
        <circle cx="100" cy="170" r="4" fill="url(#carbonGradient)" filter="url(#glow)" />
        <circle cx="140" cy="170" r="4" fill="url(#carbonGradient)" filter="url(#glow)" />
        <circle cx="120" cy="150" r="4" fill="url(#carbonGradient)" filter="url(#glow)" />
        <circle cx="120" cy="190" r="4" fill="url(#carbonGradient)" filter="url(#glow)" />
        
        {/* Crystal lattice connections */}
        <line x1="40" y1="160" x2="70" y2="120" stroke="#3498DB" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="100" y1="170" x2="100" y2="140" stroke="#3498DB" strokeWidth="1" strokeOpacity="0.5" />
        
        {/* Additional crystalline structure - octahedral corner */}
        <circle cx="15" cy="30" r="6" fill="url(#metalGradient)" filter="url(#glow)" />
        <line x1="15" y1="30" x2="35" y2="30" stroke="#3498DB" strokeWidth="1.5" />
        <line x1="15" y1="30" x2="15" y2="50" stroke="#3498DB" strokeWidth="1.5" />
        <line x1="15" y1="30" x2="5" y2="20" stroke="#3498DB" strokeWidth="1.5" />
        <circle cx="35" cy="30" r="4" fill="url(#oxygenGradient)" filter="url(#glow)" />
        <circle cx="15" cy="50" r="4" fill="url(#oxygenGradient)" filter="url(#glow)" />
        <circle cx="5" cy="20" r="4" fill="url(#oxygenGradient)" filter="url(#glow)" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#molecular-grid)"/>
  </svg>
);

export default MolecularPattern;