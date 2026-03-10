import React from 'react';
import {
  GraduationCap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from 'lucide-react';

const footerLinks = {
  quickLinks: [
    'About Us',
    'Admissions',
    'Programs',
    'Research',
    'Campus Life',
    'Alumni',
  ],
  academics: [
    'Undergraduate',
    'Graduate',
    'Online Learning',
    'International Students',
    'Academic Calendar',
    'Library',
  ],
  resources: [
    'Student Portal',
    'Faculty Portal',
    'Career Services',
    'Financial Aid',
    'Campus Map',
    'Events',
  ],
  support: [
    'Contact Us',
    'Help Center',
    'Privacy Policy',
    'Terms of Service',
    'Accessibility',
    'Sitemap',
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#002147] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-[#d4af37] to-[#c9a028] p-2.5 rounded-lg shadow-lg">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Excellence University</h3>
                <p className="text-xs text-gray-400">Est. 1950</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Empowering future innovators through world-class education, groundbreaking
              research, and a commitment to excellence.
            </p>

            {/* Social Media */}
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#d4af37] flex items-center justify-center transition-all hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#d4af37]">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#d4af37]">Academics</h4>
            <ul className="space-y-3">
              {footerLinks.academics.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#d4af37]">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#d4af37]">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info & Newsletter */}
        <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#d4af37]">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-[#d4af37]" />
                <span className="text-sm">
                  123 University Avenue, Education City, EC 12345
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 shrink-0 text-[#d4af37]" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 shrink-0 text-[#d4af37]" />
                <span className="text-sm">info@excellenceuniversity.edu</span>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#d4af37]">
              Subscribe to Newsletter
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest news and updates delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#d4af37] transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#c9a028] rounded-lg font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2026 Excellence University. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
