import { ArrowRight } from "lucide-react";
import { useInView } from "../../hooks/useInView";

const ease = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";

export default function FoodSection() {
  const [ref, inView] = useInView();

  return (
    <section id="food" style={{ background: "#F7F0E8", padding: "clamp(5rem, 10vw, 8rem) 0", overflow: "hidden" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14" ref={ref}>

        {/* Header */}
        <div className="mb-14">
          <div
            className="section-label mb-4"
            style={{ opacity: inView ? 1 : 0, transition: "opacity 0.6s ease" }}
          >
            Kitchen
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: 500,
                color: "#3B261C",
                lineHeight: 1.1,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(18px)",
                transition: `opacity 0.7s ease 0.1s, transform 0.7s ${ease} 0.1s`,
              }}
            >
              More than coffee.
            </h2>
            <p
              style={{
                fontSize: "0.93rem",
                lineHeight: 1.8,
                color: "#765F50",
                maxWidth: "38ch",
                opacity: inView ? 1 : 0,
                transition: "opacity 0.7s ease 0.22s",
              }}
            >
              From comforting classics to café favourites,<br className="hidden lg:block" /> there's something worth staying for.
            </p>
          </div>
        </div>

        {/* Asymmetric image grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4">

          {/* Large left image */}
          <div
            className="lg:col-span-7 overflow-hidden"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-24px)",
              transition: `opacity 0.95s ease 0.15s, transform 0.95s ${ease} 0.15s`,
            }}
          >
            <div className="img-zoom" style={{ aspectRatio: "4/3", height: "100%" }}>
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000&q=85"
                alt="Café food spread"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right column — stacked */}
          <div className="lg:col-span-5 flex flex-col gap-3 lg:gap-4">

            {/* Small image */}
            <div
              className="overflow-hidden"
              style={{
                flex: "1 1 auto",
                minHeight: "200px",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(24px)",
                transition: `opacity 0.95s ease 0.28s, transform 0.95s ${ease} 0.28s`,
              }}
            >
              <div className="img-zoom h-full">
                <img
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&q=85"
                  alt="Pizza from the kitchen"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Dark editorial card */}
            <div
              style={{
                background: "#3B261C",
                padding: "clamp(1.5rem, 3vw, 2.2rem)",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(18px)",
                transition: `opacity 0.7s ease 0.44s, transform 0.7s ${ease} 0.44s`,
              }}
            >
              <p
                className="font-serif"
                style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)", fontWeight: 400, color: "#FFFDF8", lineHeight: 1.35 }}
              >
                Pasta. Pizza.<br />Sandwiches. Brunch.
              </p>
              <p style={{ fontSize: "0.83rem", color: "rgba(217,185,155,0.75)", lineHeight: 1.7 }}>
                A kitchen that takes comfort food seriously.
              </p>
              <a
                href="#menu"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "#D9B99B",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  marginTop: "0.25rem",
                  transition: "color 0.25s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#FFFDF8"}
                onMouseLeave={e => e.currentTarget.style.color = "#D9B99B"}
              >
                See the Menu <ArrowRight size={12} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
