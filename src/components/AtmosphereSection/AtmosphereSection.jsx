import { useEffect, useRef } from "react";
import { useInView } from "../../hooks/useInView";

export default function AtmosphereSection() {
  const [ref, inView] = useInView({ threshold: 0.05 });
  const imgRef = useRef(null);

  // Real parallax on scroll
  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return;
      const rect = imgRef.current.parentElement.getBoundingClientRect();
      const progress = -rect.top / window.innerHeight;
      imgRef.current.style.transform = `translateY(${progress * 60}px) scale(1.12)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="experiences"
      className="relative overflow-hidden"
      style={{ minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center" }}
      ref={ref}
    >
      {/* Parallax image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1800&q=85"
          alt="Warm café interior with ambient lighting"
          className="w-full h-full object-cover"
          loading="lazy"
          style={{ transform: "scale(1.12)", willChange: "transform" }}
        />
        {/* Layered overlay — darker at bottom for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(42,26,18,0.38) 0%, rgba(42,26,18,0.72) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <div
          className="section-label mb-7"
          style={{
            color: "rgba(217,185,155,0.8)",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        >
          The Atmosphere
        </div>

        <h2
          className="font-serif mb-6"
          style={{
            fontSize: "clamp(3rem, 7vw, 6rem)",
            fontWeight: 400,
            color: "#FFFDF8",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.9s ease 0.15s, transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94) 0.15s",
          }}
        >
          Stay a little longer.
        </h2>

        <p
          style={{
            fontSize: "1rem",
            color: "rgba(255,253,248,0.72)",
            lineHeight: 1.8,
            maxWidth: "38ch",
            margin: "0 auto 2.8rem",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.9s ease 0.3s",
          }}
        >
          Come for the coffee. Stay for the atmosphere.
        </p>

        <div
          className="flex flex-wrap gap-4 justify-center"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.9s ease 0.45s",
          }}
        >
          <a href="#booking" className="btn-primary-light">
            Book a Table
          </a>
          <a href="#gallery" className="btn-outline-light">
            See Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
