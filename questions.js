// MPEP Quiz Bank — patent bar prep
// Source: USPTO MPEP, Ninth Edition, Revision 01.2024 (current source material as of Sept 24, 2025)
// Weighted toward the high-yield chapters that account for ~75% of the exam:
//   Ch. 2100 (Patentability — 101/102/103/112)
//   Ch. 700  (Examination)
//   Ch. 600  (Parts, Form & Content)
//   Ch. 1200 (Appeal)
//   Ch. 1800 (PCT)
// Format mirrors real exam: stem + 4 choices, "most correct" style, single best answer.
// Each entry: { chapter, topic, q, choices:[A-D], answer:0-3, explain, cite, highYield? }

window.MPEP_QUESTIONS = [

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 2100 — PATENTABILITY  (largest share of the exam)
  // ══════════════════════════════════════════════════════════════════

  // ───── 101 — Subject Matter Eligibility ─────
  {chapter:"2100", topic:"§101 Eligibility", highYield:true,
    q:"Under the USPTO's subject-matter eligibility framework, a claim that recites an abstract idea is patent-eligible if the claim as a whole:",
    choices:[
      "Recites the abstract idea in fewer than 25 words",
      "Integrates the judicial exception into a practical application, or recites additional elements that amount to significantly more",
      "Was filed by a U.S. resident",
      "Is supported by a working example"
    ], answer:1,
    explain:"Step 2A Prong Two asks whether the exception is integrated into a practical application; if not, Step 2B asks whether additional elements amount to 'significantly more.' Either path saves the claim.",
    cite:"MPEP §2106"},

  {chapter:"2100", topic:"§101 Eligibility", highYield:true,
    q:"Which of the following is NOT one of the judicially-recognized exceptions to §101?",
    choices:["Abstract ideas","Laws of nature","Natural phenomena","Improvements to computer functionality"], answer:3,
    explain:"The three judicial exceptions are abstract ideas, laws of nature, and natural phenomena. Improvements to computer functionality are evidence that a claim is eligible (Enfish).",
    cite:"MPEP §2106.04"},

  {chapter:"2100", topic:"§101 Eligibility", highYield:true,
    q:"A claim reciting 'a method of hedging risk' that consists entirely of mental steps is most likely rejected because:",
    choices:["It lacks enablement","It is directed to an abstract idea without significantly more","It is anticipated","It claims a perpetual motion machine"], answer:1,
    explain:"Bilski-type fundamental economic practices are abstract ideas. Without additional elements integrating the idea into a practical application, the claim fails §101.",
    cite:"MPEP §2106.04(a)"},

  {chapter:"2100", topic:"§101 Utility", highYield:true,
    q:"Which utility-rejection ground is improper under MPEP §2107?",
    choices:["Lack of specific utility","Lack of substantial utility","Lack of credible utility","Lack of commercial utility"], answer:3,
    explain:"Commercial success or marketability is not required. Required utility is specific, substantial, and credible (the 'Brenner v. Manson' utility trio).",
    cite:"MPEP §2107.01"},

  // ───── 102 (AIA) — Novelty / Prior Art ─────
  {chapter:"2100", topic:"§102(a)(1) AIA Prior Art", highYield:true, aia:"aia",
    q:"Under AIA 35 U.S.C. 102(a)(1), a claimed invention is anticipated if it was:",
    choices:[
      "Patented, described in a printed publication, in public use, on sale, or otherwise available to the public before the effective filing date",
      "Conceived by another before the inventor",
      "Known to the inventor before filing",
      "Disclosed in a U.S. application filed less than one year before"
    ], answer:0,
    explain:"AIA §102(a)(1) lists five categories — patented, printed publication, public use, on sale, or 'otherwise available to the public' — all measured as of the effective filing date.",
    cite:"MPEP §2152.02"},

  {chapter:"2100", topic:"§102(b)(1) Grace Period", highYield:true, aia:"aia",
    q:"Inventor X publishes her invention on March 1, 2025 and files a U.S. application on February 15, 2026. A third party independently publishes the same invention on June 1, 2025. The third-party publication is:",
    choices:[
      "Prior art because it pre-dates the application",
      "Not prior art under §102(b)(1)(B) because of X's earlier disclosure within the grace period",
      "Prior art only if it qualifies as a printed publication",
      "Prior art because the third party did not derive it from X"
    ], answer:1,
    explain:"§102(b)(1)(B) excludes intervening disclosures if the subject matter was 'publicly disclosed' by the inventor (or one who obtained from inventor) before the intervening disclosure, so long as the application is filed within one year of the inventor's disclosure.",
    cite:"MPEP §2153.02"},

  {chapter:"2100", topic:"§102(b)(1) Grace Period", highYield:true, aia:"aia",
    q:"The AIA one-year grace period applies to:",
    choices:[
      "Disclosures by anyone within one year of filing",
      "Only the inventor's own disclosures or disclosures derived from the inventor",
      "Foreign patent filings only",
      "Disclosures made after filing"
    ], answer:1,
    explain:"AIA §102(b)(1)(A) excludes only disclosures by the inventor, a joint inventor, or someone who obtained the subject matter directly or indirectly from them.",
    cite:"MPEP §2153.01"},

  {chapter:"2100", topic:"On-Sale Bar", highYield:true, aia:"aia",
    q:"Under AIA §102(a)(1), an offer for sale that is kept confidential between buyer and seller:",
    choices:[
      "Is not prior art because it was not public",
      "Can still be a §102(a)(1) on-sale bar to the inventor's own application",
      "Triggers a §102(b)(1) grace period",
      "Is treated as a printed publication"
    ], answer:1,
    explain:"Helsinn v. Teva (2019) confirmed that secret sales can still trigger the on-sale bar under AIA §102(a)(1); the sale need not publicly disclose the invention.",
    cite:"MPEP §2152.02(d)"},

  {chapter:"2100", topic:"§102 Anticipation", highYield:true,
    q:"For a single reference to anticipate a claim under §102, the reference must:",
    choices:[
      "Disclose every element of the claim, arranged as in the claim",
      "Suggest the claim's combination",
      "Teach away from the claim",
      "Be in the same field of endeavor"
    ], answer:0,
    explain:"Anticipation requires that a single prior-art reference disclose, expressly or inherently, each and every element of the claim arranged or combined as recited.",
    cite:"MPEP §2131"},

  {chapter:"2100", topic:"Inherency", highYield:true,
    q:"A feature is inherent in a prior-art reference when:",
    choices:[
      "It is probably present in the reference",
      "It is necessarily present and would be recognized by one of ordinary skill",
      "It is mentioned in a later patent",
      "It is claimed in a continuation"
    ], answer:1,
    explain:"Inherency requires that the missing feature be necessarily present — not merely possibly or probably present — in the prior art.",
    cite:"MPEP §2112"},

  {chapter:"2100", topic:"Printed Publication", highYield:true,
    q:"A thesis cataloged and shelved in a university library is a 'printed publication' when:",
    choices:[
      "It is bound","It is published in a journal",
      "It is sufficiently accessible to the public interested in the art",
      "It is in English"
    ], answer:2,
    explain:"Public accessibility is the touchstone. A reference is a printed publication when it has been disseminated or otherwise made available such that interested skilled artisans could locate it through reasonable diligence.",
    cite:"MPEP §2128"},

  {chapter:"2100", topic:"§102(a)(2)", highYield:true, aia:"aia",
    q:"Under AIA §102(a)(2), a U.S. patent application by another that was filed before the claimed invention's effective filing date but published after is prior art:",
    choices:[
      "Only after the application publishes",
      "As of its actual filing date (or earliest priority date for which it was effectively filed)",
      "Only if the claims overlap",
      "Never"
    ], answer:1,
    explain:"§102(a)(2) prior art is effective as of the earlier-filing date, not the publication date. This is the AIA analog of pre-AIA §102(e).",
    cite:"MPEP §2154"},

  {chapter:"2100", topic:"§102(b)(2)(C) Common Ownership", highYield:true, aia:"aia",
    q:"A prior-filed U.S. application by another is excepted from §102(a)(2) prior art if:",
    choices:[
      "It claims a different invention",
      "Both applications were owned by the same entity (or subject to obligation of assignment) by the effective filing date",
      "It was abandoned",
      "It was filed in a different art unit"
    ], answer:1,
    explain:"§102(b)(2)(C) removes commonly-owned subject matter from §102(a)(2). Ownership/obligation must exist by the effective filing date of the later claim.",
    cite:"MPEP §2154.02(c)"},

  // ───── 103 — Obviousness ─────
  {chapter:"2100", topic:"Graham Factors", highYield:true,
    q:"The Graham v. Deere obviousness inquiry requires the examiner to determine all of the following EXCEPT:",
    choices:[
      "Scope and content of the prior art",
      "Differences between the prior art and claims",
      "Level of ordinary skill in the art",
      "Whether the inventor used a computer simulation"
    ], answer:3,
    explain:"Graham factors: (1) scope and content of prior art; (2) differences from claims; (3) level of ordinary skill; (4) secondary considerations. The inventor's tools are not part of the analysis.",
    cite:"MPEP §2141"},

  {chapter:"2100", topic:"KSR Rationales", highYield:true,
    q:"Which is NOT one of the seven KSR rationales for an obviousness rejection?",
    choices:[
      "Combining prior art elements according to known methods to yield predictable results",
      "Simple substitution of one known element for another",
      "Obvious to try — choosing from a finite number of identified, predictable solutions",
      "Reliance on commercial considerations"
    ], answer:3,
    explain:"The seven KSR/MPEP rationales include known combinations, simple substitution, use of known technique, applying known technique to a known device ready for improvement, obvious to try, design incentives/market forces, and TSM. Commercial considerations alone are not a rationale.",
    cite:"MPEP §2143"},

  {chapter:"2100", topic:"Teaching Away", highYield:true,
    q:"A reference 'teaches away' from a proposed combination when it:",
    choices:[
      "Is silent on the relevant feature",
      "Criticizes, discredits, or otherwise discourages following the claimed path",
      "Is older than 10 years",
      "Is in a different USPTO art unit"
    ], answer:1,
    explain:"Mere silence is not teaching away. The reference must actually discourage one of ordinary skill from the path the claim takes.",
    cite:"MPEP §2145"},

  {chapter:"2100", topic:"Secondary Considerations", highYield:true,
    q:"Which is NOT a recognized objective indicium of non-obviousness?",
    choices:["Commercial success","Long-felt but unsolved need","Failure of others","Inventor's personal financial investment"], answer:3,
    explain:"Recognized indicia: commercial success, long-felt need, failure of others, copying, unexpected results, skepticism, industry praise, licensing. Personal investment is not.",
    cite:"MPEP §2145"},

  {chapter:"2100", topic:"Nexus", highYield:true,
    q:"For commercial success to overcome obviousness, the patentee must show:",
    choices:[
      "Sales exceeded one million dollars",
      "A nexus between the success and the claimed invention's novel features",
      "The product was advertised",
      "The product won an industry award"
    ], answer:1,
    explain:"Commercial success must be tied (nexus) to what is claimed and novel — not to features in the prior art, marketing, or unrelated factors.",
    cite:"MPEP §716.03"},

  {chapter:"2100", topic:"Analogous Art", highYield:true,
    q:"Two-prong test for analogous art asks whether the reference is:",
    choices:[
      "From the same field of endeavor OR reasonably pertinent to the inventor's problem",
      "Cited in the IDS AND published in English",
      "Filed in the U.S. AND less than 10 years old",
      "From the same company AND the same inventor"
    ], answer:0,
    explain:"Analogous art: (1) same field of endeavor regardless of the problem, OR (2) reasonably pertinent to the particular problem.",
    cite:"MPEP §2141.01(a)"},

  {chapter:"2100", topic:"Prima Facie Obviousness", highYield:true,
    q:"A prima facie case of obviousness requires the examiner to articulate:",
    choices:[
      "A specific motivation in the prior art",
      "Some articulated reasoning with rational underpinning to combine the references",
      "Proof that one of skill would have built the combination",
      "A working example in the prior art"
    ], answer:1,
    explain:"After KSR, the examiner must provide articulated reasoning with rational underpinning. A specific TSM in the prior art is not required.",
    cite:"MPEP §2142, §2143"},

  {chapter:"2100", topic:"Obvious-to-Try", highYield:true,
    q:"'Obvious to try' supports an obviousness rejection when there is:",
    choices:[
      "A finite number of identified, predictable solutions with a reasonable expectation of success",
      "Any number of theoretical solutions",
      "An unsolved long-felt need",
      "Industry skepticism"
    ], answer:0,
    explain:"KSR allowed 'obvious to try' when there are a finite, known set of identified solutions and a reasonable expectation of success — not throwing darts at unpredictable variables.",
    cite:"MPEP §2143(I)(E)"},

  {chapter:"2100", topic:"Reasonable Expectation", highYield:true,
    q:"Absolute predictability of success is required for an obviousness combination:",
    choices:["Always","Only in unpredictable arts","Never — a reasonable expectation of success suffices","Only for chemical inventions"], answer:2,
    explain:"Only a reasonable, not absolute, expectation of success is required.",
    cite:"MPEP §2143.02"},

  // ───── 112 — Specification & Claims ─────
  {chapter:"2100", topic:"§112(a) Written Description", highYield:true,
    q:"To satisfy the written description requirement, the specification must:",
    choices:[
      "Use the exact words of the later-presented claim",
      "Convey to one skilled in the art that the inventor had possession of the claimed invention at the filing date",
      "Provide a working example",
      "Include drawings"
    ], answer:1,
    explain:"Possession at the filing date is the test. Verbatim support is not required, but the disclosure must reasonably convey possession of the full scope.",
    cite:"MPEP §2163"},

  {chapter:"2100", topic:"§112(a) Enablement", highYield:true,
    q:"The Wands factors are used to determine:",
    choices:["Definiteness under §112(b)","Whether experimentation needed to practice the claim is undue","Subject-matter eligibility","Restriction propriety"], answer:1,
    explain:"In re Wands sets out eight factors (quantity of experimentation, direction, examples, nature of invention, state of art, skill, predictability, breadth of claims) for assessing undue experimentation.",
    cite:"MPEP §2164.01(a)"},

  {chapter:"2100", topic:"§112(a) Best Mode", highYield:true, aia:"aia",
    q:"After the AIA, failure to disclose best mode:",
    choices:[
      "Is still a basis for rejection during examination but is no longer a basis for invalidity in litigation",
      "Has been completely eliminated",
      "Is fatal to the application",
      "Is enforced only for biotech inventions"
    ], answer:0,
    explain:"AIA §15 left best mode as a §112(a) requirement (still a basis for examiner rejection in theory, though rarely raised) but eliminated it as a defense in litigation under §282.",
    cite:"MPEP §2165"},

  {chapter:"2100", topic:"§112(b) Definiteness", highYield:true,
    q:"Under §112(b), a claim is indefinite when:",
    choices:[
      "Any term is broad",
      "A skilled person, reading the claim in light of the specification, cannot ascertain the scope with reasonable certainty",
      "It contains relative terms",
      "It uses functional language"
    ], answer:1,
    explain:"Nautilus v. Biosig set the 'reasonable certainty' standard. Breadth is not indefiniteness; ambiguity is.",
    cite:"MPEP §2173.02"},

  {chapter:"2100", topic:"§112(d) Improper Dependent", highYield:true,
    q:"A dependent claim is improper under §112(d) if it:",
    choices:[
      "Fails to further limit the claim from which it depends",
      "Repeats limitations from the parent",
      "Is longer than the independent claim",
      "Uses 'comprising'"
    ], answer:0,
    explain:"§112(d) requires a dependent claim to specify a further limitation. A claim that broadens or fails to narrow is improper.",
    cite:"MPEP §608.01(n)"},

  {chapter:"2100", topic:"§112(f) Means-Plus-Function", highYield:true,
    q:"A claim element invokes §112(f) when it:",
    choices:[
      "Uses any functional language",
      "Uses 'means for' or a nonce word coupled with functional language and no sufficient structure",
      "Recites a step",
      "Recites a system"
    ], answer:1,
    explain:"The 'means for' presumption (and nonce-word equivalents like 'module for') invokes §112(f), construed to cover the corresponding structure in the specification and its equivalents.",
    cite:"MPEP §2181"},

  {chapter:"2100", topic:"Broadest Reasonable Interpretation", highYield:true,
    q:"During examination, claims are given their:",
    choices:["Narrowest interpretation","Plain and ordinary meaning only","Broadest reasonable interpretation consistent with the specification","Same construction as in litigation"], answer:2,
    explain:"BRI applies in examination — read the claim broadly but reasonably in light of the specification, as one of ordinary skill would.",
    cite:"MPEP §2111"},

  {chapter:"2100", topic:"Transitional Phrases", highYield:true,
    q:"The transitional phrase 'consisting of' in a claim means:",
    choices:[
      "Open — additional unrecited elements may be present",
      "Closed — excludes any element not specified",
      "Partially closed — only unrelated additions permitted",
      "Same as 'comprising'"
    ], answer:1,
    explain:"'Comprising' is open. 'Consisting of' is closed. 'Consisting essentially of' permits only those additions that do not materially affect the basic and novel characteristics.",
    cite:"MPEP §2111.03"},

  {chapter:"2100", topic:"Consisting Essentially Of",
    q:"'Consisting essentially of' permits additional unrecited elements:",
    choices:[
      "Without limit",
      "Only if they do not materially affect the basic and novel characteristics of the claimed invention",
      "Never",
      "Only if specifically claimed"
    ], answer:1,
    explain:"Partially closed — extra elements allowed only if they do not materially affect the basic and novel characteristics.",
    cite:"MPEP §2111.03"},

  {chapter:"2100", topic:"Preamble", highYield:true,
    q:"A preamble limits the claim when it:",
    choices:[
      "Is recited at all",
      "Recites essential structure or steps, or breathes life and meaning into the claim",
      "Mentions the field of invention",
      "Uses 'an apparatus'"
    ], answer:1,
    explain:"A preamble is limiting when it gives life, meaning, and vitality to the claim — e.g., it is essential to understanding terms in the body or recites structure later relied upon.",
    cite:"MPEP §2111.02"},

  {chapter:"2100", topic:"Markush", highYield:true,
    q:"A proper Markush group recites alternatives:",
    choices:[
      "Selected from the group consisting of A, B, and C",
      "Including A, B, and C",
      "A or B or C or others",
      "Such as A, B, or C"
    ], answer:0,
    explain:"Proper Markush form: 'selected from the group consisting of...' — a closed list of alternatives.",
    cite:"MPEP §2117"},

  {chapter:"2100", topic:"Product-by-Process", highYield:true,
    q:"In a product-by-process claim, patentability of the product is determined by:",
    choices:[
      "The process steps recited",
      "The product itself, regardless of how it is made",
      "The product and the process together",
      "The intended use"
    ], answer:1,
    explain:"A product-by-process claim is patentable based on the structural product. If the prior-art product is the same, the claim is anticipated even if made by a different process.",
    cite:"MPEP §2113"},

  {chapter:"2100", topic:"Intended Use",
    q:"A statement of intended use in the preamble of an apparatus claim is generally:",
    choices:[
      "A limitation that distinguishes the prior art",
      "Not a limitation if the prior-art apparatus is capable of the use",
      "A basis for rejection under §101",
      "Required to be supported by a working example"
    ], answer:1,
    explain:"Apparatus claims cover what a device is, not what it does. If the prior-art structure can perform the recited use, the claim is anticipated.",
    cite:"MPEP §2114"},

  {chapter:"2100", topic:"Functional Language",
    q:"In an apparatus claim, functional language without corresponding structure typically:",
    choices:[
      "Is improper and indefinite",
      "May invoke §112(f) and be limited to structures disclosed in the specification",
      "Always broadens the claim",
      "Is treated as a method step"
    ], answer:1,
    explain:"Functional language coupled with 'means' (or nonce term) and no recited structure invokes §112(f), limiting the claim to disclosed structures and their equivalents.",
    cite:"MPEP §2181"},

  {chapter:"2100", topic:"Range Anticipation",
    q:"A claimed range is anticipated by a single point of the prior-art range when:",
    choices:[
      "The point falls within the claimed range",
      "The point is critical",
      "The range is narrow",
      "The reference is a U.S. patent"
    ], answer:0,
    explain:"A single prior-art example within the claimed range anticipates. A prior-art range that overlaps may render the claim obvious but does not strictly anticipate.",
    cite:"MPEP §2131.03"},

  {chapter:"2100", topic:"Genus/Species",
    q:"Disclosure of a species in the prior art:",
    choices:["Does not anticipate a generic claim","Anticipates a generic claim covering it","Always renders the genus obvious","Triggers double patenting"], answer:1,
    explain:"A species anticipates the genus that encompasses it. (Conversely, the genus does not necessarily anticipate every species.)",
    cite:"MPEP §2131.02"},

  {chapter:"2100", topic:"Swearing Behind (pre-AIA only)", aia:"pre-aia",
    q:"For an application subject to pre-AIA §102, a Rule 1.131 affidavit may be used to:",
    choices:[
      "Antedate a reference that is not a statutory bar by showing prior invention",
      "Overcome any §102(b) statutory bar",
      "Overcome §103 by removing the inventor's own work",
      "Establish best mode"
    ], answer:0,
    explain:"Rule 131 swearing-behind antedates non-statutory bars under pre-AIA §102(a) and (e). It cannot overcome §102(b) absolute bars. Not available for AIA applications.",
    cite:"MPEP §715"},

  {chapter:"2100", topic:"Rule 1.132 Declaration", highYield:true,
    q:"A Rule 1.132 declaration may be used to:",
    choices:[
      "Antedate a reference",
      "Submit evidence of unexpected results, commercial success, or non-analogous art",
      "Establish inventorship",
      "Replace an IDS"
    ], answer:1,
    explain:"Rule 1.132 declarations submit evidence relevant to patentability — typically unexpected results, secondary considerations, or to rebut an examiner's factual finding.",
    cite:"MPEP §716"},

  {chapter:"2100", topic:"Unexpected Results",
    q:"Evidence of unexpected results must show a difference that is:",
    choices:[
      "Any difference",
      "Of a difference in kind or in degree that would not have been expected",
      "Commercially significant",
      "Recognized by an industry award"
    ], answer:1,
    explain:"The results must be unexpectedly different in kind, or unexpectedly different in degree, compared to the closest prior art. Mere differences are not enough.",
    cite:"MPEP §716.02"},

  {chapter:"2100", topic:"Comparative Testing",
    q:"Comparative test data submitted to rebut obviousness must compare the claimed invention to:",
    choices:["A randomly chosen reference","The closest prior art","The earliest cited reference","A prior product of the inventor"], answer:1,
    explain:"Showings of unexpected results must compare against the closest prior art, not just any reference.",
    cite:"MPEP §716.02(e)"},

  {chapter:"2100", topic:"Double Patenting", highYield:true,
    q:"Nonstatutory (obviousness-type) double patenting can be overcome by:",
    choices:[
      "A terminal disclaimer tying the term and ownership of the later patent to the earlier",
      "Antedating the earlier patent",
      "Filing a continuation",
      "Filing an IDS"
    ], answer:0,
    explain:"A terminal disclaimer (37 CFR 1.321) addresses ODP by ensuring the later patent expires with the earlier and remains commonly owned. Statutory (same-invention) double patenting cannot be cured by a terminal disclaimer.",
    cite:"MPEP §804"},

  {chapter:"2100", topic:"Statutory Double Patenting",
    q:"Statutory double patenting under §101 arises when:",
    choices:[
      "Two patents to the same inventive entity claim patentably indistinct subject matter",
      "Two patents have the same title",
      "Two patents share an inventor",
      "Two patents are commonly owned"
    ], answer:0,
    explain:"§101 statutory DP applies when two claims are directed to the same invention (i.e., the same claim scope). It cannot be overcome by terminal disclaimer.",
    cite:"MPEP §804(II)(A)"},

  {chapter:"2100", topic:"In re Schreiber",
    q:"Where prior art structure is identical to claimed structure, the burden to show the prior art does not inherently possess the claimed property is on the:",
    choices:["Examiner","Applicant","Public","Inventor's attorney only"], answer:1,
    explain:"Once the examiner shows the prior-art product appears to be the same, the burden shifts to the applicant to prove it does not inherently possess the claimed property.",
    cite:"MPEP §2112(V)"},

  {chapter:"2100", topic:"Reference Date", aia:"aia",
    q:"A U.S. patent's effective date as a §102(a)(2) reference for an examined claim is:",
    choices:[
      "Its issue date","Its publication date","Its effective filing date in the U.S.","Its priority date in any country if validly claimed"
    ], answer:3,
    explain:"Under AIA §102(d), the reference is effective as of the earliest date for which it was 'effectively filed' — including foreign priority — for the subject matter relied upon.",
    cite:"MPEP §2154.01(b)"},

  {chapter:"2100", topic:"§102 Public Use",
    q:"Use of an invention by the inventor in a public place can be 'experimental use' (and not a public-use bar) if:",
    choices:[
      "The inventor took notes",
      "The use was primarily for experimentation, with indicia such as control, monitoring, and confidentiality where possible",
      "The use was funded by the government",
      "The use was outside the United States"
    ], answer:1,
    explain:"Experimental use must be primarily for the inventor's testing — control over use, records, secrecy where feasible, and necessity for development are factors.",
    cite:"MPEP §2133.03(e)"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 700 — EXAMINATION  (heavily tested)
  // ══════════════════════════════════════════════════════════════════

  {chapter:"700", topic:"Reply Period", highYield:true,
    q:"The statutory maximum period for reply to an Office action is:",
    choices:["3 months","6 months","12 months","No fixed maximum"], answer:1,
    explain:"35 U.S.C. 133 — the statutory maximum is 6 months. The SSP is usually 3 months, extendable up to 6 months with fees under 37 CFR 1.136(a).",
    cite:"MPEP §710.02"},

  {chapter:"700", topic:"Reply Period", highYield:true,
    q:"An applicant receives a non-final Office action dated April 1 with a 3-month SSP. Without filing for extensions, the reply is due:",
    choices:["May 1","July 1","October 1","Any time within 12 months"], answer:1,
    explain:"3-month SSP measured from the mail date — July 1. Up to 3 additional months of extensions available under 1.136(a) (paid by the time of reply).",
    cite:"MPEP §710.02"},

  {chapter:"700", topic:"Extension of Time", highYield:true,
    q:"An extension of time under 37 CFR 1.136(a):",
    choices:[
      "Must be filed before the SSP runs",
      "May be filed up to the day the reply is filed, even after the SSP, as long as total time does not exceed 6 months and a fee is paid",
      "Requires examiner approval",
      "Is not available for after-final replies"
    ], answer:1,
    explain:"1.136(a) extensions are automatic and may be requested with the reply itself, so long as the total reply period does not exceed 6 months.",
    cite:"MPEP §710.02(e)"},

  {chapter:"700", topic:"Extension Limits",
    q:"37 CFR 1.136(b) extensions of time:",
    choices:[
      "Are automatic upon fee payment",
      "Require a showing of sufficient cause and are granted at the examiner's discretion",
      "Are unlimited",
      "Apply only after final"
    ], answer:1,
    explain:"1.136(b) requires a showing of sufficient cause. Used when 1.136(a) is unavailable (e.g., when the Office sets a time period that is not extendable under (a)).",
    cite:"MPEP §710.02(c)"},

  {chapter:"700", topic:"Final Rejection", highYield:true,
    q:"After a final rejection, which amendment is generally NOT entered as a matter of right?",
    choices:[
      "Cancellation of claims",
      "Adoption of suggestions made by the examiner",
      "Presentation of claims in better form for appeal",
      "Amendment requiring further search or raising new issues"
    ], answer:3,
    explain:"After final, amendments that require further search/consideration or raise new issues are not entered as of right. RCE or after-final practice (AFCP 2.0) may be needed.",
    cite:"MPEP §714.13"},

  {chapter:"700", topic:"After Final", highYield:true,
    q:"Filing an amendment after final that is not entered:",
    choices:[
      "Tolls the SSP","Restarts the SSP","Does not toll the SSP — applicant must still respond within statutory period","Automatically converts to an RCE"
    ], answer:2,
    explain:"The 3-month period continues to run regardless of an unentered after-final amendment. Applicant must take further action (RCE, appeal, etc.) within the 6-month statutory cap.",
    cite:"MPEP §714.13"},

  {chapter:"700", topic:"RCE", highYield:true,
    q:"A Request for Continued Examination requires:",
    choices:[
      "A new oath","A submission and the prescribed fee, filed before payment of issue fee or abandonment",
      "A different inventor","Examiner approval"
    ], answer:1,
    explain:"37 CFR 1.114 — RCE requires a submission (amendment, IDS, evidence, or arguments) and the fee, filed prior to payment of the issue fee, abandonment, or termination of proceedings.",
    cite:"MPEP §706.07(h)"},

  {chapter:"700", topic:"RCE Eligibility",
    q:"An RCE may NOT be filed in which type of application?",
    choices:["Utility nonprovisional","Plant","Design","Reissue"], answer:2,
    explain:"RCEs are not available in design applications, provisional applications, applications already issued/abandoned, or reexamination proceedings.",
    cite:"MPEP §706.07(h)(I)"},

  {chapter:"700", topic:"First Action Final",
    q:"A first Office action in a continuation may be made final when:",
    choices:[
      "Always — examiners may make any action final",
      "All claims are drawn to the same invention as a finally-rejected claim in the parent and would have been properly final in the parent",
      "The applicant pays a fee","Never"
    ], answer:1,
    explain:"First-action final is allowed in a continuation where the claims would have been properly finally rejected on the prior art of record in the parent.",
    cite:"MPEP §706.07(b)"},

  {chapter:"700", topic:"Suspension",
    q:"An applicant may request suspension of action under 37 CFR 1.103 for:",
    choices:[
      "Up to 3 years","Up to 6 months for good and sufficient cause","Unlimited time","Only with examiner consent"
    ], answer:1,
    explain:"1.103(a) allows up to 6 months of suspension for good and sufficient cause; 1.103(d) suspension in a CON/CIP filed under 1.53(b) may be up to 3 years from earliest claimed benefit date.",
    cite:"MPEP §709"},

  {chapter:"700", topic:"Petition to Revive", highYield:true, aia:"aia",
    q:"An application abandoned for failure to reply timely may be revived under 37 CFR 1.137(a) by showing the delay was:",
    choices:[
      "Unavoidable","Unintentional, with a petition, the required reply, and the petition fee",
      "Excusable","Reasonable"
    ], answer:1,
    explain:"Post-2013 Patent Law Treaty implementation: petition to revive uses an 'unintentional' standard. Petition + fee + reply + statement of unintentional delay.",
    cite:"MPEP §711.03(c)"},

  {chapter:"700", topic:"Abandonment", highYield:true,
    q:"An application becomes abandoned for failure to reply when:",
    choices:[
      "The shortened statutory period expires",
      "The statutory maximum (6 months) expires without a complete reply",
      "The examiner closes the file",
      "The first Office action issues"
    ], answer:1,
    explain:"Abandonment occurs at the end of the statutory period (typically 6 months) if no complete reply is filed. The SSP itself does not abandon the application if extensions are available.",
    cite:"MPEP §711"},

  {chapter:"700", topic:"Complete Reply",
    q:"A reply that addresses every ground of rejection but omits to address one objection is:",
    choices:["Treated as complete","A bona fide attempt that may be given 1 month to correct","Ignored","Abandons the application immediately"], answer:1,
    explain:"A bona fide attempt to respond, missing only minor items, may be given a 1-month period (or remainder of the SSP, whichever is longer) to complete.",
    cite:"MPEP §714.03"},

  {chapter:"700", topic:"Interview", highYield:true,
    q:"Examiner interviews after a final rejection are:",
    choices:["A matter of right","At the examiner's discretion","Prohibited","Only by phone"], answer:1,
    explain:"Pre-final interviews are generally as of right (once examination has begun). Post-final interviews are at the examiner's discretion.",
    cite:"MPEP §713.09"},

  {chapter:"700", topic:"Interview Summary",
    q:"After an interview, an interview summary is required:",
    choices:[
      "Only when an agreement is reached",
      "For every substantive interview, prepared by the examiner; applicant must also file a summary if no examiner summary is attached",
      "Only at applicant's request","Never"
    ], answer:1,
    explain:"Examiner completes a summary for every substantive interview. Applicant must also file a summary if the interview was held before first Office action or if no examiner summary was provided.",
    cite:"MPEP §713.04"},

  {chapter:"700", topic:"New Matter", highYield:true,
    q:"An amendment adding subject matter not described in the original disclosure is:",
    choices:["Allowable with a fee","New matter and not permitted","Treated as a continuation-in-part","Allowable if obvious"], answer:1,
    explain:"35 U.S.C. 132(a) bars new matter. The amendment is not entered as to the new matter. To add new matter, a CIP must be filed.",
    cite:"MPEP §608.04"},

  {chapter:"700", topic:"Prior Art Citation",
    q:"Information disclosed in an IDS is considered by the examiner if:",
    choices:[
      "It is submitted in any form",
      "It complies with 37 CFR 1.97 and 1.98 — timing, list, and copies/translations as required",
      "It is mentioned in the specification",
      "It is in English"
    ], answer:1,
    explain:"1.97/1.98 govern IDS — timing (before first action, after first action with fee/statement, after final/Notice of Allowance with stricter requirements), the required list, and any copies/translations.",
    cite:"MPEP §609"},

  {chapter:"700", topic:"IDS Timing", highYield:true,
    q:"An IDS filed more than three months after filing but before the first Office action is considered without a fee or statement if:",
    choices:[
      "It is filed within 3 months of the U.S. application's filing date",
      "It is filed before the mailing of any Office action on the merits",
      "It is fewer than 10 references",
      "It includes an English summary"
    ], answer:1,
    explain:"Per 1.97(b), an IDS is considered without fee/statement if filed within 3 months of filing date OR before the first Office action on the merits, whichever is later.",
    cite:"MPEP §609.04(b)"},

  {chapter:"700", topic:"Information Disclosure",
    q:"An IDS filed after the Notice of Allowance but before issue fee payment requires:",
    choices:[
      "Only the listing","Either the 1.97(e) statement and the fee, or a withdrawal from issue and an RCE",
      "Examiner consent","A new oath"
    ], answer:1,
    explain:"After NOA, the applicant must either file with a 1.97(e) statement plus fee under 1.17(p), or withdraw from issue (typically via RCE) to have the IDS considered.",
    cite:"MPEP §609.04(b)"},

  {chapter:"700", topic:"Affidavit Timing",
    q:"After final rejection, a Rule 1.132 affidavit is entered:",
    choices:[
      "As a matter of right",
      "Only if it presents no new issue and is timely under 1.116(b)",
      "Never","Only by petition"
    ], answer:1,
    explain:"After final, evidence under 1.132 is subject to 1.116 — entered only if it places the application in condition for allowance or is justified by why it was not earlier presented.",
    cite:"MPEP §715.09"},

  {chapter:"700", topic:"Notice of Allowance",
    q:"After a Notice of Allowance, the issue fee must be paid within:",
    choices:["1 month, non-extendable","3 months, non-extendable","3 months, extendable","6 months"], answer:1,
    explain:"35 U.S.C. 151 — the issue fee is due within 3 months of the NOA mailing date. This period is NOT extendable.",
    cite:"MPEP §1306"},

  {chapter:"700", topic:"Examiner's Amendment",
    q:"An examiner's amendment after agreement with applicant is appropriate when:",
    choices:[
      "It places the application in condition for allowance and the applicant authorizes it (usually orally)",
      "It introduces new matter","It is contested","It restricts the claims"
    ], answer:0,
    explain:"Examiner's amendments are used in connection with an allowance after authorization. Form is documented in the file (often a phone interview record).",
    cite:"MPEP §1302.04"},

  {chapter:"700", topic:"Restriction (in 700 examination)", highYield:true,
    q:"After a restriction requirement, the applicant's election:",
    choices:[
      "Must be without traverse","Must be with traverse",
      "May be with or without traverse; election is required to obtain examination of any claim",
      "May be deferred until appeal"
    ], answer:2,
    explain:"Applicant must elect to allow examination to proceed; the election may be with or without traverse. With traverse preserves the right to petition the restriction.",
    cite:"MPEP §818"},

  {chapter:"700", topic:"Improper Restriction",
    q:"Applicant's remedy when a restriction is believed improper is to:",
    choices:[
      "Refuse to elect",
      "Elect with traverse and, if maintained final, petition the requirement under 37 CFR 1.144",
      "File a continuation","Appeal to PTAB"
    ], answer:1,
    explain:"Election with traverse preserves the right to petition under 1.144 (timely petition, generally within 2 months of the action making restriction final).",
    cite:"MPEP §818.03"},

  {chapter:"700", topic:"Reopening Prosecution",
    q:"Prosecution may be reopened after appeal brief filing by:",
    choices:[
      "The examiner with the supervisor's approval, to issue a new ground of rejection",
      "Only by PTAB","Only by petition","Not at all"
    ], answer:0,
    explain:"With TC Director or SPE approval, the examiner can reopen prosecution to issue a new ground of rejection after the appeal brief.",
    cite:"MPEP §1207.04"},

  {chapter:"700", topic:"Quayle Action",
    q:"An Ex parte Quayle action is issued when:",
    choices:[
      "All claims are allowable but formal matters remain",
      "All claims are rejected","An interview is needed","Restriction is required"
    ], answer:0,
    explain:"A Quayle action closes prosecution on the merits — only formal matters (drawings, oath, etc.) remain. Short 2-month SSP, extendable.",
    cite:"MPEP §714.14"},

  {chapter:"700", topic:"Reply Brief",
    q:"After receipt of an examiner's answer in an appeal, applicant may file a reply brief within:",
    choices:["2 months, non-extendable, except for new ground rejections","30 days","6 months","No reply brief is permitted"], answer:0,
    explain:"Reply brief is due 2 months from the examiner's answer date, non-extendable. If the answer designates a new ground of rejection, different time periods may apply.",
    cite:"MPEP §1208"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 600 — PARTS, FORM & CONTENT OF APPLICATION
  // ══════════════════════════════════════════════════════════════════

  {chapter:"600", topic:"Filing Date", highYield:true, aia:"aia",
    q:"For a nonprovisional utility application filed on or after Dec 18, 2013, the filing date is granted upon receipt of:",
    choices:[
      "Specification (with at least one claim formerly required; now claims may be supplied later) and any drawings",
      "Only a specification","Only claims","An oath and a fee"
    ], answer:0,
    explain:"Under PLT-implementing changes, a U.S. nonprovisional filing date is accorded when a specification (with or without claims) and any necessary drawings are filed. Claims/oath/fee can be supplied later upon notice.",
    cite:"MPEP §601.01(a)"},

  {chapter:"600", topic:"Filing Date — Provisional",
    q:"For a provisional application, the filing date requires:",
    choices:[
      "Specification, drawings if needed, and the cover sheet identifying the application as provisional",
      "Specification and claims","Oath and fee","English language only"
    ], answer:0,
    explain:"Provisional filing requires the specification per 1.51(c)(1), any drawings, and a cover sheet identifying it as provisional with inventor info. Claims and oath are NOT required.",
    cite:"MPEP §601.01(b)"},

  {chapter:"600", topic:"Specification", highYield:true,
    q:"The specification must comply with all of the following under §112(a) EXCEPT:",
    choices:["Written description","Enablement","Best mode","Commercial success"], answer:3,
    explain:"§112(a) requires written description, enablement, and best mode. Commercial success is a secondary consideration for §103, not a specification requirement.",
    cite:"MPEP §608.01"},

  {chapter:"600", topic:"Drawings", highYield:true,
    q:"Drawings are required for a utility application when:",
    choices:[
      "The invention is mechanical only","The applicant requests them",
      "Necessary for the understanding of the subject matter sought to be patented","Always"
    ], answer:2,
    explain:"35 U.S.C. 113 — drawings are required where necessary for understanding. Many chemical/process inventions need none; drawings cannot cure §112(a) defects in the specification.",
    cite:"MPEP §608.02"},

  {chapter:"600", topic:"Color Drawings",
    q:"Color drawings or photographs in a utility application require:",
    choices:[
      "Nothing — they are accepted by default",
      "A petition under 37 CFR 1.84(a)(2), fee, and three sets of color drawings (plus a specification statement)",
      "Examiner approval","A continuation"
    ], answer:1,
    explain:"Color drawings require a petition explaining why they are necessary, the petition fee, three sets of color drawings/photographs, and a specification reference acknowledging the color.",
    cite:"MPEP §608.02(VII)"},

  {chapter:"600", topic:"Claims — Independent vs Dependent", highYield:true,
    q:"An independent claim:",
    choices:[
      "Refers to and further limits another claim",
      "Stands on its own and does not refer to another claim",
      "Is in Jepson form","Must come first in the claim listing"
    ], answer:1,
    explain:"An independent claim does not refer to any other claim. A dependent claim refers to and further limits another claim.",
    cite:"MPEP §608.01(n)"},

  {chapter:"600", topic:"Multiple Dependent Claims", highYield:true,
    q:"A proper multiple dependent claim:",
    choices:[
      "May refer to multiple claims cumulatively",
      "May refer to multiple claims only in the alternative, and may not depend from another multiple dependent claim",
      "Must be presented first","Counts as one claim for fees"
    ], answer:1,
    explain:"35 U.S.C. 112(e) — in the alternative only; cannot serve as a basis for another multiple dependent claim. For fees, each claim referred to by an MDC counts separately.",
    cite:"MPEP §608.01(n)"},

  {chapter:"600", topic:"Claim Form",
    q:"A claim presented in Jepson form recites the prior art in the preamble. The transition phrase typically used is:",
    choices:["comprising","wherein the improvement comprises","consisting of","characterized by"], answer:1,
    explain:"Jepson claims recite prior art in the preamble, then use 'wherein the improvement comprises' to identify the inventive addition. Treated as an admission of prior art.",
    cite:"MPEP §2129"},

  {chapter:"600", topic:"Oath/Declaration", highYield:true, aia:"aia",
    q:"Under the AIA, the inventor's oath or declaration:",
    choices:[
      "Must be filed on the application filing date",
      "May be postponed until the application is otherwise in condition for allowance",
      "Cannot be made by an assignee","Must be notarized"
    ], answer:1,
    explain:"AIA §4 — the oath/declaration is required by the time the issue fee is paid. A substitute statement is permitted when the inventor cannot/will not sign.",
    cite:"MPEP §602"},

  {chapter:"600", topic:"Substitute Statement", aia:"aia",
    q:"A substitute statement under 37 CFR 1.64 may be filed by the applicant when the inventor:",
    choices:[
      "Refuses to sign or cannot be reached after diligent effort, is deceased, or is legally incapacitated",
      "Lives outside the U.S.","Has changed employers","Is on vacation"
    ], answer:0,
    explain:"Substitute statements are allowed when the inventor is deceased, legally incapacitated, refuses, or cannot be found/reached after diligent effort.",
    cite:"MPEP §604"},

  {chapter:"600", topic:"Power of Attorney",
    q:"A power of attorney signed by less than all inventors but by the assignee of the entire interest:",
    choices:["Is improper","Is proper if the assignment is recorded","Requires inventor consent","Requires examiner approval"], answer:1,
    explain:"An assignee of the entire interest may execute a power of attorney; if the assignment is properly documented/recorded (37 CFR 3.71/3.73), they take over prosecution rights.",
    cite:"MPEP §402.07"},

  {chapter:"600", topic:"Small Entity", highYield:true,
    q:"To qualify for small entity status, the applicant must:",
    choices:[
      "Have fewer than 500 employees as an independent inventor or small business, and not have assigned/licensed rights to a non-small entity",
      "Be a sole inventor","Have annual revenue under $1M","Be a U.S. citizen"
    ], answer:0,
    explain:"Small entity (37 CFR 1.27): independent inventor, small business (<500 employees), or nonprofit, with no rights conveyed to a non-small entity.",
    cite:"MPEP §509.02"},

  {chapter:"600", topic:"Micro Entity",
    q:"Micro entity status under 37 CFR 1.29 requires the applicant to qualify as a small entity AND:",
    choices:[
      "Have fewer than 5 prior applications, gross income under the threshold, and not assigned to a higher-income entity",
      "Be a sole inventor","Be a university","Have foreign nationality"
    ], answer:0,
    explain:"Micro entity: small entity + ≤4 previously filed applications (excluding provisionals, foreign, and PCT not entering US) + gross income ≤3× median household income + not assigned to a non-micro entity (or university-employed alternative).",
    cite:"MPEP §509.04"},

  {chapter:"600", topic:"Sequence Listing",
    q:"WIPO ST.26 XML sequence listings are required for applications filed on or after July 1, 2022 that disclose nucleotide/amino acid sequences. Failure to comply:",
    choices:[
      "Is harmless","May result in non-accordance of filing date or other consequences",
      "Triggers a §101 rejection","Requires CIP"
    ], answer:1,
    explain:"ST.26 compliance is required for sequence-containing applications filed after the cutoff; non-compliance may impact filing date accordance.",
    cite:"MPEP §608.05"},

  {chapter:"600", topic:"Incorporation by Reference",
    q:"Material incorporated by reference into the specification:",
    choices:[
      "Cannot be 'essential material' from a non-US patent or publication",
      "Becomes part of the disclosure for §112(a) purposes if essential, only if incorporated by reference to a U.S. patent, U.S. application publication, or pending U.S. application",
      "Both A and B","Neither"
    ], answer:2,
    explain:"Essential material may be incorporated only from U.S. patents/published U.S. applications/pending U.S. applications (with restrictions). Non-essential material has broader sources.",
    cite:"MPEP §608.01(p)"},

  {chapter:"600", topic:"Application Number",
    q:"An application data sheet (ADS) under 37 CFR 1.76:",
    choices:[
      "Is required for all applications","Provides bibliographic and benefit/priority claims and controls over inconsistent information in the oath",
      "Cannot be corrected","Must be filed before filing date"
    ], answer:1,
    explain:"ADS supplies bibliographic data, inventor info, foreign/domestic priority claims. When in conflict, ADS generally controls over the oath/declaration.",
    cite:"MPEP §601.05"},

  {chapter:"600", topic:"Reference Filing", aia:"aia",
    q:"A nonprovisional application may be filed by reference to a previously filed application under 37 CFR 1.57(a) when:",
    choices:[
      "The reference identifies the prior application and indicates the new application is a copy of it; later a copy must be furnished",
      "The applicant submits no specification at all","The application is a continuation","The application is a provisional"
    ], answer:0,
    explain:"1.57(a) reference filing allows applicants to obtain a filing date by referencing a previously filed application; the actual copy must be submitted within a set time.",
    cite:"MPEP §601.01(a)"},

  {chapter:"600", topic:"Translation Required",
    q:"A non-English application receives a filing date but requires:",
    choices:[
      "An English translation, the fee for late filing of translation, and a statement of accuracy, within the time set by the Office",
      "Examiner approval","A petition","Submission of a foreign attorney"
    ], answer:0,
    explain:"Non-English applications get a filing date; applicant must furnish an English translation, the surcharge, and a statement of translator accuracy.",
    cite:"MPEP §601.01(d)"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 200 — APPLICATION TYPES, BENEFIT & PRIORITY
  // ══════════════════════════════════════════════════════════════════

  {chapter:"200", topic:"Provisional", highYield:true,
    q:"A provisional application is automatically abandoned how long after filing?",
    choices:["6 months","12 months","18 months","It is not automatically abandoned"], answer:1,
    explain:"Provisional becomes abandoned 12 months after filing — cannot be revived to extend. To preserve benefit, a nonprovisional or PCT must be filed within 12 months (subject to limited restoration in PCT).",
    cite:"MPEP §201.04"},

  {chapter:"200", topic:"Provisional",
    q:"Which is NOT permitted in a provisional application?",
    choices:["Drawings","An inventor's oath","A claim of foreign priority","A claim"], answer:2,
    explain:"A provisional cannot claim priority to any earlier application — provisional, foreign, or PCT. It may have claims (though not required), drawings, and need not be examined.",
    cite:"MPEP §201.04(III)"},

  {chapter:"200", topic:"Continuation", highYield:true,
    q:"A continuation application under 35 U.S.C. 120 must:",
    choices:[
      "Add new matter","Be filed before patenting, abandonment, or termination of the parent (co-pendency)",
      "Have a different inventor","Be a U.S. application"
    ], answer:1,
    explain:"Co-pendency is essential — the continuation must be filed while the parent is still pending, at least one inventor must be in common, and no new matter may be added (else CIP).",
    cite:"MPEP §201.07"},

  {chapter:"200", topic:"Continuation-in-Part", highYield:true,
    q:"A CIP application:",
    choices:[
      "May add new matter; claims supported only by new matter receive the CIP filing date",
      "Must be filed within 6 months of parent","Is the same as a divisional","Cannot share subject matter with parent"
    ], answer:0,
    explain:"CIPs are partially new — claims supported only by new matter get the CIP's filing date; claims fully supported by the parent receive the parent's date.",
    cite:"MPEP §201.08"},

  {chapter:"200", topic:"Divisional", highYield:true,
    q:"A divisional application:",
    choices:[
      "Is filed in response to a restriction requirement, claiming a non-elected invention; safe-harbor under §121 protects against double patenting based on the parent",
      "Is the same as a CIP","Adds new matter","Cannot share inventors with the parent"
    ], answer:0,
    explain:"§121 safe harbor: a divisional filed as a result of a restriction requirement is shielded from double-patenting rejections based on the parent's claims.",
    cite:"MPEP §201.06"},

  {chapter:"200", topic:"Domestic Benefit", highYield:true, aia:"aia",
    q:"To claim §120 benefit, the application must:",
    choices:[
      "Be a CIP","Be co-pending with the prior application, name at least one common inventor, and make a specific reference to the prior application in an ADS",
      "Be filed within 1 year","Have identical claims"
    ], answer:1,
    explain:"§120 requires co-pendency, at least one common inventor (or applicant), and a specific reference (in an ADS for applications filed on/after Sept 16, 2012).",
    cite:"MPEP §211"},

  {chapter:"200", topic:"Foreign Priority", highYield:true,
    q:"Under §119(a), a U.S. utility application claiming Paris Convention priority must be filed within:",
    choices:["6 months","12 months","18 months","2 years"], answer:1,
    explain:"12 months for utility, 6 months for design. Priority must be claimed and any required certified copy filed.",
    cite:"MPEP §213"},

  {chapter:"200", topic:"Priority Restoration", aia:"aia",
    q:"If a U.S. nonprovisional is filed more than 12 months after a foreign filing, priority may be restored under §119(a) if:",
    choices:[
      "Filed within 14 months and the delay was unintentional, with petition and fee",
      "Filed within 18 months","No restoration is available","Filed by an inventor's heir"
    ], answer:0,
    explain:"Under PLT-implementing 37 CFR 1.55(c), priority may be restored if the application is filed within 2 months of the 12-month deadline and the delay was unintentional, with petition and fee.",
    cite:"MPEP §213.03"},

  {chapter:"200", topic:"Provisional Benefit", aia:"aia",
    q:"A claim to a provisional under §119(e):",
    choices:[
      "Must be made within the later of 4 months from filing or 16 months from the provisional's filing date",
      "Must be made on the filing date","Can be added any time before issue",
      "Requires an oath"
    ], answer:0,
    explain:"For applications filed on/after Sept 16, 2012, §119(e) benefit claim must be in an ADS within 4 months of filing date or 16 months from provisional filing, whichever is later.",
    cite:"MPEP §211.02"},

  {chapter:"200", topic:"Inventorship",
    q:"Correction of inventorship in a pending nonprovisional application is done by:",
    choices:[
      "A request under 37 CFR 1.48 with corrected ADS and required statements",
      "Filing a continuation","Requesting reissue","Petitioning the Director only"
    ], answer:0,
    explain:"1.48 — correction in a nonprovisional uses a request, a corrected ADS identifying changes, and the processing fee. Errors are correctable without requiring proof of error in the original.",
    cite:"MPEP §602.01(c)"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 1200 — APPEAL
  // ══════════════════════════════════════════════════════════════════

  {chapter:"1200", topic:"Right to Appeal", highYield:true,
    q:"An applicant may appeal to the PTAB once any claim has been:",
    choices:["Rejected once","Twice rejected","Finally rejected only","Allowed and withdrawn"], answer:1,
    explain:"35 U.S.C. 134 — appeal lies once any claim has been twice rejected, whether or not the rejection is final.",
    cite:"MPEP §1204"},

  {chapter:"1200", topic:"Notice of Appeal", highYield:true,
    q:"A notice of appeal must be filed:",
    choices:[
      "Within 1 month of the action","Within the period for reply (typically 3 months, extendable up to 6 months)",
      "Within 2 months","Within 12 months"
    ], answer:1,
    explain:"Notice of appeal is due within the period for reply to the most recent Office action — usually 3 months, extendable under 1.136(a) up to the 6-month statutory cap.",
    cite:"MPEP §1204"},

  {chapter:"1200", topic:"Appeal Brief", highYield:true,
    q:"The appeal brief is due:",
    choices:[
      "With the notice of appeal","2 months from the notice of appeal, extendable",
      "3 months from notice of appeal","6 months, non-extendable"
    ], answer:1,
    explain:"Appeal brief due 2 months from the date of the notice of appeal, extendable under 1.136(a).",
    cite:"MPEP §1205"},

  {chapter:"1200", topic:"Pre-Appeal Brief Conference",
    q:"A pre-appeal brief request for review is filed:",
    choices:[
      "With the notice of appeal","With the appeal brief","After examiner's answer","After PTAB decision"
    ], answer:0,
    explain:"Pre-appeal brief request for review is filed concurrently with the notice of appeal — limited to 5 pages of arguments, can resolve clear errors before full briefing.",
    cite:"MPEP §1204.02"},

  {chapter:"1200", topic:"Examiner's Answer",
    q:"After the appeal brief is filed, the examiner may:",
    choices:[
      "Issue an examiner's answer, reopen prosecution with supervisor approval, or allow the application",
      "Only allow the application","Only issue the answer","Refuse to act"
    ], answer:0,
    explain:"After the brief, examiner can (a) reopen prosecution (with TC Director/SPE approval, often by issuing a new ground), (b) allow the application, or (c) issue an examiner's answer.",
    cite:"MPEP §1207"},

  {chapter:"1200", topic:"New Ground in Examiner's Answer",
    q:"If the examiner's answer designates a new ground of rejection, applicant must, within 2 months:",
    choices:[
      "File a reply brief and either (i) reopen prosecution by responding with an amendment/evidence, or (ii) maintain the appeal by addressing the new ground",
      "Only file a reply brief","Pay the issue fee","Abandon"
    ], answer:0,
    explain:"On a new ground in the answer, applicant has 2 months (non-extendable) to either request continued examination (reopen) or continue the appeal as to the new ground.",
    cite:"MPEP §1207.03"},

  {chapter:"1200", topic:"Reply Brief", highYield:true,
    q:"A reply brief responding to the examiner's answer is due:",
    choices:["1 month, extendable","2 months from the answer, generally non-extendable","6 months","Whenever applicant wishes"], answer:1,
    explain:"Reply brief due 2 months from the examiner's answer, non-extendable (except in particular cases such as new grounds).",
    cite:"MPEP §1208"},

  {chapter:"1200", topic:"PTAB Decision",
    q:"If the PTAB issues a new ground of rejection, the applicant must within 2 months:",
    choices:[
      "(1) Reopen prosecution by submitting an amendment/evidence, OR (2) request rehearing limited to the existing record",
      "Pay an additional appeal fee","File a continuation","Pay the issue fee"
    ], answer:0,
    explain:"37 CFR 41.50(b) — on a Board new ground, applicant has 2 months to reopen (with amendment/evidence) or request rehearing on the same record.",
    cite:"MPEP §1214.01"},

  {chapter:"1200", topic:"Rehearing",
    q:"A request for rehearing of a PTAB decision must be filed within:",
    choices:["1 month","2 months from the decision","6 months","30 days"], answer:1,
    explain:"Request for rehearing is due 2 months from the PTAB decision (37 CFR 41.52). Extendable for good cause.",
    cite:"MPEP §1214.03"},

  {chapter:"1200", topic:"After Board Reversal",
    q:"After a PTAB reversal of all rejections of a pending claim, examiner action returns to:",
    choices:[
      "Final allowance of the application","Either allowance or, if the examiner finds another ground, reopening prosecution with TC Director approval",
      "PTAB jurisdiction","An automatic remand"
    ], answer:1,
    explain:"Following a PTAB reversal, examiner may issue a notice of allowance or, if a new rejection is warranted, reopen prosecution with required approval.",
    cite:"MPEP §1214.04"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 1800 — PCT
  // ══════════════════════════════════════════════════════════════════

  {chapter:"1800", topic:"PCT Filing", highYield:true,
    q:"For an international filing date, the PCT application must include all of the following EXCEPT:",
    choices:[
      "Indication that it is intended as an international application",
      "Name of the applicant entitled to file","Description and at least one claim",
      "Payment of the international search fee"
    ], answer:3,
    explain:"For an international filing date (Article 11), need: indication; applicant entitled to file; description; claim(s); designation (now automatic). Fees can be paid later.",
    cite:"MPEP §1810"},

  {chapter:"1800", topic:"US National Phase", highYield:true,
    q:"U.S. national stage entry under 35 U.S.C. 371 from a PCT must be made by:",
    choices:["20 months from priority","30 months from priority","31 months from priority","36 months from priority"], answer:1,
    explain:"U.S. requires entry by 30 months from the earliest priority date. (Some offices use 31 months; not the U.S.)",
    cite:"MPEP §1893"},

  {chapter:"1800", topic:"Demand", highYield:true,
    q:"To obtain Chapter II preliminary examination (IPRP Chapter II), the Demand must be filed within:",
    choices:[
      "3 months from transmittal of the ISR/written opinion OR 22 months from priority, whichever is later",
      "12 months from filing","30 months from priority","6 months from filing"
    ], answer:0,
    explain:"PCT Rule 54bis — Demand due 3 months from ISR/WO transmittal or 22 months from priority, whichever is later.",
    cite:"MPEP §1864"},

  {chapter:"1800", topic:"Receiving Office",
    q:"A U.S. resident may file a PCT application with the USPTO as a Receiving Office:",
    choices:["Always","Only if the invention was made in the U.S.","Only with a license","Only if the language is English"], answer:0,
    explain:"U.S. residents/nationals may file with USPTO as RO. (However, certain inventions made in the U.S. require a foreign filing license before filing abroad — usually granted as part of the filing receipt.)",
    cite:"MPEP §1805"},

  {chapter:"1800", topic:"Foreign Filing License", highYield:true,
    q:"A foreign filing license is required when:",
    choices:[
      "An invention was made in the U.S. and is to be filed abroad, before any required waiting period expires",
      "Any U.S. resident files anywhere","Always","Never"
    ], answer:0,
    explain:"35 U.S.C. 184 — inventions made in the U.S. require a license before foreign filing. The 6-month period after U.S. filing may serve as automatic license absent secrecy order; license can also be expedited.",
    cite:"MPEP §140"},

  {chapter:"1800", topic:"Priority Restoration in PCT",
    q:"If a PCT application is filed more than 12 months after a priority application, restoration of priority is available by the RO if:",
    choices:[
      "Filed within 2 months of the 12-month deadline, with petition and statement that the failure was unintentional (or other RO standard)",
      "Within 6 months","Never","Only by the applicant in person"
    ], answer:0,
    explain:"PCT Rule 26bis.3 — restoration available within 2 months of the 12-month deadline. USPTO/RO applies the 'unintentional' standard; some offices apply 'due care.'",
    cite:"MPEP §1828.01"},

  {chapter:"1800", topic:"Article 19 Amendments",
    q:"Under PCT Article 19, the applicant may amend the claims:",
    choices:[
      "Once, with the IB, within 2 months from transmittal of the ISR or 16 months from priority, whichever expires later (and not after national phase begins)",
      "Anytime","Only with examiner consent","Only at national phase"
    ], answer:0,
    explain:"Article 19 amendments — to claims only, filed with the IB; deadline 2 months from ISR transmittal or 16 months from priority, whichever is later.",
    cite:"MPEP §1853"},

  {chapter:"1800", topic:"Article 34 Amendments",
    q:"Article 34 amendments may amend:",
    choices:[
      "Claims only","Description, claims, and drawings, filed during Chapter II examination",
      "Only the abstract","Nothing"
    ], answer:1,
    explain:"During Chapter II (after a Demand), the applicant may amend the description, claims, and drawings under Article 34.",
    cite:"MPEP §1871"},

  {chapter:"1800", topic:"Search Fee in National Stage",
    q:"When entering U.S. national stage, the search fee may be reduced if:",
    choices:[
      "The USPTO was the ISA for the international application or the applicant supplies the ISR from another ISA the USPTO accepts",
      "The applicant pays in advance","The applicant is small entity","The applicant has filed a CIP"
    ], answer:0,
    explain:"Search fee reductions apply when USPTO was the ISA, or when an ISR was prepared by another ISA the USPTO is willing to credit.",
    cite:"MPEP §1893.01(c)"},

  {chapter:"1800", topic:"Bypass Continuation",
    q:"A U.S. continuation filed under §111 claiming benefit of a PCT (rather than national stage entry under §371) is called:",
    choices:[
      "A bypass continuation","A divisional","A national stage application","A reissue"
    ], answer:0,
    explain:"A 'bypass' application is a §111 nonprovisional that claims §365(c) benefit of a PCT — useful for various procedural reasons (e.g., to file claims as continuation instead of national stage).",
    cite:"MPEP §1895"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 800 — RESTRICTION
  // ══════════════════════════════════════════════════════════════════

  {chapter:"800", topic:"Restriction Standard", highYield:true,
    q:"Restriction is proper when two or more inventions are:",
    choices:[
      "Independent and distinct, and a serious burden on the examiner exists",
      "Both broad","Identical","Unclaimed"
    ], answer:0,
    explain:"35 U.S.C. 121 — restriction is proper when claims are to independent and distinct inventions; in U.S. practice the examiner must also show a serious burden.",
    cite:"MPEP §803"},

  {chapter:"800", topic:"Election", highYield:true,
    q:"After a restriction requirement, applicant must:",
    choices:[
      "Elect one invention to prosecute, with or without traverse",
      "Refile as a divisional","Pay an additional fee for each invention","Appeal"
    ], answer:0,
    explain:"Election is mandatory to obtain examination. With traverse preserves later petition rights; non-elected claims may be pursued in divisionals (with §121 safe harbor).",
    cite:"MPEP §818"},

  {chapter:"800", topic:"Election by Original Presentation",
    q:"When a claim that would have been subject to restriction is added later, the examiner may require:",
    choices:[
      "Election of the new claim by original presentation",
      "An RCE","Petition","Reissue"
    ], answer:0,
    explain:"Election by original presentation — a later-added claim to a non-elected/different invention can be required to be deleted or treated under new election.",
    cite:"MPEP §821.03"},

  {chapter:"800", topic:"Species Election",
    q:"When a generic claim is allowable, all claims to non-elected species, drawn to the elected genus, are:",
    choices:[
      "Rejoined for examination",
      "Cancelled","Held in abeyance","Subject to restriction"
    ], answer:0,
    explain:"Rejoinder — when a linking generic claim is allowable, claims to non-elected species/inventions that are linked may be rejoined.",
    cite:"MPEP §821.04"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 1400 — CORRECTION (Reissue, Certificate of Correction, Disclaimer)
  // ══════════════════════════════════════════════════════════════════

  {chapter:"1400", topic:"Reissue Basis", highYield:true, aia:"aia",
    q:"A reissue application under 35 U.S.C. 251 requires:",
    choices:[
      "That the original patent is wholly or partly inoperative or invalid through error, without deceptive intention",
      "That the patent has expired","That the inventor has died","That the assignee consents"
    ], answer:0,
    explain:"Reissue requires error (now without 'deceptive intent' language per AIA) that renders the patent wholly or partially inoperative or invalid.",
    cite:"MPEP §1402"},

  {chapter:"1400", topic:"Broadening Reissue", highYield:true,
    q:"A broadening reissue must be applied for within:",
    choices:["1 year of issuance","2 years of issuance","5 years","Anytime"], answer:1,
    explain:"35 U.S.C. 251(d) — broadening reissue must be applied for within 2 years from the original patent's grant date. Narrowing reissue has no such deadline.",
    cite:"MPEP §1412.03"},

  {chapter:"1400", topic:"Reissue Oath",
    q:"A reissue oath/declaration must identify:",
    choices:[
      "At least one error being relied upon as the basis for reissue",
      "All errors","The original inventor's date of birth","Marketing data"
    ], answer:0,
    explain:"The reissue oath/declaration must identify at least one error being corrected; complete listing not required.",
    cite:"MPEP §1414"},

  {chapter:"1400", topic:"Certificate of Correction",
    q:"A Certificate of Correction is used for:",
    choices:[
      "Office mistakes or minor applicant errors that do not require reexamination",
      "Broadening claims","Substantive errors","Adding new matter"
    ], answer:0,
    explain:"Certificate of Correction (35 U.S.C. 254-255) addresses Office mistakes (free) or minor applicant errors (with fee) that don't require new examination.",
    cite:"MPEP §1480"},

  {chapter:"1400", topic:"Disclaimer",
    q:"A statutory disclaimer under 35 U.S.C. 253 may be used to:",
    choices:[
      "Disclaim one or more claims of a patent",
      "Withdraw a published application","Add new claims","Cancel a notice of allowance"
    ], answer:0,
    explain:"Statutory disclaimer disclaims one or more claims; terminal disclaimer disclaims the terminal part of the patent term (used to overcome ODP).",
    cite:"MPEP §1490"},

  {chapter:"1400", topic:"Reissue Recapture",
    q:"The recapture rule bars reissue from:",
    choices:[
      "Recovering subject matter that was surrendered during prosecution to obtain allowance",
      "Adding any new claims","Narrowing claims","Adding inventors"
    ], answer:0,
    explain:"Recapture: a patentee cannot use reissue to broaden claims to recapture subject matter intentionally surrendered (typically by amendment or argument) during prosecution of the original patent.",
    cite:"MPEP §1412.02"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 2700 — PATENT TERM & PTA
  // ══════════════════════════════════════════════════════════════════

  {chapter:"2700", topic:"Patent Term",
    q:"A utility patent term is generally:",
    choices:[
      "20 years from earliest U.S. non-provisional filing or §365(c) PCT filing",
      "17 years from issue","14 years from filing","20 years from issue"
    ], answer:0,
    explain:"20-year term measured from earliest effective non-provisional U.S. filing date (or §363/365(c) PCT). Provisionals do NOT count for term calculation.",
    cite:"MPEP §2701"},

  {chapter:"2700", topic:"PTA — Patent Term Adjustment", highYield:true,
    q:"Patent Term Adjustment compensates for:",
    choices:[
      "USPTO delays beyond statutory deadlines (A delay), 3-year pendency (B delay), or interference/appeals (C delay), minus applicant delay",
      "Maintenance fee delays","Term reduction due to terminal disclaimer","Foreign delays"
    ], answer:0,
    explain:"35 U.S.C. 154(b) — A (14-month first action, 4-month response, etc.), B (3-year pendency), C (interferences, appeals, secrecy). Applicant delay reduces PTA.",
    cite:"MPEP §2731"},

  {chapter:"2700", topic:"PTE — Patent Term Extension",
    q:"Patent Term Extension under 35 U.S.C. 156 applies to:",
    choices:[
      "Products subject to a regulatory review period (e.g., drugs, medical devices), up to 5 years extension",
      "Software patents","All utility patents","Design patents only"
    ], answer:0,
    explain:"PTE under §156 — for products that went through regulatory delay (FDA approval, etc.). Up to 5 years extension, and the total term post-approval can't exceed 14 years.",
    cite:"MPEP §2750"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 1500 — DESIGN PATENTS
  // ══════════════════════════════════════════════════════════════════

  {chapter:"1500", topic:"Design Term",
    q:"The term of a design patent issued from an application filed on/after May 13, 2015 is:",
    choices:["14 years from issue","15 years from issue","20 years from filing","17 years from issue"], answer:1,
    explain:"Hague Agreement implementation — 15 years from issuance for applications filed on/after May 13, 2015. Earlier filings: 14 years.",
    cite:"MPEP §1505"},

  {chapter:"1500", topic:"Design Foreign Priority",
    q:"Paris Convention priority for a design is:",
    choices:["3 months","6 months","12 months","18 months"], answer:1,
    explain:"6 months for design (12 months for utility).",
    cite:"MPEP §1504.10"},

  {chapter:"1500", topic:"Design Drawings",
    q:"Design drawings must show:",
    choices:["A working example","The ornamental appearance of the article — all views necessary","Manufacturing tolerances","Color always"], answer:1,
    explain:"Drawings define a design patent. All views necessary to show the appearance, with proper surface shading and clarity.",
    cite:"MPEP §1503.02"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 1600 — PLANT PATENTS
  // ══════════════════════════════════════════════════════════════════

  {chapter:"1600", topic:"Plant Patent Scope",
    q:"A plant patent under 35 U.S.C. 161 protects:",
    choices:[
      "An asexually reproduced, distinct and new variety, including cultivated sports and hybrids, other than tuber-propagated or wild plants",
      "Any plant","GMOs only","Seeds only"
    ], answer:0,
    explain:"§161 — asexually reproduced new and distinct plant variety (excluding tuber-propagated and uncultivated wild plants).",
    cite:"MPEP §1601"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 2000 — DUTY OF DISCLOSURE
  // ══════════════════════════════════════════════════════════════════

  {chapter:"2000", topic:"Duty of Disclosure", highYield:true,
    q:"The duty of disclosure under 37 CFR 1.56 applies to:",
    choices:[
      "Each inventor, each attorney/agent, and every other person substantively involved in the preparation or prosecution of the application",
      "Only the inventor","Only the attorney","The assignee only"
    ], answer:0,
    explain:"1.56(c) — duty extends to inventors, prosecuting attorneys/agents, and others substantively involved. Continues throughout pendency.",
    cite:"MPEP §2001"},

  {chapter:"2000", topic:"Material Information",
    q:"Information is material under 1.56 when:",
    choices:[
      "It is not cumulative and it establishes a prima facie case of unpatentability, or refutes/inconsistent with a position taken by applicant",
      "Any time it relates to the field","If foreign","If commercial"
    ], answer:0,
    explain:"1.56(b) — materiality: information that is not cumulative and either alone or in combination establishes a prima facie case of unpatentability, or is inconsistent with applicant's position.",
    cite:"MPEP §2001.05"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 2200 — REEXAMINATION
  // ══════════════════════════════════════════════════════════════════

  {chapter:"2200", topic:"Ex Parte Reexam", highYield:true,
    q:"Ex parte reexamination may be requested by:",
    choices:[
      "Any person, including the patent owner or a third party, anytime during patent enforceability",
      "Only the patentee","Only third parties","Only the USPTO"
    ], answer:0,
    explain:"35 U.S.C. 302 — anyone may request ex parte reexam at any time during patent enforceability, based on patents or printed publications raising a substantial new question of patentability (SNQ).",
    cite:"MPEP §2209"},

  {chapter:"2200", topic:"SNQ",
    q:"The threshold for ordering ex parte reexamination is:",
    choices:[
      "A reasonable likelihood that requester would prevail","A substantial new question of patentability",
      "Preponderance of the evidence","Clear and convincing evidence"
    ], answer:1,
    explain:"SNQ — 'substantial new question of patentability' is the threshold for ex parte reexam. (RLP — reasonable likelihood — is the IPR/PGR threshold at the PTAB.)",
    cite:"MPEP §2242"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 2500 — MAINTENANCE FEES
  // ══════════════════════════════════════════════════════════════════

  {chapter:"2500", topic:"Maintenance Fees", highYield:true,
    q:"Maintenance fees for a utility patent are due at:",
    choices:[
      "3.5, 7.5, and 11.5 years after issue, with 6-month grace period (with surcharge)",
      "5 and 10 years","Anytime","Once at issue"
    ], answer:0,
    explain:"3.5, 7.5, and 11.5 years after grant. Late payment allowed with surcharge during 6-month grace. Patent lapses if all required fees not paid timely.",
    cite:"MPEP §2506"},

  {chapter:"2500", topic:"No Maintenance Fees",
    q:"Maintenance fees are NOT required for:",
    choices:[
      "Utility patents","Design patents","Plant patents",
      "Both design and plant patents"
    ], answer:3,
    explain:"Design and plant patents do not require maintenance fees. Only utility patents do.",
    cite:"MPEP §2504"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 100 — SECRECY & FOREIGN FILING
  // ══════════════════════════════════════════════════════════════════

  {chapter:"100", topic:"Secrecy Order",
    q:"A secrecy order issued under 35 U.S.C. 181:",
    choices:[
      "Withholds the grant of a patent and restricts disclosure when publication might be detrimental to national security",
      "Issues at applicant's request only","Lasts 6 months max","Has no effect on prosecution"
    ], answer:0,
    explain:"Secrecy orders prohibit disclosure and withhold grant. Periodically reviewed; affects foreign filing and prosecution.",
    cite:"MPEP §120"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 300 — OWNERSHIP & ASSIGNMENT
  // ══════════════════════════════════════════════════════════════════

  {chapter:"300", topic:"Assignment Recordation",
    q:"To take effect against a subsequent purchaser, an assignment must be:",
    choices:[
      "Recorded at the USPTO within 3 months of execution or before the subsequent purchase",
      "Notarized","Filed with the IRS","Translated"
    ], answer:0,
    explain:"35 U.S.C. 261 — assignment is void against a subsequent BFP for value without notice, unless recorded within 3 months of execution or before the subsequent purchase.",
    cite:"MPEP §302"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 400 — REPRESENTATIVE
  // ══════════════════════════════════════════════════════════════════

  {chapter:"400", topic:"Practitioner",
    q:"A registered patent practitioner may:",
    choices:[
      "Represent applicants before the USPTO in patent matters",
      "Practice in state courts","Sign sworn statements for clients","Give legal opinions on contracts"
    ], answer:0,
    explain:"Registration grants the right to practice before the USPTO in patent matters. Patent agents cannot give general legal advice; patent attorneys may.",
    cite:"MPEP §402"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 500 — RECEIPT & HANDLING OF PAPERS
  // ══════════════════════════════════════════════════════════════════

  {chapter:"500", topic:"Certificate of Mailing",
    q:"A Certificate of Mailing under 37 CFR 1.8 gives an applicant filing date as:",
    choices:[
      "The date of deposit in U.S. mail as First-Class with a proper certificate, except for certain documents not eligible",
      "Date of receipt by USPTO","Always issue date","Hand-delivered date only"
    ], answer:0,
    explain:"1.8 lets a paper bear the deposit date. Not available for certain documents: new patent applications, national stage entries, papers requiring deposit by 'Priority Mail Express,' etc.",
    cite:"MPEP §512"},

  {chapter:"500", topic:"Priority Mail Express",
    q:"Priority Mail Express (formerly Express Mail) under 37 CFR 1.10 gives:",
    choices:[
      "Filing date as the date of deposit, including for new applications",
      "Filing date as USPTO receipt only","Filing date as next business day","No filing-date benefit"
    ], answer:0,
    explain:"1.10 'Priority Mail Express' — date of deposit becomes the filing/receipt date, available for new applications and other items not covered by 1.8.",
    cite:"MPEP §513"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 900 — SEARCH
  // ══════════════════════════════════════════════════════════════════

  {chapter:"900", topic:"Classification",
    q:"USPTO patent classification currently uses:",
    choices:["U.S. Patent Classification only","Cooperative Patent Classification (CPC)","IPC only","No classification system"], answer:1,
    explain:"CPC, jointly developed with EPO, is the primary classification system used by USPTO.",
    cite:"MPEP §905"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 1000 — DECISIONS BY OFFICIALS
  // ══════════════════════════════════════════════════════════════════

  {chapter:"1000", topic:"Petitions",
    q:"Petitions to the Director under 37 CFR 1.181 generally must be filed within:",
    choices:[
      "2 months from the action complained of",
      "1 year","30 days","No time limit"
    ], answer:0,
    explain:"1.181(f) — petitions are generally due within 2 months of the mailing date of the action or notice complained of, unless statute or rule provides otherwise.",
    cite:"MPEP §1002"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 1100 — PUBLICATION
  // ══════════════════════════════════════════════════════════════════

  {chapter:"1100", topic:"Pre-Grant Publication",
    q:"A U.S. nonprovisional utility application is generally published:",
    choices:[
      "Promptly after 18 months from earliest priority/filing date",
      "Immediately upon filing","At allowance","Never"
    ], answer:0,
    explain:"35 U.S.C. 122(b) — publication 18 months from earliest priority/filing date, unless a nonpublication request is filed (and no foreign filing).",
    cite:"MPEP §1120"},

  {chapter:"1100", topic:"Nonpublication Request",
    q:"A nonpublication request must be filed:",
    choices:[
      "At the time of filing, with a certification that the invention has not and will not be the subject of a foreign filing requiring publication",
      "After publication","With the issue fee","Never permitted"
    ], answer:0,
    explain:"122(b)(2)(B) — nonpublication request filed at filing, with certification. If foreign filing later occurs, applicant must notify USPTO within 45 days or risk abandonment.",
    cite:"MPEP §1122"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 1300 — ALLOWANCE & ISSUE
  // ══════════════════════════════════════════════════════════════════

  {chapter:"1300", topic:"Issue Fee", highYield:true,
    q:"The issue fee period after the Notice of Allowance is:",
    choices:["3 months, non-extendable","3 months, extendable","6 months","1 year"], answer:0,
    explain:"35 U.S.C. 151 — 3 months from NOA mailing date, non-extendable. Failure to pay results in abandonment.",
    cite:"MPEP §1306"},

  {chapter:"1300", topic:"Withdrawal from Issue",
    q:"After issue fee payment but before issue, withdrawal from issue is available:",
    choices:[
      "On petition for specified reasons (e.g., new prior art, unpatentability, mistake in inventorship, or to permit RCE)",
      "Automatically","Never","By examiner only"
    ], answer:0,
    explain:"37 CFR 1.313(c) — withdrawal from issue (after issue fee paid) requires a petition with one of the listed reasons.",
    cite:"MPEP §1308"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 1900 — PROTEST
  // ══════════════════════════════════════════════════════════════════

  {chapter:"1900", topic:"Protest",
    q:"A protest under 37 CFR 1.291 by a third party:",
    choices:[
      "May be filed before publication or before the notice of allowance (whichever is earlier), with copies of references and an explanation",
      "Can be filed any time","Only after publication","Cannot be anonymous"
    ], answer:0,
    explain:"1.291 — protest must be filed before publication or before the NOA (whichever is earlier), including identification, copies, and concise explanation.",
    cite:"MPEP §1901"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 2300 — INTERFERENCE / DERIVATION
  // ══════════════════════════════════════════════════════════════════

  {chapter:"2300", topic:"Derivation", aia:"aia",
    q:"AIA derivation proceedings under 35 U.S.C. 135:",
    choices:[
      "Replace interferences for applications subject to AIA §102, must be filed within 1 year of the earlier publication or issuance of the derived claim",
      "Continue interferences","Are filed in district court only","Are unavailable"
    ], answer:0,
    explain:"AIA derivation proceedings replaced interference for AIA-era applications. 1-year window from publication of earlier-filed claim deriving the invention. Heard by PTAB.",
    cite:"MPEP §2310"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 2400 — BIOTECH
  // ══════════════════════════════════════════════════════════════════

  {chapter:"2400", topic:"Biological Deposit",
    q:"A biological deposit is required to support an enablement requirement when:",
    choices:[
      "The invention cannot be adequately described in writing or made/obtained by skilled artisans without undue experimentation",
      "Always for biotech","Only for plants","Never"
    ], answer:0,
    explain:"Biological deposits are required to satisfy enablement when written disclosure alone is insufficient to enable a skilled person to make/use the invention.",
    cite:"MPEP §2402"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 2800 — SUPPLEMENTAL EXAMINATION
  // ══════════════════════════════════════════════════════════════════

  {chapter:"2800", topic:"Supplemental Examination", aia:"aia",
    q:"Supplemental examination under 35 U.S.C. 257:",
    choices:[
      "Is available only to the patent owner to consider, reconsider, or correct information believed relevant to the patent; if a SNQ is found, ex parte reexam is ordered",
      "Is available to any third party","Cannot lead to reexam","Is unlimited in scope"
    ], answer:0,
    explain:"Supplemental exam (post-AIA) — patentee-initiated, allows information to be considered. If SNQ found, ex parte reexam is ordered. Can immunize against inequitable conduct.",
    cite:"MPEP §2801"},

  // ══════════════════════════════════════════════════════════════════
  //  CHAPTER 2900 — INTERNATIONAL DESIGNS
  // ══════════════════════════════════════════════════════════════════

  {chapter:"2900", topic:"Hague", aia:"aia",
    q:"An international design application under the Hague Agreement, filed with the USPTO as an office of indirect filing:",
    choices:[
      "Is forwarded to WIPO and may designate multiple Contracting Parties, including the U.S.",
      "Is examined only in the U.S.","Has 14-year term","Requires no fee"
    ], answer:0,
    explain:"Hague international design applications may be filed with the USPTO and designate multiple Contracting Parties; the USPTO examines U.S. designations.",
    cite:"MPEP §2902"},

];

window.MPEP_CHAPTERS = {
  "100":"Secrecy, Access, National Security & Foreign Filing",
  "200":"Types, Cross-Noting & Status of Application",
  "300":"Ownership and Assignment",
  "400":"Representative of Applicant",
  "500":"Receipt and Handling of Mail and Papers",
  "600":"Parts, Form, and Content of Application",
  "700":"Examination of Applications",
  "800":"Restriction in Applications",
  "900":"Prior Art, Classification and Search",
  "1000":"Matters Decided by Various USPTO Officials",
  "1100":"Statutory Invention Registration & Pre-Grant Publication",
  "1200":"Appeal",
  "1300":"Allowance and Issue",
  "1400":"Correction of Patents",
  "1500":"Design Patents",
  "1600":"Plant Patents",
  "1700":"Miscellaneous",
  "1800":"Patent Cooperation Treaty (PCT)",
  "1900":"Protest",
  "2000":"Duty of Disclosure",
  "2100":"Patentability",
  "2200":"Citation of Prior Art and Ex Parte Reexamination",
  "2300":"Interference & Derivation Proceedings",
  "2400":"Biotechnology",
  "2500":"Maintenance Fees",
  "2600":"Optional Inter Partes Reexamination",
  "2700":"Patent Terms and Extensions",
  "2800":"Supplemental Examination",
  "2900":"International Design Applications",
};

// Chapters that account for ~75% of the exam — used to weight Random Mix and power "High-Yield" mode.
window.MPEP_HIGH_YIELD = ["2100","700","600","1200","1800"];

// ─────────────────────────── DEADLINE & NUMBER FLASHCARDS ───────────────────────────
// Pure recall — the patent bar loves to test whether a date/period/threshold is X or Y.
// Front (q) → flip → Back (a) with the MPEP cite. Tagged by chapter for drilling per topic.
window.MPEP_DEADLINES = [
  // Reply / Office Action timing
  {q:"Statutory maximum period for reply to an Office Action", a:"6 months (35 U.S.C. 133). NEVER more, regardless of extensions.", cite:"MPEP §710.02", chapter:"700"},
  {q:"Typical Shortened Statutory Period (SSP) for non-final OA", a:"3 months, extendable in 1-month increments under 1.136(a) up to the 6-month cap.", cite:"MPEP §710.02", chapter:"700"},
  {q:"SSP for an Ex Parte Quayle action", a:"2 months, extendable under 1.136(a).", cite:"MPEP §714.14", chapter:"700"},
  {q:"Issue fee period after Notice of Allowance", a:"3 months — NON-EXTENDABLE. Miss it = abandonment.", cite:"MPEP §1306", chapter:"1300"},

  // Continuations / Benefit / Priority
  {q:"Provisional application auto-abandons", a:"12 months after filing. Cannot be revived to extend.", cite:"MPEP §201.04", chapter:"200"},
  {q:"Paris Convention priority — utility", a:"12 months from earliest foreign filing.", cite:"MPEP §213", chapter:"200"},
  {q:"Paris Convention priority — design", a:"6 months from earliest foreign filing.", cite:"MPEP §1504.10", chapter:"1500"},
  {q:"Priority restoration deadline after missing 12-month Paris window", a:"Within 2 months of the 12-month deadline, with petition + fee + 'unintentional' statement.", cite:"MPEP §213.03 / 37 CFR 1.55(c)", chapter:"200"},
  {q:"§119(e) provisional benefit claim — deadline to add", a:"4 months from actual filing date OR 16 months from provisional filing, whichever is LATER (for post-9/16/2012 apps).", cite:"MPEP §211.02", chapter:"200"},

  // PCT
  {q:"U.S. national stage entry deadline (PCT)", a:"30 months from earliest priority date. NOT 31.", cite:"MPEP §1893", chapter:"1800"},
  {q:"PCT Demand (Chapter II) deadline", a:"3 months from ISR/Written Opinion transmittal OR 22 months from priority, whichever is LATER.", cite:"MPEP §1864", chapter:"1800"},
  {q:"PCT Article 19 amendment deadline", a:"2 months from ISR transmittal OR 16 months from priority, whichever is LATER. Claims ONLY.", cite:"MPEP §1853", chapter:"1800"},
  {q:"PCT priority restoration deadline", a:"Within 2 months of the 12-month deadline. USPTO/RO uses 'unintentional' standard.", cite:"MPEP §1828.01", chapter:"1800"},
  {q:"Foreign filing license — automatic timing", a:"6 months after U.S. filing (absent secrecy order); license is automatic if no secrecy order issued.", cite:"MPEP §140", chapter:"100"},

  // Appeal
  {q:"Notice of Appeal deadline", a:"Period for reply to most recent OA — typically 3 months, extendable up to 6.", cite:"MPEP §1204", chapter:"1200"},
  {q:"Appeal Brief deadline", a:"2 months from Notice of Appeal, extendable under 1.136(a).", cite:"MPEP §1205", chapter:"1200"},
  {q:"Reply Brief deadline (after Examiner's Answer)", a:"2 months from Examiner's Answer — generally NON-EXTENDABLE.", cite:"MPEP §1208", chapter:"1200"},
  {q:"Deadline to respond to new ground of rejection in Examiner's Answer", a:"2 months — NON-EXTENDABLE. Either reopen prosecution or maintain appeal as to the new ground.", cite:"MPEP §1207.03", chapter:"1200"},
  {q:"Deadline after PTAB issues a new ground of rejection (41.50(b))", a:"2 months — reopen prosecution with amendment/evidence OR request rehearing on the existing record.", cite:"MPEP §1214.01", chapter:"1200"},
  {q:"Request for rehearing of PTAB decision", a:"2 months from PTAB decision (37 CFR 41.52).", cite:"MPEP §1214.03", chapter:"1200"},

  // Petitions / Reissue / Correction
  {q:"Broadening reissue deadline", a:"Within 2 YEARS of the original patent's grant date. Narrowing reissue has no deadline.", cite:"MPEP §1412.03", chapter:"1400"},
  {q:"Petition under 37 CFR 1.181 deadline", a:"2 months from the action complained of (default).", cite:"MPEP §1002", chapter:"1000"},
  {q:"Petition to revive (1.137) standard", a:"'Unintentional' delay + petition + fee + required reply (post-PLT, 2013).", cite:"MPEP §711.03(c)", chapter:"700"},
  {q:"Assignment recordation — to take priority over BFP", a:"Within 3 months of execution OR before subsequent purchase.", cite:"MPEP §302", chapter:"300"},

  // Maintenance / Term
  {q:"Utility patent term", a:"20 years from earliest U.S. nonprovisional filing (or §365(c) PCT). Provisionals do NOT count.", cite:"MPEP §2701", chapter:"2700"},
  {q:"Design patent term (apps filed ≥ May 13, 2015)", a:"15 years from issue.", cite:"MPEP §1505", chapter:"1500"},
  {q:"Design patent term (apps filed before May 13, 2015)", a:"14 years from issue.", cite:"MPEP §1505", chapter:"1500"},
  {q:"Maintenance fee due dates (utility)", a:"3.5, 7.5, and 11.5 years after issue. 6-month grace period with surcharge.", cite:"MPEP §2506", chapter:"2500"},
  {q:"Design and plant patents — maintenance fees?", a:"NONE. Only utility patents pay maintenance fees.", cite:"MPEP §2504", chapter:"2500"},
  {q:"PTE maximum (35 U.S.C. 156)", a:"Up to 5 years extension. Total post-approval term ≤ 14 years.", cite:"MPEP §2750", chapter:"2700"},

  // IDS
  {q:"IDS — free filing window (no fee, no statement)", a:"Within 3 months of U.S. filing date OR before first OA on the merits, whichever is LATER.", cite:"MPEP §609.04(b)", chapter:"700"},
  {q:"IDS after Notice of Allowance", a:"Either 1.97(e) statement + 1.17(p) fee, OR withdraw from issue (typically via RCE).", cite:"MPEP §609.04(b)", chapter:"700"},

  // Restriction
  {q:"Petition to challenge restriction (37 CFR 1.144)", a:"Within 2 months of the action making restriction final. Must have elected with traverse.", cite:"MPEP §818.03", chapter:"800"},

  // Publication
  {q:"Pre-grant publication timing", a:"Promptly after 18 months from earliest priority/filing.", cite:"MPEP §1120", chapter:"1100"},
  {q:"Foreign-filing notice after rescinded non-publication", a:"45 days from foreign filing — else application is abandoned.", cite:"MPEP §1122", chapter:"1100"},

  // Reexam / Supplemental
  {q:"Threshold for ordering ex parte reexamination", a:"Substantial New Question of patentability (SNQ). Based ONLY on patents or printed publications.", cite:"MPEP §2242", chapter:"2200"},
  {q:"Threshold for IPR/PGR (PTAB)", a:"Reasonable Likelihood of Prevailing (RLP).", cite:"AIA §6", chapter:"2200"},

  // Entity status
  {q:"Small entity — employee threshold", a:"Fewer than 500 employees, no rights conveyed to non-small entity.", cite:"MPEP §509.02", chapter:"600"},
  {q:"Micro entity — application history threshold", a:"≤4 previously filed applications (provisionals, foreign, and PCT-not-entering-US excluded).", cite:"MPEP §509.04", chapter:"600"},
  {q:"Micro entity — income threshold", a:"Gross income ≤ 3× median household income. (Alternative: university employment basis.)", cite:"MPEP §509.04", chapter:"600"},

  // Derivation / AIA dates
  {q:"AIA effective date (FITF system)", a:"March 16, 2013. Apps with effective filing date on/after this are AIA; earlier are pre-AIA.", cite:"AIA §3", chapter:"2100"},
  {q:"Derivation proceeding filing window", a:"Within 1 year of the earlier publication of the derived claim.", cite:"MPEP §2310", chapter:"2300"},

  // Number of claim limits
  {q:"Standard claim fee threshold (over X claims)", a:"More than 3 independent or more than 20 total claims triggers excess claim fees.", cite:"37 CFR 1.16", chapter:"600"},
  {q:"Multiple dependent claim — fee treatment", a:"Each claim referenced by an MDC counts separately for fee purposes.", cite:"MPEP §608.01(n)", chapter:"600"},
];

// ─────────────────────────── MPEP LOOKUP DRILL ───────────────────────────
// Train the open-book lookup skill. Present a topic → start stopwatch → user finds the
// rule in the chapter PDF → click "Found it" → reveal the expected cite for confirmation.
window.MPEP_LOOKUP = [
  {topic:"After-final amendments that won't be entered as a matter of right", cite:"MPEP §714.13", chapter:"700"},
  {topic:"Request for Continued Examination (RCE) requirements", cite:"MPEP §706.07(h)", chapter:"700"},
  {topic:"Reply periods — statutory maximum vs. SSP vs. extensions", cite:"MPEP §710.02", chapter:"700"},
  {topic:"Petition to revive an abandoned application — current 'unintentional' standard", cite:"MPEP §711.03(c)", chapter:"700"},
  {topic:"Bona fide attempt to respond — examiner gives extra time", cite:"MPEP §714.03", chapter:"700"},
  {topic:"Information Disclosure Statement timing — free window", cite:"MPEP §609.04(b)", chapter:"700"},
  {topic:"Interview practice — when is an interview a matter of right?", cite:"MPEP §713.09", chapter:"700"},
  {topic:"Examiner's amendment — when authorized", cite:"MPEP §1302.04", chapter:"700"},
  {topic:"First-action final rejection in a continuation", cite:"MPEP §706.07(b)", chapter:"700"},
  {topic:"Suspension of action — applicant request", cite:"MPEP §709", chapter:"700"},

  {topic:"Two-prong AIA §101 eligibility framework (Mayo/Alice)", cite:"MPEP §2106", chapter:"2100"},
  {topic:"Three categories of AIA §102(a)(1) prior art", cite:"MPEP §2152.02", chapter:"2100"},
  {topic:"§102(b)(1) grace period exceptions for inventor's own disclosure", cite:"MPEP §2153", chapter:"2100"},
  {topic:"§102(a)(2) reference effective date — earliest priority", cite:"MPEP §2154", chapter:"2100"},
  {topic:"Graham factors for obviousness", cite:"MPEP §2141", chapter:"2100"},
  {topic:"Seven KSR/MPEP rationales for an obviousness rejection", cite:"MPEP §2143", chapter:"2100"},
  {topic:"Teaching away and secondary considerations", cite:"MPEP §2145", chapter:"2100"},
  {topic:"Analogous art — two-prong test", cite:"MPEP §2141.01(a)", chapter:"2100"},
  {topic:"Written description requirement — possession test", cite:"MPEP §2163", chapter:"2100"},
  {topic:"Wands factors for undue experimentation / enablement", cite:"MPEP §2164.01(a)", chapter:"2100"},
  {topic:"Definiteness under §112(b) — Nautilus reasonable certainty", cite:"MPEP §2173.02", chapter:"2100"},
  {topic:"Means-plus-function under §112(f) — invocation rules", cite:"MPEP §2181", chapter:"2100"},
  {topic:"Broadest reasonable interpretation in examination", cite:"MPEP §2111", chapter:"2100"},
  {topic:"Transitional phrases — comprising / consisting / consisting essentially of", cite:"MPEP §2111.03", chapter:"2100"},
  {topic:"Markush claim format", cite:"MPEP §2117", chapter:"2100"},
  {topic:"Product-by-process — patentability based on product", cite:"MPEP §2113", chapter:"2100"},
  {topic:"Double patenting — statutory vs. obviousness-type", cite:"MPEP §804", chapter:"2100"},
  {topic:"Inherency — what is necessarily present", cite:"MPEP §2112", chapter:"2100"},
  {topic:"Rule 1.132 declaration — types of evidence", cite:"MPEP §716", chapter:"2100"},
  {topic:"Unexpected results — comparing to closest prior art", cite:"MPEP §716.02", chapter:"2100"},

  {topic:"Filing date requirements — nonprovisional (PLT changes)", cite:"MPEP §601.01(a)", chapter:"600"},
  {topic:"Filing date requirements — provisional", cite:"MPEP §601.01(b)", chapter:"600"},
  {topic:"Drawings — when required (§113)", cite:"MPEP §608.02", chapter:"600"},
  {topic:"Color drawings — petition requirements", cite:"MPEP §608.02(VII)", chapter:"600"},
  {topic:"Multiple dependent claim rules and fee impact", cite:"MPEP §608.01(n)", chapter:"600"},
  {topic:"Inventor oath/declaration — AIA postponement", cite:"MPEP §602", chapter:"600"},
  {topic:"Substitute statement under 1.64 — when permitted", cite:"MPEP §604", chapter:"600"},
  {topic:"Application Data Sheet — content and control", cite:"MPEP §601.05", chapter:"600"},
  {topic:"Incorporation by reference — essential vs. non-essential", cite:"MPEP §608.01(p)", chapter:"600"},
  {topic:"Small entity status qualification", cite:"MPEP §509.02", chapter:"600"},
  {topic:"Micro entity status qualification", cite:"MPEP §509.04", chapter:"600"},

  {topic:"Notice of Appeal — period to file", cite:"MPEP §1204", chapter:"1200"},
  {topic:"Pre-Appeal Brief Conference request", cite:"MPEP §1204.02", chapter:"1200"},
  {topic:"Appeal brief deadline", cite:"MPEP §1205", chapter:"1200"},
  {topic:"Examiner's answer — options after appeal brief", cite:"MPEP §1207", chapter:"1200"},
  {topic:"New ground of rejection in Examiner's Answer", cite:"MPEP §1207.03", chapter:"1200"},
  {topic:"Reply brief timing", cite:"MPEP §1208", chapter:"1200"},
  {topic:"PTAB new ground of rejection under 41.50(b)", cite:"MPEP §1214.01", chapter:"1200"},
  {topic:"Request for rehearing of PTAB decision", cite:"MPEP §1214.03", chapter:"1200"},

  {topic:"PCT international filing date requirements (Article 11)", cite:"MPEP §1810", chapter:"1800"},
  {topic:"PCT Article 19 amendments — claims only", cite:"MPEP §1853", chapter:"1800"},
  {topic:"PCT Demand for Chapter II — deadline", cite:"MPEP §1864", chapter:"1800"},
  {topic:"PCT Article 34 amendments — full disclosure", cite:"MPEP §1871", chapter:"1800"},
  {topic:"U.S. national stage entry under §371", cite:"MPEP §1893", chapter:"1800"},
  {topic:"Bypass continuation under §111(a) from a PCT", cite:"MPEP §1895", chapter:"1800"},
  {topic:"Foreign filing license — when required (§184)", cite:"MPEP §140", chapter:"100"},
  {topic:"PCT priority restoration at the RO", cite:"MPEP §1828.01", chapter:"1800"},

  {topic:"Continuation application — co-pendency requirement", cite:"MPEP §201.07", chapter:"200"},
  {topic:"Continuation-in-part — new matter handling", cite:"MPEP §201.08", chapter:"200"},
  {topic:"Divisional application and §121 safe harbor", cite:"MPEP §201.06", chapter:"200"},
  {topic:"Provisional application — what's required, what isn't", cite:"MPEP §201.04", chapter:"200"},
  {topic:"§120 domestic benefit claim requirements", cite:"MPEP §211", chapter:"200"},
  {topic:"§119(e) benefit-claim timing", cite:"MPEP §211.02", chapter:"200"},
  {topic:"§119(a) foreign priority — Paris Convention", cite:"MPEP §213", chapter:"200"},
  {topic:"Priority restoration in U.S. — 1.55(c)", cite:"MPEP §213.03", chapter:"200"},
  {topic:"Correction of inventorship in pending application — 1.48", cite:"MPEP §602.01(c)", chapter:"200"},

  {topic:"Restriction — independent and distinct + serious burden", cite:"MPEP §803", chapter:"800"},
  {topic:"Election with or without traverse", cite:"MPEP §818", chapter:"800"},
  {topic:"Petition to review restriction (1.144)", cite:"MPEP §818.03", chapter:"800"},
  {topic:"Rejoinder of non-elected claims", cite:"MPEP §821.04", chapter:"800"},

  {topic:"Reissue — error without deceptive intent (251)", cite:"MPEP §1402", chapter:"1400"},
  {topic:"Broadening reissue 2-year deadline", cite:"MPEP §1412.03", chapter:"1400"},
  {topic:"Recapture rule in reissue", cite:"MPEP §1412.02", chapter:"1400"},
  {topic:"Certificate of Correction — Office vs. applicant mistakes", cite:"MPEP §1480", chapter:"1400"},
  {topic:"Statutory and terminal disclaimer (253)", cite:"MPEP §1490", chapter:"1400"},

  {topic:"Patent term — 20 years from earliest U.S. nonprovisional", cite:"MPEP §2701", chapter:"2700"},
  {topic:"Patent Term Adjustment (PTA) categories A/B/C", cite:"MPEP §2731", chapter:"2700"},
  {topic:"Patent Term Extension under §156 (Hatch-Waxman)", cite:"MPEP §2750", chapter:"2700"},

  {topic:"Maintenance fees — 3.5/7.5/11.5 year due dates", cite:"MPEP §2506", chapter:"2500"},
  {topic:"Duty of disclosure under 1.56 — who is covered", cite:"MPEP §2001", chapter:"2000"},
  {topic:"Material information under 1.56(b)", cite:"MPEP §2001.05", chapter:"2000"},
  {topic:"Ex parte reexamination — who can request and threshold", cite:"MPEP §2209", chapter:"2200"},
  {topic:"Substantial New Question (SNQ) standard", cite:"MPEP §2242", chapter:"2200"},
  {topic:"Supplemental examination under §257 — patentee-initiated", cite:"MPEP §2801", chapter:"2800"},

  {topic:"Pre-grant publication at 18 months", cite:"MPEP §1120", chapter:"1100"},
  {topic:"Non-publication request — requirements and 45-day rescission", cite:"MPEP §1122", chapter:"1100"},

  {topic:"Certificate of Mailing under 1.8 — when it does NOT apply", cite:"MPEP §512", chapter:"500"},
  {topic:"Priority Mail Express filing under 1.10 — date of deposit", cite:"MPEP §513", chapter:"500"},
];


// Quick-reference study notes per chapter. Plain text, MPEP cite friendly. Used by the Study Guide view.
window.MPEP_STUDY = {
  "2100": [
    {h:"§101 Eligibility (2106)", b:"Step 1: statutory category. Step 2A: directed to judicial exception? Prong One identifies the exception; Prong Two asks whether it's integrated into a practical application. Step 2B: if not integrated, do additional elements amount to 'significantly more'? Three exceptions: abstract ideas, laws of nature, natural phenomena."},
    {h:"§101 Utility (2107)", b:"Required: specific, substantial, and credible. Not required: commercial."},
    {h:"§102(a)(1) AIA (2152.02)", b:"Patented, printed publication, in public use, on sale, or otherwise available to the public BEFORE the effective filing date. Secret sales can still bar (Helsinn)."},
    {h:"§102(a)(2) AIA", b:"U.S. patent/published application by another, effectively filed before the claim. Effective date = earliest priority date for which the reference was effectively filed (including foreign)."},
    {h:"§102(b) Exceptions", b:"(1)(A) inventor's own disclosure within 1 year. (1)(B) third-party disclosure subsequent to the inventor's earlier disclosure. (2)(C) common ownership/joint research agreement."},
    {h:"§103 Obviousness (2141)", b:"Graham factors: scope/content of prior art; differences; level of skill; secondary considerations. KSR: articulated reasoning, rational underpinning. 7 rationales (MPEP 2143)."},
    {h:"Secondary Considerations (2145)", b:"Commercial success (with nexus), long-felt need, failure of others, copying, unexpected results, skepticism, praise. Personal investment ≠ indicium."},
    {h:"§112(a)", b:"Written description (possession at filing), enablement (Wands factors → undue experimentation), best mode (still required in exam; not litigation defense)."},
    {h:"§112(b) Definiteness", b:"Reasonable certainty (Nautilus). Broad ≠ indefinite."},
    {h:"§112(d) Dependent", b:"Must further limit. Else improper."},
    {h:"§112(f) Means-plus-Function", b:"Triggered by 'means for' or nonce + function + no structure. Construed to disclosed structure + equivalents."},
    {h:"Claim Interpretation", b:"BRI during examination. 'Comprising' is open; 'consisting of' is closed; 'consisting essentially of' permits non-material additions. Preamble limits when it gives life/meaning."},
    {h:"Anticipation Special Cases", b:"Inherency must be NECESSARILY present. Species anticipates genus; genus does not always anticipate species. Product-by-process judged on product structure."},
    {h:"Double Patenting", b:"Statutory (§101 same invention) — cannot be cured by TD. Obviousness-type — terminal disclaimer cures (37 CFR 1.321)."},
  ],
  "700": [
    {h:"Reply Periods", b:"Statutory max = 6 months (35 USC 133). SSP typically 3 months, extendable under 1.136(a) automatic w/ fees up to 6 months."},
    {h:"After Final", b:"Amendments raising new issues or requiring further search NOT entered as of right. Options: RCE, appeal, AFCP 2.0, after-final consideration."},
    {h:"RCE (706.07(h))", b:"Submission + fee. Filed before issue fee paid / abandonment. Not in design or reexam."},
    {h:"Abandonment & Revival (711)", b:"Abandonment when statutory period (typically 6 months) lapses with no complete reply. Revive under 1.137 with 'unintentional' delay + petition + reply + fee."},
    {h:"Interviews (713)", b:"As of right pre-final; discretionary post-final. Substantive interview = summary required."},
    {h:"IDS (609)", b:"1.97 timing: free if within 3 months of filing or before first OA (whichever later). Fee or statement required if later. Post-allowance: 1.97(e) statement + fee, or withdraw via RCE."},
    {h:"New Matter", b:"§132(a) — barred. Use CIP to add new matter."},
    {h:"NOA & Issue Fee", b:"Issue fee due 3 months from NOA, non-extendable. Failure → abandonment."},
    {h:"Reopening Prosecution", b:"Examiner may reopen with TC Director/SPE approval — typically to issue a new ground after the appeal brief."},
  ],
  "600": [
    {h:"Filing Date — Nonprovisional", b:"Spec + drawings (if needed). Claims, oath, fee may follow (with surcharge). Provisional: spec, any drawings, cover sheet — NO claims/oath required."},
    {h:"Specification (§112(a))", b:"Written description + enablement + best mode."},
    {h:"Drawings (§113)", b:"Required only when necessary for understanding. Color drawings need petition + fee + 3 sets + spec statement."},
    {h:"Claims", b:"Independent stand alone. Dependent = further limits. Multiple dependent = alternative only, no MDC depending on MDC. 'Consisting of' closed; 'comprising' open."},
    {h:"Oath/Declaration (602)", b:"AIA: may postpone until application in condition for allowance. Substitute statement (1.64) when inventor unavailable."},
    {h:"Entity Status", b:"Small entity = <500 employees, no transfer to non-small. Micro entity = small + ≤4 prior apps + income ≤3× median (or university). Verify before each fee payment."},
    {h:"ADS (1.76)", b:"Bibliographic + benefit/priority claims. Controls over the oath if inconsistent."},
    {h:"Incorporation by Reference (608.01(p))", b:"Essential material — only from U.S. patents/published U.S. apps/pending U.S. apps."},
  ],
  "1200": [
    {h:"Right to Appeal", b:"After any claim has been twice rejected (final or not)."},
    {h:"Notice of Appeal", b:"Filed within period for reply (typically 3 months, extendable to 6)."},
    {h:"Appeal Brief", b:"2 months from notice of appeal, extendable under 1.136(a)."},
    {h:"Pre-Appeal Brief Request", b:"Filed WITH the notice of appeal. 5-page limit on arguments."},
    {h:"Examiner's Answer", b:"After brief — examiner can (a) reopen, (b) allow, or (c) answer. New ground in answer: applicant has 2 months (non-ext) to reopen or maintain appeal addressing new ground."},
    {h:"Reply Brief", b:"2 months from examiner's answer, generally non-extendable."},
    {h:"PTAB New Ground (41.50(b))", b:"2 months to (1) reopen with amendment/evidence or (2) request rehearing on existing record."},
    {h:"Rehearing", b:"2 months from PTAB decision (41.52)."},
  ],
  "1800": [
    {h:"International Filing Date", b:"Indication; applicant entitled to file; description; claim(s); designation (now automatic). Fees can be paid later."},
    {h:"US National Phase", b:"30 months from earliest priority (35 USC 371). NOT 31."},
    {h:"Foreign Filing License (140)", b:"Required for inventions made in U.S. before foreign filing. Automatic license 6 months after U.S. filing absent secrecy order."},
    {h:"Demand for Chapter II (1864)", b:"3 months from ISR/WO OR 22 months from priority, whichever LATER."},
    {h:"Article 19 Amendments", b:"Claims only, filed with IB. Within 2 months of ISR or 16 months from priority, whichever later."},
    {h:"Article 34 Amendments", b:"Description, claims, drawings — during Chapter II."},
    {h:"Priority Restoration (1.55(c) / Rule 26bis.3)", b:"Within 2 months of 12-month deadline; 'unintentional' standard at USPTO."},
    {h:"Bypass App", b:"§111 nonprovisional claiming §365(c) benefit of a PCT — alternative to §371 entry."},
  ],
  "200": [
    {h:"Provisional (201.04)", b:"Auto-abandons at 12 months. No claim to prior apps. Spec + drawings + cover sheet enough."},
    {h:"Continuation (201.07)", b:"Same disclosure as parent. Co-pendency required."},
    {h:"CIP (201.08)", b:"Adds new matter. Claims supported only by new matter get CIP date."},
    {h:"Divisional (201.06)", b:"Filed for non-elected invention after restriction. §121 safe harbor against double patenting."},
    {h:"§120 Benefit", b:"Co-pendency + at least one common inventor + specific reference (ADS for post-9/16/2012 apps)."},
    {h:"§119 Foreign Priority", b:"12 months utility / 6 months design. Restoration: within 2 months of deadline, 'unintentional' (1.55(c))."},
    {h:"§119(e) Provisional Benefit Claim", b:"Due in ADS within 4 months of filing OR 16 months from provisional, whichever later."},
  ],
  "800": [
    {h:"Restriction (803)", b:"Independent and distinct + serious burden."},
    {h:"Election (818)", b:"With or without traverse. Election required to obtain examination."},
    {h:"Petition (1.144)", b:"After restriction made final; must have elected with traverse."},
    {h:"Rejoinder (821.04)", b:"When linking generic claim is allowable, non-elected species may rejoin."},
  ],
  "1400": [
    {h:"Reissue Error (251)", b:"Wholly/partly inoperative or invalid due to error. AIA removed 'without deceptive intention.'"},
    {h:"Broadening Reissue", b:"Within 2 years of issuance only. Recapture rule prevents recovering surrendered subject matter."},
    {h:"Certificate of Correction (254/255)", b:"Office mistake = free. Minor applicant error = fee, no new exam."},
    {h:"Disclaimer", b:"Statutory disclaimer disclaims claims. Terminal disclaimer cures ODP."},
  ],
  "2700": [
    {h:"Term", b:"20 years from earliest U.S. non-provisional / §365(c) PCT. Provisional does NOT count for term."},
    {h:"PTA (2731)", b:"A (USPTO delay milestones), B (3-year pendency), C (interferences/appeals/secrecy) — minus applicant delay (incl. 3-month NOA reply window)."},
    {h:"PTE (2750)", b:"§156 regulatory review extension up to 5 years; total post-approval term ≤ 14 years."},
  ],
  "2000": [
    {h:"Duty of Disclosure (1.56)", b:"Inventors, attorneys/agents, others substantively involved. Continues through pendency. Material = non-cumulative + prima facie unpatentability OR inconsistent w/ applicant's position."},
  ],
  "2200": [
    {h:"Ex Parte Reexam", b:"Requestor: anyone. Threshold: SNQ (substantial new question). Only patents/printed publications. Anytime during enforceability."},
  ],
  "1100": [
    {h:"Publication", b:"18 months from earliest priority. Nonpublication request at filing + certification no foreign filing (45-day rescission notice if foreign filing later)."},
  ],
  "2500": [
    {h:"Maintenance Fees", b:"3.5 / 7.5 / 11.5 years after issue (utility only). 6-month grace with surcharge. Design + plant: no maintenance fees."},
  ],
  "1500": [
    {h:"Design Term", b:"15 years from issue (apps filed ≥ May 13, 2015). 6-month Paris priority."},
  ],
};
