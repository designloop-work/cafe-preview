import { ArrowRight, MapPin } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import siteConfig from "../../data/siteConfig";

export default function FinalCTA() {
  const [ref, inView] = useInView();

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ background: "#F7F0E8", padding: "clamp(6rem, 14vw, 12rem) 0" }}
    >
      {/* Watermark — opacity raised so it's actually visible as a design element */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span
          className="font-serif"
          style={{
            fontSize: "clamp(10rem, 24vw, 28rem)",
            fontWeight: 700,
            color: "rgba(107,66,38,0.055)",
            whiteSpace: "nowrap",
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          MOKA
        </span>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center" ref={ref}>
        <div
          className="section-label mb-7"
          style={{ opacity: inView ? 1 : 0, transition: "opacity 0.7s ease" }}
        >
          Find Us
        </div>

        <h2
          className="font-serif mb-6"
          style={{
            fontSize: "clamp(2.6rem, 6vw, 5rem)",
            fontWeight: 500,
            color: "#3B261C",
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(22px)",
            transition: "opacity 0.85s ease 0.12s, transform 0.85s cubic-bezier(0.25,0.46,0.45,0.94) 0.12s",
          }}
        >
          Your neighbourhood<br />café is waiting.
        </h2>

        <p
          style={{
            fontSize: "0.95rem",
            lineHeight: 1.85,
            color: "#765F50",
            maxWidth: "36ch",
            margin: "0 auto 3rem",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.85s ease 0.26s",
          }}
        >
          Great coffee, good food, and a place worth coming back to.
        </p>

        <div
          className="flex flex-wrap gap-4 justify-center"
          style={{ opacity: inView ? 1 : 0, transition: "opacity 0.85s ease 0.4s" }}
        >
          <a
            href={siteConfig.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MapPin size={13} strokeWidth={1.5} /> Get Directions
          </a>
          <a href="#booking" className="btn-secondary">
            Book a Table <ArrowRight size={13} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
