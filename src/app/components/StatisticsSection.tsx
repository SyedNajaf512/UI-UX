import React from 'react';
import { Users, BookOpen, Trophy, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  {
    icon: Users,
    value: '52,000+',
    label: 'Students Enrolled',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: BookOpen,
    value: '300+',
    label: 'Programs Offered',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Trophy,
    value: 'Top 50',
    label: 'Global Rankings',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: GraduationCap,
    value: '180,000+',
    label: 'Alumni Worldwide',
    color: 'from-green-500 to-green-600',
  },
];

export function StatisticsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#002147] via-[#003366] to-[#002147] relative overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <span className="text-[#d4af37] font-semibold text-sm">Our Impact</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Numbers That Speak Volumes
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how we're making a difference in education and shaping the future
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Value */}
                  <div className="text-5xl text-white mb-2 group-hover:text-[#d4af37] transition-colors">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-gray-300 text-lg">{stat.label}</div>

                  {/* Hover Effect - Shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
