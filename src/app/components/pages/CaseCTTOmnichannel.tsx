import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export function CaseCTTOmnichannel() {
  return (
    <>
      <Helmet>
        <title>CTT Omnichannel Transformation, Payshop Payments & Retail Modernisation | Volodymyr Grikh</title>
        <meta
          name="description"
          content="Transforming CTT's nationwide logistics and payments network by connecting in-store operations with digital services, modernising Payshop payment infrastructure and enabling seamless omnichannel journeys across 570+ locations."
        />
        <meta name="keywords" content="omnichannel transformation, logistics UX, Payshop payments, retail technology, Android terminals, CTT Portugal, digital payments, service design, barcode scanning" />
        <meta property="og:title" content="CTT Omnichannel Transformation & Payshop Payments | Volodymyr Grikh" />
        <meta property="og:description" content="Transforming CTT's payments and logistics network through omnichannel design, Android terminal modernisation and seamless digital-physical integration." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://volodymyrgrikh.vercel.app/case/ctt-omnichannel" />
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
            <p className="text-[15px] opacity-60 mb-8">CTT · April 2024 – Present</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight mb-12 leading-[1.05] max-w-5xl">
              Omnichannel transformation, Payshop payments and retail hardware modernisation
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-70 mb-12 max-w-3xl leading-relaxed">
              Transforming CTT's nationwide logistics and payments network by connecting in-store operations with digital services, modernising payment infrastructure and enabling seamless omnichannel journeys
            </p>
            <p className="text-sm opacity-60 mb-2">My Role</p>
            <p className="text-lg font-light">Head of Digital Experience (promoted from Senior Product Designer)</p>
          </motion.div>
        </section>

        {/* Overview */}
        <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pb-32">
          <div className="max-w-4xl">
            <h2 className="text-[15px] opacity-60 mb-8">Overview</h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-80">
              CTT operates a nationwide logistics and payments network that combines physical retail stores, self-service points and digital platforms. My work focused on transforming this ecosystem by connecting in-store operations with digital services, modernising payment infrastructure and enabling seamless omnichannel journeys. I led omnichannel logistics and retail services, designed Helena AI assistant for guided self-service, redesigned the Payshop mobile payment experience, and drove the migration from legacy payment terminals to Android-based devices with camera and barcode scanning capabilities.
            </p>
          </div>
        </section>

        {/* Challenge */}
        <section className="bg-neutral-50 py-32">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-[15px] opacity-60 mb-12">The Challenge</h2>
              <div className="space-y-6">
                <p className="text-lg md:text-xl font-light leading-relaxed opacity-80">
                  CTT faced fragmented journeys between store and digital channels. Legacy payment terminals were limiting data capture and service speed. Manual data entry was increasing errors and operational overhead. Complex payment flows reduced clarity and customer trust.
                </p>
                <p className="text-lg md:text-xl font-light leading-relaxed opacity-80">
                  Customers were frustrated. They would start a shipping request at a CTT store, only to find they couldn't continue it on their phone. Support teams were overwhelmed with questions that could have been answered digitally.
                </p>
                <p className="text-lg md:text-xl font-light leading-relaxed opacity-80">
                  The payment infrastructure was outdated. Legacy terminals required manual data entry for every transaction, creating opportunities for errors and slowing down service. Staff had no way to scan barcodes or capture documents, forcing customers to dictate long reference numbers while queues grew behind them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-32">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl mb-16">
              <h2 className="text-[15px] opacity-60 mb-12">My Approach</h2>
              <div className="space-y-6">
                <p className="text-lg md:text-xl font-light leading-relaxed opacity-80">
                  I mapped end-to-end service blueprints connecting retail operations and digital touchpoints. I spent weeks in CTT stores across Lisbon, watching real customers struggle with services. The insights were clear: people wanted continuity.
                </p>
                <p className="text-lg md:text-xl font-light leading-relaxed opacity-80">
                  I redesigned the Payshop payment experience to simplify flows and improve transaction transparency. Payment journeys were too complex, with unclear status and confusing terminology. I stripped away unnecessary steps, rewrote content in plain Portuguese, and introduced real-time validation.
                </p>
                <p className="text-lg md:text-xl font-light leading-relaxed opacity-80">
                  I led UX strategy for migrating legacy payment terminals to Android devices with camera and barcode scanning. This wasn't just a technology upgrade, it was a service transformation. Barcode scanning eliminated manual entry errors. Camera capture enabled document verification.
                </p>
              </div>
            </div>

            {/* Methodology */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="mt-1 shrink-0" aria-hidden="true" />
                <p className="text-[15px] font-light leading-relaxed opacity-80">
                  Spent 3 weeks observing customers across 12 retail locations
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="mt-1 shrink-0" aria-hidden="true" />
                <p className="text-[15px] font-light leading-relaxed opacity-80">
                  Mapped end-to-end service blueprints connecting retail and digital
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="mt-1 shrink-0" aria-hidden="true" />
                <p className="text-[15px] font-light leading-relaxed opacity-80">
                  Redesigned Payshop with simplified flows and transparency
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="mt-1 shrink-0" aria-hidden="true" />
                <p className="text-[15px] font-light leading-relaxed opacity-80">
                  Led UX for Android terminal migration with scanning
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="mt-1 shrink-0" aria-hidden="true" />
                <p className="text-[15px] font-light leading-relaxed opacity-80">
                  Established enterprise design system (32 components)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="mt-1 shrink-0" aria-hidden="true" />
                <p className="text-[15px] font-light leading-relaxed opacity-80">
                  Continuous discovery with real data validation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Before vs After */}
        <section className="bg-white py-32 border-t border-black/5">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-2xl md:text-3xl font-light mb-20 max-w-4xl">Before vs After — Payments and in-store technology</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Before */}
              <div className="border border-black/10 rounded-none p-10 md:p-12 bg-neutral-50 relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-black/20"></div>
                <div className="mb-8">
                  <p className="text-xs tracking-[0.2em] uppercase opacity-40 mb-2">Before</p>
                  <h3 className="text-xl md:text-2xl font-light">Previous State</h3>
                </div>
                <ul className="space-y-5">
                  <li className="text-[15px] font-light leading-relaxed opacity-70 pl-6 relative before:content-['—'] before:absolute before:left-0 before:opacity-40">
                    Legacy Payshop terminals with limited scanning capabilities
                  </li>
                  <li className="text-[15px] font-light leading-relaxed opacity-70 pl-6 relative before:content-['—'] before:absolute before:left-0 before:opacity-40">
                    Manual data entry increasing errors and service time
                  </li>
                  <li className="text-[15px] font-light leading-relaxed opacity-70 pl-6 relative before:content-['—'] before:absolute before:left-0 before:opacity-40">
                    Fragmented payment flows causing user confusion
                  </li>
                  <li className="text-[15px] font-light leading-relaxed opacity-70 pl-6 relative before:content-['—'] before:absolute before:left-0 before:opacity-40">
                    No real-time capture of barcodes or documents
                  </li>
                  <li className="text-[15px] font-light leading-relaxed opacity-70 pl-6 relative before:content-['—'] before:absolute before:left-0 before:opacity-40">
                    Customers restarting journeys between store and digital channels
                  </li>
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
                  <li className="text-[15px] font-light leading-relaxed opacity-90 pl-6 relative before:content-['—'] before:absolute before:left-0">
                    Android-based payment terminals with camera and barcode scanning
                  </li>
                  <li className="text-[15px] font-light leading-relaxed opacity-90 pl-6 relative before:content-['—'] before:absolute before:left-0">
                    Real-time data capture reducing manual input and errors
                  </li>
                  <li className="text-[15px] font-light leading-relaxed opacity-90 pl-6 relative before:content-['—'] before:absolute before:left-0">
                    Simplified Payshop payment flows with clearer transaction steps
                  </li>
                  <li className="text-[15px] font-light leading-relaxed opacity-90 pl-6 relative before:content-['—'] before:absolute before:left-0">
                    Faster and more accurate in-store service
                  </li>
                  <li className="text-[15px] font-light leading-relaxed opacity-90 pl-6 relative before:content-['—'] before:absolute before:left-0">
                    Seamless store-to-digital journeys improving continuity
                  </li>
                </ul>
              </div>
            </div>

            <div className="max-w-4xl border-t border-black/10 pt-8">
              <p className="text-xs tracking-[0.1em] uppercase opacity-40 mb-3">Measurement</p>
              <p className="text-[15px] font-light leading-relaxed opacity-80">
                Measured through task completion time, error rates, support requests and in-store service efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="bg-neutral-50 py-32">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="text-[15px] opacity-60 mb-16">Real Impact</h2>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
              <div>
                <p className="text-5xl md:text-6xl font-light mb-4">31%</p>
                <p className="text-lg font-light mb-2">Reduction in support queries</p>
                <p className="text-sm font-light opacity-70 leading-relaxed">
                  Helena handles routine questions, freeing teams for complex cases
                </p>
              </div>
              <div>
                <p className="text-5xl md:text-6xl font-light mb-4">24%</p>
                <p className="text-lg font-light mb-2">Increase in digital adoption</p>
                <p className="text-sm font-light opacity-70 leading-relaxed">
                  Customers now choose digital for tasks previously done in-store
                </p>
              </div>
              <div>
                <p className="text-5xl md:text-6xl font-light mb-4">3 weeks</p>
                <p className="text-lg font-light mb-2">Faster feature delivery</p>
                <p className="text-sm font-light opacity-70 leading-relaxed">
                  Design system reduced design-to-development time significantly
                </p>
              </div>
              <div>
                <p className="text-5xl md:text-6xl font-light mb-4">570+</p>
                <p className="text-lg font-light mb-2">Locations integrated</p>
                <p className="text-sm font-light opacity-70 leading-relaxed">
                  Seamless omnichannel services across entire retail network
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
                    Reduced manual entry errors through camera and barcode scanning capabilities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 flex-shrink-0 opacity-40" aria-hidden="true" />
                  <span className="text-[15px] font-light leading-relaxed">
                    Improved in-store service speed and transaction accuracy across retail network
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 flex-shrink-0 opacity-40" aria-hidden="true" />
                  <span className="text-[15px] font-light leading-relaxed">
                    Increased clarity and trust in digital payment flows through Payshop redesign
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 flex-shrink-0 opacity-40" aria-hidden="true" />
                  <span className="text-[15px] font-light leading-relaxed">
                    Enabled scalable payments infrastructure across nationwide retail network
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 flex-shrink-0 opacity-40" aria-hidden="true" />
                  <span className="text-[15px] font-light leading-relaxed">
                    Improved cross-channel continuity between store and digital services
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Keywords */}
        <section className="py-32">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-[15px] opacity-60 mb-8">Keywords</h2>
              <p className="text-[15px] font-light leading-relaxed opacity-70">
                Omnichannel transformation · Logistics UX · Payshop payments · Retail technology · Android terminals · Service design · Digital payments · Barcode scanning · CTT Portugal · Design systems
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
