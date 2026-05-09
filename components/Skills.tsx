"use client";

import React, { useState } from "react";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiPhp,
  SiPython,
  SiHtml5,
  SiCss,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiGnubash,
  SiCanva,
  SiAnaconda,
  SiArduino,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";
import { FaJava, FaDatabase, FaNetworkWired } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { MdShowChart, MdVideoLibrary, MdPhotoLibrary, MdBrush } from "react-icons/md";
import { TbChartHistogram } from "react-icons/tb";

interface Skill {
  name: string;
  iconName: string;
  color: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

import { skillsData } from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
  SiC: <SiC />,
  SiCplusplus: <SiCplusplus />,
  FaJava: <FaJava />,
  SiJavascript: <SiJavascript />,
  SiPhp: <SiPhp />,
  FaDatabase: <FaDatabase />,
  SiPython: <SiPython />,
  SiHtml5: <SiHtml5 />,
  SiCss: <SiCss />,
  SiNumpy: <SiNumpy />,
  SiPandas: <SiPandas />,
  SiScikitlearn: <SiScikitlearn />,
  BsBarChartFill: <BsBarChartFill />,
  MdShowChart: <MdShowChart />,
  SiPytorch: <SiPytorch />,
  SiTensorflow: <SiTensorflow />,
  MdPhotoLibrary: <MdPhotoLibrary />,
  MdBrush: <MdBrush />,
  SiCanva: <SiCanva />,
  MdVideoLibrary: <MdVideoLibrary />,
  SiGnubash: <SiGnubash />,
  TbChartHistogram: <TbChartHistogram />,
  SiAnaconda: <SiAnaconda />,
  SiArduino: <SiArduino />,
  FaNetworkWired: <FaNetworkWired />,
  SiMongodb: <SiMongodb />,
  SiExpress: <SiExpress />,
  SiNodedotjs: <SiNodedotjs />,
  SiReact: <SiReact />,
  SiTailwindcss: <SiTailwindcss />,
  SiAdobephotoshop: <MdPhotoLibrary />,
  SiAdobeillustrator: <MdBrush />,
  SiFigma: <SiFigma />,
  SiAdobepremierepro: <MdVideoLibrary />,
  SiAdobeaftereffects: <MdVideoLibrary />,
  SiAdobeindesign: <MdBrush />,
};

const SkillBadge: React.FC<{ skill: Skill }> = ({ skill }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        padding: "12px 16px",
        borderRadius: "12px",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)"}`,
        background: hovered
          ? "linear-gradient(90deg, rgba(255,107,107,0.1), rgba(255,217,61,0.1))"
          : "rgba(255,255,255,0.05)",
        cursor: "default",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered ? "0 4px 20px rgba(255,107,107,0.3)" : "none",
        backdropFilter: "blur(4px)",
        userSelect: "none",
        // Allow wrapping on small screens to avoid horizontal scroll
        whiteSpace: "normal",
        maxWidth: "100%",
      }}
    >
      <span
        style={{
          fontSize: "20px",
          color: hovered ? skill.color : `${skill.color}cc`,
          transition: "color 0.25s ease",
          display: "flex",
          alignItems: "center",
        }}
      >
        {iconMap[skill.iconName]}
      </span>
      <span
        style={{
          fontSize: "14px",
          fontWeight: 500,
          color: hovered ? "#ffffff" : "rgba(255,255,255,0.8)",
          letterSpacing: "0.02em",
          transition: "color 0.25s ease",
          lineHeight: 1.1,
          wordBreak: "break-word",
        }}
        className="font-mono"
      >
        {skill.name}
      </span>
    </div>
  );
};

const FeaturedSkills: React.FC = () => {
  return (
    <section
      id="skills"
      className="px-4 sm:px-6 md:px-8 lg:px-10 font-sans"
      style={{
        minHeight: "100vh",
        background: "#000000",
        padding: "56px 16px",
      }}
    >
      {/* Ambient background blobs */}
      <div
        className="hidden sm:block"
        style={{
          position: "fixed",
          top: "10%",
          left: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        className="hidden sm:block"
        style={{
          position: "fixed",
          bottom: "15%",
          right: "10%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Title */}
        <h1
          className="font-bebas"
          style={{
            textAlign: "center",
            fontSize: "clamp(2rem, 5vw, 5rem)",
            fontWeight: 900,
            marginBottom: "36px",
            letterSpacing: "-0.02em",
            background: "linear-gradient(90deg, #555 0%, #fff 40%, #aaa 60%, #555 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 3s linear infinite"
          }}
        >
          Web Development & Graphic Designer
        </h1>

        {/* Categories */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {skillsData.map((section) => (
            <div key={section.category}>
              {/* Category header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "20px",
                }}
              >
                <h2
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.7)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                    margin: 0,
                  }}
                >
                  {section.category}
                </h2>
                <div
                  style={{
                    flex: 1,
                    height: "1px",
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0.2), transparent)",
                  }}
                />
              </div>

              {/* Skills badges */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                {section.skills.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSkills;