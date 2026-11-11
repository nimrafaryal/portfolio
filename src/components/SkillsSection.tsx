"use client";

import { useState } from "react";
import { skillGroups } from "@/data/portfolio";
import { Icon, TechIcon } from "./Icons";
import SectionHead from "./SectionHead";

export default function SkillsSection() {
  const [active, setActive] = useState(0);
  const g = skillGroups[active];
  const total = skillGroups.reduce((n, x) => n + x.skills.length, 0);

  return (
    <section id="skills">
      <div className="container">
        <SectionHead
          num="03"
          label="Stack"
          title="The toolbox."
          note="Languages, frameworks and tools I have used in real projects, from data cleaning to hardware."
        />

        <div className="panel tb">
          <div className="chrome">
            <span className="dots"><i /><i /><i /></span> ~/skills
            <span style={{ marginLeft: "auto" }}>{skillGroups.length} folders · {total} files</span>
          </div>
          <div className="tb-body">
            <nav className="tb-side" aria-label="Skill categories">
              <p className="tb-label">Explorer</p>
              {skillGroups.map((s, i) => (
                <button
                  key={s.folder}
                  type="button"
                  className={`tb-folder ${i === active ? "on" : ""}`}
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                >
                  <Icon name="folder" size={15} />
                  <span>{s.folder}/</span>
                  <em>{s.skills.length}</em>
                </button>
              ))}
            </nav>

            <div className="tb-main" key={g.folder}>
              <div className="tb-head">
                <span className="tb-emoji" aria-hidden="true">{g.icon}</span>
                <div>
                  <h3>{g.category}</h3>
                  <p>~/skills/{g.folder}/</p>
                </div>
              </div>
              <div className="tb-grid">
                {g.skills.map((s) => (
                  <div key={s} className="tb-tile">
                    <TechIcon name={s} size={18} />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .tb { overflow: hidden; }
        .tb-body { display: grid; grid-template-columns: 230px 1fr; min-height: 380px; }
        .tb-side { border-right: 1px solid var(--line); padding: 1.1rem 0.8rem; display: flex; flex-direction: column; gap: 0.2rem; }
        .tb-label { font-family: var(--font-mono); font-size: 0.66rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--muted); padding: 0 0.6rem 0.6rem; }
        .tb-folder {
          display: flex; align-items: center; gap: 0.6rem; padding: 0.55rem 0.7rem; border-radius: 10px; border: 0; cursor: pointer;
          background: none; color: var(--text-2); font-family: var(--font-mono); font-size: 0.84rem; text-align: left;
        }
        .tb-folder em { margin-left: auto; font-style: normal; font-size: 0.7rem; color: var(--muted); }
        .tb-folder:hover { color: var(--text); background: rgba(255,255,255,0.04); }
        .tb-folder.on { background: rgba(167,139,250,0.14); color: var(--text); }
        .tb-folder.on svg { color: var(--violet); }
        .tb-main { padding: 1.6rem 1.8rem 1.8rem; animation: fadeUp 0.35s ease both; min-width: 0; }
        .tb-head { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.4rem; }
        .tb-emoji { width: 46px; height: 46px; border-radius: 13px; display: inline-flex; align-items: center; justify-content: center; font-size: 1.35rem; background: var(--grad-btn); }
        .tb-head h3 { font-size: 1.3rem; font-weight: 700; letter-spacing: -0.02em; }
        .tb-head p { font-family: var(--font-mono); font-size: 0.74rem; color: var(--muted); }
        .tb-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 190px), 1fr)); gap: 0.75rem; }
        .tb-tile {
          display: flex; align-items: center; gap: 0.75rem; padding: 0.85rem 1rem; border-radius: 12px;
          border: 1px solid var(--line); background: rgba(255,255,255,0.025); font-size: 0.92rem; font-weight: 500;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .tb-tile:hover { border-color: rgba(167,139,250,0.35); transform: translateY(-2px); }
        @media (max-width: 760px) {
          .tb-body { grid-template-columns: 1fr; }
          .tb-side { border-right: 0; border-bottom: 1px solid var(--line); flex-direction: row; overflow-x: auto; padding: 0.8rem; scrollbar-width: none; }
          .tb-label { display: none; }
          .tb-folder { white-space: nowrap; flex-shrink: 0; }
          .tb-folder em { margin-left: 0.3rem; }
          .tb-main { padding: 1.3rem; }
        }
      `}</style>
    </section>
  );
}
