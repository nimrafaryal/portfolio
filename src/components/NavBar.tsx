"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { Icon } from "./Icons";

export const navItems = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "education", href: "#education" },
  { label: "contact", href: "#contact" },
];

export function Logo({ big = false }: { big?: boolean }) {
  return (
    <a href="#top" className="logo" aria-label="Nimra Faryal, back to top">
      <span className="logo-mark" style={big ? { width: 48, height: 48, fontSize: "1.15rem" } : undefined}>NF</span>
      <span className="logo-text">
        <span className="logo-name" style={big ? { fontSize: "1.35rem" } : undefined}>
          Nimra<span className="grad">.Faryal</span>
        </span>
        <span className="logo-sub">AI · ML Engineer</span>
      </span>
    </a>
  );
}

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? y / h : 0);
      let cur = "";
      for (const item of navItems) {
        const el = document.querySelector(item.href) as HTMLElement | null;
        if (el && y >= el.offsetTop - 140) cur = item.href.slice(1);
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close the menu first, then scroll once the page is unlocked, so the jump lands on the section.
  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setOpen(false);
    requestAnimationFrame(() => {
      document.body.style.overflow = "";
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", href);
    });
  };

  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-progress" style={{ transform: `scaleX(${progress})` }} />
        <div className="nav-inner">
          <Logo />
          <nav className="nav-links" aria-label="Sections">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={active === item.href.slice(1) ? "on" : ""}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="nav-right">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn nav-social" aria-label="GitHub">
              <Icon name="github" size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn nav-social" aria-label="LinkedIn">
              <Icon name="linkedin" size={17} />
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-grad nav-cv">
              <Icon name="download" size={16} /> CV
            </a>
            <button type="button" className="icon-btn nav-burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
              <Icon name="menu" size={22} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="mnav" role="dialog" aria-modal="true" aria-label="Menu">
          <button type="button" className="icon-btn mnav-close" aria-label="Close menu" onClick={() => setOpen(false)} autoFocus>
            <Icon name="close" size={24} />
          </button>
          {navItems.map((item, i) => (
            <a key={item.href} href={item.href} onClick={(e) => go(e, item.href)}>
              <span className="mnav-n">0{i + 1}</span>
              {item.label}
            </a>
          ))}
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-grad" onClick={() => setOpen(false)}>
            <Icon name="download" size={16} /> Download CV
          </a>
        </div>
      )}

      <style>{`
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding-top: env(safe-area-inset-top, 0px);
          transition: background 0.3s ease, border-color 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        .nav.scrolled { background: rgba(10, 8, 22, 0.78); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border-bottom-color: var(--line); }
        .nav-progress { position: absolute; left: 0; right: 0; bottom: -1px; height: 2px; background: var(--grad); transform-origin: left; }
        .nav-inner {
          max-width: 1280px; margin: 0 auto; height: 68px; display: flex; align-items: center; justify-content: space-between; gap: 1rem;
          padding-left: max(20px, env(safe-area-inset-left, 0px)); padding-right: max(20px, env(safe-area-inset-right, 0px));
        }
        .logo { display: inline-flex; align-items: center; gap: 0.7rem; text-decoration: none; }
        .logo-mark {
          width: 40px; height: 40px; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 0.98rem; letter-spacing: -0.02em; color: #fff; background: var(--grad-btn);
          box-shadow: 0 6px 20px -8px rgba(217, 70, 239, 0.8);
        }
        .logo-text { display: flex; flex-direction: column; line-height: 1.1; }
        .logo-name { font-weight: 700; font-size: 1.08rem; letter-spacing: -0.02em; }
        .logo-sub { font-family: var(--font-mono); font-size: 0.62rem; color: var(--muted); letter-spacing: 0.12em; margin-top: 3px; }
        .nav-links {
          display: flex; gap: 0.15rem; padding: 0.3rem; border: 1px solid var(--line); border-radius: 999px; background: rgba(255,255,255,0.03);
        }
        .nav-links a {
          font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-2); text-decoration: none;
          padding: 0.42rem 0.9rem; border-radius: 999px; transition: all 0.2s ease;
        }
        .nav-links a:hover { color: var(--text); }
        .nav-links a.on { background: #f2effb; color: #140f26; }
        .nav-right { display: flex; align-items: center; gap: 0.35rem; }
        .nav-cv { padding: 0.55rem 1.05rem; font-size: 0.86rem; margin-left: 0.3rem; }
        .nav-burger { display: none; color: var(--text); }
        @media (max-width: 1020px) {
          .nav-links, .nav-social { display: none; }
          .nav-burger { display: inline-flex; }
        }
        @media (max-width: 420px) { .nav-cv { display: none; } .logo-sub { display: none; } }

        .mnav {
          position: fixed; inset: 0; z-index: 200; background: rgba(10, 8, 22, 0.97); backdrop-filter: blur(12px);
          display: flex; flex-direction: column; align-items: flex-start; justify-content: center; gap: 1.1rem;
          padding: 2rem max(28px, env(safe-area-inset-left, 0px));
          animation: fadeUp 0.25s ease both;
        }
        .mnav a:not(.btn) { font-size: 2rem; font-weight: 700; letter-spacing: -0.03em; text-decoration: none; display: flex; align-items: baseline; gap: 0.8rem; }
        .mnav-n { font-family: var(--font-mono); font-size: 0.8rem; color: var(--violet); font-weight: 500; }
        .mnav .btn { margin-top: 1rem; }
        .mnav-close { position: absolute; top: calc(14px + env(safe-area-inset-top, 0px)); right: max(16px, env(safe-area-inset-right, 0px)); color: var(--text); }
      `}</style>
    </>
  );
}
