import React, { useState, useEffect } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    'Home',
    'Programs',
    'Admissions',
    'Research',
    'Faculty',
    'Student Portal',
    'Contact',
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-br from-[#002147] to-[#003366] p-2.5 rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-[#002147] leading-tight">
                Excellence University
              </h1>
              <p className="text-xs text-gray-500">Est. 1950</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#002147] hover:bg-gray-50 rounded-lg transition-all"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button - Desktop */}
          <button className="hidden lg:block px-6 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#c9a028] text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5">
            Apply Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <ul className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#002147] hover:bg-gray-50 rounded-lg transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-[#d4af37] to-[#c9a028] text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                    Apply Now
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
