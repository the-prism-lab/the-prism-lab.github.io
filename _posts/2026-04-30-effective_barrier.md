---
layout: post
title: The *effective* barrier of a reaction with (fast) pre-equilibrium
date: 2026-04-30
description: "Why the effective barrier of A ⇌ B → C is not ΔG2‡, not the height of TS2 above A, and not ΔG1‡+ΔG2‡ — the kinetics analysis behind our recent JACS paper."
tags: kinetics mechanism physical-organic
categories: research-notes
related_posts: false
---

Reaction schemes of this form come up all the time: 

$$
\mathsf{A} \;\underset{k_{-1}}{\overset{k_{1}}{\rightleftharpoons}}\; \mathsf{B} \;\overset{k_{2}}{\longrightarrow}\; \mathsf{C}
$$

Product **C** (the species we care about) can be produced from **A**, but only by way of a reactive intermediate **B** that is in equilibrium with **A**. Before going further, here is what each symbol means:

| Symbol | Meaning |
|---|---|
| ${\small k_1,\ k_{-1}}$  | forward / reverse rate constants for **A** ⇌ **B**|
| ${\small k_2}$  | rate constant for the **B** → **C** step |
| ${\small K = k_1/k_{-1}}$  | equilibrium constant for **A** ⇌ **B** (large ${\small K}$  means mostly **B**; small ${\small K}$ means mostly **A**) |
| **TS₁**, **TS₂** | transition states connecting **A**&**B** and **B**&**C**, respectively|
| ${\small \Delta G_1^{\ddagger},\ \Delta G_{-1}^{\ddagger}}$ | activation barriers for the forward / reverse **A** ⇌ **B** steps |
| ${\small \Delta G_2^{\ddagger}}$  | activation barrier for the **B** → **C** step |
| ${\small \Delta G_{\text{eff}}^{\ddagger}}$  | the one *effective* barrier that sets how fast **C** actually forms |

<br>

Each barrier ${\small \Delta G_i^{\ddagger}}$  links to its rate constant ${\small k_i}$ through transition-state theory, ${\small k_i = \tfrac{k_B T}{h}\,e^{-\Delta G_i^{\ddagger}/RT}}$.

How does the relative energy of all these species and transition states determine the rate of formation of **C**? And under what condition can the formation of **C** be suppressed entirely? This textbook-looking question turns out to be far from trivial. It is exactly what we needed to answer in our recent paper ([JACS 2026](https://doi.org/10.1021/jacs.6c01648)) to explain why a TAMM-type reaction could stop at the free thiol product (i.e. **A**) instead of forming the "dead-end" thiazoline (i.e. **C**).

**In short: what is ${\small \Delta G^{\ddagger}_{\text{eff}}}$?**{: style="color: darkred;"}

<br>

## Three tempting guesses

Look at an energy profile for **A** ⇌ **B** → **C** and it is easy to reach for some half-correct answers:

##### Reading the energies off the reaction profile.
- **Guess 1 ${\small \Delta G_{\text{eff}}^{\ddagger}}$ = ${\small \Delta G_2^{\ddagger}}$:** Species **C** is made by climbing ${\small \Delta G_2^{\ddagger}}$ out of **B**, so a natural guess is that this is the barrier. But since only some of the material is sitting as **B** at any moment, while the rest is **A**, a rate that ignored this cannot be right.

- **Guess 2 ${\small \Delta G_{\text{eff}}^{\ddagger}}$ = *E*(TS₂)–*E*(A):**  A related guess fixes that halfway. If **A** is lower in energy than **B** — which is often the case, and is exactly the picture that invites this guess — then **A** looks like a resting state (lowest energy point), and **TS₂** looks like the one hill left before **C**. So why not just measure the height of **TS₂** above **A**? This one is closer, but this guess quietly assumes that is always true, and stops working the moment **B** becomes competitive with **A**.

##### Reading the mechanism as two climbs.
- **Guess 3 ${\small \Delta G_{\text{eff}}^{\ddagger}}$ = ${\small \Delta G_1^{\ddagger}+\Delta G_2^{\ddagger}}$:** A different instinct comes from thinking about the path step by step: first the molecule climbs ${\small \Delta G_1^{\ddagger}}$  to get from **A** to **TS₁**, then it climbs ${\small \Delta G_2^{\ddagger}}$  to get from **B** to **TS₂** — so add them, ${\small \Delta G_1^{\ddagger}+\Delta G_2^{\ddagger}}$. This one is, however, never correct, as it treats **B** as if it were at the same height as **TS₁**, and never lets the system descend into the valley at **B** before climbing out. 

So: **not ${\small \Delta G_2^{\ddagger}}$ alone, not simply the height of TS₂ above A, and not ${\small \Delta G_1^{\ddagger}+\Delta G_2^{\ddagger}}$. What is ${\small \Delta G^{\ddagger}_{\text{eff}}}$, then?**

<br>

## The answer

When the **A** ⇌ **B** equilibrium is fast compared to the **B** → **C** step (${\small k_1, k_{-1} \gg k_2}$), the build-up of **C** in fact follows a single exponential, with one effective rate constant (the detailed derivation is provided later in a collapsible section):

$$
k_{\text{eff}} = \frac{k_1 k_2}{k_1 + k_{-1}}.
$$

Writing each ${\small k_i}$ in terms of its barrier and simplifying turns this into a barrier:

$$
\Delta G^{\ddagger}_{\text{eff}} = \Delta G^{\ddagger}_{2} + RT\ln\!\left(1 + \frac{1}{K}\right).
$$

${\small \Delta G_2^{\ddagger}}$ is still in there, but with a non-zero correction term in general.

<br>

## Seeing it move

Drag the three barrier sliders below. The plot shows the free-energy profile together with all four answers: the three tempting guesses (dotted lines) and the true effective barrier (dashed red). Watch how the true line moves between the guesses as ${\small K}$  changes, and note that it only ever touches two of them — never the third.

<div id="keff-widget" style="border:1px solid var(--global-divider-color,#e0e0e0);border-radius:8px;padding:1rem 1.2rem;margin:1.5rem 0;">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.6rem 1.4rem;margin-bottom:0.8rem;">
    <label style="font-size:0.9rem;">ΔG‡₁ (A→B): <span id="v1lab"></span> kcal/mol<br><input type="range" id="dg1" min="3" max="9" value="5" step="0.5" style="width:100%;"></label>
    <label style="font-size:0.9rem;">ΔG‡₋₁ (B→A): <span id="vm1lab"></span> kcal/mol<br><input type="range" id="dgm1" min="3" max="9" value="6" step="0.5" style="width:100%;"></label>
    <label style="font-size:0.9rem;">ΔG‡₂ (B→C): <span id="v2lab"></span> kcal/mol<br><input type="range" id="dg2" min="14" max="28" value="20" step="0.5" style="width:100%;"></label>
    <div style="font-size:0.85rem;align-self:center;line-height:1.6;">
      <div><span style="color:#e67e22;">●</span> guess 1 (ΔG‡₂ alone) = <b><span id="g1v"></span></b> kcal/mol</div>
      <div><span style="color:#2c6fbf;">●</span> guess 2 (TS₂ above A) = <b><span id="g2v"></span></b> kcal/mol</div>
      <div><span style="color:#7f8c8d;">●</span> guess 3 (ΔG‡₁+ΔG‡₂) = <b><span id="g3v"></span></b> kcal/mol</div>
      <div><span style="color:#c0392b;">●</span> true ΔG‡<sub>eff</sub> = <b style="color:#c0392b;"><span id="dgeff"></span></b> kcal/mol</div>
    </div>
  </div>
  <div id="keff-plot" style="width:100%;height:360px;"></div>
  <div style="font-size:0.8rem;color:#888;margin-top:0.4rem;">
    Free-energy profile for A ⇌ B → C (energies relative to A). The purple curve is the profile;
    the dotted lines are the three tempting guesses; the dashed red line is the true effective barrier.
    Try pushing ΔG‡₋₁ well above ΔG‡₁ (small K), then well below it (large K), and watch which guess
    the true line lands on. ΔG‡₁ and ΔG‡₋₁ are kept well below ΔG‡₂ throughout, to mimic the condition
    k₁, k₋₁ ≫ k₂ that the effective-barrier formula above assumes — though this condition is not needed
    just to solve the rate equations exactly (see the collapsible section below). C is placed a fixed
    10 kcal/mol below B to reflect that B → C is effectively one-way; this exact depth carries no
    meaning beyond that.
  </div>
</div>

<script src="https://cdn.plot.ly/plotly-2.35.2.min.js"></script>
<script>
(function(){
  var R=1.987204e-3, T=298.15, RT=R*T; // kcal/mol
  var C_DROP=10; // C sits a fixed 10 kcal/mol below B, so B → C always reads as effectively one-way
  var ids=["dg1","dgm1","dg2"];
  function val(id){return parseFloat(document.getElementById(id).value);}
  function compute(){
    var dg1=val("dg1"), dgm1=val("dgm1"), dg2=val("dg2");
    document.getElementById("v1lab").textContent=dg1;
    document.getElementById("vm1lab").textContent=dgm1;
    document.getElementById("v2lab").textContent=dg2;
    var G_A=0, G_TS1=dg1, G_B=dg1-dgm1, G_TS2=G_B+dg2, G_C=G_B-C_DROP;
    var K=Math.exp(-(dg1-dgm1)/RT);
    var dgeff=dg2+RT*Math.log(1+1/K);
    var guess1=dg2, guess2=G_TS2, guess3=dg1+dg2;
    document.getElementById("g1v").textContent=guess1.toFixed(1);
    document.getElementById("g2v").textContent=guess2.toFixed(1);
    document.getElementById("g3v").textContent=guess3.toFixed(1);
    document.getElementById("dgeff").textContent=dgeff.toFixed(1);
    return {G_A:G_A,G_TS1:G_TS1,G_B:G_B,G_TS2:G_TS2,G_C:G_C,dgeff:dgeff,
            guess1:guess1,guess2:guess2,guess3:guess3};
  }
  function draw(){
    var s=compute();
    if(!window.Plotly)return;
    var xs=[0,1,2,3,4], ys=[s.G_A,s.G_TS1,s.G_B,s.G_TS2,s.G_C];
    var labels=["A","TS₁","B","TS₂","C"];
    var profile={x:xs,y:ys,mode:"lines+markers+text",text:labels,textposition:"top center",
                 line:{shape:"spline",width:3,color:"#6f42c1"},marker:{size:8,color:"#6f42c1"},
                 hoverinfo:"y",name:"profile"};
    var lineTrue={x:[0,4],y:[s.dgeff,s.dgeff],mode:"lines",
                  line:{dash:"dash",width:2,color:"#c0392b"},name:"true"};
    var lineG1={x:[0,4],y:[s.guess1,s.guess1],mode:"lines",
                line:{dash:"dot",width:1.5,color:"#e67e22"},name:"guess 1"};
    var lineG3={x:[0,4],y:[s.guess3,s.guess3],mode:"lines",
                line:{dash:"dot",width:1.5,color:"#7f8c8d"},name:"guess 3"};
    var guideG2={x:[3,4.3],y:[s.guess2,s.guess2],mode:"lines",
                 line:{dash:"dashdot",width:1.2,color:"#2c6fbf"},name:"guess 2"};
    var ann=[
      {x:4.05,y:s.guess1,text:"guess 1",showarrow:false,font:{size:10,color:"#e67e22"},xanchor:"left"},
      {x:4.05,y:s.guess3,text:"guess 3",showarrow:false,font:{size:10,color:"#7f8c8d"},xanchor:"left"},
      {x:4.35,y:s.guess2,text:"guess 2",showarrow:false,font:{size:10,color:"#2c6fbf"},xanchor:"left"},
      {x:4.05,y:s.dgeff,text:"true",showarrow:false,font:{size:10,color:"#c0392b"},xanchor:"left"}
    ];
    var layout={margin:{l:50,r:70,t:10,b:30},showlegend:false,annotations:ann,
                xaxis:{tickvals:xs,ticktext:labels,range:[-0.3,4.9],showgrid:false,zeroline:false},
                yaxis:{title:"G (kcal/mol, rel. A)",zeroline:true},
                paper_bgcolor:"rgba(0,0,0,0)",plot_bgcolor:"rgba(0,0,0,0)"};
    Plotly.react("keff-plot",[profile,lineTrue,lineG1,lineG3,guideG2],layout,
                 {displayModeBar:false,responsive:true});
  }
  ids.forEach(function(id){document.getElementById(id).addEventListener("input",draw);});
  compute(); // populate numbers right away, independent of Plotly
  if(window.Plotly){draw();}else{
    var iv=setInterval(function(){if(window.Plotly){clearInterval(iv);draw();}},100);
  }
})();
</script>

<br>

## Two limits, and why each guess is half right

- **Large ${\small K}$** (mostly **B**): the correction term ***RT*ln(1 + 1/*K*)** vanishes and **Δ*G*<sup>‡</sup><sub>eff</sub> → Δ*G*<sup>‡</sup><sub>2</sub>**. This is Guess 1's regime. When almost everything is already **B**, waiting for **A** to become **B** costs nothing, so the only barrier that matters is the one leaving **B**.

- **Small ${\small K}$** (mostly **A**): the correction term approximates the energy gap between **B** and **A**, so **Δ*G*<sup>‡</sup><sub>eff</sub>** approaches **Δ*G*<sup>‡</sup><sub>2</sub>** plus that gap — which is basically the height of **TS₂** above **A** (i.e. Guess 2). This is not a coincidence: when **A** truly is the resting state, reading the barrier as the highest point above it is the right thing to do. The Guess fails only where it silently assumes this is *always* true. (It should be noted that the familiar steady-state approximation gives this limiting answer as well, but based on a different assumption.)

- **Guess 3 is just wrong.** It overshoots the true effective barrier at every value of ${\small K}$. There is no regime where "add both barriers" is the correct move, because the path never actually climbs ${\small \Delta G_1^{\ddagger}}$ and ${\small \Delta G_2^{\ddagger}}$ back to back; it comes back down to **B** first.

So, while Guess 3 is incorrect, Guesses 1 and 2 are not really wrong so much as incomplete: each is the right answer in its own corner, and the true barrier moves continuously between them as ${\small K}$  changes.

<br>

## Why this matters for our study

In conclusion, one cannot tell whether **C** will form appreciably just by comparing ${\small \Delta G_2^{\ddagger}}$ values, or by comparing the height of **TS₂** above the starting material. Where the **A** ⇌ **B** equilibrium sits matters just as much. This rigorous analysis, instead of simply reading barriers straight off a computed profile, is what let us account for the observed selectivity between the thiol-retaining and cyclized products in N-terminal cysteine chemistry. The full treatment, including the computed barriers it was applied to, is in the [paper](https://doi.org/10.1021/jacs.6c01648) and its Supporting Information.

<br>

<details markdown="1" style="border:1px solid var(--global-divider-color,#e0e0e0);border-radius:8px;padding:0.5rem 1.2rem;margin:1.5rem 0;">
<summary style="cursor:pointer;font-weight:bold;">For the curious readers: the full derivation from the rate equations</summary>

<br>

### The rate equations

The scheme **A** ⇌ **B** → **C** corresponds to

$$
\frac{d[\mathsf{A}]}{dt} = -k_1[\mathsf{A}] + k_{-1}[\mathsf{B}],
$$

$$
\frac{d[\mathsf{B}]}{dt} = k_1[\mathsf{A}] - (k_{-1}+k_2)[\mathsf{B}],
$$

$$
\frac{d[\mathsf{C}]}{dt} = k_2[\mathsf{B}],
$$

with \[**A**\](0) = *a*<sub>0</sub>, \[**B**\](0) = 0, and \[**C**\](0) = 0.

<br>

### Exact solution via eigenvalues

Because \[**A**\] + \[**B**\] + \[**C**\] = *a*<sub>0</sub>, we only need the first two equations. In matrix form,

$$
\frac{d}{dt}\begin{bmatrix}[\mathsf{A}]\\ {[\mathsf{B}]}\end{bmatrix}
= \mathbf{M}\begin{bmatrix}[\mathsf{A}]\\ {[\mathsf{B}]}\end{bmatrix},
\qquad
\mathbf{M}=\begin{bmatrix}-k_1 & k_{-1}\\ k_1 & -(k_{-1}+k_2)\end{bmatrix}.
$$

The eigenvalues follow from ${\small \det(\mathbf{M}-\lambda\mathbf{I})=0}$:

$$
\lambda_{1,2}=\frac{-(k_1+k_{-1}+k_2)\pm\sqrt{(k_1+k_{-1}+k_2)^2-4k_1k_2}}{2}.
$$

With eigenvectors $$\mathbf{v}_{1,2}=\begin{bmatrix}k_{-1}\\ k_1+\lambda_{1,2}\end{bmatrix}$$ and the initial conditions, the coefficients are

$$
c_1=\frac{a_0(k_1+\lambda_2)}{k_{-1}(\lambda_2-\lambda_1)},\qquad
c_2=-\frac{a_0(k_1+\lambda_1)}{k_{-1}(\lambda_2-\lambda_1)},
$$

giving the closed-form (biexponential) concentrations

$$
[\mathsf{A}](t)=-\frac{a_0}{\lambda_1-\lambda_2}\left[(k_1+\lambda_2)e^{\lambda_1 t}-(k_1+\lambda_1)e^{\lambda_2 t}\right],
$$

$$
[\mathsf{B}](t)=\frac{a_0 k_1}{\lambda_1-\lambda_2}\left[e^{\lambda_1 t}-e^{\lambda_2 t}\right],
$$

$$
[\mathsf{C}](t)=a_0-[\mathsf{A}](t)-[\mathsf{B}](t).
$$

<br>

### The rapid pre-equilibrium limit

Let ${\small s=k_1+k_{-1}+k_2}$ and ${\small \Delta=s^2-4k_1k_2}$. Under ${\small k_1,k_{-1}\gg k_2}$, a binomial expansion of ${\small \sqrt{\Delta}}$ gives

$$
\lambda_1 \approx -\frac{k_1 k_2}{k_1+k_{-1}} \equiv -k_{\text{eff}},
\qquad
\lambda_2 \approx -(k_1+k_{-1}).
$$

The ${\small e^{\lambda_2 t}}$ term is the **fast mode** (it decays almost instantly); the ${\small e^{\lambda_1 t}}$ term is the **slow mode** that governs the observable kinetics. Dropping the fast mode collapses all three concentrations to single exponentials:

$$
[\mathsf{C}](t)=a_0\left(1-e^{-k_{\text{eff}} t}\right),
\qquad
k_{\text{eff}}=\frac{k_1 k_2}{k_1+k_{-1}}.
$$

(The same result follows from the quasi-steady-state approximation applied to **B**.)

<br>

### From rate constant to barrier

Substituting ${\small k_i=\tfrac{k_B T}{h}e^{-\Delta G_i^{\ddagger}/RT}}$ into ${\small k_{\text{eff}}}$:

$$
k_{\text{eff}}=\frac{k_B T}{h}\cdot\frac{e^{-(\Delta G_1^{\ddagger}+\Delta G_2^{\ddagger})/RT}}{e^{-\Delta G_1^{\ddagger}/RT}+e^{-\Delta G_{-1}^{\ddagger}/RT}}.
$$

Matching to ${\small k_{\text{eff}}=\tfrac{k_B T}{h}e^{-\Delta G_{\text{eff}}^{\ddagger}/RT}}$ and simplifying:

$$
\Delta G^{\ddagger}_{\text{eff}}
=\Delta G^{\ddagger}_{2}+RT\ln\!\left(1+e^{-(\Delta G_{-1}^{\ddagger}-\Delta G_1^{\ddagger})/RT}\right)
=\Delta G^{\ddagger}_{2}+RT\ln\!\left(1+\tfrac{1}{K}\right),
$$

since ${\small K=k_1/k_{-1}=e^{-(\Delta G_1^{\ddagger}-\Delta G_{-1}^{\ddagger})/RT}}$.

The two limiting cases discussed above follow directly by taking ${\small K\gg1}$ (mostly **B**) and ${\small K\ll1}$ (mostly **A**); in general, since ***RT*ln(1 + 1/*K*)** is a positive term, ${\small \Delta G_{\text{eff}}^{\ddagger}}$ is greater than ${\small \Delta G_{\text{2}}^{\ddagger}}$.

</details>

---

*The analysis on this page underpins the mechanistic rationalization in [JACS 2026, 148, 18020](https://doi.org/10.1021/jacs.6c01648). If you spot an error in the derivation, I'd be glad to hear about it.*