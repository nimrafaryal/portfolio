"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { filters, profile, projects, type FilterKey, type Media, type Project } from "@/data/portfolio";
import { Icon, TechIcon } from "./Icons";
import SectionHead from "./SectionHead";

/* ---------- media ---------- */

function AutoVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          v.preload = "auto";
          if (!reduce) v.play().catch(() => {});
        } else v.pause();
      },
      { rootMargin: "150px 0px", threshold: 0.2 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [src]);
  return <video ref={ref} src={src} poster={poster} muted loop playsInline preload="none" />;
}

function MediaBox({ project, onExpand }: { project: Project; onExpand: (src: string) => void }) {
  const [i, setI] = useState(0);
  const m: Media = project.media[i];
  const multi = project.media.length > 1;

  return (
    <div className="mbox">
      {m.type === "video" && <AutoVideo key={m.src} src={m.src} poster={m.poster} />}
      {m.type === "image" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={m.src} alt={m.alt} loading="lazy" style={{ objectFit: m.fit ?? "contain", background: m.bg ?? "#000" }} />
      )}
      {m.type === "flow" && (
        <div className="mflow">
          <span className="mflow-label">{"// pipeline"}</span>
          <ol>
            {m.steps.map((s, n) => (
              <li key={s}>
                <b>{n + 1}</b>
                {s}
              </li>
            ))}
          </ol>
        </div>
      )}

      {multi && (
        <div className="mtabs" role="tablist" aria-label="Choose demo">
          {project.media.map((x, n) => (
            <button key={n} type="button" role="tab" aria-selected={n === i} className={n === i ? "on" : ""} onClick={() => setI(n)}>
              {"label" in x && x.label ? x.label : `Demo ${n + 1}`}
            </button>
          ))}
        </div>
      )}
      {m.type === "video" && (
        <button type="button" className="mexpand" onClick={() => onExpand(m.src)} aria-label="Play video full size">
          <Icon name="expand" size={14} /> Full size
        </button>
      )}
    </div>
  );
}

const firstLink = (p: Project) => p.links[0]?.href;

/* ---------- featured ---------- */

function Featured({ project, onExpand }: { project: Project; onExpand: (s: string) => void }) {
  return (
    <article className="panel feat">
      <div className="feat-media">
        <MediaBox project={project} onExpand={onExpand} />
        {project.stats && (
          <div className="feat-stats">
            {project.stats.map((s) => (
              <div key={s.label}>
                <b className="grad">{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="feat-body">
        <p className="feat-meta">
          <span className="feat-star"><Icon name="star" size={12} /> featured</span>
          {project.category} · {project.badge}
        </p>
        <h3>{project.title}</h3>
        <p className="feat-desc">{project.description}</p>
        <ul className="feat-list">
          {project.highlights.map((h) => (
            <li key={h}><span><Icon name="check" size={13} /></span>{h}</li>
          ))}
        </ul>
        {project.pipeline && (
          <div className="feat-pipe">
            <span className="mflow-label">{"// pipeline"}</span>
            <div>
              {project.pipeline.map((s, n) => (
                <span key={s}>
                  {s}
                  {n < project.pipeline!.length - 1 && <i>→</i>}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="pc-tech">
          {project.tech.map((t) => (
            <span key={t} className="chip"><TechIcon name={t} size={13} /> {t}</span>
          ))}
        </div>
        <div className="feat-links">
          {project.links.map((l, n) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={n === 0 ? "btn btn-grad" : "btn"}>
              {l.label} <Icon name="arrowUpRight" size={15} />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ---------- grid card ---------- */

function Card({ project, index, onExpand }: { project: Project; index: number; onExpand: (s: string) => void }) {
  const link = firstLink(project);
  return (
    <article id={`project-${project.id}`} className="panel pcard" style={{ animationDelay: `${Math.min(index, 9) * 45}ms` }}>
      <div className="chrome">
        <span className="dots"><i /><i /><i /></span>
        <span className="pcard-path">~/projects/{project.id}</span>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="pcard-ext" aria-label={`Open ${project.title}`}>
            <Icon name="arrowUpRight" size={14} />
          </a>
        )}
      </div>
      <MediaBox project={project} onExpand={onExpand} />
      <div className="pcard-body">
        <p className="pcard-cat">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="pcard-desc">{project.description}</p>
        <ul className="pcard-list">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <div className="pcard-foot">
          <div className="pcard-icons">
            {project.tech.slice(0, 6).map((t) => (
              <span key={t} title={t}><TechIcon name={t} size={16} /></span>
            ))}
            {project.tech.length > 6 && <em>+{project.tech.length - 6}</em>}
          </div>
          <div className="pcard-links">
            {project.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label} <Icon name="arrowUpRight" size={12} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ---------- section ---------- */

export default function ProjectsSection() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);
  const [filter, setFilter] = useState<FilterKey>("all");
  const [open, setOpen] = useState<string | null>(null);

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: rest.length };
    for (const p of rest) for (const t of p.tags) c[t] = (c[t] ?? 0) + 1;
    return c;
  }, [rest]);
  const visible = filter === "all" ? rest : rest.filter((p) => p.tags.includes(filter));
  const slug = (f: string) => f.toLowerCase().replace(/ & /g, "-").replace(/,/g, "").replace(/\s+/g, "-");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <section id="projects">
      <div className="container">
        <SectionHead
          num="04"
          label="Work"
          title="Selected"
          accent="projects."
          note="Machine learning, deep learning, computer vision, LLM apps, backend and IoT. Every vision clip is real model output."
        />

        <Featured project={featured} onExpand={setOpen} />

        <div className="pbar">
          <p className="pbar-cmd">
            <span>›</span> ls ./projects --filter={filter === "all" ? "all" : slug(filters.find((f) => f.key === filter)!.label)}
          </p>
          <div className="pfilters" role="tablist" aria-label="Filter projects">
            {filters.map((f) =>
              counts[f.key] ? (
                <button
                  key={f.key}
                  type="button"
                  role="tab"
                  aria-selected={filter === f.key}
                  className={filter === f.key ? "on" : ""}
                  onClick={() => setFilter(f.key)}
                >
                  {f.key === "all" ? "all" : f.label.toLowerCase()} <em>{counts[f.key]}</em>
                </button>
              ) : null
            )}
          </div>
        </div>

        <div className="pgrid" key={filter}>
          {visible.map((p, i) => (
            <Card key={p.id} project={p} index={i} onExpand={setOpen} />
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "2.5rem" }}>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn">
            <Icon name="github" size={16} /> More on GitHub <Icon name="arrow" size={15} />
          </a>
        </div>
      </div>

      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={(e) => e.target === e.currentTarget && setOpen(null)}>
          <button type="button" className="btn lightbox-close" onClick={() => setOpen(null)} autoFocus>
            <Icon name="close" size={16} /> Close
          </button>
          <video src={open} controls autoPlay loop playsInline />
        </div>
      )}

      <style>{`
        .mbox { position: relative; aspect-ratio: 16 / 9; background: #06050d; overflow: hidden; border-bottom: 1px solid var(--line); }
        .mbox video, .mbox img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; display: block; }
        .mtabs {
          position: absolute; top: 10px; left: 10px; display: flex; gap: 4px; padding: 3px; border-radius: 10px;
          background: rgba(10, 8, 22, 0.82); border: 1px solid var(--line-strong); backdrop-filter: blur(6px);
        }
        .mtabs button {
          border: 0; background: none; color: var(--text-2); cursor: pointer; border-radius: 7px;
          font-family: var(--font-mono); font-size: 0.72rem; padding: 0.3rem 0.6rem;
        }
        .mtabs button.on { background: #f2effb; color: #140f26; }
        .mexpand {
          position: absolute; right: 10px; bottom: 10px; display: inline-flex; align-items: center; gap: 0.35rem;
          border: 1px solid var(--line-strong); background: rgba(10, 8, 22, 0.82); color: var(--text);
          font-family: var(--font-mono); font-size: 0.7rem; padding: 0.35rem 0.6rem; border-radius: 8px; cursor: pointer;
          opacity: 0; transition: opacity 0.2s ease;
        }
        .mbox:hover .mexpand, .mexpand:focus-visible { opacity: 1; }
        @media (hover: none) { .mexpand { opacity: 1; } }
        .mflow {
          position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; gap: 0.9rem; padding: 1.2rem 1.4rem;
          background: radial-gradient(circle at 70% 20%, rgba(168,85,247,0.22), transparent 60%), radial-gradient(circle at 10% 90%, rgba(236,72,153,0.14), transparent 55%), #0d0a1d;
        }
        .mflow-label { font-family: var(--font-mono); font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
        .mflow ol { list-style: none; display: flex; flex-wrap: wrap; gap: 0.45rem; }
        .mflow li {
          display: inline-flex; align-items: center; gap: 0.45rem; padding: 0.38rem 0.65rem; border-radius: 9px;
          border: 1px solid rgba(167,139,250,0.3); background: rgba(20, 16, 41, 0.85); font-size: 0.8rem; color: var(--text);
        }
        .mflow li b { font-family: var(--font-mono); font-size: 0.68rem; color: var(--pink); }

        .feat { display: grid; grid-template-columns: 1.15fr 1fr; overflow: hidden; }
        .feat-media { border-right: 1px solid var(--line); display: flex; flex-direction: column; min-width: 0; }
        .feat-stats { display: grid; grid-template-columns: repeat(3, 1fr); flex: 1; }
        .feat-stats > div { padding: 1.2rem; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; gap: 0.2rem; }
        .feat-stats > div + div { border-left: 1px solid var(--line); }
        .feat-stats b { font-size: 1.9rem; font-weight: 800; letter-spacing: -0.03em; }
        .feat-stats span { font-family: var(--font-mono); font-size: 0.66rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }
        .feat-body { padding: 2rem; display: flex; flex-direction: column; gap: 1rem; min-width: 0; }
        .feat-meta { font-family: var(--font-mono); font-size: 0.74rem; color: var(--muted); display: flex; align-items: center; gap: 0.7rem; flex-wrap: wrap; }
        .feat-star { display: inline-flex; align-items: center; gap: 0.3rem; padding: 0.2rem 0.55rem; border-radius: 7px; background: rgba(167,139,250,0.15); color: var(--violet); }
        .feat-body h3 { font-size: clamp(1.5rem, 2.6vw, 2rem); font-weight: 750; letter-spacing: -0.03em; line-height: 1.15; }
        .feat-desc { color: var(--text-2); line-height: 1.75; }
        .feat-list { list-style: none; display: flex; flex-direction: column; gap: 0.55rem; }
        .feat-list li { display: flex; gap: 0.65rem; font-size: 0.92rem; color: var(--text-2); line-height: 1.55; }
        .feat-list li > span { width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; background: rgba(167,139,250,0.15); color: var(--violet); margin-top: 1px; }
        .feat-pipe { padding: 0.9rem 1rem; border-radius: 12px; border: 1px solid var(--line); background: rgba(255,255,255,0.02); display: flex; flex-direction: column; gap: 0.55rem; }
        .feat-pipe > div { display: flex; flex-wrap: wrap; gap: 0.35rem 0.5rem; font-size: 0.85rem; }
        .feat-pipe i { font-style: normal; color: var(--pink); margin-left: 0.5rem; }
        .pc-tech { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .feat-links { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 0.3rem; }

        .pbar { display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap; margin: 4rem 0 1.5rem; }
        .pbar-cmd { font-family: var(--font-mono); font-size: 0.86rem; color: var(--text-2); }
        .pbar-cmd span { color: var(--violet); margin-right: 0.4rem; }
        .pfilters { display: flex; flex-wrap: wrap; gap: 0.35rem; }
        .pfilters button {
          display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.45rem 0.85rem; border-radius: 999px;
          border: 1px solid transparent; background: none; color: var(--text-2); cursor: pointer;
          font-family: var(--font-mono); font-size: 0.8rem; transition: all 0.2s ease;
        }
        .pfilters button em { font-style: normal; font-size: 0.7rem; color: var(--muted); }
        .pfilters button:hover { color: var(--text); border-color: var(--line-strong); }
        .pfilters button.on { background: #f2effb; color: #140f26; }
        .pfilters button.on em { color: #6b6385; }

        .pgrid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr)); gap: 1.25rem; }
        .pcard { overflow: hidden; display: flex; flex-direction: column; animation: fadeUp 0.45s ease both; transition: border-color 0.2s ease, transform 0.2s ease; }
        .pcard:hover { border-color: rgba(167,139,250,0.35); transform: translateY(-4px); }
        .pcard .chrome { padding: 0.6rem 0.9rem; }
        .pcard-path { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-width: 0; }
        .pcard-ext { margin-left: auto; color: var(--muted); display: inline-flex; }
        .pcard-ext:hover { color: var(--text); }
        .pcard-body { padding: 1.25rem 1.3rem 1.3rem; display: flex; flex-direction: column; gap: 0.6rem; flex: 1; }
        .pcard-cat { font-family: var(--font-mono); font-size: 0.7rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--violet); }
        .pcard-body h3 { font-size: 1.15rem; font-weight: 700; letter-spacing: -0.02em; line-height: 1.3; }
        .pcard-desc { color: var(--text-2); font-size: 0.9rem; line-height: 1.65; }
        .pcard-list { list-style: none; display: flex; flex-direction: column; gap: 0.3rem; }
        .pcard-list li { font-size: 0.84rem; color: var(--text-2); padding-left: 1rem; position: relative; line-height: 1.5; }
        .pcard-list li::before { content: "+"; position: absolute; left: 0; color: var(--green); font-family: var(--font-mono); }
        .pcard-foot { margin-top: auto; padding-top: 0.9rem; border-top: 1px solid var(--line); display: flex; flex-direction: column; gap: 0.75rem; }
        .pcard-icons { display: flex; gap: 0.4rem; align-items: center; flex-wrap: wrap; }
        .pcard-icons span { width: 32px; height: 32px; border-radius: 9px; display: inline-flex; align-items: center; justify-content: center; border: 1px solid var(--line); background: rgba(255,255,255,0.03); }
        .pcard-icons em { font-style: normal; font-family: var(--font-mono); font-size: 0.72rem; color: var(--muted); }
        .pcard-links { display: flex; flex-wrap: wrap; gap: 0.4rem 1rem; }
        .pcard-links a { display: inline-flex; align-items: center; gap: 0.25rem; font-size: 0.84rem; font-weight: 600; color: var(--pink); text-decoration: none; }
        .pcard-links a:hover { text-decoration: underline; }

        .lightbox { position: fixed; inset: 0; z-index: 300; background: rgba(6, 5, 13, 0.95); display: flex; align-items: center; justify-content: center; padding: 1.5rem; }
        .lightbox video { width: 100%; max-width: 1200px; max-height: 84vh; border-radius: 14px; background: #000; }
        .lightbox-close { position: absolute; top: calc(1rem + env(safe-area-inset-top, 0px)); right: max(1rem, env(safe-area-inset-right, 0px)); }

        @media (max-width: 960px) { .feat { grid-template-columns: 1fr; } .feat-media { border-right: 0; border-bottom: 1px solid var(--line); } .feat-body { padding: 1.5rem; } }
        @media (max-width: 560px) {
          .pfilters { flex-wrap: nowrap; overflow-x: auto; scrollbar-width: none; width: 100%; padding-bottom: 0.2rem; }
          .pfilters button { white-space: nowrap; }
          .feat-stats b { font-size: 1.4rem; }
        }
      `}</style>
    </section>
  );
}
