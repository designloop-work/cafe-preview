import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useInView } from "../../hooks/useInView";

const occasions = ["Birthday", "Anniversary", "Business Meeting", "Casual Catch-up", "Other"];

const inputBase = {
  width: "100%",
  padding: "0.9rem 0",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid #E5D5C5",
  color: "#3B261C",
  fontSize: "0.92rem",
  outline: "none",
  transition: "border-color 0.25s ease",
  fontFamily: "inherit",
  appearance: "none",
};

export default function Booking() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", phone: "", date: "", guests: "", occasion: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };

  const labelStyle = {
    display: "block",
    fontSize: "0.62rem",
    fontWeight: 600,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#8B5E3C",
    marginBottom: "0.1rem",
  };

  const Field = ({ name, label, type = "text", placeholder, required, children }) => (
    <div>
      <label style={labelStyle}>{label}</label>
      {children || (
        <input
          name={name}
          type={type}
          value={form[name]}
          onChange={handle}
          placeholder={placeholder}
          required={required}
          style={inputBase}
          onFocus={e => e.target.style.borderBottomColor = "#6B4226"}
          onBlur={e => e.target.style.borderBottomColor = "#E5D5C5"}
        />
      )}
    </div>
  );

  return (
    <section id="booking" style={{ background: "#FFFDF8", padding: "clamp(5rem, 10vw, 8rem) 0" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">

          {/* Left — editorial copy */}
          <div>
            <div
              className="section-label mb-5"
              style={{ opacity: inView ? 1 : 0, transition: "opacity 0.6s ease" }}
            >
              Reservations & Events
            </div>
            <h2
              className="font-serif mb-6"
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
              Make it a moment.
            </h2>
            <p
              style={{
                fontSize: "0.93rem",
                lineHeight: 1.85,
                color: "#765F50",
                maxWidth: "38ch",
                opacity: inView ? 1 : 0,
                transition: "opacity 0.7s ease 0.22s",
              }}
            >
              From casual catch-ups to birthdays and intimate gatherings, make your next occasion a little more memorable.
            </p>

            {/* Hours */}
            <div
              className="mt-14 grid grid-cols-2 gap-8"
              style={{
                paddingTop: "2rem",
                borderTop: "1px solid #EDE0D0",
                opacity: inView ? 1 : 0,
                transition: "opacity 0.7s ease 0.38s",
              }}
            >
              {[
                { label: "Mon – Fri", val: "7:00 AM – 10:00 PM" },
                { label: "Sat – Sun", val: "8:00 AM – 11:00 PM" },
              ].map(({ label, val }) => (
                <div key={label}>
                  <p className="section-label mb-2">{label}</p>
                  <p style={{ fontSize: "0.88rem", color: "#3B261C", lineHeight: 1.6 }}>{val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease 0.28s, transform 0.8s ease 0.28s",
            }}
          >
            {submitted ? (
              <div
                className="flex flex-col items-start justify-center py-20"
                style={{ borderTop: "1px solid #EDE0D0" }}
              >
                <p className="font-serif mb-3" style={{ fontSize: "2.2rem", fontWeight: 400, color: "#3B261C" }}>
                  We'll be in touch.
                </p>
                <p style={{ fontSize: "0.88rem", color: "#765F50" }}>
                  Your reservation request has been received.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ borderTop: "1px solid #EDE0D0", paddingTop: "0.5rem" }}>
                <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-6">
                  <Field name="name" label="Name" placeholder="Your name" required />
                  <Field name="phone" label="Phone" placeholder="+1 (555) 000-0000" />
                  <Field name="date" label="Date" type="date" required />
                  <Field name="guests" label="Guests" type="number" placeholder="2" required />
                </div>

                <div className="mb-6">
                  <Field name="occasion" label="Occasion">
                    <select
                      name="occasion"
                      value={form.occasion}
                      onChange={handle}
                      style={{ ...inputBase, cursor: "pointer" }}
                      onFocus={e => e.target.style.borderBottomColor = "#6B4226"}
                      onBlur={e => e.target.style.borderBottomColor = "#E5D5C5"}
                    >
                      <option value="">Select occasion</option>
                      {occasions.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </Field>
                </div>

                <div className="mb-8">
                  <Field name="message" label="Message">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handle}
                      rows={3}
                      placeholder="Any special requests..."
                      style={{ ...inputBase, resize: "none" }}
                      onFocus={e => e.target.style.borderBottomColor = "#6B4226"}
                      onBlur={e => e.target.style.borderBottomColor = "#E5D5C5"}
                    />
                  </Field>
                </div>

                <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Request Reservation <ArrowRight size={13} strokeWidth={1.5} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
