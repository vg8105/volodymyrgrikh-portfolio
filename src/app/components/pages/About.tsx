import { motion } from "motion/react";

export function About() {
  return (
    <div className="bg-white pt-32">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[15px] opacity-50 mb-8">Volodymyr Grikh · Head of Digital Experience</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-16 leading-[1.05]">
            Design is about solving problems, not decorating screens
          </h1>
        </motion.div>
      </section>

      {/* Profile */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pb-32">
        <div className="max-w-4xl space-y-8">
          <p className="text-xl md:text-2xl font-light leading-relaxed opacity-75">
            Over a decade leading digital transformation across logistics, GovTech, and enterprise platforms, where design decisions impact millions daily. I specialize in the intersection of user needs and business objectives, making complex systems feel effortless.
          </p>
          <p className="text-xl md:text-2xl font-light leading-relaxed opacity-75">
            I build and scale design teams while working closely with multidisciplinary partners, engineering teams, product managers, product owners, C-level executives, and business stakeholders. Whether launching a design practice from zero, restructuring siloed departments, or aligning cross-functional teams, I create environments where great work gets shipped.
          </p>
          <p className="text-xl md:text-2xl font-light leading-relaxed opacity-75">
            What drives me? Watching people complete critical tasks faster, with less frustration, with more confidence. Reducing support calls by 30% because the design made answers obvious. Seeing elderly citizens navigate government services independently for the first time.
          </p>
          <p className="text-xl md:text-2xl font-light leading-relaxed opacity-75">
            I translate between design, engineering, and business, turning strategic vision into shipped products, removing organizational blockers, and measuring success in outcomes achieved, not deliverables produced.
          </p>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-neutral-50 py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-[15px] opacity-60 mb-16">My Journey</p>
          <div className="max-w-4xl space-y-12">
            <div>
              <p className="text-sm opacity-40 mb-3">January 2025 – Present</p>
              <h3 className="text-2xl font-light mb-4">Head of Digital Experience · CTT</h3>
              <p className="text-[15px] font-light opacity-60 leading-relaxed mb-4">
                At CTT, I lead digital experience transformation across logistics, payments and retail operations. This includes the redesign of the Payshop mobile payment experience and the migration from legacy payment terminals to Android-based devices with camera and barcode scanning capabilities. Managing design teams, building CTT's first enterprise Design System, and driving cross-functional alignment between Product, Technology, and Business.
              </p>
              <ul className="text-[15px] font-light opacity-60 leading-relaxed space-y-2">
                <li>• Spearheading omnichannel transformation across complex multi-business ecosystem (Iberian market)</li>
                <li>• Leading Payshop payments modernisation and retail technology transformation</li>
                <li>• Building scalable design infrastructure supporting long-term platform evolution</li>
                <li>• Aligning experience decisions with operational efficiency and business objectives</li>
              </ul>
            </div>
            
            <div>
              <p className="text-sm opacity-40 mb-3">April 2024 – January 2025</p>
              <h3 className="text-2xl font-light mb-4">Senior Product Designer · CTT</h3>
              <p className="text-[15px] font-light opacity-60 leading-relaxed mb-4">
                Owned B2C and B2B product design across logistics, payments, and enterprise operations. Delivered discovery, design, and optimization initiatives improving task success by 20-30% and reducing development rework by ~25%.
              </p>
              <ul className="text-[15px] font-light opacity-60 leading-relaxed space-y-2">
                <li>• Designed Helena AI assistant and omnichannel service flows</li>
                <li>• Partnered with Product and Engineering to align user needs with business outcomes</li>
                <li>• Increased digital adoption through early validation and iterative delivery</li>
              </ul>
            </div>

            <div>
              <p className="text-sm opacity-40 mb-3">February 2022 – April 2024</p>
              <h3 className="text-2xl font-light mb-4">Lead UX/UI Designer · European Patent Office</h3>
              <p className="text-[15px] font-light opacity-60 leading-relaxed mb-4">
                Designed patent workbench platform supporting complex data analysis for professionals processing millions of documents. Translated technical workflows into clear, usable interfaces reducing task completion time by 25-35%.
              </p>
              <ul className="text-[15px] font-light opacity-60 leading-relaxed space-y-2">
                <li>• Designed AI-powered features: automated document analysis, technical drawing recognition</li>
                <li>• Reduced cognitive load through research with expert users across 3 countries</li>
                <li>• Improved information discoverability across massive datasets</li>
              </ul>
            </div>

            <div>
              <p className="text-sm opacity-40 mb-3">March 2020 – February 2022</p>
              <h3 className="text-2xl font-light mb-4">UX/UI Technical Team Leader · Portugal Social Security</h3>
              <p className="text-[15px] font-light opacity-60 leading-relaxed mb-4">
                Led UX/UI team designing COVID-19 emergency support flows for millions of Portuguese citizens. Delivered under extreme time pressure with 48-hour deployment cycles during pandemic crisis.
              </p>
              <ul className="text-[15px] font-light opacity-60 leading-relaxed space-y-2">
                <li>• Reduced submission errors from 38% to 6% through simplified forms and real-time validation</li>
                <li>• Decreased call center dependency by 20-30% via improved self-service UX</li>
                <li>• Designed accessible flows for diverse population including low digital literacy users</li>
                <li>• Served 1.8M+ citizens accessing emergency financial support</li>
              </ul>
            </div>

            <div>
              <p className="text-sm opacity-40 mb-3">April 2019 – March 2020</p>
              <h3 className="text-2xl font-light mb-4">UX/UI Product Designer · Bee Engineering ICT</h3>
              <p className="text-[15px] font-light opacity-60 leading-relaxed mb-4">
                Led UX redesign of corporate website into user-centered platform improving service clarity, brand positioning, and lead generation through research-driven information architecture.
              </p>
              <ul className="text-[15px] font-light opacity-60 leading-relaxed space-y-2">
                <li>• Improved content discoverability by ~25% via streamlined user flows</li>
                <li>• Increased mobile usability performance by ~30% with responsive design</li>
                <li>• Boosted engagement: 15-20% increase in time on site for target pages</li>
              </ul>
            </div>

            <div>
              <p className="text-sm opacity-40 mb-3">2018 – 2019</p>
              <h3 className="text-2xl font-light mb-4">Head of Design · DESATEC GmbH</h3>
              <p className="text-[15px] font-light opacity-60 leading-relaxed mb-4">
                Led design function across 5 business units (B2C, B2B, Trade & Distribution, Food Industry). Established unified design vision and methodologies eliminating fragmentation across siloed teams.
              </p>
              <ul className="text-[15px] font-light opacity-60 leading-relaxed space-y-2">
                <li>• Built cross-business design system reducing redundant work by ~70%</li>
                <li>• Standardized workflows improving collaboration between product, engineering, and business</li>
                <li>• Enabled more predictable delivery across multi-industry projects</li>
              </ul>
            </div>

            <div>
              <p className="text-sm opacity-40 mb-3">2015 – 2018</p>
              <h3 className="text-2xl font-light mb-4">Digital Designer · MSTF Partners (dentsu)</h3>
              <p className="text-[15px] font-light opacity-60 leading-relaxed mb-4">
                Delivered high-conversion digital campaigns and landing pages for major brands (MEO, BPI, EDP, CTT, Via Verde, Turismo de Portugal) across telecommunications, banking, energy, retail, and cultural sectors.
              </p>
              <ul className="text-[15px] font-light opacity-60 leading-relaxed space-y-2">
                <li>• Increased conversion rates by 15-25% through optimized visual hierarchy and CTAs</li>
                <li>• Reduced revision cycles by ~20% via tighter marketing-design-dev collaboration</li>
                <li>• Designed mobile-first responsive experiences with accessibility compliance</li>
                <li>• Used Adobe Creative Suite, Sketch, Figma for wireframes, prototypes, and production assets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What I Believe */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-[15px] opacity-60 mb-16">What I Believe</p>
          <div className="max-w-4xl space-y-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-light mb-4">Design must serve people first</h3>
              <p className="text-lg font-light opacity-60 leading-relaxed">
                I've watched elderly citizens struggle with digital forms designed by people who never observed real users. I've seen patent examiners waste hours hunting for information buried in bad IA. Good design starts with deep empathy, understanding not just what people do, but why they struggle.
              </p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-light mb-4">Business impact is the scoreboard</h3>
              <p className="text-lg font-light opacity-60 leading-relaxed">
                Beautiful designs that don't move metrics are decoration. I measure success in reduced support costs, faster task completion, increased adoption, improved satisfaction. If a design doesn't create measurable value for users and business, it's not done.
              </p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-light mb-4">Teams ship better when aligned</h3>
              <p className="text-lg font-light opacity-60 leading-relaxed">
                Great products aren't built in silos. I've spent years learning to speak design, engineering, and business fluently. My job isn't just to design, it's to align teams around shared outcomes, remove blockers, and create environments where everyone ships their best work.
              </p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-light mb-4">Building teams that adapt and deliver</h3>
              <p className="text-lg font-light opacity-60 leading-relaxed">
                I've built design teams from scratch, restructured siloed departments, and scaled design practices across complex organizations. The best teams aren't rigid, they adapt to company culture, business needs, and market dynamics. I hire for curiosity and craft, mentor for growth, and create structures that empower autonomy while ensuring strategic alignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="bg-neutral-50 py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <p className="text-[15px] opacity-60 mb-12">Education</p>
              <div>
                <h3 className="text-2xl font-light mb-2">Bachelor of Arts</h3>
                <p className="text-[15px] opacity-60">
                  Kyiv National University of Technologies and Design
                </p>
              </div>
            </div>

            <div>
              <p className="text-[15px] opacity-60 mb-12">Professional Certifications</p>
              <div className="space-y-8">
                <div>
                  <p className="text-sm opacity-40 mb-3">Product & Strategy</p>
                  <ul className="space-y-2 text-[15px] opacity-60">
                    <li>• Aha! Product Management Professional Certificate | Aha! (2025)</li>
                    <li>• Fundamentos para Gestão de Projetos | Microsoft & LinkedIn (2025)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm opacity-40 mb-3">UX, Service Design & Accessibility</p>
                  <ul className="space-y-2 text-[15px] opacity-60">
                    <li>• Design Thinking | UXcel (2024)</li>
                    <li>• Service Design | UXcel (2024)</li>
                    <li>• Design Accessibility | UXcel (2024)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm opacity-40 mb-3">Digital & Interaction Design</p>
                  <ul className="space-y-2 text-[15px] opacity-60">
                    <li>• Mobile Design | UXcel (2024)</li>
                    <li>• AI in UX/UI Design | UXcel (2024)</li>
                    <li>• Design Composition | UXcel (2024)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <p className="text-[15px] opacity-60 mb-12">Core Capabilities</p>
              <div className="flex flex-wrap gap-4">
                {[
                  "Digital Transformation",
                  "Product Strategy",
                  "Design Systems",
                  "Service Design",
                  "Enterprise UX",
                  "Team Building & Leadership",
                  "Stakeholder Management",
                  "C-level Communication",
                  "Agile Leadership",
                  "Cross-functional Collaboration",
                ].map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-neutral-100 text-[15px] font-light">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[15px] opacity-60 mb-12">Tools I Use Daily</p>
              <div className="flex flex-wrap gap-4">
                {["Figma", "Jira", "Businessmap", "Microsoft 365", "Adobe Creative Suite"].map(
                  (tool, idx) => (
                    <span key={idx} className="px-4 py-2 bg-neutral-100 text-[15px] font-light">
                      {tool}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="bg-neutral-50 py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <p className="text-[15px] opacity-60 mb-12">Languages</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { language: "Portuguese", level: "Native" },
              { language: "Ukrainian", level: "Native" },
              { language: "Russian", level: "Native" },
              { language: "English", level: "Professional" },
              { language: "Spanish", level: "Professional" },
              { language: "French", level: "Basic" },
            ].map((item, idx) => (
              <div key={idx}>
                <p className="text-lg font-light mb-1">{item.language}</p>
                <p className="text-sm opacity-40">{item.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}