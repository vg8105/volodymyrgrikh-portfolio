import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export function CasePayshop() {
  return (
    <>
      <Helmet>
        <title>Payshop Payments & Retail Technology Transformation | Volodymyr Grikh</title>
        <meta
          name="description"
          content="Modernising Payshop payments ecosystem through Android devices, camera and barcode scanning, real-time data capture and improved transaction clarity across CTT's nationwide retail network."
        />
        <meta name="keywords" content="Payshop, digital payments, retail technology, Android devices, omnichannel, UX design, payment terminals, barcode scanning, Portugal" />
        <meta property="og:title" content="Payshop Payments & Retail Technology Transformation | Volodymyr Grikh" />
        <meta property="og:description" content="Modernising Payshop payments ecosystem through Android devices, camera and barcode scanning, real-time data capture and improved transaction clarity." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://volodymyrgrikh.vercel.app/case/payshop-payments" />
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
            <p className="text-[15px] opacity-60 mb-8">CTT · 2024 – Present</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight mb-12 leading-[1.05] max-w-5xl">
              Payshop Payments & Retail Technology Transformation
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-70 mb-12 max-w-3xl leading-relaxed">
              Modernising CTT's nationwide Payshop ecosystem by replacing legacy terminals and designing a new payment application for Android-based devices
            </p>
            <p className="text-sm opacity-60 mb-2">My Role</p>
            <p className="text-lg font-light">Head of Digital Experience — Product Design & UX Strategy</p>
          </motion.div>
        </section>

        {/* Context */}
        <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pb-32">
          <div className="max-w-4xl">
            <h2 className="text-[15px] opacity-60 mb-8">Context</h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed opacity-80">
              CTT operates a nationwide payments and logistics network serving millions of customers. This initiative focused on modernising the Payshop ecosystem by replacing legacy terminals and designing the new payment application that supports the upgraded infrastructure with Android-based devices.
            </p>
          </div>
        </section>

        {/* Problem */}
        <section className="bg-neutral-50 py-32">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-[15px] opacity-60 mb-8">The Problem</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[15px] font-light leading-relaxed opacity-80 pl-6 relative before:content-['—'] before:absolute before:left-0 before:opacity-40">
                    Outdated terminals limiting service capabilities and data capture
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[15px] font-light leading-relaxed opacity-80 pl-6 relative before:content-['—'] before:absolute before:left-0 before:opacity-40">
                    Manual entry causing errors and delays in customer service
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[15px] font-light leading-relaxed opacity-80 pl-6 relative before:content-['—'] before:absolute before:left-0 before:opacity-40">
                    Fragmented payment flows reducing clarity and trust
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[15px] font-light leading-relaxed opacity-80 pl-6 relative before:content-['—'] before:absolute before:left-0 before:opacity-40">
                    Lack of real-time data capture preventing seamless omnichannel experiences
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
              <h2 className="text-[15px] opacity-60 mb-8">My Approach</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Designed the new Payshop payment application with simplified flows and improved transaction transparency
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Led UX strategy for migration to Android devices with camera and barcode scanning capabilities
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Enabled real-time data capture to reduce manual entry and improve accuracy
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Implemented document verification through camera-based capture for identity and payment validation
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Before vs After */}
        <section className="bg-white py-32">
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

        {/* Impact */}
        <section className="bg-neutral-50 py-32">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-[15px] opacity-60 mb-8">Impact</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0 opacity-40" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Reduced manual entry errors through camera and barcode scanning capabilities
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0 opacity-40" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Improved service speed and transaction accuracy across retail network
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0 opacity-40" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Increased trust and clarity in digital payment flows
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="mt-1 shrink-0 opacity-40" aria-hidden="true" />
                  <p className="text-[15px] font-light leading-relaxed opacity-80">
                    Enabled scalable payments infrastructure across nationwide retail network
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Scale */}
        <section className="py-32">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-[15px] opacity-60 mb-8">Scale</h2>
              <p className="text-xl md:text-2xl font-light leading-relaxed opacity-80">
                Nationwide retail network · High-volume payment transactions · Physical + digital service ecosystem
              </p>
            </div>
          </div>
        </section>

        {/* Keywords */}
        <section className="bg-neutral-50 py-32">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-[15px] opacity-60 mb-8">Keywords</h2>
              <p className="text-[15px] font-light leading-relaxed opacity-70">
                Digital payments · Retail technology · Android devices · Omnichannel · Service design · Platform modernisation · Barcode scanning · Payment terminals · UX Portugal
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
