---
layout: archive
title: "FINCPA Compliance Data Pipeline"
permalink: /data-stories/fincpa-compliance-pipeline/
author_profile: true
---

{% include base_path %}

![SafeGuard AI end-to-end workflow](/images/data-stories/fincpa-compliance-pipeline/safeguard-ai-workflow.png)

FINCPA is a hackathon prototype for the **JB Financial Group Fin AI Challenge**. The proposed service is a financial-advertising compliance AI agent: a marketer or compliance reviewer enters customer-facing financial content, and the system checks whether the content may violate rule conditions derived from Korea's Financial Consumer Protection Act.

The important design choice is that the system does **not** ask a language model to directly decide compliance. Instead, it first converts official legal text into structured compliance data, freezes an MVP rule pack, maps the user input into a Structured Intermediate Representation (SIR), and lets a deterministic rule engine produce the first finding. The LLM is used later for explanation, reviewer guidance, and conservative rewrite suggestions.

<span class="page__taxonomy">
  <a href="#compliance" class="page__taxonomy-item" rel="tag">COMPLIANCE</a>
  <a href="#data-pipeline" class="page__taxonomy-item" rel="tag">DATA PIPELINE</a>
  <a href="#dashboard" class="page__taxonomy-item" rel="tag">DASHBOARD</a>
  <a href="#hackathon" class="page__taxonomy-item" rel="tag">HACKATHON</a>
</span>

## The Problem

Financial advertising review is slow because many checks are repetitive but still legally sensitive. A reviewer needs to know whether an ad identifies the seller, avoids prohibited certainty claims, includes required risk or cost disclosures, and preserves the right evidence for later audit.

The hackathon idea was to reduce that first-pass burden without hiding the reasoning. FINCPA turns compliance review into a traceable pipeline:

1. start from official legal source text,
2. parse it into clause-level records,
3. decompose clauses into obligations,
4. compile rules and SIR fields,
5. run deterministic checks on new content,
6. package citations and findings for human review.

## From Law to Data

![FINCPA compliance data lineage](/images/data-stories/fincpa-compliance-pipeline/data-lineage.svg)

The prototype focuses on Chapter 4 of the Financial Consumer Protection Act, especially customer-facing conduct and advertising-related obligations. The current repository documents the full path from source PDF to runtime review artifacts.

| Stage | Output | Count |
| --- | ---: | ---: |
| Deterministic parsing | Clause records | 60 |
| Layer 2 decomposition | Obligation units | 109 |
| Layer 3 compilation | Rule/SIR candidates | 109 |
| Layer 4 MVP freeze | Included MVP rules | 76 |
| Layer 4 schema | Frozen SIR fields | 29 |
| Runtime suite | Example review cases | 7 |

Layer 4 is the key moment. The earlier layers help interpret and prepare the legal material, but Layer 4 freezes the MVP rule pack using a deterministic selection rule. That makes the demo easier to explain: the system can show which legal clause produced which rule, which SIR field supports the check, and why a runtime input triggered a failure.

## Runtime Review

At runtime, a user input such as a loan, deposit, insurance, or investment advertisement is normalized into SIR fields. A simplified example looks like this:

```json
{
  "product_type": "loan",
  "seller_identity": "present",
  "loan_conditions": "present",
  "loan_rate_basis": "not_evidenced",
  "detected_patterns": ["guaranteed"]
}
```

The rule engine then compares the SIR profile with the frozen rule pack. If the ad shows a loan or cost signal but does not evidence required rate-basis or timing disclosures, the system can produce a non-compliant finding and attach the triggered legal basis.

The example suite includes cases for investment advertising, loan advertising, deposit disclaimers, insurance warnings, solicitation claims, and record-access workflows. Several examples intentionally fail so the dashboard can show missing SIR fields, failed rules, citations, and escalation status.

## Dashboards

The project includes two dashboard views:

- **Legal compilation dashboard:** shows the offline pipeline from parsed legal clauses through Layer 1, Layer 2, Layer 3, and the Layer 4 rule freeze.
- **Runtime flow dashboard:** shows a new input moving through runtime schema construction, SIR extraction, active rules, triggered law, and final deterministic result.

These dashboards were built to make the pipeline explainable during team discussion and judging. Instead of asking people to inspect many JSONL files, the dashboard lets them inspect the structure visually and trace a finding back to the legal source.

## What This Shows

FINCPA is a compliance-data project as much as an AI project. Its value is the disciplined structure:

- official source-first legal data,
- layered annotation and decomposition,
- rule pack and SIR schema compilation,
- deterministic first-pass review,
- LLM explanation after the rule decision,
- human approval and audit output at the end.

That structure avoids the common problem of using generative AI as an ungrounded legal decision maker. The model can help explain and rewrite, but the compliance finding comes from auditable rule data.

## Links

[Legal compilation dashboard](https://rashiedomar.github.io/FinTech/dashboard/ch4_fincpa/)  
[Runtime flow dashboard](https://rashiedomar.github.io/FinTech/dashboard/ch4_runtime_flow/)  
[GitHub repository](https://github.com/rashiedomar/FinTech)

## Downloads

[Download Layer 4 MVP rule pack CSV](/files/data-stories/fincpa-compliance-pipeline/layer4-mvp-rule-pack.csv)  
[Download Layer 4 MVP SIR schema JSON](/files/data-stories/fincpa-compliance-pipeline/layer4-mvp-sir-schema.json)  
[Download runtime example suite summary](/files/data-stories/fincpa-compliance-pipeline/runtime-example-suite-summary.md)
