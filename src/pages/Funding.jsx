import React, { useState } from 'react';
import { BookOpen, Code, Users, Award, FileText, Database, Mail, Github, Linkedin, Book, Menu, X } from 'lucide-react';
import InfoPanel from '../components/InfoPanel';

  const Funding = () => (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Research Funding</h2>
      <div className="space-y-6">
        {/* Example funding */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-2">Realistic Modeling of Large-Scale Porous Materials using Machine-Learning-Assisted Molecular Dynamics</h3>
          <p className="text-gray-600 mb-2">Otto A. Malm Foundation, 3300€, 01/01/2024 - 31/12/2024</p>
          <p className="text-gray-700">The project primary funding is for conference related expenses</p>
        </div>
      </div>
      <hr className="my-8 border-gray-200" />
        <InfoPanel />
        <div className="h-8" />
    </div>
  );

export default Funding;
