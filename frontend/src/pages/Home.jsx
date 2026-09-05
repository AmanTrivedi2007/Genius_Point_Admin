import React, { useState } from "react";
import {
  Phone, Mail, MapPin, MessageCircle, Menu, X, ShieldCheck, BookOpen,
  PenSquare, Palette, FolderOpen, Gift, Calculator, Scissors, Backpack,
  Star, ChevronRight, Award, ArrowRight, Eye, EyeOff, Check, Clock
} from "lucide-react";

/* ---------------------------------------------------------------------
   CONTACT CONSTANTS
--------------------------------------------------------------------- */
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

/* ---------------------------------------------------------------------
   STYLE SYSTEM
--------------------------------------------------------------------- */
const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,600&family=Work+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

    html, body, #root {
      margin: 0;
      padding: 0;
      width: 100%;
      min-height: 100%;
      overflow-x: hidden;
    }

    *, *::before, *::after { box-sizing: border-box; }

    .ss-root {
      --ink: #232f24;
      --ink-soft: #4d5a4c;
      --paper: #f1ead6;
      --paper-deep: #e6dcbf;
      --card: #fbf7ea;
      --brass: #a3762f;
      --brass-deep: #8a6126;
      --olive: #55613a;
      --olive-deep: #414a2c;
      --rust: #a5432a;
      --line: rgba(35,47,36,0.14);
      font-family: 'Work Sans', system-ui, sans-serif;
      color: var(--ink);
      background: var(--paper);
      min-height: 100vh;
      width: 100%;
      max-width: 100vw;
      overflow-x: hidden;
      position: relative;
    }

    .ss-display {
      font-family: 'Fraunces', serif;
      letter-spacing: -0.01em;
    }
    .ss-mono {
      font-family: 'IBM Plex Mono', monospace;
      letter-spacing: 0.02em;
    }

    /* faint ruled-paper texture on the whole app */
    .ss-root {
      background-image:
        repeating-linear-gradient(
          to bottom,
          transparent 0px,
          transparent 35px,
          rgba(35,47,36,0.05) 36px
        );
    }

    /* ============ HEADER ============ */
    .ss-header {
      position: sticky;
      top: 0;
      z-index: 40;
      background: rgba(241,234,214,0.92);
      backdrop-filter: blur(6px);
      border-bottom: 1px solid var(--line);
      width: 100%;
    }
    .ss-header-inner {
      width: 100%;
      max-width: 1180px;
      margin: 0 auto;
      padding: 14px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
    .ss-logo { display: flex; align-items: center; gap: 10px; cursor: pointer; background:none; border:none; padding:0; }
    .ss-logo-mark {
      width: 40px; height: 40px; border-radius: 8px;
      background: var(--ink);
      color: var(--paper);
      display: flex; align-items: center; justify-content: center;
      font-family: 'Fraunces', serif; font-weight: 700; font-size: 18px;
      flex-shrink: 0;
    }
    .ss-logo-text { text-align: left; line-height: 1.1; }
    .ss-logo-title { font-family: 'Fraunces', serif; font-weight: 700; font-size: 17px; color: var(--ink); }
    .ss-logo-sub { font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--olive); }

    .ss-nav-desktop { display: none; align-items: center; gap: 6px; }
    @media (min-width: 900px) { .ss-nav-desktop { display: flex; } }

    .ss-nav-link {
      font-size: 14px; font-weight: 500; color: var(--ink-soft);
      background: none; border: none; cursor: pointer; padding: 8px 12px; border-radius: 6px;
      transition: color .15s, background .15s;
    }
    .ss-nav-link:hover { color: var(--ink); background: rgba(35,47,36,0.06); }
    .ss-nav-link.active { color: var(--ink); font-weight: 600; }

    .ss-header-actions { display: none; align-items: center; gap: 10px; }
    @media (min-width: 900px) { .ss-header-actions { display: flex; } }

    .ss-menu-btn { display: flex; background: none; border: none; cursor: pointer; padding: 6px; color: var(--ink); }
    @media (min-width: 900px) { .ss-menu-btn { display: none; } }

    .ss-mobile-drawer {
      border-top: 1px solid var(--line);
      background: var(--paper);
      padding: 10px 20px 18px;
      display: flex; flex-direction: column; gap: 4px;
    }
    @media (min-width: 900px) { .ss-mobile-drawer { display: none; } }
    .ss-mobile-drawer .ss-nav-link { text-align: left; width: 100%; }
    .ss-mobile-actions { display: flex; gap: 10px; margin-top: 10px; }

    /* ============ BUTTONS ============ */
    .ss-btn {
      font-family: 'Work Sans', sans-serif;
      font-weight: 600;
      font-size: 14px;
      border-radius: 7px;
      padding: 11px 20px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      cursor: pointer;
      border: 1.5px solid transparent;
      transition: transform .12s ease, box-shadow .12s ease, background .15s, color .15s;
      text-decoration: none;
      white-space: nowrap;
    }
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

    /* ============ HERO ============ */
    .ss-hero {
      width: 100%;
      max-width: 1180px; margin: 0 auto;
      padding: clamp(40px, 6vw, 76px) 20px clamp(40px, 5vw, 60px);
      display: grid;
      grid-template-columns: 1fr;
      gap: clamp(24px, 4vw, 34px);
      align-items: center;
    }
    @media (min-width: 940px) { .ss-hero { grid-template-columns: 1.1fr 0.9fr; } }

    .ss-eyebrow {
      display: inline-flex; align-items: center; gap: 8px;
      font-family: 'IBM Plex Mono', monospace; font-size: 11.5px; letter-spacing: 0.14em;
      text-transform: uppercase; color: var(--rust);
      border: 1px solid var(--rust); border-radius: 999px;
      padding: 6px 12px; margin-bottom: 20px;
    }
    .ss-hero h1 {
      font-size: clamp(34px, 5.4vw, 58px);
      line-height: 1.04;
      font-weight: 700;
      margin: 0 0 20px;
    }
    .ss-hero h1 em { font-style: italic; color: var(--brass); font-weight: 600; }
    .ss-hero p.lead {
      font-size: 17px; line-height: 1.65; color: var(--ink-soft); max-width: 46ch; margin: 0 0 28px;
    }
    .ss-hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 30px; }

    .ss-hero-badges { display: flex; flex-wrap: wrap; gap: 22px; }
    .ss-hero-badge { display: flex; align-items: center; gap: 8px; font-size: 13.5px; color: var(--ink-soft); }
    .ss-hero-badge svg { color: var(--olive); flex-shrink: 0; }

    /* hero visual: ledger card */
    .ss-ledger {
      background: var(--card);
      border: 1px solid var(--line);
      border-radius: 14px;
      padding: 26px;
      position: relative;
      box-shadow: 0 18px 40px -18px rgba(35,47,36,0.35);
    }
    .ss-ledger::before {
      content: "";
      position: absolute; left: 46px; top: 0; bottom: 0;
      width: 1px; background: var(--rust); opacity: 0.35;
    }
    .ss-ledger-row {
      display: flex; align-items: center; gap: 14px;
      padding: 12px 0 12px 30px;
      border-bottom: 1px dashed var(--line);
      font-size: 14.5px;
    }
    .ss-ledger-row:last-child { border-bottom: none; }
    .ss-ledger-row .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--brass); flex-shrink: 0; }
    .ss-ledger-title { font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--olive); margin-bottom: 6px; padding-left: 30px; }

    /* ============ SECTION SHELL ============ */
    /* full-width background, content capped at 1180px via wrapper below */
    .ss-section { width: 100%; margin: 0; padding: 60px 20px; }
    .ss-section-alt { background: var(--paper-deep); }

    .ss-section-head,
    .ss-cat-grid,
    .ss-quality-grid,
    .ss-owner-wrap,
    .ss-contact-grid {
      width: 100%;
      max-width: 1180px;
      margin-left: auto;
      margin-right: auto;
    }

    .ss-section-head { margin-bottom: 36px; max-width: 620px; }
    .ss-kicker {
      font-family: 'IBM Plex Mono', monospace; font-size: 11.5px; letter-spacing: 0.14em;
      text-transform: uppercase; color: var(--rust); margin-bottom: 10px; display: block;
    }
    .ss-section-head h2 { font-family: 'Fraunces', serif; font-size: clamp(26px, 3.6vw, 36px); font-weight: 700; margin: 0 0 12px; }
    .ss-section-head p { color: var(--ink-soft); font-size: 15.5px; line-height: 1.6; margin: 0; }

    /* ============ CATEGORY CARDS ============ */
    .ss-cat-grid {
      display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px;
    }
    @media (min-width: 640px) { .ss-cat-grid { grid-template-columns: repeat(3, 1fr); } }
    @media (min-width: 980px) { .ss-cat-grid { grid-template-columns: repeat(4, 1fr); } }

    .ss-cat-card {
      background: var(--card);
      border: 1px solid var(--line);
      border-radius: 12px;
      padding: 20px 18px;
      position: relative;
      overflow: hidden;
      transition: transform .18s ease, box-shadow .18s ease;
    }
    .ss-cat-card:hover { transform: translateY(-3px); box-shadow: 0 14px 30px -16px rgba(35,47,36,0.4); }
    .ss-cat-card::after {
      content: "";
      position: absolute; top: 0; right: 0;
      width: 0; height: 0;
      border-style: solid;
      border-width: 0 22px 22px 0;
      border-color: transparent var(--paper-deep) transparent transparent;
    }
    .ss-cat-icon {
      width: 42px; height: 42px; border-radius: 9px;
      background: var(--olive); color: var(--paper);
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 14px;
    }
    .ss-cat-card h3 { font-size: 15.5px; font-weight: 600; margin: 0 0 6px; }
    .ss-cat-card p { font-size: 13px; color: var(--ink-soft); margin: 0; line-height: 1.5; }

    /* ============ QUALITY STRIP ============ */
    .ss-quality-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
    @media (min-width: 760px) { .ss-quality-grid { grid-template-columns: repeat(4, 1fr); } }
    .ss-quality-card { text-align: left; padding: 4px 0; }
    .ss-quality-card svg { color: var(--brass); margin-bottom: 10px; }
    .ss-quality-card h4 { font-size: 15px; font-weight: 600; margin: 0 0 6px; }
    .ss-quality-card p { font-size: 13.5px; color: var(--ink-soft); margin: 0; line-height: 1.5; }

    /* ============ OWNER SECTION ============ */
    .ss-owner-wrap {
      display: grid; grid-template-columns: 1fr; gap: 36px; align-items: center;
    }
    @media (min-width: 900px) { .ss-owner-wrap { grid-template-columns: 0.85fr 1.15fr; } }

    .ss-stamp {
      width: 190px; height: 190px; border-radius: 50%;
      border: 2.5px dashed var(--olive);
      display: flex; align-items: center; justify-content: center;
      margin: 0 auto; position: relative;
      background: radial-gradient(circle, rgba(85,97,58,0.06), transparent 70%);
    }
    .ss-stamp-inner {
      width: 150px; height: 150px; border-radius: 50%;
      border: 1.5px solid var(--olive);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      gap: 6px; text-align: center;
    }
    .ss-stamp-inner svg { color: var(--olive); }
    .ss-stamp-inner span { font-family: 'IBM Plex Mono', monospace; font-size: 9.5px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--olive-deep); }

    .ss-owner-card {
      background: var(--card);
      border: 1px solid var(--line);
      border-radius: 14px;
      padding: 30px 28px;
    }
    .ss-owner-card h3 { font-family: 'Fraunces', serif; font-size: 24px; margin: 0 0 4px; }
    .ss-owner-role { font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--rust); margin-bottom: 16px; display: block; }
    .ss-owner-card p { font-size: 15px; line-height: 1.7; color: var(--ink-soft); margin: 0 0 14px; }
    .ss-owner-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
    .ss-owner-tag {
      font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.06em;
      background: var(--olive); color: #f4f2e6; padding: 6px 12px; border-radius: 999px;
    }

    /* ============ LOCATION / CONTACT CARDS ============ */
    .ss-contact-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
    @media (min-width: 760px) { .ss-contact-grid { grid-template-columns: repeat(3, 1fr); } }
    .ss-contact-card {
      background: var(--card); border: 1px solid var(--line); border-radius: 12px;
      padding: 22px; display: flex; flex-direction: column; gap: 10px;
      text-decoration: none; color: var(--ink); transition: transform .15s, box-shadow .15s;
    }
    .ss-contact-card:hover { transform: translateY(-2px); box-shadow: 0 14px 28px -18px rgba(35,47,36,0.4); }
    .ss-contact-icon {
      width: 38px; height: 38px; border-radius: 9px;
      background: var(--ink); color: var(--paper);
      display: flex; align-items: center; justify-content: center;
    }
    .ss-contact-card h4 { font-size: 15px; font-weight: 600; margin: 4px 0 0; }
    .ss-contact-card p { font-size: 13.5px; color: var(--ink-soft); margin: 0; line-height: 1.5; }
    .ss-contact-card .go { font-family: 'IBM Plex Mono', monospace; font-size: 11.5px; color: var(--brass); display: flex; align-items: center; gap: 4px; margin-top: 4px; }

    /* ============ FOOTER ============ */
    .ss-footer { background: var(--ink); color: rgba(241,234,214,0.85); width: 100%; }
    .ss-footer-inner { max-width: 1180px; margin: 0 auto; padding: 46px 20px 26px; display: grid; grid-template-columns: 1fr; gap: 32px; }
    @media (min-width: 760px) { .ss-footer-inner { grid-template-columns: 1.3fr 1fr 1fr; } }
    .ss-footer h5 { font-family: 'IBM Plex Mono', monospace; font-size: 11.5px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--paper-deep); margin: 0 0 14px; opacity: 0.7; }
    .ss-footer-brand { font-family: 'Fraunces', serif; font-size: 21px; color: var(--paper); margin-bottom: 8px; }
    .ss-footer p, .ss-footer a { font-size: 13.5px; line-height: 1.7; color: rgba(241,234,214,0.75); text-decoration: none; }
    .ss-footer a:hover { color: var(--paper); }
    .ss-footer-links { display: flex; flex-direction: column; gap: 8px; }
    .ss-footer-row { display: flex; align-items: center; gap: 8px; }
    .ss-footer-bottom {
      border-top: 1px solid rgba(241,234,214,0.14);
      padding: 18px 20px; text-align: center;
      font-size: 12px; color: rgba(241,234,214,0.5);
    }

    /* ============ AUTH PAGES ============ */
    .ss-auth-shell {
      max-width: 460px; margin: 0 auto; padding: 56px 20px 80px;
    }
    .ss-auth-card {
      background: var(--card); border: 1px solid var(--line); border-radius: 16px;
      padding: 34px 28px;
      box-shadow: 0 22px 50px -24px rgba(35,47,36,0.4);
    }
    .ss-auth-card .ss-kicker { text-align: center; display: block; }
    .ss-auth-card h2 { font-family: 'Fraunces', serif; font-size: 27px; text-align: center; margin: 0 0 6px; }
    .ss-auth-card > p.sub { text-align: center; color: var(--ink-soft); font-size: 14px; margin: 0 0 26px; }

    .ss-field { margin-bottom: 16px; }
    .ss-field label { display: block; font-size: 12.5px; font-weight: 600; margin-bottom: 6px; color: var(--ink); }
    .ss-input-wrap { position: relative; }
    .ss-input {
      width: 100%; border: 1.5px solid var(--line); background: #fff; border-radius: 8px;
      padding: 11px 13px; font-size: 14.5px; font-family: 'Work Sans', sans-serif; color: var(--ink);
      outline: none; transition: border-color .15s, box-shadow .15s;
    }
    .ss-input:focus { border-color: var(--olive); box-shadow: 0 0 0 3px rgba(85,97,58,0.14); }
    .ss-input::placeholder { color: #a3a08c; }
    .ss-eye-btn {
      position: absolute; right: 10px; top: 50%; transform: translateY(-50%);
      background: none; border: none; cursor: pointer; color: var(--ink-soft); padding: 4px;
      display: flex;
    }
    .ss-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .ss-field-error { color: var(--rust); font-size: 12px; margin-top: 5px; }

    .ss-auth-meta { display: flex; align-items: center; justify-content: space-between; font-size: 13px; margin-bottom: 20px; }
    .ss-check-row { display: flex; align-items: center; gap: 7px; color: var(--ink-soft); }
    .ss-link-btn { background: none; border: none; color: var(--brass); font-weight: 600; cursor: pointer; padding: 0; font-size: inherit; }
    .ss-link-btn:hover { text-decoration: underline; }

    .ss-auth-switch { text-align: center; font-size: 13.5px; color: var(--ink-soft); margin-top: 22px; }
    .ss-auth-note {
      margin-top: 18px; padding: 12px 14px; border-radius: 8px; background: rgba(85,97,58,0.08);
      font-size: 12.5px; color: var(--olive-deep); line-height: 1.5; display: flex; gap: 8px;
    }
    .ss-success-banner {
      margin-top: 16px; background: rgba(85,97,58,0.14); border: 1px solid var(--olive);
      color: var(--olive-deep); padding: 12px 14px; border-radius: 8px; font-size: 13.5px;
      display: flex; align-items: center; gap: 8px;
    }

    /* ============ CONTACT PAGE ============ */
    .ss-contact-hero { text-align: center; max-width: 640px; margin: 0 auto 44px; }
    .ss-contact-hero h1 { font-family: 'Fraunces', serif; font-size: clamp(28px,4vw,42px); margin: 0 0 12px; }
    .ss-contact-hero p { color: var(--ink-soft); font-size: 15.5px; line-height: 1.6; }

    .ss-map-embed {
      border: 1px solid var(--line); border-radius: 14px; overflow: hidden;
      background: var(--card); margin-top: 40px;
    }
    .ss-map-embed iframe { width: 100%; height: 340px; border: 0; display: block; }
    .ss-map-caption { padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
    .ss-map-caption p { margin: 0; font-size: 13.5px; color: var(--ink-soft); }

    .ss-form-card {
      background: var(--card); border: 1px solid var(--line); border-radius: 14px;
      padding: 30px 26px; margin-top: 44px;
    }
    .ss-form-card h3 { font-family: 'Fraunces', serif; font-size: 21px; margin: 0 0 4px; }
    .ss-form-card > p { color: var(--ink-soft); font-size: 13.5px; margin: 0 0 22px; }
    .ss-textarea {
      width: 100%; border: 1.5px solid var(--line); background: #fff; border-radius: 8px;
      padding: 11px 13px; font-size: 14.5px; font-family: 'Work Sans', sans-serif; color: var(--ink);
      outline: none; resize: vertical; min-height: 100px;
    }
    .ss-textarea:focus { border-color: var(--olive); box-shadow: 0 0 0 3px rgba(85,97,58,0.14); }

    .ss-hours-list { display: flex; flex-direction: column; gap: 8px; margin-top: 4px; }
    .ss-hours-row { display: flex; justify-content: space-between; font-size: 13.5px; color: var(--ink-soft); border-bottom: 1px dashed var(--line); padding-bottom: 8px; }
    .ss-hours-row span:last-child { color: var(--ink); font-weight: 500; }

    /* ============ SMALL SCREEN FIXES ============ */
    @media (max-width: 480px) {
      .ss-section { padding: 42px 16px; }
      .ss-hero { padding: 40px 16px; }
      .ss-hero h1 { font-size: clamp(32px, 10vw, 42px); }
      .ss-hero p.lead { font-size: 15px; }
      .ss-hero-actions { flex-direction: column; }
      .ss-hero-actions .ss-btn { width: 100%; }
      .ss-row-2 { grid-template-columns: 1fr; }
      .ss-auth-card { padding: 26px 20px; }
    }
  `}</style>
);

/* ---------------------------------------------------------------------
   SMALL REUSABLE BITS
--------------------------------------------------------------------- */
const Field = ({ label, error, children }) => (
  <div className="ss-field">
    <label>{label}</label>
    {children}
    {error ? <div className="ss-field-error">{error}</div> : null}
  </div>
);

/* ---------------------------------------------------------------------
   HEADER  (link paths assume routes: "/", "/login", "/register", "/contact")
--------------------------------------------------------------------- */
function Header({ active }) {
  const [open, setOpen] = useState(false);

  const navItem = (href, key, label) => (
    <a
      className={`ss-nav-link${active === key ? " active" : ""}`}
      href={href}
      onClick={() => setOpen(false)}
    >
      {label}
    </a>
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

/* ---------------------------------------------------------------------
   FOOTER
--------------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="ss-footer">
      <div className="ss-footer-inner">
        <div>
          <div className="ss-footer-brand">Genius Point</div>
          <p style={{ maxWidth: "34ch", marginBottom: 14 }}>
            A neighbourhood stationery store in Nava Naroda, stocked wide and
            run on the same discipline its owner learned in uniform.
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

/* ---------------------------------------------------------------------
   HOME PAGE
--------------------------------------------------------------------- */
const CATEGORIES = [
  { icon: BookOpen, title: "Notebooks & Registers", desc: "Ruled, unruled, long books & ledgers for school and office." },
  { icon: PenSquare, title: "Pens & Writing Tools", desc: "Ball pens, gel pens, fountain pens, pencils & refills." },
  { icon: Palette, title: "Art & Craft Supplies", desc: "Colours, sketch pens, canvas, craft paper & project material." },
  { icon: FolderOpen, title: "Files & Folders", desc: "Files, folders, envelopes and document organisers." },
  { icon: Calculator, title: "Office Essentials", desc: "Calculators, staplers, punches, tapes & desk supplies." },
  { icon: Backpack, title: "School Bags & Kits", desc: "Bags, geometry boxes, lunch boxes & school accessories." },
  { icon: Scissors, title: "Craft Tools", desc: "Scissors, glue, cutters and everyday craft hardware." },
  { icon: Gift, title: "Gifts & Greetings", desc: "Greeting cards, gift wraps and small gifting items." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="ss-hero">
        <div>
          <span className="ss-eyebrow"><ShieldCheck size={13} /> Run with army discipline</span>
          <h1 className="ss-display">
            Every kind of stationery, <em>stocked right</em>, in one neighbourhood shop.
          </h1>
          <p className="lead">
            Genius Point is a Nava Naroda stationery store where the shelves
            are always full, the quality is checked before it reaches you, and
            there's someone who genuinely cares behind the counter.
          </p>
          <div className="ss-hero-actions">
            <a className="ss-btn ss-btn-primary" href={TEL_URL}><Phone size={16} /> Call the Shop</a>
            <a className="ss-btn ss-btn-olive" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp Us</a>
            <a className="ss-btn ss-btn-outline" href={MAPS_URL} target="_blank" rel="noreferrer"><MapPin size={16} /> Get Directions</a>
          </div>
          <div className="ss-hero-badges">
            <div className="ss-hero-badge"><Check size={16} /> Wide variety, always in stock</div>
            <div className="ss-hero-badge"><Check size={16} /> Quality checked stationery</div>
            <div className="ss-hero-badge"><Check size={16} /> Friendly, honest service</div>
          </div>
        </div>

        <div className="ss-ledger">
          <div className="ss-ledger-title">On the Shelves Today</div>
          {[
            "Notebooks, registers & long books",
            "Pens, pencils & writing instruments",
            "Art, craft & school project supplies",
            "Files, folders & office essentials",
            "Bags, geometry boxes & school kits",
            "Gifts, greeting cards & gift wraps",
          ].map((item) => (
            <div className="ss-ledger-row" key={item}>
              <span className="dot" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="ss-section" id="products">
        <div className="ss-section-head">
          <span className="ss-kicker">What we stock</span>
          <h2 className="ss-display">Everything a student, office or home needs</h2>
          <p>
            From daily notebooks to office files and gifting essentials — the shop is
            stocked wide on purpose, so you rarely have to look elsewhere.
          </p>
        </div>
        <div className="ss-cat-grid">
          {CATEGORIES.map(({ icon: Icon, title, desc }) => (
            <div className="ss-cat-card" key={title}>
              <div className="ss-cat-icon"><Icon size={20} /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUALITY STRIP */}
      <section className="ss-section ss-section-alt">
        <div className="ss-section-head">
          <span className="ss-kicker">Why people come back</span>
          <h2 className="ss-display">Stocked wide. Checked well. Sold honestly.</h2>
        </div>
        <div className="ss-quality-grid">
          <div className="ss-quality-card">
            <Star size={22} />
            <h4>Good quality, checked</h4>
            <p>Items are picked for quality first, not just for being the cheapest on the shelf.</p>
          </div>
          <div className="ss-quality-card">
            <BookOpen size={22} />
            <h4>Varied range</h4>
            <p>From daily-use pens to specific school and office needs, the range stays wide.</p>
          </div>
          <div className="ss-quality-card">
            <Clock size={22} />
            <h4>Always available</h4>
            <p>Shelves are restocked regularly so what you need is usually right there.</p>
          </div>
          <div className="ss-quality-card">
            <ShieldCheck size={22} />
            <h4>Honest, fair service</h4>
            <p>Straightforward pricing and honest advice, every single visit.</p>
          </div>
        </div>
      </section>

      {/* OWNER SECTION */}
      <section className="ss-section" id="owner">
        <div className="ss-section-head">
          <span className="ss-kicker">The person behind the counter</span>
          <h2 className="ss-display">From serving the nation, to serving the neighbourhood</h2>
        </div>
        <div className="ss-owner-wrap">
          <div className="ss-stamp">
            <div className="ss-stamp-inner">
              <Award size={30} />
              <span>Indian Army</span>
              <span>Veteran</span>
            </div>
          </div>
          <div className="ss-owner-card">
            <h3 className="ss-display">{OWNER_NAME}</h3>
            <span className="ss-owner-role">Owner · Retired, Indian Army</span>
            <p>
              Before he opened the shutters of this shop, Anand Singh Chauhan spent
              years serving the country as a soldier in the Indian Army. That time
              built habits that still run the store today — discipline, punctuality,
              and taking every duty seriously, however small it seems.
            </p>
            <p>
              After retiring from service, he chose to keep serving people, just
              closer to home. Genius Point is that next chapter: a shop built
              on the same values, now aimed at making sure every customer who walks
              in finds what they came for, at fair prices and with honest advice.
            </p>
            <div className="ss-owner-tags">
              <span className="ss-owner-tag">Discipline</span>
              <span className="ss-owner-tag">Integrity</span>
              <span className="ss-owner-tag">Service before self</span>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION / CONTACT STRIP */}
      <section className="ss-section ss-section-alt" id="visit">
        <div className="ss-section-head">
          <span className="ss-kicker">Visit or reach out</span>
          <h2 className="ss-display">Find us in Nava Naroda</h2>
        </div>
        <div className="ss-contact-grid">
          <a className="ss-contact-card" href={MAPS_URL} target="_blank" rel="noreferrer">
            <div className="ss-contact-icon"><MapPin size={18} /></div>
            <h4>Shop Address</h4>
            <p>{ADDRESS}</p>
            <span className="go">Open in Google Maps <ArrowRight size={13} /></span>
          </a>
          <a className="ss-contact-card" href={TEL_URL}>
            <div className="ss-contact-icon"><Phone size={18} /></div>
            <h4>Call the Shop</h4>
            <p>{PHONE_DISPLAY}</p>
            <span className="go">Tap to call <ArrowRight size={13} /></span>
          </a>
          <a className="ss-contact-card" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <div className="ss-contact-icon"><MessageCircle size={18} /></div>
            <h4>WhatsApp</h4>
            <p>Send a quick message about stock or prices.</p>
            <span className="go">Chat on WhatsApp <ArrowRight size={13} /></span>
          </a>
        </div>
      </section>
    </>
  );
}

/* ---------------------------------------------------------------------
   PAGE EXPORT
--------------------------------------------------------------------- */
export default function HomePage() {
  return (
    <div className="ss-root">
      <GlobalStyle />
      <Header active="home" />
      <Home />
      <Footer />
    </div>
  );
}