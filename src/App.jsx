import React, { useState } from 'react';
import { BookOpen, Code, Users, Award, FileText, Database, Mail, Github, Linkedin, Book } from 'lucide-react';
import MolecularBackground from './components/MolecularBackground';
import NavButton from './components/NavButton';
import InfoPanel from './components/InfoPanel';
import ProjectCard from './components/ProjectCard';

const App = () => {
  const [activeTab, setActiveTab] = useState('about');

  const Navigation = () => (
    <nav className="bg-gray-900 text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-50" />
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      
      <div className="relative container mx-auto px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Logo/Name */}
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Ouail Zakary
          </h1>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap gap-2">
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
        </div>
      </div>
      
      {/* Bottom border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </nav>
  );


  const About = () => {
    const [selectedDegree, setSelectedDegree] = useState(null);
  
    const education = [
      {
        id: "phd",
        type: "Ph.D.",
        field: "Physics",
        title: "Structural Modeling of Oxygen-Fluorine Ordering in Transition Metal Inorganic Oxyfluorides",
        thesis: "https://theses.hal.science/tel-04412685/",
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
        date: "March 2025",
        title: "Article Published in Inorganic Chemistry",
        content: "Our latest research article, 'Revealed Preferential Short-Range Anion Ordering in Disordered RbM<sub>2</sub>O<sub>5</sub>F (M= Nb, Ta) Pyrochlore-Type Oxyfluorides,' has been published in *Inorganic Chemistry*.",    
        link: "https://doi.org/10.1021/acs.inorgchem.5c00615"
      },
      {
        date: "January 2025",
        title: "EUROMAR 2025",
        content: "Our research unit is organizing the 21<sup>st</sup> European Magnetic Resonance Congress (EUROMAR2025), in Oulu, Finland",
        link: "https://euromar2025.org/"
      },
      {
        date: "December 10<sup>th</sup> 2024",
        title: "Contributed Talk",
        content: "Presented our work on 'Machine Learning Potentials for Large-Scale Porous Liquids Simulations' at the Winter School in Theoretical Chemistry",
        link: "http://www.chem.helsinki.fi/ws2024.html"
      },
      // Add more news items as needed
    ];
    
    
    return (
      <div className="max-w-4xl mx-auto">
        {/* Profile section with background banner */}
        <div className="relative mb-8 rounded-lg shadow-md overflow-hidden">
          {/* Background banner image */}
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url(../images/bck_about.png)" }}
          ></div>
          
          {/* Semi-transparent overlay for better readability */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Profile content */}
          <div className="relative z-10 p-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center shadow-lg border-4 border-white">
                <img src="/profile-picture.png" alt="Ouail Zakary" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 bg-white/80 p-4 rounded-lg">
                <h2 className="text-3xl font-bold mb-4">Ouail Zakary</h2>
                <p className="text-lg text-gray-600">Computational Chemist</p>
                <p className="text-gray-600">NMR Research Unit, University of Oulu</p>
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
              <p className="text-gray-600">NMR Research Unit, University of Oulu</p>
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
                    {degree.thesis && (
                      <a 
                        href={degree.thesis}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mt-2"
                      >
                        <Book className="w-5 h-5" />
                        <span>View Thesis</span>
                      </a>
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
                    <h5 className="font-bold mb-4">Ph.D. Committee</h5>
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
      <div className="fixed top-24 left-4 w-96 h-[calc(100vh-7rem)] overflow-y-auto">
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
  
  const Publications = () => {
    const PUBLICATION_TYPES = {
      PUBLISHED: "published",
      SUBMITTED: "submitted",
      IN_PREPARATION: "in_preparation"
    };

    const publications = [
      {
        type: PUBLICATION_TYPES.IN_PREPARATION,
        titleHtml: `Machine Learning Enabled Insights into Xenon Dynamics in Single-Walled Carbon Nanotubes`,
        authors: [
          { name: "Ouail Zakary", isPI: true },
          { name: "Tiia Jacklin"},
          { name: "Perttu Lantto"}
        ],
        journal: "In preperation",
        volume: "xx",
        pages: "xx",
        year: "2025",
        doi: "#",
        isOpenAccess: false,
        isSubscribed: false,
        descriptionHtml: `xx`,
        contribution: "Conceptualization, Methodology, Software, Formal analysis, Investigation, Validation, Data Curation, Writing - Original Draft, Writing - Review & Editing, and Visualization."
      },
      {
        type: PUBLICATION_TYPES.IN_PREPARATION,
        titleHtml: `Thermal Expansion and Isotope Effects of Chemical Shift of C60-Fullerene Using Machine Learning-Assisted Path Integral Molecular Dynamics`,
        authors: [
          { name: "Ossi Laurila"},
          { name: "Ouail Zakary", isPI: true },
          { name: "Perttu Lantto"}
        ],
        journal: "In preperation",
        volume: "xx",
        pages: "xx",
        year: "2025",
        doi: "#",
        isOpenAccess: false,
        isSubscribed: false,
        descriptionHtml: `xx`,
        contribution: "Conceptualization, Methodology, Software, Formal analysis, Investigation, Validation, Data Curation, Writing - Review & Editing."
      },
      {
        type: PUBLICATION_TYPES.IN_PREPARATION,
        titleHtml: `Host-Guest Dynamics in Xenon-Based Porous Liquids Modeled using Invariant and Equivariant Deep Neural Network Architectures`,
        authors: [
          { name: "Ouail Zakary", isPI: true },
          { name: "Perttu Lantto"}
        ],
        journal: "In preperation",
        volume: "xx",
        pages: "xx",
        year: "2025",
        doi: "#",
        isOpenAccess: false,
        isSubscribed: false,
        descriptionHtml: `xx`,
        contribution: "Conceptualization, Methodology, Software, Formal analysis, Investigation, Validation, Data Curation, Writing - Original Draft, Writing - Review & Editing, and Visualization."
      },      
      {
        type: PUBLICATION_TYPES.IN_PREPARATION,
        titleHtml: `Short- and Long-Range Anion Ordering in the Disordered Monoclinic Phase of Na<sub>2</sub>M<sub>2</sub>O<sub>5</sub>F<sub>2</sub> (M=Nb, Ta) Oxyfluorides`,
        authors: [
          { name: "Ouail Zakary", isPI: true },
          { name: "Monique Body"},
          { name: "Vincent Sarou-Kanian"},
          { name: "Christophe Legein"}
        ],
        journal: "In preperation",
        volume: "xx",
        pages: "xx",
        year: "20XX",
        doi: "#",
        isOpenAccess: false,
        isSubscribed: false,
        descriptionHtml: `xx`,
        contribution: "Conceptualization, Methodology, Formal analysis, Investigation, Validation, Data Curation, Writing - Original Draft, Writing - Review & Editing, and Visualization."
      },
      {
        type: PUBLICATION_TYPES.SUBMITTED,
        titleHtml: `Hexagonal-Tungsten-Bronze TiOF<sub>2</sub>: Synthesis, Crystal Structure and Anionic Short-Range Ordering.`,
        authors: [
          { name: "Madhu Chennabassapa"},
          { name: "Alexander G. Squires"},
          { name: "Alain Demourgues"},
          { name: "Nicolas Penin"},
          { name: "Etienne Durand"},
          { name: "Wei Li"},
          { name: "Christophe Legein"},
          { name: "Ouail Zakary", isPI: true },
          { name: "Monique Body" },
          { name: "Thibault Charpentier" },
          { name: "Olaf J. Borkiewicz" },
          { name: "Benjamin. J. Morgan" },
          { name: "David O. Scanlon" },
          { name: "Damien Dambournet" }
        ],
        journal: "Submitted for publication",
        volume: "xx",
        pages: "xx",
        year: "2025",
        doi: "#",
        isOpenAccess: false,
        isSubscribed: false,
        descriptionHtml: `xx`,
        contribution: "Investigation, Validation, Writing - Review & Editing, Visualization."
      },
      {
        type: PUBLICATION_TYPES.PUBLISHED,
        titleHtml: `Revealed Preferential Short-Range Anion Ordering in Disordered RbM<sub>2</sub>O<sub>5</sub>F (M= Nb, Ta) Pyrochlore-Type Oxyfluorides`,
        authors: [
          { name: "Ouail Zakary", isPI: true },
          { name: "Monique Body" },
          { name: "Vincent Sarou-Kanian" },
          { name: "Thibault Charpentier" },
          { name: "Christophe Legein" }
        ],
        journal: "Inorganic Chemistry",
        volume: "xx",
        pages: "xx",
        year: "2025",
        doi: "https://doi.org/10.1021/acs.inorgchem.5c00615",
        isOpenAccess: false,
        isSubscribed: false,
        descriptionHtml: `Describing the crystal structure of disordered materials with mixed-occupancy crystallographic sites is essential for understanding their physicochemical properties and designing new materials tuned to targeted functionalities. Here, we investigate the structure of RbM<sub>2</sub>O<sub>5</sub>F (M = Nb, Ta) pyrochlore-type oxyfluorides using a multimodal approach that combines experimental and computational techniques. Rietveld structural refinement of PXRD data confirmed that these oxyfluorides are isostructural and their average crystal structure is disordered. The anionic site, 48<i>f</i>, is co-occupied by O and F, while the Rb site, 32<i>e</i>, is occupied at 25%. The shapes of the high-field solid-state <sup>19</sup>F MAS, and <sup>87</sup>Rb and <sup>93</sup>Nb (CT)MAS and 3QMAS NMR spectra, indicate that the local environment of these nuclei is distributed. Using the "<i>supercell</i>" approach, models incorporating different anion arrangements and Rb atoms distributed in their crystallographic site, were built and relaxed using DFT, and NMR parameters for <sup>19</sup>F, <sup>87</sup>Rb, and <sup>93</sup>Nb, were computed using the PAW and GIPAW approaches. The models showing the best agreement between computed and experimental NMR parameters are made up exclusively of [MO<sub>5</sub>F]<sup>6-</sup> octahedra, [RbO<sub>15</sub>F<sub>3</sub>]<sup>32-</sup>, [RbO<sub>16</sub>F<sub>2</sub>]<sup>33-</sup>, and [RbO<sub>14</sub>F<sub>4</sub>]<sup>31-</sup> cages, indicating the existence of a preferential short-range anion ordering in these pyrochlores, instead of the expected random distribution.`,
        contribution: "Conceptualization, Methodology, Formal analysis, Investigation, Validation, Data Curation, Writing - Original Draft, Writing - Review & Editing, and Visualization."
      },
      {
        type: PUBLICATION_TYPES.PUBLISHED,
        titleHtml: `Different Magnitudes of Second-Order Jahn-Teller Effect in Isostructural NaMO<sub>2</sub>F<sub>2</sub> (M= Nb, Ta) Oxyfluorides`,
        authors: [
          { name: "Ouail Zakary", isPI: true },
          { name: "Monique Body" },
          { name: "Vincent Sarou-Kanian" },
          { name: "Brice Arnaud" },
          { name: "Gwenaël Corbel" },
          { name: "Christophe Legein" }
        ],
        journal: "Journal of Alloys and Compounds",
        volume: "1010",
        pages: "177457",
        year: "2025",
        doi: "https://doi.org/10.1016/j.jallcom.2024.177457",
        isOpenAccess: true,
        isSubscribed: false,
        descriptionHtml: `The structures of the ordered and isotype oxyfluorides NaMO<sub>2</sub>F<sub>2</sub> (M = Nb, Ta) were thoroughly investigated by combining powder X-Ray Diffraction (PXRD), <sup>19</sup>F and high-field <sup>23</sup>Na and <sup>93</sup>Nb solid-state NMR, and DFT calculations. The structures, derived from Rietveld refinement of the PXRD data, exclusively consist of <i>cis</i>-[MO<sub>4</sub>F<sub>2</sub>]<sup>5–</sup> octahedra, in which cations are displaced from their ideal centered positions toward an oxide face. The NMR parameters were calculated for both the experimental (ES) and the atomic positions optimized (APO) structures, the latter exhibiting, as is often the case, the best agreement with the experimental data. Nb<sup>5+</sup> and Ta<sup>5+</sup> cations having the same size, niobium and tantalum isotypes have usually very close cell parameters. However, those of NaNbO<sub>2</sub>F<sub>2</sub> and NaTaO<sub>2</sub>F<sub>2</sub>, particularly <i>c</i>, differ in unusual proportions. This difference in <i>c</i> parameters is due to stronger second-order Jahn-Teller effect (SOJTE) for the <i>cis</i>-[NbO<sub>4</sub>F<sub>2</sub>]<sup>5–</sup> than for the <i>cis</i>-[TaO<sub>4</sub>F<sub>2</sub>]<sup>5–</sup> octahedra, further confirmed by band structure and projected density of states calculations. Furthermore, by optimizing the synthesis conditions of these compounds using thermal analysis, a very low amplitude endothermic event, upon heating, was observed only for NaNbO<sub>2</sub>F<sub>2</sub>. An extensive analysis of the variable temperature (VT) PXRD data revealed that this event is related to a deviation from linearity of the cell parameters evolution and that structural features of these two isotypes evolve differently with temperature.`,
        contribution: "Conceptualization, Formal analysis, Investigation, Validation, Data Curation, Writing - Original Draft, Writing - Review & Editing, Visualization."
      },
      {
        type: PUBLICATION_TYPES.PUBLISHED,
        titleHtml: `Structural Modeling of Oxygen-Fluorine Ordering in Transition Metal Inorganic Oxyfluorides`,
        authors: [
          { name: "Ouail Zakary", isPI: true },
        ],
        journal: "Hal theses, Le Mans Université",
        volume: "N/A",
        pages: "N/A",
        year: "2023",
        doi: "https://theses.hal.science/tel-04412685/",
        isOpenAccess: true,
        isSubscribed: false,
        descriptionHtml: `Mixed anions inorganic compounds, known as heteroanionic materials (HAMs), exhibit various physicochemical properties, such as superconductivity, ionic conductivity, photocatalytic activity, thermoelectricity, and nonlinear optics. These HAMs, particularly those derived from oxides, are advantageous due to their abundant chemistry and straightforward synthesis. Their properties depend not only on the stoichiometry and identity of the anions but also on their position within the crystal structure. Many cases are possible, ranging from complete order to a random distribution of anions, or intermediate orders and extended correlations, known as correlated disorder.This thesis deals with the study of the O/F order in inorganic transition metal oxyfluorides by combining powder X-ray diffraction, solid-state NMR, and ab initio calculations. This multimodal approach was first tested on the ordered compounds NaNbO<sub>2</sub>F<sub>2</sub> and NaTaO<sub>2</sub>F<sub>2</sub>, and then successfully used to describe O/F correlated disorder in TaOF<sub>3</sub>, NbOF<sub>3-<i>x</i></sub>(OH)<sub><i>x</i></sub>, and Ti<sub>0.99</sub>A<sub>0.01</sub>O<sub>0.96</sub>F<sub>1.53</sub>(OH)<sub>0.51</sub>·0.33H<sub>2</sub>O.Additionally, the effect of hydroxylation on the local environment and the chemical shifts of fluorine atoms was modeled. Finally, the existence of a preferential short-range O/F ordering was demonstrated in the pyrochlores RbNb<sub>2</sub>O<sub>5</sub>F and RbTa<sub>2</sub>O<sub>5</sub>F.`,
        contribution: "Conceptualization, Methodology, Formal analysis, Investigation, Validation, Data Curation, Writing - Original Draft, Writing - Review & Editing, Visualization."
      },
      {
        type: PUBLICATION_TYPES.PUBLISHED,
        titleHtml: `Structural Modeling of O/F Correlated Disorder in TaOF<sub>3</sub> and NbOF<sub>3–<i>x</i></sub>(OH)<sub><i>x</i></sub> by Coupling Solid-State NMR and DFT Calculations`,
        authors: [
          { name: "Ouail Zakary", isPI: true },
          { name: "Monique Body" },
          { name: "Thibault Charpentier" },
          { name: "Vincent Sarou-Kanian" },
          { name: "Christophe Legein" }
        ],
        journal: "Inorganic Chemistry",
        volume: "62",
        pages: "16627–16640",
        year: "2023",
        doi: "https://doi.org/10.1021/acs.inorgchem.3c02844",
        isOpenAccess: false,
        isSubscribed: false,
        descriptionHtml: `The structure of MOF<sub>3</sub> (M = Nb, Ta) compounds was precisely modeled by combining powder X-ray diffraction, solid-state NMR spectroscopy, and semiempirical dispersion-corrected DFT calculations. It consists of stacked <sub>∞</sub>(MOF<sub>3</sub>) layers along the <i>c</i> direction formed by heteroleptic corner-connected MX<sub>6</sub> (X = O, F) octahedra. <sup>19</sup>F NMR resonance assignments and occupancy rates of the anionic crystallographic sites have been revised. The bridging site is shared equally by the anions, and the terminal site is occupied by F only. An O/F correlated disorder is expected since <i>cis</i>-MO<sub>2</sub>F<sub>4</sub> octahedra are favored, resulting in one-dimensional −F–M–O–M– strings along the <100> and <010> directions. Ten different 2×2×1 supercells per compound, fulfilling these characteristics, were built. Using DFT calculations and the GIPAW approach, the supercells were relaxed and the <sup>19</sup>F isotropic chemical shift values were determined. The agreement between the experimental and calculated <sup>19</sup>F spectra is excellent for TaOF<sub>3</sub>. The <sup>1</sup>H and <sup>19</sup>F experimental NMR spectra revealed that some of the bridging F atoms are substituted by OH groups, especially in NbOF<sub>3</sub>. New supercells involving OH groups were generated. Remarkably, the best agreement is obtained for the supercells with the composition closest to that estimated from the <sup>19</sup>F NMR spectra, <i>i.e.</i>, NbOF<sub>2.85</sub>(OH)<sub>0.15</sub>.`,
        contribution: "Conceptualization, Formal analysis, Investigation, Validation, Data Curation, Writing - Original Draft, Writing - Review & Editing, Visualization."
      },            
      // ... other publications with their types and contributions
    ];


    const PublicationCard = ({ publication }) => {
      const [showDetails, setShowDetails] = useState(false);
    
      const getAccessBadge = () => {
        if (publication.isOpenAccess) {
          return {
            text: "Open Access",
            className: "bg-green-100 text-green-800"
          };
        } else if (publication.isSubscribed) {
          return {
            text: "Subscribed",
            className: "bg-orange-100 text-orange-800"
          };
        } else {
          return {
            text: "Subscription Required",
            className: "bg-yellow-100 text-yellow-800"
          };
        }
      };
    
      const getBackgroundColor = () => {
        switch (publication.type) {
          case PUBLICATION_TYPES.PUBLISHED:
            return "bg-green-50";
          case PUBLICATION_TYPES.SUBMITTED:
            return "bg-blue-50";
          case PUBLICATION_TYPES.IN_PREPARATION:
            return "bg-orange-50";
          default:
            return "bg-white";
        }
      };
    
      const badge = getAccessBadge();
    
      return (
        <div className={`p-6 rounded-lg shadow-md ${getBackgroundColor()}`}>
          <h3 
            className="font-bold text-lg mb-2"
            dangerouslySetInnerHTML={{ 
              __html: publication.titleHtml
            }}
          />
          <p className="text-gray-600 mb-2">
            {publication.authors.map((author, index) => (
              <span key={index}>
                {author.isPI ? <b>{author.name}</b> : author.name}
                {index < publication.authors.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
          <p className="text-gray-700 mb-2">
            {publication.journal}, <b>{publication.volume}</b>, {publication.pages} ({publication.year}).
          </p>
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${badge.className}`}>
              {badge.text}
            </span>
          </div>
          
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            {showDetails ? 'Hide Details' : 'More Details'}
          </button>
    
          {showDetails && (
            <div className="mt-4 p-4 bg-white rounded-lg">
              <p 
                className="text-gray-700 mb-4"
                dangerouslySetInnerHTML={{ 
                  __html: publication.descriptionHtml 
                }}
              />
            </div>
          )}
    
          <div className="mb-4">
            <h4 className="font-semibold text-sm text-gray-700 mb-1">My contribution:</h4>
            <p className="text-sm text-gray-600">{publication.contribution}</p>
          </div>
    
          <div className="flex gap-4">
            <a 
              href={`${publication.doi}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
            >
              <Database className="w-4 h-4" /> DOI
            </a>
          </div>
        </div>
      );
    };

    const PublicationSection = ({ title, type, publications }) => (
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="space-y-6">
          {publications
            .filter(pub => pub.type === type)
            .map((pub, index) => (
              <PublicationCard key={index} publication={pub} />
            ))}
        </div>
      </div>
    );

    return (
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Publications</h2>
        
        <PublicationSection 
          title="Published Articles" 
          type={PUBLICATION_TYPES.PUBLISHED} 
          publications={publications}
        />
        
        <PublicationSection 
          title="Submitted Manuscripts" 
          type={PUBLICATION_TYPES.SUBMITTED} 
          publications={publications}
        />
        
        <PublicationSection 
          title="Manuscripts in Preparation" 
          type={PUBLICATION_TYPES.IN_PREPARATION} 
          publications={publications}
        />
        <hr className="my-8 border-gray-200" />
        <InfoPanel />
        <div className="h-8" />        
      </div>
    );
  };

  const Conferences = () => {
    const [selectedConference, setSelectedConference] = useState(null);
  
    const CONFERENCE_TYPES = {
      ORAL: "Oral Communication",
      POSTER: "Poster Communication",
      CONTRIBUTED: "Contributed Talk",
      INVITED: "Invited Talk",
      WORKSHOP: "Workshops"
    };
  
    const conferences = [
      {
        type: CONFERENCE_TYPES.POSTER,
        titleHtml: "Combining Molecular Dynamics with Deep Neural Network Architectures for Realistic Simulations of Porous Liquids",
        authors: [
          { name: "Ouail Zakary", isPI: true },
          { name: "Perttu Lantto" }
        ],
        conferenceNameHtml: "The 20<sup>th</sup> European Magnetic Resonance Congress (EUROMAR)",
        location: "Bilbao, Spain",
        date: "30/06-04/07/2024",
        abstractHtml: "Aims: Porous materials serve diverse applications, including molecular separations and catalysis, facilitating the efficient capture of greenhouse gases (CO<sub>2</sub> and CH<sub>4</sub>) and valuable noble gases (Xe, Ar, and Kr). Xenon, crucial in optics, medicine, and nuclear processes, presents extraction challenges due to its low atmospheric abundance and inert nature, leading to high commercial costs. Effective xenon isolation demands materials with precise selectivity and high adsorption capacity. Porous liquids (PLs) with porous organic cages (POCs) offer a promising solution to these challenges. Understanding the interaction between host (PL/POC) and guest (Xe), including binding, occupancies, dynamics, and equilibrium, is pivotal for designing POCs tailored to specific functionalities. Combined with ab-initio methods, molecular dynamics simulations have proven essential for understanding the physicochemical processes governing these systems. However, this combination is limited to tens of picoseconds and a few hundred atoms, falling short of capturing realistic timescales and size of these porous systems. In recent years, machine learning, particularly neural networks (NNs), has emerged as a promising solution to these limitations by learning accurate interatomic potentials from a set of high-fidelity reference calculations while maintaining computational efficiency. Methods and Results: We introduce precise and data-efficient machine learning interatomic potential (MLIP) models developed using Allegro, a local equivariant deep neural network architecture. These models, trained, validated, and tested on DFT-level data, encompass energies, forces, and virials in structures comprising 600 to 1170 atoms (H, C, N, O, F, Cl, Xe). Encompassing various configurations of xenon atoms in different PLs and POCs, the dataset comprises 1.7 million atoms and 12 million data points. Perspectives: The MLIP models enable simulations of large-scale porous liquids under realistic physicochemical conditions. They facilitate microscopic interpretation of experimental Xe NMR data, a local probe critical for understanding the condition-dependent dynamic processes within these systems at both static and dynamic levels.",
        doi: "https://doi.org/10.6084/m9.figshare.27105562.v2"
      },
      {
        type: CONFERENCE_TYPES.POSTER,
        titleHtml: "Structural Modeling of Disordered Inorganic Fluorides",
        authors: [
          { name: "Ouail Zakary", isPI: true },
          { name: "Monique Body" },
          { name: "Christophe Legein" }
        ],
        conferenceNameHtml: "JED – 3M445, Journée de l'Ecole Doctorale",
        location: "Le Mans, France",
        date: "27-28/05/2021",
        abstractHtml: "De nombreux matériaux cristallisés présentent un désordre de nature chimique (sites cristallographiques occupés à la fois par des atomes de natures différentes ou des lacunes) ou topologique (occupation des sites interstitiels) et des propriétés physiques intéressantes (absorption, conductivité ionique, propriétés diélectriques). Pour mieux comprendre et améliorer ces propriétés, une description structurale de ces matériaux est nécessaire. Leur caractérisation structurale est difficile par des techniques de diffraction classiques qui ne permettent d’obtenir qu’une description moyenne. En revanche, la sensibilité de la Résonance Magnétique Nucléaire (RMN) à l’environnement local du noyau sondé en fait une sonde idéale pour les solides désordonnés. Même si leurs spectres sont peu résolus, des informations structurales précises peuvent en être extraites en confrontant résultats expérimentaux et calculs DFT (Théorie de la Fonctionnelle de la Densité) issus de modèles structuraux, des supermailles reflétant à la fois les caractères périodiques et désordonnés du matériau. Dans ce contexte, ma thèse vise à décrire aussi précisément que possible la structure de (halogéno)-(hydroxy)-(oxy)-fluorures inorganiques désordonnés d’intérêt en appliquant aux composés sélectionnés la démarche suivante: - Synthèse et caractérisation par diffraction et par RMN du solide (19F, noyaux quadripolaires); - Construction et sélection de supermailles à l’aide du programme ” Supercell ”, optimisation des positions atomiques et calculs ab-initio des paramètres RMN en appliquant l’approche GIPAW implémentée dans le code CASTEP; - Comparaison des résultats RMN expérimentaux et calculés.",
        doi: "https://doi.org/10.6084/m9.figshare.27115426.v1"
      },
      {
        type: CONFERENCE_TYPES.ORAL,
        titleHtml: "Efficient and Accurate Local Equivariant Deep Neural Network Interatomic Potential for Large-Scale Porous Liquids Simulations",
        authors: [
          { name: "Ouail Zakary", isPI: true },
          { name: "Perttu Lantto" }
        ],
        conferenceNameHtml: "Magnetic Resonance in Porous Media 16 (MRPM)",
        location: "Tromsø, Norway",
        date: "26-30/08/2024",
        abstractHtml: "Porous materials serve diverse applications like molecular separations and catalysis, offering an energy-efficient method for capturing greenhouse gases (CO<sub>2</sub>, and CH<sub>4</sub>) and valuable noble gases (Xe, Ar, and Kr). Xenon — vital in optics, medicine, and nuclear fission processes — poses extraction challenges due to its low atmospheric abundance (0.087 ppm by volume) and inertness, driving high commercial costs. Porous materials must exhibit precise size selectivity and high adsorption capacity for effective xenon isolation in commercial applications. The recent development of porous liquids (PLs) with cavities formed by porous organic cages (POCs) has shown promise in addressing these challenges. Understanding the binding, occupancies, dynamics, and equilibrium between the host (PL and POC) and the guest (Xe) is vital in engineering new POCs with targeted functionalities. Molecular dynamics (MD) simulations have proven essential for understanding and exploring the physicochemical processes governing these systems. In MD simulations, atom movements are governed by forces derived as gradients of the potential energy surface (PES) of the system. Typically, the PES is accurately obtained by calculating the electronic structure using methods like density functional theory (DFT). While this combination of MD with DFT offers precise interatomic forces, their computational scaling limits simulations to tens of picoseconds and a few hundred atoms, which is far from capturing realistic timescales and size of these porous systems. Classical models for computing PES, although faster, lack accuracy. In recent years, machine learning (ML), particularly neural networks (NNs), has emerged as a promising solution to these limitations by learning accurate interatomic potentials from a set of high-fidelity ab initio reference calculations while maintaining computational efficiency. Here, we present a machine learning interatomic potential (MLIP) model constructed using the local equivariant deep NN architecture, Allegro]. This model was trained, validated, and tested on energies, forces, and virials — computed at the DFT-D4 level with PBE functional and periodic boundary conditions — of structures issued from semi-empirical MD simulations performed at RT and 600K, from a dataset comprising over 1600 structures consisting of 600 to 1170 atoms (H, C, N, O, F, Cl, and Xe). These structures comprise one to two xenon atoms in TBA-type, HAP-type, and DCT-type PLs, as well as CC3 POC where Xe atoms are positioned inside or near the cavities of the POC. The dataset encompasses 1.8 million atoms, with 12.5 million data points used in the process. The MLIP will be applied to provide microscopic interpretation of experimental <sup>129</sup>Xe NMR observations. In this step, we will construct an ML model for magnetic shielding tensors, <i>σ</i>, obtained from the dataset. This ML model will later be used to predict σ in MD simulations to explain experimental, both static spectral and dynamic relaxation, data.",
        doi: "https://doi.org/10.6084/m9.figshare.27106033.v2"
      },
      {
        type: CONFERENCE_TYPES.ORAL,
        titleHtml: "Scalable, Accurate, and Data-Efficient Machine Learning Potential models for Realistic Simulations of Porous Materials",
        authors: [
          { name: "Ouail Zakary", isPI: true },
          { name: "Perttu Lantto" }
        ],
        conferenceNameHtml: "Chemical Solutions for Biological Challenges (CSBC)",
        location: "Turku, Finland",
        date: "10-12/06/2024",
        abstractHtml: "Various applications benefit from porous materials, such as molecular separations and catalysis, enabling the efficient capture of greenhouse gases (CO<sub>2</sub> and CH<sub>4</sub>) and valuable noble gases (Xe, Ar, and Kr). Xenon, widely used in optics, medicine, and nuclear processes, poses extraction challenges due to its low atmospheric abundance and inert nature, driving high commercial costs. Efficient xenon isolation requires materials with precise selectivity and high adsorption capacity. Porous liquids (PLs) with cavities formed by porous organic cages (POCs) show promise in addressing these challenges. Understanding the binding, occupancies, dynamics, and equilibrium between host (PL/POC) and guest (Xe) is crucial for designing new POCs with targeted functionalities. Molecular dynamics (MD) simulations have proven essential for understanding and exploring the physicochemical processes governing these systems. In MD simulations, atom movements are described by the potential energy surface (PES) of the system. Typically, the PES is accurately obtained by calculating the electronic structure using methods like density functional theory (DFT). While this combination of MD with DFT offers precise interatomic forces, their computational scaling limits simulations to tens of picoseconds and a few hundred atoms, falling short of capturing realistic timescales and size of these porous systems. In recent years, machine learning, particularly neural networks (NNs), has emerged as a promising solution to these limitations by learning accurate interatomic potentials from a set of high-fidelity reference calculations while maintaining computational efficiency. Methods and results: Here, we present accurate and data-efficient machine learning interatomic potential (MLIP) models built using Allegro, a local equivariant deep NN architecture. These models were trained, validated, and tested on DFT-level data, they cover energies, forces, and virials in structures with 600 to 1170 atoms (H, C, N, O, F, Cl, Xe). The structures include varying numbers of xenon atoms in different PLs and POCs, totaling 1.6 million atoms with 11.2 million data points. Perspectives: The MLIP models enable simulating large-scale porous liquids at realistic physicochemical conditions and applied to provide microscopic interpretation of experimental Xe NMR — a local probe critical for understanding the condition-dependent dynamic processes present in these systems — data both at the static and dynamic levels.",
        doi: "https://doi.org/10.6084/m9.figshare.27105937.v2"
      },
      {
        type: CONFERENCE_TYPES.ORAL,
        titleHtml: "Modeling Porous Liquids with Machine-Learning-Assisted Molecular Dynamics",
        authors: [
          { name: "Ouail Zakary", isPI: true },
          { name: "Perttu Lantto" }
        ],
        conferenceNameHtml: "Computational Chemistry Days (CCD)",
        location: "Jyväskylä, Finland",
        date: "27-28/05/2024",
        abstractHtml: "Diverse applications benefit from porous materials, such as molecular separations and catalysis, enabling the efficient capture of greenhouse gases (CO<sub>2</sub> and CH<sub>4</sub>) and valuable noble gases (Xe, Ar, and Kr). Xenon, widely used in optics, medicine, and nuclear processes, poses extraction challenges due to its low atmospheric abundance and inert nature, driving high commercial costs. Efficient xenon isolation requires materials with precise selectivity and high adsorption capacity. Porous liquids (PLs) incorporating cavities formed by porous organic cages (POCs) show promise in addressing these challenges. Understanding the binding mechanisms, occupancies, dynamics, and equilibrium between host (PL/POC) and guest (Xe) is pivotal for the design of novel POCs tailored to specific functionalities. Molecular dynamics (MD) simulations have proven essential for understanding and exploring the physicochemical processes governing these systems. In MD simulations, atom movements are described by the potential energy surface (PES) of the system. Typically, the PES is accurately obtained by calculating the electronic structure using methods such as density functional theory (DFT). However, the combination of MD with DFT, although provides precise interatomic forces, is constrained by computational scalability, limiting simulations to tens of picoseconds and a few hundred atoms, thereby falling short of capturing realistic timescales and size of these porous systems. In recent years, machine learning, particularly neural networks (NNs), has emerged as a promising avenue to address these limitations, by learning accurate interatomic potentials from a set of high-fidelity reference calculations while maintaining computational efficiency. In this work, we present accurate and data-efficient machine learning interatomic potential (MLIP) models built using Allegro, a local equivariant deep NN architecture. These models were trained, validated, and tested on DFT level data, covering energies, forces, and virials in structures with 600 to 1170 atoms (H, C, N, O, F, Cl, Xe). The structures include varying numbers of xenon atoms in different PLs and POCs, totaling 1.7 million atoms with around 12 million data points. The MLIP models enable simulating large-scale porous liquids at realistic physicochemical conditions and applied to provide microscopic interpretation of experimental <sup>129</sup>Xe NMR — a local probe critical for understanding the condition-dependent dynamic processes present in these systems — data both at the static and dynamic levels.",
        doi: "https://doi.org/10.6084/m9.figshare.27105913.v1"
      },
      {
        type: CONFERENCE_TYPES.ORAL,
        titleHtml: "Towards a Complete Structural Description of Disordered Inorganic Fluorides: The Crucial Role of Solid State NMR and DFT Calculations",
        authors: [
          { name: "Ouail Zakary", isPI: true },
        ],
        conferenceNameHtml: "JED – 3MG, Journée de l'Ecole Doctorale",
        location: "Nantes, France",
        date: "25/05/2023",
        abstractHtml: "Numerous studies have been conducted on inorganic oxy-hydroxy-fluoride compounds with the aim of determining their physicochemical properties . As they govern these properties, their crystalline structures are of particular interest. Nevertheless, the efficiency of X-ray and neutron diffraction techniques, which are usually employed to determine crystalline structures, is limited since they are unable to distinguish between O and F atoms. In the case of ordered compounds, bond valence calculations allow distinguishing the crystallographic sites occupied by the O and F atoms. However, due to the close ionic radii values of fluoride (F<sup>-</sup>) and oxide (O<sup>2-</sup>) ions which allow them to share the same crystallographic site, inorganic oxy-fluoride compounds are often subject to the so-called chemical disorder. But between the limits of fully ordered and randomly disordered anions, there are many cases of intermediate anion orders that may give rise to non-random site occupancies in the averaged crystal structure, i.e. the so-called correlated disorder. For instance, for heteroanionic materials constructed from heteroleptic (MX<sub>2</sub>X’<sub>4</sub>) octahedral units, cis units are more favored, particularly when the cation is a d0 transition metal. Solid-state NMR spectroscopy (ss-NMR), which provide information about the local environment of the probe nucleus, coupled with DFT calculations, brings forth accurate modeling of the crystal structure, as shown in the past decade, on few disordered oxy-fluorides. During my thesis, we have applied this combination in order to reach a full structural description of numerous ordered/disordered inorganic oxy-hydroxy-fluorides. Herein, we present the results obtained for oxy-trifluoride of niobium and tantalum MOF<sub>3</sub> (M = Nb, Ta) and the Hexagonal-Tungsten-Bronze phase of TiOF<sub>2</sub> (HTB-TiOF<sub>2</sub>). Their crystalline structures, which show correlated disorder, were precisely modelled using X-Ray Powder Diffraction, <sup>1</sup>H and <sup>19</sup>F Magic Angle Spinning (MAS) ss-NMR and DFT calculations. Moreover, NbOF<sub>3</sub> and HTB-TiOF<sub>2</sub> being partially hydroxylated, the agreement between calculated and experimental data has been significantly improved by substituting partially F for OH in the models.",
        doi: "https://doi.org/10.6084/m9.figshare.27115360.v2"
      },
      {
        type: CONFERENCE_TYPES.ORAL,
        titleHtml: "Structural Modeling of O/F Correlated Disorder in NbOF<sub>3</sub> and TaOF<sub>3</sub>",
        authors: [
          { name: "Ouail Zakary", isPI: true },
          { name: "Monique Body" },
          { name: "Thibault Charpentier" },
          { name: "Vincent Sarou-Kanian" },
          { name: "Christophe Legein" }
        ],
        conferenceNameHtml: "Alpine Conference on Magnetic Resonance on Solids",
        location: "Chamonix-Mont-Blanc, France",
        date: "4-8/09/2022",
        abstractHtml: "Inorganic oxyfluorides are heteroanionic inorganic compounds that present interesting physical properties. Due to similar anion size, oxide and fluoride anions can occupy the same crystallographic sites. However, a precise knowledge of the atomic arrangements in these compounds is required to interpret and enhance their properties. Since O and F atoms have quasi-similar scattering factors, structural modeling of disordered inorganic oxyfluorides is challenging using X-ray diffraction techniques that only provide average structures. On the other hand, the high sensitivity of solid-sate NMR spectroscopy to local environment of the probed nuclei make it ideal tool for disordered solids. To describe short and long-range order, supercell approach coupled with DFT calculations of the NMR parameters has proven to be efficient. In this study, the structures of NbOF<sub>3</sub> and TaOF<sub>3</sub> were revised using X-ray powder diffraction and <sup>19</sup>F MAS ss-NMR spectroscopy. The MO<sub>2</sub>F<sub>4</sub> octahedra are connected via four common corners forming sheets stacked via van der Walls interactions. The anions are located on two different crystallographic sites: the non-bridging one, fully occupied by F, and the bridging one, equally occupied by O and F. Considering the O/F correlated disorder previously suggested, ten possible 2x2x1 supercells were built and DFT optimized with and without semi-empirical dispersion correction. The resulting agreement between the experimental and the theoretical <sup>19</sup>F isotropic chemical shifts indicates that these ten models describe accurately the disorder in the studied structures.",
        doi: "https://doi.org/10.6084/m9.figshare.27111496.v2"
      },
      {
        type: CONFERENCE_TYPES.ORAL,
        titleHtml: "Structural Modeling of Disordered Inorganic Oxyfluorides by Coupling Solid State NMR and DFT Calculations",
        authors: [
          { name: "Ouail Zakary", isPI: true },
          { name: "Thibault Charpentier" },
          { name: "Monique Body" },
          { name: "Christophe Legein" }
        ],
        conferenceNameHtml: "Réunion RMN Grand Bassin Parisien",
        location: "Orsay, France",
        date: "19/11/2021",
        abstractHtml: "Tantalum and niobium oxyfluorides are part of the heteroanionic inorganic compounds that present interesting physical proprieties. In order to interpret and enhance such properties, a detailed structural modeling of the structure of this type of compounds is required. Structural modeling of inorganic disordered oxyfluorides is more challenging, since their structure is majoritively chemically disordered, precisely, anionic disorder, that is difficult to characterize using conventional diffraction techniques, as O and F atoms are indistinguishable due to their quasi-similar scattering factors. The average structure given by such techniques stays inadequate to describe disorder in such type of solids. On the other hand, solid-state NMR spectroscopy (ss-NMR) sensitivity to short-range environmental effects exerted on probed nuclei, coupled DFT calculations bring forth accurate structural solutions that were unfeasible before determining theoretical NMR parameters using the gauge including projector augmented wave (GIPAW) approach, is crucial to make accurate assignments of the experimental NMR lines, also to provide profound structural insights. In this study, the structure of NbOF<sub>3</sub> and TaOF<sub>3</sub> was precisely modeled, combining X-ray powder diffraction, <sup>19</sup>F and <sup>1</sup>H MAS ss-NMR spectroscopy and DFT calculations. The results suggests unambiguously the existence of one-dimensional strings of correlated O/F disorder in the equatorial crystallographic site along <100> and <010> directions for both compounds. The bridging site is distributed with equal anionic occupancies. Whereas, the non-bridging site is totally occupied by F. Using 2x2x1 supercells, DFT calculations suggests the possibility of ten unique models for each compound.",
        doi: "https://doi.org/10.6084/m9.figshare.27111955.v2"
      },
      {
        type: CONFERENCE_TYPES.CONTRIBUTED,
        titleHtml: "Efficient and Accurate Local Equivariant Deep Neural Network Interatomic Potential for Large-Scale Porous Liquids Simulations",
        authors: [
          { name: "Ouail Zakary", isPI: true },
          { name: "Perttu Lantto" }
        ],
        conferenceNameHtml: "Winter School in Theoretical Chemistry 2024",
        location: "Helsinki, Finland",
        date: "09-12/12/2024",
        abstractHtml: "Porous materials serve diverse applications like molecular separations and catalysis [1], offering an energy-efficient method for capturing greenhouse gases (CO<sub>2</sub>, and CH<sub>4</sub>) and valuable noble gases (Xe, Ar, and Kr). Xenon — vital in optics, medicine, and nuclear fission processes [2] — poses extraction challenges due to its low atmospheric abundance (0.087 ppm by volume) and inertness, driving high commercial costs. Porous materials must exhibit precise size selectivity [3] and high adsorption capacity for effective xenon isolation in commercial applications. The recent development of porous liquids (PLs) with cavities formed by porous organic cages (POCs) has shown promise in addressing these challenges [4, 5]. Understanding the binding, occupancies, dynamics, and equilibrium between the host (PL and POC) and the guest (Xe) is vital in engineering new POCs with targeted functionalities. Molecular dynamics (MD) simulations have proven essential for understanding and exploring the physicochemical processes governing these systems. In MD simulations, atom movements are governed by forces derived as gradients of the potential energy surface (PES) of the system. Typically, the PES is accurately obtained by calculating the electronic structure using methods like density functional theory (DFT). While this combination of MD with DFT offers precise interatomic forces, their computational scaling limits simulations to tens of picoseconds and a few hundred atoms, which is far from capturing realistic timescales and size of these porous systems. Classical models for computing PES, although faster, lack accuracy. In recent years, machine learning (ML), particularly neural networks (NNs), has emerged as a promising solution to these limitations [6-8] by learning accurate interatomic potentials from a set of high-fidelity ab initio reference calculations while maintaining computational efficiency.Here, we present a machine learning interatomic potential (MLIP) model constructed using the local equivariant deep NN architecture, Allegro [9]. This model was trained, validated, and tested on energies, forces, and virials — computed at the DFT-D4 level with PBE functional and periodic boundary conditions — of structures issued from semi-empirical MD simulations performed at RT and 600K, from a dataset comprising over 1600 structures consisting of 600 to 1170 atoms (H, C, N, O, F, Cl, and Xe). These structures comprise one to two xenon atoms in TBA-type, HAP-type, and DCT-type PLs, as well as CC3 POC where Xe atoms are positioned inside or near the cavities of the POC. The dataset encompasses 1.8 million atoms, with 12.5 million data points used in the process. The MLIP will be applied to provide microscopic interpretation of experimental <sup>129</sup>Xe NMR observations. In this step, we will construct an ML model for magnetic shielding tensors, σ, obtained from the dataset. This ML model will later be used to predict σ in MD simulations to explain experimental, both static spectral and dynamic relaxation, data. References: [1] A. G. Slater, A. I. Cooper, Science 348 (2015) 988. [2] W. M. Stacey, Nuclear Reactor Physics, Wiley-VCH, Weinheim, 2007. [3] T. Mitra, K. E. Jelfs, M. Schmidtmann, A. Ahmed, S. Y. Chong, D. J. Adams, A. I. Cooper, Nat. Chem. 5 (2013) 276–281. [4] T. Tozawa, J. T. A. Jones, S. I. Swamy, S. Jiang, D. J. Adams, S. Shakespeare, R. Clowes, D. Bradshaw, T. Hasell, S. Y. Chong, C. Tang, S. Thompson, J. Parker, A. Trewin, J. Bacsa, A. M. Z. Slawin, A. Steiner, A. I. Cooper, Nat. Mater. 8 (2009) 973–978. [5] L. Chen, P. S. Reiss, S. Y. Chong, D. Holden, K. E. Jelfs, T. Hasell, M. A. Little, A. Kewley, M. E. Briggs, A. Stephenson, K. M. Thomas, J. A. Armstrong, J. Bell, J. Busto, R. Noel, J. Liu, D. M. Strachan, P. K. Thallapally, A. I. Cooper, Nat. Mater. 13 (2014) 954–960. [6] S. Chmiela, H. E. Sauceda, K. R. Müller, A. Tkatchenko, Nat. Commun. 9 (2018) 3887. [7] S. Batzner, A. Musaelian, L. Sun, M. Geiger, J. P. Mailoa, M. Kornbluth, N. Molinari, T. E. Smidt, B. Kozinsky, Nat. Commun. 13 (2022) 2453. [8] J. Vandermause, Y. Xie, J. S. Lim, C. Owen, B. Kozinsky, Nat. Commun. 15 (2021) 5183. [9] A. Musaelian, S. Batzner, A. Johansson, L. Sun, C. J. Owen, M. Kornbluth, B. Kozinsky, Nat. Commun. 14 (2023), 579.",
        doi: "http://www.chem.helsinki.fi/ws2024.html"
      },
      {
        type: CONFERENCE_TYPES.WORKSHOP,
        titleHtml: "Machine Learning of First Principles Observables",
        authors: [
          { name: "Ouail Zakary", isPI: true },
        ],
        conferenceNameHtml: "Centre Européen de Calcul Atomique et Moléculaire (CECAM)",
        location: "Berlin, Germany",
        date: "08-12/07/2024",
        abstractHtml: "Recently, Machine Learning (ML) methods have penetrated almost all research areas in materials modelling and high-throughput materials screening. And yet the ML triumph has so far mainly focused on developing surrogate models for the potential energy surface (PES) with superior computational efficiency while retaining first principles accuracy. The approach to learn observable properties directly is just emerging and is challenged by several issues, which we intend to address. The event is meant to support the development of a new collaborative, international network connecting different fields of research and integrating the young researchers community with the help of a scientifically diverse, interactive workshop.",
        doi: "https://www.cecam.org/workshop-details/machine-learning-of-first-principles-observables-1322"
      },
      {
        type: CONFERENCE_TYPES.WORKSHOP,
        titleHtml: "Moving ions with VASP",
        authors: [
          { name: "Ouail Zakary", isPI: true },
        ],
        conferenceNameHtml: "University of Vienna",
        location: "Online (Zoom)",
        date: "27-30/09/2022",
        abstractHtml: "In 4 days of lectures and hands-on sessions, this workshop covers ab-initio molecular dynamics, machine learning force fields, structure prediction, and phonons. During the hands-on sessions, you will learn to perform your own ab-initio simulations using the Vienna Ab-initio Simulation Package (VASP). Additionally, you have the extraordinary opportunity to meet the team developing VASP to learn from them how to simulate the properties of materials.",
        doi: "https://www.vasp.at/info/post/moving-ions-workshop-2022/"
      },
      // Add more conferences here
    ];
  
    const getBackgroundColor = (type) => {
      switch (type) {
        case CONFERENCE_TYPES.POSTER:
          return "bg-purple-50";
        case CONFERENCE_TYPES.ORAL:
          return "bg-blue-50";
        case CONFERENCE_TYPES.CONTRIBUTED:
          return "bg-green-50";
        case CONFERENCE_TYPES.INVITED:
          return "bg-yellow-50";
        case CONFERENCE_TYPES.WORKSHOP:
          return "bg-red-50";
        default:
          return "bg-white";
      }
    };
  
    return (
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Conference Proceedings</h2>
        <div className="space-y-6">
          {Object.values(CONFERENCE_TYPES).map((type) => (
            <div key={type}>
              <h3 className="text-xl font-semibold mb-4">{type}</h3>
              <div className="space-y-4">
                {conferences
                  .filter(conf => conf.type === type)
                  .map((conference, index) => {
                    // Create unique ID for each conference
                    const conferenceId = `${type}-${index}`;
                    
                    return (
                      <div 
                        key={conferenceId} 
                        className={`${getBackgroundColor(conference.type)} p-6 rounded-lg shadow-md`}
                      >
                        <h4 
                          className="font-bold text-lg mb-2"
                          dangerouslySetInnerHTML={{ __html: conference.titleHtml }}
                        />
                        <p className="text-gray-600 mb-2">
                          {conference.authors.map((author, idx) => (
                            <span key={idx}>
                              {author.isPI ? <b>{author.name}</b> : author.name}
                              {idx < conference.authors.length - 1 ? ", " : ""}
                            </span>
                          ))}
                        </p>
                        <p 
                          className="text-gray-700 mb-2"
                          dangerouslySetInnerHTML={{ __html: conference.conferenceNameHtml }}
                        />
                        <p className="text-gray-600 mb-2">
                          {conference.location}, {conference.date}
                        </p>
                        
                        <div className="flex items-center gap-4 mt-4">
                          <button
                            onClick={() => setSelectedConference(
                              selectedConference === conferenceId ? null : conferenceId
                            )}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                          >
                            {selectedConference === conferenceId ? 'Hide Details' : 'More Details'}
                          </button>
  
                          <a 
                            href={conference.doi}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                          >
                            <Database className="w-4 h-4" /> DOI
                          </a>
                        </div>
  
                        {selectedConference === conferenceId && (
                          <div className="mt-4 p-4 bg-white rounded-lg">
                            <p 
                              className="text-gray-700"
                              dangerouslySetInnerHTML={{ __html: conference.abstractHtml }}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
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

  const Code = () => {
    const projects = [
      {
        titleHtml: "data-NaMO2F2",
        descriptionHtml: "This is the Supporting Dataset for the manuscript “Different Magnitudes of Second-Order Jahn-Teller Effect in Isostructural NaMO<sub>2</sub>F<sub>2</sub> (M = Nb, Ta) Oxyfluorides”.",
        technologies: ["Python", "Shell", "F*", "VASP"],
        github: "https://github.com/ozakary/data-NaMO2F2",
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
      <Navigation />
      <div className="relative z-10 pt-24 px-4 pb-12">
        <TabContent />
      </div>
    </div>
  );
};

export default App;
