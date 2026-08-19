import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import logo from "../../assets/logo.webp";
import siteConfig from "../../data/siteConfig";

const links = [
  { label: "Our Story", href: "#our-story" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Experiences", href: "#experiences" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? "rgba(59,38,28,0.96)" : "#5C3A29",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(217,185,155,0.12)" : "1px solid transparent",
          padding: scrolled ? "0.75rem 0" : "1.1rem 0",
          transition: "background 0.5s ease, padding 0.4s ease, border-color 0.4s ease",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          <a href="#home" aria-label={siteConfig.brandName} className="flex-shrink-0">
            <img
              src={logo}
              alt={siteConfig.brandName}
              style={{ height: scrolled ? "34px" : "38px", width: "auto", transition: "height 0.4s ease" }}
            />
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="relative text-sm"
                  style={{
                    color: "rgba(255,253,248,0.82)",
                    letterSpacing: "0.04em",
                    fontWeight: 400,
                    textDecoration: "none",
                    transition: "color 0.25s ease",
                    fontSize: "0.82rem",
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "#FFFDF8"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,253,248,0.82)"}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href="#booking"
              style={{
                display: "inline-block",
                padding: "0.6rem 1.6rem",
                background: "transparent",
                color: "#FFFDF8",
                border: "1px solid rgba(255,253,248,0.35)",
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "border-color 0.3s ease, background 0.3s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#FFFDF8"; e.currentTarget.style.background = "rgba(255,253,248,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,253,248,0.35)"; e.currentTarget.style.background = "transparent"; }}
            >
              Book a Table
            </a>
          </div>

          <button
            className="lg:hidden"
            style={{ color: "#FFFDF8", background: "none", border: "none", cursor: "pointer", padding: "4px" }}
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-[100] flex flex-col"
        style={{
          background: "#2A1A12",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.5s cubic-bezier(0.77,0,0.175,1)",
        }}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: "1px solid rgba(217,185,155,0.1)" }}>
          <img src={logo} alt={siteConfig.brandName} style={{ height: "34px", width: "auto" }} />
          <button
            onClick={() => setOpen(false)}
            style={{ color: "rgba(255,253,248,0.7)", background: "none", border: "none", cursor: "pointer" }}
            aria-label="Close navigation"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="flex flex-col px-8 pt-10 gap-1 flex-1">
          {[{ label: "Home", href: "#home" }, ...links].map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-serif py-3"
              style={{
                fontSize: "clamp(1.8rem, 5vw, 2.4rem)",
                fontWeight: 400,
                color: "#FFFDF8",
                textDecoration: "none",
                borderBottom: "1px solid rgba(217,185,155,0.08)",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(18px)",
                transition: `opacity 0.45s ease ${i * 0.06 + 0.15}s, transform 0.45s ease ${i * 0.06 + 0.15}s`,
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="px-8 pb-12 pt-6">
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="btn-primary-light"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Book a Table
          </a>
        </div>
      </div>
    </>
  );
}
