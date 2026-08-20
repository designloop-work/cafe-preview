import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import heroImg from "../../assets/hero.webp";

const ease = "cubic-bezier(0.77, 0, 0.175, 1)";

export default function Hero() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 80);
    const t2 = setTimeout(() => setPhase(2), 300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section id="home" className="relative overflow-hidden" style={{ background: "#FFFDF8" }}>

      {/* ── DESKTOP layout (lg+): absolute image on right, text on left ── */}
      <div className="hidden lg:block">
        {/* Full-height image panel — right 56% */}
        <div
          className="absolute right-0 top-0 bottom-0 w-[56%]"
          style={{
            clipPath: phase >= 1 ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
            transition: `clip-path 1.4s ${ease}`,
          }}
        >
          <img
            src={heroImg}
            alt="Warm café atmosphere with specialty coffee"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          {/* Cream fade on left edge so text reads cleanly */}
          <div
            className="absolute inset-y-0 left-0 w-1/2"
            style={{ background: "linear-gradient(90deg, #FFFDF8 0%, rgba(255,253,248,0.5) 55%, transparent 100%)" }}
          />
          <div className="absolute inset-0" style={{ background: "rgba(59,38,28,0.04)" }} />
        </div>

        {/* Desktop text — vertically centred, min full viewport height */}
        <div
          className="relative z-10 w-full max-w-7xl mx-auto px-14"
          style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
        >
          <TextContent phase={phase} />
        </div>
      </div>

      {/* ── MOBILE layout (< lg): text on top, image below ── */}
      <div className="lg:hidden flex flex-col">
        {/* Text block */}
        <div className="px-6 pt-32 pb-10 relative z-10">
          <TextContent phase={phase} />
        </div>

        {/* Image below text — full width, fixed aspect ratio */}
        <div
          className="w-full relative overflow-hidden"
          style={{
            aspectRatio: "4/3",
            clipPath: phase >= 1 ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
            transition: `clip-path 1.4s ${ease}`,
          }}
        >
          <img
            src={heroImg}
            alt="Warm café atmosphere with specialty coffee"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          {/* Subtle top fade so it blends into the cream background */}
          <div
            className="absolute inset-x-0 top-0 h-16"
            style={{ background: "linear-gradient(to bottom, #FFFDF8, transparent)" }}
          />
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <div
        className="hidden lg:flex absolute bottom-10 right-14 z-10 flex-col items-center gap-2"
        style={{
          opacity: phase >= 2 ? 0.5 : 0,
          transition: "opacity 1s ease 1.4s",
        }}
        aria-hidden="true"
      >
        <span
          className="section-label"
          style={{ writingMode: "vertical-rl", fontSize: "0.58rem", letterSpacing: "0.18em" }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "48px",
            background: "linear-gradient(to bottom, #8B5E3C, transparent)",
            animation: phase >= 2 ? "scrollDrop 2.2s ease-in-out infinite" : "none",
          }}
        />
      </div>

      <style>{`
        @keyframes scrollDrop {
          0%   { transform: scaleY(0); transform-origin: top; opacity: 0; }
          30%  { opacity: 1; }
          60%  { transform: scaleY(1); transform-origin: top; }
          61%  { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }
      `}</style>
    </section>
  );
}

/* Shared text block used by both layouts */
function TextContent({ phase }) {
  return (
    <div style={{ maxWidth: "560px" }}>

      {/* Eyebrow */}
      <div
        className="flex items-center gap-3 mb-8"
        style={{
          opacity: phase >= 2 ? 1 : 0,
          transform: phase >= 2 ? "translateY(0)" : "translateY(10px)",
          transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
        }}
      >
        <div style={{ width: "28px", height: "1px", background: "#8B5E3C", flexShrink: 0 }} />
        <span className="section-label">Coffee · Food · Moments</span>
      </div>

      {/* Headline */}
      <h1 className="font-serif mb-7" style={{ lineHeight: 1.0 }}>
        {[
          { text: "Good coffee.", color: "#3B261C", delay: 0.2 },
          { text: "Better moments.", color: "#6B4226", delay: 0.36 },
        ].map(({ text, color, delay }) => (
          <span key={text} className="block" style={{ overflow: "hidden", paddingBottom: "0.06em" }}>
            <span
              className="block font-serif"
              style={{
                fontSize: "clamp(3rem, 7.5vw, 6.8rem)",
                fontWeight: 500,
                color,
                transform: phase >= 2 ? "translateY(0)" : "translateY(102%)",
                transition: `transform 0.9s cubic-bezier(0.77,0,0.175,1) ${delay}s`,
              }}
            >
              {text}
            </span>
          </span>
        ))}
      </h1>

      {/* Body */}
      <p
        style={{
          fontSize: "0.97rem",
          lineHeight: 1.85,
          color: "#765F50",
          maxWidth: "36ch",
          marginBottom: "2.5rem",
          opacity: phase >= 2 ? 1 : 0,
          transform: phase >= 2 ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s",
        }}
      >
        Thoughtfully brewed coffee, comforting plates, and a space made for slow mornings, long conversations, and everything in between.
      </p>

      {/* CTAs */}
      <div
        className="flex flex-wrap gap-4"
        style={{
          opacity: phase >= 2 ? 1 : 0,
          transform: phase >= 2 ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.8s ease 0.78s, transform 0.8s ease 0.78s",
        }}
      >
        <a href="#menu" className="btn-primary">
          Explore Menu <ArrowRight size={13} strokeWidth={2} />
        </a>
        <a href="#booking" className="btn-secondary">
          Book a Table
        </a>
      </div>
    </div>
  );
}
