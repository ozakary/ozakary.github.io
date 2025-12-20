import React, { useState } from 'react';
import { BookOpen, Code, Users, Award, FileText, Database, Mail, Github, Linkedin, Book, Menu, X } from 'lucide-react';
import InfoPanel from '../components/InfoPanel';
import MolecularPattern from '../components/MolecularPattern';

  const About = () => {
    const [selectedDegree, setSelectedDegree] = useState(null);
  
    const education = [
      {
        id: "phd",
        type: "Ph.D.",
        field: "Physics",
        title: "Structural Modeling of Oxygen-Fluorine Ordering in Transition Metal Inorganic Oxyfluorides",
        thesis: "https://theses.hal.science/tel-04412685/",
        defenseDetails: "https://theses.fr/2023LEMA1026",
        institution: "Le Mans Université (Le Mans, France)",
        period: "01/10/2020 - 08/12/2023",
        color: "bg-blue-50",
        committee: [
          {
            name: "Prof. Christian Bonhomme",
            role: "Referee",
            position: "Professor",
            institution: "Sorbonne Université (Paris)",
            links: {
              orcid: "0000-0003-0802-6961",
              scholar: "https://scholar.google.com/citations?user=OkH8acAAAAAJ&hl=en&oi=ao"
            }
          },
          {
            name: "Dr. Mathieu Allix",
            role: "Referee",
            position: "CNRS Research Director",
            institution: "CNRS CEMHTI (Orléans)",
            links: {
              orcid: "0000-0001-9317-1316",
              scholar: "#"
            }
          },
          {
            name: "Prof. Christel Gervais",
            role: "Chair",
            position: "Professor",
            institution: "Sorbonne Université (Paris)",
            links: {
              orcid: "0000-0001-7450-1738",
              scholar: "#"
            }
          },
          {
            name: "Dr. Thibault Charpentier",
            role: "Examiner",
            position: "CEA Research Director",
            institution: "CEA Paris-Saclay (Paris)",
            links: {
              orcid: "0000-0002-3034-1389",
              scholar: "https://scholar.google.com/citations?user=apNunY0AAAAJ&hl=en&oi=ao"
            }
          },
          {
            name: "Dr. Damien Dambournet",
            role: "Examiner",
            position: "Associate Professor",
            institution: "Sorbonne Université (Paris)",
            links: {
              orcid: "0000-0003-3831-2643",
              scholar: "#"
            }
          },
          {
            name: "Dr. Monique Body",
            role: "Supervisor",
            position: "Associate Professor",
            institution: "Le Mans Université (Le Mans)",
            links: {
              orcid: "0000-0002-5895-3731",
              scholar: "https://scholar.google.com/citations?user=sLCxmZIAAAAJ&hl=en&oi=ao"
            }
          },
          {
            name: "Prof. Christophe Legein",
            role: "Co-supervisor",
            position: "Professor",
            institution: "Le Mans Université (Le Mans)",
            links: {
              orcid: "0000-0001-7426-8817",
              scholar: "https://scholar.google.com/citations?user=Xo1Z9_4AAAAJ&hl=en&oi=ao"
            }
          }

          // Add other committee members
        ]
      },
      {
        id: "masters",
        type: "M.Sc.",
        field: "Applied Physics and Engineering Physics - Physics and Nanomaterials",
        institution: "Le Mans Université (Le Mans, France)",
        period: "01/09/2019 - 30/06/2020",
        color: "bg-green-50"
      },
      {
        id: "masters",
        type: "M.Sc.",
        field: "Physics of Materials and Nanomaterials",
        institution: "Hassan II University of Casablanca (Casablanca, Morocco)",
        period: "01/09/2018 - 30/06/2020",
        color: "bg-green-50"
      },
      {
        id: "bachelors",
        type: "B.Sc.",
        field: "Fundamental Physics",
        institution: "Hassan II University of Casablanca (Casablanca, Morocco)",
        period: "01/09/2015 - 30/06/2018",
        color: "bg-purple-50"
      }
    ];
    
    const news = [
      {
        date: "December 2025",
        title: "Attended the 39<sup>th</sup> Winter School in Theoretical Chemstry",
        content: "I recently attended the Helsinki Winter School in Theoretical Chemistry, which focused on \"<b>Electronic Structure Theory</b>\". The school was a highly enriching experience, featuring excellent lectures by leading researchers in the field. Topics covered ranged from full configuration interaction (CI) theory and Green’s functions to relativistic quantum mechanics and density functional theory (DFT).",    
        link: "http://www.chem.helsinki.fi/ws2025.html"
      },
      {
        date: "November 2025",
        title: "Article Featured as Supplementary Journal Cover",
        content: "Our recent paper \"<b>Equivariant Neural Networks Reveal How Host–Guest Interactions Shape <sup>129</sup>Xe NMR in Porous Liquids</b>\", published in <i><b>The Journal of Physical Chemistry Letters</b></i>, has been featured as a Supplementary Journal Cover!",    
        link: "https://pubs.acs.org/toc/jpclcd/16/46"
      },
      {
        date: "November 2025",
        title: "Article Published in The Journal of Physical Chemistry Letters",
        content: "Our research article, \"<b>Equivariant Neural Networks Reveal How Host–Guest Interactions Shape <sup>129</sup>Xe NMR in Porous Liquids</b>\" has been published in <i><b>The Journal of Physical Chemistry Letters</b></i>.",    
        link: "https://doi.org/10.1021/acs.jpclett.5c02846"
      },
      {
        date: "November 2025",
        title: "Preprint Available on ChemRxiv",
        content: "A preprint of our latest research, \"<b>Machine Learning-Accelerated Path Integral Molecular Dynamics and <sup>13</sup>C NMR Simulations Unlock New Insights Into Quantum Effects in C<sub>60</sub> Fullerene</b>\", is available on ChemRxiv.",    
        link: "https://doi.org/10.26434/chemrxiv-2025-68g6s-v2"
      },
      {
        date: "September 2025",
        title: "Preprint Available on ChemRxiv",
        content: "A preprint of our latest research, \"<b>Equivariant Neural Networks Reveal How Host–Guest Interactions Shape <sup>129</sup>Xe NMR in Porous Liquids</b>\", is available on ChemRxiv.",    
        link: "https://doi.org/10.26434/chemrxiv-2025-njln9-v2"
      },
      {
        date: "July 2025",
        title: "Contributed Talk",
        content: "Presented our work titled \"<b>Equivariant Neural Networks Reveal How Host–Guest Interactions Shape Xenon NMR Chemical Shift in Porous Organic Cages</b>\" at <b><i>EUROMAR 2025</b></i> conference, organized at the <i><b>Oulu Music Centre</b></i> and <i><b>Pohjankartano</b></i> at <i><b>Oulu</b></i>, <i><b>Finland</b></i>.",    
        link: "https://euromar2025.org/"
      },      
      {
        date: "June 2025",
        title: "Poster Presentation",
        content: "Presented a poster titled \"<b>Host-Guest Dynamics in Porous Liquids Modeled Using E(3)-Equivariant Neural Networks</b>\" at the <i><b>13<sup>th</sup> Triennial Congress of the World Association of Theoretical and Computational Chemists (WATOC 2025)</b></i> conference, organized at the <i><b>Oslo Kongressenter</b></i> at <i><b>Oslo</b></i>, <i><b>Norway</b></i>.",    
        link: "https://www.watoc2025.no/"
      },
      {
        date: "June 2025",
        title: "Poster Presentation",
        content: "Presented a poster titled \"<b>Local E(3)-Equivariant Neural Network Force Field for Modeling Host-Guest Interactions in Xenon-Based Porous Organic Cages</b>\" at the <i><b>Computational Chemistry Days 2025</b></i> conference, organized at the <i><b>Department of Chemistry and Materials Science</b></i> at <i><b>Aalto University</b></i>.",    
        link: "https://ocamm.fi/event/computational-chemistry-days-2025/"
      },
      {
        date: "March 2025",
        title: "Poster Presentation",
        content: "Presented a poster titled \"<b>Machine Learning-Driven Approach for Modeling Host-Guest Dynamics in Xenon-Based Porous Liquids</b>\" at the <i><b>Physics Days 2025</b></i> conference, organized by the <i><b>University of Oulu</b></i>, where our research unit was part of the organizing committee.",    
        link: "https://ssl.eventilla.com/physicsdays2025"
      },
      {
        date: "March 2025",
        title: "Article Published in Inorganic Chemistry",
        content: "Our research article, \"<b>Revealed Preferential Short-Range Anion Ordering in Disordered RbM<sub>2</sub>O<sub>5</sub>F (M= Nb, Ta) Pyrochlore-Type Oxyfluorides</b>\" has been published in <i><b>Inorganic Chemistry</b></i>.",    
        link: "https://doi.org/10.1021/acs.inorgchem.5c00615"
      },
      {
        date: "January 2025",
        title: "EUROMAR 2025",
        content: "Our research unit is organizing the 21<sup>st</sup> European Magnetic Resonance Congress (<b>EUROMAR2025</b>), in Oulu, Finland",
        link: "https://euromar2025.org/"
      },
      {
        date: "December 2024",
        title: "Contributed Talk",
        content: "Presented our work on \"<b>Machine Learning Potentials for Large-Scale Porous Liquids Simulations</b>\" at the <i><b>Winter School in Theoretical Chemistry</b></i>",
        link: "http://www.chem.helsinki.fi/ws2024.html"
      },
      {
        date: "November 2024",
        title: "Article Published in Journal of Alloys and Compounds",
        content: "Our research article, \"<b>Different magnitudes of second-order Jahn-Teller effect in isostructural NaMO<sub>2</sub>F<sub>2</sub> (M = Nb, Ta) oxyfluorides</b>\" has been published in <i><b>Journal of Alloys and Compounds</b></i>.",
        link: "https://doi.org/10.1016/j.jallcom.2024.177457"
      },
      // Add more news items as needed
    ];
    
    
    return (
      <div className="max-w-4xl mx-auto">
        {/* Profile section with background banner */}
        <div className="relative mb-8 rounded-lg shadow-md w-full bg-gray-900 overflow-hidden">
          {/* Background banner image */}

          {/* Semi-transparent overlay for better readability */}
          <div className="absolute inset-0 bg-opacity-90"></div>
          
          <MolecularPattern className="absolute inset-0" />

          {/* Profile content */}
          <div className="relative z-10 p-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center shadow-lg border-2 border-white">
                <img src="/profile-picture.png" alt="Ouail Zakary" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 bg-white/60 p-4 rounded-lg">
                <h2 className="text-3xl font-bold mb-4">Ouail Zakary</h2>
                <p className="text-lg text-gray-800">Computational Chemist</p>
                <p className="text-gray-800">NMR Research Unit, University of Oulu, Finland</p>
                <div className="flex gap-4 mt-4">
                  <a href="https://github.com/ozakary" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/ouail-zakary-a63a521b9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="mailto:Ouail.Zakary@oulu.fi" className="text-blue-600 hover:text-blue-800">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <div className="prose max-w-none mb-8">
          <h3 className="text-2xl font-bold mb-4">Research Focus</h3>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            My research focuses on developing advanced machine learning-driven approaches for modeling large-scale molecular systems under real physicochemical conditions. By integrating state-of-the-art quantum mechanics at the relativistic level and molecular dynamics simulations with atomistic machine learning, I aim to deliver highly predictive models for both structural and dynamic processes.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            A significant part of my work involves training graph neural networks, along with Kernel and Gaussian Process regression models, to develop machine learning interatomic potentials and machine learning-based NMR parameter models. These models enable long-timescale simulations, improving our ability to analyze experimental NMR data and predict new experimental outcomes for complex materials.
          </p>
        </div>
  
        <div className="prose max-w-none mb-8">
          <h3 className="text-2xl font-bold mb-4">Current Position</h3>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div>
              <h4 className="text-xl font-bold">Postdoctoral Researcher</h4>
              <p className="text-gray-600">NMR Research Unit, University of Oulu (Oulu, Finland)</p>
              <p className="text-gray-700 mt-2">Computational Chemistry</p>
              <div className="mt-4">
                <p className="text-gray-700">Principal Investigator:</p>
                <div className="flex items-center gap-4">
                  <span className="font-semibold">Dr. Perttu Lantto</span>
                  <a 
                    href="https://scholar.google.com/citations?user=C4pyUZ4AAAAJ&hl=en&oi=ao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Google Scholar
                  </a>
                  <a 
                    href="https://orcid.org/0000-0003-0685-7657"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    ORCID
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <button
                  onClick={() => setSelectedDegree(selectedDegree === 'postdoc' ? null : 'postdoc')}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  {selectedDegree === 'postdoc' ? 'Hide Details' : 'More Details'}
                </button>
              </div>
              {selectedDegree === 'postdoc' && (
                <div className="mt-4 p-4 bg-white rounded-lg">
                  <p className="text-gray-700">
                    Currently working on developing machine learning approaches for simulating porous liquids and modeling NMR parameters. The project involves:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>Developing equivariant neural network potentials for molecular dynamics</li>
                    <li>Creating ML models for NMR parameter prediction</li>
                    <li>Integrating quantum mechanics with machine learning for improved accuracy</li>
                    <li>Analyzing experimental NMR data using ML-assisted simulations</li>
                    <li>Studying host-guest interactions in porous materials</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
  
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6">Education</h3>
          <div className="space-y-4">
            {education.map((degree) => (
              <div key={degree.id} className={`${degree.color} p-6 rounded-lg shadow-md`}>
                <div className="md:flex md:justify-between md:items-start md:gap-4">
                  <div>
                    <h4 className="text-xl font-bold">{degree.type} in {degree.field}</h4>
                    {degree.title && (
                      <p className="text-gray-700 mt-2 mb-2 md:max-w-[70%]">{degree.title}</p>
                    )}
                    <p className="text-gray-600">{degree.institution}</p>
                    <p className="text-gray-500">{degree.period}</p>
                    {(degree.thesis || degree.defenseDetails) && (
                      <div className="flex flex-wrap gap-4 mt-2">
                        {degree.thesis && (
                          <a 
                            href={degree.thesis}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                          >
                            <Book className="w-5 h-5" />
                            <span>View Thesis</span>
                          </a>
                        )}
                        {degree.defenseDetails && (
                          <a 
                            href={degree.defenseDetails}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                          >
                            <Users className="w-5 h-5" />
                            <span>Ph.D. Defense Details</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                  {degree.committee && (
                    <button
                      onClick={() => setSelectedDegree(selectedDegree === degree.id ? null : degree.id)}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                      {selectedDegree === degree.id ? 'Hide Details' : 'Show Details'}
                    </button>
                  )}
                </div>
  
                {selectedDegree === degree.id && degree.committee && (
                  <div className="mt-4 p-4 bg-white rounded-lg">
                    <h5 className="text-xl font-bold mb-4">Ph.D. Defense Committee</h5>
                    <div className="space-y-4">
                      {degree.committee.map((member, index) => (
                        <div key={index} className="border-b pb-4 last:border-b-0">
                          <p className="font-semibold">{member.name}</p>
                          <p className="text-gray-600">{member.position} - {member.institution}</p>
                          <p className="text-gray-500">{member.role}</p>
                          <div className="flex gap-4 mt-2">
                            {member.links.orcid && (
                              <a
                                href={`https://orcid.org/${member.links.orcid}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800"
                              >
                                ORCID
                              </a>
                            )}
                            {member.links.scholar && (
                              <a
                                href={member.links.scholar}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800"
                              >
                                Google Scholar
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
  
      {/* Left column - News section with improved styling */}
      <div className="lg:fixed lg:top-24 lg:right-10 lg:w-96 lg:h-[calc(100vh-7rem)] lg:overflow-y-auto">
        <div className="bg-gradient-to-b from-blue-50 to-white rounded-lg shadow-xl p-6 border border-blue-100">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
            <h3 className="text-2xl font-bold text-gray-800">Latest News</h3>
          </div>
          <div className="space-y-6">
            {news.map((item, index) => (
              <div 
                key={index} 
                className="group bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-500"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div 
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    dangerouslySetInnerHTML={{ __html: item.date }}
                  />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                <p 
                  className="text-gray-600 text-sm mb-3"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
                {item.link && (
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm inline-flex items-center group-hover:underline"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="my-8 border-gray-200" />
      <InfoPanel />
      <div className="h-8" />
    </div>
  );
};

export default About;
