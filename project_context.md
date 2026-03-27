# Project context

Use this for **background, people, and decisions** that are not strictly “requirements” but change how you build (tone, pace, risk tolerance, what “done” means). Read alongside `PRD.md` and `design.md`. Replace placeholders when you spin up a new app from the template.

---

## Project identity

**What belongs here:** Working name, public codename if any, and one line on what this repo is (so someone opening it cold understands the frame).

**Content:**

{{ project_identity }}

---

## Stakeholders & decision-making

**What belongs here:** Who cares about the outcome, who can say “ship it,” and how you resolve disagreements (especially in a tiny team: founder + designer-dev + occasional advisor).

**Content:**

{{ stakeholders_and_decisions }}

---

## Timeline & milestones

**What belongs here:** Target dates or phases (e.g. demo, user test, “quiet launch”), and what “good enough” means at each step — not a Gantt fantasy; enough to avoid building the wrong thing first.

**Content:**

{{ timeline_and_milestones }}

---

## Local-first & technical posture

**What belongs here:** Default architecture choices for this product: offline behavior, sync strategy (none / optional / later), stack alignment with the repo (Next, Supabase local, etc.), and anything you are **not** optimizing for yet (e.g. multi-tenant, scale).

**Content:**

{{ local_first_and_technical_posture }}

---

## Brand, voice & design direction

**What belongs here:** How the product should *feel* (not only visuals): voice (direct, playful, clinical), references to avoid, and pointers to `design.md` for tokens. Enough that UI work stays coherent without a full brand deck.

**Content:**

{{ brand_voice_and_design_direction }}

---

## User research & evidence so far

**What belongs here:** What you have actually learned from users (interviews, prototypes, support tickets) vs hypotheses still untested. Keeps the team honest about evidence vs conviction.

**Content:**

{{ user_research_and_evidence }}

---

## Key decisions log

**What belongs here:** Dated bullets: decision → short rationale → optional “revisit if…”. Complements `CHANGELOG.md` (which tracks repo changes); this tracks **product/engineering** forks in the road.

**Content:**

{{ key_decisions_log }}

---

## Risks & dependencies

**What belongs here:** What could kill or delay the project (technical, legal, third-party APIs, founder bandwidth) and external dependencies you do not control.

**Content:**

{{ risks_and_dependencies }}

---

## Working agreements

**What belongs here:** How the team works day to day: async vs sync, where decisions live (this file vs issues vs chat), and definition of “ready to build” for a task.

**Content:**

{{ working_agreements }}

---

## Glossary & terms

**What belongs here:** Domain terms, product-specific names, and abbreviations so docs and code use the same language.

**Content:**

{{ glossary_and_terms }}
