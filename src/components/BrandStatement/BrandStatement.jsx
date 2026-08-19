import { useInView } from "../../hooks/useInView";

const ease = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";

export default function BrandStatement() {
  const [ref, inView] = useInView();

  return (
    <section
      id="our-story"
      className="relative overflow-hidden"
      style={{ background: "#F7F0E8", padding: "clamp(5rem, 12vw, 10rem) 0" }}
    >
      {/* Decorative oversized numeral — visible but not distracting */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none select-none"
        style={{ paddingRight: "clamp(1rem, 4vw, 4rem)" }}
      >
        <span
          className="font-serif"
          style={{
            fontSize: "clamp(14rem, 28vw, 32rem)",
            lineHeight: 1,
            fontWeight: 700,
            color: "rgba(107,66,38,0.055)",
            letterSpacing: "-0.05em",
          }}
        >
          01
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-14 relative z-10" ref={ref}>

        <div
          className="section-label mb-10"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.7s ease",
          }}
        >
          The MOKA Experience
        </div>

        {/* Three-line statement — staggered reveal */}
        <div style={{ maxWidth: "820px" }}>
          {[
            { text: "A little coffee.", weight: 300, style: "normal", color: "#3B261C" },
            { text: "A little comfort.", weight: 300, style: "italic", color: "#3B261C" },
            { text: "A lot of good moments.", weight: 600, style: "normal", color: "#6B4226" },
          ].map((line, i) => (
            <div key={i} style={{ overflow: "hidden" }}>
              <p
                className="font-serif"
                style={{
                  fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)",
                  fontWeight: line.weight,
                  fontStyle: line.style,
                  lineHeight: 1.2,
                  color: line.color,
                  transform: inView ? "translateY(0)" : "translateY(100%)",
                  transition: `transform 0.9s ${ease} ${i * 0.14}s`,
                }}
              >
                {line.text}
              </p>
            </div>
          ))}
        </div>

        {/* Thin rule + label */}
        <div
          className="flex items-center gap-5 mt-14"
          style={{
            maxWidth: "340px",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.8s ease 0.55s",
          }}
        >
          <div style={{ height: "1px", flex: 1, background: "#D9B99B" }} />
          <span className="section-label" style={{ color: "#B08060", whiteSpace: "nowrap" }}>
            Est. Every Morning
          </span>
        </div>
      </div>
    </section>
  );
}
