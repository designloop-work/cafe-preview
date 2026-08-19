import logo from "../../assets/logo.webp";
import siteConfig from "../../data/siteConfig";

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="4"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#our-story" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Experiences", href: "#experiences" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#2A1A12", color: "#FFFDF8" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14 pt-20 pb-10">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16" style={{ borderBottom: "1px solid rgba(255,253,248,0.07)" }}>

          {/* Brand — wider */}
          <div className="lg:col-span-5">
            <img src={logo} alt={siteConfig.brandName} style={{ height: "36px", width: "auto", marginBottom: "1.5rem" }} />
            <p
              className="font-serif"
              style={{
                fontSize: "1.15rem",
                fontStyle: "italic",
                fontWeight: 300,
                color: "rgba(255,253,248,0.55)",
                lineHeight: 1.6,
                maxWidth: "26ch",
                marginBottom: "1.8rem",
              }}
            >
              {siteConfig.tagline}
            </p>
            <div className="flex gap-3">
              {[
                { href: siteConfig.instagram, Icon: InstagramIcon, label: "Instagram" },
                { href: siteConfig.facebook, Icon: FacebookIcon, label: "Facebook" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(255,253,248,0.12)",
                    color: "rgba(255,253,248,0.45)",
                    transition: "border-color 0.25s ease, color 0.25s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#D9B99B"; e.currentTarget.style.color = "#D9B99B"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,253,248,0.12)"; e.currentTarget.style.color = "rgba(255,253,248,0.45)"; }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <p className="section-label mb-6" style={{ color: "#6B4226" }}>Navigation</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    style={{
                      fontSize: "0.88rem",
                      color: "rgba(255,253,248,0.5)",
                      textDecoration: "none",
                      transition: "color 0.22s ease",
                    }}
                    onMouseEnter={e => e.target.style.color = "#D9B99B"}
                    onMouseLeave={e => e.target.style.color = "rgba(255,253,248,0.5)"}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="lg:col-span-4">
            <p className="section-label mb-6" style={{ color: "#6B4226" }}>Visit Us</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
              <div>
                <p style={{ fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B4226", marginBottom: "0.4rem" }}>
                  Hours
                </p>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,253,248,0.5)", lineHeight: 1.75 }}>
                  {siteConfig.openingHours.weekdays}<br />
                  {siteConfig.openingHours.weekends}
                </p>
              </div>
              <div>
                <p style={{ fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B4226", marginBottom: "0.4rem" }}>
                  Contact
                </p>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,253,248,0.5)", lineHeight: 1.75 }}>
                  {siteConfig.phone}<br />
                  {siteConfig.email}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8">
          <p style={{ fontSize: "0.75rem", color: "rgba(255,253,248,0.22)" }}>
            © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
          </p>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,253,248,0.18)" }}>
            Crafted with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
