---
layout: post
date: 2023-05-01
inline: true
related_posts: false
---

We would like to share the little Python notebook for [solving simple Hückel molecular orbital (HMO)](https://colab.research.google.com/drive/1BE0aXDqAEAWV_42iadY7pkE6J79Moa-N?usp=sharing) of π-conjugated hydrocarbons. The script can generate the Hückel matrix from a molecular SMILES string, and the eigenproblem is then solved numerically or symbolically. The former approach is recommended, as the symbolic solution in terms of _α_ (Coulomb integrals) and _β_ (resonance integrals) can look quite daunting. The script was prepared when analyzing the electronic effect of thionation (DOI: [10.1039/D2CP05186A](https://doi.org/10.1039/D2CP05186A)); see also the [blog post](/blog/2023/thio-Huckel/) for more discussion.
