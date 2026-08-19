import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useInView } from "../../hooks/useInView";
import { menu, menuCategories } from "../../data/menu";

function MenuItem({ item }) {
  return (
    <div
      className="group flex items-baseline justify-between py-5 gap-4"
      style={{ borderBottom: "1px solid #EDE0D0" }}
    >
      <div style={{ flex: 1 }}>
        <div className="flex items-center gap-3 mb-1.5 flex-wrap">
          <span
            className="font-serif"
            style={{ fontSize: "1.08rem", fontWeight: 500, color: "#3B261C", lineHeight: 1.3 }}
          >
            {item.name}
          </span>
          {item.popular && (
            <span
              style={{
                fontSize: "0.58rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#8B5E3C",
                border: "1px solid #D9B99B",
                padding: "0.15rem 0.5rem",
              }}
            >
              Popular
            </span>
          )}
        </div>
        <p style={{ fontSize: "0.82rem", color: "#9A7A68", lineHeight: 1.65 }}>{item.desc}</p>
      </div>
      <span
        className="font-serif flex-shrink-0"
        style={{ fontSize: "1rem", fontWeight: 500, color: "#6B4226" }}
      >
        {item.price}
      </span>
    </div>
  );
}

export default function MenuPreview() {
  const [active, setActive] = useState("coffee");
  const [ref, inView] = useInView();
  const items = menu[active] || [];

  return (
    <section id="menu" style={{ background: "#FFFDF8", padding: "clamp(5rem, 10vw, 8rem) 0" }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-14" ref={ref}>

        {/* Left-aligned header */}
        <div className="mb-12">
          <div
            className="section-label mb-4"
            style={{ opacity: inView ? 1 : 0, transition: "opacity 0.6s ease" }}
          >
            What We Serve
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
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
              The Menu
            </h2>
            <a
              href="#booking"
              className="btn-secondary self-start sm:self-auto"
              style={{ opacity: inView ? 1 : 0, transition: "opacity 0.7s ease 0.25s" }}
            >
              View Full Menu <ArrowRight size={13} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Category tabs — left-aligned, generous spacing */}
        <div
          className="flex gap-2 overflow-x-auto hide-scrollbar mb-10 pb-1"
          style={{ opacity: inView ? 1 : 0, transition: "opacity 0.7s ease 0.2s" }}
        >
          {menuCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              style={{
                flexShrink: 0,
                padding: "0.55rem 1.4rem",
                background: active === cat.key ? "#6B4226" : "transparent",
                color: active === cat.key ? "#FFFFFF" : "#9A7A68",
                border: `1px solid ${active === cat.key ? "#6B4226" : "#E5D5C5"}`,
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "background 0.25s ease, color 0.25s ease, border-color 0.25s ease",
                fontFamily: "inherit",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu list */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.7s ease 0.3s",
          }}
        >
          {items.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
