"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ROLES = [
  "MERN Stack Developer",
  "Graphic Designer",
  "UI/UX Designer",
  "Creative Technologist",
];

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleVisible, setRoleVisible] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 10,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const cycle = setInterval(() => {
      setRoleVisible(false);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setRoleVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(cycle);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 80;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.size = Math.random() * 1.5 + 0.5;
        const colors = ['rgba(255,107,107,0.4)', 'rgba(255,217,61,0.4)', 'rgba(255,255,255,0.2)'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 - distance / 1500})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const marqueeText =
    "Khushbula Nahiyan • Khushbula Nahiyan • Khushbula Nahiyan • Khushbula Nahiyan • ";

  return (
    <>
      <style>{`
        /* ── Hero Section – scoped styles ── */

        .hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          min-height: 100dvh;
          overflow: hidden;
          background: #000000;
          display: flex;
          flex-direction: column;
          cursor: none;
        }

        /* ── Particles Canvas ── */
        .hero__particles {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .hero__bg-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 60% at 30% 50%, rgba(255,107,107,0.05) 0%, transparent 70%),
            radial-gradient(ellipse 50% 50% at 80% 30%, rgba(255,217,61,0.03) 0%, transparent 60%);
          z-index: 2;
          pointer-events: none;
        }

        /* ── Marquee ── */
        .hero__marquee-wrap {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          z-index: 2;
          pointer-events: none;
          padding-bottom: 0;
        }

        .hero__marquee-track {
          display: flex;
          white-space: nowrap;
          animation: marqueeScroll 22s linear infinite;
          will-change: transform;
        }

        .hero__marquee-text {
          font-family: var(--font-bebas);
          font-size: clamp(60px, 9vw, 140px);
          letter-spacing: 0.01em;
          line-height: 0.88;
          white-space: nowrap;
          color: rgba(255,255,255,0.04);
          padding-right: 0.15em;
          user-select: none;
        }

        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* ── Layout ── */
        .hero__layout {
          position: relative;
          z-index: 5;
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 0;
          min-height: 100vh;
          min-height: 100dvh;
          align-items: center;
          padding: 0 6% 60px;
          padding-top: 100px;
        }

        /* ── Left – Content ── */
        .hero__content {
          display: flex;
          flex-direction: column;
          gap: 28px;
          animation: heroFadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.2s both;
        }

        .hero__eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          animation: heroFadeUp 0.9s ease 0.1s both;
        }

        .hero__eyebrow-line {
          width: 36px;
          height: 1px;
          background: linear-gradient(90deg, #ff6b6b, #ffd93d);
        }

        .hero__eyebrow-text {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.5);
          font-family: var(--font-montserrat), sans-serif;
        }

        .hero__name {
          font-family: var(--font-bebas);
          font-size: clamp(52px, 7vw, 100px);
          letter-spacing: 0.02em;
          line-height: 0.92;
          background: linear-gradient(135deg, #ffffff 0%, #e8ddd0 40%, #ffffff 70%, #c8b89a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 0 40px rgba(255,200,150,0.12));
        }

        .hero__role-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 28px;
        }

        .hero__role-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff6b6b, #ffd93d);
          flex-shrink: 0;
          box-shadow: 0 0 10px rgba(255,107,107,0.6);
          animation: heroDotPulse 2.5s ease-in-out infinite;
        }

        .hero__role {
          font-family: var(--font-montserrat), sans-serif;
          font-size: clamp(13px, 1.4vw, 18px);
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.75);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }

        .hero__role.hidden {
          opacity: 0;
          transform: translateY(8px);
        }

        .hero__role.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero__bio {
          font-family: var(--font-dm-sans), sans-serif;
          font-size: clamp(14px, 1.1vw, 16px);
          line-height: 1.75;
          color: rgba(255,255,255,0.45);
          max-width: 480px;
        }

        /* ── CTAs ── */
        .hero__ctas {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          align-items: center;
        }

        .hero__btn-primary {
          font-family: var(--font-montserrat), sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #000;
          background: linear-gradient(90deg, #ff6b6b, #ffd93d);
          padding: 14px 28px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.22s, box-shadow 0.22s;
        }

        .hero__btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(255,107,107,0.45);
        }

        .hero__btn-outline {
          font-family: var(--font-montserrat), sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
          background: transparent;
          padding: 13px 28px;
          border-radius: 4px;
          border: 1px solid rgba(255,255,255,0.18);
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: border-color 0.22s, color 0.22s, transform 0.22s;
          backdrop-filter: blur(4px);
        }

        .hero__btn-outline:hover {
          border-color: rgba(255,107,107,0.5);
          color: #fff;
          transform: translateY(-3px);
        }

        /* ── Socials ── */
        .hero__socials {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .hero__social-label {
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          font-family: var(--font-montserrat), sans-serif;
        }

        .hero__social-divider {
          width: 1px;
          height: 16px;
          background: rgba(255,255,255,0.15);
        }

        .hero__social-link {
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          font-family: var(--font-montserrat), sans-serif;
          transition: color 0.2s;
          position: relative;
        }

        .hero__social-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #ff6b6b, #ffd93d);
          transition: width 0.25s ease;
        }

        .hero__social-link:hover {
          color: #fff;
        }

        .hero__social-link:hover::after {
          width: 100%;
        }

        /* ── Location chip ── */
        .hero__location-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(6px);
          width: fit-content;
          animation: heroFadeUp 0.8s ease 0.6s both;
        }

        .hero__location-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #ff6b6b;
          box-shadow: 0 0 8px rgba(255,107,107,0.7);
          animation: heroDotPulse 2.5s ease-in-out infinite;
        }

        .hero__location-text {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          font-family: var(--font-montserrat), sans-serif;
        }

        /* ── Right – Profile Card ── */
        .hero__card-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          animation: heroFadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.5s both;
        }

        .hero__card {
          position: relative;
          width: 300px;
          transition: transform 0.15s ease-out;
        }

        .hero__card-img-wrap {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,107,107,0.06);
          aspect-ratio: 3/4;
        }

        .hero__card-glow {
          position: absolute;
          inset: -1px;
          border-radius: 17px;
          background: linear-gradient(135deg, rgba(255,107,107,0.15), transparent 50%, rgba(255,217,61,0.1));
          z-index: 1;
          pointer-events: none;
        }

        .hero__card-badge {
          position: absolute;
          bottom: -18px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 100px;
          background: rgba(3,2,3,0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 8px 24px rgba(0,0,0,0.5);
          z-index: 10;
          white-space: nowrap;
        }

        .hero__card-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 8px rgba(74,222,128,0.7);
          animation: heroDotPulse 2s ease-in-out infinite;
        }

        .hero__card-badge-text {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          font-family: var(--font-montserrat), sans-serif;
        }

        /* Floating accent shapes */
        .hero__float-1 {
          position: absolute;
          top: -28px;
          right: -28px;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,107,107,0.2) 0%, transparent 70%);
          animation: heroFloat 6s ease-in-out infinite;
          pointer-events: none;
        }

        .hero__float-2 {
          position: absolute;
          bottom: 40px;
          left: -36px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,217,61,0.15) 0%, transparent 70%);
          animation: heroFloat 8s ease-in-out 1.5s infinite;
          pointer-events: none;
        }

        /* ── Scroll indicator ── */
        .hero__scroll {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 6;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          animation: heroFadeUp 1s ease 1.2s both;
        }

        .hero__scroll-label {
          font-size: 7px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          font-family: var(--font-montserrat), sans-serif;
        }

        .hero__scroll-line {
          width: 1px;
          height: 44px;
          background: linear-gradient(to bottom, rgba(255,107,107,0.6), transparent);
          animation: heroScrollPulse 2s ease-in-out infinite;
        }

        /* ── Custom cursor ── */
        .hero__cursor {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255,255,255,0.9);
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: width 0.2s, height 0.2s;
          mix-blend-mode: difference;
        }

        /* ── Divider line at bottom ── */
        .hero__divider {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,107,107,0.3) 30%, rgba(255,217,61,0.3) 70%, transparent);
          z-index: 6;
        }

        /* ── Keyframes ── */
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes heroDotPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.6); opacity: 0.6; }
        }

        @keyframes heroScrollPulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1; }
        }

        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-16px); }
        }

        /* ── Responsive – Tablet ── */
        @media (max-width: 1024px) {
          .hero__layout {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
            text-align: center;
            padding: 120px 6% 80px;
            gap: 48px;
          }

          .hero__content {
            align-items: center;
          }

          .hero__eyebrow {
            justify-content: center;
          }

          .hero__bio {
            max-width: 520px;
            text-align: center;
          }

          .hero__ctas {
            justify-content: center;
          }

          .hero__socials {
            justify-content: center;
          }

          .hero__card-wrap {
            order: -1;
          }

          .hero__card {
            width: 220px;
          }

          .hero__location-chip {
            align-self: center;
          }
        }

        /* ── Responsive – Mobile ── */
        @media (max-width: 640px) {
          .hero {
            cursor: default;
          }

          .hero__layout {
            padding: 110px 5% 72px;
            gap: 36px;
          }

          .hero__card {
            width: 180px;
          }

          .hero__name {
            font-size: clamp(44px, 12vw, 72px);
          }

          .hero__bio {
            font-size: 13px;
          }

          .hero__ctas {
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }

          .hero__btn-primary,
          .hero__btn-outline {
            width: 100%;
            text-align: center;
            max-width: 280px;
          }

          .hero__cursor {
            display: none;
          }

          .hero__scroll {
            bottom: 18px;
          }

          .hero__scroll-line {
            height: 28px;
          }

          .hero__marquee-text {
            font-size: clamp(40px, 14vw, 80px);
          }
        }
      `}</style>

      <section className="hero" ref={heroRef} id="home">
        {/* Particles Animation */}
        <canvas ref={canvasRef} className="hero__particles" />
        <div className="hero__bg-overlay" />

        {/* Custom cursor */}
        <div
          className="hero__cursor"
          style={{
            left: `calc(50% + ${mousePos.x * 20}px)`,
            top: `calc(50% + ${mousePos.y * 20}px)`,
          }}
        />

        {/* Main layout grid */}
        <div className="hero__layout">
          {/* ── LEFT: Text content ── */}
          <div className="hero__content">
            {/* Eyebrow */}
            <div className="hero__eyebrow">
              <div className="hero__eyebrow-line" />
              <span className="hero__eyebrow-text">Portfolio — 2025</span>
            </div>

            {/* Name */}
            <h1 className="hero__name">
              Khushbula<br />Nahiyan
            </h1>

            {/* Animated role */}
            <div className="hero__role-wrap">
              <div className="hero__role-dot" />
              <span className={`hero__role ${roleVisible ? "visible" : "hidden"}`}>
                {ROLES[roleIndex]}
              </span>
            </div>

            {/* Bio */}
            <p className="hero__bio">
              Crafting visually stunning digital experiences at the intersection of
              web development and graphic design. Based in Bangladesh, building for the world.
            </p>

            {/* Location chip */}
            <div className="hero__location-chip">
              <div className="hero__location-dot" />
              <span className="hero__location-text">Bangladesh</span>
            </div>

            {/* CTAs */}
            <div className="hero__ctas">
              <a href="#about" className="hero__btn-primary">View My Work</a>
              <a
                href="/Zihad_hasan_Resume.pdf"
                download="Khushbula_Nahiyan_CV.pdf"
                className="hero__btn-outline"
              >
                Download CV
              </a>
            </div>

            {/* Socials */}
            <div className="hero__socials">
              <span className="hero__social-label">Find me</span>
              <div className="hero__social-divider" />
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hero__social-link">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hero__social-link">LinkedIn</a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hero__social-link">Behance</a>
            </div>
          </div>

          {/* ── RIGHT: Profile Card ── */}
          <div className="hero__card-wrap">
            <div
              className="hero__card"
              style={{
                transform: `translate(${mousePos.x * -0.15}px, ${mousePos.y * -0.15}px)`,
              }}
            >
              <div className="hero__float-1" />
              <div className="hero__float-2" />

              <div className="hero__card-glow" />
              <div className="hero__card-img-wrap">
                <Image
                  src="/images/hero1.png"
                  alt="Khushbula Nahiyan – Web Developer & Graphic Designer"
                  fill
                  sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 300px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Status badge */}
              <div className="hero__card-badge">
                <div className="hero__card-badge-dot" />
                <span className="hero__card-badge-text">Available for work</span>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee watermark */}
        <div className="hero__marquee-wrap">
          <div className="hero__marquee-track">
            <span className="hero__marquee-text">{marqueeText}</span>
            <span className="hero__marquee-text" aria-hidden="true">{marqueeText}</span>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="hero__divider" />

        {/* Scroll indicator */}
        <div className="hero__scroll">
          <span className="hero__scroll-label">Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>
    </>
  );
};

export default Hero;
