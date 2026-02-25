import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Home() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[15px] opacity-50 mb-8">Volodymyr Grikh · Head of Digital Experience</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-12 leading-[1.05]">
            Building digital platforms that connect logistics, payments and public services at scale
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-70 max-w-4xl leading-relaxed">
            I lead digital transformation across logistics, GovTech, and enterprise platforms, from AI-powered assistants to design systems that scale. Currently at CTT, previously EPO and Portugal's Social Security. Over a decade turning complex problems into simple, accessible experiences.
          </p>
          <p className="text-[15px] opacity-60 mt-8 pt-8 border-t border-neutral-200">
            Available for international leadership roles in Product, Design and Digital Transformation.
          </p>
        </motion.div>
      </section>

      {/* Impact at a Glance */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-[15px] opacity-50 mb-8">Impact at a Glance</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <p className="text-3xl md:text-4xl font-light mb-2">20–40%</p>
              <p className="text-[15px] font-light opacity-70 leading-relaxed">Improvement in task success and error reduction</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-light mb-2">Up to 30%</p>
              <p className="text-[15px] font-light opacity-70 leading-relaxed">Reduction in call centre dependency</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-light mb-2">~30%</p>
              <p className="text-[15px] font-light opacity-70 leading-relaxed">Faster onboarding in enterprise workflows</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-light mb-2">Nationwide</p>
              <p className="text-[15px] font-light opacity-70 leading-relaxed">Modernised retail payments infrastructure across network</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-light mb-2">Seamless</p>
              <p className="text-[15px] font-light opacity-70 leading-relaxed">Cross-channel continuity between store and digital services</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-light mb-2">4M+</p>
              <p className="text-[15px] font-light opacity-70 leading-relaxed">Citizens served through GovTech platforms annually</p>
            </div>
          </div>
          <p className="text-[13px] opacity-50 mt-12 leading-relaxed">
            Digital Transformation · Payments UX · Retail Tech · Omnichannel CX · Enterprise UX · Platform Design · AI Integration · Service Design · DesignOps · Product Strategy
          </p>
        </motion.div>
      </section>

      {/* Philosophy */}
      <section className="py-32 bg-neutral-50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-[15px] opacity-60 mb-8">My Philosophy</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-12 leading-[1.1]">
              Good design isn't about aesthetics. It's about understanding why someone struggles, what they need to accomplish, and removing everything in their way.
            </h2>
            <p className="text-lg md:text-xl font-light opacity-70 leading-relaxed">
              I've spent thousands of hours watching people interact with systems, from elderly citizens filling out government forms on cracked smartphone screens to patent examiners processing millions of documents daily. That observation informs every decision I make. Because when design truly works, it becomes invisible. People don't notice the interface, they just get things done.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[15px] opacity-50 mb-16">Selected Work</p>
            
            <div className="grid grid-cols-1 gap-24">
              {/* CTT Case */}
              <article>
                <Link to="/case/ctt-omnichannel" className="group cursor-pointer">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                      <p className="text-sm opacity-60 mb-4">CTT · 2023 – 2024</p>
                      <h2 className="text-4xl md:text-5xl font-light mb-6 group-hover:opacity-70 transition-opacity duration-200">
                        CTT: Omnichannel Transformation & Payments Modernisation
                      </h2>
                      <p className="text-lg md:text-xl font-light opacity-70 mb-8 leading-relaxed">
                        Redesigned Payshop payment experience and led migration from legacy terminals to Android devices with camera and barcode scanning across nationwide retail network.
                      </p>
                      <div className="grid grid-cols-2 gap-8 mb-8">
                        <div>
                          <p className="text-3xl font-light mb-1" aria-label="20 to 30 percent">20–30%</p>
                          <p className="text-sm opacity-60">Improved task success</p>
                        </div>
                        <div>
                          <p className="text-3xl font-light mb-1" aria-label="25 percent">~25%</p>
                          <p className="text-sm opacity-60">Reduced development rework</p>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 text-[15px] font-light border-b border-black/0 group-hover:border-black/100 transition-all duration-200 pb-1">
                        Read full case study
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="order-1 lg:order-2 aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden relative">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1766083274361-ed1f8c94c191?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1pbmltYWxpc3QlMjBsaW5lJTIwYXJ0JTIwbW9ub2Nocm9tZSUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NzIwMTUzMzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="AI assistant interface design for logistics platform"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </Link>
              </article>

              {/* GovTech Case */}
              <article>
                <Link to="/case/govtech-social-security" className="group cursor-pointer">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden relative">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1707638841308-252461607951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW1wbGUlMjBnZW9tZXRyaWMlMjBsaW5lJTIwZHJhd2luZyUyMGJsYWNrJTIwd2hpdGV8ZW58MXx8fHwxNzcyMDE1MzQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Government digital services platform interface"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black px-6 py-3 rounded-full text-sm font-light flex items-center gap-2">
                          View Case Study
                          <ArrowRight size={16} aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm opacity-60 mb-4">Portugal Social Security · 2021 – 2022</p>
                      <h2 className="text-4xl md:text-5xl font-light mb-6 group-hover:opacity-70 transition-opacity duration-200">
                        GovTech Platform Serving Millions
                      </h2>
                      <p className="text-lg md:text-xl font-light opacity-70 mb-8 leading-relaxed">
                        Redesigned critical social services platform used by over 4 million citizens annually.
                      </p>
                      <div className="grid grid-cols-2 gap-8 mb-8">
                        <div>
                          <p className="text-3xl font-light mb-1">4M+</p>
                          <p className="text-sm opacity-60">Annual users</p>
                        </div>
                        <div>
                          <p className="text-3xl font-light mb-1">35%</p>
                          <p className="text-sm opacity-60">Faster task completion</p>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-2 text-[15px] font-light border-b border-black/0 group-hover:border-black/100 transition-all duration-200 pb-1">
                        Read full case study
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            </div>

            <div className="mt-16">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 text-[15px] hover:opacity-60 transition-opacity group focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded-sm"
                aria-label="View all case studies"
              >
                View all case studies
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I Bring */}
      <section className="py-32 bg-neutral-50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[15px] opacity-60 mb-16">What I Bring</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <article>
                <h3 className="text-2xl font-light mb-4">User-Centered Problem Solving</h3>
                <p className="text-[15px] font-light opacity-70 leading-relaxed">
                  I don't design interfaces, I solve problems. Every project starts with deep observation: watching people struggle, understanding their context, identifying what's actually blocking them. Only then do I design solutions.
                </p>
              </article>
              <article>
                <h3 className="text-2xl font-light mb-4">Business Impact Focus</h3>
                <p className="text-[15px] font-light opacity-70 leading-relaxed">
                  Beautiful design that doesn't drive results is decoration. I optimize for outcomes: reduced support costs, faster task completion, increased adoption. Every design decision ties back to measurable business value.
                </p>
              </article>
              <article>
                <h3 className="text-2xl font-light mb-4">Cross-Functional Leadership</h3>
                <p className="text-[15px] font-light opacity-70 leading-relaxed">
                  Great products require alignment between design, engineering, and business. I build bridges. I speak all three languages. I turn siloed teams into collaborative forces that ship faster and smarter.
                </p>
              </article>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 tracking-tight">
              Let's solve real problems together
            </h2>
            <p className="text-lg md:text-xl font-light opacity-80 mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm currently based in Lisbon and open to opportunities where design can drive meaningful impact, for users and for business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 text-[15px] hover:opacity-80 transition-opacity group mt-8 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded-sm"
              aria-label="Get in touch with me"
            >
              Get in touch
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}