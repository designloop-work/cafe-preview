import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "../../hooks/useInView";

const testimonials = [
  { quote: "Beautiful space, great coffee, and the kind of place you don't want to leave.", context: "Regular visitor" },
  { quote: "Perfect for catching up over coffee. The atmosphere does something to you.", context: "Weekend regular" },
  { quote: "The desserts alone are worth coming back for. Every single time.", context: "Dessert enthusiast" },
  { quote: "I come here to work, but I always end up staying for the food too.", context: "Remote worker" },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [ref, inView] = useInView();

  const go = (next) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(next);
      setFading(false);
    }, 220);
  };

  const prev = () => go((current - 1 + testimonials.length) % testimonials.length);
  const next = () => go((current + 1) % testimonials.length);

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#3B261C", padding: "clamp(5rem, 12vw, 10rem) 0" }}
    >
      {/* Decorative oversized quote — visible but restrained */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 font-serif select-none pointer-events-none"
        style={{
          fontSize: "clamp(16rem, 30vw, 36rem)",
          lineHeight: 0.75,
          color: "rgba(217,185,155,0.05)",
          fontWeight: 700,
          paddingRight: "clamp(0.5rem, 3vw, 3rem)",
        }}
      >
        "
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center relative z-10" ref={ref}>

        <div
          className="section-label mb-12"
          style={{
            color: "#8B5E3C",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.7s ease",
          }}
        >
          What People Say
        </div>

        {/* Quote with proper fade transition */}
        <div
          style={{
            opacity: fading ? 0 : inView ? 1 : 0,
            transform: fading ? "translateY(6px)" : "translateY(0)",
            transition: "opacity 0.22s ease, transform 0.22s ease",
            minHeight: "8rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <blockquote
            className="font-serif mb-5"
            style={{
              fontSize: "clamp(1.45rem, 3vw, 2.2rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#FFFDF8",
              lineHeight: 1.5,
              maxWidth: "36ch",
            }}
          >
            "{testimonials[current].quote}"
          </blockquote>
          <p
            className="section-label"
            style={{ color: "#8B5E3C" }}
          >
            — {testimonials[current].context}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-14">
          <button
            onClick={prev}
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "1px solid rgba(217,185,155,0.2)",
              color: "rgba(217,185,155,0.6)",
              cursor: "pointer",
              transition: "border-color 0.25s ease, color 0.25s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#D9B99B"; e.currentTarget.style.color = "#D9B99B"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(217,185,155,0.2)"; e.currentTarget.style.color = "rgba(217,185,155,0.6)"; }}
            aria-label="Previous"
          >
            <ChevronLeft size={15} strokeWidth={1.5} />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Testimonial ${i + 1}`}
                style={{
                  height: "2px",
                  width: i === current ? "32px" : "8px",
                  background: i === current ? "#D9B99B" : "rgba(217,185,155,0.22)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.35s ease, background 0.35s ease",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "1px solid rgba(217,185,155,0.2)",
              color: "rgba(217,185,155,0.6)",
              cursor: "pointer",
              transition: "border-color 0.25s ease, color 0.25s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#D9B99B"; e.currentTarget.style.color = "#D9B99B"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(217,185,155,0.2)"; e.currentTarget.style.color = "rgba(217,185,155,0.6)"; }}
            aria-label="Next"
          >
            <ChevronRight size={15} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
