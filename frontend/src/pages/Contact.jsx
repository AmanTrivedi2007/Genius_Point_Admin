import React, { useState } from "react";
import {
  Phone, Mail, MapPin, MessageCircle, Menu, X, ArrowRight, Check
} from "lucide-react";

const OWNER_NAME = "Anand Singh Chauhan";
const ADDRESS = "Parshwanath Township Bus Stand, Krishnanagar, Nava Naroda, Ahmedabad, Gujarat 380038, India";
const PHONE_DISPLAY = "+91 95587 89004";
const PHONE_TEL = "+919558789004";
const WHATSAPP_NUMBER = "919558789004";
const EMAIL = "chauhan.anandsingh26@gmail.com";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Genius Point, I would like to know more about your products."
)}`;
const TEL_URL = `tel:${PHONE_TEL}`;
const MAIL_URL = `mailto:${EMAIL}`;

const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,600&family=Work+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

    html, body, #root { margin: 0; padding: 0; width: 100%; min-height: 100%; overflow-x: hidden; }
    *, *::before, *::after { box-sizing: border-box; }

    .ss-root {
      --ink: #232f24; --ink-soft: #4d5a4c; --paper: #f1ead6; --paper-deep: #e6dcbf;
      --card: #fbf7ea; --brass: #a3762f; --brass-deep: #8a6126; --olive: #55613a;
      --olive-deep: #414a2c; --rust: #a5432a; --line: rgba(35,47,36,0.14);
      font-family: 'Work Sans', system-ui, sans-serif; color: var(--ink); background: var(--paper);
      min-height: 100vh; width: 100%; max-width: 100vw; overflow-x: hidden; position: relative;
    }
    .ss-display { font-family: 'Fraunces', serif; letter-spacing: -0.01em; }

    .ss-header { position: sticky; top: 0; z-index: 40; background: rgba(241,234,214,0.92); backdrop-filter: blur(6px); border-bottom: 1px solid var(--line); width: 100%; }
    .ss-header-inner { width: 100%; max-width: 1180px; margin: 0 auto; padding: 14px 20px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
    .ss-logo { display: flex; align-items: center; gap: 10px; cursor: pointer; background:none; border:none; padding:0; }
    .ss-logo-mark { width: 40px; height: 40px; border-radius: 8px; background: var(--ink); color: var(--paper); display: flex; align-items: center; justify-content: center; font-family: 'Fraunces', serif; font-weight: 700; font-size: 18px; flex-shrink: 0; }
    .ss-logo-text { text-align: left; line-height: 1.1; }
    .ss-logo-title { font-family: 'Fraunces', serif; font-weight: 700; font-size: 17px; color: var(--ink); }
    .ss-logo-sub { font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--olive); }
    .ss-nav-desktop { display: none; align-items: center; gap: 6px; }
    @media (min-width: 900px) { .ss-nav-desktop { display: flex; } }
    .ss-nav-link { font-size: 14px; font-weight: 500; color: var(--ink-soft); background: none; border: none; cursor: pointer; padding: 8px 12px; border-radius: 6px; transition: color .15s, background .15s; }
    .ss-nav-link:hover { color: var(--ink); background: rgba(35,47,36,0.06); }
    .ss-nav-link.active { color: var(--ink); font-weight: 600; }
    .ss-header-actions { display: none; align-items: center; gap: 10px; }
    @media (min-width: 900px) { .ss-header-actions { display: flex; } }
    .ss-menu-btn { display: flex; background: none; border: none; cursor: pointer; padding: 6px; color: var(--ink); }
    @media (min-width: 900px) { .ss-menu-btn { display: none; } }
    .ss-mobile-drawer { border-top: 1px solid var(--line); background: var(--paper); padding: 10px 20px 18px; display: flex; flex-direction: column; gap: 4px; }
    @media (min-width: 900px) { .ss-mobile-drawer { display: none; } }
    .ss-mobile-drawer .ss-nav-link { text-align: left; width: 100%; }
    .ss-mobile-actions { display: flex; gap: 10px; margin-top: 10px; }

    .ss-btn { font-family: 'Work Sans', sans-serif; font-weight: 600; font-size: 14px; border-radius: 7px; padding: 11px 20px; display: inline-flex; align-items: center; justify-content: center; gap: 8px; cursor: pointer; border: 1.5px solid transparent; transition: transform .12s ease, box-shadow .12s ease, background .15s, color .15s; text-decoration: none; white-space: nowrap; }
    .ss-btn:active { transform: translateY(1px); }
    .ss-btn-primary { background: var(--brass); color: #fff8ec; }
    .ss-btn-primary:hover { background: var(--brass-deep); box-shadow: 0 4px 14px rgba(163,118,47,0.35); }
    .ss-btn-ink { background: var(--ink); color: var(--paper); }
    .ss-btn-ink:hover { background: #16201a; box-shadow: 0 4px 14px rgba(35,47,36,0.3); }
    .ss-btn-outline { background: transparent; border-color: var(--ink); color: var(--ink); }
    .ss-btn-outline:hover { background: var(--ink); color: var(--paper); }
    .ss-btn-full { width: 100%; }
    .ss-btn-sm { padding: 8px 14px; font-size: 13px; }

    .ss-section { width: 100%; max-width: 1180px; margin: 0 auto; padding: 60px 20px; }
    .ss-kicker { font-family: 'IBM Plex Mono', monospace; font-size: 11.5px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--rust); margin-bottom: 10px; display: block; }

    .ss-footer { background: var(--ink); color: rgba(241,234,214,0.85); width: 100%; }
    .ss-footer-inner { max-width: 1180px; margin: 0 auto; padding: 46px 20px 26px; display: grid; grid-template-columns: 1fr; gap: 32px; }
    @media (min-width: 760px) { .ss-footer-inner { grid-template-columns: 1.3fr 1fr 1fr; } }
    .ss-footer h5 { font-family: 'IBM Plex Mono', monospace; font-size: 11.5px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--paper-deep); margin: 0 0 14px; opacity: 0.7; }
    .ss-footer-brand { font-family: 'Fraunces', serif; font-size: 21px; color: var(--paper); margin-bottom: 8px; }
    .ss-footer p, .ss-footer a { font-size: 13.5px; line-height: 1.7; color: rgba(241,234,214,0.75); text-decoration: none; }
    .ss-footer a:hover { color: var(--paper); }
    .ss-footer-links { display: flex; flex-direction: column; gap: 8px; }
    .ss-footer-row { display: flex; align-items: center; gap: 8px; }
    .ss-footer-bottom { border-top: 1px solid rgba(241,234,214,0.14); padding: 18px 20px; text-align: center; font-size: 12px; color: rgba(241,234,214,0.5); }

    .ss-contact-hero { text-align: center; max-width: 640px; margin: 0 auto 44px; }
    .ss-contact-hero h1 { font-family: 'Fraunces', serif; font-size: clamp(28px,4vw,42px); margin: 0 0 12px; }
    .ss-contact-hero p { color: var(--ink-soft); font-size: 15.5px; line-height: 1.6; }

    .ss-contact-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
    @media (min-width: 760px) { .ss-contact-grid { grid-template-columns: repeat(3, 1fr); } }
    .ss-contact-card { background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 22px; display: flex; flex-direction: column; gap: 10px; text-decoration: none; color: var(--ink); transition: transform .15s, box-shadow .15s; }
    .ss-contact-card:hover { transform: translateY(-2px); box-shadow: 0 14px 28px -18px rgba(35,47,36,0.4); }
    .ss-contact-icon { width: 38px; height: 38px; border-radius: 9px; background: var(--ink); color: var(--paper); display: flex; align-items: center; justify-content: center; }
    .ss-contact-card h4 { font-size: 15px; font-weight: 600; margin: 4px 0 0; }
    .ss-contact-card p { font-size: 13.5px; color: var(--ink-soft); margin: 0; line-height: 1.5; }
    .ss-contact-card .go { font-family: 'IBM Plex Mono', monospace; font-size: 11.5px; color: var(--brass); display: flex; align-items: center; gap: 4px; margin-top: 4px; }

    .ss-map-embed { border: 1px solid var(--line); border-radius: 14px; overflow: hidden; background: var(--card); margin-top: 40px; }
    .ss-map-embed iframe { width: 100%; height: 340px; border: 0; display: block; }
    .ss-map-caption { padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
    .ss-map-caption p { margin: 0; font-size: 13.5px; color: var(--ink-soft); }

    .ss-form-card { background: var(--card); border: 1px solid var(--line); border-radius: 14px; padding: 30px 26px; margin-top: 44px; }
    .ss-form-card h3 { font-family: 'Fraunces', serif; font-size: 21px; margin: 0 0 4px; }
    .ss-form-card > p { color: var(--ink-soft); font-size: 13.5px; margin: 0 0 22px; }
    .ss-textarea { width: 100%; border: 1.5px solid var(--line); background: #fff; border-radius: 8px; padding: 11px 13px; font-size: 14.5px; font-family: 'Work Sans', sans-serif; color: var(--ink); outline: none; resize: vertical; min-height: 100px; }
    .ss-textarea:focus { border-color: var(--olive); box-shadow: 0 0 0 3px rgba(85,97,58,0.14); }

    .ss-field { margin-bottom: 16px; }
    .ss-field label { display: block; font-size: 12.5px; font-weight: 600; margin-bottom: 6px; color: var(--ink); }
    .ss-input { width: 100%; border: 1.5px solid var(--line); background: #fff; border-radius: 8px; padding: 11px 13px; font-size: 14.5px; font-family: 'Work Sans', sans-serif; color: var(--ink); outline: none; transition: border-color .15s, box-shadow .15s; }
    .ss-input:focus { border-color: var(--olive); box-shadow: 0 0 0 3px rgba(85,97,58,0.14); }
    .ss-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .ss-field-error { color: var(--rust); font-size: 12px; margin-top: 5px; }
    .ss-success-banner { background: rgba(85,97,58,0.14); border: 1px solid var(--olive); color: var(--olive-deep); padding: 12px 14px; border-radius: 8px; font-size: 13.5px; display: flex; align-items: center; gap: 8px; }

    .ss-hours-list { display: flex; flex-direction: column; gap: 8px; margin-top: 4px; }
    .ss-hours-row { display: flex; justify-content: space-between; font-size: 13.5px; color: var(--ink-soft); border-bottom: 1px dashed var(--line); padding-bottom: 8px; }
    .ss-hours-row span:last-child { color: var(--ink); font-weight: 500; }

    @media (max-width: 480px) {
      .ss-section { padding: 42px 16px; }
      .ss-row-2 { grid-template-columns: 1fr; }
      .ss-form-card { padding: 22px 18px; }
    }
  `}</style>
);

const Field = ({ label, error, children }) => (
  <div className="ss-field">
    <label>{label}</label>
    {children}
    {error ? <div className="ss-field-error">{error}</div> : null}
  </div>
);

function Header({ active }) {
  const [open, setOpen] = useState(false);
  const navItem = (href, key, label) => (
    <a className={`ss-nav-link${active === key ? " active" : ""}`} href={href} onClick={() => setOpen(false)}>{label}</a>
  );
  return (
    <header className="ss-header">
      <div className="ss-header-inner">
        <a className="ss-logo" href="/" aria-label="Go to home">
          <div className="ss-logo-mark">SS</div>
          <div className="ss-logo-text">
            <div className="ss-logo-title">Genius Point</div>
            <div className="ss-logo-sub">Nava Naroda · Ahmedabad</div>
          </div>
        </a>
        <nav className="ss-nav-desktop">
          {navItem("/", "home", "Home")}
          {navItem("/contact", "contact", "Contact Us")}
        </nav>
        <div className="ss-header-actions">
          <a className="ss-btn ss-btn-outline ss-btn-sm" href="/login">Login</a>
          <a className="ss-btn ss-btn-ink ss-btn-sm" href="/register">Register</a>
        </div>
        <button className="ss-menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="ss-mobile-drawer">
          {navItem("/", "home", "Home")}
          {navItem("/contact", "contact", "Contact Us")}
          <div className="ss-mobile-actions">
            <a className="ss-btn ss-btn-outline ss-btn-full ss-btn-sm" href="/login">Login</a>
            <a className="ss-btn ss-btn-ink ss-btn-full ss-btn-sm" href="/register">Register</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="ss-footer">
      <div className="ss-footer-inner">
        <div>
          <div className="ss-footer-brand">Genius Point</div>
          <p style={{ maxWidth: "34ch", marginBottom: 14 }}>
            A neighbourhood stationery store in Nava Naroda, stocked wide and run on the same discipline its owner learned in uniform.
          </p>
          <div className="ss-footer-row">
            <MapPin size={15} />
            <p style={{ margin: 0 }}>{ADDRESS}</p>
          </div>
        </div>
        <div>
          <h5>Quick Links</h5>
          <div className="ss-footer-links">
            <a href="/">Home</a>
            <a href="/contact">Contact Us</a>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        </div>
        <div>
          <h5>Reach Us</h5>
          <div className="ss-footer-links">
            <a href={TEL_URL}><span className="ss-footer-row"><Phone size={14} /> {PHONE_DISPLAY}</span></a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><span className="ss-footer-row"><MessageCircle size={14} /> WhatsApp Us</span></a>
            <a href={MAIL_URL}><span className="ss-footer-row"><Mail size={14} /> {EMAIL}</span></a>
            <a href={MAPS_URL} target="_blank" rel="noreferrer"><span className="ss-footer-row"><MapPin size={14} /> Get Directions</span></a>
          </div>
        </div>
      </div>
      <div className="ss-footer-bottom">
        © {new Date().getFullYear()} Genius Point · Nava Naroda, Ahmedabad · Owned & run by {OWNER_NAME}
      </div>
    </footer>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setServerError("");
    setSent(false);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setServerError(data.detail || data.message || "Could not send your message. Please try again.");
        return;
      }

      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setServerError("Could not reach the server. Is the Django backend running on localhost:8000?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ss-section">
      <div className="ss-contact-hero">
        <span className="ss-kicker">Get in touch</span>
        <h1 className="ss-display">We're happy to help</h1>
        <p>Call, WhatsApp, email, or drop by the shop in Nava Naroda — whichever is easiest for you.</p>
      </div>

      <div className="ss-contact-grid">
        <a className="ss-contact-card" href={TEL_URL}>
          <div className="ss-contact-icon"><Phone size={18} /></div>
          <h4>Phone</h4>
          <p>{PHONE_DISPLAY}</p>
          <span className="go">Tap to call <ArrowRight size={13} /></span>
        </a>
        <a className="ss-contact-card" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
          <div className="ss-contact-icon"><MessageCircle size={18} /></div>
          <h4>WhatsApp</h4>
          <p>Same number as our phone line.</p>
          <span className="go">Chat on WhatsApp <ArrowRight size={13} /></span>
        </a>
        <a className="ss-contact-card" href={MAIL_URL}>
          <div className="ss-contact-icon"><Mail size={18} /></div>
          <h4>Email</h4>
          <p style={{ wordBreak: "break-all" }}>{EMAIL}</p>
          <span className="go">Send an email <ArrowRight size={13} /></span>
        </a>
      </div>

      <div className="ss-map-embed">
        <iframe
          title="Genius Point location"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&z=16&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="ss-map-caption">
          <p><MapPin size={14} style={{ verticalAlign: "-2px", marginRight: 6 }} />{ADDRESS}</p>
          <a className="ss-btn ss-btn-outline ss-btn-sm" href={MAPS_URL} target="_blank" rel="noreferrer">
            Open in Google Maps
          </a>
        </div>
      </div>

      <div className="ss-form-card">
        <h3 className="ss-display">Send us a message</h3>
        <p>We'll get back to you by phone, WhatsApp or email.</p>
        <form onSubmit={submit}>
          <div className="ss-row-2">
            <Field label="Your name">
              <input className="ss-input" type="text" placeholder="Full name" required
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </Field>
            <Field label="Email address">
              <input className="ss-input" type="email" placeholder="you@example.com" required
                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </Field>
          </div>
          <Field label="Message">
            <textarea className="ss-textarea" placeholder="What are you looking for?" required
              value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          </Field>
          <button type="submit" className="ss-btn ss-btn-primary" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
          {serverError && (
            <div className="ss-field-error" style={{ marginTop: 12 }}>{serverError}</div>
          )}
          {sent && (
            <div className="ss-success-banner" style={{ marginTop: 16 }}>
              <Check size={16} /> Thanks — your message was sent. For a faster reply, message us on WhatsApp or call the shop.
            </div>
          )}
        </form>
      </div>

      <div className="ss-form-card">
        <h3 className="ss-display">Shop Hours</h3>
        <p>General hours — always best to call ahead for exact timing.</p>
        <div className="ss-hours-list">
          <div className="ss-hours-row"><span>Monday – Saturday</span><span>10:00 AM – 8:30 PM</span></div>
          <div className="ss-hours-row"><span>Sunday</span><span>Open (shorter hours)</span></div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="ss-root">
      <GlobalStyle />
      <Header active="contact" />
      <Contact />
      <Footer />
    </div>
  );
}