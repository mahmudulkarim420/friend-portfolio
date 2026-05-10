"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 md:py-32 relative overflow-hidden" style={{ background: '#000000' }}>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 font-bebas" style={{
            background: "linear-gradient(90deg, #555 0%, #fff 40%, #aaa 60%, #555 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 3s linear infinite"
          }}>
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#ff6b6b] to-[#ffd93d] mx-auto mb-6" />
          <p className="text-xl sm:text-2xl text-gray-400 font-light max-w-2xl mx-auto">
            A showcase of my recent work in web development and graphic design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10 hover:border-[#ffd93d]/50 transition-all duration-500 hover:-translate-y-2 bg-[rgba(255,255,255,0.02)] shadow-lg hover:shadow-[0_10px_40px_rgba(255,217,61,0.15)]"
            >
              {/* Project Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ffd93d] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-white/5 text-gray-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.projectUrl && (
                    <Link href={project.projectUrl} target="_blank" className="flex items-center justify-center px-5 py-2.5 rounded-lg font-bold text-sm tracking-wide text-black transition-transform duration-300 hover:scale-105"
                          style={{ background: 'linear-gradient(90deg, #ff6b6b, #ffd93d)' }}>
                      View Design
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
