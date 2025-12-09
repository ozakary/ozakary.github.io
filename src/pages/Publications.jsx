import React, { useState } from 'react';
import { BookOpen, Code, Users, Award, FileText, Database, Mail, Github, Linkedin, Book, Menu, X } from 'lucide-react';
import InfoPanel from '../components/InfoPanel';

  const Publications = () => {
    const PUBLICATION_TYPES = {
      PUBLISHED: "published",
      SUBMITTED: "submitted",
      IN_PREPARATION: "in_preparation"
    };

    const publications = [
//      {
//        type: PUBLICATION_TYPES.IN_PREPARATION,
//        titleHtml: `Short-Range Ordering and Phase Transition in RuP Superconductor Unlocked by Machine Learning-Accelerated Molecular Dynamics`,
//        authors: [
//          { name: "Ouail Zakary*", isPI: true },
//          { name: "Emil S. Bozin"},
//          { name: "Weiguo Yin"},
//          { name: "Nraj Aryal*"},
//        ],
//        journal: "In preperation",
//        volume: "xx",
//        pages: "xx",
//        year: "2026",
//        doi: "#",
//        isOpenAccess: false,
//        isSubscribed: false,
//        descriptionHtml: `xx`,
//        contribution: "Conceptualization, Methodology, Software, Formal analysis, Investigation, Validation, Data Curation, Writing - Original Draft, Writing - Review & Editing, Visualization, and Project administration."
//      },
//      {
//        type: PUBLICATION_TYPES.IN_PREPARATION,
//        titleHtml: `Xenon Transport in Carbon Nanotubes Investigated using Machine Learning-Accelerated Molecular Dynamics and <sup>129</sup>Xe NMR Simulations`,
//        authors: [
//          { name: "Ouail Zakary*", isPI: true },
//          { name: "Tiia Jacklin"},
//          { name: "Perttu Lantto"}
//        ],
//        journal: "In preperation",
//        volume: "xx",
//        pages: "xx",
//        year: "2025",
//        doi: "#",
//        isOpenAccess: false,
//        isSubscribed: false,
//        descriptionHtml: `xx`,
//        contribution: "Conceptualization, Methodology, Software, Formal analysis, Investigation, Validation, Data Curation, Writing - Original Draft, Writing - Review & Editing, Visualization, and Project administration."
//      },
//      {
//        type: PUBLICATION_TYPES.IN_PREPARATION,
//        titleHtml: `Hidden Short-Range Order in Mixed-Anion Sodium-Oxyfluorotantalates`,
//        authors: [
//          { name: "Ouail Zakary*", isPI: true },
//          { name: "Monique Body"},
//          { name: "Vincent Sarou-Kanian"},
//          { name: "Christophe Legein"}
//        ],
//        journal: "In preperation",
//        volume: "xx",
//        pages: "xx",
//        year: "20XX",
//        doi: "#",
//        isOpenAccess: false,
//        isSubscribed: false,
//        descriptionHtml: `xx`,
//        contribution: "Conceptualization, Methodology, Formal analysis, Investigation, Validation, Data Curation, Writing - Original Draft, Writing - Review & Editing, Visualization, and Project administration."
//      },
//      {
//        type: PUBLICATION_TYPES.IN_PREPARATION,
//        titleHtml: `Insights into Proton-Transfer Effect on <sup>129</sup>Xe NMR in Liquid Water Using Equivariant Neural Networks`,
//        authors: [
//          { name: "Ouail Zakary*", isPI: true },
//          { name: "Matias Hintsanen"},
//          { name: "Perttu Lantto"},
//        ],
//        journal: "In preperation",
//        volume: "xx",
//        pages: "xx",
//        year: "2026",
//        doi: "#",
//        isOpenAccess: false,
//        isSubscribed: false,
//        descriptionHtml: `xx`,
//        contribution: "Conceptualization, Methodology, Software, Formal analysis, Investigation, Validation, Data Curation, Writing - Original Draft, Writing - Review & Editing, Visualization, and Project administration."
//      },
//      {
//        type: PUBLICATION_TYPES.IN_PREPARATION,
//        titleHtml: `On Nuclear Quantum Effects in Neutral and Charged Endohedral Fullerenes with Helium Monomer and Dimer and Their Influence on <sup>3</sup>He NMR Signatures: Insights from Machine Learning-Accelerated Simulations.`,
//        authors: [
//          { name: "Ossi Laurila*"},
//          { name: "Ouail Zakary*", isPI: true },
//          { name: "Perttu Lantto*"},          
//        ],
//        journal: "In preperation",
//        volume: "xx",
//        pages: "xx",
//        year: "2026",
//        doi: "#",
//        isOpenAccess: false,
//        isSubscribed: false,
//        descriptionHtml: `xx`,
//        contribution: "Conceptualization, Methodology, Formal analysis, Investigation, Validation, Data Curation, Writing - Original Draft, Writing - Review & Editing, and Project administration."
//      },
//      {
//        type: PUBLICATION_TYPES.IN_PREPARATION,
//        titleHtml: `Machine Learning-Driven Path Integral Molecular Dynamics and <sup>13</sup>C NMR Simulations Enable the Assignements of Singlet NMR in the Case of High Molecular Symmetry.`,
//        authors: [
//          { name: "Ossi Laurila*"},
//          { name: "Ouail Zakary*", isPI: true },
//          { name: "Perttu Lantto*"},          
//        ],
//        journal: "In preperation",
//        volume: "xx",
//        pages: "xx",
//        year: "2026",
//        doi: "#",
//        isOpenAccess: false,
//        isSubscribed: false,
//        descriptionHtml: `xx`,
//        contribution: "Conceptualization, Methodology, Formal analysis, Investigation, Validation, Data Curation, Writing - Original Draft, Writing - Review & Editing, Visualization, and Project administration."
//      },
//      {
//        type: PUBLICATION_TYPES.IN_PREPARATION,
//        titleHtml: `Unifying the Description of Type-II Porous Liquids Through Machine Learning-Accelerated Molecular Dynamics and <sup>129</sup>Xe NMR: Simulations Informing Experiments.`,
//        authors: [
//          { name: "Ouail Zakary*", isPI: true },
//          { name: "Sarah E. Mailhiot"},
//          { name: "Anne Selent"},
//          { name: "Jiří Mareš"},
//          { name: "Perttu Lantto"},
//          { name: "Ville-Veikko Telkki*"},          
//        ],
//        journal: "In preperation",
//        volume: "xx",
//        pages: "xx",
//        year: "2026",
//        doi: "#",
//        isOpenAccess: false,
//        isSubscribed: false,
//        descriptionHtml: `xx`,
//        contribution: "Conceptualization, Methodology, Formal analysis, Investigation, Validation, Data Curation, Writing - Original Draft, Writing - Review & Editing, Visualization, and Project administration."
//      },
//      {
//        type: PUBLICATION_TYPES.IN_PREPARATION,
//        titleHtml: `Probing R3@DMSO and R3S@H2O Porous Liquids Combining <sup>129</sup>Xe NMR and Machine Learning-Accelerated Simulations.`,
//        authors: [
//          { name: "Anne Selent"},
//          { name: "Ouail Zakary", isPI: true },
//          { name: "Jiří Mareš"},
//          { name: "Perttu Lantto"},
//          { name: "Ville-Veikko Telkki*"},          
//        ],
//        journal: "In preperation",
//        volume: "xx",
//        pages: "xx",
//        year: "2026",
//        doi: "#",
//        isOpenAccess: false,
//        isSubscribed: false,
//        descriptionHtml: `xx`,
//        contribution: "Conceptualization, Methodology, Formal analysis, Investigation, Validation, Data Curation, Writing - Original Draft, Writing - Review & Editing, Visualization, and Project Administration."
//      },
      {
        type: PUBLICATION_TYPES.SUBMITTED,
        titleHtml: `Machine Learning-Accelerated Path Integral Molecular Dynamics and <sup>13</sup>C NMR Simulations Unlock New Insights Into Quantum Effects in C<sub>60</sub> Fullerene`,
        authors: [
          { name: "Ossi Laurila"},
          { name: "Tiia Jacklin"},
          { name: "Ouail Zakary*", isPI: true },
          { name: "Perttu Lantto*"}
        ],
        journal: "Submitted for publication",
        volume: "xx",
        pages: "xx",
        year: "2025",
        doi: "https://doi.org/10.26434/chemrxiv-2025-68g6s-v2",
        isOpenAccess: false,
        isSubscribed: false,
        descriptionHtml: `A definitive answer on the existence and magnitude of the negative thermal expansion (NTE) and its effect on <sup>13</sup>C nuclear magnetic resonance (NMR) signature in C<sub>60</sub> fullerene has been previously demonstrated using quantum-mechanical treatments of thermal rovibrational motion. This approach, while accurate, is computationally expensive and lacks the implementation of dispersion corrections, limiting its scope for exploring the influence of such effects on the observed NTE. Alternative methods, such as ab initio path integral molecular dynamics (PIMD), are more flexible but remain computationally expensive, especially when combined with <sup>13</sup>C NMR parameter calculations. To overcome these limitations, we introduce an accurate and efficient neural network–based approach that combines machine learning interatomic potentials (MLIPs) with an NMR machine learning (NMR-ML) model. The MLIPs enable machine learning PIMD (MLPIMD) simulations, while the NMR-ML model computes <sup>13</sup>C isotropic magnetic shielding, <i>σ</i><sub>iso</sub>, directly from MLPIMD snapshots. We perform temperature-dependent MLPIMD simulations with MLIPs trained at different levels of theory. In all cases, NTE is observed, and the results reveal how both dispersion and basis set choices influence its magnitude. Furthermore, we confirm that NTE cannot be observed using classical MD simulations, highlighting its quantum-mechanical origin. To further tests our approach, we investigate <sup>13</sup>C NMR, by performing <sup>13</sup>C <i>σ</i><sub>iso</sub> calculations for the three C<sub>60</sub> isotopomers, including one with <sup>13</sup>C at a site shared by one pentagon and two hexagons, one with two <sup>13</sup>C at a C–C bond shared by two hexagons, and one with two <sup>13</sup>C at a C–C bond shared by a hexagon and a pentagon. The results show a good agreement with the experimental data, highlighting the accuracy of our approach. This work demonstrates that ML-accelerated simulations enable accurate and efficient modeling of thermally activated quantum mechanical phenomena.`,
        contribution: "Conceptualization, Methodology, Software, Formal analysis, Investigation, Validation, Data Curation, Writing - Original Draft, Writing - Review & Editing, Supervision, and Project Administration."
      },
      {
        type: PUBLICATION_TYPES.SUBMITTED,
        titleHtml: `Hexagonal-Tungsten-Bronze TiOF<sub>2</sub>: Synthesis, Crystal Structure and Anionic Short-Range Ordering`,
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
          { name: "Damien Dambournet*" }
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
        titleHtml: `Equivariant Neural Networks Reveal How Host–Guest Interactions Shape <sup>129</sup>Xe NMR in Porous Liquids`,
        authors: [
          { name: "Ouail Zakary*", isPI: true },
          { name: "Perttu Lantto"}
        ],
        journal: "The Journal of Physical Chemistry Letters",
        volume: "16",
        pages: "12095-12103",
        year: "2025",
        doi: "https://doi.org/10.1021/acs.jpclett.5c02846",
        isOpenAccess: true,
        isSubscribed: false,
        descriptionHtml: `Understanding host-guest interactions in porous liquids (PLs) formed from porous organic cages (POCs) is pivotal in tailoring their physicochemical properties, therefore, providing an avenue for engineering new PLs with enhanced functionalities. In this work, we demonstrate, for the first time, the use of an accurate and efficient machine learning-based approach for atomistic modeling of host-guest interactions in large-scale PLs. The approach uses E(3)-equivariant graph neural networks (EGNNs) to construct a machine learning interatomic potential and a nuclear magnetic resonance machine learning model. The former enables machine learning molecular dynamics (MLMD) simulations, while the latter computes <sup>129</sup>Xe isotropic chemical shift, <i>δ</i><sub>iso</sub>, from MLMD snapshots. Applied to a PL composed of CC3-R POC in 4-(trifluoromethoxy)benzyl alcohol (TBA) solvent loaded with high Xe concentration, this dual-model approach shows that host(CC3)–guest(Xe) interactions are best described by a three-site binding model comprising the CC3 intrinsic cavity, CC3 openings, and TBA solvent, with exchange events occurring between these sites. Good agreement between computed and experimental <sup>129</sup>Xe <i>δ</i><sub>iso</sub> validates our approach, demonstrating EGNN-based simulations as transformative tools for advancing PL understanding.`,
        contribution: "Conceptualization, Methodology, Software, Formal analysis, Investigation, Validation, Data Curation, Writing - Original Draft, Writing - Review & Editing, Visualization, Project Administration."
      },
      {
        type: PUBLICATION_TYPES.PUBLISHED,
        titleHtml: `Revealed Preferential Short-Range Anion Ordering in Disordered RbM<sub>2</sub>O<sub>5</sub>F (M= Nb, Ta) Pyrochlore-Type Oxyfluorides`,
        authors: [
          { name: "Ouail Zakary*", isPI: true },
          { name: "Monique Body" },
          { name: "Vincent Sarou-Kanian" },
          { name: "Thibault Charpentier" },
          { name: "Christophe Legein" }
        ],
        journal: "Inorganic Chemistry",
        volume: "64",
        pages: "5764-5777",
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
          { name: "Ouail Zakary*", isPI: true },
          { name: "Monique Body" },
          { name: "Vincent Sarou-Kanian" },
          { name: "Brice Arnaud" },
          { name: "Gwenaël Corbel*" },
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
          { name: "Ouail Zakary*", isPI: true },
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
          { name: "Ouail Zakary*", isPI: true },
          { name: "Monique Body*" },
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

export default Publications;
