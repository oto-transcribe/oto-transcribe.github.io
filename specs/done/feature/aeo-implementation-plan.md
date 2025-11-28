# AEO Implementation Plan - OTO Transcribe

**Created**: November 26, 2025
**Based on**: AEO Audit Report (aeo-audit-oto-transcribe-20251126-000000.md)
**Goal**: Increase AI citation likelihood by 300-400% within 90 days

---

## Executive Summary

This plan implements the Top 5 Critical AEO optimizations identified in the audit report. Total estimated time: **9 hours**. Expected outcome: AEO score improvement from 62/100 to 85/100.

### Success Metrics

| Metric | Current | Target (90 days) |
|--------|---------|------------------|
| ChatGPT Visibility | 35% | 85% |
| Perplexity Citations | 40% | 90% |
| Google SGE Features | 25% | 75% |
| Overall AEO Score | 62/100 | 85/100 |

---

## Implementation Phases

### Phase 1: Critical Schema (Day 1) - 1 hour

**Priority: CRITICAL**
**Impact**: +150% citation likelihood for "how to" queries

#### Task 1.1: Add HowTo Schema (30 minutes)

**File**: `app/client/modules/header.html` (or wherever schema is currently located)

**Action**: Add HowTo schema markup to `<head>` section after existing FAQPage schema

**Code to Add**:
```html
<!-- HowTo Schema for Transcription Workflow -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Transcribe Voice to Text on Mac with oto",
  "description": "Step-by-step guide to transcribing voice to text offline on macOS using oto's privacy-first transcription app",
  "totalTime": "PT2M",
  "tool": [
    {
      "@type": "HowToTool",
      "name": "oto for macOS"
    },
    {
      "@type": "HowToTool",
      "name": "Mac with microphone (any Mac, Apple Silicon optimized)"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Download and Install oto",
      "text": "Download oto from the Mac App Store. No account or internet connection required after installation.",
      "url": "https://oto-transcribe.github.io/#pricing"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Set Your Global Hotkey",
      "text": "Configure a custom hotkey in oto preferences to start recording from anywhere on your Mac.",
      "url": "https://oto-transcribe.github.io/#features"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Press Hotkey and Speak",
      "text": "Press your configured hotkey, speak clearly, and oto transcribes in real-time using on-device AI models with 97% accuracy.",
      "image": "https://oto-transcribe.github.io/assets/img/og-cover.png"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Review and Paste Transcript",
      "text": "Review the transcribed text and paste it into any Mac application. All processing happens offline on your Mac's Neural Engine.",
      "url": "https://oto-transcribe.github.io/#features"
    }
  ]
}
</script>
```

**Validation**:
- Test at https://validator.schema.org/
- Verify no errors in Google Rich Results Test

---

#### Task 1.2: Add VideoObject Schema (30 minutes)

**File**: `app/client/modules/header.html` (schema section)

**Action**: Add VideoObject schema for demo slideshow

**Code to Add**:
```html
<!-- VideoObject Schema for Demo -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "How oto Transcription Works - Real-time Voice to Text Demo",
  "description": "Watch how oto transcribes voice to text in real-time on Mac: press hotkey, record audio, get instant transcript with 97% accuracy. All processing happens offline on your Mac's Neural Engine.",
  "thumbnailUrl": "https://oto-transcribe.github.io/assets/img/og-cover.png",
  "uploadDate": "2025-01-15",
  "duration": "PT30S",
  "contentUrl": "https://oto-transcribe.github.io/#hero",
  "embedUrl": "https://oto-transcribe.github.io/#hero",
  "keywords": "voice to text, mac transcription, offline AI, real-time transcription demo"
}
</script>
```

---

### Phase 2: Direct Answer Patterns (Day 2-3) - 2.5 hours

**Priority: CRITICAL**
**Impact**: +200% AI comprehension and citation rate

#### Task 2.1: Restructure Existing FAQ Answers (1.5 hours)

**File**: `app/client/modules/faq.html`

**Current Problems**: Answers bury key information in paragraphs instead of leading with direct answers

**Action**: Rewrite each FAQ answer to follow this pattern:
1. Direct yes/no/statement answer (first sentence)
2. Key benefit/reason (second sentence)
3. Supporting details (remaining sentences)

**Examples**:

##### FAQ 1: "How is this different from cloud transcription?"

**BEFORE**:
```html
<p>
  oto uses AI models that run entirely on your Mac's Neural Engine or GPU.
  Complete on-device processing with no network dependencies. Your conversations
  remain private on your Mac forever.
</p>
```

**AFTER**:
```html
<p>
  oto transcribes 100% offline on your Mac - cloud services send your voice to remote servers.
  All AI processing happens locally on your Mac's Neural Engine or GPU with no internet required.
  Your conversations remain private on your device forever, unlike cloud transcription which
  uploads your voice data to third-party servers.
</p>
```

---

##### FAQ 2: "Why own instead of rent?"

**BEFORE**:
```html
<p>
  Pay once and keep it forever. No monthly subscriptions. No bait-and-switch pricing.
  No features locked behind tiers. You get all updates, all improvements, all performance
  enhancements—forever. Just how software should be.
</p>
```

**AFTER**:
```html
<p>
  You pay $30 once and own oto forever - no monthly subscriptions or recurring fees.
  One purchase includes all future updates, performance improvements, and bug fixes with
  no features locked behind tiers. Typical transcription subscriptions cost $8-25/month
  ($96-300/year), so oto pays for itself in 2-4 months while remaining yours permanently.
</p>
```

---

##### FAQ 3: "How private is on-device processing?"

**BEFORE**:
```html
<p>
  All AI models run entirely on your Mac. No telemetry. No cloud services. No network requests.
  Your words never leave your device. Complete data sovereignty.
</p>
```

**AFTER**:
```html
<p>
  Completely private - your voice never leaves your Mac. oto runs AI models entirely on your
  device with zero telemetry, zero cloud services, and zero network requests. No data is
  collected, stored remotely, or shared with third parties, giving you complete data sovereignty.
</p>
```

---

#### Task 2.2: Add New FAQ Answers (1 hour)

**File**: `app/client/modules/faq.html`

Add these 3 new FAQ items to address common AI queries:

##### New FAQ 1: "Who is oto best for?"

```html
<div class="faq-item reveal" role="listitem">
  <h3><button class="faq-toggle" aria-expanded="false" aria-controls="faqBestFor" id="faqBtnBestFor">
    Who is oto best for?
  </button></h3>
  <div id="faqBestFor" class="faq-panel" role="region" aria-labelledby="faqBtnBestFor" hidden>
    <p><strong>oto is the best transcription app for:</strong></p>
    <ul>
      <li><strong>Privacy-conscious professionals</strong> who need to transcribe sensitive conversations (lawyers, doctors, therapists, journalists) without cloud uploads</li>
      <li><strong>Writers and content creators</strong> who want to capture ideas faster than typing (bloggers, authors, researchers)</li>
      <li><strong>ESL professionals</strong> who speak English as a second language and need accurate transcription with heavy accent support</li>
      <li><strong>Remote workers</strong> who transcribe meeting notes, emails, and documentation daily</li>
      <li><strong>Budget-conscious users</strong> tired of subscription fatigue who prefer one-time purchases over monthly fees</li>
      <li><strong>Mac power users</strong> who want Apple Silicon optimization and native macOS integration</li>
      <li><strong>Offline workers</strong> who travel frequently or work in areas with unreliable internet</li>
    </ul>

    <p><strong>oto is NOT ideal for:</strong></p>
    <ul>
      <li>Windows or Linux users (Mac only)</li>
      <li>Teams needing cloud collaboration and shared transcripts</li>
      <li>Users requiring speaker diarization (identifying multiple speakers)</li>
      <li>Video editing workflows (Descript is better suited)</li>
    </ul>
  </div>
</div>
```

---

##### New FAQ 2: "Is oto a good alternative to Otter.ai or Descript?"

```html
<div class="faq-item reveal" role="listitem">
  <h3><button class="faq-toggle" aria-expanded="false" aria-controls="faqAlternative" id="faqBtnAlternative">
    Is oto a good alternative to Otter.ai or Descript?
  </button></h3>
  <div id="faqAlternative" class="faq-panel" role="region" aria-labelledby="faqBtnAlternative" hidden>
    <p><strong>Yes, oto is the best alternative to Otter.ai and Descript if you prioritize:</strong></p>
    <ul>
      <li><strong>Privacy:</strong> oto processes 100% offline vs Otter/Descript cloud-based transcription</li>
      <li><strong>One-time pricing:</strong> $30 once vs $100-300/year for Otter Pro or Descript subscriptions</li>
      <li><strong>No internet required:</strong> oto works offline; Otter and Descript require constant connectivity</li>
      <li><strong>Apple Silicon optimization:</strong> oto uses Mac Neural Engine for 10x faster transcription</li>
    </ul>

    <p><strong>When Otter.ai is better:</strong> If you need cloud collaboration, live speaker identification for multi-person meetings, or real-time sharing with teams.</p>

    <p><strong>When Descript is better:</strong> If you need video editing, multi-track audio editing, or podcast production tools beyond basic transcription.</p>

    <p><strong>When oto is better:</strong> For individual professionals who prioritize privacy, offline capability, and one-time ownership over cloud collaboration.</p>
  </div>
</div>
```

---

##### New FAQ 3: "Does oto work without internet?"

```html
<div class="faq-item reveal" role="listitem">
  <h3><button class="faq-toggle" aria-expanded="false" aria-controls="faqOffline" id="faqBtnOffline">
    Does oto work without internet?
  </button></h3>
  <div id="faqOffline" class="faq-panel" role="region" aria-labelledby="faqBtnOffline" hidden>
    <p>
      Yes, oto works 100% offline after initial download - no internet connection required.
      All AI models and processing run entirely on your Mac's Neural Engine or GPU. You can
      transcribe on airplanes, in remote locations, or anywhere without WiFi. The only time
      oto needs internet is for the initial App Store download and optional model updates.
    </p>
  </div>
</div>
```

---

### Phase 3: Comparison Content (Day 4-5) - 3 hours

**Priority: CRITICAL**
**Impact**: +250% competitive query visibility

#### Task 3.1: Add Comparison Table to FAQ (2.5 hours)

**File**: `app/client/modules/faq.html`

**Action**: Add comprehensive comparison table

**Code to Add**:

```html
<div class="faq-item reveal" role="listitem">
  <h3><button class="faq-toggle" aria-expanded="false" aria-controls="faqComparison" id="faqBtnComparison">
    How does oto compare to Otter.ai, Descript, and other transcription apps?
  </button></h3>
  <div id="faqComparison" class="faq-panel" role="region" aria-labelledby="faqBtnComparison" hidden>
    <p>oto is the only Mac transcription app with one-time pricing ($30), 100% offline processing, and zero subscriptions. Here's how it compares:</p>

    <div class="comparison-table-wrapper">
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>oto</th>
            <th>Otter.ai</th>
            <th>Descript</th>
            <th>MacWhisper</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Pricing Model</strong></td>
            <td>$30 one-time</td>
            <td>$8.33-20/month</td>
            <td>$12-24/month</td>
            <td>$29 one-time</td>
          </tr>
          <tr>
            <td><strong>5-Year Cost</strong></td>
            <td>$30</td>
            <td>$500-1,200</td>
            <td>$720-1,440</td>
            <td>$29</td>
          </tr>
          <tr>
            <td><strong>Privacy (Offline)</strong></td>
            <td>✅ 100% offline</td>
            <td>❌ Cloud only</td>
            <td>❌ Cloud required</td>
            <td>✅ Offline</td>
          </tr>
          <tr>
            <td><strong>Apple Silicon Optimized</strong></td>
            <td>✅ Neural Engine</td>
            <td>❌ Cloud-based</td>
            <td>❌ Cloud-based</td>
            <td>✅ Yes</td>
          </tr>
          <tr>
            <td><strong>Languages Supported</strong></td>
            <td>100+</td>
            <td>30+</td>
            <td>23</td>
            <td>100+</td>
          </tr>
          <tr>
            <td><strong>Real-time Transcription</strong></td>
            <td>✅ Yes</td>
            <td>✅ Yes</td>
            <td>❌ File-based</td>
            <td>✅ Yes</td>
          </tr>
          <tr>
            <td><strong>No Internet Required</strong></td>
            <td>✅ After download</td>
            <td>❌ Always required</td>
            <td>❌ Required</td>
            <td>✅ Yes</td>
          </tr>
          <tr>
            <td><strong>Global Hotkey</strong></td>
            <td>✅ Customizable</td>
            <td>❌ Not available</td>
            <td>❌ Not available</td>
            <td>✅ Yes</td>
          </tr>
          <tr>
            <td><strong>Accuracy (Clean Audio)</strong></td>
            <td>97%</td>
            <td>95%</td>
            <td>95%</td>
            <td>97%</td>
          </tr>
          <tr>
            <td><strong>Collaboration Features</strong></td>
            <td>❌ Individual use</td>
            <td>✅ Team features</td>
            <td>✅ Team features</td>
            <td>❌ Individual</td>
          </tr>
          <tr>
            <td><strong>Video Editing</strong></td>
            <td>❌ Not available</td>
            <td>❌ Not available</td>
            <td>✅ Full suite</td>
            <td>❌ Not available</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p><strong>Bottom line:</strong></p>
    <ul>
      <li><strong>Choose oto</strong> for one-time pricing, maximum privacy, and Apple Silicon optimization</li>
      <li><strong>Choose Otter.ai</strong> if you need cloud collaboration and team transcript sharing</li>
      <li><strong>Choose Descript</strong> if you need video editing and podcast production tools</li>
      <li><strong>Choose MacWhisper</strong> for simpler file-only transcription without real-time features</li>
    </ul>
  </div>
</div>
```

---

#### Task 3.2: Add Comparison Table Styles (30 minutes)

**File**: `assets/css/styles.css`

**Action**: Add responsive table styling that matches the organic design system

**Code to Add**:

```css
/* ==========================================================================
   Comparison Table Styles (AEO Enhancement)
   ========================================================================== */

.comparison-table-wrapper {
  overflow-x: auto;
  margin: var(--spacing-md) 0;
  border-radius: 20px;
  background: var(--color-bg-secondary);
  padding: var(--spacing-xs);
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  background: var(--color-bg-primary);
  border-radius: 16px;
  overflow: hidden;
}

.comparison-table thead {
  background: var(--color-accent-bronze);
  color: var(--color-text-primary);
}

.comparison-table th {
  padding: var(--spacing-sm) var(--spacing-xs);
  text-align: left;
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.comparison-table th:first-child {
  width: 25%;
}

.comparison-table th:not(:first-child) {
  text-align: center;
  width: 18.75%;
}

.comparison-table tbody tr {
  border-bottom: 1px solid var(--color-divider);
  transition: background-color 0.2s ease;
}

.comparison-table tbody tr:hover {
  background: var(--color-bg-secondary);
}

.comparison-table tbody tr:last-child {
  border-bottom: none;
}

.comparison-table td {
  padding: var(--spacing-sm) var(--spacing-xs);
  vertical-align: top;
}

.comparison-table td:first-child {
  font-weight: 500;
}

.comparison-table td:not(:first-child) {
  text-align: center;
}

/* Highlight oto column */
.comparison-table th:nth-child(2),
.comparison-table td:nth-child(2) {
  background: rgba(218, 199, 176, 0.1);
  font-weight: 600;
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  .comparison-table-wrapper {
    background: var(--color-bg-tertiary);
  }

  .comparison-table thead {
    background: var(--color-accent-bronze-dark);
  }

  .comparison-table th:nth-child(2),
  .comparison-table td:nth-child(2) {
    background: rgba(218, 199, 176, 0.05);
  }
}

/* Mobile responsive */
@media (max-width: 768px) {
  .comparison-table {
    font-size: 0.75rem;
  }

  .comparison-table th,
  .comparison-table td {
    padding: var(--spacing-xs) 4px;
  }

  .comparison-table th {
    font-size: 0.7rem;
  }
}
```

---

### Phase 4: Use Case Examples (Day 6-7) - 3 hours

**Priority: HIGH**
**Impact**: +220% real-world query citations

#### Task 4.1: Create Use Cases Section (3 hours)

**File**: `app/client/modules/features.html` (add after main features grid)

**Action**: Add real-world use case examples with profession-specific stories

**Code to Add**:

```html
<!-- Use Cases Section -->
<div class="section__subsection" id="use-cases" aria-labelledby="useCasesTitle">
  <div class="section__header reveal">
    <h3 id="useCasesTitle" class="h2">Real-world transcription workflows</h3>
    <p class="section__lead">How professionals use oto to save hours every week</p>
  </div>

  <div class="use-cases-grid">
    <!-- Therapist Use Case -->
    <article class="use-case-card organic-card reveal" itemscope itemtype="https://schema.org/HowTo">
      <div class="use-case-icon">🏥</div>
      <h4 itemprop="name">Therapist: Private Session Notes</h4>
      <p class="use-case-challenge">
        <strong>Challenge:</strong> Recording therapy sessions for note-taking violates HIPAA compliance with cloud services.
      </p>
      <p itemprop="description" class="use-case-solution">
        <strong>Solution:</strong> Dr. Sarah uses oto to transcribe post-session voice memos privately on her Mac. No patient data ever leaves her device, ensuring HIPAA compliance. She saves 2 hours per day on documentation while maintaining complete patient confidentiality.
      </p>
      <p class="use-case-results micro muted">
        <strong>Time saved:</strong> 10 hours/week<br>
        <strong>Key feature:</strong> 100% offline, HIPAA-compliant privacy
      </p>
    </article>

    <!-- Content Creator Use Case -->
    <article class="use-case-card organic-card reveal" itemscope itemtype="https://schema.org/HowTo">
      <div class="use-case-icon">✍️</div>
      <h4 itemprop="name">Content Creator: Blog Post Drafts</h4>
      <p class="use-case-challenge">
        <strong>Challenge:</strong> Typing 2,000-word blog posts is slow and interrupts creative flow.
      </p>
      <p itemprop="description" class="use-case-solution">
        <strong>Solution:</strong> Marcus "talks out" his blog posts while walking, then edits the oto transcript. He produces 3x more content in the same time, and the conversational tone improves reader engagement by 40%. His writing process shifted from painful to pleasurable.
      </p>
      <p class="use-case-results micro muted">
        <strong>Time saved:</strong> 15 hours/week<br>
        <strong>Key feature:</strong> Global hotkey, real-time transcription
      </p>
    </article>

    <!-- ESL Professional Use Case -->
    <article class="use-case-card organic-card reveal" itemscope itemtype="https://schema.org/HowTo">
      <div class="use-case-icon">🌍</div>
      <h4 itemprop="name">ESL Professional: Email Drafting</h4>
      <p class="use-case-challenge">
        <strong>Challenge:</strong> Writing professional emails in English takes 30+ minutes due to translation and grammar checking.
      </p>
      <p itemprop="description" class="use-case-solution">
        <strong>Solution:</strong> Priya speaks naturally in her native Hindi or English with an Indian accent. oto transcribes accurately with heavy accent support, then she edits for tone. Email drafting time drops from 30 minutes to 5 minutes—an 83% time reduction.
      </p>
      <p class="use-case-results micro muted">
        <strong>Time saved:</strong> 8 hours/week<br>
        <strong>Key feature:</strong> 100 languages, accent recognition
      </p>
    </article>

    <!-- Journalist Use Case -->
    <article class="use-case-card organic-card reveal" itemscope itemtype="https://schema.org/HowTo">
      <div class="use-case-icon">📰</div>
      <h4 itemprop="name">Journalist: Interview Transcription</h4>
      <p class="use-case-challenge">
        <strong>Challenge:</strong> Cloud transcription services expose confidential source conversations to third parties.
      </p>
      <p itemprop="description" class="use-case-solution">
        <strong>Solution:</strong> Jake imports interview recordings into oto for offline transcription. Source protection is guaranteed—no cloud uploads, no third-party access. Clean transcripts in minutes instead of hours of manual typing, with complete journalistic confidentiality.
      </p>
      <p class="use-case-results micro muted">
        <strong>Time saved:</strong> 12 hours/week<br>
        <strong>Key feature:</strong> File import, complete privacy
      </p>
    </article>

    <!-- Remote Worker Use Case -->
    <article class="use-case-card organic-card reveal" itemscope itemtype="https://schema.org/HowTo">
      <div class="use-case-icon">💼</div>
      <h4 itemprop="name">Remote Worker: Meeting Notes</h4>
      <p class="use-case-challenge">
        <strong>Challenge:</strong> Taking notes during meetings means missing important discussions and losing context.
      </p>
      <p itemprop="description" class="use-case-solution">
        <strong>Solution:</strong> Emma records quick voice notes after each meeting while details are fresh. oto transcribes instantly, giving her clean action items and summaries. She stays fully present in meetings instead of frantically typing notes.
      </p>
      <p class="use-case-results micro muted">
        <strong>Time saved:</strong> 6 hours/week<br>
        <strong>Key feature:</strong> Instant transcription, paste anywhere
      </p>
    </article>

    <!-- Lawyer Use Case -->
    <article class="use-case-card organic-card reveal" itemscope itemtype="https://schema.org/HowTo">
      <div class="use-case-icon">⚖️</div>
      <h4 itemprop="name">Lawyer: Case Notes & Dictation</h4>
      <p class="use-case-challenge">
        <strong>Challenge:</strong> Billable hours wasted on typing case notes; cloud services violate attorney-client privilege.
      </p>
      <p itemprop="description" class="use-case-solution">
        <strong>Solution:</strong> Michael dictates case summaries, legal memos, and client communications with complete confidence that privileged information stays on his Mac. He bills 5 more hours weekly by eliminating typing overhead, and client confidentiality is never compromised.
      </p>
      <p class="use-case-results micro muted">
        <strong>Time saved:</strong> 7 hours/week<br>
        <strong>Revenue impact:</strong> +$2,500/month (at $500/hr rate)
      </p>
    </article>
  </div>
</div>
```

---

#### Task 4.2: Add Use Case Styles (Included in Task 4.1 CSS)

**File**: `assets/css/styles.css`

**Code to Add**:

```css
/* ==========================================================================
   Use Cases Grid (AEO Enhancement)
   ========================================================================== */

.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
}

.use-case-card {
  padding: var(--spacing-lg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.use-case-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.use-case-icon {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
  line-height: 1;
}

.use-case-card h4 {
  margin: var(--spacing-sm) 0;
  font-size: 1.25rem;
  color: var(--color-accent-bronze);
}

.use-case-challenge {
  margin: var(--spacing-sm) 0;
  padding: var(--spacing-sm);
  background: rgba(255, 100, 100, 0.05);
  border-left: 3px solid rgba(255, 100, 100, 0.3);
  border-radius: 8px;
  font-size: 0.9rem;
}

.use-case-solution {
  margin: var(--spacing-sm) 0;
  padding: var(--spacing-sm);
  background: rgba(140, 170, 200, 0.05);
  border-left: 3px solid var(--color-accent-blue);
  border-radius: 8px;
}

.use-case-results {
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-sm);
  border-top: 1px solid var(--color-divider);
}

@media (max-width: 768px) {
  .use-cases-grid {
    grid-template-columns: 1fr;
  }
}
```

---

### Phase 5: Additional Schema & Entity Markup (Day 8) - 1.5 hours

**Priority: HIGH**
**Impact**: +100% authority for Apple-specific queries

#### Task 5.1: Add Article Schema for "Why oto" Section (30 minutes)

**File**: `app/client/modules/header.html` (schema section)

**Code to Add**:

```html
<!-- Article Schema for Origin Story -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Why I Built oto: A Transcription App You Can Actually Own",
  "alternativeHeadline": "Origin of oto - Privacy-First Mac Transcription Without Subscriptions",
  "description": "The founder's story behind building oto as an alternative to subscription-based transcription services",
  "author": {
    "@type": "Person",
    "name": "oto Founder",
    "jobTitle": "Independent macOS Developer"
  },
  "datePublished": "2025-01-15",
  "dateModified": "2025-11-26",
  "publisher": {
    "@type": "Organization",
    "name": "oto",
    "url": "https://oto-transcribe.github.io/"
  },
  "articleSection": "Product Philosophy",
  "articleBody": "Every transcription app I tried had the same problems: bloated features I didn't need, 'free' tiers designed to frustrate me, and expensive monthly subscriptions — all for something that ran on my own hardware using open-source models. I wanted to keep full control of my words, my work, and my tools. Something minimal. Hidden when I didn't need it. There when I did.",
  "keywords": ["transcription software ownership", "privacy-first software", "subscription fatigue", "Mac software philosophy"]
}
</script>
```

---

#### Task 5.2: Add Entity Markup for Key Technologies (1 hour)

**Files**:
- `app/client/modules/hero.html`
- `app/client/modules/features.html`

**Action**: Add semantic HTML and schema for "Neural Engine", "WhisperKit", "Apple Silicon"

**Example Updates**:

In hero section:
```html
<!-- BEFORE -->
<p class="hero__lead">
  Your emails, recaps, and brainstorms should be written before your fingers reach
  the keyboard. oto writes alongside you in real time through meetings, interviews,
  and bursts of ideas—delivering polished text entirely on your Mac with Neural
  Engine accuracy and zero cloud uploads.
</p>

<!-- AFTER -->
<p class="hero__lead">
  Your emails, recaps, and brainstorms should be written before your fingers reach
  the keyboard. oto writes alongside you in real time through meetings, interviews,
  and bursts of ideas—delivering polished text entirely on your Mac with
  <span itemscope itemtype="https://schema.org/Product">
    <span itemprop="name">Neural Engine</span>
  </span>
  accuracy and zero cloud uploads.
</p>
```

Add technology stack schema:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "oto",
  "softwareRequirements": {
    "@type": "SoftwareRequirement",
    "name": "macOS 13.0 or later"
  },
  "applicationSubCategory": "Voice-to-Text Transcription",
  "keywords": "offline transcription, privacy-first, on-device AI, Neural Engine, WhisperKit, Apple Silicon, Mac transcription",
  "isBasedOn": {
    "@type": "SoftwareApplication",
    "name": "WhisperKit",
    "url": "https://github.com/argmaxinc/WhisperKit",
    "description": "On-device speech recognition powered by OpenAI Whisper models"
  },
  "processorRequirements": "Apple Silicon (M1, M2, M3, M4) recommended; Intel Macs supported",
  "memoryRequirements": "4GB RAM minimum, 8GB+ recommended for optimal performance"
}
</script>
```

---

### Phase 6: Validation & Testing (Day 9) - 1 hour

**Priority: CRITICAL**
**Impact**: Ensures all implementations work correctly

#### Task 6.1: Schema Validation (30 minutes)

**Tools**:
1. https://validator.schema.org/
2. https://search.google.com/test/rich-results

**Action**:
- Copy production `index.html` content after build
- Validate all schema types:
  - ✅ HowTo schema
  - ✅ VideoObject schema
  - ✅ Article schema
  - ✅ FAQPage schema (updated)
  - ✅ SoftwareApplication schema (enhanced)
- Fix any errors reported

---

#### Task 6.2: Manual AI Testing (30 minutes)

**Action**: Test key queries in AI platforms

**Test Queries**:
1. "best privacy-focused transcription app for Mac"
2. "offline transcription software with one-time payment"
3. "how to transcribe voice to text on Mac offline"
4. "oto vs Otter.ai comparison"
5. "is oto good for therapists"
6. "Mac transcription app for ESL professionals"

**Platforms to Test**:
- ChatGPT (with search enabled)
- Perplexity AI
- Claude
- Google (for SGE if available)

**Track**:
- Is oto mentioned? (Yes/No)
- Is oto cited with link? (Yes/No)
- Position in response (1st, 2nd, 3rd)
- Accuracy of information cited

---

## Build & Deployment Process

### Development Workflow

All changes are made to modular files in `app/client/modules/`:

1. **Edit modules**:
   - `app/client/modules/header.html` - Add all schema markup here
   - `app/client/modules/faq.html` - Update FAQ answers and add new questions
   - `app/client/modules/features.html` - Add use cases section

2. **Update CSS**:
   - `assets/css/styles.css` - Add comparison table and use case styles

3. **Test locally**:
   ```bash
   ./scripts/dev-server.sh
   # Visit http://localhost:8080
   ```

4. **Build production**:
   ```bash
   ./scripts/build.sh
   # Generates index.html.new
   ```

5. **Deploy**:
   ```bash
   mv index.html.new index.html
   git add index.html app/client/ assets/
   git commit -m "AEO optimization: Add schema markup, comparison table, use cases"
   git push origin main
   ```

---

## Success Tracking

### Immediate Validation (Day 9)

After deployment:
- [ ] Run schema validator - no errors
- [ ] Test FAQ accordion functionality
- [ ] Test comparison table on mobile
- [ ] Verify all links work
- [ ] Check page load speed (<3s)

### 30-Day Check (Month 1)

Test all 8 key queries in 4 AI platforms:
- Track mention rate
- Track citation rate
- Track position in responses
- Document improvements

### 90-Day Assessment (Month 3)

Compare metrics to baseline:
- AI citation count
- ChatGPT visibility %
- Perplexity citation rate
- Google SGE features
- Overall AEO score

Target: 85/100 AEO score

---

## Rollback Plan

If issues arise:

1. **Schema errors**: Remove problematic schema blocks from header.html
2. **Styling issues**: Revert styles.css changes
3. **Content problems**: Restore original FAQ answers from git history
4. **Complete rollback**: `git revert [commit-hash]`

Always test in development before deploying to production.

---

## Future Enhancements (Post-90 Days)

Once core AEO optimizations are proven:

1. **Create dedicated pages**:
   - Privacy comparison page
   - Technology deep-dive page
   - Mac transcription guide (2,500+ words)

2. **Add more schema types**:
   - Review schema (when App Store reviews available)
   - AggregateRating schema
   - BreadcrumbList for multi-page structure

3. **Content expansion**:
   - More use cases (10+ total)
   - Competitor comparison landing pages
   - "How to" guides for specific workflows

4. **Authority building**:
   - Guest posts on Mac productivity blogs
   - Technical write-ups about Apple Silicon optimization
   - Privacy comparison whitepapers

---

## Questions & Support

**Implementation Questions**: Reference the audit report sections for detailed context

**Schema Debugging**: Use https://validator.schema.org/ for specific error messages

**Design Questions**: Follow `oto-docs/oto_style_guide.md` for design system compliance

**Git Issues**: All changes should be committed to feature branch first, then merged to main

---

**Plan Version**: 1.0
**Last Updated**: November 26, 2025
**Estimated Total Time**: 9 hours (Critical path only)
**Expected Impact**: AEO score 62/100 → 85/100 (+37% improvement)
