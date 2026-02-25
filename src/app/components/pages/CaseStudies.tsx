import { Link } from "react-router";
import { motion } from "motion/react";
import { caseStudies } from "../../data/caseStudies";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function CaseStudies() {
  return (
    <div className="bg-white pt-32">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[15px] opacity-50 mb-8">Selected Work</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-12 leading-[1.05]">
            Real problems. Real impact.
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-70 max-w-3xl leading-relaxed">
            Every project starts with understanding people, their frustrations, their needs, their context. Click any project below to explore the full case study.
          </p>
        </motion.div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pb-32">
        <div className="grid grid-cols-1 gap-32">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link to={`/work/${study.id}`} className="group block cursor-pointer">
                {/* Visual */}
                <div className="aspect-[16/9] bg-neutral-100 rounded-2xl mb-12 overflow-hidden relative">
                  <ImageWithFallback
                    src={study.coverImage}
                    alt={`${study.company} ${study.title} case study cover image`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black px-6 py-3 rounded-full text-sm font-light flex items-center gap-2">
                      View Full Case Study
                      <ArrowRight size={16} aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <p className="text-[15px] opacity-60 mb-4">{study.company} · {study.period}</p>
                  <h2 className="text-4xl md:text-5xl font-light mb-6 group-hover:opacity-70 transition-opacity duration-200">
                    {study.title}
                  </h2>
                  <p className="text-lg md:text-xl font-light opacity-70 mb-8 max-w-3xl leading-relaxed">
                    {study.tagline}
                  </p>

                  {/* Key Metrics Preview */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    {study.impact.metrics.slice(0, 4).map((metric, idx) => (
                      <div key={idx}>
                        <p className="text-3xl font-light mb-2">{metric.value}</p>
                        <p className="text-sm opacity-60">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 text-[15px] font-light border-b border-black/0 group-hover:border-black/100 transition-all duration-200 pb-1">
                    Read Full Case Study
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}