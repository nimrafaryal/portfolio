"use client";

import { profile } from "@/data/portfolio";
import { Icon } from "./Icons";
import { Logo, navItems } from "./NavBar";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="container">
        <div className="foot-cta">
          <div>
            <p className="foot-mono">{"// what's next?"}</p>
            <h2>
              Have a role or project in mind? <span className="grad">Let&apos;s talk.</span>
            </h2>
          </div>
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            <a href="#contact" className="btn btn-grad">Get in touch <Icon name="arrow" size={16} /></a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn"><Icon name="download" size={16} /> CV</a>
          </div>
        </div>

        <div className="foot-cols">
          <div className="foot-brand">
            <Logo big />
            <p>AI / ML Engineer building machine learning, computer vision and LLM systems, plus the APIs and hardware around them.</p>
            <div style={{ display: "flex", gap: "0.2rem" }}>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub"><Icon name="github" /></a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn"><Icon name="linkedin" size={17} /></a>
              <a href={`mailto:${profile.email}`} className="icon-btn" aria-label="Email"><Icon name="mail" /></a>
            </div>
          </div>
          <div>
            <p className="foot-h">Navigate</p>
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="foot-a">{n.label[0].toUpperCase() + n.label.slice(1)}</a>
            ))}
          </div>
          <div>
            <p className="foot-h">Resources</p>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="foot-a">Download CV</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="foot-a">GitHub repositories</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="foot-a">LinkedIn profile</a>
          </div>
          <div>
            <p className="foot-h">Contact</p>
            <a href={`mailto:${profile.email}`} className="foot-a foot-ic"><Icon name="mail" size={15} /> Email me</a>
            <span className="foot-a foot-ic"><Icon name="pin" size={15} /> {profile.location}</span>
            <span className="foot-a foot-ic"><i className="dot" /> Available for new opportunities</span>
          </div>
        </div>

        <p className="foot-mark" aria-hidden="true">nimra faryal</p>
        <p className="foot-copy">© {new Date().getFullYear()} Nimra Faryal. All rights reserved.</p>
      </div>

      <a href="#top" className="to-top" aria-label="Back to top"><Icon name="up" size={18} /></a>

      <style>{`
        .foot { position: relative; border-top: 1px solid var(--line); padding-top: 3.5rem; padding-bottom: calc(1.5rem + env(safe-area-inset-bottom, 0px)); background: linear-gradient(180deg, transparent, rgba(124,58,237,0.08)); }
        .foot-cta { display: flex; justify-content: space-between; align-items: center; gap: 1.5rem; flex-wrap: wrap; padding-bottom: 3rem; border-bottom: 1px solid var(--line); }
        .foot-mono { font-family: var(--font-mono); font-size: 0.8rem; color: var(--muted); }
        .foot-cta h2 { font-size: clamp(1.5rem, 3.4vw, 2.3rem); font-weight: 750; letter-spacing: -0.03em; margin-top: 0.4rem; text-wrap: balance; }
        .foot-cols { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1.3fr; gap: 2rem; padding-top: 3rem; }
        .foot-brand p { color: var(--text-2); font-size: 0.9rem; margin: 1rem 0 0.8rem; max-width: 34ch; }
        .foot-h { font-family: var(--font-mono); font-size: 0.68rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.9rem; }
        .foot-a { display: flex; align-items: center; gap: 0.5rem; color: var(--text-2); font-size: 0.9rem; text-decoration: none; padding: 0.3rem 0; }
        a.foot-a:hover { color: var(--text); }
        .foot-mark {
          font-size: clamp(3.5rem, 13vw, 10rem); font-weight: 800; letter-spacing: -0.06em; line-height: 1; text-align: center; margin-top: 3rem;
          color: transparent; -webkit-text-stroke: 1px rgba(167,139,250,0.14);
          background: linear-gradient(180deg, rgba(167,139,250,0.12), transparent); -webkit-background-clip: text; background-clip: text;
          white-space: nowrap; overflow: hidden;
        }
        .foot-copy { text-align: center; font-family: var(--font-mono); font-size: 0.72rem; color: var(--muted); padding-top: 1.4rem; margin-top: 1rem; border-top: 1px solid var(--line); }
        .to-top {
          position: fixed; right: max(18px, env(safe-area-inset-right, 0px)); bottom: calc(18px + env(safe-area-inset-bottom, 0px)); z-index: 90;
          width: 44px; height: 44px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center;
          border: 1px solid rgba(167,139,250,0.45); background: rgba(10, 8, 22, 0.8); color: var(--violet); backdrop-filter: blur(8px);
        }
        .to-top:hover { background: rgba(167,139,250,0.15); }
        @media (max-width: 860px) { .foot-cols { grid-template-columns: 1fr 1fr; } .foot-brand { grid-column: 1 / -1; } }
        @media (max-width: 420px) { .foot-cols { grid-template-columns: 1fr; } }
      `}</style>
    </footer>
  );
}
