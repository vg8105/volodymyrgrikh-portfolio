import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export function CaseEPO() {
  return (
    <>
      <Helmet>
        <title>AI-Powered Enterprise Patent Platform | Volodymyr Grikh</title>
        <meta
          name="description"
          content="Designing AI-powered tools for European Patent Office, reducing technical drawing analysis by 45%, task completion by 28%, and onboarding time by 65% through intelligent document analysis and UX optimization."
        />
        <meta name="keywords" content="AI UX design, enterprise platform, patent examination, technical drawing analysis, data-heavy interfaces, machine learning, document analysis, European Patent Office" />
        <meta property="og:title" content="AI-Powered Enterprise Patent Platform | Volodymyr Grikh" />
        <meta property="og:description" content="Reducing patent examination time by 28% through AI-powered document analysis and intelligent UX design at European Patent Office." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://volodymyrgrikh.vercel.app/case/enterprise-epo" />
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
            <p className="text-[15px] opacity-60 mb-8">European Patent Office · 2022 – 2024</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight mb-12 leading-[1.05] max-w-5xl">
              AI-Powered Enterprise Data Platform
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-70 mb-12 max-w-3xl leading-relaxed">
              Designing AI-powered tools that help patent professionals across Europe make sense of millions of complex documents faster and smarter
            </p>
            <p className="text-sm opacity-60 mb-2">My Role</p>
            <p className="text-lg font-light">Lead UX/UI Designer, Enterprise Data Platforms</p>
          </motion.div>
        </section>

        {/* Context */}
        <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pb-32">
          <div className="max-w-4xl">
            <h2 className="text-[15px] opacity-60 mb-8">Context</h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-80 mb-6">
              Patent examiners were drowning in information, spending 40+ minutes per evaluation because the platform wasn't helping them think—it was forcing them to hunt.
            </p>
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-80">
              I led the complete UX redesign of an AI-powered patent workbench, focusing on intelligent document analysis, automated technical drawing recognition, and cognitive load reduction.
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
                    Patent examiners manually reading hundreds of pages of technical documents per application
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[15px] font-light leading-relaxed opacity-80 pl-6 relative before:content-['—'] before:absolute before:left-0 before:opacity-40">
                    Complex engineering drawings analyzed manually, taking 20+ minutes each
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[15px] font-light leading-relaxed opacity-80 pl-6 relative before:content-['—'] before:absolute before:left-0 before:opacity-40">
                    Critical data buried in maze-like navigation and unclear hierarchy
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[15px] font-light leading-relaxed opacity-80 pl-6 relative before:content-['—'] before:absolute before:left-0 before:opacity-40">
                    New examiners taking 4-6 weeks to become proficient due to brutal learning curve
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[15px] font-light leading-relaxed opacity-80 pl-6 relative before:content-['—'] before:absolute before:left-0 before:opacity-40">
                    AI features existed but weren't surfacing insights where examiners needed them
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
                  I embedded myself with 12 patent examiners across three countries, watching them work, asking why they clicked what they clicked, understanding their mental models. I learned their language—prior art, claims analysis, classification codes.
                </p>
                <p className="text-lg md:text-xl font-light leading-relaxed opacity-80">
                  The breakthrough insight: examiners didn't want AI to replace their expertise—they wanted it to eliminate the tedious manual work so they could focus on complex decision-making.
                </p>
                <p className="text-lg md:text-xl font-light leading-relaxed opacity-80">
                  For the technical drawing analysis feature, I prototyped obsessively. 11 iterations before landing on an overlay system that felt natural. Each iteration tested with real users, real patent applications, real tasks.
                </p>
              </div>
              <h3 className="text-sm opacity-60 mb-8">Methodology</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Embedded with 12 examiners across Germany, Netherlands, and France for contextual research
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Collaborated daily with AI/ML engineers to understand capabilities and constraints
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Built 53 interactive prototypes tested in 2-week validation cycles
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Designed AI features: automated document analysis, technical drawing recognition, prior art recommendations
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Created focused design system (28 components) for AI-assisted data-heavy interfaces
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
                    AI-powered document analysis — automatic extraction of claims, classifications, and key technical details
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0 opacity-40" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Technical drawing recognition — AI identifies mechanical components and design patterns in patent diagrams
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0 opacity-40" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Smart prior art recommendations — machine learning surfaces relevant existing patents automatically
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0 opacity-40" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Task-based navigation — reorganized around examiner workflows, not technical features
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0 opacity-40" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Progressive disclosure — complexity hidden by default, accessible for power users
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
                <p className="text-5xl md:text-6xl font-light mb-4">45%</p>
                <p className="text-lg font-light mb-2">Faster technical drawing analysis</p>
                <p className="text-sm font-light opacity-70 leading-relaxed">
                  AI recognition reduced manual diagram analysis from 20 minutes to under 2 minutes
                </p>
              </div>
              <div>
                <p className="text-5xl md:text-6xl font-light mb-4">28%</p>
                <p className="text-lg font-light mb-2">Faster overall task completion</p>
                <p className="text-sm font-light opacity-70 leading-relaxed">
                  Patent evaluations completed in 32 minutes vs. 44 minutes previously
                </p>
              </div>
              <div>
                <p className="text-5xl md:text-6xl font-light mb-4">65%</p>
                <p className="text-lg font-light mb-2">Faster onboarding</p>
                <p className="text-sm font-light opacity-70 leading-relaxed">
                  New examiners proficient in 10 days instead of 4-6 weeks
                </p>
              </div>
              <div>
                <p className="text-5xl md:text-6xl font-light mb-4">34 pts</p>
                <p className="text-lg font-light mb-2">NPS increase</p>
                <p className="text-sm font-light opacity-70 leading-relaxed">
                  User satisfaction jumped from 12 to 46 in post-launch surveys
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
                    AI eliminated tedious manual work — examiners focus on complex decisions, not document hunting
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 flex-shrink-0 opacity-40" aria-hidden="true" />
                  <span className="text-[15px] font-light leading-relaxed">
                    Technical drawing analysis transformed — 20 minutes reduced to 2 minutes with AI recognition
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 flex-shrink-0 opacity-40" aria-hidden="true" />
                  <span className="text-[15px] font-light leading-relaxed">
                    Faster, more confident decisions — contextual AI insights reduced second-guessing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 flex-shrink-0 opacity-40" aria-hidden="true" />
                  <span className="text-[15px] font-light leading-relaxed">
                    Onboarding no longer a bottleneck — new hires contribute productively in days, not weeks
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
                AI UX design · Enterprise platforms · Machine learning · Data-heavy interfaces · Patent examination · Technical drawing analysis · Document analysis · European Patent Office · Design systems
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
