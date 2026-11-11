"use client";

import { about, projects } from "@/data/portfolio";
import { Icon, TechIcon } from "./Icons";
import SectionHead from "./SectionHead";

const focusIcon: Record<string, string> = { chart: "Scikit-Learn", vision: "OpenCV", chat: "Hugging Face", chip: "Raspberry Pi" };

export default function AboutSection() {
  const counts = {
    total: projects.length,
    cv: projects.filter((p) => p.tags.includes("cv")).length,
    nlp: projects.filter((p) => p.tags.includes("nlp")).length,
  };

  return (
    <section id="about">
      <div className="container">
        <SectionHead num="01" label="About" title={about.headline[0]} accent={about.headline[1]} />

        <div className="about-grid">
          <article className="panel readme">
            <div className="chrome">
              <Icon name="file" size={14} /> README.md
            </div>
            <div className="readme-body">
              <h3># What I work on</h3>
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
              <div className="readme-chips">
                <span className="chip"><Icon name="pin" size={13} /> {about.chips[0]}</span>
                <span className="chip"><Icon name="cap" size={13} /> {about.chips[1]}</span>
                <span className="chip">{about.chips[2]}</span>
                <span className="chip chip-live"><i className="dot" /> {about.chips[3]}</span>
              </div>
            </div>
          </article>

          <div className="about-side">
            <div className="panel term">
              <div className="chrome">
                <span className="dots"><i /><i /><i /></span> ~/nimra — zsh
              </div>
              <div className="term-body">
                {about.terminal.map((l) => (
                  <div key={l.cmd}>
                    <p><span className="pr">›</span> {l.cmd}</p>
                    <p className="out">{l.out}</p>
                  </div>
                ))}
                <p><span className="pr">›</span> <span className="cur" /></p>
              </div>
            </div>

            <div className="panel shipped">
              <span className="stat-l">Projects shipped</span>
              <div className="shipped-row">
                <b>{counts.total}</b>
                <span>
                  {counts.cv} computer vision · {counts.nlp} NLP &amp; LLM · plus ML, backend and IoT
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="focus-grid">
          {about.focus.map((f, i) => (
            <div key={f.title} className="panel focus">
              <div className="focus-top">
                <span className="focus-ic"><TechIcon name={focusIcon[f.icon]} size={20} /></span>
                <span className="focus-n">/0{i + 1}</span>
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .about-grid { display: grid; grid-template-columns: 1.55fr 1fr; gap: 1.25rem; }
        .readme { overflow: hidden; min-width: 0; }
        .readme-body { padding: 1.8rem 2rem 2rem; }
        .readme-body h3 { font-size: 1.45rem; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 1rem; }
        .readme-body p { color: var(--text-2); line-height: 1.8; font-size: 1rem; margin-bottom: 1rem; max-width: 70ch; }
        .readme-chips { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1.4rem; }
        .chip-live { color: var(--violet); border-color: rgba(167,139,250,0.35); }
        .about-side { display: flex; flex-direction: column; gap: 1.25rem; min-width: 0; }
        .term { overflow: hidden; }
        .term-body { padding: 1.1rem 1.3rem 1.3rem; font-family: var(--font-mono); font-size: 0.82rem; display: flex; flex-direction: column; gap: 0.55rem; }
        .term-body .pr { color: var(--violet); }
        .term-body .out { color: var(--muted); padding-left: 1rem; overflow-wrap: anywhere; }
        .cur { display: inline-block; width: 8px; height: 1em; vertical-align: -0.15em; background: var(--violet); animation: blink 1s steps(1) infinite; }
        .shipped { padding: 1.4rem 1.5rem; display: flex; flex-direction: column; gap: 0.5rem; flex: 1; justify-content: center; }
        .shipped .stat-l { font-family: var(--font-mono); font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
        .shipped-row { display: flex; align-items: baseline; gap: 1rem; flex-wrap: wrap; }
        .shipped-row b { font-size: 3rem; font-weight: 800; letter-spacing: -0.04em; line-height: 1; }
        .shipped-row span { color: var(--text-2); font-size: 0.9rem; flex: 1; min-width: 160px; }
        .focus-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; margin-top: 1.25rem; }
        .focus { padding: 1.4rem; transition: border-color 0.2s ease, transform 0.2s ease; }
        .focus:hover { border-color: rgba(167,139,250,0.35); transform: translateY(-3px); }
        .focus-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.1rem; }
        .focus-ic { width: 40px; height: 40px; border-radius: 11px; display: inline-flex; align-items: center; justify-content: center; background: rgba(167,139,250,0.12); border: 1px solid rgba(167,139,250,0.25); }
        .focus-n { font-family: var(--font-mono); font-size: 0.72rem; color: var(--muted); }
        .focus h3 { font-size: 1.05rem; font-weight: 700; margin-bottom: 0.4rem; }
        .focus p { color: var(--text-2); font-size: 0.88rem; line-height: 1.6; }
        @media (max-width: 960px) { .about-grid { grid-template-columns: 1fr; } .focus-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 520px) { .focus-grid { grid-template-columns: 1fr; } .readme-body { padding: 1.4rem; } }
      `}</style>
    </section>
  );
}
