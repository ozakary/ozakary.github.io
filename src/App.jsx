import React, { useState } from 'react';
import { BookOpen, Code, Users, Award, FileText, Database, Mail, Github, Linkedin } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('about');

  const Navigation = () => (
    <nav className="bg-gray-900 text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <h1 className="text-xl font-bold">Dr. Ouail Zakary</h1>
        <div className="flex space-x-4">
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
              onClick={() => setActiveTab(id)}
              className={`px-3 py-2 rounded transition ${
                activeTab === id ? 'bg-blue-600' : 'hover:bg-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const About = () => (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
          <img
            src="/api/placeholder/192/192"
            alt="Profile placeholder"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Dr. Ouail Zakary</h2>
          <p className="text-lg text-gray-600">Postdoctoral Researcher</p>
          <p className="text-gray-600">NMR Research Unit, University of Oulu</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="prose max-w-none">
        <h3 className="text-2xl font-bold mb-4">Research Focus</h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          My research focuses on developing advanced machine learning-driven approaches for modeling large-scale molecular systems under real physicochemical conditions. By integrating state-of-the-art quantum mechanics at the relativistic level and molecular dynamics simulations with atomistic machine learning, I aim to deliver highly predictive models for both structural and dynamic processes.
        </p>
        <p className="text-gray-700 leading-relaxed">
          A significant part of my work involves training graph neural networks, along with Kernel and Gaussian Process regression models, to develop machine learning interatomic potentials and machine learning-based NMR parameter models. These models enable long-timescale simulations, improving our ability to analyze experimental NMR data and predict new experimental outcomes for complex materials.
        </p>
      </div>
    </div>
  );

  const Publications = () => (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Publications</h2>
      <div className="space-y-6">
        {/* Example publication */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-2">Example Publication Title</h3>
          <p className="text-gray-600 mb-2">Authors, Journal Name (2024)</p>
          <p className="text-gray-700 mb-4">Brief description of the publication...</p>
          <div className="flex gap-4">
            <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
              <FileText className="w-4 h-4" /> PDF
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
              <Database className="w-4 h-4" /> DOI
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const Conferences = () => (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Conference Proceedings</h2>
      <div className="space-y-6">
        {/* Example conference */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-2">Conference Name</h3>
          <p className="text-gray-600 mb-2">Location, Date</p>
          <p className="text-gray-700">Presentation title and description...</p>
        </div>
      </div>
    </div>
  );

  const Code = () => (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Software & Code</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Example project */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-2">Project Name</h3>
          <p className="text-gray-700 mb-4">Description of the software project...</p>
          <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
            <Github className="w-4 h-4" /> View on GitHub
          </a>
        </div>
      </div>
    </div>
  );

  const Funding = () => (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Research Funding</h2>
      <div className="space-y-6">
        {/* Example funding */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-2">Grant Title</h3>
          <p className="text-gray-600 mb-2">Funding Agency, Amount, Duration</p>
          <p className="text-gray-700">Brief description of the funded project...</p>
        </div>
      </div>
    </div>
  );

  const Collaborators = () => (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Research Collaborators</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Example collaborator */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-2">Collaborator Name</h3>
          <p className="text-gray-600 mb-2">Institution</p>
          <p className="text-gray-700">Brief description of collaboration...</p>
        </div>
      </div>
    </div>
  );

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
      <Navigation />
      <div className="pt-24 px-4 pb-12">
        <TabContent />
      </div>
    </div>
  );
};

export default App;
