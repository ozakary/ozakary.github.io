import React, { useState } from 'react';
import { BookOpen, Code, Users, Award, FileText, Database, Mail, Github, Linkedin, Book, Menu, X } from 'lucide-react';
import InfoPanel from '../components/InfoPanel';

  const Collaborators = () => (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Research Collaborators</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Example collaborator */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-2">Dr. Niraj Aryal</h3>
          <p className="text-gray-600 mb-2">Condensed Matter Physics and Materials Science Division, Brookhaven National Laboratory, Upton, New York 11973, USA.</p>
          <p className="text-gray-700">Postdocotal collaboration</p>
        </div>
      </div>
      <hr className="my-8 border-gray-200" />
        <InfoPanel />
        <div className="h-8" />
    </div>
  );

export default Collaborators;
