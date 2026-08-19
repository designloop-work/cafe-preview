import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useInView } from "../../hooks/useInView";

const coffees = [
  {
    name: "Signature Latte",
    desc: "Smooth espresso, silky milk, and a touch of house sweetness.",
    tag: "House Favourite",
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=85",
    size: "large", // spans 2 rows visually
  },
  {
    name: "Cold Brew",
    desc: "Slow-brewed overnight. Chilled, smooth and endlessly refreshing.",
    tag: "All Day",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=85",
    size: "small",
  },
  {
    name: "Espresso Tonic",
    desc: "Bright, sparkling and unexpectedly refreshing.",
    tag: "Seasonal",
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=85",
    size: "small",
  },
  {
    name: "Mocha",
    desc: "Rich chocolate meets bold espresso. Comfort in a cup.",
    tag: "Classic",
    img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=85",
    size: "small",
  },
];

function CoffeeCard({ item, index, inView }) {
  const [hovered, setHovered] = useState(false);
  const isLarge = item.size === "large";

  return (
    <div
      className={isLarge ? "lg:row-span-2" : ""}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.75s ease ${index * 0.1}s, transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94) ${index * 0.1}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div
        className="overflow-hidden mb-4"
        style={{ aspectRatio: isLarge ? "3/4" : "4/3" }}
      >
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
          style={{
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)",
            willChange: "transform",
          }}
        />
      </div>

      {/* Meta */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="section-label block mb-2">{item.tag}</span>
          <h3
            className="font-serif mb-2"
            style={{
              fontSize: isLarge ? "1.7rem" : "1.35rem",
              fontWeight: 500,
              color: "#3B261C",
              lineHeight: 1.2,
              transform: hovered ? "translateX(5px)" : "translateX(0)",
              transition: "transform 0.35s ease",
            }}
          >
            {item.name}
          </h3>
          <p style={{ fontSize: "0.84rem", color: "#765F50", lineHeight: 1.7, maxWidth: "24ch" }}>
            {item.desc}
          </p>
        </div>
        <div
          style={{
            color: "#6B4226",
            flexShrink: 0,
            marginTop: "0.2rem",
            opacity: hovered ? 1 : 0.4,
            transform: hovered ? "translate(3px, -3px)" : "translate(0,0)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <ArrowRight size={16} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}

export default function CoffeeSection() {
  const [ref, inView] = useInView();

  return (
    <section id="coffee" style={{ background: "#FFFDF8", padding: "clamp(5rem, 10vw, 8rem) 0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14" ref={ref}>

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-6">
          <div>
            <div
              className="section-label mb-4"
              style={{ opacity: inView ? 1 : 0, transition: "opacity 0.6s ease" }}
            >
              On the Menu
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
              Made for coffee people.
            </h2>
          </div>
          <a
            href="#menu"
            className="btn-secondary self-start lg:self-auto"
            style={{
              opacity: inView ? 1 : 0,
              transition: "opacity 0.7s ease 0.25s",
            }}
          >
            Full Menu <ArrowRight size={13} strokeWidth={1.5} />
          </a>
        </div>

        {/* Asymmetric grid: large card left, 3 smaller right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-6 lg:gap-8">
          {coffees.map((item, i) => (
            <CoffeeCard key={item.name} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
