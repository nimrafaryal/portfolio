"use client";

import { useEffect, useState } from "react";
import { profile, skillGroups } from "@/data/portfolio";
import { Icon, TechIcon } from "./Icons";

function useTyping(words: string[]) {
  const [text, setText] = useState(words[0]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let w = 0, c = words[0].length, del = true;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      if (del) {
        c--;
        setText(words[w].slice(0, c));
        if (c <= 0) { del = false; w = (w + 1) % words.length; t = setTimeout(tick, 300); return; }
        t = setTimeout(tick, 32);
      } else {
        c++;
        setText(words[w].slice(0, c));
        if (c >= words[w].length) { del = true; t = setTimeout(tick, 1900); return; }
        t = setTimeout(tick, 65);
      }
    };
    t = setTimeout(tick, 2200);
    return () => clearTimeout(t);
  }, [words]);
  return text;
}

const stats = [
  { label: "CGPA / 4.0", value: "3.69" },
  { label: "AI projects", value: "10+" },
  { label: "4th semester rank", value: "1st" },
  { label: "Hackathons", value: "2" },
];

const outerOrbit = ["PyTorch", "OpenCV", "Hugging Face", "FastAPI", "Python", "Raspberry Pi", "PostgreSQL", "Scikit-Learn"];
const innerOrbit = ["Llama 3.3", "OpenAI API", "Streamlit", "Arduino", "MediaPipe"];

function Orbit({ items, className }: { items: string[]; className: string }) {
  return (
    <div className={`orbit ${className}`}>
      {items.map((name, i) => {
        const a = (i / items.length) * Math.PI * 2 - Math.PI / 2;
        return (
          <span
            key={name}
            className="orb"
            title={name}
            style={{ left: `${(50 + 50 * Math.cos(a)).toFixed(2)}%`, top: `${(50 + 50 * Math.sin(a)).toFixed(2)}%` }}
          >
            <span className="orb-in">
              <TechIcon name={name} size={19} />
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default function HeroSection() {
  const typed = useTyping(profile.typed);
  const ticker = Array.from(new Set(skillGroups.flatMap((g) => g.skills)));

  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="avail">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/nimra.jpg" alt="" width={22} height={22} />
            <i className="dot" /> {profile.availability}
          </span>
          <p className="hi">Hi there, I&apos;m</p>
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-build">
            I build <span className="grad typed">{typed}</span>
            <span className="caret" aria-hidden="true" />
          </p>
          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-grad">
              View my work <Icon name="arrow" size={16} />
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn">
              <Icon name="download" size={16} /> Download CV
            </a>
            <span className="hero-icons">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub">
                <Icon name="github" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn">
                <Icon name="linkedin" size={17} />
              </a>
              <a href={`mailto:${profile.email}`} className="icon-btn" aria-label="Email">
                <Icon name="mail" />
              </a>
            </span>
          </div>

          <div className="drivers">
            <span>Daily drivers</span>
            {profile.dailyDrivers.map((d) => (
              <span key={d} className="driver" title={d}>
                <TechIcon name={d} size={18} />
              </span>
            ))}
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="halo halo-a" />
          <div className="halo halo-b" />
          <div className="photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/nimra.jpg" alt="" />
          </div>
          <Orbit items={outerOrbit} className="orbit-outer" />
          <Orbit items={innerOrbit} className="orbit-inner" />
        </div>
      </div>

      <div className="container">
        <div className="stats panel">
          {stats.map((s) => (
            <div key={s.label}>
              <span className="stat-l">{s.label}</span>
              <span className="stat-v">{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="ticker" aria-label="Technologies I use">
        <div className="ticker-track">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} aria-hidden={i >= ticker.length}>
              <TechIcon name={t} size={15} /> {t}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .hero { padding-top: calc(68px + 4rem + env(safe-area-inset-top, 0px)); padding-bottom: 3rem; }
        .hero-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 3rem; align-items: center; }
        .hero-copy { min-width: 0; animation: fadeUp 0.6s ease both; }
        .avail {
          display: inline-flex; align-items: center; gap: 0.55rem; padding: 0.3rem 0.85rem 0.3rem 0.3rem;
          border: 1px solid var(--line); border-radius: 999px; background: rgba(255,255,255,0.03);
          font-size: 0.8rem; color: var(--text-2);
        }
        .avail img { width: 22px; height: 22px; border-radius: 50%; object-fit: cover; }
        .dot { width: 7px; height: 7px; border-radius: 50%; background: var(--green); box-shadow: 0 0 10px var(--green); display: inline-block; }
        .hi { font-family: var(--font-mono); color: var(--text-2); margin-top: 2.2rem; font-size: 0.95rem; }
        .hero-name { font-size: clamp(3rem, 8vw, 6rem); font-weight: 800; letter-spacing: -0.05em; line-height: 0.98; margin-top: 0.4rem; }
        .hero-build { font-size: clamp(1.35rem, 3vw, 2rem); font-weight: 600; letter-spacing: -0.02em; margin-top: 1rem; color: var(--text-2); min-height: 1.4em; }
        .typed { font-weight: 700; }
        .caret { display: inline-block; width: 3px; height: 1em; margin-left: 4px; vertical-align: -0.12em; background: var(--pink); animation: blink 1s steps(1) infinite; }
        .hero-intro { color: var(--text-2); font-size: 1.05rem; line-height: 1.75; max-width: 54ch; margin-top: 1.3rem; }
        .hero-cta { display: flex; flex-wrap: wrap; align-items: center; gap: 0.75rem; margin-top: 2rem; }
        .hero-icons { display: inline-flex; gap: 0.15rem; margin-left: 0.25rem; }
        .drivers { display: flex; align-items: center; flex-wrap: wrap; gap: 0.6rem; margin-top: 2.2rem; }
        .drivers > span:first-child { font-family: var(--font-mono); font-size: 0.7rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--muted); margin-right: 0.4rem; }
        .driver { width: 38px; height: 38px; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; border: 1px solid var(--line); background: rgba(255,255,255,0.03); }

        .hero-art { position: relative; width: 100%; max-width: 460px; aspect-ratio: 1; justify-self: center; }
        .halo { position: absolute; border-radius: 50%; pointer-events: none; }
        .halo-a { inset: 6%; border: 1px solid rgba(196, 181, 253, 0.1); }
        .halo-b { inset: 17%; border: 1px dashed rgba(244, 114, 182, 0.12); }
        .photo {
          position: absolute; inset: 27%; border-radius: 50%; padding: 3px; background: var(--grad-btn);
          box-shadow: 0 0 50px -8px rgba(217, 70, 239, 0.5), 0 0 120px -30px rgba(124, 58, 237, 0.7);
        }
        .photo img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; display: block; border: 3px solid var(--bg); }
        .orbit { position: absolute; border-radius: 50%; }
        .orbit-outer { inset: 6%; animation: spin 48s linear infinite; }
        .orbit-inner { inset: 17%; animation: spin 36s linear infinite reverse; }
        .orb { position: absolute; width: 42px; height: 42px; margin: -21px 0 0 -21px; }
        .orb-in {
          width: 100%; height: 100%; border-radius: 13px; display: flex; align-items: center; justify-content: center;
          background: rgba(20, 16, 41, 0.9); border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 6px 18px -8px rgba(0,0,0,0.6);
        }
        .orbit-outer .orb-in { animation: spin 48s linear infinite reverse; }
        .orbit-inner .orb-in { animation: spin 36s linear infinite; }
        .orbit-inner .orb { width: 36px; height: 36px; margin: -18px 0 0 -18px; }
        .hero-art:hover .orbit, .hero-art:hover .orb-in { animation-play-state: paused; }

        .stats { display: grid; grid-template-columns: repeat(4, 1fr); margin-top: 4.5rem; overflow: hidden; }
        .stats > div { padding: 1.4rem 1.6rem; display: flex; flex-direction: column; gap: 0.35rem; }
        .stats > div + div { border-left: 1px solid var(--line); }
        .stat-l { font-family: var(--font-mono); font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
        .stat-v { font-size: clamp(1.8rem, 3.4vw, 2.4rem); font-weight: 700; letter-spacing: -0.03em; }

        .ticker { margin-top: 3.5rem; overflow: hidden; mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); }
        .ticker-track { display: flex; gap: 2.4rem; width: max-content; animation: marquee 70s linear infinite; }
        .ticker-track span { display: inline-flex; align-items: center; gap: 0.5rem; font-family: var(--font-mono); font-size: 0.84rem; color: var(--text-2); white-space: nowrap; }
        .ticker:hover .ticker-track { animation-play-state: paused; }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .hero-art { max-width: 340px; order: -1; }
          .hero { padding-top: calc(68px + 2rem + env(safe-area-inset-top, 0px)); }
          .hi { margin-top: 1.4rem; }
        }
        @media (max-width: 640px) {
          .stats { grid-template-columns: 1fr 1fr; }
          .stats > div:nth-child(3) { border-left: 0; }
          .stats > div:nth-child(n+3) { border-top: 1px solid var(--line); }
        }
      `}</style>
    </section>
  );
}
