// MPEP Quiz Bank — patent bar prep
// Source: USPTO MPEP, Ninth Edition, Revision 01.2024 (current source material as of Sept 24, 2025)
// Weighted toward the high-yield chapters that account for ~75% of the exam:
//   Ch. 2100 (Patentability — 101/102/103/112)
//   Ch. 700  (Examination)
//   Ch. 600  (Parts, Form & Content)
//   Ch. 1200 (Appeal)
//   Ch. 1800 (PCT)
//
// Question-writing discipline:
//   • All four choices written to similar length & specificity (no "longest = right" tell)
//   • Distractors are near-misses — usually one wrong word, date, or procedural step
//   • No fillers like "Always" / "Never" / "Cannot share inventors"
//   • Fact patterns with dates/parties force application, not just recall

window.MPEP_QUESTIONS = [

  {chapter:"2100", topic:"§101 Eligibility", highYield:true,
    q:"An examiner determines that a claim recites the abstract idea of hedging risk. Under the Office's two-step framework, the claim is patent-eligible if:",
    choices:[
      "Step 2A Prong Two concludes the exception is integrated into a practical application",
      "Step 2A Prong One concludes the claim falls within a statutory category",
      "Step 2B concludes the additional elements are well-understood, routine, and conventional",
      "Step 2A Prong One concludes the claim does not recite an abstract idea"
    ], answer:0,
    explain:"If Step 2A Prong One has already identified an abstract idea, the claim survives only by Prong Two integration into a practical application, or Step 2B 'significantly more.' Choice C is the inverse — well-understood/routine elements DEFEAT eligibility at Step 2B. Choice D conflates Step 1 (statutory category) with Step 2A.",
    cite:"MPEP §2106"},

  {chapter:"2100", topic:"§101 Eligibility", highYield:true,
    q:"Which of the following is NOT one of the three judicially-recognized exceptions to patent-eligible subject matter?",
    choices:[
      "Laws of nature, such as Newton's laws of motion",
      "Abstract ideas, such as a fundamental economic practice",
      "Natural phenomena, such as a newly-discovered mineral",
      "Mental processes that improve computer functionality"
    ], answer:3,
    explain:"The three exceptions are laws of nature, natural phenomena, and abstract ideas. 'Mental processes' is a sub-category of abstract idea, but improvements to computer functionality (Enfish) actually FAVOR eligibility under Step 2A Prong Two.",
    cite:"MPEP §2106.04"},

  {chapter:"2100", topic:"§101 Utility", highYield:true,
    q:"An application discloses a compound the inventor predicts may someday have therapeutic uses, with no working examples. The proper §101 utility rejection grounds are that the disclosed utility is not:",
    choices:[
      "Credible, though it may be specific and substantial",
      "Commercially significant or substantial on the present record",
      "Specific, substantial, or credible, on this record",
      "Substantial and specific, though it may be credible"
    ], answer:2,
    explain:"Under Brenner v. Manson the utility must be specific (this compound vs. compounds generally), substantial (real-world use), and credible. A speculative future therapeutic use without evidence fails all three prongs. Commercial significance is never required.",
    cite:"MPEP §2107.01"},

  {chapter:"2100", topic:"§102(a)(1) AIA Prior Art", highYield:true, aia:"aia",
    q:"Under AIA 35 U.S.C. 102(a)(1), which is NOT a category of prior art?",
    choices:[
      "Patented before the effective filing date",
      "Described in a printed publication before the effective filing date",
      "Otherwise available to the public before the effective filing date",
      "Known or used by others in the United States before the invention date"
    ], answer:3,
    explain:"Choice C is the pre-AIA §102(a) standard ('known or used by others in this country' tied to date of invention). AIA §102(a)(1) is patented, described in a printed publication, in public use, on sale, or otherwise available to the public, all keyed to the effective filing date.",
    cite:"MPEP §2152.02"},

  {chapter:"2100", topic:"§102(b)(1) Grace Period", highYield:true, aia:"aia",
    q:"Inventor X discloses her invention at a public conference on March 1, 2025. Third party Y, who learned of the invention independently, publishes a substantially identical disclosure on June 15, 2025. X files her U.S. application on January 10, 2026. With respect to X's application, Y's June 15 publication is:",
    choices:[
      "Prior art under §102(a)(1) — the grace period exception does not apply when Y derived independently",
      "Not prior art under §102(b)(1)(B) — X publicly disclosed the subject matter before Y did",
      "Not prior art under §102(b)(1)(A) — Y published within one year of X's filing",
      "Prior art under §102(a)(2) — Y's publication has its own earlier effective filing date"
    ], answer:1,
    explain:"§102(b)(1)(B) excludes intervening disclosures if the same subject matter was publicly disclosed by the inventor before the intervening disclosure. Independent derivation by Y is irrelevant — what matters is that X's earlier public disclosure of that subject matter shielded the application. Choice D misstates §102(b)(1)(A), which excludes only the inventor's OWN disclosures within one year.",
    cite:"MPEP §2153.02"},

  {chapter:"2100", topic:"§102 On-Sale Bar", highYield:true, aia:"aia",
    q:"On June 1, 2023, Inventor A entered into a confidential supply agreement to manufacture and sell her patented compound to one customer, who agreed to keep the compound's composition secret. A filed her U.S. application on July 15, 2024. The June 1, 2023 sale:",
    choices:[
      "Is excused under the §102(b)(1)(A) one-year grace period",
      "Is §102(a)(1) prior art because secret sales still trigger the on-sale bar (Helsinn)",
      "Is not §102(a)(1) prior art because the composition was not disclosed to the public",
      "Is not prior art because the customer was bound by confidentiality"
    ], answer:1,
    explain:"Helsinn v. Teva (2019) held that AIA §102(a)(1) on-sale bar still applies to commercial sales even if the sale does not publicly disclose the invention. The sale here was more than one year before filing, so the §102(b)(1)(A) grace period (one year) doesn't save it.",
    cite:"MPEP §2152.02(d)"},

  {chapter:"2100", topic:"§102 Anticipation", highYield:true,
    q:"For a single prior-art reference to anticipate a claim, it must:",
    choices:[
      "Be in the same field of endeavor as the claimed invention",
      "Render the claim obvious to one of ordinary skill in the art",
      "Disclose, expressly or inherently, every element of the claim arranged as in the claim",
      "Disclose the elements of the claim, even if scattered across separate embodiments"
    ], answer:2,
    explain:"Anticipation requires a single reference to disclose each and every element AS arranged in the claim — not just somewhere in the reference, and not just rendering the claim obvious. Field of endeavor is the analogous-art test for §103, not anticipation.",
    cite:"MPEP §2131"},

  {chapter:"2100", topic:"Inherency", highYield:true,
    q:"A prior-art reference does not expressly disclose the claimed feature X. The examiner argues that X is inherent. The examiner's position is sustainable only if X is:",
    choices:[
      "Capable of being achieved if a skilled artisan optimized the disclosure",
      "Probably present in the prior-art process under normal conditions",
      "Disclosed in a related reference cited in the same office action",
      "Necessarily present as the natural result of the disclosed process"
    ], answer:3,
    explain:"Inherency requires NECESSARY presence — not 'probably,' not 'could be.' If the missing feature is the natural and inevitable result of the prior-art teaching, it is inherent and anticipates.",
    cite:"MPEP §2112"},

  {chapter:"2100", topic:"Printed Publication", highYield:true,
    q:"A graduate thesis was deposited in a single university library, indexed by subject, and shelved on January 1, 2024. The thesis is a 'printed publication' as of:",
    choices:[
      "The date the institution conferred the degree on the author",
      "The date a third party first requested a copy",
      "The date of cataloging and shelving — sufficient public accessibility",
      "The date the thesis was peer-reviewed and approved"
    ], answer:2,
    explain:"Public accessibility is the touchstone. A thesis indexed and shelved such that interested skilled artisans could locate it through reasonable diligence is a printed publication as of that date. Degree-conferral, peer review, and actual requests are not the trigger.",
    cite:"MPEP §2128"},

  {chapter:"2100", topic:"§102(a)(2) Reference Date", aia:"aia",
    q:"An AIA application has an effective filing date of March 10, 2024. A U.S. patent cited against it issued February 15, 2024, claims foreign priority to a Japanese application filed April 1, 2022, and the subject matter relied upon is fully supported in the Japanese application. The patent is §102(a)(2) prior art effective:",
    choices:[
      "February 15, 2024 — the issue date of the cited U.S. patent",
      "The actual U.S. filing date of the cited reference, regardless of its foreign priority",
      "April 1, 2022 — the earliest date for which the relied-upon subject matter was effectively filed",
      "March 10, 2024 — the application's own effective filing date, by operation of §102(d)"
    ], answer:2,
    explain:"§102(d) — a §102(a)(2) reference is effective as of the earliest priority date for which the relied-upon subject matter was effectively filed, including foreign priority under §119. The issue date and the application's own filing date are not the controlling dates.",
    cite:"MPEP §2154.01(b)"},

  {chapter:"2100", topic:"§102(b)(2)(C) Common Ownership", highYield:true, aia:"aia",
    q:"A prior-filed U.S. application by another, otherwise §102(a)(2) prior art, is excepted from §102(a)(2) when:",
    choices:[
      "Both applications were assigned to the same entity on or before the issue date",
      "Both applications were filed by the same inventor under a joint research agreement",
      "Both applications were commonly owned not later than the effective filing date of the claimed invention",
      "Both applications claimed an effective filing date earlier than March 16, 2013"
    ], answer:2,
    explain:"§102(b)(2)(C) removes commonly-owned subject matter from §102(a)(2). The ownership/obligation must exist not later than the effective filing date of the later claim — not later assignment, and not tied to inventor identity. Choice D conflates AIA effective date.",
    cite:"MPEP §2154.02(c)"},

  {chapter:"2100", topic:"Public Use", highYield:true,
    q:"To establish that pre-filing use was experimental and not a public-use bar, applicant should rely on facts including:",
    choices:[
      "The use occurred outside business hours and was not advertised",
      "The use lasted less than one year before the application was filed",
      "Only one of ordinary skill in the art could have observed the relevant features",
      "The inventor controlled the use, maintained records, and used confidentiality where feasible"
    ], answer:3,
    explain:"Experimental-use indicia: inventor's control, monitoring/records, confidentiality obligations where practical, necessity of public testing, and that experimentation (not commercial exploitation) was the primary purpose. Duration alone is not the test.",
    cite:"MPEP §2133.03(e)"},

  {chapter:"2100", topic:"Graham Factors", highYield:true,
    q:"The Graham v. John Deere obviousness analysis requires the examiner to make factual determinations on all of the following EXCEPT:",
    choices:[
      "Level of ordinary skill in the pertinent art at the time",
      "Scope and content of the prior art at the time of the invention",
      "Whether the inventor had access to the cited references",
      "Differences between the claimed invention and the prior art"
    ], answer:2,
    explain:"Graham factors: scope/content of prior art, differences from claims, level of ordinary skill, plus secondary considerations. Whether the inventor personally saw the references is irrelevant — obviousness is judged from the perspective of a hypothetical person of ordinary skill.",
    cite:"MPEP §2141"},

  {chapter:"2100", topic:"KSR Rationales", highYield:true,
    q:"Which is NOT among the rationales identified in MPEP §2143 for supporting a §103 rejection?",
    choices:[
      "Reliance on the commercial value of the combination to a competitor",
      "Combining prior art elements according to known methods to yield predictable results",
      "Simple substitution of one known element for another with predictable results",
      "Use of known technique to improve similar devices in the same way"
    ], answer:0,
    explain:"The seven §2143 rationales: combination of known elements, simple substitution, use of known technique, applying known technique to improve a ready-for-improvement device, obvious to try (finite predictable solutions), known design incentives/market forces, and TSM. Competitor's commercial valuation is not a rationale.",
    cite:"MPEP §2143"},

  {chapter:"2100", topic:"Teaching Away", highYield:true,
    q:"A reference is properly characterized as 'teaching away' from a claimed combination when it:",
    choices:[
      "Was published more than a decade before the claimed invention",
      "Criticizes, discredits, or otherwise discourages the path the claim takes",
      "Recommends a different solution to a similar but distinct problem",
      "Does not address the specific combination at issue"
    ], answer:1,
    explain:"Teaching away requires actual discouragement — criticism, discrediting, or steering the artisan away from the claim's approach. Mere silence, alternative recommendations for a different problem, or age of the reference do not qualify.",
    cite:"MPEP §2145"},

  {chapter:"2100", topic:"Secondary Considerations", highYield:true,
    q:"Which is NOT a recognized objective indicium of non-obviousness?",
    choices:[
      "Long-felt but unsolved need in the relevant industry",
      "Commercial success with a nexus to the claimed features",
      "The inventor's individual creativity or insight in conceiving the claim",
      "Failure of others to achieve the claimed result"
    ], answer:2,
    explain:"Recognized indicia (objective evidence): long-felt need, commercial success with nexus, failure of others, copying, unexpected results, industry skepticism, industry praise, and licensing. The inventor's subjective creativity is not an objective indicium.",
    cite:"MPEP §2145"},

  {chapter:"2100", topic:"Nexus", highYield:true,
    q:"Patentee submits commercial-success evidence to rebut an obviousness rejection. To be probative, the success must be tied to:",
    choices:[
      "Any feature recited in any claim of the patent at issue",
      "Features that were aggressively marketed by the patentee",
      "Sales figures exceeding $1 million in the first year of release",
      "The novel features that distinguish the claim from the prior art"
    ], answer:3,
    explain:"The nexus requirement: commercial success must be attributable to the novel and unobvious features of the claim — not to features already in the prior art, not to marketing alone, and not to arbitrary sales thresholds.",
    cite:"MPEP §716.03"},

  {chapter:"2100", topic:"Analogous Art", highYield:true,
    q:"A reference is analogous prior art for §103 purposes if it satisfies:",
    choices:[
      "Both prongs: same field of endeavor AND reasonably pertinent to the problem",
      "The TSM test as it existed prior to KSR v. Teleflex",
      "Either prong: same field of endeavor OR reasonably pertinent to the problem",
      "Citation in the applicant's own information disclosure statement"
    ], answer:2,
    explain:"Two-prong test, satisfied by EITHER prong: (1) same field of endeavor, regardless of the problem, OR (2) reasonably pertinent to the particular problem the inventor was trying to solve. Choice A wrongly demands both.",
    cite:"MPEP §2141.01(a)"},

  {chapter:"2100", topic:"Prima Facie Obviousness", highYield:true,
    q:"To establish a prima facie case of obviousness after KSR, the examiner must articulate:",
    choices:[
      "A specific teaching, suggestion, or motivation found expressly in the prior art",
      "A working example of the combination in the cited references",
      "Some articulated reasoning with rational underpinning to combine the references",
      "Evidence that one of ordinary skill actually built the proposed combination"
    ], answer:2,
    explain:"KSR rejected a rigid TSM-only test. The examiner must articulate reasoning with rational underpinning, but a specific in-the-reference motivation is not required. Actual construction or a working example in the prior art is not required either.",
    cite:"MPEP §2142, §2143"},

  {chapter:"2100", topic:"Obvious-to-Try", highYield:true,
    q:"An 'obvious to try' rationale under §2143 properly supports a §103 rejection when:",
    choices:[
      "The artisan could have varied parameters across an unpredictable design space",
      "The artisan would have had a finite number of identified, predictable solutions",
      "Any number of theoretical approaches existed in the relevant art",
      "The applicant has not yet shown actual evidence of unexpected results"
    ], answer:1,
    explain:"KSR endorsed 'obvious to try' only where a finite, known set of identified predictable solutions exists with a reasonable expectation of success — not throwing darts at an unpredictable space.",
    cite:"MPEP §2143(I)(E)"},

  {chapter:"2100", topic:"Reasonable Expectation of Success", highYield:true,
    q:"For a §103 combination to be sustainable, the level of predictability required is:",
    choices:[
      "Reasonable expectation of success, not absolute predictability",
      "Working examples in the prior art confirming the combination",
      "Absolute certainty that the combination would achieve the claimed result",
      "Probability greater than 95% that the combination would work"
    ], answer:0,
    explain:"Reasonable expectation of success — not absolute certainty — is the bar. Absolute predictability is too high; theoretical possibility is too low.",
    cite:"MPEP §2143.02"},

  {chapter:"2100", topic:"§112(a) Written Description", highYield:true,
    q:"To satisfy the written description requirement for a later-presented claim, the original disclosure must:",
    choices:[
      "Reasonably convey to a skilled artisan that the inventor possessed the claimed subject matter",
      "Use the verbatim language of the later claim somewhere in the specification",
      "Disclose at least one working example for every element of the claim",
      "Provide enough detail to enable practice without undue experimentation"
    ], answer:0,
    explain:"Possession at the filing date is the test. Verbatim support is not required; a working example for every element is not required; and enablement (choice D) is a separate §112(a) requirement, not the written-description test.",
    cite:"MPEP §2163"},

  {chapter:"2100", topic:"§112(a) Enablement", highYield:true,
    q:"The Wands factors are used by the examiner to assess:",
    choices:[
      "Whether the inventor was in possession of the claimed invention at filing",
      "Whether undue experimentation would be needed to practice the full claim scope",
      "Whether the claim recites patent-eligible subject matter under §101",
      "Whether claim terms are sufficiently definite under §112(b)"
    ], answer:1,
    explain:"In re Wands sets out eight factors (quantity of experimentation, direction, examples, nature of invention, state of art, skill, predictability, breadth of claims) for evaluating undue experimentation under enablement. Possession is §112(a) written description; definiteness is §112(b); eligibility is §101.",
    cite:"MPEP §2164.01(a)"},

  {chapter:"2100", topic:"§112(a) Best Mode", highYield:true, aia:"aia",
    q:"After the AIA, the best-mode requirement is:",
    choices:[
      "Still a basis for invalidity, but no longer required during examination",
      "Eliminated for both examination and litigation purposes",
      "Still required during examination, but no longer a basis for invalidity in litigation",
      "Required only for applications subject to a foreign priority claim"
    ], answer:2,
    explain:"AIA §15 left best mode as a §112(a) requirement during examination (rarely raised in practice), but eliminated it as a defense to validity in litigation under §282. Not eliminated entirely; not tied to foreign priority.",
    cite:"MPEP §2165"},

  {chapter:"2100", topic:"§112(b) Definiteness", highYield:true,
    q:"Under Nautilus v. Biosig, a claim is indefinite when:",
    choices:[
      "Any term in the claim is reasonably susceptible to two or more meanings",
      "The claim uses relative terms such as 'about' or 'substantially'",
      "The claim recites broad functional language without any structural limitation",
      "A skilled artisan reading the specification cannot ascertain the scope with reasonable certainty"
    ], answer:3,
    explain:"The Nautilus 'reasonable certainty' standard governs. Multiple meanings (insolubly ambiguous) is outdated language. Broad functional language and relative terms are not per se indefinite.",
    cite:"MPEP §2173.02"},

  {chapter:"2100", topic:"§112(d) Dependent Claim", highYield:true,
    q:"A dependent claim is improper under §112(d) when it:",
    choices:[
      "Repeats limitations already recited in the claim from which it depends",
      "Fails to further limit the claim from which it depends",
      "Uses 'comprising' rather than 'consisting of' as its transition",
      "Refers to more than one independent claim in the alternative"
    ], answer:1,
    explain:"§112(d) requires the dependent claim to specify a further limitation. Repeating limitations is permitted; transition phrase choice doesn't make a dependent claim improper; multiple-dependency in the alternative is permitted under §112(e).",
    cite:"MPEP §608.01(n)"},

  {chapter:"2100", topic:"§112(f) Means-Plus-Function", highYield:true,
    q:"Which claim element most clearly invokes §112(f) construction?",
    choices:[
      "A processor configured to compute a hash of the input data",
      "A hashing module that receives the input data and outputs a hash value",
      "Means for computing a hash of the input data",
      "A computer-implemented step of generating a hash from input data"
    ], answer:2,
    explain:"'Means for [function]' creates the presumption that §112(f) applies. 'Module' is a nonce word that MIGHT invoke §112(f) if there's no recited structure, but 'means for' is the clearer trigger. A processor 'configured to' typically recites sufficient structure to avoid §112(f). Method-step claims are governed by §112(f)'s 'step for' formulation, not 'computer-implemented step.'",
    cite:"MPEP §2181"},

  {chapter:"2100", topic:"Broadest Reasonable Interpretation", highYield:true,
    q:"During examination, the examiner construes pending claims under:",
    choices:[
      "The narrowest construction supported by the specification's working examples",
      "Their broadest reasonable interpretation in light of the specification",
      "The same Phillips claim construction standard used in district court litigation",
      "Their plain and ordinary meaning to one of ordinary skill, ignoring the specification"
    ], answer:1,
    explain:"BRI during examination — broad but reasonable, read in light of the specification as understood by one of ordinary skill. Phillips applies to issued patents in litigation, not examination.",
    cite:"MPEP §2111"},

  {chapter:"2100", topic:"Transitional Phrases", highYield:true,
    q:"A claim using the transition phrase 'consisting of' is best characterized as:",
    choices:[
      "Closed — additional unrecited elements are excluded",
      "Partially closed — only elements not affecting the basic characteristics permitted",
      "Equivalent to 'comprising' for infringement purposes",
      "Open — additional unrecited elements may be present"
    ], answer:0,
    explain:"'Consisting of' is closed. 'Comprising' is open. 'Consisting essentially of' is partially closed (choice C describes that phrase, not 'consisting of').",
    cite:"MPEP §2111.03"},

  {chapter:"2100", topic:"Consisting Essentially Of",
    q:"A claim using 'consisting essentially of' permits unrecited additional ingredients only if those additions:",
    choices:[
      "Are listed in the specification's preferred-embodiment section",
      "Do not materially affect the basic and novel characteristics of the claimed invention",
      "Constitute less than 10% by weight of the claimed composition",
      "Are functionally equivalent to the recited ingredients"
    ], answer:1,
    explain:"Partially closed: additions are allowed only if they do not materially affect the basic and novel characteristics. There is no embodiment-list rule, no equivalence rule, and no fixed weight threshold.",
    cite:"MPEP §2111.03"},

  {chapter:"2100", topic:"Preamble", highYield:true,
    q:"A preamble is given patentable weight when it:",
    choices:[
      "Appears at the start of the claim before the transition phrase",
      "States an intended use that the apparatus can perform",
      "Describes the field of use for the claimed apparatus",
      "Recites essential structure or breathes life and meaning into the claim"
    ], answer:3,
    explain:"A preamble is limiting only when it gives life, meaning, and vitality to the claim — e.g., recites essential structure, antecedent basis for terms used later, or limitations relied on during prosecution. Field of use and intended use are typically not limiting.",
    cite:"MPEP §2111.02"},

  {chapter:"2100", topic:"Markush", highYield:true,
    q:"Which is the proper Markush format?",
    choices:[
      "Wherein X is one of A, B, C, or any analog thereof",
      "Wherein X comprises at least one of A, B, or C",
      "Wherein X is A, B, C, or other equivalent compounds",
      "Wherein X is selected from the group consisting of A, B, and C"
    ], answer:3,
    explain:"Proper Markush form is 'selected from the group consisting of [closed list of alternatives].' Open-ended language like 'comprises,' 'or analog thereof,' and 'or other' destroys the closed-group structure.",
    cite:"MPEP §2117"},

  {chapter:"2100", topic:"Product-by-Process", highYield:true,
    q:"A claim recites 'a polymer prepared by [process steps].' Patentability of the polymer is determined by:",
    choices:[
      "The combination of the process steps and the recited polymer composition",
      "The recited process steps and any unique product features they impart",
      "The structural identity of the polymer itself, regardless of how it is made",
      "Whether the process steps would have been obvious in view of the prior art"
    ], answer:2,
    explain:"Product-by-process patentability is based on the structural identity of the product. If the prior-art polymer is structurally the same, the claim is anticipated even if the prior art used a different process.",
    cite:"MPEP §2113"},

  {chapter:"2100", topic:"Intended Use",
    q:"An apparatus claim's preamble states the device is 'for filtering airborne particulates.' A prior-art device is structurally identical but is described as a coffee filter. The claim is:",
    choices:[
      "Not anticipated — intended use limits the apparatus to the recited context",
      "Anticipated — the prior-art device is structurally capable of the recited use",
      "Anticipated only if the prior art expressly disclosed air filtration",
      "Not anticipated — the prior-art device was used for a different purpose"
    ], answer:1,
    explain:"Apparatus claims cover what the device IS, not what it is intended for. If the prior-art structure is capable of the recited use, the claim is anticipated regardless of the prior art's stated purpose.",
    cite:"MPEP §2114"},

  {chapter:"2100", topic:"Range Anticipation",
    q:"A claim recites a temperature 'between 100 °C and 200 °C.' A prior-art reference discloses a single working example at 150 °C. The claim is:",
    choices:[
      "Anticipated by the 150 °C example — a single point in the range anticipates",
      "Rendered obvious by the example, but not technically anticipated as a matter of law",
      "Anticipated only when the prior-art example is identified as a preferred embodiment",
      "Not anticipated unless the prior art expressly discloses the full claimed range"
    ], answer:0,
    explain:"A single prior-art point falling within the claimed range anticipates. A prior-art range that merely overlaps may render the claim obvious (not anticipated), but an actual disclosed point within the range anticipates.",
    cite:"MPEP §2131.03"},

  {chapter:"2100", topic:"Genus/Species",
    q:"A claim is directed to a generic class of compounds. A prior-art reference discloses a single specific compound within that class. The claim is:",
    choices:[
      "Not anticipated, because the prior-art species does not disclose the full generic scope",
      "Anticipated by the species — disclosure of any species anticipates the genus",
      "Rendered obvious but not anticipated, because the species is narrower than the genus",
      "Anticipated only if the prior-art reference identifies the species as a preferred embodiment"
    ], answer:1,
    explain:"A species in the prior art anticipates the generic claim that encompasses it. The reverse is not true — disclosure of a genus does not always anticipate every species within it.",
    cite:"MPEP §2131.02"},

  {chapter:"2100", topic:"Swearing Behind", aia:"pre-aia",
    q:"In an application subject to pre-AIA §102, a Rule 1.131 affidavit may be used to:",
    choices:[
      "Remove the inventor's own work from §102(a) prior art",
      "Establish a foreign priority date earlier than the actual filing",
      "Antedate a §102(a) or §102(e) reference by showing prior invention",
      "Overcome a statutory bar under pre-AIA §102(b)"
    ], answer:2,
    explain:"Rule 1.131 (only for pre-AIA applications) antedates non-statutory bars under §102(a) and §102(e). It cannot overcome a §102(b) statutory bar, does not establish foreign priority (that's §119), and removing one's own work from prior art is now handled by §102(b) exceptions under the AIA.",
    cite:"MPEP §715"},

  {chapter:"2100", topic:"Rule 1.132 Declaration", highYield:true,
    q:"A Rule 1.132 declaration is most commonly used to submit:",
    choices:[
      "Evidence of unexpected results to rebut an obviousness rejection",
      "An English translation of a non-English prior-art reference",
      "Evidence of prior invention to antedate a §102(a) reference",
      "A certified copy of a foreign priority application"
    ], answer:0,
    explain:"Rule 1.132 declarations submit evidence relevant to patentability — typically unexpected results, secondary considerations, or factual rebuttals of the examiner's findings. Prior invention is Rule 1.131; foreign priority is handled under §119; translations have their own format.",
    cite:"MPEP §716"},

  {chapter:"2100", topic:"Unexpected Results",
    q:"To rebut a §103 rejection with unexpected-results evidence, the applicant must show a difference that is:",
    choices:[
      "Sustained across all commercial embodiments of the claim",
      "Of any measurable magnitude compared to the prior art",
      "Recognized by an industry award or third-party publication",
      "Unexpectedly different in kind or in degree from what one of skill would predict"
    ], answer:3,
    explain:"The results must be unexpected — different in kind, or in degree, beyond what one of ordinary skill would have predicted. Mere differences and external recognition do not suffice.",
    cite:"MPEP §716.02"},

  {chapter:"2100", topic:"Comparative Testing",
    q:"Comparative test data submitted to rebut obviousness must compare the claimed invention to:",
    choices:[
      "The earliest-cited prior-art reference in the rejection",
      "The closest prior art identified by the examiner",
      "A randomly chosen reference within the same technology",
      "A commercial product sold by the same applicant"
    ], answer:1,
    explain:"Comparisons must be against the closest prior art identified by the examiner — not the earliest cited, a random reference, or the applicant's own prior product.",
    cite:"MPEP §716.02(e)"},

  {chapter:"2100", topic:"Obviousness-Type Double Patenting", highYield:true,
    q:"Obviousness-type double patenting between a pending application and an earlier commonly-owned patent is overcome by:",
    choices:[
      "Filing a terminal disclaimer tying expiration and common ownership to the earlier patent",
      "Antedating the earlier patent under Rule 1.131",
      "Filing a continuation application claiming the same priority",
      "Amending the claims to add limitations not present in the earlier patent"
    ], answer:0,
    explain:"A terminal disclaimer under 37 CFR 1.321 cures obviousness-type DP. Statutory (same-invention) DP under §101 cannot be cured by terminal disclaimer. Amendments and continuations don't, by themselves, resolve the DP issue.",
    cite:"MPEP §804"},

  {chapter:"2100", topic:"Statutory Double Patenting",
    q:"Statutory double patenting under §101 arises when:",
    choices:[
      "Two patents to the same inventive entity have obvious variations of one another",
      "Two patents to the same inventive entity have identical scope on the same invention",
      "Two patents are commonly owned but claim different inventions",
      "A patent and a published application overlap in their disclosures"
    ], answer:1,
    explain:"§101 statutory DP requires claims to the same invention (same scope). Obvious variations are obviousness-type DP. Mere common ownership without identical-scope claims is not DP at all.",
    cite:"MPEP §804(II)(A)"},

  {chapter:"2100", topic:"Burden of Proof — Inherency",
    q:"An examiner establishes that a claimed product appears structurally identical to a prior-art product. The burden then shifts to:",
    choices:[
      "The applicant to submit unexpected results compared to the closest prior art",
      "The examiner to prove the claimed property is inherently present in the prior art",
      "The applicant to prove the prior-art product does not inherently possess the claimed property",
      "The examiner to provide a working example of the claimed property"
    ], answer:2,
    explain:"Once the examiner shows the structures appear identical, the burden shifts to the applicant to prove a structural or functional difference. Unexpected results address obviousness, not inherent anticipation.",
    cite:"MPEP §2112(V)"},

  {chapter:"2100", topic:"AIA Effective Date Transition", aia:"aia",
    q:"An application filed March 15, 2013 contains some claims with priority to a 2012 provisional and other claims drawn to newly-added subject matter. The application is subject to:",
    choices:[
      "AIA §102 in full — filing date is on or after March 16, 2013",
      "Pre-AIA §102 for all claims because the application was filed before March 16, 2013",
      "Pre-AIA §102 in full — at least one claim has pre-AIA priority",
      "AIA §102 for all claims because new subject matter was added"
    ], answer:1,
    explain:"The AIA effective date is March 16, 2013. An application FILED before that date is wholly pre-AIA, regardless of whether new matter was later added. (After March 16, 2013, a transitional/mixed application that EVER contains an AIA-effective claim is subject to AIA across the board.)",
    cite:"MPEP §2159"},

  {chapter:"700", topic:"Reply Period Statutory Cap", highYield:true,
    q:"The statutory maximum period for reply to an Office action is set by 35 U.S.C. 133 at:",
    choices:[
      "Whatever period the examiner specifies in the action, as a matter of discretion",
      "Six months from the mailing date, the absolute statutory cap",
      "Twelve months from the mailing date, the same as foreign-priority deadline",
      "Three months from the mailing date, extendable for cause under 1.136(b)"
    ], answer:1,
    explain:"35 U.S.C. 133 sets a six-month statutory maximum. The shortened statutory period (SSP) is usually 3 months, extendable up to the six-month cap under 1.136(a).",
    cite:"MPEP §710.02"},

  {chapter:"700", topic:"SSP and Extensions", highYield:true,
    q:"An Office action with a 3-month shortened statutory period is mailed April 1. Without paying any extension fees, applicant's reply is due no later than:",
    choices:[
      "May 1 — one month from the mailing date",
      "July 1 — three months from the mailing date",
      "October 1 — six months from the mailing date",
      "July 1 only if extensions are paid in advance"
    ], answer:1,
    explain:"The 3-month SSP expires three months from mail date — July 1. Without extension fees, reply is due by then. Up to three months of additional extensions are available under 1.136(a) (paid at time of reply, not in advance).",
    cite:"MPEP §710.02"},

  {chapter:"700", topic:"1.136(a) Extensions", highYield:true,
    q:"An extension of time under 37 CFR 1.136(a):",
    choices:[
      "Must be requested before the original SSP expires, with the fee paid in advance",
      "Is available only for the first reply to any given Office action",
      "Requires examiner approval based on a showing of sufficient cause",
      "May be requested at the time of reply, with the fee paid then, up to the 6-month statutory cap"
    ], answer:3,
    explain:"1.136(a) extensions are automatic upon fee payment and may be requested with the reply itself, so long as the total reply period does not exceed six months. No examiner approval is required (that's 1.136(b)). The first-reply restriction is not a feature of 1.136(a).",
    cite:"MPEP §710.02(e)"},

  {chapter:"700", topic:"1.136(b) Extensions",
    q:"An extension under 37 CFR 1.136(b) differs from 1.136(a) in that 1.136(b):",
    choices:[
      "May be used only after a final rejection has been issued",
      "Is automatic upon payment of the prescribed fee",
      "Extends the statutory six-month maximum reply period",
      "Requires a showing of sufficient cause and is granted in the examiner's discretion"
    ], answer:3,
    explain:"1.136(b) requires a showing of sufficient cause and is discretionary. It is used where 1.136(a) is unavailable (e.g., periods the Office has designated as non-extendable under (a)). Neither extension can exceed the statutory cap.",
    cite:"MPEP §710.02(c)"},

  {chapter:"700", topic:"After-Final Amendments", highYield:true,
    q:"After a final rejection, which amendment is NOT entered as a matter of right?",
    choices:[
      "An amendment that adopts an examiner suggestion from the final action",
      "An amendment that raises new issues requiring further search or consideration",
      "An amendment that cancels claims under rejection",
      "An amendment that presents the claims in a form better suited for appeal"
    ], answer:1,
    explain:"After final, amendments raising new issues, requiring further search, or otherwise not in compliance with 37 CFR 1.116 are not entered as of right. Cancellation, adopting examiner suggestions, and clarifying-for-appeal amendments generally are entered.",
    cite:"MPEP §714.13"},

  {chapter:"700", topic:"Period Tolling After Final", highYield:true,
    q:"Applicant files an amendment two weeks after a final rejection. The examiner notifies applicant that the amendment will not be entered. The original 3-month period for reply:",
    choices:[
      "Is restarted when applicant receives the non-entry advisory action",
      "Is automatically extended by one month to account for the back-and-forth",
      "Is tolled from the date the amendment was filed until the examiner's notice",
      "Continues to run — the unentered amendment does not toll or restart the period"
    ], answer:3,
    explain:"Filing a non-compliant after-final amendment does not toll or restart the reply period. Applicant must take further action (compliant reply, RCE, appeal, etc.) within the statutory six-month cap.",
    cite:"MPEP §714.13"},

  {chapter:"700", topic:"RCE Requirements", highYield:true,
    q:"A Request for Continued Examination under 37 CFR 1.114 requires:",
    choices:[
      "A submission and the prescribed fee, filed before issue-fee payment or abandonment",
      "A specific reference to the prior application, a new ADS, and a benefit claim",
      "Examiner authorization, the RCE fee, and a statement of unintentional delay",
      "A new inventor's oath, the prescribed RCE fee, and a continuation cover sheet"
    ], answer:0,
    explain:"RCE under 1.114 requires (1) a submission (amendment, IDS, arguments, or evidence) and (2) the prescribed fee, filed before payment of the issue fee, abandonment, or termination of proceedings. No new oath, no examiner authorization, and no unintentional-delay showing.",
    cite:"MPEP §706.07(h)"},

  {chapter:"700", topic:"RCE Eligibility",
    q:"A Request for Continued Examination is not available in which type of application?",
    choices:[
      "A national stage application entered under 35 U.S.C. 371",
      "A design application under 35 U.S.C. 171",
      "A nonprovisional utility application under 35 U.S.C. 111(a)",
      "A plant patent application under 35 U.S.C. 161"
    ], answer:1,
    explain:"RCEs are not available in design applications, provisional applications, applications already issued, or reexamination proceedings. Utility, national-stage, and plant applications all may use RCEs.",
    cite:"MPEP §706.07(h)(I)"},

  {chapter:"700", topic:"First-Action Final", highYield:true,
    q:"A first Office action in a continuation application may be made final when:",
    choices:[
      "The continuation was filed within three months of the parent's final rejection",
      "The applicant did not file an amendment along with the continuation",
      "All claims would have been properly finally rejected on the prior art of record in the parent",
      "The continuation adds claims not previously presented in the parent"
    ], answer:2,
    explain:"First-action final is proper in a continuation when the claims would have been properly finally rejected in the parent on the prior art of record. The other choices describe conditions that are neither sufficient nor required.",
    cite:"MPEP §706.07(b)"},

  {chapter:"700", topic:"Suspension of Action",
    q:"An applicant may request suspension of action under 37 CFR 1.103(a) for up to:",
    choices:[
      "Six months, upon showing of good and sufficient cause",
      "Three months, upon showing of sufficient cause",
      "Twelve months, upon payment of the suspension fee",
      "Three years, automatic upon request in a continuation"
    ], answer:0,
    explain:"1.103(a) allows up to six months of suspension for good and sufficient cause. 1.103(d) (different rule) allows up to three years in certain continuations filed under 1.53(b).",
    cite:"MPEP §709"},

  {chapter:"700", topic:"Petition to Revive", highYield:true, aia:"aia",
    q:"After implementation of the Patent Law Treaty, a petition to revive an abandoned application under 37 CFR 1.137(a) requires a showing that the entire delay was:",
    choices:[
      "Unintentional, accompanied by the petition, required reply, and petition fee",
      "Unavoidable despite reasonable diligence by the applicant",
      "Excusable in light of the circumstances giving rise to the abandonment",
      "Beyond the applicant's reasonable control, with supporting affidavit"
    ], answer:0,
    explain:"After the 2013 PLT implementation, the standard is 'unintentional' delay. 'Unavoidable' was the prior standard, abolished by the PLT. Choices C and D are fictional standards.",
    cite:"MPEP §711.03(c)"},

  {chapter:"700", topic:"Abandonment", highYield:true,
    q:"An application becomes abandoned for failure to reply when:",
    choices:[
      "The shortened statutory period (typically 3 months) expires without a reply",
      "The applicant fails to pay extension fees at the time of reply",
      "The examiner closes the file at the end of the SSP",
      "The full statutory period (typically 6 months) expires without a complete reply"
    ], answer:3,
    explain:"Abandonment occurs when the statutory period (typically six months) expires without a complete reply. The SSP itself does not abandon the application — extensions under 1.136(a) remain available up to the cap.",
    cite:"MPEP §711"},

  {chapter:"700", topic:"Bona Fide Attempt",
    q:"Applicant files a reply that addresses every ground of rejection but inadvertently fails to respond to an objection to the drawings. The examiner should:",
    choices:[
      "Enter the reply but make the next action final on the unresolved objection",
      "Treat the reply as a bona fide attempt and give time to correct the omission",
      "Treat the application as abandoned for an incomplete reply",
      "Hold the reply in abeyance until the applicant files a continuation"
    ], answer:1,
    explain:"A bona fide attempt with a minor omission may be treated under 37 CFR 1.135(c) — the examiner gives the applicant a one-month period (or remainder of SSP, whichever is longer) to correct the omission.",
    cite:"MPEP §714.03"},

  {chapter:"700", topic:"Examiner Interviews", highYield:true,
    q:"With respect to examiner interviews:",
    choices:[
      "Interviews are prohibited once the application has been allowed",
      "Pre-final interviews are generally as of right; post-final interviews are at the examiner's discretion",
      "Pre-final interviews require examiner approval; post-final interviews are as of right",
      "Both pre-final and post-final interviews are granted as a matter of right"
    ], answer:1,
    explain:"Once examination has begun, pre-final interviews are generally granted as of right. After final rejection, interviews are at the examiner's discretion. Allowance does not bar interviews entirely.",
    cite:"MPEP §713.09"},

  {chapter:"700", topic:"Interview Summary",
    q:"After a substantive examiner interview, an interview summary must be:",
    choices:[
      "Prepared by the applicant only when the interview resolves all outstanding issues",
      "Prepared by both the examiner and the applicant in every substantive interview",
      "Prepared by the examiner; applicant must also file one if the interview was before first OA",
      "Filed by the applicant only if no examiner summary is included in the file"
    ], answer:2,
    explain:"Examiner prepares a summary for every substantive interview. Applicant must also file a summary if the interview occurred BEFORE the first Office action or the examiner did not attach a summary.",
    cite:"MPEP §713.04"},

  {chapter:"700", topic:"New Matter", highYield:true,
    q:"An amendment introduces subject matter not described in the original disclosure. The proper response is:",
    choices:[
      "Allow the amendment but issue an objection requiring an affidavit of support",
      "Refuse entry as new matter and require deletion or filing of a CIP",
      "Allow the amendment if it is supported by an inventor declaration",
      "Allow the amendment and treat the new disclosure as part of the specification"
    ], answer:1,
    explain:"35 U.S.C. 132(a) bars new matter. The amendment is not entered. To add new matter, a continuation-in-part must be filed.",
    cite:"MPEP §608.04"},

  {chapter:"700", topic:"IDS Timing — Free Window", highYield:true,
    q:"Without paying any fee or filing any statement, an Information Disclosure Statement is timely if filed:",
    choices:[
      "Within three months of the U.S. application's filing date, regardless of OA status",
      "At any time during pendency, so long as the references are non-cumulative",
      "Before payment of the issue fee, regardless of when references were known",
      "Within three months of the U.S. filing date OR before first OA on the merits, whichever is later"
    ], answer:3,
    explain:"37 CFR 1.97(b) — IDS is considered without fee or statement if filed within 3 months of the U.S. filing date OR before the first OA on the merits, whichever is LATER. After that, fees and/or statements are required.",
    cite:"MPEP §609.04(b)"},

  {chapter:"700", topic:"IDS After Allowance",
    q:"An IDS submitted after a Notice of Allowance but before issue-fee payment is considered if applicant:",
    choices:[
      "Files the IDS list alone — no fee or statement is required after allowance",
      "Petitions the Director for late submission with the petition fee",
      "Files the 1.97(e) statement and pays the 1.17(p) fee, or withdraws from issue via RCE",
      "Submits the IDS together with an inventor's declaration of materiality"
    ], answer:2,
    explain:"Post-NOA, the IDS is considered if filed with a 1.97(e) statement plus 1.17(p) fee, or by withdrawing from issue (typically by RCE) and resubmitting the IDS during continued examination.",
    cite:"MPEP §609.04(b)"},

  {chapter:"700", topic:"Affidavits After Final",
    q:"Applicant files a Rule 1.132 declaration after final rejection. The declaration:",
    choices:[
      "Is entered as a matter of right under 37 CFR 1.116(a), as with any timely reply",
      "Is entered when no new issue is raised and the case is placed in condition for allowance",
      "Is held in abeyance until applicant requests continued examination under 1.114",
      "Is treated as a request for reconsideration under 37 CFR 1.181 to the Director"
    ], answer:1,
    explain:"After final, evidence is governed by 1.116(b) — entered only if it raises no new issue, requires no further search, and either places the case in condition for allowance or shows why it was not earlier presented.",
    cite:"MPEP §715.09"},

  {chapter:"700", topic:"Notice of Allowance — Issue Fee", highYield:true,
    q:"The issue fee period following a Notice of Allowance is:",
    choices:[
      "One month, with payment due no later than the date of formal allowance",
      "Six months, extendable upon a showing of sufficient cause under 1.136(b)",
      "Three months, non-extendable; failure to pay results in abandonment",
      "Three months, extendable in one-month increments under 37 CFR 1.136(a)"
    ], answer:2,
    explain:"35 U.S.C. 151 — the issue fee is due within 3 months of the NOA mailing date and the period is NON-EXTENDABLE. Failure to pay = abandonment.",
    cite:"MPEP §1306"},

  {chapter:"700", topic:"Examiner's Amendment",
    q:"An examiner's amendment to place the application in condition for allowance is proper when:",
    choices:[
      "The application has at least one independent claim allowed of record",
      "The applicant has authorized the changes, typically by interview",
      "The examiner has independently determined the amendment is in the applicant's interest",
      "The amendment is filed by the applicant on the same day as the NOA"
    ], answer:1,
    explain:"Examiner's amendments require applicant authorization (usually documented via interview summary or written authorization). The examiner cannot unilaterally amend.",
    cite:"MPEP §1302.04"},

  {chapter:"700", topic:"Restriction in Practice", highYield:true,
    q:"After a restriction requirement, applicant must elect one invention to obtain examination. The election:",
    choices:[
      "May be made with or without traverse; election is required either way",
      "Must be made without traverse to preserve later prosecution rights",
      "May be deferred until the first reply on the merits is due",
      "Must be made with traverse if a divisional is anticipated"
    ], answer:0,
    explain:"Election is mandatory to obtain examination. May be with or without traverse — with traverse preserves the right to petition the restriction under 1.144 (provided the requirement is later made final).",
    cite:"MPEP §818"},

  {chapter:"700", topic:"Petition to Review Restriction",
    q:"To petition the propriety of a restriction requirement that has been made final, applicant must have:",
    choices:[
      "Elected with traverse and petitioned under 1.144 within two months of the final action",
      "Cancelled all non-elected claims before petitioning",
      "Filed a divisional application within two months of the restriction being made final",
      "Filed a reply continuing to argue the restriction was improper"
    ], answer:0,
    explain:"To preserve the right to petition under 37 CFR 1.144, applicant must have elected with traverse and timely file the petition (generally within 2 months of the action making the restriction final).",
    cite:"MPEP §818.03"},

  {chapter:"700", topic:"Reopening Prosecution",
    q:"After an appeal brief has been filed, the examiner may reopen prosecution to issue a new ground of rejection:",
    choices:[
      "Without any supervisor approval, as a matter of examiner discretion",
      "Only after the Patent Trial and Appeal Board has remanded the application",
      "With approval of the supervisor (TC Director or SPE)",
      "Only by filing a request for rehearing with the Board"
    ], answer:2,
    explain:"Reopening prosecution to add a new ground requires supervisor approval (TC Director or SPE). It is not the examiner's unilateral choice and does not require Board involvement.",
    cite:"MPEP §1207.04"},

  {chapter:"700", topic:"Ex Parte Quayle Action",
    q:"An Ex parte Quayle action is issued when:",
    choices:[
      "The application has been allowed and the issue fee is now due",
      "All claims are allowable but formal matters remain to be addressed",
      "The examiner requires further information under 37 CFR 1.105",
      "All claims have been finally rejected and the applicant is preparing to appeal"
    ], answer:1,
    explain:"A Quayle action closes prosecution on the merits — only formal matters (drawings, oath, formal claim issues) remain. Two-month SSP, extendable.",
    cite:"MPEP §714.14"},

  {chapter:"700", topic:"Reply Brief Timing",
    q:"A reply brief responding to an Examiner's Answer must be filed within:",
    choices:[
      "Sixty days from the Examiner's Answer, non-extendable under any circumstances",
      "Two months from the Examiner's Answer, extendable for cause under 1.136(a)",
      "Two months from the Examiner's Answer, generally non-extendable under the rules",
      "Three months from the Examiner's Answer, extendable in one-month increments"
    ], answer:2,
    explain:"Reply brief is due 2 months from the Examiner's Answer and is generally non-extendable, with limited exceptions for new grounds of rejection in the answer.",
    cite:"MPEP §1208"},

  {chapter:"600", topic:"Filing Date — Nonprovisional", highYield:true, aia:"aia",
    q:"For a nonprovisional utility application filed today, an immediate filing date is accorded upon receipt of:",
    choices:[
      "Specification, claims, oath, drawings if needed, and the basic filing fee",
      "Specification and any necessary drawings; claims, oath, and fees may follow with surcharge",
      "Specification, at least one claim, and any necessary drawings — no oath required",
      "Specification, claims, and drawings, with the oath filed within one month"
    ], answer:1,
    explain:"Under PLT-implementing changes, a U.S. nonprovisional gets a filing date with a specification and any necessary drawings. Claims, oath, and fees can be supplied later (with surcharge) following a notice.",
    cite:"MPEP §601.01(a)"},

  {chapter:"600", topic:"Filing Date — Provisional",
    q:"A provisional application receives a filing date when applicant submits:",
    choices:[
      "Specification, any necessary drawings, and the cover sheet identifying it as provisional",
      "Specification, at least one claim, and any necessary drawings",
      "Specification, oath, and the basic provisional filing fee",
      "Specification only — claims, oath, and fees may all be deferred"
    ], answer:0,
    explain:"A provisional needs a §112(a)-compliant specification, any necessary drawings, and a cover sheet identifying it as provisional with inventor information. No claim is required; no oath required.",
    cite:"MPEP §601.01(b)"},

  {chapter:"600", topic:"§112(a) Specification Components", highYield:true,
    q:"35 U.S.C. 112(a) requires the specification to satisfy all of the following EXCEPT:",
    choices:[
      "Written description of the invention",
      "Enablement of one of ordinary skill to make and use the invention",
      "Industrial applicability of the claimed invention",
      "Best mode contemplated by the inventor for carrying out the invention"
    ], answer:2,
    explain:"§112(a) requires written description, enablement, and best mode. 'Industrial applicability' is a European/PCT concept, not a U.S. §112 requirement (the U.S. analog is §101 utility).",
    cite:"MPEP §608.01"},

  {chapter:"600", topic:"Drawings", highYield:true,
    q:"Drawings are required in a utility application when:",
    choices:[
      "The claims recite specific physical dimensions or proportions",
      "The invention contains any mechanical or structural elements",
      "They are necessary for the understanding of the subject matter sought to be patented",
      "The applicant chooses to include them in support of any claim limitation"
    ], answer:2,
    explain:"35 U.S.C. 113 — drawings are required only where necessary for understanding the invention. Many chemical and process inventions need none. Drawings cannot cure §112(a) defects in the specification.",
    cite:"MPEP §608.02"},

  {chapter:"600", topic:"Color Drawings",
    q:"To submit color drawings in a utility application, applicant must provide:",
    choices:[
      "An affidavit from the inventor that the color is material to patentability",
      "A petition explaining necessity, the petition fee, three sets of drawings, and a specification statement",
      "A statement in the specification acknowledging color and three sets of color drawings",
      "A request that the Office substitute black-and-white halftones at publication"
    ], answer:1,
    explain:"37 CFR 1.84(a)(2) — color drawings require (1) a petition explaining why color is necessary, (2) the petition fee, (3) three sets of drawings, and (4) a statement in the specification acknowledging color.",
    cite:"MPEP §608.02(VII)"},

  {chapter:"600", topic:"Independent vs. Dependent Claims", highYield:true,
    q:"An independent claim is a claim that:",
    choices:[
      "Stands on its own without reference to any other claim",
      "Appears before any dependent claim in the claim listing",
      "Refers to and further limits another claim in the application",
      "Recites only structural, not functional, limitations"
    ], answer:0,
    explain:"An independent claim does not refer to any other claim. A dependent claim refers to and further limits another claim. Whether limitations are functional or structural, and ordering within the listing, is irrelevant.",
    cite:"MPEP §608.01(n)"},

  {chapter:"600", topic:"Multiple Dependent Claims", highYield:true,
    q:"Which is NOT permitted under 35 U.S.C. 112(e) for multiple dependent claims?",
    choices:[
      "Further limiting only one of the referenced claims",
      "Referring to multiple preceding claims cumulatively (e.g., 'claims 1 and 2')",
      "Being counted as multiple claims for fee purposes",
      "Referring to multiple preceding claims in the alternative"
    ], answer:1,
    explain:"§112(e) requires multiple-dependent claims to reference other claims 'in the alternative only' — never cumulatively. They also cannot serve as a basis for another multiple-dependent claim. For fees, each claim referenced counts separately.",
    cite:"MPEP §608.01(n)"},

  {chapter:"600", topic:"Jepson Claim",
    q:"A claim drafted in Jepson form typically uses the transition phrase:",
    choices:[
      "Wherein the improvement comprises",
      "Comprising the steps of",
      "Consisting essentially of",
      "Characterized in that"
    ], answer:0,
    explain:"Jepson format recites the prior art in the preamble and transitions to the inventive contribution with 'wherein the improvement comprises.' The preamble is treated as an admission of prior art.",
    cite:"MPEP §2129"},

  {chapter:"600", topic:"Oath / Declaration", highYield:true, aia:"aia",
    q:"Under the AIA, the inventor's oath or declaration may be postponed until:",
    choices:[
      "The publication date under 35 U.S.C. 122(b)",
      "The first Office action on the merits is mailed",
      "The application is otherwise in condition for allowance",
      "Three months after the filing date, with surcharge"
    ], answer:2,
    explain:"AIA §4 — the inventor's oath/declaration may be filed as late as when the application is otherwise in condition for allowance (issue fee due). A surcharge applies if filed after the original filing date.",
    cite:"MPEP §602"},

  {chapter:"600", topic:"Substitute Statement", aia:"aia",
    q:"A substitute statement under 37 CFR 1.64 may be filed in lieu of an inventor's oath when the inventor:",
    choices:[
      "Lives outside the United States and cannot sign in person",
      "Has assigned the entire interest to a corporation that has assumed prosecution",
      "Is deceased, legally incapacitated, cannot be reached after diligent effort, or refuses to sign",
      "Has not yet been formally retained by the attorney prosecuting the application"
    ], answer:2,
    explain:"1.64 substitute statements are permitted only when the inventor is deceased, legally incapacitated, refuses, or cannot be reached after diligent effort. Foreign residence and unrelated logistical issues are not grounds.",
    cite:"MPEP §604"},

  {chapter:"600", topic:"Power of Attorney",
    q:"A power of attorney executed by the assignee of the entire interest is effective when:",
    choices:[
      "The chain of assignment is recorded or made of record under 37 CFR 3.71/3.73",
      "Each inventor has also signed an individual power of attorney",
      "The examiner verifies the assignee's interest in writing",
      "The assignee is a U.S. entity with a federal tax identification number"
    ], answer:0,
    explain:"37 CFR 3.71 and 3.73 — an assignee of the entire interest may take over prosecution and execute the power of attorney, provided the assignment is recorded or otherwise established of record.",
    cite:"MPEP §402.07"},

  {chapter:"600", topic:"Small Entity Status", highYield:true,
    q:"To qualify for small entity status under 37 CFR 1.27, the applicant must be:",
    choices:[
      "An independent inventor, small business (<500 employees), or nonprofit, with no rights conveyed to a non-small entity",
      "A sole inventor with no rights conveyed to any other person or entity",
      "A U.S. resident with annual revenue under one million dollars",
      "A business entity with fewer than 25 employees and no foreign subsidiaries"
    ], answer:0,
    explain:"Small entity = independent inventor, small business (<500 employees per SBA), or nonprofit, with no rights conveyed (assigned, licensed, or under obligation) to a non-small entity. No residency, revenue, or subsidiary tests.",
    cite:"MPEP §509.02"},

  {chapter:"600", topic:"Micro Entity Status",
    q:"To qualify for micro entity status under 37 CFR 1.29(a), the applicant must qualify as small entity AND:",
    choices:[
      "Have ≤4 previously filed applications, gross income ≤3× median household income, no transfer to a higher-income entity",
      "Be a first-time filer who has not previously claimed small entity status",
      "Be a sole inventor with no prior patent applications of any kind",
      "Be a U.S. nonprofit or university with annual revenue under $1 million"
    ], answer:0,
    explain:"1.29(a): small entity qualification + ≤4 previously filed applications (excluding provisionals, foreign apps, and PCT apps not entering U.S.) + gross income ≤3× median household income + no transfer of rights to a higher-income entity. (1.29(d) has a separate university-employment basis.)",
    cite:"MPEP §509.04"},

  {chapter:"600", topic:"Sequence Listings",
    q:"WIPO Standard ST.26 XML sequence listings are required for applications filed on or after July 1, 2022 that disclose:",
    choices:[
      "Nucleotide or amino acid sequences claimed or disclosed in the specification",
      "Sequences only when an independent claim requires them",
      "Any biological material referenced in the specification",
      "Sequences in chemical compositions of pharmaceutical products"
    ], answer:0,
    explain:"ST.26 applies to applications disclosing nucleotide or amino acid sequences. Failure to comply can affect filing-date accordance or require additional submissions.",
    cite:"MPEP §608.05"},

  {chapter:"600", topic:"Incorporation by Reference",
    q:"Essential material may be incorporated by reference only from:",
    choices:[
      "Any source that is publicly available at the time of filing",
      "U.S. patents, U.S. published applications, or pending U.S. applications (with restrictions)",
      "Foreign patents, U.S. patents, and peer-reviewed journals",
      "Materials cited in the applicant's information disclosure statement"
    ], answer:1,
    explain:"Essential material may be incorporated only from U.S. patents, published U.S. applications, or pending U.S. applications (with restrictions). Non-essential material has broader sources.",
    cite:"MPEP §608.01(p)"},

  {chapter:"600", topic:"Application Data Sheet",
    q:"When the Application Data Sheet and the inventor's oath contain inconsistent bibliographic information, the controlling document is:",
    choices:[
      "The Application Data Sheet, except for information that must be in the oath",
      "The inventor's oath, as the sworn statement of record",
      "Whichever document was filed first, by date",
      "Neither — the examiner must require correction by petition"
    ], answer:0,
    explain:"37 CFR 1.76 — the ADS generally controls over the oath/declaration when they conflict, with limited exceptions for information that statute requires in the oath.",
    cite:"MPEP §601.05"},

  {chapter:"600", topic:"Reference Filing", aia:"aia",
    q:"Filing a nonprovisional application by reference under 37 CFR 1.57(a) is accomplished by:",
    choices:[
      "Filing the new application without any specification, claims, or drawings of its own",
      "Petitioning the Director for permission to file by reference, with fee",
      "Submitting the prior application's complete file wrapper at the time of filing",
      "Submitting a paper that identifies the previously filed application and states it is filed by reference"
    ], answer:3,
    explain:"1.57(a) reference filing — applicant submits a paper identifying the prior application and indicating filing by reference. A copy of the prior application must be furnished within a set time period to complete the filing.",
    cite:"MPEP §601.01(a)"},

  {chapter:"600", topic:"Non-English Filing",
    q:"A non-English-language nonprovisional application is accorded a filing date and then requires applicant to file:",
    choices:[
      "Only an English translation of the claims and abstract within two months",
      "A new application in English claiming priority to the foreign-language filing",
      "An English translation, a statement of accuracy, and the late-translation surcharge",
      "A petition to convert the application to a U.S. nonprovisional in English"
    ], answer:2,
    explain:"Non-English applications get a filing date. Applicant must then furnish an English translation of the entire application, a statement of translator accuracy, and pay the surcharge for late submission.",
    cite:"MPEP §601.01(d)"},

  {chapter:"200", topic:"Provisional Lifespan", highYield:true,
    q:"A provisional application:",
    choices:[
      "Remains pending indefinitely until applicant elects to convert it",
      "Is examined on the merits at the applicant's request",
      "Is automatically abandoned 18 months after filing, the same as publication timing",
      "Is automatically abandoned 12 months after filing and may not be revived to extend"
    ], answer:3,
    explain:"A provisional auto-abandons at 12 months and cannot be revived to extend that period. It is never examined. Benefit must be preserved by filing a nonprovisional or PCT within 12 months.",
    cite:"MPEP §201.04"},

  {chapter:"200", topic:"Provisional Limits",
    q:"Which is NOT permitted in a provisional application?",
    choices:[
      "A cover sheet identifying it as a provisional application",
      "Drawings necessary for the understanding of the invention",
      "One or more claims, although none are required",
      "A claim of priority to an earlier foreign or U.S. application"
    ], answer:3,
    explain:"A provisional cannot claim priority/benefit of any earlier application — provisional, nonprovisional, foreign, or PCT. Claims, drawings, and the cover sheet are all permitted.",
    cite:"MPEP §201.04(III)"},

  {chapter:"200", topic:"Continuation", highYield:true,
    q:"A continuation application under 35 U.S.C. 120 must:",
    choices:[
      "Be filed within twelve months of the parent's filing date",
      "Add at least one new claim not present in the parent application",
      "Be filed before patenting, abandonment, or termination of the parent",
      "Name a different inventor than the parent application"
    ], answer:2,
    explain:"§120 requires co-pendency — filed while the parent is still pending. No twelve-month deadline; no different-inventor requirement; no new-claim requirement.",
    cite:"MPEP §201.07"},

  {chapter:"200", topic:"Continuation-in-Part", highYield:true,
    q:"A CIP differs from a continuation in that the CIP:",
    choices:[
      "Cannot claim the benefit of the parent under 35 U.S.C. 120",
      "Adds new matter; claims supported only by the new matter get the CIP's filing date",
      "Must be filed within six months of the parent application's filing date",
      "Receives the earliest priority date for all its claims, regardless of new matter"
    ], answer:1,
    explain:"A CIP adds new matter. Claims fully supported by the parent retain the parent's effective date; claims supported only by new matter get the CIP's filing date. CIPs can and do claim §120 benefit.",
    cite:"MPEP §201.08"},

  {chapter:"200", topic:"Divisional", highYield:true,
    q:"The §121 safe harbor protects a divisional application from:",
    choices:[
      "Restriction requirements directed to the divisional's claims",
      "Loss of priority benefit if the parent is later abandoned",
      "Obviousness-type double patenting based on the parent's claims",
      "Any §103 rejection based on the parent's published disclosure"
    ], answer:2,
    explain:"§121 safe harbor: a divisional filed as a result of a restriction requirement is shielded from double-patenting rejections based on the patent issuing from the parent. Does not shield from §103 generally.",
    cite:"MPEP §201.06"},

  {chapter:"200", topic:"§120 Domestic Benefit", highYield:true, aia:"aia",
    q:"To claim the benefit of an earlier-filed nonprovisional under 35 U.S.C. 120, the later application must:",
    choices:[
      "Be filed by the same sole inventor named in the earlier application",
      "Claim the same invention as the earlier application, without any new claims",
      "Be co-pending, name at least one common inventor, and make a specific reference in an ADS",
      "Be filed within twelve months of the earlier application's filing date"
    ], answer:2,
    explain:"§120 requires (1) co-pendency, (2) at least one common inventor (or applicant), and (3) a specific reference to the prior application — in the ADS for applications filed on or after September 16, 2012.",
    cite:"MPEP §211"},

  {chapter:"200", topic:"§119(a) Foreign Priority", highYield:true,
    q:"To claim Paris Convention priority under 35 U.S.C. 119(a) in a U.S. utility application, the U.S. application must be filed within:",
    choices:[
      "Six months of the foreign filing, with a certified copy filed within twelve months",
      "The pendency period of the foreign application, with no fixed deadline",
      "Eighteen months of the foreign filing, the same as publication timing",
      "Twelve months of the foreign filing — six months for design applications"
    ], answer:3,
    explain:"Paris Convention priority: 12 months for utility applications; 6 months for designs. Choice A inverts the design and utility rule.",
    cite:"MPEP §213"},

  {chapter:"200", topic:"Priority Restoration", aia:"aia",
    q:"A U.S. nonprovisional filed thirteen months after the foreign priority application may still claim priority if:",
    choices:[
      "Filed within fourteen months and the delay was unintentional, with petition and fee",
      "The foreign office grants a corresponding extension of the priority period",
      "Filed within eighteen months and the delay was unavoidable",
      "Restoration is not available; the priority claim is lost"
    ], answer:0,
    explain:"37 CFR 1.55(c) — priority may be restored if the application is filed within 2 months of the 12-month deadline (i.e., within 14 months total) and the delay was unintentional, with petition and fee.",
    cite:"MPEP §213.03"},

  {chapter:"200", topic:"§119(e) Provisional Benefit Timing", aia:"aia",
    q:"For an application filed on or after September 16, 2012, the specific reference required for a §119(e) provisional benefit claim must be made within:",
    choices:[
      "Eighteen months of the provisional application's filing date",
      "Twelve months of the provisional application's filing date",
      "Four months of the U.S. filing date OR 16 months from the provisional, whichever is later",
      "Two months of the U.S. application's filing date"
    ], answer:2,
    explain:"37 CFR 1.78 — the benefit claim must be made within 4 months of the actual filing date or 16 months from the provisional filing, whichever is later. Must appear in the ADS.",
    cite:"MPEP §211.02"},

  {chapter:"200", topic:"Correction of Inventorship",
    q:"To correct inventorship in a pending nonprovisional application, applicant submits:",
    choices:[
      "A petition to the Director, a corrected ADS, and the processing fee under 37 CFR 1.48",
      "A new oath signed by the corrected inventive entity",
      "An amendment to the cover letter and a small entity declaration",
      "A continuation application naming the correct inventors"
    ], answer:0,
    explain:"37 CFR 1.48 — request to correct inventorship in a nonprovisional uses a corrected ADS identifying the changes plus the processing fee. No new oath is required in most cases.",
    cite:"MPEP §602.01(c)"},

  {chapter:"1200", topic:"Right to Appeal", highYield:true,
    q:"An applicant has the right to appeal to the PTAB once any claim has been:",
    choices:[
      "Rejected three times, with at least one rejection final",
      "Twice rejected, regardless of whether the rejection is final",
      "Finally rejected, then maintained over an after-final amendment",
      "Rejected at least once, regardless of whether the rejection is final"
    ], answer:1,
    explain:"35 U.S.C. 134 — appeal is available after any claim has been twice rejected. Finality of the second rejection is not required.",
    cite:"MPEP §1204"},

  {chapter:"1200", topic:"Notice of Appeal Timing", highYield:true,
    q:"A notice of appeal must be filed within:",
    choices:[
      "Two months of any final rejection, regardless of the original SSP set",
      "Six months of any rejection, with the period being non-extendable",
      "One month of the action being appealed, extendable to two months for cause",
      "The period for reply to the most recent OA (typically 3 months, extendable to 6)"
    ], answer:3,
    explain:"Notice of appeal is due within the period for reply to the most recent Office action — usually 3 months, extendable under 1.136(a) up to the 6-month statutory cap.",
    cite:"MPEP §1204"},

  {chapter:"1200", topic:"Appeal Brief Deadline", highYield:true,
    q:"The appeal brief must be filed within:",
    choices:[
      "Two months from the notice of appeal, non-extendable",
      "Two months from the notice of appeal, extendable under 1.136(a)",
      "Three months from the notice of appeal, extendable under 1.136(a)",
      "The remainder of the original period for reply to the appealed action"
    ], answer:1,
    explain:"Appeal brief is due 2 months from the date of the notice of appeal, extendable under 1.136(a).",
    cite:"MPEP §1205"},

  {chapter:"1200", topic:"Pre-Appeal Brief Request",
    q:"A pre-appeal brief request for review must be filed:",
    choices:[
      "Concurrently with the notice of appeal, limited to five pages of argument",
      "Only after the examiner issues an answer to the previously filed appeal brief",
      "After the appeal brief has been filed, as a request for reconsideration",
      "Within two months of the notice of appeal, limited to ten pages of argument"
    ], answer:0,
    explain:"Pre-appeal brief request for review is filed concurrently with the notice of appeal — limited to 5 pages of argument. Can resolve clear errors before full briefing.",
    cite:"MPEP §1204.02"},

  {chapter:"1200", topic:"Post-Brief Examiner Options",
    q:"After receiving the appeal brief, the examiner may take any of the following actions EXCEPT:",
    choices:[
      "Allow the application without further substantive examination",
      "Issue a new final rejection of the appealed claims without supervisor approval",
      "Reopen prosecution with TC Director or SPE approval to add a new ground",
      "Issue an Examiner's Answer setting forth the position on appeal"
    ], answer:1,
    explain:"After the brief, the examiner may (1) allow, (2) issue an examiner's answer, or (3) reopen prosecution (with TC Director or SPE approval). The examiner cannot unilaterally issue a new final rejection without supervisor approval.",
    cite:"MPEP §1207"},

  {chapter:"1200", topic:"New Ground in Examiner's Answer",
    q:"If the Examiner's Answer designates a new ground of rejection, applicant must, within two months (non-extendable), either:",
    choices:[
      "File a request for continued examination, or proceed directly to the Federal Circuit",
      "Reopen prosecution by submitting an amendment/evidence, or maintain the appeal addressing the new ground",
      "Pay the appeal forwarding fee, or request oral argument before the PTAB",
      "File a reply brief, or file a petition for reconsideration to the Director"
    ], answer:1,
    explain:"On a new ground in the Examiner's Answer, applicant has 2 months (non-extendable) to either (a) reopen prosecution with an amendment/evidence or (b) maintain the appeal by submitting a reply brief addressing the new ground.",
    cite:"MPEP §1207.03"},

  {chapter:"1200", topic:"Reply Brief", highYield:true,
    q:"A reply brief responding to an Examiner's Answer must be filed within:",
    choices:[
      "Sixty days from the Examiner's Answer, non-extendable",
      "Two months from the Examiner's Answer, extendable under 1.136(a)",
      "Two months from the Examiner's Answer, generally non-extendable",
      "Three months from the Examiner's Answer, extendable"
    ], answer:2,
    explain:"Reply brief is due 2 months from the Examiner's Answer and is generally non-extendable.",
    cite:"MPEP §1208"},

  {chapter:"1200", topic:"PTAB New Ground (41.50(b))",
    q:"If the PTAB issues a new ground of rejection in its decision, applicant has two months to:",
    choices:[
      "Appeal the new ground directly to the U.S. Court of Appeals for the Federal Circuit",
      "Pay an appeal forwarding fee and request reconsideration by an expanded PTAB panel",
      "Request that the new ground be withdrawn by petition under 37 CFR 1.181",
      "Reopen prosecution with an amendment or evidence, OR request rehearing on the existing record"
    ], answer:3,
    explain:"37 CFR 41.50(b) — on a Board new ground, applicant has 2 months to (1) reopen prosecution by submitting an amendment/evidence, or (2) request rehearing on the existing record.",
    cite:"MPEP §1214.01"},

  {chapter:"1200", topic:"Request for Rehearing",
    q:"A request for rehearing of a PTAB decision must be filed within:",
    choices:[
      "Two months of the PTAB decision, extendable for good cause",
      "Thirty days of the decision, non-extendable",
      "Sixty days of the decision, non-extendable",
      "Six months of the PTAB decision, non-extendable"
    ], answer:0,
    explain:"37 CFR 41.52 — request for rehearing is due 2 months from the PTAB decision, extendable for good cause.",
    cite:"MPEP §1214.03"},

  {chapter:"1200", topic:"After PTAB Reversal",
    q:"Following a PTAB reversal of all pending rejections, the examiner may:",
    choices:[
      "Allow the case only if the Board specifically directs allowance",
      "Issue a notice of allowance only — reopening is no longer permitted",
      "Reopen prosecution unilaterally without supervisor approval",
      "Issue a notice of allowance, or reopen prosecution with TC Director approval on a new ground"
    ], answer:3,
    explain:"After a reversal, examiner may (a) issue a NOA or (b) reopen prosecution if a new ground of rejection is warranted, with TC Director or SPE approval.",
    cite:"MPEP §1214.04"},

  {chapter:"1800", topic:"International Filing Date", highYield:true,
    q:"To accord an international filing date under PCT Article 11, the application must include all EXCEPT:",
    choices:[
      "Payment of the international filing fee and the international search fee",
      "Designation of at least one Contracting State (now automatic upon filing)",
      "An indication that the application is intended as an international application",
      "The name of an applicant entitled to file, and a description and at least one claim"
    ], answer:0,
    explain:"For an international filing date you need an indication, an entitled applicant, a description and claim(s), and a designation (now automatic). Fees can be paid later.",
    cite:"MPEP §1810"},

  {chapter:"1800", topic:"U.S. National Phase", highYield:true,
    q:"To enter the U.S. national stage under 35 U.S.C. 371 from a PCT application, applicant must do so within:",
    choices:[
      "Twenty months from the earliest priority date",
      "Thirty-one months from the earliest priority date",
      "Thirty months from the earliest priority date",
      "Thirty months from the international filing date"
    ], answer:2,
    explain:"U.S. national stage entry is 30 months from the earliest priority date. Some PCT offices use 31 months; the U.S. does not. Choice D incorrectly substitutes filing date for priority date.",
    cite:"MPEP §1893"},

  {chapter:"1800", topic:"Demand for Chapter II", highYield:true,
    q:"A Demand for international preliminary examination (PCT Chapter II) must be filed within:",
    choices:[
      "Three months from transmittal of the ISR/WO OR 22 months from priority, whichever is later",
      "Three months from the international filing date",
      "Twenty months from the earliest priority date",
      "Twenty-two months from the international filing date"
    ], answer:0,
    explain:"PCT Rule 54bis — Demand is due 3 months from ISR/Written Opinion transmittal OR 22 months from priority, whichever is LATER.",
    cite:"MPEP §1864"},

  {chapter:"1800", topic:"USPTO as Receiving Office",
    q:"A U.S. resident filing a PCT application with the USPTO as Receiving Office:",
    choices:[
      "May not — the USPTO does not accept PCT filings from U.S. residents",
      "May do so only after the corresponding U.S. national application has been allowed",
      "Must obtain a foreign filing license before submission, in every case",
      "May do so — though inventions made in the U.S. require a foreign filing license before any foreign filing"
    ], answer:3,
    explain:"U.S. residents/nationals may file with USPTO as Receiving Office. Inventions made in the U.S. require a foreign filing license under §184 before being filed abroad — typically granted automatically on a U.S. filing receipt.",
    cite:"MPEP §1805"},

  {chapter:"1800", topic:"Foreign Filing License", highYield:true,
    q:"A foreign filing license under 35 U.S.C. 184 is required when:",
    choices:[
      "Any applicant residing anywhere files a patent application outside the U.S.",
      "An invention was made in the U.S. and is to be filed abroad before the applicable waiting period expires",
      "An applicant intends to claim Paris Convention priority from a U.S. filing",
      "An applicant has previously filed any PCT application designating the U.S."
    ], answer:1,
    explain:"§184 — inventions made in the U.S. require a foreign filing license before foreign filing. The 6-month period after U.S. filing serves as an automatic license absent a secrecy order.",
    cite:"MPEP §140"},

  {chapter:"1800", topic:"PCT Priority Restoration",
    q:"A PCT application filed thirteen months after a priority application may have priority restored by the Receiving Office if:",
    choices:[
      "Restoration is not available in any PCT receiving office",
      "Filed within fifteen months and the delay was unavoidable",
      "The IB grants restoration after substantive examination",
      "Filed within fourteen months and the delay was unintentional, with petition and fee (at USPTO/RO)"
    ], answer:3,
    explain:"PCT Rule 26bis.3 — restoration available within 2 months of the 12-month deadline. USPTO/RO applies the 'unintentional' standard; some other ROs apply 'due care.'",
    cite:"MPEP §1828.01"},

  {chapter:"1800", topic:"Article 19 Amendments",
    q:"Under PCT Article 19, applicant may amend:",
    choices:[
      "The description, claims, and drawings, filed with the Receiving Office",
      "Any part of the application, filed at any time before national-stage entry",
      "The claims only, filed with the International Bureau, within 2 months of ISR transmittal or 16 months from priority (later)",
      "The claims and abstract, filed with the International Searching Authority"
    ], answer:2,
    explain:"Article 19 amendments are CLAIMS ONLY, filed with the International Bureau, within 2 months of ISR transmittal or 16 months from priority — whichever is later.",
    cite:"MPEP §1853"},

  {chapter:"1800", topic:"Article 34 Amendments",
    q:"Article 34 amendments differ from Article 19 amendments in that Article 34 amendments may amend:",
    choices:[
      "Only the abstract, filed with the International Bureau before national-stage entry",
      "Only the parts of the description corresponding to amended claims, under PCT Rule 66",
      "The description, claims, and drawings, during Chapter II preliminary examination",
      "Only the claims, the same scope of amendment as PCT Article 19 allows"
    ], answer:2,
    explain:"During Chapter II preliminary examination (after a Demand), applicant may amend description, claims, and drawings under Article 34 — broader than Article 19's claims-only scope.",
    cite:"MPEP §1871"},

  {chapter:"1800", topic:"National Stage Search Fee",
    q:"The U.S. national stage search fee may be reduced when:",
    choices:[
      "The application has fewer than twenty total claims and three independent claims",
      "The applicant pays the basic national fee within twenty months of priority",
      "The USPTO was the ISA for the international application, or another accepted ISA prepared the ISR",
      "The applicant qualifies as a small entity, regardless of the ISA"
    ], answer:2,
    explain:"Search-fee reductions apply when USPTO was the ISA or when another ISA's ISR is accepted by USPTO. Small entity affects amount but not the underlying basis for reduction.",
    cite:"MPEP §1893.01(c)"},

  {chapter:"1800", topic:"Bypass Continuation",
    q:"A 'bypass' application is best described as:",
    choices:[
      "A U.S. nonprovisional under §111(a) claiming §365(c) benefit of a PCT — an alternative to §371 entry",
      "A divisional filed in response to a unity-of-invention requirement in a PCT",
      "A reissue application correcting errors in a national-stage U.S. patent",
      "A continuation filed in a PCT national-stage application after entry"
    ], answer:0,
    explain:"A 'bypass' is a §111(a) U.S. nonprovisional claiming §365(c) benefit of a PCT, used as an alternative procedural route to §371 entry — useful for various reasons (e.g., to use U.S.-style claim drafting).",
    cite:"MPEP §1895"},

  {chapter:"800", topic:"Restriction Standard", highYield:true,
    q:"A proper restriction requirement under 35 U.S.C. 121 must demonstrate that the claimed inventions are:",
    choices:[
      "Drawn to different statutory categories (e.g., apparatus vs. method)",
      "Independent and distinct, and that a serious examination burden exists",
      "Independent or distinct, regardless of examination burden",
      "Supported by different working examples in the specification"
    ], answer:1,
    explain:"§121 plus U.S. practice requires (1) independent AND distinct inventions and (2) a serious burden on the examiner if forced to examine them together.",
    cite:"MPEP §803"},

  {chapter:"800", topic:"Election Mechanics", highYield:true,
    q:"After a restriction requirement, applicant must elect one invention for examination. The election:",
    choices:[
      "Must be made with traverse, in order to preserve any later challenge",
      "May be deferred until the first Office action on the merits is mailed",
      "Must be made without traverse, otherwise prosecution stalls",
      "May be made with or without traverse; election is required either way"
    ], answer:3,
    explain:"Election is required to proceed. May be with or without traverse — with traverse preserves the right to petition the restriction if later made final.",
    cite:"MPEP §818"},

  {chapter:"800", topic:"Election by Original Presentation",
    q:"After election of an invention and an Office action on the elected claims, applicant adds a new claim drawn to a non-elected invention. The examiner may:",
    choices:[
      "Enter the claim and proceed to examine all elected and non-elected claims",
      "Require applicant to file a divisional application immediately",
      "Reject the claim as new matter under 35 U.S.C. 132(a)",
      "Require election by original presentation — applicant must elect or cancel the new claim"
    ], answer:3,
    explain:"Election by original presentation — when a later-added claim is drawn to a non-elected or different invention, the examiner may require its election or cancellation under MPEP §821.03.",
    cite:"MPEP §821.03"},

  {chapter:"800", topic:"Rejoinder of Species",
    q:"After election of species, if a generic claim linking the species is found allowable, the examiner generally:",
    choices:[
      "Holds the non-elected species claims in abeyance until issue",
      "Requires applicant to file a divisional for the non-elected species",
      "Cancels the non-elected species claims as withdrawn",
      "Rejoins the non-elected species claims for examination on the merits"
    ], answer:3,
    explain:"Rejoinder — when a linking generic claim is allowable, non-elected species claims linked by that claim may be rejoined for examination.",
    cite:"MPEP §821.04"},

  {chapter:"1400", topic:"Reissue Basis", highYield:true, aia:"aia",
    q:"A reissue application under 35 U.S.C. 251 requires that the original patent be:",
    choices:[
      "Owned in its entirety by the original named inventor",
      "Subject to a pending validity challenge in district court",
      "Within 18 months of its grant date for any kind of reissue",
      "Wholly or partly inoperative or invalid through error"
    ], answer:3,
    explain:"§251 requires error rendering the patent wholly or partly inoperative or invalid. The AIA removed the prior 'without deceptive intention' language. Broadening reissue has a 2-year window; narrowing reissue has no time limit.",
    cite:"MPEP §1402"},

  {chapter:"1400", topic:"Broadening Reissue", highYield:true,
    q:"A broadening reissue must be applied for within:",
    choices:[
      "Two years of the original patent's grant date",
      "The patent's enforceability period, with no fixed deadline",
      "Eighteen months of the original patent's grant date",
      "Five years of the original patent's grant date"
    ], answer:0,
    explain:"35 U.S.C. 251(d) — broadening reissue must be applied for within 2 years from the patent's grant date. Narrowing reissue has no deadline.",
    cite:"MPEP §1412.03"},

  {chapter:"1400", topic:"Reissue Oath",
    q:"The reissue oath or declaration must identify:",
    choices:[
      "At least one error being relied upon as the basis for reissue",
      "The intent to broaden, narrow, or otherwise modify the claims",
      "Every error in the patent, with supporting evidence",
      "The specific district court litigation prompting the reissue"
    ], answer:0,
    explain:"Reissue oath/declaration must identify at least one error being corrected — a complete listing is not required.",
    cite:"MPEP §1414"},

  {chapter:"1400", topic:"Certificate of Correction",
    q:"A Certificate of Correction under 35 U.S.C. 254-255 is appropriate for:",
    choices:[
      "Broadening claims to recover surrendered subject matter",
      "Inventorship corrections after a federal court order",
      "Office mistakes or minor applicant errors not requiring further examination",
      "Resolving substantive §103 errors discovered after grant"
    ], answer:2,
    explain:"Certificate of Correction addresses Office mistakes (free) or minor applicant errors (with fee) not requiring new examination. Broadening or substantive issues require reissue.",
    cite:"MPEP §1480"},

  {chapter:"1400", topic:"Disclaimer",
    q:"A statutory disclaimer under 35 U.S.C. 253:",
    choices:[
      "Disclaims the terminal portion of the patent's term to overcome ODP",
      "Disclaims one or more claims of an issued patent",
      "Disclaims the patent's geographic enforcement rights",
      "Disclaims the patent's foreign counterparts and continuations"
    ], answer:1,
    explain:"Statutory disclaimer (253) disclaims one or more claims. Terminal disclaimer (different mechanism) disclaims the terminal part of the term — used to cure obviousness-type double patenting.",
    cite:"MPEP §1490"},

  {chapter:"1400", topic:"Recapture Rule",
    q:"The recapture rule prevents reissue from being used to:",
    choices:[
      "Recover subject matter intentionally surrendered to obtain the original patent",
      "Recover subject matter that was the basis for a §112(a) rejection",
      "Add any claims broader than the original patent's broadest claim",
      "Add new matter not present in the original disclosure"
    ], answer:0,
    explain:"Recapture: a patentee cannot use reissue (especially broadening reissue) to recover subject matter that was intentionally surrendered during prosecution — typically by narrowing amendment or argument to overcome prior art.",
    cite:"MPEP §1412.02"},

  {chapter:"2700", topic:"Utility Patent Term",
    q:"A utility patent's term is generally:",
    choices:[
      "Twenty years measured from the patent's grant date",
      "Twenty years measured from the earliest U.S. nonprovisional or §365(c) PCT filing date",
      "Twenty years measured from the earliest claimed priority, including provisionals",
      "Seventeen years measured from the patent's grant date"
    ], answer:1,
    explain:"§154(a)(2) — 20 years from the earliest effective U.S. nonprovisional filing date (or §365(c) PCT). Provisionals do NOT count toward term calculation. 17-from-grant was the pre-1995 rule.",
    cite:"MPEP §2701"},

  {chapter:"2700", topic:"Patent Term Adjustment", highYield:true,
    q:"Patent Term Adjustment compensates for which of the following USPTO delays?",
    choices:[
      "Failure to meet statutory milestones (A), 3-year pendency (B), and interferences/appeals/secrecy (C)",
      "Foreign-prosecution delay in counterpart applications, where USPTO acted as the ISA",
      "Maintenance-fee processing delay attributable to the Office (Type A delay)",
      "Reduction of term attributable to a terminal disclaimer filed during prosecution"
    ], answer:0,
    explain:"§154(b) — A delay (statutory milestones like 14-month first action), B delay (3-year pendency), C delay (interferences, appeals, secrecy). Applicant delays reduce PTA.",
    cite:"MPEP §2731"},

  {chapter:"2700", topic:"Patent Term Extension",
    q:"Patent Term Extension under 35 U.S.C. 156 applies to:",
    choices:[
      "Software patents subject to extended PTO examination delay",
      "Any patent whose owner files an extension petition within 60 days of grant",
      "Products subject to FDA or other regulatory review, up to 5 years extension",
      "Design patents that have been litigated through the Federal Circuit"
    ], answer:2,
    explain:"§156 (Hatch-Waxman) — applies to drugs, medical devices, food/color additives, etc. subject to regulatory review. Up to 5 years extension, total post-approval term ≤ 14 years.",
    cite:"MPEP §2750"},

  {chapter:"1500", topic:"Design Term",
    q:"The term of a design patent issued from an application filed on or after May 13, 2015 is:",
    choices:[
      "Fifteen years from the patent's grant date",
      "Fourteen years from the patent's grant date",
      "Twenty years from the application's filing date",
      "Twenty years from the earliest U.S. nonprovisional priority"
    ], answer:0,
    explain:"Hague Agreement implementation — 15 years from issue for design applications filed on or after May 13, 2015. Earlier-filed designs: 14 years from issue. Designs are not subject to the 20-year utility term.",
    cite:"MPEP §1505"},

  {chapter:"1500", topic:"Design Priority",
    q:"The Paris Convention priority period for design applications is:",
    choices:[
      "Six months from the earliest foreign design filing",
      "Twelve months from the earliest foreign design filing",
      "Six months from a foreign utility filing covering the same article",
      "Eighteen months from the earliest foreign design filing"
    ], answer:0,
    explain:"6 months for design (vs. 12 months for utility). Priority is from the earliest design filing; cross-type priority (design from utility, etc.) has its own rules.",
    cite:"MPEP §1504.10"},

  {chapter:"1500", topic:"Design Drawings",
    q:"Design patent drawings must show:",
    choices:[
      "Sufficient views to fully disclose the ornamental appearance of the article",
      "All structural functions performed by the claimed article",
      "Manufacturing tolerances and material specifications",
      "Both the ornamental appearance and at least one functional embodiment"
    ], answer:0,
    explain:"Design drawings define the design — they must include all views necessary to fully disclose the ornamental appearance with appropriate surface shading. Function is not the design subject matter.",
    cite:"MPEP §1503.02"},

  {chapter:"1600", topic:"Plant Patent Scope",
    q:"A plant patent under 35 U.S.C. 161 protects a plant variety that is:",
    choices:[
      "Any new and distinct plant, regardless of how reproduced",
      "Sexually reproduced and stable across multiple generations",
      "Asexually reproduced, distinct, and new, excluding tuber-propagated and uncultivated wild plants",
      "Genetically modified through laboratory-controlled techniques only"
    ], answer:2,
    explain:"§161 — asexually reproduced, distinct, and new variety, including cultivated sports and hybrids, but EXCLUDING tuber-propagated plants and plants found in an uncultivated state.",
    cite:"MPEP §1601"},

  {chapter:"2000", topic:"Duty of Disclosure", highYield:true,
    q:"The duty of disclosure under 37 CFR 1.56 extends to:",
    choices:[
      "Each named inventor and the prosecuting attorney of record only",
      "Each assignee, the assignee's officers, and any in-house counsel of the assignee",
      "Anyone with knowledge of the invention, including consultants who reviewed pre-filing drafts",
      "Each inventor, each attorney or agent, and each person substantively involved in preparation or prosecution"
    ], answer:3,
    explain:"1.56(c) — inventors, attorneys/agents, and others substantively involved in preparation or prosecution. Continues throughout pendency.",
    cite:"MPEP §2001"},

  {chapter:"2000", topic:"Materiality",
    q:"Under 37 CFR 1.56(b), information is material to patentability when it is:",
    choices:[
      "Cumulative of information already cited in the prosecution history",
      "Reasonably related to the field of endeavor of the claimed invention",
      "Cited in any reexamination or post-grant proceeding involving the same field",
      "Non-cumulative and either establishes a prima facie case of unpatentability OR is inconsistent with applicant's position"
    ], answer:3,
    explain:"1.56(b) materiality: non-cumulative AND either (i) establishes prima facie unpatentability alone or in combination, or (ii) refutes/inconsistent with applicant's position.",
    cite:"MPEP §2001.05"},

  {chapter:"2200", topic:"Ex Parte Reexam Requester", highYield:true,
    q:"A request for ex parte reexamination may be filed by:",
    choices:[
      "Anyone, including the patent owner or any third party, anytime during enforceability",
      "Only the patent owner, after the patent has been challenged",
      "Only third parties with standing to sue under the patent",
      "Only the original prosecuting attorney of record"
    ], answer:0,
    explain:"35 U.S.C. 302 — anyone may request ex parte reexam during the patent's enforceability period. Based on patents or printed publications raising a substantial new question of patentability.",
    cite:"MPEP §2209"},

  {chapter:"2200", topic:"Reexam Threshold",
    q:"The threshold the Office uses to order ex parte reexamination is:",
    choices:[
      "Reasonable likelihood that the requester would prevail (the PTAB IPR standard)",
      "Preponderance of the evidence against patentability",
      "Clear and convincing evidence of invalidity",
      "Substantial new question of patentability"
    ], answer:3,
    explain:"SNQ — substantial new question of patentability — is the ex parte reexam threshold. RLP (reasonable likelihood of prevailing) is the IPR threshold at the PTAB.",
    cite:"MPEP §2242"},

  {chapter:"2500", topic:"Maintenance Schedule", highYield:true,
    q:"Maintenance fees for utility patents are due at:",
    choices:[
      "Annual installments measured from the application's filing date",
      "4 and 8 and 12 years after issuance, payable in advance",
      "5 and 10 years after issuance, with no grace period",
      "3.5, 7.5, and 11.5 years after issuance, with a 6-month grace period (with surcharge)"
    ], answer:3,
    explain:"3.5, 7.5, and 11.5 years after grant; six-month grace period with surcharge. Failure to pay = lapse.",
    cite:"MPEP §2506"},

  {chapter:"2500", topic:"No-Maintenance Patents",
    q:"Maintenance fees are NOT required for:",
    choices:[
      "Utility patents whose claims have been amended during a reissue proceeding",
      "Patents that result from a PCT application entering the U.S. national stage",
      "Patents that have been subject to a terminal disclaimer with a parent patent",
      "Design and plant patents, regardless of the application's filing date"
    ], answer:3,
    explain:"Only utility patents require maintenance fees. Design and plant patents do not — regardless of origin or any disclaimer.",
    cite:"MPEP §2504"},

  {chapter:"100", topic:"Secrecy Order",
    q:"A secrecy order under 35 U.S.C. 181:",
    choices:[
      "Issues only at the applicant's request, to protect competitive sensitive material",
      "Has no effect on the application's status or examination",
      "Imposes a maximum 12-month limit on prosecution suspension",
      "Withholds grant and restricts disclosure when publication might harm national security"
    ], answer:3,
    explain:"Secrecy orders restrict disclosure and withhold grant when publication might be detrimental to national security. Reviewed periodically; can be renewed.",
    cite:"MPEP §120"},

  {chapter:"300", topic:"Recordation",
    q:"An assignment is void against a subsequent bona fide purchaser without notice unless it is recorded at the USPTO:",
    choices:[
      "Before issuance of the patent in which the rights are claimed",
      "Within six months of execution, or before publication of the application",
      "Within one year of the assignor's execution of the document",
      "Within three months of execution, or before the date of the subsequent purchase"
    ], answer:3,
    explain:"35 U.S.C. 261 — to defeat a subsequent BFP, the prior assignment must be recorded within 3 months of execution OR before the subsequent purchase.",
    cite:"MPEP §302"},

  {chapter:"400", topic:"Practitioner Role",
    q:"A registered patent agent (non-attorney practitioner) may:",
    choices:[
      "Represent applicants before the USPTO and provide opinions on contract enforceability",
      "Represent applicants before the USPTO in patent matters but not give general legal advice",
      "Practice before state courts in patent infringement litigation",
      "Sign declarations under penalty of perjury on behalf of the inventor"
    ], answer:1,
    explain:"Patent agents may practice before the USPTO in patent matters but cannot give general legal advice or represent in court. Patent attorneys (also barred in a state) may give legal advice and practice in court.",
    cite:"MPEP §402"},

  {chapter:"500", topic:"Certificate of Mailing",
    q:"A Certificate of Mailing under 37 CFR 1.8 gives a paper the filing-date credit of the date deposited in U.S. mail, but is NOT available for:",
    choices:[
      "Information disclosure statements containing references",
      "Petitions filed under 37 CFR 1.181",
      "New patent applications and certain other listed documents",
      "Replies to Office actions filed by First-Class Mail"
    ], answer:2,
    explain:"1.8 excludes new applications, national-stage entries, and certain other documents — for those, use Priority Mail Express under 1.10 (or e-file).",
    cite:"MPEP §512"},

  {chapter:"500", topic:"Priority Mail Express",
    q:"Filing under 37 CFR 1.10 (Priority Mail Express) gives the paper the filing date of:",
    choices:[
      "Whichever is later: deposit date or USPTO mailroom date stamp",
      "The actual date of receipt at the USPTO",
      "The next business day after the date of deposit",
      "The date of deposit with the USPS, including for new applications"
    ], answer:3,
    explain:"1.10 — date of deposit becomes the filing/receipt date. Unlike 1.8, this method is available for new applications and items 1.8 excludes.",
    cite:"MPEP §513"},

  {chapter:"900", topic:"Classification",
    q:"The USPTO's primary patent classification system is:",
    choices:[
      "The Cooperative Patent Classification (CPC), jointly developed with the EPO",
      "The U.S. Patent Classification (USPC) system, retained as the official system",
      "The International Patent Classification (IPC) used in PCT applications only",
      "An internal locarno-based system used for design applications only"
    ], answer:0,
    explain:"CPC is the primary classification system used by USPTO since 2015, replacing USPC for primary classification.",
    cite:"MPEP §905"},

  {chapter:"1000", topic:"Petitions Timing",
    q:"A petition to the Director under 37 CFR 1.181 must generally be filed within:",
    choices:[
      "One month from the action complained of, non-extendable",
      "Anytime during the application's pendency",
      "Six months from the action complained of, extendable for good cause",
      "Two months from the action complained of (default time)"
    ], answer:3,
    explain:"1.181(f) — petitions are generally due within 2 months of the mailing date of the action or notice complained of, unless statute or rule provides otherwise.",
    cite:"MPEP §1002"},

  {chapter:"1100", topic:"Publication",
    q:"A U.S. nonprovisional utility application is generally published:",
    choices:[
      "Immediately upon filing, unless the applicant designates it confidential at filing",
      "Promptly after eighteen months from the earliest priority or filing date claimed",
      "Concurrently with the Notice of Allowance, in the same Official Gazette issue",
      "Only after the patent has issued, when the public file becomes accessible"
    ], answer:1,
    explain:"35 U.S.C. 122(b) — publication 18 months from earliest priority/filing, unless a nonpublication request is filed at filing (and no foreign filing thereafter).",
    cite:"MPEP §1120"},

  {chapter:"1100", topic:"Nonpublication Request",
    q:"A nonpublication request under §122(b)(2)(B) requires:",
    choices:[
      "Examiner approval supported by a showing that the disclosure constitutes trade-secret material",
      "Filing at the time of application with a certification that no foreign filing will be made requiring publication",
      "Cancellation of any claim that has been published in a related foreign-counterpart application",
      "A petition under 37 CFR 1.182 with the petition fee, filed within three months of filing"
    ], answer:1,
    explain:"Nonpublication request must be filed at the time of filing with a certification that the application has not been and will not be the subject of a foreign filing requiring publication. If a foreign filing later occurs, notify USPTO within 45 days or risk abandonment.",
    cite:"MPEP §1122"},

  {chapter:"1300", topic:"Issue Fee", highYield:true,
    q:"The issue fee following a Notice of Allowance must be paid within:",
    choices:[
      "Three months of the NOA mailing date, non-extendable under any circumstance",
      "Six months of the NOA mailing date, non-extendable, per 35 U.S.C. 151",
      "One month of the NOA mailing date, extendable for good cause shown",
      "Three months of the NOA mailing date, extendable under 37 CFR 1.136(a)"
    ], answer:0,
    explain:"35 U.S.C. 151 — issue fee is due within 3 months of the NOA mailing date, NON-EXTENDABLE. Failure to pay = abandonment.",
    cite:"MPEP §1306"},

  {chapter:"1300", topic:"Withdrawal from Issue",
    q:"After payment of the issue fee but before issuance, an application may be withdrawn from issue:",
    choices:[
      "Only by order of the Patent Trial and Appeal Board after rehearing",
      "Automatically, upon submission of a written request by the applicant of record",
      "Only if the assignment has not yet been recorded with the USPTO",
      "By petition under 1.313(c) for specified reasons (e.g., new prior art, mistake, RCE)"
    ], answer:3,
    explain:"1.313(c) — withdrawal from issue requires petition with specified reasons: new prior art making claims unpatentable, mistake in inventorship, to permit RCE, or to permit reexamination.",
    cite:"MPEP §1308"},

  {chapter:"1900", topic:"Protest",
    q:"A protest under 37 CFR 1.291 by a third party may be filed:",
    choices:[
      "Only with the consent of the applicant or assignee of record",
      "Only after publication has occurred, with copies of the references",
      "Anytime before the patent issues, with petition and fee",
      "Before publication of the application or the Notice of Allowance, whichever is earlier"
    ], answer:3,
    explain:"1.291 — protest must be filed before the earlier of publication OR Notice of Allowance. Includes copies and concise explanation of relevance.",
    cite:"MPEP §1901"},

  {chapter:"2300", topic:"Derivation", aia:"aia",
    q:"AIA derivation proceedings under 35 U.S.C. 135 must be petitioned for filing within:",
    choices:[
      "One year of the earlier publication or issuance of the derived claim",
      "Two years of the derived patent's grant date",
      "Six months of the earlier publication of the derived claim",
      "Eighteen months of the AIA application's filing date"
    ], answer:0,
    explain:"AIA derivation petition window: 1 year from the earlier publication of the derived claim. Replaces pre-AIA interferences for AIA-era applications. Heard by PTAB.",
    cite:"MPEP §2310"},

  {chapter:"2400", topic:"Biological Deposit",
    q:"A biological deposit may be required to support enablement when:",
    choices:[
      "Written disclosure alone would not enable skilled artisans to obtain or use the invention without undue experimentation",
      "The organism has been characterized in any publicly available database",
      "The application discloses any biotechnology subject matter at all",
      "The applicant intends to claim methods of using the organism"
    ], answer:0,
    explain:"Biological deposits are required to satisfy §112(a) enablement when the written disclosure is insufficient to enable skilled artisans to make/use the invention.",
    cite:"MPEP §2402"},

  {chapter:"2800", topic:"Supplemental Examination", aia:"aia",
    q:"Supplemental examination under 35 U.S.C. 257 is a procedure available to:",
    choices:[
      "Only the original applicant, before the patent has issued",
      "Any party, but limited to patents or printed publications",
      "Third parties challenging a patent's validity on any ground",
      "Only the patent owner, to consider/reconsider/correct information; if SNQ found, ex parte reexam follows"
    ], answer:3,
    explain:"§257 (post-AIA) is patentee-initiated. Allows the patentee to ask the Office to consider information; if SNQ found, the Office orders ex parte reexamination. Can immunize against inequitable conduct.",
    cite:"MPEP §2801"},

  {chapter:"2900", topic:"Hague International Designs", aia:"aia",
    q:"An international design application under the Hague Agreement filed with the USPTO as an office of indirect filing:",
    choices:[
      "Is examined only by the USPTO in all designated Contracting Parties",
      "Provides a 14-year U.S. design term regardless of filing date",
      "Is forwarded to WIPO and may designate multiple Contracting Parties, including the U.S.",
      "Cannot designate the United States as one of the Contracting Parties"
    ], answer:2,
    explain:"Hague international design applications may be filed indirectly via USPTO; the IB processes them and the application may designate multiple Contracting Parties. The USPTO examines U.S. designations.",
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

window.MPEP_HIGH_YIELD = ["2100","700","600","1200","1800"];

// ─────────────────────────── DEADLINE & NUMBER FLASHCARDS ───────────────────────────
window.MPEP_DEADLINES = [
  {q:"Statutory maximum period for reply to an Office Action", a:"6 months (35 U.S.C. 133). Never more, regardless of extensions.", cite:"MPEP §710.02", chapter:"700"},
  {q:"Typical Shortened Statutory Period (SSP) for non-final OA", a:"3 months, extendable in 1-month increments under 1.136(a) up to the 6-month cap.", cite:"MPEP §710.02", chapter:"700"},
  {q:"SSP for an Ex Parte Quayle action", a:"2 months, extendable under 1.136(a).", cite:"MPEP §714.14", chapter:"700"},
  {q:"Issue fee period after Notice of Allowance", a:"3 months — NON-EXTENDABLE. Miss it = abandonment.", cite:"MPEP §1306", chapter:"1300"},
  {q:"Provisional application auto-abandons", a:"12 months after filing. Cannot be revived to extend.", cite:"MPEP §201.04", chapter:"200"},
  {q:"Paris Convention priority — utility", a:"12 months from earliest foreign filing.", cite:"MPEP §213", chapter:"200"},
  {q:"Paris Convention priority — design", a:"6 months from earliest foreign filing.", cite:"MPEP §1504.10", chapter:"1500"},
  {q:"Priority restoration deadline after missing 12-month Paris window", a:"Within 2 months of the 12-month deadline, with petition + fee + 'unintentional' statement.", cite:"MPEP §213.03 / 37 CFR 1.55(c)", chapter:"200"},
  {q:"§119(e) provisional benefit claim — deadline to add", a:"4 months from actual filing date OR 16 months from provisional filing, whichever is LATER (for post-9/16/2012 apps).", cite:"MPEP §211.02", chapter:"200"},
  {q:"U.S. national stage entry deadline (PCT)", a:"30 months from earliest priority date. NOT 31.", cite:"MPEP §1893", chapter:"1800"},
  {q:"PCT Demand (Chapter II) deadline", a:"3 months from ISR/Written Opinion transmittal OR 22 months from priority, whichever is LATER.", cite:"MPEP §1864", chapter:"1800"},
  {q:"PCT Article 19 amendment deadline", a:"2 months from ISR transmittal OR 16 months from priority, whichever is LATER. Claims ONLY.", cite:"MPEP §1853", chapter:"1800"},
  {q:"PCT priority restoration deadline", a:"Within 2 months of the 12-month deadline. USPTO/RO uses 'unintentional' standard.", cite:"MPEP §1828.01", chapter:"1800"},
  {q:"Foreign filing license — automatic timing", a:"6 months after U.S. filing (absent secrecy order); license is automatic if no secrecy order issued.", cite:"MPEP §140", chapter:"100"},
  {q:"Notice of Appeal deadline", a:"Period for reply to most recent OA — typically 3 months, extendable up to 6.", cite:"MPEP §1204", chapter:"1200"},
  {q:"Appeal Brief deadline", a:"2 months from Notice of Appeal, extendable under 1.136(a).", cite:"MPEP §1205", chapter:"1200"},
  {q:"Reply Brief deadline (after Examiner's Answer)", a:"2 months from Examiner's Answer — generally NON-EXTENDABLE.", cite:"MPEP §1208", chapter:"1200"},
  {q:"Deadline to respond to new ground of rejection in Examiner's Answer", a:"2 months — NON-EXTENDABLE. Either reopen prosecution or maintain appeal as to the new ground.", cite:"MPEP §1207.03", chapter:"1200"},
  {q:"Deadline after PTAB issues a new ground of rejection (41.50(b))", a:"2 months — reopen prosecution with amendment/evidence OR request rehearing on the existing record.", cite:"MPEP §1214.01", chapter:"1200"},
  {q:"Request for rehearing of PTAB decision", a:"2 months from PTAB decision (37 CFR 41.52).", cite:"MPEP §1214.03", chapter:"1200"},
  {q:"Broadening reissue deadline", a:"Within 2 YEARS of the original patent's grant date. Narrowing reissue has no deadline.", cite:"MPEP §1412.03", chapter:"1400"},
  {q:"Petition under 37 CFR 1.181 deadline", a:"2 months from the action complained of (default).", cite:"MPEP §1002", chapter:"1000"},
  {q:"Petition to revive (1.137) standard", a:"'Unintentional' delay + petition + fee + required reply (post-PLT, 2013).", cite:"MPEP §711.03(c)", chapter:"700"},
  {q:"Assignment recordation — to take priority over BFP", a:"Within 3 months of execution OR before subsequent purchase.", cite:"MPEP §302", chapter:"300"},
  {q:"Utility patent term", a:"20 years from earliest U.S. nonprovisional filing (or §365(c) PCT). Provisionals do NOT count.", cite:"MPEP §2701", chapter:"2700"},
  {q:"Design patent term (apps filed ≥ May 13, 2015)", a:"15 years from issue.", cite:"MPEP §1505", chapter:"1500"},
  {q:"Design patent term (apps filed before May 13, 2015)", a:"14 years from issue.", cite:"MPEP §1505", chapter:"1500"},
  {q:"Maintenance fee due dates (utility)", a:"3.5, 7.5, and 11.5 years after issue. 6-month grace period with surcharge.", cite:"MPEP §2506", chapter:"2500"},
  {q:"Design and plant patents — maintenance fees?", a:"NONE. Only utility patents pay maintenance fees.", cite:"MPEP §2504", chapter:"2500"},
  {q:"PTE maximum (35 U.S.C. 156)", a:"Up to 5 years extension. Total post-approval term ≤ 14 years.", cite:"MPEP §2750", chapter:"2700"},
  {q:"IDS — free filing window (no fee, no statement)", a:"Within 3 months of U.S. filing date OR before first OA on the merits, whichever is LATER.", cite:"MPEP §609.04(b)", chapter:"700"},
  {q:"IDS after Notice of Allowance", a:"Either 1.97(e) statement + 1.17(p) fee, OR withdraw from issue (typically via RCE).", cite:"MPEP §609.04(b)", chapter:"700"},
  {q:"Petition to challenge restriction (37 CFR 1.144)", a:"Within 2 months of the action making restriction final. Must have elected with traverse.", cite:"MPEP §818.03", chapter:"800"},
  {q:"Pre-grant publication timing", a:"Promptly after 18 months from earliest priority/filing.", cite:"MPEP §1120", chapter:"1100"},
  {q:"Foreign-filing notice after rescinded non-publication", a:"45 days from foreign filing — else application is abandoned.", cite:"MPEP §1122", chapter:"1100"},
  {q:"Threshold for ordering ex parte reexamination", a:"Substantial New Question of patentability (SNQ). Based ONLY on patents or printed publications.", cite:"MPEP §2242", chapter:"2200"},
  {q:"Threshold for IPR/PGR (PTAB)", a:"Reasonable Likelihood of Prevailing (RLP).", cite:"AIA §6", chapter:"2200"},
  {q:"Small entity — employee threshold", a:"Fewer than 500 employees, no rights conveyed to non-small entity.", cite:"MPEP §509.02", chapter:"600"},
  {q:"Micro entity — application history threshold", a:"≤4 previously filed applications (provisionals, foreign, and PCT-not-entering-US excluded).", cite:"MPEP §509.04", chapter:"600"},
  {q:"Micro entity — income threshold", a:"Gross income ≤ 3× median household income. (Alternative: university employment basis.)", cite:"MPEP §509.04", chapter:"600"},
  {q:"AIA effective date (FITF system)", a:"March 16, 2013. Apps with effective filing date on/after this are AIA; earlier are pre-AIA.", cite:"AIA §3", chapter:"2100"},
  {q:"Derivation proceeding filing window", a:"Within 1 year of the earlier publication of the derived claim.", cite:"MPEP §2310", chapter:"2300"},
  {q:"Standard claim fee threshold (over X claims)", a:"More than 3 independent or more than 20 total claims triggers excess claim fees.", cite:"37 CFR 1.16", chapter:"600"},
  {q:"Multiple dependent claim — fee treatment", a:"Each claim referenced by an MDC counts separately for fee purposes.", cite:"MPEP §608.01(n)", chapter:"600"},
];

// ─────────────────────────── MPEP LOOKUP DRILL ───────────────────────────
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

// Quick-reference study notes per chapter
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
