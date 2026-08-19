import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import heroImg from "../../assets/hero.webp";

const ease = "cubic-bezier(0.77, 0, 0.175, 1)";

export default function Hero() {
  const [phase, setPhase] = useState(0);
  // phase 0 = nothing, 1 = image revealed, 2 = content in
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 80);
    const t2 = setTimeout(() => setPhase(2), 300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#FFFDF8" }}
    >
      {/* Image — right 55%, clip-path reveal left→right */}
      <div
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[56%]"
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
        {/* Left-edge cream fade so text reads cleanly */}
        <div
          className="absolute inset-y-0 left-0 w-1/2 hidden lg:block"
          style={{ background: "linear-gradient(90deg, #FFFDF8 0%, rgba(255,253,248,0.5) 55%, transparent 100%)" }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(59,38,28,0.04)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-14 pt-36 pb-28 lg:pt-0 lg:pb-0">
        <div style={{ maxWidth: "560px" }}>

          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 mb-9"
            style={{
              opacity: phase >= 2 ? 1 : 0,
              transform: phase >= 2 ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            <div style={{ width: "32px", height: "1px", background: "#8B5E3C", flexShrink: 0 }} />
            <span className="section-label">Coffee · Food · Moments</span>
          </div>

          {/* Headline — each line mask-reveals upward */}
          <h1 className="font-serif mb-8" style={{ lineHeight: 1.0 }}>
            {[
              { text: "Good coffee.", color: "#3B261C", delay: 0.2 },
              { text: "Better moments.", color: "#6B4226", delay: 0.36 },
            ].map(({ text, color, delay }) => (
              <span key={text} className="block" style={{ overflow: "hidden", paddingBottom: "0.06em" }}>
                <span
                  className="block font-serif"
                  style={{
                    fontSize: "clamp(3.2rem, 7.5vw, 6.8rem)",
                    fontWeight: 500,
                    color,
                    transform: phase >= 2 ? "translateY(0)" : "translateY(102%)",
                    transition: `transform 0.9s ${ease} ${delay}s`,
                  }}
                >
                  {text}
                </span>
              </span>
            ))}
          </h1>

          {/* Body copy */}
          <p
            style={{
              fontSize: "0.97rem",
              lineHeight: 1.85,
              color: "#765F50",
              maxWidth: "36ch",
              marginBottom: "2.8rem",
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
      </div>

      {/* Scroll indicator — vertical line + label */}
      <div
        className="absolute bottom-10 right-8 lg:right-14 z-10 flex flex-col items-center gap-2"
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
          0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
          30% { opacity: 1; }
          60% { transform: scaleY(1); transform-origin: top; }
          61% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
