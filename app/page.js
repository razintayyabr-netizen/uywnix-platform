'use client';
import { useState, useEffect } from 'react';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// ─── LANDING PAGE (kilo.ai style) ───
function LandingPage({ onGetStarted }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ background: '#050507', color: '#E8E8ED', fontFamily: 'Inter, sans-serif' }}>
      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(5,5,7,0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #7C3AED, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🦞</div>
            <span style={{ fontWeight: 700, fontSize: 18 }}>UYWNIX</span>
          </div>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <a href="#products" style={{ color: '#6B6B7B', textDecoration: 'none', fontSize: 14 }}>Products</a>
            <a href="#faq" style={{ color: '#6B6B7B', textDecoration: 'none', fontSize: 14 }}>FAQ</a>
            <button onClick={onGetStarted} style={{ padding: '10px 24px', background: 'linear-gradient(135deg, #7C3AED, #A855F7)', color: 'white', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>Get Started</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: 'relative', padding: '140px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% -10%, rgba(124,58,237,0.2) 0%, transparent 60%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 13, color: '#A855F7', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 20, fontWeight: 600 }}>
            AI for everyone
          </div>
          <h1 style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: 24 }}>
            From pull request to<br />
            <span style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7, #C084FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>grocery list</span> — we've got you covered.
          </h1>
          <p style={{ fontSize: 18, color: '#6B6B7B', maxWidth: 560, margin: '0 auto' }}>
            Your personal 24/7 AI agent. One-click deploy, no servers needed, 500+ models. Built on OpenClaw.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 999, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', fontSize: 13, color: '#22C55E', fontFamily: 'JetBrains Mono, monospace', marginTop: 24 }}>
            Powered by OpenClaw
          </div>
        </div>
      </section>

      {/* TWO PRODUCT CARDS — KiloClaw + Kilo Code style */}
      <section id="products" style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* UYWNIX Claw Card */}
          <div style={{ background: '#0A0A10', border: '1px solid rgba(124,58,237,0.25)', borderRadius: 24, padding: '48px 44px', position: 'relative', overflow: 'hidden', boxShadow: '0 0 80px rgba(124,58,237,0.06)' }}>
            <div style={{ position: 'absolute', top: -80, right: -80, width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', fontSize: 13, color: '#A855F7', marginBottom: 28, fontWeight: 600 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#A855F7', animation: 'pulse-glow 2s infinite' }} /> Hosted in 2 clicks
              </div>
              <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 12 }}>UYWNIX Claw</h2>
              <p style={{ fontSize: 16, color: '#6B6B7B', lineHeight: 1.6, marginBottom: 12 }}>
                Natively connected to 500+ models
              </p>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16, marginTop: 32 }}>Your personal 24/7 AI agent</h3>
              <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.6, marginBottom: 28 }}>
                Automate any workflow with your own AI agent that runs around the clock. Connect to 500+ models and build custom workflows for repetitive tasks.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {['Runs 24/7 in the background', 'Manage tasks via Telegram or web', 'Automated workflows & cron', 'Enterprise-grade security'].map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15 }}>
                    <span style={{ color: '#A855F7', fontSize: 18 }}>✓</span> {f}
                  </div>
                ))}
              </div>
              <button onClick={onGetStarted} style={{ marginTop: 32, padding: '14px 32px', background: 'linear-gradient(135deg, #7C3AED, #A855F7)', color: 'white', border: 'none', borderRadius: 12, fontSize: 16, fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
                🦞 Deploy Your Agent
              </button>
            </div>
          </div>

          {/* UYWNI Card */}
          <div style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 24, padding: '48px 44px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -80, right: -80, width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', fontSize: 13, color: '#22C55E', marginBottom: 28, fontWeight: 600 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E' }} /> Social App
              </div>
              <h2 style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 12 }}>UYWNI</h2>
              <p style={{ fontSize: 16, color: '#6B6B7B', lineHeight: 1.6, marginBottom: 12 }}>
                Connect, share, and build your community
              </p>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16, marginTop: 32 }}>Social for everyone</h3>
              <p style={{ fontSize: 15, color: '#9CA3AF', lineHeight: 1.6, marginBottom: 28 }}>
                A social media platform built for real connections. Share posts, stories, and moments. Message and call in real-time. Privacy-first design.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {['Real-time messaging and calls', 'Share posts, stories, moments', 'Privacy-first design', 'Community building tools'].map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15 }}>
                    <span style={{ color: '#22C55E', fontSize: 18 }}>✓</span> {f}
                  </div>
                ))}
              </div>
              <a href="https://uywni.app" target="_blank" style={{ marginTop: 32, display: 'inline-block', padding: '14px 32px', background: 'linear-gradient(135deg, #16A34A, #22C55E)', color: 'white', borderRadius: 12, fontSize: 16, fontWeight: 600, textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}>
                Open UYWNI →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: '60px 24px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
          {[
            { value: '#1', label: 'AI Agent Platform in India' },
            { value: '500+', label: 'AI Models Available' },
            { value: '24/7', label: 'Always On' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 48, fontWeight: 800, fontFamily: 'JetBrains Mono, monospace', background: 'linear-gradient(135deg, #7C3AED, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.value}</div>
              <div style={{ fontSize: 14, color: '#6B6B7B', marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* YOUR AGENT SECTION */}
      <section style={{ padding: '100px 24px', background: 'var(--surface, #0A0A10)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 44, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 12 }}>Your personal AI agent</h2>
          <p style={{ fontSize: 20, color: '#6B6B7B', lineHeight: 1.6, marginBottom: 40 }}>Meet UYWNIX Claw</p>
          <p style={{ fontSize: 16, color: '#9CA3AF', lineHeight: 1.7, marginBottom: 40 }}>
            A hosted AI agent that runs 24/7 — reading email, managing your calendar, and taking action on your behalf.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
            {[
              { icon: '⚡', title: 'One-click deploy', desc: 'Skip Docker, servers, and config files. Your AI agent is provisioned and ready in seconds.' },
              { icon: '💬', title: 'Chat where you are', desc: 'Connect via Telegram, WhatsApp, Discord, or Slack. Your agent takes real actions — not just chat.' },
              { icon: '🛡️', title: 'Fully managed', desc: 'We handle infrastructure, security, and updates. Powered by OpenClaw with access to 500+ AI models.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: 28 }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B6B7B', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODELS */}
      <section style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 12, color: '#A855F7', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 8 }}>// Models</div>
          <h2 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 40 }}>Use any model. Free ones included.</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
            {['GLM-5.1', 'Llama 4', 'Mistral', 'Qwen 3', 'DeepSeek R1', 'Claude', 'GPT-4o', 'Gemini'].map((m, i) => (
              <span key={i} style={{ padding: '10px 20px', borderRadius: 999, background: i < 5 ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.03)', border: i < 5 ? '1px solid rgba(34,197,94,0.2)' : '1px solid rgba(255,255,255,0.06)', fontSize: 14, fontWeight: 500, color: i < 5 ? '#22C55E' : '#9CA3AF' }}>
                {m} {i < 5 && '✓ Free'}
              </span>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#6B6B7B', marginTop: 20 }}>Free models need no API key. Premium models — bring your own key.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '80px 24px', background: 'var(--surface, #0A0A10)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, color: '#A855F7', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 8 }}>// FAQ</div>
            <h2 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.03em' }}>Frequently asked questions</h2>
          </div>
          {[
            { q: 'What is UYWNIX Claw?', a: 'UYWNIX Claw is a hosted AI agent platform. One-click deploy, no servers needed. Your personal 24/7 AI assistant that reads email, manages your calendar, and takes action on your behalf.' },
            { q: 'What is UYWNI?', a: 'UYWNI is our social media app — connect with people, share posts and stories, message and call in real-time. Privacy-first design.' },
            { q: 'Is it free?', a: 'Yes! Free AI models (GLM-5.1, Llama 4, Mistral, Qwen, DeepSeek) work without any API key. Premium models (Claude, GPT-4o, Gemini) require your own API key.' },
            { q: 'How fast can I deploy?', a: 'Under 60 seconds. Pick a model, connect your chat platform, click deploy. Done.' },
            { q: 'Is my data safe?', a: 'Yes. Token-based auth, encrypted storage, VCN firewalls. Your data stays on your own instance. We never share or sell data.' },
            { q: 'Can I self-host?', a: 'Absolutely. UYWNIX Claw is built on open-source OpenClaw. You can deploy on any cloud — Alibaba, Oracle, Hetzner, or your own server.' },
          ].map((f, i) => (
            <div key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '20px 0', cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: 16, fontWeight: 500 }}>{f.q}</h4>
                <span style={{ color: '#A855F7', fontSize: 20, transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>+</span>
              </div>
              {openFaq === i && <p style={{ fontSize: 14, color: '#6B6B7B', lineHeight: 1.6, marginTop: 12 }}>{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.12) 0%, transparent 70%)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 16 }}>Ready to get started?</h2>
          <p style={{ fontSize: 18, color: '#6B6B7B', marginBottom: 12 }}>Choose your path — an always-on AI assistant, or a social app for everyone.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 32 }}>
            <button onClick={onGetStarted} style={{ padding: '18px 40px', background: 'linear-gradient(135deg, #7C3AED, #A855F7)', color: 'white', border: 'none', borderRadius: 14, fontSize: 18, fontWeight: 700, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
              🦞 UYWNIX Claw — Deploy Now
            </button>
            <a href="https://uywni.app" target="_blank" style={{ padding: '18px 40px', background: 'transparent', color: '#E8E8ED', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, fontSize: 18, fontWeight: 600, textDecoration: 'none', fontFamily: 'Inter, sans-serif', display: 'inline-flex', alignItems: 'center' }}>
              UYWNI — Social App
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.04)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #7C3AED, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>🦞</div>
            <span style={{ fontWeight: 600, fontSize: 16 }}>UYWNIX</span>
          </div>
          <div style={{ display: 'flex', gap: 20, fontSize: 13, color: '#6B6B7B' }}>
            <a href="#products" style={{ color: '#6B6B7B', textDecoration: 'none' }}>Products</a>
            <a href="#faq" style={{ color: '#6B6B7B', textDecoration: 'none' }}>FAQ</a>
            <a href="https://github.com/razintayyabr-netizen" target="_blank" style={{ color: '#6B6B7B', textDecoration: 'none' }}>GitHub</a>
            <a href="mailto:contact@uywnix.com" style={{ color: '#6B6B7B', textDecoration: 'none' }}>Contact</a>
          </div>
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
    e.preventDefault();
    setError('');
    setLoading(true);
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
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050507' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 30%, rgba(124,58,237,0.2) 0%, transparent 60%)' }} />
      <div style={{ position: 'relative', zIndex: 1, width: 420, maxWidth: '90vw' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: 'linear-gradient(135deg, #7C3AED, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 800, margin: '0 auto 16px', boxShadow: '0 0 40px rgba(124,58,237,0.3)' }}>🦞</div>
          <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em' }}>UYWNIX Claw</h1>
          <p style={{ color: '#6B6B7B', fontSize: 14, marginTop: 4 }}>Your personal 24/7 AI agent</p>
        </div>
        <form onSubmit={submit} style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 36 }}>
          {mode === 'signup' && (
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Full Name</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Husayn" required style={{ width: '100%', padding: '14px 16px', borderRadius: 12, background: '#050507', border: '1px solid rgba(255,255,255,0.08)', color: '#E8E8ED', fontSize: 15, outline: 'none', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }} />
            </div>
          )}
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@email.com" required style={{ width: '100%', padding: '14px 16px', borderRadius: 12, background: '#050507', border: '1px solid rgba(255,255,255,0.08)', color: '#E8E8ED', fontSize: 15, outline: 'none', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required style={{ width: '100%', padding: '14px 16px', borderRadius: 12, background: '#050507', border: '1px solid rgba(255,255,255,0.08)', color: '#E8E8ED', fontSize: 15, outline: 'none', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }} />
          </div>
          {error && <p style={{ color: '#EF4444', fontSize: 13, marginBottom: 16, textAlign: 'center' }}>{error}</p>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '16px', background: loading ? '#1A1A24' : 'linear-gradient(135deg, #7C3AED, #A855F7)', color: 'white', border: 'none', borderRadius: 12, fontSize: 16, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'Inter, sans-serif' }}>
            {loading ? 'Please wait...' : mode === 'signup' ? 'Create Account' : 'Sign In'}
          </button>
          <p style={{ textAlign: 'center', fontSize: 14, color: '#6B6B7B', marginTop: 20 }}>
            {mode === 'signup' ? 'Already have an account?' : "Don't have an account?"}{' '}
            <span onClick={() => { setMode(mode === 'signup' ? 'login' : 'signup'); setError(''); }} style={{ color: '#A855F7', cursor: 'pointer', fontWeight: 600 }}>
              {mode === 'signup' ? 'Sign In' : 'Sign Up'}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

// ─── DASHBOARD (same as before) ───
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
    if (!agentName) return;
    setDeploying(true);
    try {
      const r = await fetch(`${API}/agents`, { method: 'POST', headers, body: JSON.stringify({ name: agentName, model: selectedModel, platforms: selectedPlatforms }) });
      const d = await r.json();
      if (d.agent) { setAgents(prev => [d.agent, ...prev]); setAgentName(''); setSelectedPlatforms([]); setView('dashboard'); }
    } catch {}
    setDeploying(false);
    fetchStats();
  };

  const toggleAgent = async (id, status) => {
    const ns = status === 'running' ? 'stopped' : 'running';
    try { await fetch(`${API}/agents/${id}`, { method: 'PATCH', headers, body: JSON.stringify({ status: ns }) }); setAgents(prev => prev.map(a => a.id === id ? { ...a, status: ns } : a)); } catch {}
    fetchStats();
  };

  const deleteAgent = async (id) => {
    try { await fetch(`${API}/agents/${id}`, { method: 'DELETE', headers }); setAgents(prev => prev.filter(a => a.id !== id)); } catch {}
    fetchStats();
  };

  return (
    <div style={{ minHeight: '100vh', background: '#050507', display: 'flex' }}>
      {/* Sidebar */}
      <div style={{ width: 240, background: '#0A0A10', borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', position: 'fixed', top: 0, bottom: 0, left: 0 }}>
        <div style={{ padding: '20px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #7C3AED, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🦞</div>
          <div><div style={{ fontWeight: 700, fontSize: 15 }}>UYWNIX</div><div style={{ fontSize: 9, color: '#6B6B7B', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Claw</div></div>
        </div>
        <nav style={{ padding: '8px 12px', flex: 1 }}>
          {[{ id: 'dashboard', label: 'Dashboard', icon: '📊' }, { id: 'create', label: 'New Agent', icon: '⚡' }, { id: 'models', label: 'Models', icon: '🧠' }, { id: 'settings', label: 'Settings', icon: '⚙️' }].map(item => (
            <button key={item.id} onClick={() => setView(item.id)} style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '10px 14px', borderRadius: 10, background: view === item.id ? 'rgba(124,58,237,0.1)' : 'transparent', border: 'none', color: view === item.id ? '#A855F7' : '#6B6B7B', fontSize: 14, fontWeight: view === item.id ? 600 : 400, cursor: 'pointer', textAlign: 'left', fontFamily: 'Inter, sans-serif', marginBottom: 4 }}>
              <span>{item.icon}</span> {item.label}
            </button>
          ))}
        </nav>
        <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg, #7C3AED, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700 }}>{user.name?.[0]?.toUpperCase()}</div>
          <div style={{ flex: 1, overflow: 'hidden' }}><div style={{ fontSize: 13, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.name}</div><div style={{ fontSize: 11, color: '#6B6B7B', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.email}</div></div>
          <button onClick={onLogout} style={{ background: 'none', border: 'none', color: '#6B6B7B', cursor: 'pointer', fontSize: 18, padding: 4 }}>→</button>
        </div>
      </div>
      {/* Main */}
      <div style={{ marginLeft: 240, flex: 1, padding: '32px 40px' }}>
        {view === 'dashboard' && (<>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
            <div><h1 style={{ fontSize: 28, fontWeight: 700 }}>Welcome back, {user.name?.split(' ')[0]}</h1><p style={{ color: '#6B6B7B', fontSize: 14, marginTop: 4 }}>{agents.length === 0 ? 'Deploy your first AI agent' : `${stats.activeAgents} active`}</p></div>
            <button onClick={() => setView('create')} style={{ padding: '12px 24px', background: 'linear-gradient(135deg, #7C3AED, #A855F7)', color: 'white', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>+ New Agent</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 }}>
            {[{ label: 'Active', value: stats.activeAgents, icon: '⚡', color: '#22C55E' }, { label: 'Total', value: stats.totalAgents, icon: '🤖', color: '#7C3AED' }, { label: 'Platforms', value: stats.platforms, icon: '💬', color: '#3B82F6' }, { label: 'Messages', value: stats.messages, icon: '📨', color: '#F59E0B' }].map((s, i) => (
              <div key={i} style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontSize: 12, color: '#6B6B7B', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{s.label}</span><span style={{ fontSize: 18 }}>{s.icon}</span></div>
                <div style={{ fontSize: 28, fontWeight: 700, color: s.color, fontFamily: 'JetBrains Mono, monospace', marginTop: 8 }}>{s.value}</div>
              </div>
            ))}
          </div>
          {agents.length === 0 ? (
            <div style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 80, textAlign: 'center' }}>
              <div style={{ fontSize: 56, marginBottom: 20 }}>🦞</div>
              <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 8 }}>No agents yet</h2>
              <p style={{ color: '#6B6B7B', fontSize: 15, marginBottom: 28 }}>Deploy your first AI agent. It takes 60 seconds.</p>
              <button onClick={() => setView('create')} style={{ padding: '14px 32px', background: 'linear-gradient(135deg, #7C3AED, #A855F7)', color: 'white', border: 'none', borderRadius: 12, fontSize: 16, fontWeight: 600, cursor: 'pointer' }}>⚡ Create First Agent</button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {agents.map(agent => (
                <div key={agent.id} style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: '18px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: agent.status === 'running' ? '#22C55E' : '#6B6B7B', boxShadow: agent.status === 'running' ? '0 0 10px rgba(34,197,94,0.5)' : 'none' }} />
                    <div><div style={{ fontWeight: 600 }}>{agent.name}</div><div style={{ fontSize: 12, color: '#6B6B7B', marginTop: 2 }}>{MODELS.find(m => m.id === agent.model)?.name} · {(agent.platforms || []).map(p => PLATFORMS.find(pl => pl.id === p)?.name).filter(Boolean).join(', ') || 'No platform'}</div></div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: 11, padding: '4px 10px', borderRadius: 999, background: agent.status === 'running' ? 'rgba(34,197,94,0.1)' : 'rgba(107,107,123,0.1)', color: agent.status === 'running' ? '#22C55E' : '#6B6B7B', fontWeight: 600 }}>{agent.status?.toUpperCase()}</span>
                    <button onClick={() => toggleAgent(agent.id, agent.status)} style={{ padding: '7px 14px', borderRadius: 8, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#E8E8ED', cursor: 'pointer', fontSize: 12 }}>{agent.status === 'running' ? 'Stop' : 'Start'}</button>
                    <button onClick={() => deleteAgent(agent.id)} style={{ padding: '7px 14px', borderRadius: 8, background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)', color: '#EF4444', cursor: 'pointer', fontSize: 12 }}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>)}
        {view === 'create' && (<div style={{ maxWidth: 600 }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 4 }}>Create New Agent</h1>
          <p style={{ color: '#6B6B7B', fontSize: 14, marginBottom: 32 }}>Deploy your AI agent in 60 seconds</p>
          <div style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 32 }}>
            <div style={{ marginBottom: 24 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Agent Name</label>
              <input type="text" value={agentName} onChange={e => setAgentName(e.target.value)} placeholder="My AI Assistant" style={{ width: '100%', padding: '14px 16px', borderRadius: 12, background: '#050507', border: '1px solid rgba(255,255,255,0.08)', color: '#E8E8ED', fontSize: 15, outline: 'none', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>Choose Model</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                {MODELS.map(m => (<button key={m.id} onClick={() => setSelectedModel(m.id)} style={{ padding: '14px', borderRadius: 12, border: selectedModel === m.id ? '1px solid #7C3AED' : '1px solid rgba(255,255,255,0.06)', background: selectedModel === m.id ? 'rgba(124,58,237,0.08)' : 'transparent', cursor: 'pointer', textAlign: 'left', color: 'white', fontFamily: 'Inter, sans-serif' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontSize: 14, fontWeight: 600 }}>{m.name}</span>{m.free && <span style={{ fontSize: 10, padding: '2px 7px', borderRadius: 4, background: 'rgba(34,197,94,0.1)', color: '#22C55E', fontWeight: 700 }}>FREE</span>}</div>
                  <div style={{ fontSize: 11, color: '#6B6B7B', marginTop: 2 }}>{m.provider}</div>
                </button>))}
              </div>
            </div>
            <div style={{ marginBottom: 28 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>Connect Platforms</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
                {PLATFORMS.map(p => (<button key={p.id} onClick={() => setSelectedPlatforms(prev => prev.includes(p.id) ? prev.filter(x => x !== p.id) : [...prev, p.id])} style={{ padding: '14px 8px', borderRadius: 12, border: selectedPlatforms.includes(p.id) ? '1px solid #7C3AED' : '1px solid rgba(255,255,255,0.06)', background: selectedPlatforms.includes(p.id) ? 'rgba(124,58,237,0.08)' : 'transparent', cursor: 'pointer', textAlign: 'center', color: 'white', fontFamily: 'Inter, sans-serif' }}>
                  <div style={{ fontSize: 22 }}>{p.icon}</div><div style={{ fontSize: 11, fontWeight: 500, marginTop: 4 }}>{p.name}</div>
                  {selectedPlatforms.includes(p.id) && <div style={{ fontSize: 9, color: '#22C55E', marginTop: 2, fontWeight: 600 }}>Connected</div>}
                </button>))}
              </div>
            </div>
            <button onClick={createAgent} disabled={!agentName || deploying} style={{ width: '100%', padding: '16px', background: (!agentName || deploying) ? '#1A1A24' : 'linear-gradient(135deg, #7C3AED, #A855F7)', color: 'white', border: 'none', borderRadius: 12, fontSize: 16, fontWeight: 700, cursor: (!agentName || deploying) ? 'not-allowed' : 'pointer', fontFamily: 'Inter, sans-serif' }}>
              {deploying ? 'Provisioning...' : '⚡ Deploy Agent'}
            </button>
          </div>
        </div>)}
        {view === 'models' && (<><h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 4 }}>AI Models</h1><p style={{ color: '#6B6B7B', fontSize: 14, marginBottom: 32 }}>500+ models. Free ones need no API key.</p><div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>{MODELS.map(m => (<div key={m.id} style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 24 }}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}><span style={{ fontWeight: 600, fontSize: 17 }}>{m.name}</span>{m.free ? <span style={{ fontSize: 11, padding: '4px 10px', borderRadius: 999, background: 'rgba(34,197,94,0.1)', color: '#22C55E', fontWeight: 700 }}>FREE</span> : <span style={{ fontSize: 11, padding: '4px 10px', borderRadius: 999, background: 'rgba(249,115,22,0.1)', color: '#F97316', fontWeight: 600 }}>BYOK</span>}</div><div style={{ fontSize: 13, color: '#6B6B7B' }}>Provider: {m.provider}</div><div style={{ fontSize: 12, color: m.free ? '#22C55E' : '#F97316', marginTop: 8 }}>{m.free ? 'No API key needed' : 'Bring your own API key'}</div></div>))}</div></>)}
        {view === 'settings' && (<div style={{ maxWidth: 560 }}><h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 4 }}>Settings</h1><p style={{ color: '#6B6B7B', fontSize: 14, marginBottom: 32 }}>API keys & account</p><div style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 28 }}><h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>API Keys</h3><p style={{ fontSize: 13, color: '#6B6B7B', marginBottom: 20 }}>Free models work without keys. Add keys for Claude, GPT-4o, Gemini.</p>{['Anthropic (Claude)', 'OpenAI (GPT)', 'Google (Gemini)'].map(key => (<div key={key} style={{ display: 'flex', gap: 10, marginBottom: 12 }}><input type="password" placeholder={`${key} API key`} style={{ flex: 1, padding: '12px 14px', borderRadius: 10, background: '#050507', border: '1px solid rgba(255,255,255,0.08)', color: '#E8E8ED', fontSize: 13, outline: 'none', fontFamily: 'Inter, sans-serif' }} /><button style={{ padding: '10px 18px', borderRadius: 10, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', color: '#A855F7', cursor: 'pointer', fontSize: 13, fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>Save</button></div>))}</div></div>)}
      </div>
    </div>
  );
}

// ─── MAIN ───
export default function Home() {
  const [page, setPage] = useState('landing'); // landing, auth, dashboard
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const t = localStorage.getItem('token');
    if (t) {
      setToken(t);
      fetch(`${API}/auth/me`, { headers: { Authorization: `Bearer ${t}` } })
        .then(r => r.json())
        .then(data => { if (data.user) { setUser(data.user); setPage('dashboard'); } })
        .catch(() => localStorage.removeItem('token'));
    }
  }, []);

  const handleAuth = (u, t) => { setUser(u); setToken(t); setPage('dashboard'); };
  const handleLogout = () => { localStorage.removeItem('token'); setUser(null); setToken(null); setPage('landing'); };

  if (page === 'landing') return <LandingPage onGetStarted={() => setPage('auth')} />;
  if (page === 'auth') return <AuthScreen onAuth={handleAuth} onBack={() => setPage('landing')} />;
  return <Dashboard user={user} token={token} onLogout={handleLogout} />;
}