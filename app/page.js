'use client';
import { useState, useEffect, useRef } from 'react';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

function Counter({ end, suffix = '' }) {
  const [c, setC] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);
  useEffect(() => {
    const ob = new IntersectionObserver(e => { if (e[0].isIntersecting && !done.current) { done.current = true; let s = 0; const step = t => { if (!s) s = t; const p = Math.min((t - s) / 2000, 1); setC(Math.floor((1 - Math.pow(1 - p, 3)) * end)); if (p < 1) requestAnimationFrame(step); }; requestAnimationFrame(step); } }, { threshold: 0.3 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [end]);
  return <span ref={ref}>{c}{suffix}</span>;
}

function R({ children, d = 0 }) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(e => { if (e[0].isIntersecting) { setV(true); ob.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);
  return <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? 'translateY(0)' : 'translateY(30px)', transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${d * 0.1}s` }}>{children}</div>;
}

// ══════════════════════════════════════
// LANDING — VISUALLY STUNNING
// ══════════════════════════════════════
function LandingPage({ onGetStarted }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ background: '#050507', color: '#E8E8ED', fontFamily: "'Inter', sans-serif" }}>

      {/* ═══ NAV ═══ */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(5,5,7,0.8)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" style={{ fontWeight: 800, fontSize: 20, letterSpacing: '-0.03em', textDecoration: 'none', color: 'inherit' }}>UYWNIX</a>
          <div style={{ display: 'flex', gap: 28 }}>
            {['Products', 'Services', 'Newsroom', 'FAQ'].map(s => <a key={s} href={`#${s.toLowerCase()}`} style={{ color: '#71717A', textDecoration: 'none', fontSize: 13, fontWeight: 500 }}>{s}</a>)}
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={onGetStarted} style={{ padding: '7px 16px', background: 'transparent', color: '#A1A1AA', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit' }}>Sign In</button>
            <button onClick={onGetStarted} className="btn-glow" style={{ padding: '7px 16px', fontSize: 13 }}>Get Started</button>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section style={{ position: 'relative', padding: '160px 24px 120px', textAlign: 'center', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />

        {/* Central Orb Visual */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 280, height: 280, pointerEvents: 'none' }}>
          {/* Outer glow */}
          <div style={{ position: 'absolute', inset: -60, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.25) 0%, rgba(168,85,247,0.08) 40%, transparent 70%)', animation: 'glow-pulse 4s ease-in-out infinite' }} />
          {/* Ring 1 */}
          <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid rgba(124,58,237,0.2)', animation: 'spin-slow 20s linear infinite' }}>
            <div style={{ position: 'absolute', top: 0, left: '50%', width: 10, height: 10, borderRadius: '50%', background: '#A855F7', boxShadow: '0 0 20px #A855F7', transform: 'translateX(-50%)' }} />
          </div>
          {/* Ring 2 */}
          <div style={{ position: 'absolute', inset: 40, borderRadius: '50%', border: '1px solid rgba(168,85,247,0.12)', animation: 'spin-slow 30s linear infinite reverse' }}>
            <div style={{ position: 'absolute', bottom: 0, left: '50%', width: 8, height: 8, borderRadius: '50%', background: '#7C3AED', boxShadow: '0 0 16px #7C3AED', transform: 'translateX(-50%)' }} />
          </div>
          {/* Ring 3 */}
          <div style={{ position: 'absolute', inset: 70, borderRadius: '50%', border: '1px solid rgba(192,132,252,0.08)', animation: 'spin-slow 15s linear infinite' }}>
            <div style={{ position: 'absolute', top: '50%', right: 0, width: 6, height: 6, borderRadius: '50%', background: '#C084FC', boxShadow: '0 0 14px #C084FC', transform: 'translateY(-50%)' }} />
          </div>
          {/* Core orb */}
          <div style={{ position: 'absolute', inset: 90, borderRadius: '50%', background: 'radial-gradient(circle at 40% 40%, rgba(168,85,247,0.6), rgba(124,58,237,0.3) 60%, rgba(91,33,182,0.1) 100%)', boxShadow: '0 0 60px rgba(124,58,237,0.4), 0 0 120px rgba(168,85,247,0.2), inset 0 0 40px rgba(255,255,255,0.1)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 860, margin: '0 auto', width: '100%' }}>
          <R>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', borderRadius: 999, background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.15)', fontSize: 12, color: '#A855F7', fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, letterSpacing: '0.06em', marginBottom: 28 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#A855F7', boxShadow: '0 0 8px #A855F7' }} />
              Powered by OpenClaw
            </div>
          </R>
          <R d={1}>
            <p style={{ fontSize: 13, color: '#A855F7', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, fontFamily: "'JetBrains Mono', monospace", marginBottom: 20 }}>AI for everyone</p>
          </R>
          <R d={2}>
            <h1 style={{ fontSize: 76, fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1.02, marginBottom: 24 }}>
              From pull request to<br />
              <span className="g-text">grocery list</span> — we've got you covered.
            </h1>
          </R>
          <R d={3}>
            <p style={{ fontSize: 18, color: '#71717A', maxWidth: 500, margin: '0 auto 36px', lineHeight: 1.6 }}>
              Coding agent for developers. Always on AI for everyone.
            </p>
          </R>
          <R d={4}>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={onGetStarted} className="btn-glow" style={{ fontSize: 16, padding: '16px 36px' }}>🦞 Deploy Your Agent</button>
              <a href="#products" className="btn-ghost" style={{ lineHeight: '22px' }}>Explore Products ↓</a>
            </div>
          </R>
          <R d={5}>
            <p style={{ fontSize: 12, color: '#3F3F46', fontFamily: "'JetBrains Mono', monospace", marginTop: 28 }}>VS Code · CLI · Telegram · WhatsApp · Discord · & more</p>
          </R>
        </div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <div style={{ padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div style={{ display: 'inline-flex', gap: 40, animation: 'marquee 25s linear infinite' }}>
          {Array(2).fill(null).map((_, i) => (
            <div key={i} style={{ display: 'inline-flex', gap: 40 }}>
              {['GLM-5.1', 'Llama 4', 'Mistral', 'Qwen 3', 'DeepSeek R1', 'Gemma 4:31B', 'Claude 4', 'GPT-4o', 'Gemini 2.5', 'Telegram', 'WhatsApp', 'Discord', 'Slack', 'OpenClaw', 'Free Tier', '24/7'].map((t, j) => (
                <span key={j} style={{ fontSize: 13, color: '#3F3F46', fontWeight: 500 }}><span style={{ display: 'inline-block', width: 4, height: 4, borderRadius: '50%', background: '#7C3AED', marginRight: 10, verticalAlign: 'middle' }} />{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ═══ PRODUCTS — BENTO GRID ═══ */}
      <section id="products" style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <R><p style={{ fontSize: 12, color: '#A855F7', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, marginBottom: 10 }}>// Products</p></R>
          <R d={1}><h2 style={{ fontSize: 48, fontWeight: 900, letterSpacing: '-0.04em', marginBottom: 12 }}>Two products. <span className="g-text">One mission.</span></h2></R>
          <R d={2}><p style={{ fontSize: 16, color: '#71717A', marginBottom: 48 }}>Everything you need — an always-on AI agent and a social app for real connections.</p></R>

          <div className="bento">
            {/* UYWNIX Claw — Large Card */}
            <R d={3}>
              <div className="glass bento-lg" style={{ padding: 48, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -120, right: -120, width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.15), transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: -80, left: -80, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.08), transparent 70%)', pointerEvents: 'none' }} />
                {/* Animated orbiting dot */}
                <div style={{ position: 'absolute', top: '50%', right: 40, width: 200, height: 200, pointerEvents: 'none' }}>
                  <div style={{ position: 'absolute', top: '50%', left: '50%', width: 6, height: 6, borderRadius: '50%', background: '#A855F7', boxShadow: '0 0 12px #A855F7', animation: 'orbit 8s linear infinite' }} />
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 12px', borderRadius: 999, background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.2)', fontSize: 12, color: '#A855F7', fontWeight: 600, marginBottom: 28 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#A855F7', boxShadow: '0 0 8px #A855F7', animation: 'pulse-glow 2s infinite' }} />
                    Hosted in 2 clicks
                  </div>
                  <h3 style={{ fontSize: 44, fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 8 }}>UYWNIX Claw</h3>
                  <p style={{ fontSize: 15, color: '#71717A', marginBottom: 32 }}>Natively connected to 500+ models</p>
                  <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Your personal 24/7 AI agent</h4>
                  <p style={{ fontSize: 14, color: '#52525B', lineHeight: 1.7, marginBottom: 28 }}>Automate any workflow with your own AI agent that runs around the clock. Connect to 500+ models and build custom workflows for repetitive tasks.</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {['Runs 24/7 in the background', 'Manage tasks via Telegram or web', 'Automated workflows & cron', 'Enterprise-grade security'].map((f, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#A1A1AA' }}>
                        <span style={{ color: '#A855F7', fontSize: 16 }}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <button onClick={onGetStarted} className="btn-glow" style={{ fontSize: 15 }}>🦞 Deploy Now</button>
                </div>
              </div>
            </R>

            {/* UYWNI Card */}
            <R d={4}>
              <div className="glass" style={{ padding: 40, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -80, right: -80, width: 250, height: 250, borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,197,94,0.08), transparent 70%)', pointerEvents: 'none' }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 12px', borderRadius: 999, background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.12)', fontSize: 12, color: '#22C55E', fontWeight: 600, marginBottom: 24 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E' }} />
                    Social App
                  </div>
                  <h3 style={{ fontSize: 32, fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 6 }}>UYWNI</h3>
                  <p style={{ fontSize: 14, color: '#71717A', marginBottom: 24 }}>Connect, share, and build community</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {['Real-time messaging and calls', 'Share posts, stories, moments', 'Privacy-first design', 'Community building tools'].map((f, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#A1A1AA' }}>
                        <span style={{ color: '#22C55E', fontSize: 14 }}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <a href="https://uywni.app" target="_blank" className="btn-ghost" style={{ display: 'inline-block', fontSize: 13, padding: '10px 20px' }}>Open UYWNI →</a>
                </div>
              </div>
            </R>

            {/* Model Pills — Wide Card */}
            <R d={5}>
              <div className="glass bento-wide" style={{ padding: 32, textAlign: 'center' }}>
                <p style={{ fontSize: 13, color: '#71717A', marginBottom: 16 }}>Any model. <span style={{ color: '#22C55E' }}>Free ones included.</span></p>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
                  {[{ n: 'GLM-5.1', f: true }, { n: 'Llama 4', f: true }, { n: 'Mistral', f: true }, { n: 'Qwen 3', f: true }, { n: 'DeepSeek R1', f: true }, { n: 'Gemma 4:31B', f: true }, { n: 'Claude 4', f: false }, { n: 'GPT-4o', f: false }, { n: 'Gemini 2.5', f: false }].map((m, i) => (
                    <span key={i} style={{ padding: '8px 16px', borderRadius: 999, background: m.f ? 'rgba(34,197,94,0.06)' : 'rgba(255,255,255,0.02)', border: m.f ? '1px solid rgba(34,197,94,0.15)' : '1px solid rgba(255,255,255,0.05)', fontSize: 12, color: m.f ? '#22C55E' : '#71717A', fontWeight: 500 }}>
                      {m.n} {m.f ? '✓' : '🔑'}
                    </span>
                  ))}
                </div>
              </div>
            </R>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <R><p style={{ fontSize: 12, color: '#71717A', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500, marginBottom: 36 }}>Trusted by developers at the world's most innovative companies</p></R>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[{ v: <Counter end={1} suffix="#" />, l: 'Open Source Product' }, { v: <><Counter end={500} suffix="+" /></>, l: 'AI Models' }, { v: <><Counter end={24} />/<Counter end={7} /></>, l: 'Always On' }, { v: <Counter end={25} suffix="T+" />, l: 'Tokens Processed' }].map((s, i) => (
              <R key={i} d={i + 1}>
                <div className="glass-static" style={{ padding: 28 }}>
                  <div style={{ fontSize: 44, fontWeight: 900, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '-0.04em' }} className="g-text">{s.v}</div>
                  <div style={{ fontSize: 12, color: '#71717A', marginTop: 8 }}>{s.l}</div>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ YOUR AI AGENT ═══ */}
      <section style={{ padding: '100px 24px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <R><h2 style={{ fontSize: 48, fontWeight: 900, letterSpacing: '-0.04em', marginBottom: 8 }}>Your personal <span className="g-text">AI agent</span></h2></R>
          <R d={1}><p style={{ fontSize: 20, color: '#71717A', marginBottom: 12 }}>Meet UYWNIX Claw</p></R>
          <R d={2}><p style={{ fontSize: 16, color: '#52525B', lineHeight: 1.7, marginBottom: 48 }}>A hosted AI agent that runs 24/7 — reading email, managing your calendar, and taking action on your behalf.</p></R>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
            {[
              { icon: '⚡', title: 'One-click deploy', desc: 'Skip Docker, servers, and config files. Your personal AI agent is provisioned and ready in seconds.', color: '#A855F7' },
              { icon: '💬', title: 'Chat where you are', desc: 'Connect via Telegram, Discord, or Slack. Your agent takes real actions — email, calendar, web browsing — not just chat.', color: '#3B82F6' },
              { icon: '🛡️', title: 'Fully managed', desc: 'We handle infrastructure, security, and updates. Powered by OpenClaw with access to 500+ AI models.', color: '#22C55E' },
            ].map((f, i) => (
              <R key={i} d={i + 1}>
                <div className="glass" style={{ padding: 36 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: `rgba(${f.color === '#A855F7' ? '124,58,237' : f.color === '#3B82F6' ? '59,130,246' : '34,197,94'},0.1)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 20 }}>{f.icon}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: '#52525B', lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" style={{ padding: '100px 24px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <R><p style={{ fontSize: 12, color: '#A855F7', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, marginBottom: 10 }}>// Services</p></R>
          <R d={1}><h2 style={{ fontSize: 48, fontWeight: 900, letterSpacing: '-0.04em', marginBottom: 12 }}>Built for <span className="g-text">agentic engineering</span></h2></R>
          <R d={2}><p style={{ fontSize: 16, color: '#71717A', marginBottom: 48 }}>What we build for businesses.</p></R>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { icon: '⚡', title: 'AI Agent Deployment', desc: 'Deploy in 60 seconds. No servers, no config. Just click and go.' },
              { icon: '🌐', title: 'Web Development', desc: 'Custom websites and full-stack platforms. Next.js, React, Node.' },
              { icon: '📱', title: 'Mobile Apps', desc: 'iOS and Android from a single codebase. React Native.' },
              { icon: '🛡️', title: 'Cloud Infrastructure', desc: 'Alibaba Cloud, Oracle, Hetzner. Secure and scalable hosting.' },
              { icon: '🎨', title: 'Brand & Design', desc: 'Visual identity, UI/UX, brand guidelines, and design systems.' },
              { icon: '📞', title: 'AI Calling Agents', desc: 'Voice AI for business. Inbound support, outbound sales.' },
            ].map((s, i) => (
              <R key={i} d={i + 1}>
                <div className="glass" style={{ padding: 28 }}>
                  <div style={{ fontSize: 28, marginBottom: 14 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: '#52525B', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ NEWSROOM ═══ */}
      <section id="newsroom" style={{ padding: '100px 24px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <R><p style={{ fontSize: 12, color: '#A855F7', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, marginBottom: 10 }}>// Newsroom</p></R>
          <R d={1}><h2 style={{ fontSize: 40, fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 8 }}>Recent posts</h2></R>
          <R d={2}><p style={{ fontSize: 15, color: '#71717A', marginBottom: 40 }}>Read the latest news and updates from the UYWNIX team.</p></R>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { tag: 'AI Agents', title: "Anthropic Doesn't Want Your Subscription Anymore", desc: 'Claude Code is moving companies to API pricing — accelerating the shift to model-agnostic, usage-based AI.', date: 'Apr 2026' },
              { tag: 'User Story', title: 'How a Delhi Founder Replaced His Accountant with UYWNIX Claw', desc: 'A real account of drowning in bureaucracy, and building an AI bookkeeper on UYWNIX Claw that actually works.', date: 'Apr 2026' },
              { tag: 'Engineering', title: 'Our rules for safely running OpenClaw with UYWNIX Claw in production', desc: 'Best practices for running AI agents at scale. Security, reliability, and monitoring.', date: 'Mar 2026' },
            ].map((p, i) => (
              <R key={i} d={i + 1}>
                <div className="glass" style={{ padding: 28, cursor: 'pointer' }}>
                  <span style={{ fontSize: 11, color: '#A855F7', fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{p.tag} · {p.date}</span>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 14, marginBottom: 8, lineHeight: 1.3 }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: '#52525B', lineHeight: 1.6 }}>{p.desc}</p>
                  <span style={{ display: 'inline-block', marginTop: 16, fontSize: 13, color: '#A855F7', fontWeight: 600 }}>Read more →</span>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" style={{ padding: '100px 24px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <R><p style={{ fontSize: 12, color: '#A855F7', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, marginBottom: 10 }}>// FAQ</p></R>
          <R d={1}><h2 style={{ fontSize: 36, fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 40 }}>Frequently asked questions</h2></R>
          {[
            { q: 'Is UYWNIX Claw free?', a: 'Yes! Free AI models (GLM-5.1, Llama 4, Mistral, Qwen 3, DeepSeek R1) work without any API key. Premium models require your own key.' },
            { q: 'How does UYWNIX handle data privacy?', a: 'Your data stays on your own instance. Token-based auth, encrypted storage, VCN firewalls. We never share or sell data.' },
            { q: 'What platforms does UYWNIX Claw support?', a: 'Telegram, WhatsApp, Discord, Slack, and web chat. Your agent works wherever you are.' },
            { q: 'How do Cloud Agents work?', a: 'Click deploy, pick a model, connect your platform. Your agent is provisioned and running in under 60 seconds.' },
            { q: 'Why switch to UYWNIX Claw?', a: 'One-click deploy, 500+ models, 24/7 uptime, no servers needed. Built on OpenClaw — open source, extensible, and free to self-host.' },
          ].map((f, i) => (
            <R key={i} d={i + 1}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ padding: '20px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: 15, fontWeight: 500 }}>{f.q}</h4>
                  <span style={{ color: '#A855F7', fontSize: 22, transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'none', flexShrink: 0, marginLeft: 16 }}>+</span>
                </div>
                {openFaq === i && <p style={{ fontSize: 14, color: '#71717A', lineHeight: 1.7, paddingBottom: 20 }}>{f.a}</p>}
              </div>
            </R>
          ))}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ padding: '140px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.1), transparent 60%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto' }}>
          <R><h2 style={{ fontSize: 48, fontWeight: 900, letterSpacing: '-0.04em', marginBottom: 16 }}>Ready to get started?</h2></R>
          <R d={1}><p style={{ fontSize: 16, color: '#71717A', marginBottom: 40 }}>Choose your path — an always-on AI assistant for life, or a social app for everyone.</p></R>
          <R d={2}>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={onGetStarted} className="btn-glow" style={{ fontSize: 16, padding: '18px 36px' }}>🦞 UYWNIX Claw — Deploy Now</button>
              <a href="https://uywni.app" target="_blank" className="btn-ghost" style={{ lineHeight: '24px' }}>UYWNI — Social App</a>
            </div>
          </R>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.04)', padding: '48px 24px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
          <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-0.02em' }}>UYWNIX</span>
          <div style={{ display: 'flex', gap: 24, fontSize: 13, color: '#71717A' }}>
            <a href="#products" style={{ color: '#71717A', textDecoration: 'none' }}>Products</a>
            <a href="#services" style={{ color: '#71717A', textDecoration: 'none' }}>Services</a>
            <a href="#newsroom" style={{ color: '#71717A', textDecoration: 'none' }}>Newsroom</a>
            <a href="#faq" style={{ color: '#71717A', textDecoration: 'none' }}>FAQ</a>
            <a href="https://github.com/razintayyabr-netizen" target="_blank" style={{ color: '#71717A', textDecoration: 'none' }}>GitHub</a>
            <a href="mailto:contact@uywnix.com" style={{ color: '#71717A', textDecoration: 'none' }}>Contact</a>
          </div>
          <span style={{ fontSize: 12, color: '#3F3F46', fontFamily: "'JetBrains Mono', monospace" }}>© 2026 UYWNIX</span>
        </div>
      </footer>
    </div>
  );
}

// ─── AUTH ───
function AuthScreen({ onAuth }) {
  const [mode, setMode] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault(); setError(''); setLoading(true);
    try {
      const body = mode === 'signup' ? { name, email, password } : { email, password };
      const res = await fetch(`${API}/auth/${mode}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Auth failed');
      localStorage.setItem('token', data.token);
      onAuth(data.user, data.token);
    } catch (err) { setError(err.message); } finally { setLoading(false); }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050507', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 30%, rgba(124,58,237,0.12), transparent 60%)' }} />
      <div style={{ position: 'relative', zIndex: 1, width: 400, maxWidth: '90vw' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <h1 style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em' }}>UYWNIX</h1>
          <p style={{ color: '#71717A', fontSize: 14, marginTop: 4 }}>Your personal 24/7 AI agent</p>
        </div>
        <form onSubmit={submit} className="glass-static" style={{ padding: 32 }}>
          {mode === 'signup' && <div style={{ marginBottom: 16 }}><label style={{ fontSize: 11, fontWeight: 600, color: '#71717A', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Full Name</label><input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" required style={{ width: '100%', padding: '12px 14px', borderRadius: 10, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', color: '#E8E8ED', fontSize: 14, outline: 'none', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }} /></div>}
          <div style={{ marginBottom: 16 }}><label style={{ fontSize: 11, fontWeight: 600, color: '#71717A', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Email</label><input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@email.com" required style={{ width: '100%', padding: '12px 14px', borderRadius: 10, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', color: '#E8E8ED', fontSize: 14, outline: 'none', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }} /></div>
          <div style={{ marginBottom: 24 }}><label style={{ fontSize: 11, fontWeight: 600, color: '#71717A', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Password</label><input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required style={{ width: '100%', padding: '12px 14px', borderRadius: 10, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', color: '#E8E8ED', fontSize: 14, outline: 'none', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }} /></div>
          {error && <p style={{ color: '#EF4444', fontSize: 13, marginBottom: 16, textAlign: 'center' }}>{error}</p>}
          <button type="submit" disabled={loading} className="btn-glow" style={{ width: '100%', fontSize: 15 }}>{loading ? 'Please wait...' : mode === 'signup' ? 'Create Account' : 'Sign In'}</button>
          <p style={{ textAlign: 'center', fontSize: 13, color: '#71717A', marginTop: 20 }}>{mode === 'signup' ? 'Already have an account?' : "Don't have an account?"} <span onClick={() => { setMode(mode === 'signup' ? 'login' : 'signup'); setError(''); }} style={{ color: '#A855F7', cursor: 'pointer', fontWeight: 600 }}>{mode === 'signup' ? 'Sign In' : 'Sign Up'}</span></p>
        </form>
      </div>
    </div>
  );
}

// ─── DASHBOARD ───
function Dashboard({ user, token, onLogout }) {
  const [agents, setAgents] = useState([]);
  const [stats, setStats] = useState({ activeAgents: 0, totalAgents: 0, platforms: 0, messages: 0 });
  const [view, setView] = useState('dashboard');
  const [agentName, setAgentName] = useState('');
  const [selectedModel, setSelectedModel] = useState('glm-5.1');
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [deploying, setDeploying] = useState(false);
  const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };
  const MODELS = [{ id: 'glm-5.1', name: 'GLM-5.1', provider: 'Ollama Cloud', free: true }, { id: 'llama4', name: 'Llama 4', provider: 'Ollama Cloud', free: true }, { id: 'mistral-large', name: 'Mistral Large', provider: 'Ollama Cloud', free: true }, { id: 'qwen3', name: 'Qwen 3', provider: 'Ollama Cloud', free: true }, { id: 'deepseek-r1', name: 'DeepSeek R1', provider: 'Ollama Cloud', free: true }, { id: 'claude-4-sonnet', name: 'Claude 4 Sonnet', provider: 'Anthropic', free: false }, { id: 'gpt-4o', name: 'GPT-4o', provider: 'OpenAI', free: false }, { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro', provider: 'Google', free: false }];
  const PLATFORMS = [{ id: 'telegram', name: 'Telegram', icon: '✈️' }, { id: 'whatsapp', name: 'WhatsApp', icon: '💬' }, { id: 'discord', name: 'Discord', icon: '🎮' }, { id: 'webchat', name: 'WebChat', icon: '🌐' }, { id: 'slack', name: 'Slack', icon: '💼' }];
  const fetchAgents = async () => { try { const r = await fetch(`${API}/agents`, { headers }); const d = await r.json(); setAgents(d.agents || []); } catch {} };
  const fetchStats = async () => { try { const r = await fetch(`${API}/stats`, { headers }); const d = await r.json(); setStats(d); } catch {} };
  useEffect(() => { fetchAgents(); fetchStats(); }, []);
  const createAgent = async () => { if (!agentName) return; setDeploying(true); try { const r = await fetch(`${API}/agents`, { method: 'POST', headers, body: JSON.stringify({ name: agentName, model: selectedModel, platforms: selectedPlatforms }) }); const d = await r.json(); if (d.agent) { setAgents(prev => [d.agent, ...prev]); setAgentName(''); setSelectedPlatforms([]); setView('dashboard'); } } catch {} setDeploying(false); fetchStats(); };
  const toggleAgent = async (id, status) => { const ns = status === 'running' ? 'stopped' : 'running'; try { await fetch(`${API}/agents/${id}`, { method: 'PATCH', headers, body: JSON.stringify({ status: ns }) }); setAgents(prev => prev.map(a => a.id === id ? { ...a, status: ns } : a)); } catch {} fetchStats(); };
  const deleteAgent = async (id) => { try { await fetch(`${API}/agents/${id}`, { method: 'DELETE', headers }); setAgents(prev => prev.filter(a => a.id !== id)); } catch {} fetchStats(); };

  return (
    <div style={{ minHeight: '100vh', background: '#050507', display: 'flex' }}>
      <div style={{ width: 220, background: 'rgba(10,10,14,0.9)', borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', position: 'fixed', top: 0, bottom: 0, left: 0 }}>
        <div style={{ padding: '16px 14px', display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontWeight: 800, fontSize: 16 }}>UYWNIX</span><span style={{ fontSize: 9, color: '#71717A', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Claw</span></div>
        <nav style={{ padding: '6px 10px', flex: 1 }}>{[{ id: 'dashboard', label: 'Dashboard', icon: '📊' }, { id: 'create', label: 'New Agent', icon: '⚡' }, { id: 'models', label: 'Models', icon: '🧠' }, { id: 'settings', label: 'Settings', icon: '⚙️' }].map(item => (<button key={item.id} onClick={() => setView(item.id)} style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '8px 12px', borderRadius: 8, background: view === item.id ? 'rgba(124,58,237,0.08)' : 'transparent', border: 'none', color: view === item.id ? '#A855F7' : '#71717A', fontSize: 13, fontWeight: view === item.id ? 600 : 400, cursor: 'pointer', textAlign: 'left', fontFamily: 'Inter, sans-serif', marginBottom: 2 }}><span>{item.icon}</span> {item.label}</button>))}</nav>
        <div style={{ padding: '10px 14px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: 8 }}><div style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg, #7C3AED, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}>{user.name?.[0]?.toUpperCase()}</div><div style={{ flex: 1, overflow: 'hidden' }}><div style={{ fontSize: 12, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.name}</div><div style={{ fontSize: 10, color: '#71717A' }}>{user.email}</div></div><button onClick={onLogout} style={{ background: 'none', border: 'none', color: '#71717A', cursor: 'pointer', fontSize: 16 }}>→</button></div>
      </div>
      <div style={{ marginLeft: 220, flex: 1, padding: '28px 32px' }}>
        {view === 'dashboard' && (<><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}><div><h1 style={{ fontSize: 24, fontWeight: 800 }}>Welcome back, {user.name?.split(' ')[0]}</h1><p style={{ color: '#71717A', fontSize: 13, marginTop: 2 }}>{agents.length === 0 ? 'Deploy your first AI agent' : `${stats.activeAgents} active`}</p></div><button onClick={() => setView('create')} className="btn-glow" style={{ fontSize: 13, padding: '8px 20px' }}>+ New Agent</button></div><div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 24 }}>{[{ label: 'Active', value: stats.activeAgents, color: '#22C55E' }, { label: 'Total', value: stats.totalAgents, color: '#A855F7' }, { label: 'Platforms', value: stats.platforms, color: '#3B82F6' }, { label: 'Messages', value: stats.messages, color: '#F59E0B' }].map((s, i) => (<div key={i} className="glass-static" style={{ padding: 16 }}><div style={{ fontSize: 11, color: '#71717A', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>{s.label}</div><div style={{ fontSize: 24, fontWeight: 700, color: s.color, fontFamily: "'JetBrains Mono', monospace", marginTop: 6 }}>{s.value}</div></div>))}</div>{agents.length === 0 ? (<div className="glass-static" style={{ padding: 64, textAlign: 'center' }}><h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 6 }}>No agents yet</h2><p style={{ color: '#71717A', fontSize: 14, marginBottom: 24 }}>Deploy your first AI agent. It takes 60 seconds.</p><button onClick={() => setView('create')} className="btn-glow" style={{ fontSize: 14 }}>⚡ Create First Agent</button></div>) : (<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>{agents.map(agent => (<div key={agent.id} className="glass-static" style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}><div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><div style={{ width: 8, height: 8, borderRadius: '50%', background: agent.status === 'running' ? '#22C55E' : '#71717A', boxShadow: agent.status === 'running' ? '0 0 8px rgba(34,197,94,0.5)' : 'none' }} /><div><div style={{ fontWeight: 600, fontSize: 14 }}>{agent.name}</div><div style={{ fontSize: 11, color: '#71717A', marginTop: 1 }}>{MODELS.find(m => m.id === agent.model)?.name} · {(agent.platforms || []).map(p => PLATFORMS.find(pl => pl.id === p)?.name).filter(Boolean).join(', ') || 'No platform'}</div></div></div><div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 10, padding: '3px 8px', borderRadius: 999, background: agent.status === 'running' ? 'rgba(34,197,94,0.08)' : 'rgba(113,113,122,0.08)', color: agent.status === 'running' ? '#22C55E' : '#71717A', fontWeight: 600 }}>{agent.status?.toUpperCase()}</span><button onClick={() => toggleAgent(agent.id, agent.status)} style={{ padding: '5px 12px', borderRadius: 6, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: '#A1A1AA', cursor: 'pointer', fontSize: 11, fontFamily: 'Inter, sans-serif' }}>{agent.status === 'running' ? 'Stop' : 'Start'}</button><button onClick={() => deleteAgent(agent.id)} style={{ padding: '5px 12px', borderRadius: 6, background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.1)', color: '#EF4444', cursor: 'pointer', fontSize: 11, fontFamily: 'Inter, sans-serif' }}>Delete</button></div></div>))}</div>)}</>)}
        {view === 'create' && (<div style={{ maxWidth: 560 }}><h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>Create New Agent</h1><p style={{ color: '#71717A', fontSize: 13, marginBottom: 28 }}>Deploy your AI agent in 60 seconds</p><div className="glass-static" style={{ padding: 28 }}><div style={{ marginBottom: 20 }}><label style={{ fontSize: 11, fontWeight: 600, color: '#71717A', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Agent Name</label><input type="text" value={agentName} onChange={e => setAgentName(e.target.value)} placeholder="My AI Assistant" style={{ width: '100%', padding: '12px 14px', borderRadius: 10, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', color: '#E8E8ED', fontSize: 14, outline: 'none', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }} /></div><div style={{ marginBottom: 20 }}><label style={{ fontSize: 11, fontWeight: 600, color: '#71717A', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Choose Model</label><div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 6 }}>{MODELS.map(m => (<button key={m.id} onClick={() => setSelectedModel(m.id)} style={{ padding: '12px', borderRadius: 10, border: selectedModel === m.id ? '1px solid #7C3AED' : '1px solid rgba(255,255,255,0.05)', background: selectedModel === m.id ? 'rgba(124,58,237,0.06)' : 'transparent', cursor: 'pointer', textAlign: 'left', color: '#E8E8ED', fontFamily: 'Inter, sans-serif' }}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontSize: 13, fontWeight: 600 }}>{m.name}</span>{m.free && <span style={{ fontSize: 9, padding: '2px 6px', borderRadius: 4, background: 'rgba(34,197,94,0.08)', color: '#22C55E', fontWeight: 700 }}>FREE</span>}</div><div style={{ fontSize: 10, color: '#71717A', marginTop: 2 }}>{m.provider}</div></button>))}</div></div><div style={{ marginBottom: 24 }}><label style={{ fontSize: 11, fontWeight: 600, color: '#71717A', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Connect Platforms</label><div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6 }}>{PLATFORMS.map(p => (<button key={p.id} onClick={() => setSelectedPlatforms(prev => prev.includes(p.id) ? prev.filter(x => x !== p.id) : [...prev, p.id])} style={{ padding: '12px 6px', borderRadius: 10, border: selectedPlatforms.includes(p.id) ? '1px solid #7C3AED' : '1px solid rgba(255,255,255,0.05)', background: selectedPlatforms.includes(p.id) ? 'rgba(124,58,237,0.06)' : 'transparent', cursor: 'pointer', textAlign: 'center', color: '#E8E8ED', fontFamily: 'Inter, sans-serif' }}><div style={{ fontSize: 20 }}>{p.icon}</div><div style={{ fontSize: 10, fontWeight: 500, marginTop: 3 }}>{p.name}</div></button>))}</div></div><button onClick={createAgent} disabled={!agentName || deploying} className="btn-glow" style={{ width: '100%', fontSize: 15 }}>{deploying ? 'Provisioning...' : '⚡ Deploy Agent'}</button></div></div>)}
        {view === 'models' && (<><h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>AI Models</h1><p style={{ color: '#71717A', fontSize: 13, marginBottom: 28 }}>500+ models. Free ones need no API key.</p><div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>{MODELS.map(m => (<div key={m.id} className="glass-static" style={{ padding: 20 }}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}><span style={{ fontWeight: 600, fontSize: 15 }}>{m.name}</span>{m.free ? <span style={{ fontSize: 10, padding: '3px 8px', borderRadius: 999, background: 'rgba(34,197,94,0.08)', color: '#22C55E', fontWeight: 700 }}>FREE</span> : <span style={{ fontSize: 10, padding: '3px 8px', borderRadius: 999, background: 'rgba(249,115,22,0.08)', color: '#F97316', fontWeight: 600 }}>BYOK</span>}</div><div style={{ fontSize: 12, color: '#71717A' }}>Provider: {m.provider}</div></div>))}</div></>)}
        {view === 'settings' && (<div style={{ maxWidth: 500 }}><h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>Settings</h1><p style={{ color: '#71717A', fontSize: 13, marginBottom: 28 }}>API keys and account</p><div className="glass-static" style={{ padding: 24 }}><h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>API Keys</h3><p style={{ fontSize: 12, color: '#71717A', marginBottom: 16 }}>Free models work without keys. Add keys for Claude, GPT-4o, Gemini.</p>{['Anthropic (Claude)', 'OpenAI (GPT)', 'Google (Gemini)'].map(key => (<div key={key} style={{ display: 'flex', gap: 8, marginBottom: 10 }}><input type="password" placeholder={`${key} API key`} style={{ flex: 1, padding: '10px 12px', borderRadius: 8, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.06)', color: '#E8E8ED', fontSize: 12, outline: 'none', fontFamily: 'Inter, sans-serif' }} /><button style={{ padding: '8px 14px', borderRadius: 8, background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.15)', color: '#A855F7', cursor: 'pointer', fontSize: 12, fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>Save</button></div>))}</div></div>)}
      </div>
    </div>
  );
}

// ─── MAIN ───
export default function Home() {
  const [page, setPage] = useState('landing');
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const t = localStorage.getItem('token');
    if (t) { setToken(t); fetch(`${API}/auth/me`, { headers: { Authorization: `Bearer ${t}` } }).then(r => r.json()).then(data => { if (data.user) { setUser(data.user); setPage('dashboard'); } }).catch(() => localStorage.removeItem('token')); }
  }, []);

  if (page === 'landing') return <LandingPage onGetStarted={() => setPage('auth')} />;
  if (page === 'auth') return <AuthScreen onAuth={(u, t) => { setUser(u); setToken(t); setPage('dashboard'); }} />;
  return <Dashboard user={user} token={token} onLogout={() => { localStorage.removeItem('token'); setUser(null); setToken(null); setPage('landing'); }} />;
}