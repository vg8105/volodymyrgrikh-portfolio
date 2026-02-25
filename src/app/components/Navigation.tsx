import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: "/work", label: "Work" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Skip to main content - Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
      >
        Skip to main content
      </a>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-black/10 shadow-sm" role="navigation" aria-label="Main navigation">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <NavLink 
              to="/" 
              className="text-2xl font-light tracking-tight hover:opacity-70 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4 rounded-sm px-2 -mx-2"
              aria-label="Volodymyr Grikh - Home"
            >
              VG
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-[15px] font-light transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4 rounded-sm px-2 -mx-2 ${
                      isActive ? "opacity-100 font-medium" : "opacity-60 hover:opacity-100"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:opacity-70 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4 rounded-sm"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div id="mobile-menu" className="md:hidden py-6 border-t border-black/10">
              <div className="flex flex-col gap-6" role="menu">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-[15px] font-light transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-4 rounded-sm px-2 -mx-2 ${
                        isActive ? "opacity-100 font-medium" : "opacity-60"
                      }`
                    }
                    role="menuitem"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}