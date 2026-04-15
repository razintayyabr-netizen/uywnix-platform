'use client';
import { useState, useEffect, useRef } from 'react';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// ─── Counter Animation ───
function Counter({ end, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);
  useEffect(() => {
    const ob = new IntersectionObserver(e => {
      if (e[0].isIntersecting && !done.current) {
        done.current = true;
        let s = 0;
        const dur = 2000;
        const step = t => { if (!s) s = t; const p = Math.min((t - s) / dur, 1); setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end)); if (p < 1) requestAnimationFrame(step); };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.3 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, [end]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Scroll Reveal ───
function R({ children, d = 0 }) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(e => { if (e[0].isIntersecting) { setV(true); ob.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);
  return <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? 'translateY(0)' : 'translateY(30px)', transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${d * 0.1}s` }}>{children}</div>;
}

// ══════════════════════════════════════
// LANDING PAGE — KILO.AI CLONE
// ══════════════════════════════════════
function LandingPage({ onGetStarted }) {
  const [openFaq, setOpenFaq] = useState(null);

  const FAQ = [
    { q: 'Is UYWNIX Claw free?', a: 'Yes! Free AI models (GLM-5.1, Llama 4, Mistral, Qwen 3, DeepSeek R1) work without any API key. Premium models (Claude, GPT-4o, Gemini) require your own key.' },
    { q: 'How does UYWNIX handle data privacy?', a: 'Your data stays on your own instance. Token-based auth, encrypted storage, VCN firewalls. We never share or sell data.' },
    { q: 'What platforms does UYWNIX Claw support?', a: 'Telegram, WhatsApp, Discord, Slack, and web chat. Your agent works wherever you are.' },
    { q: 'How do Cloud Agents work?', a: 'Click deploy, pick a model, connect your platform. Your agent is provisioned and running in under 60 seconds. Fully managed infrastructure.' },
    { q: 'Why switch to UYWNIX Claw?', a: 'One-click deploy, 500+ models, 24/7 uptime, no servers needed. Built on OpenClaw — open source, extensible, and free to self-host.' },
  ];

  const POSTS = [
    { tag: 'AI Agents', title: "Anthropic Doesn't Want Your Subscription Anymore", desc: 'Claude Code is moving companies to API pricing — accelerating the shift to model-agnostic, usage-based AI.', date: 'Apr 2026' },
    { tag: 'User Story', title: 'How a Delhi Founder Replaced His Accountant with UYWNIX Claw', desc: 'A real user account of drowning in bureaucracy, and building an AI bookkeeper on UYWNIX Claw that actually works.', date: 'Apr 2026' },
    { tag: 'Engineering', title: 'Our rules for safely running OpenClaw with UYWNIX Claw in production', desc: 'Best practices for running AI agents at scale. Security, reliability, and monitoring.', date: 'Mar 2026' },
  ];

  return (
    <div style={{ background: '#09090B', color: '#FAFAFA', fontFamily: "'Inter', -apple-system, sans-serif", lineHeight: 1.5 }}>

      {/* ═══ NAV ═══ */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(9,9,11,0.88)', backdropFilter: 'blur(24px) saturate(180%)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'inherit' }}>
              <img src="/uywnix-logo.jpg" alt="UYWNIX" style={{ height: 32, borderRadius: 6 }} />
              <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: '-0.02em' }}>UYWNIX</span>
            </a>
            <div style={{ display: 'flex', gap: 24 }}>
              {['Products', 'Services', 'Newsroom', 'FAQ'].map(s => (
                <a key={s} href={`#${s.toLowerCase()}`} style={{ color: '#71717A', textDecoration: 'none', fontSize: 13, fontWeight: 500, transition: 'color 0.15s' }}>{s}</a>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <button onClick={onGetStarted} style={{ padding: '7px 16px', background: 'transparent', color: '#A1A1AA', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit' }}>Sign In</button>
            <button onClick={onGetStarted} style={{ padding: '7px 16px', background: '#FAFAFA', color: '#09090B', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>Get Started</button>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section style={{ position: 'relative', padding: '120px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124,58,237,0.12), transparent 60%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto' }}>
          <R>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', borderRadius: 999, background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.15)', fontSize: 12, color: '#A855F7', fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, letterSpacing: '0.06em', marginBottom: 24 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#A855F7', boxShadow: '0 0 8px #A855F7' }} />
              Powered by OpenClaw
            </div>
          </R>
          <R d={1}>
            <p style={{ fontSize: 14, color: '#A855F7', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, fontFamily: "'JetBrains Mono', monospace", marginBottom: 16 }}>AI for everyone</p>
          </R>
          <R d={2}>
            <h1 style={{ fontSize: 64, fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.05, marginBottom: 20 }}>
              From pull request to<br />
              <span style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7, #C084FC, #E879F9)', backgroundSize: '300% 300%', animation: 'gradient-shift 8s ease infinite', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>grocery list</span> — we've got you covered.
            </h1>
          </R>
          <R d={3}>
            <p style={{ fontSize: 17, color: '#71717A', maxWidth: 500, margin: '0 auto 12px' }}>
              Coding agent for developers. Always on AI for everyone.
            </p>
          </R>
          <R d={3}>
            <p style={{ fontSize: 13, color: '#52525B', fontFamily: "'JetBrains Mono', monospace" }}>
              VS Code, CLI, Telegram, WhatsApp, & more
            </p>
          </R>
        </div>
      </section>

      {/* ═══ TWO PRODUCT CARDS ═══ */}
      <section id="products" style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>

          {/* UYWNIX Claw */}
          <R d={1}>
            <div style={{ background: '#0F0F12', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 20, padding: '40px 36px', position: 'relative', overflow: 'hidden', transition: 'all 0.3s' }}>
              <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.1), transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 12px', borderRadius: 999, background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.15)', fontSize: 12, color: '#A855F7', fontWeight: 600, marginBottom: 24 }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#A855F7', boxShadow: '0 0 8px #A855F7', animation: 'pulse-glow 2s infinite' }} />
                  Hosted in 2 clicks
                </div>
                <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 6 }}>UYWNIX Claw</h2>
                <p style={{ fontSize: 14, color: '#71717A', marginBottom: 28 }}>Natively connected to 500+ models</p>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Your personal 24/7 AI agent</h3>
                <p style={{ fontSize: 14, color: '#52525B', lineHeight: 1.7, marginBottom: 24 }}>
                  Automate any workflow with your own AI agent that runs around the clock. Connect to 500+ models and build custom workflows for repetitive tasks.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {['Runs 24/7 in the background', 'Manage tasks via Telegram or web', 'Automated workflows & cron', 'Enterprise-grade security'].map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#A1A1AA' }}>
                      <span style={{ color: '#A855F7', fontSize: 16 }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <button onClick={onGetStarted} style={{ padding: '12px 24px', background: 'linear-gradient(135deg, #7C3AED, #A855F7)', color: 'white', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
                  🦞 Deploy Your Agent
                </button>
              </div>
            </div>
          </R>

          {/* UYWNI */}
          <R d={2}>
            <div style={{ background: '#0F0F12', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: '40px 36px', position: 'relative', overflow: 'hidden', transition: 'all 0.3s' }}>
              <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,197,94,0.06), transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 12px', borderRadius: 999, background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.12)', fontSize: 12, color: '#22C55E', fontWeight: 600, marginBottom: 24 }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E' }} />
                  Social App
                </div>
                <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 6 }}>UYWNI</h2>
                <p style={{ fontSize: 14, color: '#71717A', marginBottom: 28 }}>Connect, share, and build your community</p>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Social for everyone</h3>
                <p style={{ fontSize: 14, color: '#52525B', lineHeight: 1.7, marginBottom: 24 }}>
                  A social media platform built for real connections. Share posts, stories, and moments. Message and call in real-time. Privacy-first design.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {['Real-time messaging and calls', 'Share posts, stories, moments', 'Privacy-first design', 'Community building tools'].map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#A1A1AA' }}>
                      <span style={{ color: '#22C55E', fontSize: 16 }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <a href="https://uywni.app" target="_blank" style={{ display: 'inline-block', padding: '12px 24px', background: 'linear-gradient(135deg, #16A34A, #22C55E)', color: 'white', borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: 'none', fontFamily: 'inherit' }}>
                  Open UYWNI →
                </a>
              </div>
            </div>
          </R>
        </div>
      </section>

      {/* ═══ TRUSTED BY / STATS ═══ */}
      <section style={{ padding: '60px 24px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <R><p style={{ fontSize: 13, color: '#71717A', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 32 }}>Trusted by developers at the world's most innovative companies</p></R>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            <R d={1}><div style={{ textAlign: 'center' }}><div style={{ fontSize: 44, fontWeight: 900, fontFamily: "'JetBrains Mono', monospace", background: 'linear-gradient(135deg, #7C3AED, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}><Counter end={1} suffix="#" /></div><div style={{ fontSize: 13, color: '#71717A', marginTop: 6 }}>Open Source Product of the Month</div></div></R>
            <R d={2}><div style={{ textAlign: 'center' }}><div style={{ fontSize: 44, fontWeight: 900, fontFamily: "'JetBrains Mono', monospace", background: 'linear-gradient(135deg, #7C3AED, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}><Counter end={500} suffix="+" /></div><div style={{ fontSize: 13, color: '#71717A', marginTop: 6 }}>AI Models Available</div></div></R>
            <R d={3}><div style={{ textAlign: 'center' }}><div style={{ fontSize: 44, fontWeight: 900, fontFamily: "'JetBrains Mono', monospace", background: 'linear-gradient(135deg, #7C3AED, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}><Counter end={24} />/<Counter end={7} /></div><div style={{ fontSize: 13, color: '#71717A', marginTop: 6 }}>Always On</div></div></R>
            <R d={4}><div style={{ textAlign: 'center' }}><div style={{ fontSize: 44, fontWeight: 900, fontFamily: "'JetBrains Mono', monospace", background: 'linear-gradient(135deg, #7C3AED, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}><Counter end={25} suffix="T+" /></div><div style={{ fontSize: 13, color: '#71717A', marginTop: 6 }}>Tokens Processed</div></div></R>
          </div>
        </div>
      </section>

      {/* ═══ YOUR PERSONAL AI AGENT ═══ */}
      <section style={{ padding: '100px 24px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <R><h2 style={{ fontSize: 44, fontWeight: 800, letterSpacing: '-0.035em', marginBottom: 8 }}>Your personal AI agent</h2></R>
          <R d={1}><p style={{ fontSize: 20, color: '#71717A', marginBottom: 12 }}>Meet UYWNIX Claw</p></R>
          <R d={2}><p style={{ fontSize: 16, color: '#52525B', lineHeight: 1.7, marginBottom: 40 }}>A hosted AI agent that runs 24/7 — reading email, managing your calendar, and taking action on your behalf.</p></R>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32 }}>
            <R d={3}>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>One-click deploy.</h3>
                <p style={{ fontSize: 14, color: '#52525B', lineHeight: 1.6 }}>Skip Docker, servers, and config files. Your personal AI agent is provisioned and ready in seconds.</p>
              </div>
            </R>
            <R d={4}>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Chat where you are.</h3>
                <p style={{ fontSize: 14, color: '#52525B', lineHeight: 1.6 }}>Connect via Telegram, WhatsApp, Discord, or Slack. Your agent takes real actions — email, calendar, web browsing — not just chat.</p>
              </div>
            </R>
            <R d={5}>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Fully managed.</h3>
                <p style={{ fontSize: 14, color: '#52525B', lineHeight: 1.6 }}>We handle infrastructure, security, and updates. Powered by OpenClaw with access to 500+ AI models.</p>
              </div>
            </R>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" style={{ padding: '100px 24px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <R><p style={{ fontSize: 12, color: '#A855F7', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, marginBottom: 8 }}>// Services</p></R>
          <R d={1}><h2 style={{ fontSize: 44, fontWeight: 800, letterSpacing: '-0.035em', marginBottom: 8 }}>Built for agentic engineering</h2></R>
          <R d={2}><p style={{ fontSize: 16, color: '#71717A', marginBottom: 40 }}>What we build for businesses.</p></R>
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
                <div style={{ background: '#0F0F12', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 16, padding: '28px 24px', transition: 'border-color 0.2s' }}>
                  <div style={{ fontSize: 24, marginBottom: 14 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: '#71717A', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ USE UYWNIX EVERYWHERE ═══ */}
      <section style={{ padding: '80px 24px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <R><h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.035em', marginBottom: 12 }}>Use UYWNIX Everywhere</h2></R>
          <R d={1}><p style={{ fontSize: 16, color: '#71717A', marginBottom: 8 }}>UYWNIX works where you work. Build alone or with your team.</p></R>
          <R d={2}><p style={{ fontSize: 14, color: '#A855F7', fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>Use UYWNIX now free with GLM-5.1 and Llama 4</p></R>
          <R d={3}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginTop: 32 }}>
              {['GLM-5.1', 'Llama 4', 'Mistral Large', 'Qwen 3', 'DeepSeek R1', 'Gemma 4:31B'].map(m => (
                <span key={m} style={{ padding: '8px 16px', borderRadius: 999, background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.12)', fontSize: 13, color: '#22C55E', fontWeight: 500 }}>{m} ✓ Free</span>
              ))}
              {['Claude 4', 'GPT-4o', 'Gemini 2.5'].map(m => (
                <span key={m} style={{ padding: '8px 16px', borderRadius: 999, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', fontSize: 13, color: '#71717A', fontWeight: 500 }}>{m} 🔑 BYOK</span>
              ))}
            </div>
          </R>
        </div>
      </section>

      {/* ═══ NEWSROOM ═══ */}
      <section id="newsroom" style={{ padding: '100px 24px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <R><p style={{ fontSize: 12, color: '#A855F7', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, marginBottom: 8 }}>// Newsroom</p></R>
          <R d={1}><h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 8 }}>Recent posts</h2></R>
          <R d={2}><p style={{ fontSize: 15, color: '#71717A', marginBottom: 40 }}>Read the latest news and updates from the UYWNIX team.</p></R>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {POSTS.map((p, i) => (
              <R key={i} d={i + 1}>
                <div style={{ background: '#0F0F12', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 16, padding: 28, transition: 'border-color 0.2s', cursor: 'pointer' }}>
                  <span style={{ fontSize: 11, color: '#A855F7', fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{p.tag} · {p.date}</span>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginTop: 12, marginBottom: 8, lineHeight: 1.3, letterSpacing: '-0.01em' }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: '#71717A', lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </R>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" style={{ padding: '100px 24px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <R><p style={{ fontSize: 12, color: '#A855F7', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, marginBottom: 8 }}>// FAQ</p></R>
          <R d={1}><h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 8 }}>Frequently asked questions</h2></R>
          <R d={2}><p style={{ fontSize: 15, color: '#71717A', marginBottom: 40 }}>Direct answers to common questions about UYWNIX.</p></R>
          {FAQ.map((f, i) => (
            <R key={i} d={i + 1}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ padding: '20px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: 15, fontWeight: 500 }}>{f.q}</h4>
                  <span style={{ color: '#A855F7', fontSize: 20, transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'none', flexShrink: 0, marginLeft: 16 }}>+</span>
                </div>
                {openFaq === i && <p style={{ fontSize: 14, color: '#71717A', lineHeight: 1.7, paddingBottom: 20 }}>{f.a}</p>}
              </div>
            </R>
          ))}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ padding: '120px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.08), transparent 60%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto' }}>
          <R><h2 style={{ fontSize: 44, fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 16 }}>Ready to get started?</h2></R>
          <R d={1}><p style={{ fontSize: 16, color: '#71717A', marginBottom: 40 }}>Choose your path — an always-on AI assistant for life, or a social app for everyone.</p></R>
          <R d={2}>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={onGetStarted} style={{ padding: '16px 32px', background: 'linear-gradient(135deg, #7C3AED, #A855F7)', color: 'white', border: 'none', borderRadius: 12, fontSize: 16, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
                🦞 UYWNIX Claw — Deploy Now
              </button>
              <a href="https://uywni.app" target="_blank" style={{ padding: '16px 32px', background: 'transparent', color: '#FAFAFA', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, fontSize: 16, fontWeight: 600, textDecoration: 'none', fontFamily: 'inherit' }}>
                UYWNI — Social App
              </a>
            </div>
          </R>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.04)', padding: '48px 24px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="/uywnix-logo.jpg" alt="UYWNIX" style={{ height: 28, borderRadius: 6 }} />
            <span style={{ fontWeight: 700, fontSize: 15 }}>UYWNIX</span>
          </div>
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
    } catch (err) { setError(err.message); }
    finally { setLoading(false); }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#09090B' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 30%, rgba(124,58,237,0.12), transparent 60%)' }} />
      <div style={{ position: 'relative', zIndex: 1, width: 400, maxWidth: '90vw' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <img src="/uywnix-logo.jpg" alt="UYWNIX" style={{ width: 56, height: 56, borderRadius: 16, margin: '0 auto 16px', display: 'block', boxShadow: '0 0 40px rgba(124,58,237,0.3)' }} />
          <h1 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em' }}>UYWNIX Claw</h1>
          <p style={{ color: '#71717A', fontSize: 14, marginTop: 4 }}>Your personal 24/7 AI agent</p>
        </div>
        <form onSubmit={submit} style={{ background: '#0F0F12', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 32 }}>
          {mode === 'signup' && <div style={{ marginBottom: 16 }}><label style={{ fontSize: 12, fontWeight: 600, color: '#71717A', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Full Name</label><input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" required style={{ width: '100%', padding: '12px 14px', borderRadius: 10, background: '#09090B', border: '1px solid rgba(255,255,255,0.08)', color: '#FAFAFA', fontSize: 14, outline: 'none', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }} /></div>}
          <div style={{ marginBottom: 16 }}><label style={{ fontSize: 12, fontWeight: 600, color: '#71717A', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Email</label><input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@email.com" required style={{ width: '100%', padding: '12px 14px', borderRadius: 10, background: '#09090B', border: '1px solid rgba(255,255,255,0.08)', color: '#FAFAFA', fontSize: 14, outline: 'none', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }} /></div>
          <div style={{ marginBottom: 24 }}><label style={{ fontSize: 12, fontWeight: 600, color: '#71717A', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Password</label><input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required style={{ width: '100%', padding: '12px 14px', borderRadius: 10, background: '#09090B', border: '1px solid rgba(255,255,255,0.08)', color: '#FAFAFA', fontSize: 14, outline: 'none', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }} /></div>
          {error && <p style={{ color: '#EF4444', fontSize: 13, marginBottom: 16, textAlign: 'center' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: 14, background: loading ? '#1A1A24' : 'linear-gradient(135deg, #7C3AED, #A855F7)', color: 'white', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'Inter, sans-serif' }}>{loading ? 'Please wait...' : mode === 'signup' ? 'Create Account' : 'Sign In'}</button>
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
  const MODELS = [
    { id: 'glm-5.1', name: 'GLM-5.1', provider: 'Ollama Cloud', free: true },
    { id: 'llama4', name: 'Llama 4', provider: 'Ollama Cloud', free: true },
    { id: 'mistral-large', name: 'Mistral Large', provider: 'Ollama Cloud', free: true },
    { id: 'qwen3', name: 'Qwen 3', provider: 'Ollama Cloud', free: true },
    { id: 'deepseek-r1', name: 'DeepSeek R1', provider: 'Ollama Cloud', free: true },
    { id: 'claude-4-sonnet', name: 'Claude 4 Sonnet', provider: 'Anthropic', free: false },
    { id: 'gpt-4o', name: 'GPT-4o', provider: 'OpenAI', free: false },
    { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro', provider: 'Google', free: false },
  ];
  const PLATFORMS = [
    { id: 'telegram', name: 'Telegram', icon: '✈️' },
    { id: 'whatsapp', name: 'WhatsApp', icon: '💬' },
    { id: 'discord', name: 'Discord', icon: '🎮' },
    { id: 'webchat', name: 'WebChat', icon: '🌐' },
    { id: 'slack', name: 'Slack', icon: '💼' },
  ];

  const fetchAgents = async () => { try { const r = await fetch(`${API}/agents`, { headers }); const d = await r.json(); setAgents(d.agents || []); } catch {} };
  const fetchStats = async () => { try { const r = await fetch(`${API}/stats`, { headers }); const d = await r.json(); setStats(d); } catch {} };
  useEffect(() => { fetchAgents(); fetchStats(); }, []);

  const createAgent = async () => {
    if (!agentName) return; setDeploying(true);
    try { const r = await fetch(`${API}/agents`, { method: 'POST', headers, body: JSON.stringify({ name: agentName, model: selectedModel, platforms: selectedPlatforms }) }); const d = await r.json(); if (d.agent) { setAgents(prev => [d.agent, ...prev]); setAgentName(''); setSelectedPlatforms([]); setView('dashboard'); } } catch {} setDeploying(false); fetchStats();
  };
  const toggleAgent = async (id, status) => { const ns = status === 'running' ? 'stopped' : 'running'; try { await fetch(`${API}/agents/${id}`, { method: 'PATCH', headers, body: JSON.stringify({ status: ns }) }); setAgents(prev => prev.map(a => a.id === id ? { ...a, status: ns } : a)); } catch {} fetchStats(); };
  const deleteAgent = async (id) => { try { await fetch(`${API}/agents/${id}`, { method: 'DELETE', headers }); setAgents(prev => prev.filter(a => a.id !== id)); } catch {} fetchStats(); };

  return (
    <div style={{ minHeight: '100vh', background: '#09090B', display: 'flex' }}>
      <div style={{ width: 220, background: '#0F0F12', borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', position: 'fixed', top: 0, bottom: 0, left: 0 }}>
        <div style={{ padding: '16px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src="/uywnix-logo.jpg" alt="UYWNIX" style={{ height: 28, borderRadius: 6 }} />
          <div><div style={{ fontWeight: 700, fontSize: 14 }}>UYWNIX</div><div style={{ fontSize: 9, color: '#71717A', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Claw</div></div>
        </div>
        <nav style={{ padding: '6px 10px', flex: 1 }}>
          {[{ id: 'dashboard', label: 'Dashboard', icon: '📊' }, { id: 'create', label: 'New Agent', icon: '⚡' }, { id: 'models', label: 'Models', icon: '🧠' }, { id: 'settings', label: 'Settings', icon: '⚙️' }].map(item => (
            <button key={item.id} onClick={() => setView(item.id)} style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: '8px 12px', borderRadius: 8, background: view === item.id ? 'rgba(124,58,237,0.08)' : 'transparent', border: 'none', color: view === item.id ? '#A855F7' : '#71717A', fontSize: 13, fontWeight: view === item.id ? 600 : 400, cursor: 'pointer', textAlign: 'left', fontFamily: 'Inter, sans-serif', marginBottom: 2 }}>
              <span>{item.icon}</span> {item.label}
            </button>
          ))}
        </nav>
        <div style={{ padding: '10px 14px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(135deg, #7C3AED, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}>{user.name?.[0]?.toUpperCase()}</div>
          <div style={{ flex: 1, overflow: 'hidden' }}><div style={{ fontSize: 12, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.name}</div><div style={{ fontSize: 10, color: '#71717A' }}>{user.email}</div></div>
          <button onClick={onLogout} style={{ background: 'none', border: 'none', color: '#71717A', cursor: 'pointer', fontSize: 16, padding: 2 }}>→</button>
        </div>
      </div>
      <div style={{ marginLeft: 220, flex: 1, padding: '28px 32px' }}>
        {view === 'dashboard' && (<>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <div><h1 style={{ fontSize: 24, fontWeight: 700 }}>Welcome back, {user.name?.split(' ')[0]}</h1><p style={{ color: '#71717A', fontSize: 13, marginTop: 2 }}>{agents.length === 0 ? 'Deploy your first AI agent' : `${stats.activeAgents} active`}</p></div>
            <button onClick={() => setView('create')} style={{ padding: '8px 20px', background: 'linear-gradient(135deg, #7C3AED, #A855F7)', color: 'white', border: 'none', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>+ New Agent</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 24 }}>
            {[{ label: 'Active', value: stats.activeAgents, color: '#22C55E' }, { label: 'Total', value: stats.totalAgents, color: '#A855F7' }, { label: 'Platforms', value: stats.platforms, color: '#3B82F6' }, { label: 'Messages', value: stats.messages, color: '#F59E0B' }].map((s, i) => (
              <div key={i} style={{ background: '#0F0F12', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 12, padding: 16 }}>
                <div style={{ fontSize: 11, color: '#71717A', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>{s.label}</div>
                <div style={{ fontSize: 24, fontWeight: 700, color: s.color, fontFamily: "'JetBrains Mono', monospace", marginTop: 6 }}>{s.value}</div>
              </div>
            ))}
          </div>
          {agents.length === 0 ? (
            <div style={{ background: '#0F0F12', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 16, padding: 64, textAlign: 'center' }}>
              <img src="/uywnix-logo.jpg" alt="UYWNIX" style={{ width: 56, height: 56, borderRadius: 16, marginBottom: 16 }} />
              <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 6 }}>No agents yet</h2>
              <p style={{ color: '#71717A', fontSize: 14, marginBottom: 24 }}>Deploy your first AI agent. It takes 60 seconds.</p>
              <button onClick={() => setView('create')} style={{ padding: '12px 28px', background: 'linear-gradient(135deg, #7C3AED, #A855F7)', color: 'white', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>⚡ Create First Agent</button>
            </div>
          ) : (<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>{agents.map(agent => (
            <div key={agent.id} style={{ background: '#0F0F12', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 12, padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><div style={{ width: 8, height: 8, borderRadius: '50%', background: agent.status === 'running' ? '#22C55E' : '#71717A', boxShadow: agent.status === 'running' ? '0 0 8px rgba(34,197,94,0.5)' : 'none' }} /><div><div style={{ fontWeight: 600, fontSize: 14 }}>{agent.name}</div><div style={{ fontSize: 11, color: '#71717A', marginTop: 1 }}>{MODELS.find(m => m.id === agent.model)?.name} · {(agent.platforms || []).map(p => PLATFORMS.find(pl => pl.id === p)?.name).filter(Boolean).join(', ') || 'No platform'}</div></div></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 10, padding: '3px 8px', borderRadius: 999, background: agent.status === 'running' ? 'rgba(34,197,94,0.08)' : 'rgba(113,113,122,0.08)', color: agent.status === 'running' ? '#22C55E' : '#71717A', fontWeight: 600 }}>{agent.status?.toUpperCase()}</span><button onClick={() => toggleAgent(agent.id, agent.status)} style={{ padding: '5px 12px', borderRadius: 6, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: '#A1A1AA', cursor: 'pointer', fontSize: 11, fontFamily: 'Inter, sans-serif' }}>{agent.status === 'running' ? 'Stop' : 'Start'}</button><button onClick={() => deleteAgent(agent.id)} style={{ padding: '5px 12px', borderRadius: 6, background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.1)', color: '#EF4444', cursor: 'pointer', fontSize: 11, fontFamily: 'Inter, sans-serif' }}>Delete</button></div>
            </div>
          ))}</div>)}
        </>)}
        {view === 'create' && (<div style={{ maxWidth: 560 }}><h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>Create New Agent</h1><p style={{ color: '#71717A', fontSize: 13, marginBottom: 28 }}>Deploy your AI agent in 60 seconds</p><div style={{ background: '#0F0F12', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 16, padding: 28 }}><div style={{ marginBottom: 20 }}><label style={{ fontSize: 11, fontWeight: 600, color: '#71717A', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>Agent Name</label><input type="text" value={agentName} onChange={e => setAgentName(e.target.value)} placeholder="My AI Assistant" style={{ width: '100%', padding: '12px 14px', borderRadius: 10, background: '#09090B', border: '1px solid rgba(255,255,255,0.08)', color: '#FAFAFA', fontSize: 14, outline: 'none', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }} /></div><div style={{ marginBottom: 20 }}><label style={{ fontSize: 11, fontWeight: 600, color: '#71717A', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Choose Model</label><div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 6 }}>{MODELS.map(m => (<button key={m.id} onClick={() => setSelectedModel(m.id)} style={{ padding: '12px', borderRadius: 10, border: selectedModel === m.id ? '1px solid #7C3AED' : '1px solid rgba(255,255,255,0.05)', background: selectedModel === m.id ? 'rgba(124,58,237,0.06)' : 'transparent', cursor: 'pointer', textAlign: 'left', color: '#FAFAFA', fontFamily: 'Inter, sans-serif' }}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontSize: 13, fontWeight: 600 }}>{m.name}</span>{m.free && <span style={{ fontSize: 9, padding: '2px 6px', borderRadius: 4, background: 'rgba(34,197,94,0.08)', color: '#22C55E', fontWeight: 700 }}>FREE</span>}</div><div style={{ fontSize: 10, color: '#71717A', marginTop: 2 }}>{m.provider}</div></button>))}</div></div><div style={{ marginBottom: 24 }}><label style={{ fontSize: 11, fontWeight: 600, color: '#71717A', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Connect Platforms</label><div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6 }}>{PLATFORMS.map(p => (<button key={p.id} onClick={() => setSelectedPlatforms(prev => prev.includes(p.id) ? prev.filter(x => x !== p.id) : [...prev, p.id])} style={{ padding: '12px 6px', borderRadius: 10, border: selectedPlatforms.includes(p.id) ? '1px solid #7C3AED' : '1px solid rgba(255,255,255,0.05)', background: selectedPlatforms.includes(p.id) ? 'rgba(124,58,237,0.06)' : 'transparent', cursor: 'pointer', textAlign: 'center', color: '#FAFAFA', fontFamily: 'Inter, sans-serif' }}><div style={{ fontSize: 20 }}>{p.icon}</div><div style={{ fontSize: 10, fontWeight: 500, marginTop: 3 }}>{p.name}</div></button>))}</div></div><button onClick={createAgent} disabled={!agentName || deploying} style={{ width: '100%', padding: 14, background: (!agentName || deploying) ? '#1A1A24' : 'linear-gradient(135deg, #7C3AED, #A855F7)', color: 'white', border: 'none', borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: (!agentName || deploying) ? 'not-allowed' : 'pointer', fontFamily: 'Inter, sans-serif' }}>{deploying ? 'Provisioning...' : '⚡ Deploy Agent'}</button></div></div>)}
        {view === 'models' && (<><h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>AI Models</h1><p style={{ color: '#71717A', fontSize: 13, marginBottom: 28 }}>500+ models. Free ones need no API key.</p><div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>{MODELS.map(m => (<div key={m.id} style={{ background: '#0F0F12', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 14, padding: 20 }}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}><span style={{ fontWeight: 600, fontSize: 15 }}>{m.name}</span>{m.free ? <span style={{ fontSize: 10, padding: '3px 8px', borderRadius: 999, background: 'rgba(34,197,94,0.08)', color: '#22C55E', fontWeight: 700 }}>FREE</span> : <span style={{ fontSize: 10, padding: '3px 8px', borderRadius: 999, background: 'rgba(249,115,22,0.08)', color: '#F97316', fontWeight: 600 }}>BYOK</span>}</div><div style={{ fontSize: 12, color: '#71717A' }}>Provider: {m.provider}</div></div>))}</div></>)}
        {view === 'settings' && (<div style={{ maxWidth: 500 }}><h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>Settings</h1><p style={{ color: '#71717A', fontSize: 13, marginBottom: 28 }}>API keys and account</p><div style={{ background: '#0F0F12', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 16, padding: 24 }}><h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>API Keys</h3><p style={{ fontSize: 12, color: '#71717A', marginBottom: 16 }}>Free models work without keys. Add keys for Claude, GPT-4o, Gemini.</p>{['Anthropic (Claude)', 'OpenAI (GPT)', 'Google (Gemini)'].map(key => (<div key={key} style={{ display: 'flex', gap: 8, marginBottom: 10 }}><input type="password" placeholder={`${key} API key`} style={{ flex: 1, padding: '10px 12px', borderRadius: 8, background: '#09090B', border: '1px solid rgba(255,255,255,0.06)', color: '#FAFAFA', fontSize: 12, outline: 'none', fontFamily: 'Inter, sans-serif' }} /><button style={{ padding: '8px 14px', borderRadius: 8, background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.15)', color: '#A855F7', cursor: 'pointer', fontSize: 12, fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>Save</button></div>))}</div></div>)}
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

  const handleAuth = (u, t) => { setUser(u); setToken(t); setPage('dashboard'); };
  const handleLogout = () => { localStorage.removeItem('token'); setUser(null); setToken(null); setPage('landing'); };

  if (page === 'landing') return <LandingPage onGetStarted={() => setPage('auth')} />;
  if (page === 'auth') return <AuthScreen onAuth={handleAuth} />;
  return <Dashboard user={user} token={token} onLogout={handleLogout} />;
}