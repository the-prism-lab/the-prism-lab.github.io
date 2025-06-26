---
layout: post
title: Exploring thionation with Hückel molecular orbital theory
date: 2023-02-01 09:56:00-0400
description: Hückel theory reveals sulfur's electron-accepting secret
tags: calculations
# categories: sample-posts
# giscus_comments: false
# related_posts: false
# related_publications: false
---

Hückel Molecular Orbital (HMO) theory stands as one of my favourite concepts from my undergraduate studies in physical organic chemistry. Despite its simplicity and the underlying assumptions, it offers an intuitive understanding of π-conjugated molecules and is a readily comprehensible extension of the somewhat simplistic particle-in-a-box model.

Recently, while pondering the question of why thionating a carbonyl molecule enhances its electron-accepting capabilities, as explored in our 2023 publication (PCCP [DOI: 10.1039/D2CP05186A](https://pubs.rsc.org/en/content/articlelanding/2023/cp/d2cp05186a)), I realized that the good old HMO theory could offer a fairly satisfying explanation. This question arose from our observations while working with various thiocarbonyl molecules (R<sub>2</sub>C=S). We (as well as others) consistently observed that these molecules exhibit a greater propensity to accept electrons than their carbonyl counterparts (R<sub>2</sub>C=O). This observation appeared to defy expectations based on a somewhat simplistic consideration of electronegativity (2.58 for sulfur and 3.44 for oxygen).

Upon closer analysis, we revealed that the enhanced electron affinity in the C=O $\rightarrow$ C=S substitution stems from the weaker overlap between sulfur's 3p orbitals and carbon's 2p orbitals in C=S, in comparison to the better interactions between the valence 2p orbitals of carbon and oxygen in C=O. This reduced overlap results in a less effective antibonding interaction, leading to a lower LUMO energy and increased electron affinity.

The diminished overlap between (2p)<sub>C</sub> and (3p)<sub>S</sub> is well-represented by the (empirical) parameters utilized in the HMO theory. In the HMO Hamiltonian matrix, the Coulomb integral *α*<sub>C</sub> represents the energy of the individual (2p<sub>π</sub>)<sub>C</sub> atomic orbital of carbon, while the resonance integral *β*<sub>CC</sub> characterizes the coupling between adjacent (2p<sub>π</sub>)<sub>C</sub> orbitals. By adjusting the integral values for carbon through *α*<sub>X</sub> = *α*<sub>C</sub> + *k*<sub>X</sub> × *β*<sub>CC</sub> and  *β*<sub>XY</sub> = *k*<sub>XY</sub> × *β*<sub>CC</sub>, the property of the frontier orbitals of heteroatom-containing π systems can be estimated in the Hückel framework (*k*<sub>X</sub> and *k*<sub>XY</sub> are proportionality constants for heteroatom X).

Using formaldehyde (H<sub>2</sub>CO) and thioformaldehyde (H<sub>2</sub>CS) as examples, we have:

*α*<sub>O</sub> = *α*<sub>C</sub> + *k*<sub>O</sub> × *β*<sub>CC</sub> = *α*<sub>C</sub> + 0.97*β*<sub>CC</sub>\
*β*<sub>C=O</sub> = *k*<sub>C=O</sub> × *β*<sub>CC</sub> = 1.06*β*<sub>CC</sub>

and

*α*<sub>S</sub> = *α*<sub>C</sub> + *k*<sub>S</sub> × *β*<sub>CC</sub> =  *α*<sub>C</sub> + 0.46*β*<sub>CC</sub>\
*β*<sub>C=S</sub> = *k*<sub>C=S</sub> × *β*<sub>CC</sub> = 0.81*β*<sub>CC</sub>

The energy of the π* level would be:

*E*(π\*) = *α*<sub>C</sub> – 0.68*β*<sub>CC</sub> for H<sub>2</sub>CO\
*E*(π\*) = *α*<sub>C</sub> – 0.61*β*<sub>CC</sub> for H<sub>2</sub>CS

i.e., **the π* level of H<sub>2</sub>CS is less destabilized**.

Even without solving the eigenvalue problem of HMO theory, this result is intuitively expected: the resonance integral β*<sub>C=S</sub> is smaller than β*<sub>C=O</sub>, lowering the energy of the π* orbital in H<sub>2</sub>CS. In our PCCP paper, we further showed that this *β*<sub>C=X</sub> can be **quantitatively estimated** as *β*<sub>C=X</sub> ≈ &#124;⟨*h*<sub>C</sub>&#124;**F**&#124;*h*<sub>S</sub>⟩&#124;, where *h*<sub>X</sub> are natural atomic hybrid orbitals (NHO), and **F** is the Fock (Kohn–Sham) operator.

However, it is important to note that semiempirical HMO may not always yield the correct picture. When comparing ester (RC(O)OR) and thioester (RC(O)SR), we found that *E*(π\*) = *α*<sub>C</sub> – 0.79*β*<sub>CC</sub> for the former and *α*<sub>C</sub> – 0.86*β*<sub>CC</sub> for the latter, suggesting a higher π* level for the sulfur compound. This result, however, conflicts with DFT calculations and the experimental reduction potentials of these molecules. The inconsistency arises from the *larger* *β*<sub>C–S</sub> = 0.69*β*<sub>CC</sub> than *β*<sub>C–O</sub> = 0.66*β*<sub>CC</sub> (as opposed to being *smaller* in the previous comparison; note the difference in *β*<sub>C=X</sub> and *β*<sub>C–X</sub> used here). Therefore, despite the elegance of HMO, we recommend using the DFT-based NBO/NHO analysis to obtain a more reliable understanding of the electronic effects of heteroatom substitution on π*-conjugated molecules. Please see [DOI: 10.1039/D2CP05186A](https://pubs.rsc.org/en/content/articlelanding/2023/cp/d2cp05186a) for detailed discussion.

For this work, we also prepared a (yet another!? [link1](https://pubs.acs.org/doi/full/10.1021/acs.jchemed.8b00244) and [link 2](http://www.hulis.free.fr/)) Python script to [solve simple Hückel systems](https://colab.research.google.com/drive/1BE0aXDqAEAWV_42iadY7pkE6J79Moa-N?usp=sharing) (not the 'extended Hückel'). While this script is primarily designed for π-conjugated hydrocarbons, you can adapt it for heteroatom-containing systems by adjusting the Coulomb and resonance integrals in the Hückel matrix. Several examples are included in this interactive Jupyter Notebook for your reference (hosted in [Google Colab](https://colab.google/)).

Furthermore, to enhance usability, the script can generate the Hückel matrix from a molecular SMILES string using the RDKit toolkit's `GetAdjacencyMatrix` module. To end this post: You may find it intriguing to explore this script and compare the energy levels of two isomeric molecules: 2-phenyl-1,3-butadiene: `C=CC(c1ccccc1)=C` and 1,4-divinylbenzene: `C=Cc1ccc(cc1)C=C` (spoiler alert: they are the same!).