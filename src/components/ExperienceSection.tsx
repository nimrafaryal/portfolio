"use client";

import { useState } from "react";
import { hackathons } from "@/data/portfolio";
import { Icon, TechIcon } from "./Icons";
import SectionHead from "./SectionHead";

type Entry = {
  id: string;
  period: string;
  title: string;
  org: string;
  branch: string;
  kind: string;
  desc?: string;
  head?: boolean;
  points: string[];
  tags: string[];
  links: { label: string; href: string }[];
};

const [amd, genesis] = hackathons.map((h, i) => ({
  id: h.id,
  period: h.period,
  title: h.title,
  org: `${h.project} · ${h.org}`,
  branch: h.branch,
  kind: "Hackathon",
  head: i === 0,
  points: h.points,
  tags: h.tags,
  links: [
    { label: "Project page", href: h.link },
    { label: "Certificate", href: h.certificate },
  ],
}));

const entries: Entry[] = [
  amd,

  {
    id: "aspire",
    period: "2026",
    title: "Aspire Leaders Program",
    org: "Cohort 4",
    branch: "feat/leadership",
    kind: "Leadership",
    points: ["Selected for Cohort 4 of the Aspire Leaders Program, a global leadership development program"],
    tags: [],
    links: [],
  },
  {
    id: "fyp",
    period: "Final year",
    title: "Final Year Project: IoT Forest Monitoring Network",
    org: "UET Taxila · team of 3",
    branch: "feat/iot-sensor-network",
    kind: "Project",
    points: [
      "My role: designed the PostgreSQL database and built the Flask REST API for sensor data",
      "Arduino sensor nodes relay temperature, humidity and CO₂ over 433 MHz radio to a Raspberry Pi gateway and fire-risk dashboard",
    ],
    tags: ["Flask", "PostgreSQL", "Raspberry Pi", "Arduino"],
    links: [{ label: "GitHub", href: "https://github.com/nimrafaryal/iot-based-forest-network" }],
  },
  genesis,

];

export default function ExperienceSection() {
  const [openId, setOpenId] = useState<string>(entries[0].id);

  return (
    <section id="experience">
      <div className="container">
        <SectionHead
          num="02"
          label="Experience"
          title="git log"
          accent="--career"
          note="Hackathons, my final year project and leadership, newest first."
        />

        <ol className="log">
          {entries.map((e) => {
            const open = openId === e.id;
            return (
              <li key={e.id} className="log-row">
                <div className="log-when">
                  <span>{e.period}</span>
                  {e.head && <span className="head">HEAD → main</span>}
                </div>
                <div className="log-node" aria-hidden="true"><i className={e.head ? "on" : ""} /></div>
                <div className="panel log-card">
                  <div className="log-top">
                    <div style={{ minWidth: 0 }}>
                      <span className={`log-kind k-${e.kind.toLowerCase()}`}>{e.kind}</span>
                      <h3>{e.title}</h3>
                      <p className="log-org">@ {e.org}</p>
                    </div>
                    <span className="log-branch"><Icon name="branch" size={13} /> {e.branch}</span>
                  </div>

                  {e.desc && <p className="log-desc">{e.desc}</p>}

                  {open && (
                    <ul className="log-points">
                      {e.points.map((p) => (
                        <li key={p}><span>+</span>{p}</li>
                      ))}
                    </ul>
                  )}

                  <div className="log-foot">
                    <div className="log-tags">
                      {e.tags.map((t) => (
                        <span key={t} className="chip"><TechIcon name={t} size={13} /> {t}</span>
                      ))}
                      {open && e.links.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="log-link">
                          {l.label} <Icon name="arrowUpRight" size={13} />
                        </a>
                      ))}
                    </div>
                    <button type="button" className="log-toggle" onClick={() => setOpenId(open ? "" : e.id)} aria-expanded={open}>
                      {open ? "− collapse" : `+ ${e.points.length} change${e.points.length > 1 ? "s" : ""}`}
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <style>{`
        .log { list-style: none; display: flex; flex-direction: column; gap: 1.25rem; max-width: 1000px; margin: 0 auto; }
        .log-row { display: grid; grid-template-columns: 130px 28px 1fr; gap: 1.2rem; align-items: start; position: relative; }
        .log-row::before { content: ""; position: absolute; left: calc(130px + 1.2rem + 13px); top: 28px; bottom: -1.5rem; width: 1px; background: var(--line); }
        .log-row:last-child::before { display: none; }
        .log-when { text-align: right; padding-top: 1.3rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-2); display: flex; flex-direction: column; align-items: flex-end; gap: 0.4rem; }
        .head { font-size: 0.66rem; padding: 0.15rem 0.45rem; border-radius: 6px; background: rgba(167,139,250,0.15); color: var(--violet); }
        .log-node { padding-top: 1.45rem; display: flex; justify-content: center; }
        .log-node i { width: 12px; height: 12px; border-radius: 50%; border: 2px solid var(--violet); background: var(--bg); display: block; position: relative; z-index: 1; }
        .log-node i.on { background: var(--violet); box-shadow: 0 0 14px var(--violet); }
        .log-card { padding: 1.3rem 1.5rem; min-width: 0; }
        .log-top { display: flex; justify-content: space-between; gap: 0.75rem 1rem; flex-wrap: wrap; }
        .log-kind { display: inline-block; font-family: var(--font-mono); font-size: 0.66rem; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.15rem 0.5rem; border-radius: 6px; margin-bottom: 0.45rem; background: rgba(255,255,255,0.06); color: var(--text-2); }
        .log-kind.k-internship { background: rgba(74,222,128,0.12); color: var(--green); }
        .log-kind.k-hackathon { background: rgba(167,139,250,0.15); color: var(--violet); }
        .log-top h3 { font-size: 1.12rem; font-weight: 700; letter-spacing: -0.01em; }
        .log-org { color: var(--violet); font-size: 0.9rem; margin-top: 0.15rem; }
        .log-branch { display: inline-flex; align-items: center; gap: 0.35rem; font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-2); height: fit-content; }
        .log-desc { color: var(--text-2); font-size: 0.95rem; line-height: 1.65; margin-top: 0.75rem; max-width: 72ch; }
        .log-points { list-style: none; margin-top: 1rem; display: flex; flex-direction: column; gap: 0.5rem; }
        .log-points li { display: flex; gap: 0.7rem; color: var(--text-2); font-size: 0.93rem; line-height: 1.6; }
        .log-points li span { color: var(--green); font-family: var(--font-mono); }
        .log-foot { display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; flex-wrap: wrap; margin-top: 1rem; }
        .log-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; align-items: center; }
        .log-link { display: inline-flex; align-items: center; gap: 0.25rem; font-size: 0.82rem; font-weight: 600; color: var(--pink); text-decoration: none; margin-left: 0.4rem; }
        .log-link:hover { text-decoration: underline; }
        .log-toggle { font-family: var(--font-mono); font-size: 0.74rem; color: var(--muted); background: none; border: 0; cursor: pointer; padding: 0.3rem; }
        .log-toggle:hover { color: var(--text); }
        @media (max-width: 700px) {
          .log-row { grid-template-columns: 1fr; gap: 0.4rem; }
          .log-row::before, .log-node { display: none; }
          .log-when { text-align: left; align-items: flex-start; flex-direction: row; padding-top: 0; }
        }
      `}</style>
    </section>
  );
}
