import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { caseStudies } from "../../data/caseStudies";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const study = caseStudies.find((s) => s.id === id);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Case study not found</h1>
          <Link
            to="/work"
            className="text-[15px] opacity-60 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-sm"
          >
            Back to work
          </Link>
        </div>
      </div>
    );
  }

  return (
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
          <p className="text-[15px] opacity-60 mb-8">{study.company} · {study.period}</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight mb-12 leading-[1.05] max-w-5xl">
            {study.title}
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-70 mb-12 max-w-3xl leading-relaxed">
            {study.tagline}
          </p>
          <p className="text-sm opacity-60 mb-2">My Role</p>
          <p className="text-lg font-light">{study.role}</p>
        </motion.div>
      </section>

      {/* Hero Visual */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="aspect-[16/9] bg-neutral-100 rounded-2xl overflow-hidden"
        >
          <ImageWithFallback
            src={study.coverImage}
            alt={`${study.company} ${study.title} detailed view`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Overview */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pb-32">
        <div className="max-w-4xl">
          <p className="text-xl md:text-2xl font-light leading-relaxed opacity-80">
            {study.overview}
          </p>
        </div>
      </section>

      {/* Payments & Retail Transformation - Only for CTT */}
      {study.id === "ctt-helena" && (
        <section className="bg-black text-white py-32">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-light mb-8">Payments & Retail Transformation</h2>
              <p className="text-lg md:text-xl font-light leading-relaxed opacity-90 mb-8">
                Led the transition from legacy Payshop terminals to modern Android devices, replacing outdated hardware and designing the new payment application that supports the upgraded ecosystem.
              </p>
              <p className="text-lg md:text-xl font-light leading-relaxed opacity-90 mb-12">
                This transformation enabled real-time data capture, reduced manual entry and improved service speed across a nationwide retail network.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-t border-white/20 pt-6">
                  <p className="text-sm opacity-60 mb-2">Impact</p>
                  <p className="text-[15px] font-light leading-relaxed">Reduced manual entry errors through camera and barcode scanning</p>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <p className="text-sm opacity-60 mb-2">Impact</p>
                  <p className="text-[15px] font-light leading-relaxed">Improved in-store service speed and transaction accuracy</p>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <p className="text-sm opacity-60 mb-2">Impact</p>
                  <p className="text-[15px] font-light leading-relaxed">Increased trust and clarity in digital payment flows</p>
                </div>
                <div className="border-t border-white/20 pt-6">
                  <p className="text-sm opacity-60 mb-2">Impact</p>
                  <p className="text-[15px] font-light leading-relaxed">Enabled scalable payments infrastructure across retail locations</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Challenge */}
      <section className="bg-neutral-50 py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-[15px] opacity-60 mb-8">{study.challenge.title}</h2>
            <div className="space-y-6">
              {study.challenge.description.map((paragraph, idx) => (
                <p key={idx} className="text-lg md:text-xl font-light leading-relaxed opacity-80">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mb-16">
            <h2 className="text-[15px] opacity-60 mb-8">{study.approach.title}</h2>
            <div className="space-y-6">
              {study.approach.description.map((paragraph, idx) => (
                <p key={idx} className="text-lg md:text-xl font-light leading-relaxed opacity-80">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Methodology */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {study.approach.methodology.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle size={20} className="mt-1 shrink-0" aria-hidden="true" />
                <p className="text-[15px] font-light leading-relaxed opacity-80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before vs After */}
      {study.beforeAfter && (
        <section className="bg-white py-32">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-2xl md:text-3xl font-light mb-20 max-w-4xl">{study.beforeAfter.title}</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Before */}
              <div className="border border-black/10 rounded-none p-10 md:p-12 bg-neutral-50 relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-black/20"></div>
                <div className="mb-8">
                  <p className="text-xs tracking-[0.2em] uppercase opacity-40 mb-2">Before</p>
                  <h3 className="text-xl md:text-2xl font-light">Previous State</h3>
                </div>
                <ul className="space-y-5">
                  {study.beforeAfter.before.map((item, idx) => (
                    <li key={idx} className="text-[15px] font-light leading-relaxed opacity-70 pl-6 relative before:content-['—'] before:absolute before:left-0 before:opacity-40">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="border border-black rounded-none p-10 md:p-12 bg-white relative shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
                <div className="absolute top-0 left-0 w-1 h-full bg-black"></div>
                <div className="mb-8">
                  <p className="text-xs tracking-[0.2em] uppercase opacity-40 mb-2">After</p>
                  <h3 className="text-xl md:text-2xl font-light">Transformed State</h3>
                </div>
                <ul className="space-y-5">
                  {study.beforeAfter.after.map((item, idx) => (
                    <li key={idx} className="text-[15px] font-light leading-relaxed opacity-90 pl-6 relative before:content-['—'] before:absolute before:left-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="max-w-4xl border-t border-black/10 pt-8">
              <p className="text-xs tracking-[0.1em] uppercase opacity-40 mb-3">Measurement</p>
              <p className="text-[15px] font-light leading-relaxed opacity-80">{study.beforeAfter.measurement}</p>
            </div>
          </div>
        </section>
      )}

      {/* Solution */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mb-16">
            <h2 className="text-[15px] opacity-60 mb-8">{study.solution.title}</h2>
            <div className="space-y-6">
              {study.solution.description.map((paragraph, idx) => (
                <p key={idx} className="text-lg md:text-xl font-light leading-relaxed opacity-80">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="max-w-4xl">
            <h3 className="text-sm opacity-60 mb-8">What I delivered</h3>
            <ul className="space-y-4">
              {study.solution.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 flex-shrink-0 opacity-40" aria-hidden="true" />
                  <span className="text-[15px] font-light leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-[15px] opacity-60 mb-16">{study.impact.title}</h2>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
            {study.impact.metrics.map((metric, idx) => (
              <div key={idx}>
                <p className="text-5xl md:text-6xl font-light mb-4">{metric.value}</p>
                <p className="text-lg font-light mb-2">{metric.label}</p>
                <p className="text-sm font-light opacity-70 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

          {/* Outcomes */}
          <div className="max-w-4xl">
            <h3 className="text-sm opacity-60 mb-8">What changed</h3>
            <ul className="space-y-4">
              {study.impact.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 flex-shrink-0 opacity-40" aria-hidden="true" />
                  <span className="text-[15px] font-light leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Next Case Study */}
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
  );
}