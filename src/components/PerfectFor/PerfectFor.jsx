import { useInView } from "../../hooks/useInView";

const moments = [
  {
    label: "Morning Coffee",
    desc: "Start slow. The day can wait.",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=85",
    cols: "lg:col-span-4",
    ratio: "3/4",
  },
  {
    label: "Work Sessions",
    desc: "Good coffee. Good focus.",
    img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=85",
    cols: "lg:col-span-4",
    ratio: "3/4",
  },
  {
    label: "Catch-ups",
    desc: "There's always time for one more conversation.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=85",
    cols: "lg:col-span-4",
    ratio: "3/4",
  },
  {
    label: "Date Nights",
    desc: "A little coffee, a little romance.",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&q=85",
    cols: "lg:col-span-7",
    ratio: "16/9",
  },
  {
    label: "Weekend Brunch",
    desc: "Take your time. You've earned it.",
    img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&q=85",
    cols: "lg:col-span-5",
    ratio: "16/9",
  },
];

export default function PerfectFor() {
  const [ref, inView] = useInView();

  return (
    <section style={{ background: "#FFFDF8", padding: "clamp(5rem, 10vw, 8rem) 0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14" ref={ref}>

        <div className="mb-12">
          <div
            className="section-label mb-4"
            style={{ opacity: inView ? 1 : 0, transition: "opacity 0.6s ease" }}
          >
            Every Occasion
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 500,
              color: "#3B261C",
              lineHeight: 1.1,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(18px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            Perfect for every moment.
          </h2>
        </div>

        {/* Row 1: three equal panels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
          {moments.slice(0, 3).map((m, i) => (
            <MomentCard key={m.label} m={m} i={i} inView={inView} />
          ))}
        </div>

        {/* Row 2: 7+5 split */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          {moments.slice(3).map((m, i) => (
            <div key={m.label} className={`sm:${m.cols}`}>
              <MomentCard m={m} i={i + 3} inView={inView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MomentCard({ m, i, inView }) {
  return (
    <div
      className="group relative overflow-hidden"
      style={{
        aspectRatio: m.ratio,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${i * 0.09}s, transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94) ${i * 0.09}s`,
      }}
    >
      <img
        src={m.img}
        alt={m.label}
        className="w-full h-full object-cover"
        loading="lazy"
        style={{
          transition: "transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)",
          willChange: "transform",
        }}
        onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
        onMouseLeave={e => e.target.style.transform = "scale(1)"}
      />
      {/* Gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(42,26,18,0.82) 0%, rgba(42,26,18,0.05) 55%)" }}
      />
      {/* Label */}
      <div className="absolute bottom-0 left-0 p-5 lg:p-6">
        <p
          className="font-serif"
          style={{ fontSize: "1.2rem", fontWeight: 500, color: "#FFFDF8", lineHeight: 1.2, marginBottom: "0.3rem" }}
        >
          {m.label}
        </p>
        <p style={{ fontSize: "0.78rem", color: "rgba(255,253,248,0.65)", lineHeight: 1.5 }}>
          {m.desc}
        </p>
      </div>
    </div>
  );
}
