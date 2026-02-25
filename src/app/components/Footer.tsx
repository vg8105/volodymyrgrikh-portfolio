import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-black/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left */}
          <div className="max-w-md">
            <h3 className="text-2xl font-light mb-4">Volodymyr Grikh</h3>
            <p className="text-[15px] opacity-60 leading-relaxed">
              Head of Digital Experience specialising in logistics platforms, GovTech and enterprise systems.
            </p>
          </div>

          {/* Right - Social */}
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/vladygrikh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-black/10 hover:bg-black hover:text-white hover:border-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4"
              aria-label="Connect with me on LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:volodymyrgrikh@outlook.com"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-black/10 hover:bg-black hover:text-white hover:border-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4"
              aria-label="Send me an email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-black/10">
          <p className="text-sm opacity-40">
            © {new Date().getFullYear()} Volodymyr Grikh
          </p>
        </div>
      </div>
    </footer>
  );
}