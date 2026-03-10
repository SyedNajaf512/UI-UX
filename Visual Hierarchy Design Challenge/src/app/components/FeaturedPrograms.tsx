import React from 'react';
import { BookOpen, Microscope, Briefcase, Code, Heart, Palette, Globe, Calculator } from 'lucide-react';
import { motion } from 'motion/react';

const programs = [
  {
    icon: Code,
    title: 'Computer Science',
    description: 'Master cutting-edge technologies and software development practices',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Briefcase,
    title: 'Business Administration',
    description: 'Develop leadership skills and strategic business acumen',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: Microscope,
    title: 'Biomedical Sciences',
    description: 'Explore life sciences and medical research innovations',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Palette,
    title: 'Fine Arts & Design',
    description: 'Cultivate creativity and artistic expression',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Calculator,
    title: 'Engineering',
    description: 'Build solutions to real-world technical challenges',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Heart,
    title: 'Healthcare & Nursing',
    description: 'Train for compassionate and skilled patient care',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Globe,
    title: 'International Relations',
    description: 'Understand global politics and diplomacy',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: BookOpen,
    title: 'Liberal Arts',
    description: 'Broaden perspectives through humanities and social sciences',
    color: 'from-teal-500 to-teal-600',
  },
];

export function FeaturedPrograms() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#002147]/5 rounded-full mb-4">
            <span className="text-[#002147] font-semibold text-sm">Our Programs</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#002147] mb-4">
            Explore Academic Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our diverse range of world-class programs designed to prepare you
            for success in your chosen field
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all cursor-pointer border border-gray-100"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl text-[#002147] mb-2 group-hover:text-[#d4af37] transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm font-semibold text-[#002147] group-hover:text-[#d4af37] transition-colors">
                    Learn More →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
