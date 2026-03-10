import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const newsItems = [
  {
    image: 'https://images.unsplash.com/photo-1766297248027-864589dbd336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMHJlc2VhcmNoJTIwc3R1ZGVudHxlbnwxfHx8fDE3NzMxMTM4NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Research',
    date: 'March 8, 2026',
    title: 'Breakthrough in Renewable Energy Research',
    excerpt: 'Our scientists have developed a novel solar cell technology with 40% efficiency.',
  },
  {
    image: 'https://images.unsplash.com/photo-1762176263996-a0713a49ee4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNsYXNzcm9vbSUyMGxlY3R1cmUlMjBtb2Rlcm58ZW58MXx8fHwxNzczMTEzODU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Event',
    date: 'March 15, 2026',
    title: 'Annual Business Leadership Summit 2026',
    excerpt: 'Join industry leaders and innovators for our flagship business conference.',
  },
  {
    image: 'https://images.unsplash.com/photo-1772971919700-d75c91ca7efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBjb2RpbmclMjBzdHVkZW50fGVufDF8fHx8MTc3MzExMzg1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'News',
    date: 'March 5, 2026',
    title: 'New AI & Machine Learning Lab Opens',
    excerpt: 'State-of-the-art facility equipped with cutting-edge technology for students.',
  },
];

export function NewsEventsSection() {
  return (
    <section className="py-20 bg-gray-50">
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
            <span className="text-[#002147] font-semibold text-sm">Stay Updated</span>
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#002147] mb-4">
            Latest News & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what's happening on campus and in our community
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#d4af37] text-white text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    5 min read
                  </div>
                </div>

                <h3 className="text-xl text-[#002147] mb-3 leading-tight group-hover:text-[#d4af37] transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">{item.excerpt}</p>

                <button className="flex items-center gap-2 text-[#002147] font-semibold group-hover:text-[#d4af37] transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="px-8 py-3 bg-[#002147] text-white rounded-xl font-semibold hover:bg-[#003366] transition-all hover:shadow-lg">
            View All News & Events
          </button>
        </motion.div>
      </div>
    </section>
  );
}
