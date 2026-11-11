"use client";

import { achievements, certifications, education } from "@/data/portfolio";
import { Icon } from "./Icons";
import SectionHead from "./SectionHead";

export default function EducationSection() {
  return (
    <section id="education">
      <div className="container">
        <SectionHead num="05" label="Education" title="Learning &" accent="achievements." />

        <div className="edu-grid">
          <div className="degree">
            <span className="deg-years">2022 — 2026</span>
            <h3>{education.degree}</h3>
            <p className="deg-uni">{education.institution}</p>
            <div className="deg-cgpa">
              <b>3.69</b>
              <span>/4.0</span>
            </div>
            <p className="deg-cap">cumulative gpa</p>
            <div className="deg-course">
              {education.coursework.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
            <span className="deg-icon" aria-hidden="true"><Icon name="cap" size={120} /></span>
          </div>

          <div className="panel achlog">
            <div className="chrome"><Icon name="medal" size={14} /> achievements.log</div>
            <ol>
              {achievements.map((a, i) => (
                <li key={a.title}>
                  <span className="ach-n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="ach-ic" aria-hidden="true">{a.icon}</span>
                  <div>
                    <p className="ach-t">{a.title}</p>
                    <p className="ach-d">{a.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="panel certs" id="certifications">
          <div className="chrome">
            <i className="dot" style={{ background: "var(--violet)", boxShadow: "none" }} /> certifications
            <span style={{ marginLeft: "auto" }}>{certifications.length} rows</span>
          </div>
          <div className="certs-scroll">
            <table>
              <thead>
                <tr><th>Year</th><th>Certification</th><th>Issuer</th><th><span className="sr">Link</span></th></tr>
              </thead>
              <tbody>
                {certifications.map((c) => (
                  <tr key={c.title}>
                    <td className="c-year">{c.year || "—"}</td>
                    <td className="c-title">{c.title}</td>
                    <td className="c-iss">{c.issuer}</td>
                    <td className="c-link">
                      {c.href ? (
                        <a href={c.href} target="_blank" rel="noopener noreferrer">
                          View <Icon name="arrowUpRight" size={13} />
                        </a>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style>{`
        .edu-grid { display: grid; grid-template-columns: 1fr 1.25fr; gap: 1.25rem; }
        .degree {
          position: relative; overflow: hidden; border-radius: 18px; padding: 2rem;
          background: linear-gradient(140deg, #7c3aed 0%, #c026d3 55%, #ec4899 100%);
          display: flex; flex-direction: column; color: #fff;
        }
        .deg-years { font-family: var(--font-mono); font-size: 0.78rem; opacity: 0.85; letter-spacing: 0.08em; }
        .degree h3 { font-size: 1.6rem; font-weight: 750; letter-spacing: -0.02em; margin-top: 0.8rem; }
        .deg-uni { opacity: 0.9; margin-top: 0.2rem; }
        .deg-cgpa { display: flex; align-items: baseline; gap: 0.2rem; margin-top: auto; padding-top: 2rem; }
        .deg-cgpa b { font-size: clamp(3.5rem, 7vw, 5rem); font-weight: 800; letter-spacing: -0.05em; line-height: 1; }
        .deg-cgpa span { font-size: 1.3rem; opacity: 0.8; font-weight: 600; }
        .deg-cap { font-family: var(--font-mono); font-size: 0.72rem; opacity: 0.8; letter-spacing: 0.1em; }
        .deg-course { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 1.4rem; position: relative; z-index: 1; }
        .deg-course span { font-size: 0.76rem; padding: 0.25rem 0.6rem; border-radius: 7px; background: rgba(255,255,255,0.16); border: 1px solid rgba(255,255,255,0.25); }
        .deg-icon { position: absolute; right: -10px; bottom: 30px; opacity: 0.14; }
        .achlog { overflow: hidden; }
        .achlog ol { list-style: none; }
        .achlog li { display: flex; align-items: center; gap: 1rem; padding: 0.95rem 1.4rem; }
        .achlog li + li { border-top: 1px solid var(--line); }
        .ach-n { font-family: var(--font-mono); font-size: 0.72rem; color: var(--muted); width: 1.4rem; }
        .ach-ic { width: 38px; height: 38px; border-radius: 10px; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; background: rgba(251,191,36,0.1); border: 1px solid rgba(251,191,36,0.25); font-size: 1.15rem; }
        .ach-t { font-weight: 650; font-size: 0.98rem; }
        .ach-d { color: var(--text-2); font-size: 0.86rem; margin-top: 0.1rem; }
        .certs { margin-top: 1.25rem; overflow: hidden; }
        .certs-scroll { overflow-x: auto; }
        .certs table { width: 100%; border-collapse: collapse; min-width: 560px; }
        .certs th { text-align: left; font-family: var(--font-mono); font-size: 0.66rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); font-weight: 500; padding: 0.9rem 1.4rem; border-bottom: 1px solid var(--line); }
        .certs td { padding: 1rem 1.4rem; border-bottom: 1px solid var(--line); vertical-align: middle; }
        .certs tr:last-child td { border-bottom: 0; }
        .c-year { font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-2); width: 80px; }
        .c-title { font-weight: 600; }
        .c-iss { color: var(--text-2); font-size: 0.9rem; }
        .c-link { text-align: right; width: 90px; }
        .c-link a { display: inline-flex; align-items: center; gap: 0.25rem; color: var(--pink); font-weight: 600; font-size: 0.85rem; text-decoration: none; }
        .sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }
        @media (max-width: 900px) { .edu-grid { grid-template-columns: 1fr; } .degree { min-height: 320px; } }
        @media (max-width: 480px) { .achlog li { padding: 0.9rem 1rem; gap: 0.75rem; } .ach-n { display: none; } .degree { padding: 1.5rem; } }
      `}</style>
    </section>
  );
}
