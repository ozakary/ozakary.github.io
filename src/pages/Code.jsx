import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import InfoPanel from '../components/InfoPanel';
import ProjectCard from '../components/ProjectCard';

  const Code = () => {
    const projects = [
      {
        titleHtml: "data-Xe_at_CC3_at_TBA",
        descriptionHtml: "This is the supporting code for the manuscript “Equivariant Neural Networks Reveal How Host–Guest Interactions Shape 129Xe NMR in Porous Liquids”.",
        technologies: ["Shell", "Python"],
        github: "https://github.com/ozakary/data-Xe_at_CC3_at_TBA",
        type: "Research Code & Data Analysis"
      },
      {
        titleHtml: "Lammps-Kokkos-Mace_Mahti-CSC",
        descriptionHtml: "A recipe for the installation of LAMMPS with Kokkos GPU acceleration and MACE model for ML interatomic potential support on the Mahti CSC supercomputer.",
        technologies: ["Shell", "Python"],
        github: "https://github.com/ozakary/Lammps-Kokkos-Mace_Mahti-CSC",
        type: "Research Code & Data Analysis"
      },
      {
        titleHtml: "ClusterProbe",
        descriptionHtml: "A Python tool for analyzing the local environment around Xenon atoms in molecular clusters and identifying anomalous structures based on coordination number thresholds.",
        technologies: ["Python"],
        github: "https://github.com/ozakary/TrajSlicer",
        type: "Research Code & Data Analysis"
      },
      {
        titleHtml: "TrajSlicer",
        descriptionHtml: "A versatile Python tool for converting LAMMPS dump files to XYZ format and sampling molecular dynamics trajectories with precise frame control.",
        technologies: ["Python"],
        github: "https://github.com/ozakary/TrajSlicer",
        type: "Research Code & Data Analysis"
      },      
      {
        titleHtml: "NMR-VASP",
        descriptionHtml: "The VASP NMR Parameter Calculator extracts and processes NMR data from VASP output files (OUTCAR) that the standard VASP processing doesn't provide directly. This tool is particularly useful for researchers working with NMR computations in material science.",
        technologies: ["Python", "VASP"],
        github: "https://github.com/ozakary/NMR-VASP",
        type: "Research Code & Data Analysis"
      },
      {
        titleHtml: "ozakary.github.io",
        descriptionHtml: "This is my personal academic portfolio website showcasing my research work in computational chemistry. The website includes information about my publications, research focus, and academic contributions.",
        technologies: ["JavaScript", "CSS", "HTML"],
        github: "https://github.com/ozakary/ozakary.github.io",
        type: "Research Code & Data Analysis"
      },
      {
        titleHtml: "data-RbM2O5F",
        descriptionHtml: "This is the Supporting Dataset for the manuscript “Revealed Preferential Short-Range Anion Ordering in Disordered RbM2O5F (M = Nb, Ta) Pyrochlore-Type Oxyfluorides”.",
        technologies: ["Python", "Shell", "F*", "VASP", "Supercell", "ASE"],
        github: "https://github.com/ozakary/data-RbM2O5F",
        type: "Research Code & Data Analysis"
      },
      {
        titleHtml: "data-NaMO2F2",
        descriptionHtml: "This is the Supporting Dataset for the manuscript “Different Magnitudes of Second-Order Jahn-Teller Effect in Isostructural NaMO<sub>2</sub>F<sub>2</sub> (M = Nb, Ta) Oxyfluorides”.",
        technologies: ["Python", "Shell", "F*", "VASP"],
        github: "https://github.com/ozakary/data-NaMO2F2",
        type: "Research Code & Data Analysis"
      },
      {
        titleHtml: "water-pimd-simulations",
        descriptionHtml: "This is Exercise N°4 from the Computational Physics and Chemistry 2025 course.",
        technologies: ["Python", "Shell", "Jupyter Notebook", "I-PI", "LAMMPS"],
        github: "https://github.com/ozakary/water-pimd-simulations",
        type: "Code for University Courses"
      },
    ];

    return (
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Software & Code</h2>
        <div className="space-y-8">
          {["Research Code & Data Analysis", "Code for University Courses"].map(category => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects
                  .filter(project => project.type === category)
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </div>
          ))}
        </div>
        <hr className="my-8 border-gray-200" />
        <InfoPanel />
        <div className="h-8" />        
      </div>
    );
  };

export default Code;
