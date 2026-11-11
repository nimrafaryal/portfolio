"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import { Icon } from "./Icons";

const links = [
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" as const },
  { label: "GitHub", href: profile.github, icon: "github" as const },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" as const },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", subject: "", message: "" });

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      const el = document.getElementById("contact-email");
      if (el) {
        const r = document.createRange();
        r.selectNodeContents(el);
        const s = window.getSelection();
        s?.removeAllRanges();
        s?.addRange(r);
      }
    }
  };

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = form.subject || "Hello from your portfolio";
    const body = `${form.message}\n\n— ${form.name}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact">
      <div className="container contact-grid">
        <div>
          <div className="eyebrow">
            <span className="num">[06]</span>
            <span className="bar" />
            <span>Contact</span>
          </div>
          <h2 className="h-xl">
            Let&apos;s build something <span className="grad">useful.</span>
          </h2>
          <p className="ct-lede">
            Open to AI / ML Engineer roles and project work in machine learning, LLM apps and computer vision, remote or on-site. I work with teams in Pakistan and clients worldwide.
          </p>

          <div className="ct-email">
            <a id="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
            <button type="button" className="icon-btn" onClick={copy} aria-label="Copy email address">
              <Icon name={copied ? "check" : "copy"} size={17} />
            </button>
            <span className="ct-copied" aria-live="polite">{copied ? "Copied" : ""}</span>
          </div>

          <ul className="ct-links">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  <Icon name={l.icon} size={18} />
                  <span>{l.label}</span>
                  <Icon name="arrowUpRight" size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className="panel ct-form" onSubmit={send}>
          <div className="chrome">
            <span className="dots"><i /><i /><i /></span> ~/contact/new-message.md
          </div>
          <div className="ct-fields">
            <label htmlFor="cf-name">$ name</label>
            <input id="cf-name" required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <label htmlFor="cf-subject">$ subject</label>
            <input id="cf-subject" placeholder="Let's work together" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
            <label htmlFor="cf-message">$ message</label>
            <textarea id="cf-message" required rows={5} placeholder="Tell me about the role or project…" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <button type="submit" className="btn btn-grad ct-send">
              <Icon name="send" size={16} /> Write email
            </button>
            <p className="ct-note">Opens your email app with this message filled in.</p>
          </div>
        </form>
      </div>

      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
        .ct-lede { color: var(--text-2); font-size: 1.05rem; margin-top: 1.2rem; max-width: 46ch; }
        .ct-email { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; margin-top: 2rem; }
        .ct-email a { font-size: clamp(1.15rem, 2.6vw, 1.6rem); font-weight: 650; letter-spacing: -0.02em; text-decoration: none; overflow-wrap: anywhere; }
        .ct-email a:hover { color: var(--violet); }
        .ct-copied { font-family: var(--font-mono); font-size: 0.75rem; color: var(--green); }
        .ct-links { list-style: none; margin-top: 1.8rem; border-top: 1px solid var(--line); max-width: 460px; }
        .ct-links li { border-bottom: 1px solid var(--line); }
        .ct-links a { display: flex; align-items: center; gap: 0.9rem; padding: 1rem 0.2rem; text-decoration: none; font-weight: 600; transition: color 0.2s ease, padding 0.2s ease; }
        .ct-links a span { flex: 1; }
        .ct-links a > svg:last-child { color: var(--muted); }
        .ct-links a:hover { color: var(--violet); padding-left: 0.6rem; }
        .ct-form { overflow: hidden; }
        .ct-fields { padding: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem; }
        .ct-fields label { font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-2); margin-top: 0.4rem; }
        .ct-fields input, .ct-fields textarea {
          width: 100%; padding: 0.8rem 0.95rem; border-radius: 12px; border: 1px solid var(--line); background: rgba(255,255,255,0.03);
          color: var(--text); font-family: var(--font-sans); font-size: 0.95rem; resize: vertical;
        }
        .ct-fields input::placeholder, .ct-fields textarea::placeholder { color: var(--muted); }
        .ct-fields input:focus, .ct-fields textarea:focus { border-color: rgba(167,139,250,0.5); outline: none; }
        .ct-send { justify-content: center; margin-top: 1rem; }
        .ct-note { font-size: 0.78rem; color: var(--muted); text-align: center; }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; } }
      `}</style>
    </section>
  );
}
