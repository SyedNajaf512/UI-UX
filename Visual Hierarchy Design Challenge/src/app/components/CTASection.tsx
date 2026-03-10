import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  'World-class faculty and cutting-edge research',
  'Scholarships and financial aid available',
  'Career services and job placement support',
  'Vibrant campus life and student organizations',
];

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#002147] via-[#003366] to-[#004080] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-[#d4af37] font-semibold text-sm">
                Applications Now Open
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl mb-6 leading-tight">
              Ready to Begin Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f4d03f]">
                Journey?
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of students who are shaping the future. Start your application
              today and take the first step toward an exceptional education.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-[#d4af37] shrink-0" />
                  <span className="text-gray-200">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#c9a028] text-white rounded-xl font-semibold hover:shadow-2xl transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border-2 border-white/30 hover:bg-white/20 transition-all">
                Schedule a Campus Tour
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1622939788557-33b24b9e602d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBjYXAlMjBnb3dufGVufDF8fHx8MTc3MzExMzg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Graduation ceremony"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/50 to-transparent" />
            </div>

            {/* Floating Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6"
            >
              <div className="text-sm text-gray-600 mb-1">Application Deadline</div>
              <div className="text-2xl font-semibold text-[#002147]">April 30, 2026</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
