// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-news",
    title: "news",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-yi-lin-wu",
              title: "Yi-Lin Wu",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/YLW/";
              },
            },{id: "dropdown-current-members",
              title: "current members",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/members/";
              },
            },{id: "dropdown-alumni",
              title: "alumni",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/alumni/";
              },
            },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-thoughts",
          title: "thoughts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/thoughts/index.html";
          },
        },{id: "nav-python-notebooks",
          title: "python-notebooks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/python_nb/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "post-organic-chemistry-is-nothing-but-pattern-recognition",
        
          title: "Organic chemistry is nothing but pattern recognition!?",
        
        description: "Organic chemistry through the lens of machine learning and human cognition",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/org-pattern/";
          
        },
      },{id: "post-decoding-struggle-my-observations",
        
          title: "Decoding “struggle” — my observations",
        
        description: "Regional and historical trends in using struggle as a verb",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/struggle/";
          
        },
      },{id: "post-exploring-thionation-with-hückel-molecular-orbital-theory",
        
          title: "Exploring thionation with Hückel molecular orbital theory",
        
        description: "Hückel theory reveals sulfur&#39;s electron-accepting secret",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/thio-Huckel/";
          
        },
      },{id: "post-the-bürgi-dunitz-angle-revisited",
        
          title: "The Bürgi–Dunitz angle revisited",
        
        description: "Big data shows a twist, highlighting how tricky it is to interpret big datasets",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/BD-angle/";
          
        },
      },{id: "post-goodbye-northwestern-it-has-been-a-wonderful-time",
        
          title: "Goodbye Northwestern, it has been a wonderful time",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/bye-NU/";
          
        },
      },{id: "post-judging-at-intel-isef-2017",
        
          title: "Judging at Intel ISEF 2017",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/ISEF2017/";
          
        },
      },{id: "post-ethylhexyl-in-real-life",
        
          title: "Ethylhexyl in real life",
        
        description: "From fuel to sunscreen, the quirky 2-ethylhexyl group is everywhere",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/ethylhexyl/";
          
        },
      },{id: "post-we-know-so-little-so-little-indeed-about-solubility",
        
          title: "We know so little, so little indeed, about solubility",
        
        description: "A tiny tweak to linear chains makes PDI super soluble",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/PDI_ester/";
          
        },
      },{id: "post-alkyl-groups-modulate-π-stacking-interactions-size-isn-39-t-everything",
        
          title: "Alkyl groups modulate π-stacking interactions, size isn&#39;t everything",
        
        description: "Intermolecular contact matters as much as their formal size for pi-stacking interactions",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/alkyl-pi/";
          
        },
      },{id: "post-does-methanol-dissolve-silica",
        
          title: "Does methanol dissolve silica?",
        
        description: "That &quot;silica in your product&quot; from methanol is just shedding tiny particles!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/silica/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-photo-induced-charge-transfer-in-g-quadruplexes-continues-to-fascinate-the-jacs-readers-after-our-first-g-quadruplex-paper-in-2013-doi-10-1021-ja407648d-photoinduced-charge-transfer-in-self-assembled-monodispersed-g-quadruplex-of-a-donor-acceptor-triad-was-highlighted-again-in-jacs-spotlight-doi-10-1021-jacs-5b02864-and-doi-10-1021-ja4093727-for-the-2013-paper-the-combined-transient-absorption-stimulated-raman-and-electron-paramagnetic-spectroscopies-suggested-the-hole-delocalization-in-the-h-bonded-cyclic-guanine-moieties-doi-10-1021-jacs-5b00977",
          title: 'Photo-induced charge transfer in G-quadruplexes continues to fascinate the JACS readers. After our...',
          description: "",
          section: "News",},{id: "news-singlet-fission-in-multi-crystalline-diketopyrrolopyrrole-dpp-derivatives-observed-the-nice-work-of-pat-reports-one-of-the-first-observations-and-thorough-studies-of-singlet-fission-processes-in-dpp-materials-a-common-class-of-industrial-pigments-this-work-opens-a-new-direction-for-sf-study-doi-10-1021-acs-jpcb-5b10565",
          title: 'Singlet fission in multi-crystalline diketopyrrolopyrrole (DPP) derivatives observed. The nice work of Pat...',
          description: "",
          section: "News",},{id: "news-dna-nucleobase-to-form-crystalline-porous-organic-frameworks-continuing-our-work-of-g-quadruplex-driven-self-assembly-we-found-that-the-same-strategy-can-be-used-to-guide-the-formation-of-highly-crystalline-organic-frameworks-consisted-of-segregated-donor-acceptor-chromophore-pi-stacks-the-materials-display-in-addition-to-high-porosity-facile-carrier-generation-and-mobility-and-can-be-applied-as-the-cathode-material-in-lithium-ion-batteries-the-joint-force-of-scientists-from-three-departments-hupp-farha-chem-snurr-chem-eng-and-hersam-mat-sci-made-this-work-possible-thanks-everyone",
          title: 'DNA nucleobase to form crystalline porous organic frameworks. Continuing our work of G-quadruplex-driven...',
          description: "",
          section: "News",},{id: "news-nonplanar-building-blocks-make-better-organic-frameworks-stacking-of-layered-two-dimensional-metal-or-covalent-organic-frameworks-mofs-and-cofs-has-provided-a-wide-range-of-porous-and-crystalline-materials-with-interesting-magnetic-optoelectronic-and-catalytic-properties-the-eclipsed-face-to-face-arrangement-between-molecular-building-blocks-is-usually-believed-to-maximize-the-dispersive-interaction-for-self-association-and-thus-planar-polycyclic-aromatic-hydrocarbons-are-often-exploited-in-the-design-of-new-functional-2d-organic-frameworks-using-the-bio-inspired-g-quadruplex-organic-framework-as-a-platform-we-elucidated-the-intricate-balance-between-molecular-non-planarity-and-pi-stacking-interaction-in-determining-the-crystallinity-of-2d-frameworks",
          title: 'Nonplanar building blocks make better organic frameworks. Stacking of layered, two-dimensional metal- or...',
          description: "",
          section: "News",},{id: "news-heterogeneous-super-reductant-radical-anion-excited-states-can-provide-remarkably-negative-reducing-potentials-for-carrying-out-a-variety-of-difficult-reductions-collaborating-with-the-farha-group-we-built-this-capability-into-a-mof-structure-that-preserves-the-ability-of-naphthalene-diimide-radical-anion-excited-states-to-reduce-dichloromethane-at-a-potential-near-2-1-v-vs-sce-doi-10-1021-acs-chemmater-8b00720-this-work-was-the-most-read-article-of-chem-mater-in-april",
          title: 'Heterogeneous Super-reductant. Radical anion excited states can provide remarkably negative reducing potentials for...',
          description: "",
          section: "News",},{id: "news-ylw-welcomes-abigail-gill-to-join-the-group-in-her-b-sc-final-year-project-abi-is-going-to-explore-organic-room-temperature-phosphorophores-enabled-by-supramolecular-interactions",
          title: 'YLW welcomes Abigail Gill to join the group. In her B.Sc. final year...',
          description: "",
          section: "News",},{id: "news-yi-lin-gave-his-first-academic-seminar-at-the-18th-cardiff-chemistry-conference-on-energised-molecular-self-assemblies",
          title: 'Yi-Lin gave his first academic seminar at the 18th Cardiff Chemistry Conference on...',
          description: "",
          section: "News",},{id: "news-after-the-first-semester-in-cardiff-yi-lin-enjoyed-the-break-by-presenting-in-four-conferences-at-eth-zurich-cardiff-university-university-of-liverpool-and-rsc-burlington-house-it-was-great-to-interact-with-the-scientific-giants-interact-with-researchers-in-various-fields-and-reunite-with-old-friends-thank-you-françois",
          title: 'After the first semester in Cardiff, Yi-Lin enjoyed the break by presenting in...',
          description: "",
          section: "News",},{id: "news-ylw-welcomes-anna-wright-and-dmytro-abdulakh-to-join-the-group-in-her-epsrc-funded-ph-d-project-anna-will-design-and-study-novel-triplet-photosensitizers-that-are-free-from-heavy-elements-dmytro-will-be-elucidating-the-crystal-packing-of-aliphatic-chains-in-porous-framework-structures-in-his-mchem-project",
          title: 'YLW welcomes Anna Wright and Dmytro Abdulakh to join the group. In her...',
          description: "",
          section: "News",},{id: "news-farewell-to-samuel-clabaut-erasmus-who-visited-shortly-with-us-for-8-weeks-from-the-école-nationale-de-chimie-physique-et-biologie-de-paris-encpb",
          title: 'Farewell to Samuel Clabaut (Erasmus), who visited shortly with us for 8 weeks...',
          description: "",
          section: "News",},{id: "news-in-light-of-the-current-circumstances-of-covid-19-we-decided-to-temporarily-shut-down-the-lab-and-work-remotely-from-home",
          title: 'In light of the current circumstances of COVID-19, we decided to temporarily shut...',
          description: "",
          section: "News",},{id: "news-it-was-a-great-pleasure-to-write-about-nucleobase-self-assembly-doi-10-1002-open-201900363-with-david-gonzález-rodríguez-dgrlab-whose-research-inspired-my-work-on-g-quadruplex-systems-in-the-wasielewski-group-thanks-david-and-anselmo",
          title: 'It was a great pleasure to write about nucleobase self-assembly (DOI: 10.1002/open.201900363) with...',
          description: "",
          section: "News",},{id: "news-as-the-school-partially-reopens-to-provide-a-hybrid-model-of-education-this-autumn-i-guess-this-is-what-i-will-be-wearing-in-the-next-couple-of-months",
          title: 'As the school partially reopens to provide a hybrid model of education this...',
          description: "",
          section: "News",},{id: "news-anna-s-first-paper-triplet-forming-thionated-donor-acceptor-chromophores-for-electrochemically-amphoteric-photosensitization-was-published-on-eurjoc-doi-10-1002-ejoc-202100793-we-demonstrated-that-triplet-state-formation-from-thiocarbonyls-derivatives-is-independent-of-the-donor-acceptor-interactions-therefore-these-electrochemically-active-thionated-chromophores-can-be-utilized-as-amphoteric-heavy-atom-free-photoredox-catalysts-that-display-comparable-catalytic-activities-to-common-inorganic-photosensitizers",
          title: 'Anna’s first paper Triplet-Forming Thionated Donor–Acceptor Chromophores for Electrochemically Amphoteric Photosensitization was published...',
          description: "",
          section: "News",},{id: "news-ylw-welcomes-chenyang-wu-to-join-the-group-developing-bond-forming-reactions-with-extraordinary-efficiency-and-selectivity-provides-powerful-tools-for-chemical-modification-chenyang-will-be-expanding-the-scope-of-and-enhancing-the-reactivity-of-a-bioorthogonal-thiazoline-forming-reaction-this-project-is-joint-by-a-long-time-friend-and-collaborator-dr-y-h-tsai-at-shenzhen-bay-laboratory",
          title: 'YLW welcomes Chenyang Wu to join the group. Developing bond-forming reactions with extraordinary...',
          description: "",
          section: "News",},{id: "news-ylw-was-recognised-as-a-fellow-of-the-higher-education-academy-fhea-by-the-higher-education-academy-does-that-mean-i-am-a-qualified-educator-probably-far-from-one-i-am-still-figuring-out-how-to-be-an-effective-one",
          title: 'YLW was recognised as a Fellow of the Higher Education Academy (FHEA) by...',
          description: "",
          section: "News",},{id: "news-epsrc-new-investigator-grant-approved-our-exploration-of-triplet-photo-processes-by-covalent-and-supramolecular-approaches-continues",
          title: 'EPSRC New Investigator grant approved! Our exploration of triplet photo-processes by covalent and...',
          description: "",
          section: "News",},{id: "news-group-photo-left-to-right-ylw-dr-andrey-berezin-chenyang-wu-anna-wright",
          title: 'Group Photo (left to right) YLW, Dr. Andrey Berezin, Chenyang Wu, Anna Wright....',
          description: "",
          section: "News",},{id: "news-we-are-so-happy-to-see-our-first-computational-paper-why-does-thionating-a-carbonyl-molecule-make-it-a-better-electron-acceptor-doi-10-1039-d2cp05186a-appeared-on-the-welcoming-pccp-we-show-that-the-enhanced-electron-affinity-of-heavy-atom-substituted-doped-organic-molecules-can-be-generally-understood-by-considering-the-weaker-antibonding-interaction-between-carbon-and-heavy-elements-leading-to-lower-lumo-levels-overall-electronegativity-despite-the-implication-of-this-term-is-not-a-suitable-parameter-to-gauge-the-effect-of-heavy-elements-on-electron-affinity-being-an-embarrassed-author-i-must-further-point-out-that-our-finding-is-analogous-to-what-was-disclosed-by-prof-fonseca-guerra-in-the-context-of-the-hydrogen-bond-donor-capability-of-chalcogenoamides-the-origin-of-the-trend-of-selenoamides-amp-gt-thioamides-amp-gt-carboxamides-can-be-traced-to-the-degree-of-the-positively-charged-n-h-group-the-h-bond-donor-caused-by-the-varying-antibonding-interactions-between-carbon-and-chalcogens",
          title: 'We are so happy to see our first computational paper Why does thionating...',
          description: "",
          section: "News",},{id: "news-since-we-started-dealing-with-more-analytical-or-data-heavy-projects-i-decided-to-share-some-python-scripts-here-check-the-python-notebook-tab-they-can-be-executed-online-using-google-s-cloud-computing-resources-google-colab-the-initial-releases-are-some-short-scripts-for-fitting-the-kinetic-data-or-simulating-the-product-ratio-of-competing-reactions-more-to-come-stay-tuned",
          title: 'Since we started dealing with more analytical or data-heavy projects, I decided to...',
          description: "",
          section: "News",},{id: "news-ylw-welcomes-dr-jayaprakash-ajay-phd-at-iiser-thiruvananthapuram-with-prof-gokulnath-sabapathi-and-tim-cooper-msc-cardiff-and-previously-at-catsci-on-board-they-will-be-looking-into-the-non-covalent-control-of-triplet-chromophores",
          title: 'YLW welcomes Dr. Jayaprakash Ajay (PhD at IISER Thiruvananthapuram with Prof. Gokulnath Sabapathi)...',
          description: "",
          section: "News",},{id: "news-we-would-like-to-share-the-little-python-notebook-for-solving-simple-hückel-molecular-orbital-hmo-of-π-conjugated-hydrocarbons-the-script-can-generate-the-hückel-matrix-from-a-molecular-smiles-string-and-the-eigenproblem-is-then-solved-numerically-or-symbolically-the-former-approach-is-recommended-as-the-symbolic-solution-in-terms-of-α-coulomb-integrals-and-β-resonance-integrals-can-look-quite-daunting-the-script-was-prepared-when-analyzing-the-electronic-effect-of-thionation-doi-10-1039-d2cp05186a-see-also-the-blog-post-for-more-discussion",
          title: 'We would like to share the little Python notebook for solving simple Hückel...',
          description: "",
          section: "News",},{id: "news-group-photo-left-to-right-dr-ajay-jayaprakash-tim-cooper-anna-wright-ylw-chenyang-wu",
          title: 'Group Photo (left to right) Dr. Ajay Jayaprakash, Tim Cooper, Anna Wright, YLW,...',
          description: "",
          section: "News",},{id: "news-ylw-will-be-helping-with-the-management-and-event-coordination-at-cardiff-scientific-society-css-hosts-12-public-lectures-annually-where-leading-researchers-break-down-cutting-edge-science-into-accessible-talks-for-everyone-this-initiative-brings-back-fond-memories-of-the-prospects-science-lecture-series-which-i-highly-appreciated-and-thoroughly-enjoyed-during-my-years-at-ntu-if-you-are-around-cardiff-come-and-join-our-lectures",
          title: 'YLW will be helping with the management and event coordination at Cardiff Scientific...',
          description: "",
          section: "News",},{id: "news-delighted-to-share-some-good-news-ylw-has-been-promoted-to-senior-lecturer-at-cardiff-university-deeply-grateful-to-all-the-students-colleagues-mentors-and-friends-who-have-supported-him-along-the-way-looking-forward-to-this-next-chapter",
          title: 'Delighted to share some good news – YLW has been promoted to Senior...',
          description: "",
          section: "News",},{id: "news-after-nearly-five-years-of-work-since-the-start-of-this-project-in-early-2020-we-are-delighted-to-share-that-our-manuscript-has-been-published-in-jacs-this-paper-a-single-bioorthogonal-reaction-for-multiplex-cell-surface-protein-labeling-reports-a-highly-efficient-method-that-can-be-seamlessly-integrated-with-existing-bioorthogonal-reactions-enabling-multi-target-protein-labeling-using-small-molecule-fluorescent-tags-of-different-colors-this-journey-has-been-anything-but-smooth-adapting-to-remote-work-during-the-pandemic-facing-multiple-rejections-and-navigating-several-rounds-of-revisions-yet-these-challenges-have-only-strengthened-the-quality-and-depth-of-our-work-a-heartfelt-thank-you-to-yu-hsuan-and-his-team-and-colleagues-at-shenzhen-bay-for-their-dedication-and-perseverance-this-achievement-is-a-testament-to-the-power-of-collaboration-and-resilience",
          title: 'After nearly five years of work since the start of this project in...',
          description: "",
          section: "News",},{id: "news-we-ve-migrated-our-website-to-github-for-a-sleek-new-look-sparkles",
          title: 'We’ve migrated our website to GitHub for a sleek new look!  :sparkles:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
