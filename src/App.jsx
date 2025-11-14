import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MolecularBackground from './components/MolecularBackground';
import NavButton from './components/NavButton';
import About from './pages/About';
import Publications from './pages/Publications';
import Conferences from './pages/Conferences';
import Code from './pages/Code';
import Funding from './pages/Funding';
import Collaborators from './pages/Collaborators';

const App = () => {
  const [activeTab, setActiveTab] = useState('about');

  const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    return (
      <nav className="bg-gray-900 text-white fixed w-full top-0 z-50 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-50" />
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        
        <div className="relative container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Ouail Zakary
            </h1>
    
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-2">
              {[
                ['About', 'about'],
                ['Publications', 'publications'],
                ['Conferences', 'conferences'],
                ['Code', 'code'],
                ['Funding', 'funding'],
                ['Collaborators', 'collaborators']
              ].map(([label, id]) => (
                <NavButton
                  key={id}
                  id={id}
                  label={label}
                  activeTab={activeTab}
                  onClick={() => setActiveTab(id)}
                />
              ))}
            </div>
    
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
    
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {[
                ['About', 'about'],
                ['Publications', 'publications'],
                ['Conferences', 'conferences'],
                ['Code', 'code'],
                ['Funding', 'funding'],
                ['Collaborators', 'collaborators']
              ].map(([label, id]) => (
                <button
                  key={id}
                  className={`block w-full text-left px-4 py-2 rounded mb-2 ${
                    activeTab === id ? 'bg-blue-600' : 'hover:bg-gray-700'
                  }`}
                  onClick={() => {
                    setActiveTab(id);
                    setMobileMenuOpen(false);
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Bottom border gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </nav>
    );
  };


  const TabContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'publications':
        return <Publications />;
      case 'conferences':
        return <Conferences />;
      case 'code':
        return <Code />;
      case 'funding':
        return <Funding />;
      case 'collaborators':
        return <Collaborators />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Add molecular background */}
      <MolecularBackground />
      
      {/* Keep existing structure */}
      {Navigation()}
      <div className="relative z-10 pt-20 lg:pt-20 px-4 pb-12">
        <TabContent />
      </div>
    </div>
  );
};

export default App;
