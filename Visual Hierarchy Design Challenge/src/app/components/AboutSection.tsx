import React from 'react';
import { Award, Users, Globe2, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Award,
    title: 'Academic Excellence',
    description: 'Ranked among the top 50 universities globally',
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Learn from industry leaders and renowned researchers',
  },
  {
    icon: Globe2,
    title: 'Global Community',
    description: 'Students from over 120 countries worldwide',
  },
  {
    icon: TrendingUp,
    title: 'Career Success',
    description: '95% employment rate within 6 months of graduation',
  },
];

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1758270705641-acf09b68a91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29sbGVnZSUyMHN0dWRlbnRzJTIwc3R1ZHlpbmclMjB0b2dldGhlcnxlbnwxfHx8fDE3NzMwMzg1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students studying together"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/40 to-transparent" />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-[#d4af37]/20 to-[#c9a028]/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[#002147]/5 rounded-full mb-4">
              <span className="text-[#002147] font-semibold text-sm">
                About Excellence University
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl text-[#002147] mb-6 leading-tight">
              Transforming Lives Through{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#c9a028]">
                Education & Innovation
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              For over 70 years, Excellence University has been at the forefront of academic
              innovation, research excellence, and student success. We combine rigorous
              academics with hands-on learning experiences to prepare our students for
              leadership in a rapidly changing world.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to diversity, inclusion, and global citizenship creates a
              vibrant learning community where students from all backgrounds can thrive and
              make their mark on the world.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#002147] to-[#003366] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#002147] mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
