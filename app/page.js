'use client';
import { useState, useEffect, useRef } from 'react';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// ─── Animated Counter ───
function Counter({ end, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !counted.current) {
        counted.current = true;
        let start = 0;
        const duration = 2000;
        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * end));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Scroll Reveal ───
function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={visible ? `animate-fade-up delay-${delay}` : ''} style={{ opacity: visible ? undefined : 0 }}>
      {children}
    </div>
  );
}

// ─── LANDING PAGE ───
function LandingPage({ onGetStarted }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const NEWS = [
    { date: 'Apr 2026', title: 'UYWNIX Claw Launches with 500+ AI Models', excerpt: 'One-click deploy your personal 24/7 AI agent. Free models included, no API key needed.', icon: '🚀' },
    { date: 'Apr 2026', title: 'UYWNI Social App Enters Beta', excerpt: 'Connect, share, and build community. Privacy-first social media for everyone.', icon: '💬' },
    { date: 'Mar 2026', title: 'UYWNIX Partners with Ollama Cloud', excerpt: 'Free cloud AI models for all UYWNIX Claw users. GLM-5.1, Llama 4, Mistral, and more.', icon: '🤝' },
  ];

  const SERVICES = [
    { icon: '⚡', title: 'AI Agent Deployment', desc: 'Deploy your AI agent in 60 seconds. No servers, no config, no hassle. Just click and go.', color: 'purple' },
    { icon: '🌐', title: 'Web Development', desc: 'Custom websites and web applications. From landing pages to full-stack platforms.', color: 'blue' },
    { icon: '📱', title: 'Mobile Apps', desc: 'Native and cross-platform mobile applications. iOS and Android from a single codebase.', color: 'green' },
    { icon: '🛡️', title: 'Cloud Infrastructure', desc: 'Secure, scalable cloud hosting. Alibaba Cloud, Oracle Cloud, or your own servers.', color: 'orange' },
    { icon: '🎨', title: 'Brand & Design', desc: 'World-class visual identity. Logo, UI/UX, brand guidelines, and design systems.', color: 'pink' },
    { icon: '📞', title: 'AI Calling Agents', desc: 'Voice AI for your business. Inbound support, outbound sales, appointment booking.', color: 'cyan' },
  ];

  const FAQ = [
    { q: 'What is UYWNIX?', a: 'UYWNIX is an AI and software company building products for everyone. Our two flagship products are UYWNIX Claw (hosted AI agent platform) and UYWNI (social media app).' },
    { q: 'What is UYWNIX Claw?', a: 'UYWNIX Claw is a hosted AI agent platform. One-click deploy, no servers needed. Your personal 24/7 AI assistant powered by 500+ models, built on OpenClaw.' },
    { q: 'What is UYWNI?', a: 'UYWNI is our social media app. Connect with people, share posts and stories, message and call in real-time. Privacy-first design, no data selling.' },
    { q: 'Is UYWNIX Claw free?', a: 'Yes! Free AI models (GLM-5.1, Llama 4, Mistral, Qwen 3, DeepSeek R1) work without any API key. Premium models (Claude, GPT-4o, Gemini) require your own key.' },
    { q: 'What services does UYWNIX offer?', a: 'We offer AI agent deployment, web development, mobile apps, cloud infrastructure, brand & design, and AI calling agents. Everything a business needs to go digital.' },
    { q: 'Can I self-host UYWNIX Claw?', a: 'Absolutely. Built on open-source OpenClaw. Deploy on any cloud: Alibaba, Oracle, Hetzner, or your own server.' },
    { q: 'Where is UYWNIX based?', a: 'India. Serving businesses globally with a focus on Delhi NCR and the Indian market.' },
  ];

  return (
    <div>
      {/* ─── NAV ─── */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <div className="nav-logo-icon">🦞</div>
            <span className="nav-logo-text">UYWNIX</span>
          </a>
          <div className="nav-links">
            <a href="#products">Products</a>
            <a href="#services">Services</a>
            <a href="#newsroom">Newsroom</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="nav-cta">
            <button className="btn-secondary" onClick={onGetStarted}>Sign In</button>
            <button className="btn-primary" onClick={onGetStarted}>Get Started</button>
          </div>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge animate-fade delay-1">
            <span className="hero-badge-dot" />
            AI Company for Everyone
          </div>
          <h1 className="animate-fade-up delay-2">
            Build the future<br />
            with <span className="hero-gradient">UYWNIX</span>
          </h1>
          <p className="hero-sub animate-fade-up delay-3">
            AI agents that work 24/7. Social apps that connect people. World-class services that bring businesses online. This is UYWNIX.
          </p>
          <div className="hero-actions animate-fade-up delay-4">
            <button className="hero-btn-primary" onClick={onGetStarted}>
              🦞 Deploy Your Agent
            </button>
            <a href="#products" className="hero-btn-secondary" style={{ textDecoration: 'none' }}>
              Explore Products ↓
            </a>
          </div>
          <div className="hero-powered animate-fade delay-5">
            Powered by OpenClaw
          </div>
        </div>
      </section>

      {/* ─── TICKER ─── */}
      <div className="ticker">
        <div className="ticker-inner">
          {Array(2).fill(null).map((_, i) => (
            <div key={i} style={{ display: 'inline-flex', gap: 48 }}>
              {['GLM-5.1', 'Llama 4', 'Mistral Large', 'Qwen 3', 'DeepSeek R1', 'Claude 4', 'GPT-4o', 'Gemini 2.5', 'Telegram', 'WhatsApp', 'Discord', 'Slack', 'WebChat', 'OpenClaw', 'Ollama Cloud', 'Free Tier', '24/7 Uptime', '1-Click Deploy'].map((item, j) => (
                <span key={j} className="ticker-item"><span className="ticker-dot" />{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ─── PRODUCTS ─── */}
      <section id="products" className="section">
        <div className="section-inner">
          <Reveal><div className="section-label">// Products</div></Reveal>
          <Reveal delay={1}><div className="section-title">Two products.<br />One mission.</div></Reveal>
          <Reveal delay={2}><div className="section-desc">Everything you need — an always-on AI agent and a social app for real connections.</div></Reveal>

          <div className="products-grid">
            {/* UYWNIX Claw */}
            <Reveal delay={3}>
              <div className="product-card purple">
                <div className="product-glow purple" />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div className="product-badge purple">
                    <span className="product-badge-dot purple" />
                    Hosted in 2 clicks
                  </div>
                  <div className="product-name">UYWNIX Claw</div>
                  <div className="product-tagline">Your personal 24/7 AI agent. Natively connected to 500+ models.</div>
                  <div className="product-features">
                    <div className="product-feature"><span className="product-feature-icon">⚡</span><span className="product-feature-text"><strong>One-click deploy</strong> — Skip Docker, servers, config. Your agent is ready in seconds.</span></div>
                    <div className="product-feature"><span className="product-feature-icon">💬</span><span className="product-feature-text"><strong>Chat anywhere</strong> — Telegram, WhatsApp, Discord, Slack, or web. Real actions, not just chat.</span></div>
                    <div className="product-feature"><span className="product-feature-icon">🔄</span><span className="product-feature-text"><strong>Automated workflows</strong> — Cron jobs, email monitoring, calendar management. Runs 24/7.</span></div>
                    <div className="product-feature"><span className="product-feature-icon">🧠</span><span className="product-feature-text"><strong>500+ models</strong> — Free models included. Premium models with your own key.</span></div>
                    <div className="product-feature"><span className="product-feature-icon">🛡️</span><span className="product-feature-text"><strong>Fully managed</strong> — Infrastructure, security, updates handled. Powered by OpenClaw.</span></div>
                  </div>
                  <button className="product-btn purple" onClick={onGetStarted}>🦞 Deploy Now →</button>
                </div>
              </div>
            </Reveal>

            {/* UYWNI */}
            <Reveal delay={4}>
              <div className="product-card green">
                <div className="product-glow green" />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div className="product-badge green">
                    <span className="product-badge-dot green" />
                    Social App
                  </div>
                  <div className="product-name">UYWNI</div>
                  <div className="product-tagline">Connect, share, and build your community. Privacy-first.</div>
                  <div className="product-features">
                    <div className="product-feature"><span className="product-feature-icon">💬</span><span className="product-feature-text"><strong>Real-time messaging</strong> — Text, voice, video calls. End-to-end encrypted.</span></div>
                    <div className="product-feature"><span className="product-feature-icon">📸</span><span className="product-feature-text"><strong>Share moments</strong> — Posts, stories, photos. Express yourself freely.</span></div>
                    <div className="product-feature"><span className="product-feature-icon">🔒</span><span className="product-feature-text"><strong>Privacy-first</strong> — Your data is yours. We never sell or share it.</span></div>
                    <div className="product-feature"><span className="product-feature-icon">👥</span><span className="product-feature-text"><strong>Communities</strong> — Build groups, channels, and events that matter.</span></div>
                    <div className="product-feature"><span className="product-feature-icon">🌍</span><span className="product-feature-text"><strong>Global reach</strong> — Available everywhere. Local first, global always.</span></div>
                  </div>
                  <a href="https://uywni.app" target="_blank" className="product-btn green" style={{ textDecoration: 'none' }}>Open UYWNI →</a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <div className="stats">
        <div className="stats-inner">
          <div className="stat-item animate-fade-up delay-1"><div className="stat-value"><Counter end={500} suffix="+" /></div><div className="stat-label">AI Models</div></div>
          <div className="stat-item animate-fade-up delay-2"><div className="stat-value"><Counter end={24} />/<Counter end={7} /></div><div className="stat-label">Always On</div></div>
          <div className="stat-item animate-fade-up delay-3"><div className="stat-value"><Counter end={5} suffix="+" /></div><div className="stat-label">Platforms</div></div>
          <div className="stat-item animate-fade-up delay-4"><div className="stat-value"><Counter end={60} suffix="s" /></div><div className="stat-label">Deploy Time</div></div>
        </div>
      </div>

      {/* ─── SERVICES ─── */}
      <section id="services" className="section">
        <div className="section-inner">
          <Reveal><div className="section-label">// Services</div></Reveal>
          <Reveal delay={1}><div className="section-title">What we build.</div></Reveal>
          <Reveal delay={2}><div className="section-desc">From AI agents to full-scale platforms. We bring businesses online and into the future.</div></Reveal>

          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <Reveal key={i} delay={i + 1}>
                <div className="service-card">
                  <div className={`service-icon ${s.color}`}>{s.icon}</div>
                  <div className="service-title">{s.title}</div>
                  <div className="service-desc">{s.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MODELS ─── */}
      <section className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <Reveal><div className="section-label">// Models</div></Reveal>
          <Reveal delay={1}><div className="section-title" style={{ marginLeft: 'auto', marginRight: 'auto' }}>Any model. Free ones included.</div></Reveal>
          <Reveal delay={2}>
            <div className="models-wrap">
              {[
                { name: 'GLM-5.1', free: true },
                { name: 'Llama 4', free: true },
                { name: 'Mistral Large', free: true },
                { name: 'Qwen 3', free: true },
                { name: 'DeepSeek R1', free: true },
                { name: 'Gemma 4:31B', free: true },
                { name: 'Claude 4 Sonnet', free: false },
                { name: 'GPT-4o', free: false },
                { name: 'Gemini 2.5 Pro', free: false },
              ].map((m, i) => (
                <span key={i} className={`model-pill ${m.free ? 'free' : 'paid'}`}>
                  {m.name} {m.free ? '✓ Free' : '🔑 BYOK'}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={3}><p style={{ fontSize: 14, color: '#6B6B7B', marginTop: 20 }}>Free models powered by Ollama Cloud — no API key needed. Premium models require your own key.</p></Reveal>
        </div>
      </section>

      {/* ─── NEWSROOM ─── */}
      <section id="newsroom" className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="section-inner">
          <Reveal><div className="section-label">// Newsroom</div></Reveal>
          <Reveal delay={1}><div className="section-title">Latest from UYWNIX</div></Reveal>
          <Reveal delay={2}><div className="section-desc">Product updates, partnerships, and company news.</div></Reveal>

          <div className="newsroom-grid">
            {NEWS.map((n, i) => (
              <Reveal key={i} delay={i + 3}>
                <div className="news-card">
                  <div className="news-image">{n.icon}</div>
                  <div className="news-body">
                    <div className="news-date">{n.date}</div>
                    <div className="news-title">{n.title}</div>
                    <div className="news-excerpt">{n.excerpt}</div>
                    <span className="news-cta">Read more →</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section id="faq" className="section" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="section-inner" style={{ textAlign: 'center' }}>
          <Reveal><div className="section-label">// FAQ</div></Reveal>
          <Reveal delay={1}><div className="section-title" style={{ marginLeft: 'auto', marginRight: 'auto' }}>Questions & Answers</div></Reveal>
        </div>
        <div className="faq-list">
          {FAQ.map((f, i) => (
            <Reveal key={i} delay={Math.min(i + 1, 5)}>
              <div className="faq-item">
                <div className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <h4>{f.q}</h4>
                  <span className={`faq-toggle ${openFaq === i ? 'open' : ''}`}>+</span>
                </div>
                {openFaq === i && <div className="faq-answer">{f.a}</div>}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="cta">
        <div className="cta-inner">
          <Reveal><h2>Ready to build?</h2></Reveal>
          <Reveal delay={1}><p>Deploy your AI agent or explore our products. The future starts now.</p></Reveal>
          <Reveal delay={2}>
            <div className="cta-actions">
              <button className="hero-btn-primary" onClick={onGetStarted}>🦞 Deploy Your Agent</button>
              <a href="https://uywni.app" target="_blank" className="hero-btn-secondary" style={{ textDecoration: 'none' }}>Open UYWNI</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <div className="nav-logo-icon">🦞</div>
                <span style={{ fontWeight: 800, fontSize: 20 }}>UYWNIX</span>
              </div>
              <p>AI and software company building products for everyone. India-based, serving globally.</p>
              <p style={{ marginTop: 12 }}><a href="mailto:contact@uywnix.com" style={{ color: '#A855F7', textDecoration: 'none' }}>contact@uywnix.com</a></p>
            </div>
            <div className="footer-col">
              <h5>Products</h5>
              <a href="#products">UYWNIX Claw</a>
              <a href="#products">UYWNI</a>
              <a href="#models">AI Models</a>
            </div>
            <div className="footer-col">
              <h5>Company</h5>
              <a href="#services">Services</a>
              <a href="#newsroom">Newsroom</a>
              <a href="#faq">FAQ</a>
              <a href="mailto:contact@uywnix.com">Contact</a>
            </div>
            <div className="footer-col">
              <h5>Connect</h5>
              <a href="https://github.com/razintayyabr-netizen" target="_blank">GitHub</a>
              <a href="https://t.me/uywnix" target="_blank">Telegram</a>
              <a href="https://discord.com/invite/uywnix" target="_blank">Discord</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; 2026 UYWNIX. All rights reserved.</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#4A4A5A' }}>Built with 🦞 in India</span>
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
    setError(''); setLoading(true);
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
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050507', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 30%, rgba(124,58,237,0.15) 0%, transparent 60%)' }} />
      <div style={{ position: 'relative', zIndex: 1, width: 400, maxWidth: '90vw' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: 'linear-gradient(135deg, #7C3AED, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, margin: '0 auto 16px', boxShadow: '0 0 40px rgba(124,58,237,0.3)' }}>🦞</div>
          <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em' }}>UYWNIX Claw</h1>
          <p style={{ color: '#6B6B7B', fontSize: 14, marginTop: 4 }}>Your personal 24/7 AI agent</p>
        </div>
        <form onSubmit={submit} style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 32 }}>
          {mode === 'signup' && (
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Full Name</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" required style={{ width: '100%', padding: '14px 16px', borderRadius: 12, background: '#050507', border: '1px solid rgba(255,255,255,0.08)', color: '#E8E8ED', fontSize: 15, outline: 'none', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box' }} />
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
          <button type="submit" disabled={loading} style={{ width: '100%', padding: 16, background: loading ? '#1A1A24' : 'linear-gradient(135deg, #7C3AED, #A855F7)', color: 'white', border: 'none', borderRadius: 12, fontSize: 16, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'Inter, sans-serif' }}>
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
    try {
      const r = await fetch(`${API}/agents`, { method: 'POST', headers, body: JSON.stringify({ name: agentName, model: selectedModel, platforms: selectedPlatforms }) });
      const d = await r.json();
      if (d.agent) { setAgents(prev => [d.agent, ...prev]); setAgentName(''); setSelectedPlatforms([]); setView('dashboard'); }
    } catch {} setDeploying(false); fetchStats();
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
      <div style={{ width: 240, background: '#0A0A10', borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', position: 'fixed', top: 0, bottom: 0, left: 0 }}>
        <div style={{ padding: '20px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #7C3AED, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🦞</div>
          <div><div style={{ fontWeight: 800, fontSize: 15 }}>UYWNIX</div><div style={{ fontSize: 9, color: '#6B6B7B', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Claw</div></div>
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
          <div style={{ flex: 1, overflow: 'hidden' }}><div style={{ fontSize: 13, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.name}</div><div style={{ fontSize: 11, color: '#6B6B7B' }}>{user.email}</div></div>
          <button onClick={onLogout} style={{ background: 'none', border: 'none', color: '#6B6B7B', cursor: 'pointer', fontSize: 18, padding: 4 }}>→</button>
        </div>
      </div>

      <div style={{ marginLeft: 240, flex: 1, padding: '32px 40px' }}>
        {view === 'dashboard' && (<>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
            <div><h1 style={{ fontSize: 28, fontWeight: 700 }}>Welcome back, {user.name?.split(' ')[0]}</h1><p style={{ color: '#6B6B7B', fontSize: 14, marginTop: 4 }}>{agents.length === 0 ? 'Deploy your first AI agent' : `${stats.activeAgents} active`}</p></div>
            <button onClick={() => setView('create')} className="btn-primary">+ New Agent</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 }}>
            {[{ label: 'Active', value: stats.activeAgents, color: '#22C55E' }, { label: 'Total', value: stats.totalAgents, color: '#7C3AED' }, { label: 'Platforms', value: stats.platforms, color: '#3B82F6' }, { label: 'Messages', value: stats.messages, color: '#F59E0B' }].map((s, i) => (
              <div key={i} style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ fontSize: 12, color: '#6B6B7B', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{s.label}</span></div>
                <div style={{ fontSize: 28, fontWeight: 700, color: s.color, fontFamily: "'JetBrains Mono', monospace", marginTop: 8 }}>{s.value}</div>
              </div>
            ))}
          </div>
          {agents.length === 0 ? (
            <div style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 80, textAlign: 'center' }}>
              <div style={{ fontSize: 56, marginBottom: 20 }}>🦞</div>
              <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 8 }}>No agents yet</h2>
              <p style={{ color: '#6B6B7B', fontSize: 15, marginBottom: 28 }}>Deploy your first AI agent. It takes 60 seconds.</p>
              <button onClick={() => setView('create')} className="btn-primary" style={{ padding: '14px 32px', fontSize: 16 }}>⚡ Create First Agent</button>
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
                </button>))}
              </div>
            </div>
            <button onClick={createAgent} disabled={!agentName || deploying} style={{ width: '100%', padding: 16, background: (!agentName || deploying) ? '#1A1A24' : 'linear-gradient(135deg, #7C3AED, #A855F7)', color: 'white', border: 'none', borderRadius: 12, fontSize: 16, fontWeight: 700, cursor: (!agentName || deploying) ? 'not-allowed' : 'pointer', fontFamily: 'Inter, sans-serif' }}>
              {deploying ? 'Provisioning...' : '⚡ Deploy Agent'}
            </button>
          </div>
        </div>)}
        {view === 'models' && (<><h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 4 }}>AI Models</h1><p style={{ color: '#6B6B7B', fontSize: 14, marginBottom: 32 }}>500+ models. Free ones need no API key.</p><div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>{MODELS.map(m => (<div key={m.id} style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 24 }}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}><span style={{ fontWeight: 600, fontSize: 17 }}>{m.name}</span>{m.free ? <span style={{ fontSize: 11, padding: '4px 10px', borderRadius: 999, background: 'rgba(34,197,94,0.1)', color: '#22C55E', fontWeight: 700 }}>FREE</span> : <span style={{ fontSize: 11, padding: '4px 10px', borderRadius: 999, background: 'rgba(249,115,22,0.1)', color: '#F97316', fontWeight: 600 }}>BYOK</span>}</div><div style={{ fontSize: 13, color: '#6B6B7B' }}>Provider: {m.provider}</div></div>))}</div></>)}
        {view === 'settings' && (<div style={{ maxWidth: 560 }}><h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 4 }}>Settings</h1><p style={{ color: '#6B6B7B', fontSize: 14, marginBottom: 32 }}>API keys and account</p><div style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 28 }}><h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>API Keys</h3><p style={{ fontSize: 13, color: '#6B6B7B', marginBottom: 20 }}>Free models work without keys. Add keys for Claude, GPT-4o, Gemini.</p>{['Anthropic (Claude)', 'OpenAI (GPT)', 'Google (Gemini)'].map(key => (<div key={key} style={{ display: 'flex', gap: 10, marginBottom: 12 }}><input type="password" placeholder={`${key} API key`} style={{ flex: 1, padding: '12px 14px', borderRadius: 10, background: '#050507', border: '1px solid rgba(255,255,255,0.08)', color: '#E8E8ED', fontSize: 13, outline: 'none', fontFamily: 'Inter, sans-serif' }} /><button style={{ padding: '10px 18px', borderRadius: 10, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', color: '#A855F7', cursor: 'pointer', fontSize: 13, fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>Save</button></div>))}</div></div>)}
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
  if (page === 'auth') return <AuthScreen onAuth={handleAuth} />;
  return <Dashboard user={user} token={token} onLogout={handleLogout} />;
}