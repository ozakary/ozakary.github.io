import React, { useState } from 'react';
import { BookOpen, Code, Users, Award, FileText, Database, Mail, Github, Linkedin, Book, Menu, X } from 'lucide-react';
import InfoPanel from '../components/InfoPanel';

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
        type: CONFERENCE_TYPES.CONTRIBUTED,
        titleHtml: "Equivariant Neural Networks Reveal How Host–Guest Interactions Shape Xenon NMR Chemical Shift in Porous Organic Cages",
        authors: [
          { name: "Ouail Zakary", isPI: true }
        ],
        conferenceNameHtml: "The 21<sup>th</sup> European Magnetic Resonance Congress (EUROMAR)",
        location: "Oulu, Finland",
        date: "06-10/07/2025",
        abstractHtml: "Porous materials serve diverse applications like molecular separations and catalysis [1], offering energy-efficient methods for capturing greenhouse gases and valuable noble gases including xenon. Despite its importance in medicine and nuclear processes [2], xenon extraction remains challenging due to its low atmospheric concentration (0.087 ppm) and inertness. Porous materials with precise size selectivity [3] and high adsorption capacity are essential for effective xenon isolation. Recent developments in porous liquids (PLs) with cavities formed by porous organic cages (POCs) show promise in addressing these challenges [4]. Understanding the binding, occupancies, dynamics, and equilibrium between the host (POC) and the guest (Xe) is vital for engineering new PLs with targeted properties. While computational simulations are essential for exploring PLs, common approaches face limitations—quantum methods are computationally expensive for large systems, while classical methods are inaccurate. In this work, we present two complementary machine learning (ML) models: (1) an ML interatomic potential (MLIP) obtained by training E3-equivariant graph neural network (GNN), Allegro [5], on a PBE-D4 theory-level dataset; and (2) an NMR-ML model obtained by training the invariant GNN, SchNet [6], on a PBE-(SVP,TZVP)/BHandHLYP-SVP theory-level dataset. The MLIP model enables accurate, data-efficient, and transferable large-scale molecular dynamics simulations and the NMR-ML model enable predicting Xe NMR chemical shifts. These simulations provide microscopic interpretations of experimental 129Xe NMR observations. [1] A. G. Slater, A. I. Cooper, Science 348, 988 (2015); [2] W. M. Stacey, Nuclear Reactor Physics, Wiley-VCH, Weinheim, (2007); [3] T. Mitra et al., Nat. Chem. 5, 276 (2013); [4] L. Chen et al., Nat. Mater. 13, 954 (2014); [5] A. Musaelian et al., Nat. Commun. 14, 579 (2023); [6] K. Schütt et al., Advances in neural information processing systems 30, (2017).",
        doi: "https://www.conftool.org/euromar2025/index.php?page=browseSessions&presentations=show&search=ouail+zakary"
      },
      {
        type: CONFERENCE_TYPES.POSTER,
        titleHtml: "Host-Guest Dynamics in Porous Liquids Modeled Using E(3)-Equivariant Neural Networks",
        authors: [
          { name: "Ouail Zakary", isPI: true },
          { name: "Perttu Lantto" }
        ],
        conferenceNameHtml: "The 13<sup>th</sup> Triennial Congress of the World Association of Theoretical and Computational Chemists (WATOC 2025)",
        location: "Oslo, Norway",
        date: "21-27/06/2025",
        abstractHtml: "Porous organic cages (POCs) in porous liquids (PLs) offer promising platforms for selective Xe capture. Understanding Xe binding and dynamics in these systems is crucial for material design. While DFT-based molecular dynamics (MD) accurately models these interactions, it is computationally prohibitive for large systems. Machine learning interatomic potentials (MLIPs), particularly neural networks like Allegro, provide a scalable alternative. We present an MLIP trained on DFT-D4 theory-level data for PLs and POCs with Xe, covering over 1.8 million atoms across varied structures. Furthermore, we train an invariant SchNet model to predict <sup>129</sup>Xe NMR magnetic shielding tensors, offering microscopic insights into static NMR spectra and dynamic relaxation behaviors.",
        doi: "https://doi.org/10.6084/m9.figshare.28684814.v1"
      },
      {
        type: CONFERENCE_TYPES.POSTER,
        titleHtml: "Local E(3)-Equivariant Neural Network Force Field for Modeling Host-Guest Interactions in Xenon-Based Porous Organic Cages",
        authors: [
          { name: "Ouail Zakary", isPI: true },
          { name: "Perttu Lantto" }
        ],
        conferenceNameHtml: "Computational Chemistry Days 2025",
        location: "Espoo, Finland",
        date: "02-03/06/2025",
        abstractHtml: "Porous organic cages (POCs) in porous liquids (PLs) offer promising platforms for selective Xe capture. Understanding Xe binding and dynamics in these systems is crucial for material design. While DFT-based molecular dynamics (MD) accurately models these interactions, it is computationally prohibitive for large systems. Machine learning interatomic potentials (MLIPs), particularly neural networks like Allegro, provide a scalable alternative. We present an MLIP trained on DFT-D4 theory-level data for PLs and POCs with Xe, covering over 1.8 million atoms across varied structures. Furthermore, we train an invariant SchNet model to predict <sup>129</sup>Xe NMR magnetic shielding tensors, offering microscopic insights into static NMR spectra and dynamic relaxation behaviors.",
        doi: "https://doi.org/10.6084/m9.figshare.28684814.v1"
      },
      {
        type: CONFERENCE_TYPES.POSTER,
        titleHtml: "Machine Learning Driven Approach for Modeling Host-Guest Dynamics in Xenon-Based Porous Liquids",
        authors: [
          { name: "Ouail Zakary", isPI: true },
          { name: "Perttu Lantto" }
        ],
        conferenceNameHtml: "Physics Days 2025",
        location: "Oulu, Finland",
        date: "26-28/03/2025",
        abstractHtml: "Porous materials serve diverse applications like molecular separations and catalysis, offering an energy-efficient method for capturing greenhouse gases (CO<sub>2</sub>, and CH<sub>4</sub> ) and valuable noble gases (Xe, Ar, and Kr). Xenon — vital in optics, medicine, and nuclear fission processes — poses extraction challenges due to its low atmospheric abundance (0.087 ppm by volume) and inertness, driving high commercial costs. Porous materials must exhibit precise size selectivity and high adsorption capacity for effective xenon isolation in commercial applications. The recent development of porous liquids (PLs) with cavities formed by porous organic cages (POCs) has shown promise in addressing these challenges. Understanding the binding, occupancies, dynamics, and equilibrium between the host (PL and POC) and the guest (Xe) is vital in engineering new POCs with targeted functionalities. Molecular dynamics (MD) simulations have proven essential for understanding and exploring the physicochemical processes governing these systems. In MD simulations, atom movements are governed by forces derived as gradients of the potential energy surface (PES) of the system. Typically, the PES is accurately obtained by calculating the electronic structure using methods like density functional theory (DFT). While this combination of MD with DFT offers precise interatomic forces, their computational scaling limits simulations to tens of picoseconds and a few hundred atoms, which is far from capturing realistic timescales and size of these porous systems. <br> Classical models for computing PES, although faster, lack accuracy. In recent years, machine learning (ML), particularly neural networks (NNs), has emerged as a promising solution to these limitations by learning accurate interatomic potentials from a set of high-fidelity ab initio reference calculations while maintaining computational efficiency. <br> Here, we present a machine learning interatomic potential (MLIP) model constructed using the local equivariant deep NN architecture, Allegro. This model was trained, validated, and tested on energies, forces, and virials — computed at the DFT-D4 level with PBE functional and periodic boundary conditions — of structures issued from semi-empirical MD simulations performed at RT and 600K, from a dataset comprising over 1600 structures consisting of 600 to 1170 atoms (H, C, N, O, F, Cl, and Xe). These structures comprise one to two xenon atoms in TBA-type, HAP-type, and DCT-type PLs, as well as CC3 POC where Xe atoms are positioned inside or near the cavities of the POC. The dataset encompasses 1.8 million atoms, with 12.5 million data points used in the process. <br> The MLIP will be applied to provide microscopic interpretation of experimental 129Xe NMR observations. In this step, we will construct an ML model for magnetic shielding tensors, obtained from the dataset. This ML model will later be used to predict the magnetic shielding in MD simulations to explain experimental, both static spectral and dynamic relaxation, data.",
        doi: "https://doi.org/10.6084/m9.figshare.28684814.v1"
      },
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
        titleHtml: "Caractérisations et modélisations structurales de fluorures inorganiques désordonnés: apports de la RMN du solide et des calculs DFT",
        authors: [
          { name: "Christophe Legein" },
          { name: "Monique Body" },
          { name: "Ouail Zakary", isPI: true },
          { name: "Jérôme Lhoste" },
          { name: "Franck Fayon" },
          { name: "Damien Dambournet" }

        ],
        conferenceNameHtml: "Colloque Français de Chimie du Fluor, CFCF",
        location: "Forges-les-Eaux, France",
        date: "16-19/05/2022",
        abstractHtml: "Cette communication illustre, par quelques exemples tirés de nos travaux récents, l’apport de la RMN du solide et de la modélisation par DFT des paramètres RMN, à la description structurale de fluorures inorganiques désordonnés. La RMN de <sup>19</sup>F a permis d’identifier et quantifier les divers environnements du fluor dans une anatase hydroxyfluorée lacunaire cationique mais aussi après insertion d’ions mono ou polyvalents, contribuant ainsi à mieux comprendre leur intercalation dans ce matériau d’anode pour batterie.[1] Dans le cas des ions Al<sup>3+</sup>, la RMN haut champ de <sup>27</sup>Al a contribué à caractériser un mécanisme d'insertion complexe dans trois types de sites hôtes distincts.[2] Les spectres RMN haut champ de <sup>27</sup>Al de matériaux nanostructurés β-AlF<sub>3-<i>x</i></sub>(OH)<sub><i>x</i></sub> permettent de distinguer quatre résonances attribuées à quatre environnements AlF<sub>6-<i>y</i></sub>(OH)<sub><i>y</i></sub> sur la base de calculs DFT.[3] Les teneurs en ions OH<sup>-</sup> ont ainsi pu être estimées ; elles varient de ∼16% (AlF<sub>2.52</sub>(OH)<sub>0.48</sub>) à ∼19% (AlF<sub>2.42</sub>(OH)<sub>0.58</sub>) pour des surfaces spécifiques comprises entre 25 et 345 m<sup>2</sup>.g<sup>-1</sup>. La RMN de <sup>19</sup>F est particulièrement efficace pour sonder l'ordre oxygène/fluor et donc caractériser l'arrangement anionique dans des oxyfluorures désordonnés. Les structures des isotypes NbO<sub>2</sub>F et TaO<sub>2</sub>F [4] d’une part, et NbOF<sub>3</sub> et TaOF<sub>3</sub> d’autre part, ont été modélisées à l’aide de supermailles permettant de satisfaire les désordres corrélés qui les caractérisent. Les paramètres RMN de <sup>19</sup>F calculés à partir de ces modèles, en très bon accord avec les paramètres expérimentaux, valident ces modèles structuraux. Références [1] T. Koketsu, J. Ma, B. J. Morgan, M. Body, C. Legein, W. Dachraoui, M. Giannini, A. Demortiere, M. Salanne, F. Dardoize, H. Groult, O. J. Borkiewicz, K. W. Chapman, P. Strasser, D. Dambournet, Nat. Mater. 2017, 16, 1142–1148. [2] C. Legein, B. J. Morgan, F. Fayon, T. Koketsu, J. Ma, M. Body, V. Sarou-Kanian, X.-K. Wei, M. Heggen, O. J. Borkiewicz, P. Strasser, D. Dambournet, Angew. Chem. Int. Ed. 2020, 59, 19247–19253. [3] V. Camus-Genot, A. Guiet, J. Lhoste, F. Fayon, M. Body, S. Kodjikian, R. Moury, M. Leblanc, J.-L. Bobet, C. Legein, V. Maisonneuve, Cryst. Growth Des. 2021, 21, 5914−5927. [4] J. Dabachi, M. Body, C. Galven, F. Boucher, C. Legein, Inorg. Chem. 2017, 56, 5219−5232.",
        doi: "https://hal.science/hal-05287392v1"
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
        titleHtml: "Electronic Structure Theory",
        authors: [
          { name: "Ouail Zakary", isPI: true },
        ],
        conferenceNameHtml: "Winter School in Theoretical Chemistry 2025",
        location: "Helsinki, Finland",
        date: "15-18/12/2025",
        abstractHtml: "XXX.",
        doi: "http://www.chem.helsinki.fi/ws2025.html"
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

export default Conferences;
