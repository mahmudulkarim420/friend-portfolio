"use client";

import { experiences } from "@/data/experience";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 md:py-32 relative overflow-hidden" style={{ background: '#000000' }}>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-red-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-yellow-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 font-bebas" style={{
            background: "linear-gradient(90deg, #555 0%, #fff 40%, #aaa 60%, #555 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 3s linear infinite"
          }}>
            Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#ff6b6b] to-[#ffd93d] mx-auto mb-6" />
          <p className="text-xl sm:text-2xl text-gray-400 font-light max-w-2xl mx-auto">
            A timeline of my professional growth and creative contributions.
          </p>
        </div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[#ff6b6b] via-[#ffd93d] to-transparent opacity-30" />

          <div className="space-y-24 md:space-y-32">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-between ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Connector Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center z-20">
                  <div className={`w-5 h-5 rounded-full border-4 border-black shadow-[0_0_15px_rgba(255,107,107,0.5)] transition-transform duration-500 hover:scale-150 ${exp.current ? 'animate-pulse' : ''}`} 
                       style={{ background: 'linear-gradient(90deg, #ff6b6b, #ffd93d)' }} />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div 
                    className={`group relative rounded-2xl p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${
                      exp.current 
                      ? 'border-2 border-[#ff6b6b]/50 shadow-[0_10px_40px_rgba(255,107,107,0.2)]' 
                      : 'border border-white/10 hover:border-white/20'
                    }`}
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.03)',
                    }}
                  >
                    {/* Period Badge */}
                    <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
                         style={{ background: 'linear-gradient(90deg, #ff6b6b, #ffd93d)', color: '#000' }}>
                      {exp.period}
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[#ffd93d] transition-colors duration-300">
                      {exp.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
                      <p className="text-xl font-semibold text-white/90">{exp.company}</p>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30 hidden sm:block" />
                      <p className="text-sm text-white/50 uppercase tracking-widest">{exp.location}</p>
                    </div>

                    <p className="text-gray-400 mb-8 leading-relaxed italic">
                      &quot;{exp.description}&quot;
                    </p>

                    <div className="space-y-4">
                      {exp.achievements.map((achievement, achIdx) => (
                        <div key={achIdx} className="flex items-start group/ach">
                          <div className="mt-1.5 mr-4 w-1.5 h-1.5 rounded-full bg-[#ff6b6b] group-hover/ach:scale-125 transition-transform" />
                          <p className="text-gray-300 text-sm leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>

                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ff6b6b]/5 to-[#ffd93d]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>

                {/* Empty space for the other side of the timeline */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
