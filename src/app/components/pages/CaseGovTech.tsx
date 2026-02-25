import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export function CaseGovTech() {
  return (
    <>
      <Helmet>
        <title>Social Security GovTech Platform Transformation | Volodymyr Grikh</title>
        <meta
          name="description"
          content="Led UX transformation for Portugal's Social Security Direct portal during COVID-19 crisis, reducing errors by 32%, improving accessibility and enabling millions of citizens to access emergency support."
        />
        <meta name="keywords" content="GovTech, UX design, Portugal, Social Security, government services, accessibility, crisis response, digital transformation, public services" />
        <meta property="og:title" content="Social Security GovTech Platform Transformation | Volodymyr Grikh" />
        <meta property="og:description" content="Transforming Portugal's Social Security portal during COVID-19 crisis, reducing errors by 32% and enabling 1.8M+ citizens to access support." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://volodymyrgrikh.vercel.app/case/govtech-social-security" />
      </Helmet>

      <div className="bg-white pt-32">
        {/* Back Link */}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 mb-12">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-[15px] opacity-60 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-sm"
            aria-label="Back to all work"
          >
            <ArrowLeft size={20} aria-hidden="true" />
            Back to work
          </Link>
        </div>

        {/* Hero */}
        <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[15px] opacity-60 mb-8">Portugal Social Security (Instituto Informática, I.P.) · 2020 – 2022</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight mb-12 leading-[1.05] max-w-5xl">
              National GovTech Crisis Response
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-70 mb-12 max-w-3xl leading-relaxed">
              Designing emergency COVID-19 support flows for millions of Portuguese citizens under critical time pressure
            </p>
            <p className="text-sm opacity-60 mb-2">My Role</p>
            <p className="text-lg font-light">UX/UI Technical Team Leader</p>
          </motion.div>
        </section>

        {/* Context */}
        <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pb-32">
          <div className="max-w-4xl">
            <h2 className="text-[15px] opacity-60 mb-8">Context</h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-80 mb-6">
              March 2020. COVID-19 hits Portugal. Millions need emergency financial support, but the Social Security portal wasn't built for this scale or urgency.
            </p>
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-80">
              I led the UX emergency response team, redesigning critical flows under conditions I'd never faced: deploy in days, not months, with lives depending on it.
            </p>
          </div>
        </section>

        {/* Problem */}
        <section className="bg-neutral-50 py-32">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-[15px] opacity-60 mb-8">The Challenge</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[15px] font-light leading-relaxed opacity-80 pl-6 relative before:content-['—'] before:absolute before:left-0 before:opacity-40">
                    38% submission error rates overwhelming citizens and support teams
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[15px] font-light leading-relaxed opacity-80 pl-6 relative before:content-['—'] before:absolute before:left-0 before:opacity-40">
                    Forms drowning users in bureaucratic language during crisis
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[15px] font-light leading-relaxed opacity-80 pl-6 relative before:content-['—'] before:absolute before:left-0 before:opacity-40">
                    68% of users on mobile devices, but platform optimized for desktop
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[15px] font-light leading-relaxed opacity-80 pl-6 relative before:content-['—'] before:absolute before:left-0 before:opacity-40">
                    Call centers overloaded, physical offices closed due to lockdown
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[15px] font-light leading-relaxed opacity-80 pl-6 relative before:content-['—'] before:absolute before:left-0 before:opacity-40">
                    Families panicking with rent due and no time for usual design process
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-32">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-[15px] opacity-60 mb-12">My Approach</h2>
              <div className="space-y-6 mb-12">
                <p className="text-lg md:text-xl font-light leading-relaxed opacity-80">
                  I assembled a crisis team: 3 designers, 2 developers, 1 content strategist, direct line to policy experts. Daily standups. Deploy every 48 hours. Test with real citizens every afternoon.
                </p>
                <p className="text-lg md:text-xl font-light leading-relaxed opacity-80">
                  I rewrote every form question myself. Bureaucratic Portuguese became plain language: "Do you live alone?" instead of "Indicate household composition status." Every word earned its place or got cut.
                </p>
                <p className="text-lg md:text-xl font-light leading-relaxed opacity-80">
                  I called the support center daily. "What are people struggling with right now?" became my most important user research. Their feedback went into designs by evening, deployed by next morning.
                </p>
              </div>
              <h3 className="text-sm opacity-60 mb-8">Methodology</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Daily user testing with 5-8 citizens representing different demographics and tech literacy
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    48-hour deployment cycles — design, validate, deploy, repeat
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Plain language workshops — rewrote all content with policy teams and legal compliance
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Mobile-first, low-bandwidth optimization for 68% smartphone users
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Accessibility validation with elderly users and assistive technology
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="bg-neutral-50 py-32">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-[15px] opacity-60 mb-8">What I Built</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0 opacity-40" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Simplified emergency forms — reduced from 24 to 8 fields, completion time under 3 minutes
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0 opacity-40" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Plain language content — rewrote all copy, eliminated bureaucratic jargon completely
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0 opacity-40" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Progress indicators — clear step-by-step guidance reducing anxiety and abandonment
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0 opacity-40" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Real-time validation — errors caught before submission, not after
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0 opacity-40" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Mobile-optimized for low-end devices — works reliably on 3G, older smartphones
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-32">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-[15px] opacity-60 mb-16">Real Impact</h2>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
              <div>
                <p className="text-5xl md:text-6xl font-light mb-4">38% → 6%</p>
                <p className="text-lg font-light mb-2">Submission error rate drop</p>
                <p className="text-sm font-light opacity-70 leading-relaxed">
                  Errors reduced from 38% to 6% through simplified forms and real-time validation
                </p>
              </div>
              <div>
                <p className="text-5xl md:text-6xl font-light mb-4">27%</p>
                <p className="text-lg font-light mb-2">Decrease in support calls</p>
                <p className="text-sm font-light opacity-70 leading-relaxed">
                  Clear guidance reduced call center dependency during peak crisis
                </p>
              </div>
              <div>
                <p className="text-5xl md:text-6xl font-light mb-4">1.8M+</p>
                <p className="text-lg font-light mb-2">Citizens served</p>
                <p className="text-sm font-light opacity-70 leading-relaxed">
                  Over 1.8 million emergency support applications processed digitally
                </p>
              </div>
              <div>
                <p className="text-5xl md:text-6xl font-light mb-4">48hrs</p>
                <p className="text-lg font-light mb-2">Deployment cycle</p>
                <p className="text-sm font-light opacity-70 leading-relaxed">
                  Continuous improvements shipped every 2 days during crisis period
                </p>
              </div>
            </div>

            {/* Outcomes */}
            <div className="max-w-4xl">
              <h3 className="text-sm opacity-60 mb-8">What changed</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 flex-shrink-0 opacity-40" aria-hidden="true" />
                  <span className="text-[15px] font-light leading-relaxed">
                    Families got support when they needed it most — streamlined process meant faster approvals
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 flex-shrink-0 opacity-40" aria-hidden="true" />
                  <span className="text-[15px] font-light leading-relaxed">
                    Elderly and low-tech users could self-serve — accessibility improvements removed barriers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 flex-shrink-0 opacity-40" aria-hidden="true" />
                  <span className="text-[15px] font-light leading-relaxed">
                    Support teams focused on complex cases — simple flows reduced call volume significantly
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 flex-shrink-0 opacity-40" aria-hidden="true" />
                  <span className="text-[15px] font-light leading-relaxed">
                    Trust in government digital services increased — crisis response proved systems could work
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Keywords */}
        <section className="bg-neutral-50 py-32">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-[15px] opacity-60 mb-8">Keywords</h2>
              <p className="text-[15px] font-light leading-relaxed opacity-70">
                GovTech · Government digital services · Accessibility · Crisis response · Plain language · Mobile-first · UX Portugal · Public sector · Form design · Emergency services
              </p>
            </div>
          </div>
        </section>

        {/* Back to Work */}
        <section className="border-t border-black/5 py-32">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-[15px] opacity-60 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-sm"
              aria-label="View all case studies"
            >
              View all case studies
              <ArrowLeft size={20} className="rotate-180" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
