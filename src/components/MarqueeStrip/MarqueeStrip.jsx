const items = ["Coffee", "·", "Food", "·", "Moments", "·", "Community", "·", "Craft", "·", "Warmth", "·", "Good Vibes", "·"];
const repeated = [...items, ...items, ...items, ...items];

export default function MarqueeStrip({ dark = false }) {
  return (
    <div
      className="overflow-hidden py-3.5"
      style={{ background: dark ? "#2A1A12" : "#5C3A29" }}
      aria-hidden="true"
    >
      <div
        className="flex gap-7 whitespace-nowrap"
        style={{ animation: "marquee 28s linear infinite" }}
      >
        {repeated.map((w, i) => (
          <span
            key={i}
            style={{
              fontSize: "0.62rem",
              fontWeight: w === "·" ? 400 : 500,
              letterSpacing: w === "·" ? "0" : "0.22em",
              textTransform: "uppercase",
              color: dark ? "rgba(217,185,155,0.35)" : "rgba(255,253,248,0.5)",
              fontFamily: "Inter, sans-serif",
              flexShrink: 0,
            }}
          >
            {w}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
