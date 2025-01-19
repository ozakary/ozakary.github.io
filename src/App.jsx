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
            src="/profile-picture.png"
            alt="Dr. Ouail Zakary"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Dr. Ouail Zakary</h2>
          <p className="text-lg text-gray-600">Postdoctoral Researcher</p>
          <p className="text-gray-600">NMR Research Unit, University of Oulu</p>
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/ozakary" className="text-blue-600 hover:text-blue-800">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ouail-zakary-a63a521b9" className="text-blue-600 hover:text-blue-800">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="Ouail.Zakary@oulu.fi" className="text-blue-600 hover:text-blue-800">
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

  const Publications = () => {
    const PUBLICATION_TYPES = {
      PUBLISHED: "published",
      SUBMITTED: "submitted",
      IN_PREPARATION: "in_preparation"
    };

    const publications = [
      {
        type: PUBLICATION_TYPES.IN_PREPARATION,
        titleHtml: `Negative Thermal Expansion and Isotope Effect of Chemical Shift of C60-Fullerene Using Machine Learning Methods`,
        authors: [
          { name: "Ossi Laurila"},
          { name: "Ouail Zakary", isPI: true },
          { name: "Perttu Lantto"}
        ],
        journal: "In preperation",
        volume: "xx",
        pages: "xx",
        year: "20XX",
        doi: "#",
        isOpenAccess: false,
        isSubscribed: false,
        descriptionHtml: `xx`,
        contribution: "Methodology, Software, Formal analysis, Investigation, Validation, Data Curation, Writing - Review & Editing."
      },
      {
        type: PUBLICATION_TYPES.IN_PREPARATION,
        titleHtml: `Host-Guest Dynamics in Porous Liquids Modeled Combining <sup>129</sup>Xe NMR with Atomistic Machine Learning Driven Simulations`,
        authors: [
          { name: "Ouail Zakary", isPI: true },
          { name: "Perttu Lantto"}
        ],
        journal: "In preperation",
        volume: "xx",
        pages: "xx",
        year: "20XX",
        doi: "#",
        isOpenAccess: false,
        isSubscribed: false,
        descriptionHtml: `xx`,
        contribution: "Conceptualization, Methodology, Software, Formal analysis, Investigation, Validation, Data Curation, Writing - Original Draft, Writing - Review & Editing, Visualization."
      },      
      {
        type: PUBLICATION_TYPES.IN_PREPARATION,
        titleHtml: `Disordered Na<sub>2</sub>M<sub>2</sub>O<sub>5</sub>F<sub>2</sub> (M=Nb, Ta) Oxyfluorides: Short- and Long-Range Anion Arrangment Modeling Using a Multimodal Approach`,
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
        contribution: "Conceptualization, Methodology, Formal analysis, Investigation, Validation, Data Curation, Writing - Original Draft, Writing - Review & Editing, Visualization."
      },
      {
        type: PUBLICATION_TYPES.SUBMITTED,
        titleHtml: `Hexagonal-Tungsten-Bronze TiOF<sub>2</sub>: Synthesis, Crystal Structure and Anionic Short-range Ordering.`,
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
        type: PUBLICATION_TYPES.SUBMITTED,
        titleHtml: `Revealed Preferential Short-Range Anion Ordering in Disordered RbM<sub>2</sub>O<sub>5</sub>F (M= Nb, Ta) Pyrochlore-Type Oxyfluorides`,
        authors: [
          { name: "Ouail Zakary", isPI: true },
          { name: "Monique Body" },
          { name: "Vincent Sarou-Kanian" },
          { name: "Thibault Charpentier" },
          { name: "Christophe Legein" }
        ],
        journal: "Submitted for publication",
        volume: "xx",
        pages: "xx",
        year: "2025",
        doi: "#",
        isOpenAccess: false,
        isSubscribed: false,
        descriptionHtml: `xx`,
        contribution: "Conceptualization, Methodology, Formal analysis, Investigation, Validation, Data Curation, Writing - Original Draft, Writing - Review & Editing, Visualization."
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
          <p 
            className="text-gray-700 mb-4"
            dangerouslySetInnerHTML={{ 
              __html: publication.descriptionHtml 
            }}
          />
          <div className="mb-4">
            <h4 className="font-semibold text-sm text-gray-700 mb-1">CRediT authorship contribution statement:</h4>
            <p className="text-sm text-gray-600">{publication.contribution}</p>
          </div>
          <div className="flex gap-4">
            <a 
              href={`https://doi.org/${publication.doi}`} 
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
      </div>
    );
  };

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
