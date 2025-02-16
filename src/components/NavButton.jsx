import React from 'react';

const NavButton = ({ id, label, activeTab, onClick }) => (
  <button
    onClick={onClick}
    className={`relative px-4 py-2 rounded-lg transition-all duration-200 
      ${activeTab === id 
        ? 'bg-blue-600 text-white shadow-lg' 
        : 'hover:bg-gray-800 hover:text-blue-400'
      } group overflow-hidden`}
  >
    {/* Animated background effect */}
    <span className={`absolute inset-0 bg-gradient-to-r from-blue-600/50 to-blue-400/50 
      opacity-0 group-hover:opacity-100 transition-opacity duration-300
      ${activeTab === id ? 'opacity-100' : ''}`} 
    />
    
    {/* Button text */}
    <span className="relative z-10">{label}</span>
    
    {/* Bottom highlight */}
    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform 
      transition-transform duration-200 ${activeTab === id ? 'scale-x-100' : 'scale-x-0'}`}
    />
  </button>
);

export default NavButton;