import { useState } from "react";

/* =========================
   Strategic Finance — App
   ========================= */

export default function App() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs: { q: string; a: string }[] = [
  {
    q: "What do you actually do in month one?",
    a: "Stand up a clean monthly close, 13-week cash view, and a simple KPI dashboard (ARR/MRR, churn, CAC, LTV, gross margin, Rule of 40). Then we pick one leverage point—pricing, collections, or spend—and move it."
  },
  {
    q: "Do you replace my bookkeeper or CPA?",
    a: "It depends on your situation. I've handled bookkeeping and tax for companies alongside the strategic elements of finance when needed. Usually, I coordinate with your existing team so the transactions, tax, and strategy all align."
  },
  {
    q: "What do you do with AI?",
    a: "Pragmatic, cost-effective evaluation and use of tools. Whether it's developing machine-learning models in Python or Power BI, leveraging ChatGPT, working with you to build agents, or applying advanced analytics platforms like Querri—I focus on the most efficient way to forecast demand, analyze pricing and retention, and automate processes that save real time or money."
  },
  {
    q: "How do engagements work?",
    a: "Fractional (1-3 days/week), project-based (e.g., SOC 2 readiness, pricing overhaul), or short diagnostic sprints. Flexible to fit stage and budget."
  }
];


  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-content-center rounded-xl bg-gray-900 text-sm font-bold text-white">
              SF
            </div>
            <span className="font-semibold tracking-tight">Strategic Finance LLC</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#services" className="hover:text-gray-700">
              Services
            </a>
            <a href="#approach" className="hover:text-gray-700">
              Approach
            </a>
            <a href="#about" className="hover:text-gray-700">
              About
            </a>
            <a href="#contact" className="hover:text-gray-700">
              Contact
            </a>
            <a
              href="tel:+12149236834"
              className="inline-flex items-center rounded-xl border px-3 py-1.5 text-xs font-medium hover:bg-gray-50"
            >
              Call: (214) 923-6834
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pt-20 pb-16 md:grid-cols-2 md:pt-28 md:pb-24">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight leading-tight md:text-5xl">
              Fractional CFO for SaaS and tech-enabled services
            </h1>
            <p className="mt-5 max-w-xl text-lg text-gray-600">
              Clean books, clear cash, tighter pricing, and metrics that actually drive decisions. Practical analytics when it helps, not when it’s trendy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center rounded-2xl bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:shadow"
              >
                Get a diagnostic call
              </a>
              <a
                href="#services"
                className="inline-flex items-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-gray-50"
              >
                See services
              </a>
            </div>
            <div className="mt-6 text-xs text-gray-500">
              Charleston, SC • Remote-friendly • Hands-on from day one
            </div>
          </div>
          <div className="md:pl-8">
            <div className="rounded-3xl border bg-white p-5 shadow-sm">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <CardStat label="Monthly close" value="Day 5 or better" />
                <CardStat label="Cash runway" value="&gt; 12 weeks" />
                <CardStat label="ARR clarity" value="True net growth" />
                <CardStat label="Pricing" value="Margin-first" />
              </div>
              <div className="mt-4 text-xs text-gray-500">
                Outcomes I target in the first 60-90 days.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-t border-gray-100 bg-white py-10">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 text-sm md:grid-cols-3">
          <TrustItem
            title="Enterprise + Startup"
            text="Led finance across pre-revenue startups and a $1B region at BT Americas."
          />
          <TrustItem
            title="SOC 2 Type 2"
            text="Hands-on leader for a successful Type 2 audit period; build controls that scale."
          />
          <TrustItem
            title="Analytics"
            text="Power BI and Python for forecasting, pricing, retention, and unit economics—used when it pays off."
          />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Services</h2>
          <p className="mt-2 max-w-2xl text-gray-600">
            Pick a lane or mix and match. Engagements flex with stage and urgency.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { title: "Fractional CFO", body: "Own the close, cash, budget, and board package. Build visibility and cadence that sticks." },
              { title: "FP&A + Unit Economics", body: "Driver-based model, ARR/MRR clarity, cohort retention, CAC payback, LTV/CAC, Rule of 40." },
              { title: "Cash Conversion", body: "Collections, billing flow, rev rec sanity, and vendor discipline to extend runway without drama." },
              { title: "Pricing & Packaging", body: "Cost-to-serve, margin by client/queue, and willingness-to-pay insights to price with spine." },
              { title: "Dashboards (Power BI)", body: "Simple, truthful visuals: revenue, margin, churn, funnel, and operating rhythm." },
              { title: "SOC 2 Readiness", body: "Practical controls, policy set, audit readiness, and cross-functional coordination." },
              { title: "Accounting Cleanup", body: "Chart of accounts that scales, error purge, and a close checklist your team can run." },
              { title: "Fundraising Support", body: "Data room, KPI narrative, and investor-grade forecasts without fantasy math." },
              { title: "Project Sprints", body: "2-4 week deep dives on a single leverage point: pricing, collections, or spend." },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border bg-white p-5 shadow-sm">
                <div className="font-medium">{s.title}</div>
                <div className="mt-2 text-sm text-gray-600">{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">A calm, aggressive 30-60-90</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <StepCard n="30" title="Stabilize" points={["Close by day 5", "13-week cash", "COA cleanup", "Core KPI baseline"]} />
            <StepCard n="60" title="Instrument" points={["Driver model", "Power BI dashboard", "Pricing lens", "Collections cadence"]} />
            <StepCard n="90" title="Compound" points={["Board-ready package", "Cost-to-serve clarity", "Hiring plan + runway", "Working capital wins"]} />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">About Tom Schipper</h2>
            <p className="mt-4 leading-7 text-gray-700">
              Finance leader for SaaS and tech-enabled services. Two decades across FP&A, controllership, and operations. Co-founded a startup, led a SOC 2 Type 2 audit period, and previously helped run finance for a $1B region at BT Americas. I care about clean systems, honest numbers, and decisions you can defend.
            </p>
            <ul className="mt-4 list-disc pl-6 leading-7 text-gray-700">
              <li>Strengths: cash control, pricing and margin, unit economics, and making the business visible.</li>
              <li>Tools: Excel, Power BI, Python. SQL when useful, not for sport.</li>
              <li>Location: Mt. Pleasant, SC. Flexible for remote and on-site.</li>
            </ul>
          </div>
          <div className="md:pl-4">
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="text-sm font-medium">Quick facts</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>→ Hands-on: I’ll fix COA, not just talk about it.</li>
                <li>→ Audit-friendly without slowing the business.</li>
                <li>→ Calm in chaos; skeptical of theatrics.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

{/* FAQ */}
<section className="bg-white py-16">
  <div className="mx-auto max-w-6xl px-6">
    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">FAQ</h2>
    <div className="mt-6 divide-y overflow-hidden rounded-2xl border">
      {faqs.map((f, i) => (
        <div key={i} className="group">
          <button
            type="button"
            onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
            className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium focus:outline-none hover:bg-gray-50"
          >
            <span>{f.q}</span>
            <span
              className={`transform transition-transform text-gray-400 ${
                openFAQ === i ? "rotate-180" : ""
              }`}
            >
              ⌄
            </span>
          </button>
          {openFAQ === i && (
            <div className="px-5 pb-5 text-sm text-gray-700">{f.a}</div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CONTACT */}
      <section id="contact" className="bg-gray-900 py-16 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Let’s make the numbers usable</h2>
            <p className="mt-3 max-w-xl text-gray-300">
              Short, no-nonsense intro call. If it’s not a fit, I’ll say so and suggest next steps anyway.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+12149236834"
                className="inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow-sm hover:shadow"
              >
                Call (214) 923-6834
              </a>
              <a
                href="mailto:tom@strategicfinance.llc"
                className="inline-flex items-center rounded-2xl border border-white/30 px-5 py-3 text-sm font-medium hover:bg-white/10"
              >
                Email
              </a>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <label className="block text-sm">
              Name
              <input
                className="mt-1 w-full rounded-xl bg-white/10 px-3 py-2 placeholder-white/50 focus:outline-none"
                placeholder="Your name"
              />
            </label>
            <label className="mt-4 block text-sm">
              Email
              <input
                type="email"
                className="mt-1 w-full rounded-xl bg-white/10 px-3 py-2 placeholder-white/50 focus:outline-none"
                placeholder="you@company.com"
              />
            </label>
            <label className="mt-4 block text-sm">
              What do you need?
              <textarea
                className="mt-1 h-28 w-full rounded-xl bg-white/10 px-3 py-2 placeholder-white/50 focus:outline-none"
                placeholder="Briefly describe your situation"
              />
            </label>
            <button className="mt-5 w-full rounded-2xl bg-white px-5 py-3 text-sm font-medium text-gray-900">
              Send
            </button>
            <p className="mt-2 text-xs text-white/60">
              Form is a visual placeholder. Use the email button to reach me directly.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-gray-500 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="grid h-7 w-7 place-content-center rounded-lg bg-gray-900 text-[10px] font-bold text-white">
              SF
            </div>
            <div>
              <div>Strategic Finance LLC</div>
              <div className="text-xs">Mt. Pleasant, SC</div>
            </div>
          </div>
          <div className="flex gap-5">
            <a href="#services" className="hover:text-gray-700">
              Services
            </a>
            <a href="#approach" className="hover:text-gray-700">
              Approach
            </a>
            <a href="#about" className="hover:text-gray-700">
              About
            </a>
            <a href="#contact" className="hover:text-gray-700">
              Contact
            </a>
          </div>
          <div className="text-xs">© {new Date().getFullYear()} Strategic Finance LLC. All rights reserved.</div>
        </div>
      </footer>

      {/* SEO basics (runtime) */}
      <SEO />
    </main>
  );
}

/* =============== Small components =============== */

function CardStat(props: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border bg-white p-4">
      <div className="text-xs text-gray-500">{props.label}</div>
      <div className="mt-1 text-lg font-semibold" dangerouslySetInnerHTML={{ __html: props.value }} />
    </div>
  );
}

function TrustItem(props: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="font-medium">{props.title}</div>
      <div className="mt-2 text-sm text-gray-600">{props.text}</div>
    </div>
  );
}

function StepCard(props: { n: string; title: string; points: string[] }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="text-xs text-gray-500">Day {props.n}</div>
      <div className="mt-1 font-medium">{props.title}</div>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-600">
        {props.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

function SEO() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Strategic Finance LLC",
    url: "https://strategicfinance.llc",
    areaServed: "United States",
    address: { "@type": "PostalAddress", addressLocality: "Mt. Pleasant", addressRegion: "SC" },
    telephone: "+1-214-923-6834",
    sameAs: ["https://www.linkedin.com/company/strategicfinance-llc"],
  };

  return (
    <>
      <title>Strategic Finance LLC — Fractional CFO for SaaS & Tech-enabled Services</title>
      <meta
        name="description"
        content="Fractional CFO services: monthly close, cash runway, FP&A, pricing, unit economics, Power BI dashboards, and SOC 2 readiness. Mt. Pleasant, SC • Remote-friendly."
      />
      {/* eslint-disable-next-line react/no-danger */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

