'use client';
import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main>
      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(5,5,7,0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #7C3AED, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 800, fontFamily: 'JetBrains Mono, monospace' }}>U</div>
            <span style={{ fontWeight: 700, fontSize: 20, letterSpacing: '-0.02em' }}>UYWNIX</span>
          </div>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <a href="#products" style={{ color: '#6B6B7B', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Products</a>
            <a href="#about" style={{ color: '#6B6B7B', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>About</a>
            <a href="#faq" style={{ color: '#6B6B7B', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>FAQ</a>
            <a href="https://uywni.app" target="_blank" className="cta-btn" style={{ padding: '10px 24px', fontSize: 14 }}>Open UYWNI</a>
          </div>
        </div>
      </nav>

      {/* HERO - kilo.ai style */}
      <section style={{ position: 'relative', padding: '120px 24px 60px', textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% -20%, rgba(124,58,237,0.25) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto' }}>
          <div style={{ fontSize: 13, color: '#A855F7', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 16 }}>
            AI for everyone
          </div>
          <h1 style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: 20 }}>
            Social app for everyone<br />
            <span style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7, #C084FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundSize: '200% 200%', animation: 'gradient-shift 4s ease infinite' }}>AI automation for business</span>
          </h1>
          <p style={{ fontSize: 20, color: '#6B6B7B', lineHeight: 1.6, maxWidth: 560, margin: '0 auto 24px' }}>
            From social connections to AI-powered workflows — we build tools that work for everyone.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 999, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', fontSize: 13, color: '#22C55E', fontFamily: 'JetBrains Mono, monospace' }}>
            Powered by OpenClaw
          </div>
        </div>
      </section>

      {/* TWO PRODUCT CARDS - kilo.ai KiloClaw + Kilo Code style */}
      <section id="products" style={{ padding: '60px 24px 80px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          
          {/* UYWNI Card */}
          <div style={{ background: 'var(--surface, #0A0A10)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 24, padding: 48, position: 'relative', overflow: 'hidden', transition: 'all 0.3s' }}>
            <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', fontSize: 13, color: '#22C55E', marginBottom: 24, fontWeight: 600 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E' }} /> Social App
              </div>
              <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 16 }}>UYWNI</h2>
              <p style={{ fontSize: 16, color: '#6B6B7B', lineHeight: 1.6, marginBottom: 28 }}>
                A social media platform for everyone. Connect, share, and build your community.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
                {[
                  'Connect with people and communities',
                  'Share posts, stories, and moments',
                  'Real-time messaging and calls',
                  'Privacy-first design',
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15 }}>
                    <span style={{ color: '#22C55E', fontSize: 18 }}>✓</span> {f}
                  </div>
                ))}
              </div>
              <a href="https://uywni.app" target="_blank" className="cta-btn" style={{ background: 'linear-gradient(135deg, #16A34A, #22C55E)' }}>
                Open UYWNI →
              </a>
            </div>
          </div>

          {/* UYWNIX Card */}
          <div style={{ background: 'var(--surface, #0A0A10)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: 24, padding: 48, position: 'relative', overflow: 'hidden', boxShadow: '0 0 60px rgba(124,58,237,0.08)', transition: 'all 0.3s' }}>
            <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', fontSize: 13, color: '#A855F7', marginBottom: 24, fontWeight: 600 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#A855F7', animation: 'pulse-glow 2s infinite' }} /> AI Automation
              </div>
              <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 16 }}>UYWNIX</h2>
              <p style={{ fontSize: 16, color: '#6B6B7B', lineHeight: 1.6, marginBottom: 28 }}>
                AI chatbots, voice agents, and automation workflows — deployed for your business in days.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
                {[
                  'AI chatbots on WhatsApp & Telegram',
                  'Voice agents that answer calls 24/7',
                  'Automation workflows & CRM sync',
                  '500+ AI models, free options available',
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15 }}>
                    <span style={{ color: '#A855F7', fontSize: 18 }}>✓</span> {f}
                  </div>
                ))}
              </div>
              <a href="#contact" className="cta-btn">
                Get Started →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: '60px 24px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {[
            { value: '500+', label: 'AI Models' },
            { value: '24/7', label: 'Always On' },
            { value: '50+', label: 'Platforms' },
            { value: '<60s', label: 'Deploy' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, fontWeight: 800, fontFamily: 'JetBrains Mono, monospace', background: 'linear-gradient(135deg, #7C3AED, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.value}</div>
              <div style={{ fontSize: 12, color: '#6B6B7B', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.12em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: '80px 24px', background: 'var(--surface, #0A0A10)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, color: '#A855F7', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 8 }}>// About</div>
            <h2 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.03em' }}>What is UYWNIX?</h2>
          </div>
          <div style={{ fontSize: 18, color: '#9CA3AF', lineHeight: 1.8, textAlign: 'center' }}>
            UYWNIX is an AI company building tools for everyone. Our social app <strong style={{ color: '#22C55E' }}>UYWNI</strong> connects people. Our automation platform <strong style={{ color: '#A855F7' }}>UYWNIX</strong> connects businesses with AI. Powered by OpenClaw and 500+ AI models — from free to enterprise grade.
          </div>
        </div>
      </section>

      {/* UYWNIX SERVICES */}
      <section style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, color: '#A855F7', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 8 }}>// UYWNIX Services</div>
            <h2 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.03em' }}>AI That Works For You</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              { icon: '🤖', title: 'AI Chatbots', desc: 'WhatsApp, Telegram, web — trained on your business, live 24/7.', color: '#7C3AED' },
              { icon: '📞', title: 'Voice Agents', desc: 'AI answers your calls, qualifies leads, books appointments.', color: '#22C55E' },
              { icon: '⚡', title: 'Automation', desc: 'Email, follow-ups, CRM sync, social posting — all automated.', color: '#3B82F6' },
              { icon: '🌐', title: 'AI Websites', desc: 'Modern sites with built-in chat, smart forms, auto-responders.', color: '#F59E0B' },
              { icon: '📊', title: 'Analytics', desc: 'Track conversations, leads, conversions — know your ROI.', color: '#EF4444' },
              { icon: '🔒', title: 'Enterprise Security', desc: 'Encrypted, firewalled, private. Your data stays yours.', color: '#06B6D4' },
            ].map((s, i) => (
              <div key={i} className="feature-card" style={{ padding: 32 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${s.color}15`, border: `1px solid ${s.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: '#6B6B7B', lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: '80px 24px', background: 'var(--surface, #0A0A10)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, color: '#A855F7', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 8 }}>// Pricing</div>
            <h2 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.03em' }}>Simple. No Surprises.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              {
                name: 'Starter', price: '$299', period: 'one-time', desc: 'AI chatbot on 1 platform',
                features: ['1 AI chatbot', '1 platform', 'Basic training', '1 month support'],
                featured: false,
              },
              {
                name: 'Business', price: '$999', period: 'one-time', desc: 'Chatbot + voice + automation',
                features: ['Chatbot + voice agent', '3 platforms', 'CRM integration', '3 months support', 'Analytics dashboard', 'Priority deploy'],
                featured: true,
              },
              {
                name: 'Enterprise', price: 'Custom', period: '', desc: 'Full AI suite',
                features: ['Unlimited agents', 'All platforms', 'Custom training', 'Full integration', 'Dedicated support', 'SLA guarantee'],
                featured: false,
              },
            ].map((p, i) => (
              <div key={i} className={`pricing-card ${p.featured ? 'featured' : ''}`} style={{ position: 'relative' }}>
                {p.featured && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', padding: '4px 16px', borderRadius: 999, background: 'linear-gradient(135deg, #7C3AED, #A855F7)', fontSize: 12, fontWeight: 600, color: 'white' }}>POPULAR</div>}
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{p.name}</h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
                  <span style={{ fontSize: 40, fontWeight: 800, fontFamily: 'JetBrains Mono, monospace' }}>{p.price}</span>
                  {p.period && <span style={{ fontSize: 14, color: '#6B6B7B' }}>{p.period}</span>}
                </div>
                <p style={{ fontSize: 14, color: '#6B6B7B', marginBottom: 20 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                  {p.features.map((f, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14 }}>
                      <span style={{ color: '#22C55E' }}>✓</span> {f}
                    </div>
                  ))}
                </div>
                <a href="#contact" className={p.featured ? 'cta-btn' : 'cta-btn-outline'} style={{ width: '100%', justifyContent: 'center', padding: '12px 24px' }}>
                  {p.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, color: '#A855F7', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 8 }}>// FAQ</div>
            <h2 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.03em' }}>Questions?</h2>
          </div>
          {[
            { q: 'What is UYWNI?', a: 'UYWNI is our social media app — connect with people, share posts and stories, message and call in real-time. Privacy-first design.' },
            { q: 'What is UYWNIX?', a: 'UYWNIX is our AI automation service. We build chatbots, voice agents, and automation workflows for businesses. Deployed in days, running 24/7.' },
            { q: 'How fast can you deploy?', a: 'Chatbots go live in 2-3 days. Voice agents in 5-7 days. Enterprise projects scoped individually.' },
            { q: 'What AI models do you use?', a: '500+ models — GLM-5.1, Claude, GPT-4o, Gemini, Llama, Mistral, Qwen, DeepSeek. Free models available.' },
            { q: 'Do I need technical knowledge?', a: 'Zero. We handle everything — setup, training, deployment, hosting.' },
            { q: 'Is my data safe?', a: 'Yes. Encrypted storage, token auth, VCN firewalls. Your data stays on your instance.' },
          ].map((f, i) => (
            <div key={i} className="faq-item" onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: 16, fontWeight: 500 }}>{f.q}</h4>
                <span style={{ color: '#A855F7', fontSize: 20, transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>+</span>
              </div>
              {openFaq === i && <p style={{ fontSize: 14, color: '#6B6B7B', lineHeight: 1.6, marginTop: 12 }}>{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '100px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.12) 0%, transparent 70%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 16 }}>Get Started</h2>
          <p style={{ fontSize: 18, color: '#6B6B7B', marginBottom: 32 }}>Tell us what you need. We build it.</p>
          <div style={{ background: 'var(--surface, #0A0A10)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 32, textAlign: 'left' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
              <input type="text" placeholder="Your name" style={{ width: '100%', padding: '12px 16px', borderRadius: 10, background: '#050507', border: '1px solid rgba(255,255,255,0.06)', color: '#E8E8ED', fontSize: 14, outline: 'none', fontFamily: 'Inter, sans-serif' }} />
              <input type="text" placeholder="+91 XXXXX XXXXX" style={{ width: '100%', padding: '12px 16px', borderRadius: 10, background: '#050507', border: '1px solid rgba(255,255,255,0.06)', color: '#E8E8ED', fontSize: 14, outline: 'none', fontFamily: 'Inter, sans-serif' }} />
            </div>
            <select style={{ width: '100%', padding: '12px 16px', borderRadius: 10, background: '#050507', border: '1px solid rgba(255,255,255,0.06)', color: '#E8E8ED', fontSize: 14, outline: 'none', marginBottom: 14, fontFamily: 'Inter, sans-serif' }}>
              <option>I need an AI chatbot</option>
              <option>I need a voice agent</option>
              <option>I need automation</option>
              <option>I need a website</option>
              <option>Other</option>
            </select>
            <textarea rows={3} placeholder="Tell us about your business..." style={{ width: '100%', padding: '12px 16px', borderRadius: 10, background: '#050507', border: '1px solid rgba(255,255,255,0.06)', color: '#E8E8ED', fontSize: 14, outline: 'none', resize: 'vertical', marginBottom: 16, fontFamily: 'Inter, sans-serif' }} />
            <button className="cta-btn" style={{ width: '100%', justifyContent: 'center', fontSize: 16, padding: '14px 32px' }}>Send Inquiry →</button>
            <p style={{ textAlign: 'center', fontSize: 12, color: '#6B6B7B', marginTop: 12 }}>Or email contact@uywnix.com</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.04)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #7C3AED, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, fontFamily: 'JetBrains Mono, monospace' }}>U</div>
            <span style={{ fontWeight: 600, fontSize: 16 }}>UYWNIX</span>
          </div>
          <div style={{ display: 'flex', gap: 24, fontSize: 13, color: '#6B6B7B' }}>
            <a href="https://uywni.app" target="_blank" style={{ color: '#6B6B7B', textDecoration: 'none' }}>UYWNI</a>
            <a href="#products" style={{ color: '#6B6B7B', textDecoration: 'none' }}>Products</a>
            <a href="#pricing" style={{ color: '#6B6B7B', textDecoration: 'none' }}>Pricing</a>
            <a href="mailto:contact@uywnix.com" style={{ color: '#6B6B7B', textDecoration: 'none' }}>Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}