import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  return (
    <div className="bg-white pt-32">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[15px] opacity-50 mb-8">Contact</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-16 leading-[1.05]">
            Let's create something exceptional
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-70 max-w-3xl leading-relaxed">
            I'm always interested in discussing new opportunities, collaborations, and projects in digital experience design, product strategy, and digital transformation.
          </p>
        </motion.div>
      </section>

      {/* Contact Info */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center" aria-hidden="true">
                  <Mail size={20} />
                </div>
                <p className="text-sm opacity-60">Email</p>
              </div>
              <a
                href="mailto:volodymyrgrikh@outlook.com"
                className="text-xl md:text-2xl font-light hover:opacity-70 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4 rounded-sm inline-block"
                aria-label="Send email to volodymyrgrikh@outlook.com"
              >
                volodymyrgrikh@outlook.com
              </a>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center" aria-hidden="true">
                  <Phone size={20} />
                </div>
                <p className="text-sm opacity-60">Phone</p>
              </div>
              <a
                href="tel:+351926462028"
                className="text-xl md:text-2xl font-light hover:opacity-70 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4 rounded-sm inline-block"
                aria-label="Call +351 926 462 028"
              >
                +351 926 462 028
              </a>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center" aria-hidden="true">
                  <MapPin size={20} />
                </div>
                <p className="text-sm opacity-60">Location</p>
              </div>
              <p className="text-xl md:text-2xl font-light opacity-90">Lisbon, Portugal</p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center" aria-hidden="true">
                  <Linkedin size={20} />
                </div>
                <p className="text-sm opacity-60">LinkedIn</p>
              </div>
              <a
                href="https://linkedin.com/in/vladygrikh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-light hover:opacity-70 transition-all duration-200 break-all focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4 rounded-sm inline-block"
                aria-label="View my LinkedIn profile (opens in new tab)"
              >
                linkedin.com/in/vladygrikh
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="bg-black text-white py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[15px] opacity-80 mb-8">Currently Available</p>
            <p className="text-2xl md:text-3xl font-light mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
              Open to both local and remote opportunities. Specialising in digital transformation, enterprise UX, and product leadership roles.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:volodymyrgrikh@outlook.com"
                className="px-8 py-4 bg-white text-black hover:bg-neutral-200 transition-all duration-200 text-[15px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-black rounded-sm font-light"
                aria-label="Send me an email"
              >
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/vladygrikh"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white hover:bg-white hover:text-black transition-all duration-200 text-[15px] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-black rounded-sm font-light"
                aria-label="Connect on LinkedIn (opens in new tab)"
              >
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}