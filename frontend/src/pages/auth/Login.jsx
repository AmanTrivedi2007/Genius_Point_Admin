import React, { useState } from "react";
import {
  Phone, Mail, MapPin, MessageCircle, Menu, X, ShieldCheck, BookOpen,
  PenSquare, Palette, FolderOpen, Gift, Calculator, Scissors, Backpack,
  Star, ChevronRight, Award, ArrowRight, Eye, EyeOff, Check, Clock
} from "lucide-react";

const SHOP_NAME = "Genius Point";
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
    .ss-mono { font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.02em; }
    .ss-root { background-image: repeating-linear-gradient(to bottom, transparent 0px, transparent 35px, rgba(35,47,36,0.05) 36px); }

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
    .ss-btn-olive { background: var(--olive); color: #f4f2e6; }
    .ss-btn-olive:hover { background: var(--olive-deep); }
    .ss-btn-ghost { background: transparent; color: var(--ink-soft); border-color: var(--line); }
    .ss-btn-ghost:hover { color: var(--ink); border-color: var(--ink); }
    .ss-btn-full { width: 100%; }
    .ss-btn-sm { padding: 8px 14px; font-size: 13px; }

    .ss-section { width: 100%; margin: 0; padding: 60px 20px; }
    .ss-section-alt { background: var(--paper-deep); }
    .ss-section-head, .ss-cat-grid, .ss-quality-grid, .ss-owner-wrap, .ss-contact-grid { width: 100%; max-width: 1180px; margin-left: auto; margin-right: auto; }
    .ss-section-head { margin-bottom: 36px; max-width: 620px; }
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

    .ss-auth-shell { width: 100%; max-width: 460px; margin: 0 auto; padding: 56px 20px 80px; }
    .ss-auth-card { background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 34px 28px; box-shadow: 0 22px 50px -24px rgba(35,47,36,0.4); }
    .ss-auth-card .ss-kicker { text-align: center; display: block; }
    .ss-auth-card h2 { font-family: 'Fraunces', serif; font-size: 27px; text-align: center; margin: 0 0 6px; }
    .ss-auth-card > p.sub { text-align: center; color: var(--ink-soft); font-size: 14px; margin: 0 0 26px; }
    .ss-field { margin-bottom: 16px; }
    .ss-field label { display: block; font-size: 12.5px; font-weight: 600; margin-bottom: 6px; color: var(--ink); }
    .ss-input-wrap { position: relative; }
    .ss-input { width: 100%; border: 1.5px solid var(--line); background: #fff; border-radius: 8px; padding: 11px 13px; font-size: 14.5px; font-family: 'Work Sans', sans-serif; color: var(--ink); outline: none; transition: border-color .15s, box-shadow .15s; }
    .ss-input:focus { border-color: var(--olive); box-shadow: 0 0 0 3px rgba(85,97,58,0.14); }
    .ss-input::placeholder { color: #a3a08c; }
    .ss-eye-btn { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; color: var(--ink-soft); padding: 4px; display: flex; }
    .ss-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .ss-field-error { color: var(--rust); font-size: 12px; margin-top: 5px; }
    .ss-auth-meta { display: flex; align-items: center; justify-content: space-between; font-size: 13px; margin-bottom: 20px; flex-wrap: wrap; gap: 8px; }
    .ss-check-row { display: flex; align-items: center; gap: 7px; color: var(--ink-soft); }
    .ss-link-btn { background: none; border: none; color: var(--brass); font-weight: 600; cursor: pointer; padding: 0; font-size: inherit; }
    .ss-link-btn:hover { text-decoration: underline; }
    .ss-auth-switch { text-align: center; font-size: 13.5px; color: var(--ink-soft); margin-top: 22px; }
    .ss-success-banner { margin-top: 16px; background: rgba(85,97,58,0.14); border: 1px solid var(--olive); color: var(--olive-deep); padding: 12px 14px; border-radius: 8px; font-size: 13.5px; display: flex; align-items: center; gap: 8px; }

    @media (max-width: 480px) {
      .ss-section { padding: 42px 16px; }
      .ss-row-2 { grid-template-columns: 1fr; }
      .ss-auth-card { padding: 26px 20px; }
      .ss-auth-shell { padding: 40px 16px 60px; }
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

function Login() {
  const [showPw, setShowPw] = useState(false);
  const [form, setForm] = useState({ identifier: "", password: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setServerError("");
    setSuccess(false);
    const errs = {};
    if (!form.identifier.trim()) errs.identifier = "Enter your email or phone number.";
    if (!form.password) errs.password = "Enter your password.";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: form.identifier, password: form.password }),
      });
      const data = await res.json().catch(() => ({}));
      setServerMessage(data.message)
      if (!res.ok) {
        setServerError(data.detail || data.message || "Login failed. Check your details and try again.");
        return;
      }
      if (data.success == true) setSuccess(true);
      if (data.token) localStorage.setItem("ss_token", data.token);
    } catch (err) {
      setServerError("Could not reach the server. Is the Django backend running on localhost:8000?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ss-auth-shell">
      <div className="ss-auth-card">
        <span className="ss-kicker">Welcome back</span>
        <h2 className="ss-display">Log in to your account</h2>
        <p className="sub">Access your Genius Point account.</p>

        <form onSubmit={submit}>
          <Field label="Email or phone number" error={errors.identifier}>
            <input
              className="ss-input"
              type="text"
              placeholder="you@example.com or 98765 43210"
              value={form.identifier}
              onChange={(e) => setForm({ ...form, identifier: e.target.value })}
            />
          </Field>

          <Field label="Password" error={errors.password}>
            <div className="ss-input-wrap">
              <input
                className="ss-input"
                type={showPw ? "text" : "password"}
                placeholder="Enter your password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                style={{ paddingRight: 40 }}
              />
              <button type="button" className="ss-eye-btn" onClick={() => setShowPw(!showPw)} aria-label="Toggle password visibility">
                {showPw ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>
          </Field>

          <div className="ss-auth-meta">
            <label className="ss-check-row">
              <input type="checkbox" /> Remember me
            </label>
            <button type="button" className="ss-link-btn">Forgot password?</button>
          </div>

          <button type="submit" className="ss-btn ss-btn-ink ss-btn-full" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>

          {serverError && (
            <div className="ss-field-error" style={{ marginTop: 12 }}>{serverError}</div>
          )}
          {success && (
            <div className="ss-success-banner">
              <Check size={16} /> {serverMessage}.
            </div>
          )}
        </form>

        <p className="ss-auth-switch">
          New here?{" "}
          <a className="ss-link-btn" href="/register">Create an account</a>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="ss-root">
      <GlobalStyle />
      <Header active="" />
      <Login />
      <Footer />
    </div>
  );
}