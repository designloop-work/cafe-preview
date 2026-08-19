import { useInView } from "../../hooks/useInView";

const desserts = [
  {
    name: "Cheesecake",
    note: "New York style, berry compote",
    img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=85",
    wide: false,
  },
  {
    name: "Chocolate Brownie",
    note: "Warm, fudgy, vanilla ice cream",
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=85",
    wide: true,
  },
  {
    name: "Tiramisu",
    note: "Espresso-soaked, mascarpone cream",
    img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=85",
    wide: false,
  },
  {
    name: "Croissant",
    note: "Buttery, flaky, baked fresh daily",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=85",
    wide: false,
  },
  {
    name: "Cookies",
    note: "House-baked, warm from the oven",
    img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=85",
    wide: true,
  },
];

export default function DessertSection() {
  const [ref, inView] = useInView();

  return (
    <section id="desserts" style={{ background: "#F7F0E8", padding: "clamp(5rem, 10vw, 8rem) 0", overflow: "hidden" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14" ref={ref}>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div
              className="section-label mb-4"
              style={{ opacity: inView ? 1 : 0, transition: "opacity 0.6s ease" }}
            >
              Pastry & Desserts
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
              Something sweet.
            </h2>
          </div>
          <p
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.8,
              color: "#765F50",
              maxWidth: "28ch",
              opacity: inView ? 1 : 0,
              transition: "opacity 0.7s ease 0.22s",
            }}
          >
            Baked fresh. Worth every bite.
          </p>
        </div>

        {/* Desktop: editorial grid. Mobile: horizontal scroll */}
        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-12 gap-4">
          {/* Row 1: narrow + wide + narrow */}
          <div
            className="col-span-3 overflow-hidden"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            <div className="img-zoom" style={{ aspectRatio: "3/4" }}>
              <img src={desserts[0].img} alt={desserts[0].name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <p className="font-serif mt-3" style={{ fontSize: "1.1rem", fontWeight: 500, color: "#3B261C" }}>{desserts[0].name}</p>
            <p style={{ fontSize: "0.78rem", color: "#9A7A68", marginTop: "0.25rem" }}>{desserts[0].note}</p>
          </div>

          <div
            className="col-span-6 overflow-hidden"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.18s, transform 0.7s ease 0.18s",
            }}
          >
            <div className="img-zoom" style={{ aspectRatio: "16/10" }}>
              <img src={desserts[1].img} alt={desserts[1].name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <p className="font-serif mt-3" style={{ fontSize: "1.1rem", fontWeight: 500, color: "#3B261C" }}>{desserts[1].name}</p>
            <p style={{ fontSize: "0.78rem", color: "#9A7A68", marginTop: "0.25rem" }}>{desserts[1].note}</p>
          </div>

          <div
            className="col-span-3 overflow-hidden"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.26s, transform 0.7s ease 0.26s",
            }}
          >
            <div className="img-zoom" style={{ aspectRatio: "3/4" }}>
              <img src={desserts[2].img} alt={desserts[2].name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <p className="font-serif mt-3" style={{ fontSize: "1.1rem", fontWeight: 500, color: "#3B261C" }}>{desserts[2].name}</p>
            <p style={{ fontSize: "0.78rem", color: "#9A7A68", marginTop: "0.25rem" }}>{desserts[2].note}</p>
          </div>

          {/* Row 2: wide + narrow */}
          <div
            className="col-span-8 overflow-hidden mt-4"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.34s, transform 0.7s ease 0.34s",
            }}
          >
            <div className="img-zoom" style={{ aspectRatio: "16/7" }}>
              <img src={desserts[4].img} alt={desserts[4].name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <p className="font-serif mt-3" style={{ fontSize: "1.1rem", fontWeight: 500, color: "#3B261C" }}>{desserts[4].name}</p>
            <p style={{ fontSize: "0.78rem", color: "#9A7A68", marginTop: "0.25rem" }}>{desserts[4].note}</p>
          </div>

          <div
            className="col-span-4 overflow-hidden mt-4"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.42s, transform 0.7s ease 0.42s",
            }}
          >
            <div className="img-zoom" style={{ aspectRatio: "4/3" }}>
              <img src={desserts[3].img} alt={desserts[3].name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <p className="font-serif mt-3" style={{ fontSize: "1.1rem", fontWeight: 500, color: "#3B261C" }}>{desserts[3].name}</p>
            <p style={{ fontSize: "0.78rem", color: "#9A7A68", marginTop: "0.25rem" }}>{desserts[3].note}</p>
          </div>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="flex lg:hidden gap-4 overflow-x-auto hide-scrollbar pb-2">
          {desserts.map((d, i) => (
            <div
              key={d.name}
              style={{
                flexShrink: 0,
                width: "72vw",
                maxWidth: "280px",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
              }}
            >
              <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  style={{ transition: "transform 0.7s ease" }}
                  onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                  onMouseLeave={e => e.target.style.transform = "scale(1)"}
                />
              </div>
              <p className="font-serif mt-3" style={{ fontSize: "1.1rem", fontWeight: 500, color: "#3B261C" }}>{d.name}</p>
              <p style={{ fontSize: "0.78rem", color: "#9A7A68", marginTop: "0.2rem" }}>{d.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
