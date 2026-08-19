import { useState } from "react";
import { X } from "lucide-react";
import { useInView } from "../../hooks/useInView";

const categories = ["All", "Coffee", "Food", "Interior", "Moments"];

const images = [
  { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=85", cat: "Coffee", tall: true },
  { src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=85", cat: "Interior", tall: false },
  { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=85", cat: "Interior", tall: false },
  { src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&q=85", cat: "Food", tall: true },
  { src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=85", cat: "Moments", tall: false },
  { src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=85", cat: "Coffee", tall: false },
  { src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=85", cat: "Food", tall: true },
  { src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=85", cat: "Moments", tall: false },
  { src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&q=85", cat: "Coffee", tall: false },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85", cat: "Interior", tall: true },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=85", cat: "Food", tall: false },
  { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=85", cat: "Moments", tall: false },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const [ref, inView] = useInView();

  const filtered = active === "All" ? images : images.filter(i => i.cat === active);

  return (
    <section id="gallery" style={{ background: "#F7F0E8", padding: "clamp(5rem, 10vw, 8rem) 0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14" ref={ref}>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div
              className="section-label mb-4"
              style={{ opacity: inView ? 1 : 0, transition: "opacity 0.6s ease" }}
            >
              Gallery
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
              A glimpse inside.
            </h2>
          </div>

          {/* Filter */}
          <div
            className="flex gap-2 flex-wrap"
            style={{ opacity: inView ? 1 : 0, transition: "opacity 0.7s ease 0.2s" }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: "0.45rem 1.1rem",
                  background: active === cat ? "#3B261C" : "transparent",
                  color: active === cat ? "#FFFDF8" : "#9A7A68",
                  border: `1px solid ${active === cat ? "#3B261C" : "#D9B99B"}`,
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  fontFamily: "inherit",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry */}
        <div
          className="columns-2 md:columns-3 lg:columns-4"
          style={{
            gap: "10px",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.7s ease 0.3s",
          }}
        >
          {filtered.map((img, i) => (
            <div
              key={img.src + active}
              className="break-inside-avoid overflow-hidden cursor-pointer"
              style={{
                marginBottom: "10px",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.55s ease ${i * 0.04}s, transform 0.55s ease ${i * 0.04}s`,
              }}
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.cat}
                className="w-full object-cover block"
                loading="lazy"
                style={{
                  aspectRatio: img.tall ? "3/4" : "4/3",
                  transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)",
                  willChange: "transform",
                }}
                onMouseEnter={e => e.target.style.transform = "scale(1.04)"}
                onMouseLeave={e => e.target.style.transform = "scale(1)"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{
            background: "rgba(26,14,8,0.96)",
            padding: "1.5rem",
            animation: "fadeIn 0.25s ease",
          }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5"
            style={{
              color: "rgba(255,253,248,0.6)",
              background: "none",
              border: "none",
              cursor: "pointer",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "#FFFDF8"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,253,248,0.6)"}
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
          <img
            src={lightbox}
            alt="Gallery image"
            className="max-w-full max-h-[88vh] object-contain"
            style={{ animation: "scaleIn 0.3s ease" }}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { transform: scale(0.96); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
    </section>
  );
}
