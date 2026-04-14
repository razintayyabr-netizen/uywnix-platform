'use client';
import { useState } from 'react';

const stats = [
  { value: '500+', label: 'AI Models' },
  { value: '24/7', label: 'Always On' },
  { value: '50+', label: 'Chat Platforms' },
  { value: '<60s', label: 'Deploy Time' },
];

const services = [
  {
    icon: '🤖',
    title: 'AI Chatbots',
    desc: 'Custom chatbots for your business — customer support, lead capture, appointment booking. Deploy on WhatsApp, Telegram, or your website.',
    features: ['Custom training on your data', 'Multi-language support', 'Lead qualification & CRM sync', '24/7 auto-response'],
    color: '#7C3AED',
  },
  {
    icon: '📞',
    title: 'Voice Agents',
    desc: 'AI-powered phone agents that answer calls, qualify leads, and book appointments — while you sleep.',
    features: ['Inbound & outbound calling', 'Natural conversation flow', 'Appointment scheduling', 'Call recording & transcripts'],
    color: '#22C55E',
  },
  {
    icon: '⚡',
    title: 'Automation Workflows',
    desc: 'Automate repetitive tasks — email sequences, follow-ups, data entry, social media posting, and more.',
    features: ['Email outreach automation', 'Social media scheduling', 'CRM data sync', 'Custom workflow builder'],
    color: '#3B82F6',
  },
  {
    icon: '🌐',
    title: 'AI-Powered Websites',
    desc: 'Modern websites with built-in AI — chat widgets, smart forms, auto-responders. Convert visitors into customers.',
    features: ['Next.js + React', 'Built-in AI chatbot', 'SEO optimized', 'Mobile-first design'],
    color: '#F59E0B',
  },
];

const industries = [
  { icon: '💇', name: 'Salons & Spa', use: 'Booking, reminders, reviews' },
  { icon: '🏠', name: 'Real Estate', use: 'Lead capture, property tours' },
  { icon: '🛒', name: 'E-Commerce', use: 'Support, order tracking, upsell' },
  { icon: '🏥', name: 'Healthcare', use: 'Appointments, follow-ups' },
  { icon: '📚', name: 'Education', use: 'Student queries, enrollment' },
  { icon: '🍽️', name: 'Restaurants', use: 'Reservations, menu, delivery' },
  { icon: '💼', name: 'Consulting', use: 'Lead gen, scheduling' },
  { icon: '🏗️', name: 'Construction', use: 'Quotes, project updates' },
];

const process = [
  { step: 1, title: 'Tell Us Your Need', desc: 'What do you want automated? Customer support? Lead gen? Appointments? We listen.' },
  { step: 2, title: 'We Build Your AI', desc: 'Custom chatbot, voice agent, or workflow — trained on your business data, ready in days.' },
  { step: 3, title: 'Connect Your Channels', desc: 'WhatsApp, Telegram, phone, website — your AI works where your customers are.' },
  { step: 4, title: 'Go Live & Grow', desc: 'Your AI runs 24/7. More leads, less work. You focus on your business.' },
];

const pricing = [
  {
    name: 'Starter',
    price: '$299',
    period: 'one-time',
    desc: 'AI chatbot on 1 platform',
    features: ['1 AI chatbot', '1 platform (WhatsApp/Telegram/Web)', 'Basic training on your data', '1 month support', 'Mobile-friendly dashboard'],
    featured: false,
  },
  {
    name: 'Business',
    price: '$999',
    period: 'one-time',
    desc: 'Chatbot + voice agent + automation',
    features: ['AI chatbot + voice agent', '3 platforms connected', 'Custom training & fine-tuning', 'CRM integration', '3 months support', 'Analytics dashboard', 'Priority deployment'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Full AI automation suite',
    features: ['Unlimited chatbots & agents', 'All platforms connected', 'Custom AI model training', 'Full CRM/ERP integration', 'Dedicated support', 'SLA guarantee', 'White-label option'],
    featured: false,
  },
];

const faqs = [
  { q: 'How fast can you deploy?', a: 'Starter chatbots go live in 2-3 days. Voice agents and complex workflows take 5-7 days. Enterprise projects are scoped individually.' },
  { q: 'Do I need any technical knowledge?', a: 'Zero. We handle everything — setup, training, deployment, hosting. You just tell us what you need and we build it.' },
  { q: 'What AI models do you use?', a: 'We use the best model for your use case — GLM-5.1, Claude, GPT-4o, Gemini, Llama, Mistral, and more. Free models available for cost-sensitive projects.' },
  { q: 'Can I upgrade later?', a: 'Absolutely. Start with a chatbot, add a voice agent later. Start on WhatsApp, add Telegram. Scale as you grow.' },
  { q: 'What about ongoing costs?', a: 'Hosting runs $0-20/month depending on usage. Free models (Ollama Cloud) available. No hidden fees — we break down every cost upfront.' },
  { q: 'Is my data safe?', a: 'Yes. Encrypted storage, token-based auth, VCN firewalls. Your data stays on your own cloud instance. We never share or sell data.' },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <main>
      {/* NAV */}
      <nav className="nav">
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #7C3AED, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 800, fontFamily: 'JetBrains Mono, monospace' }}>U</div>
            <span style={{ fontWeight: 700, fontSize: 20, letterSpacing: '-0.02em' }}>UYWNIX</span>
          </div>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <a href="#services" style={{ color: '#6B6B7B', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Services</a>
            <a href="#pricing" style={{ color: '#6B6B7B', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>Pricing</a>
            <a href="#faq" style={{ color: '#6B6B7B', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>FAQ</a>
            <a href="#contact" className="cta-btn" style={{ padding: '10px 24px', fontSize: 14 }}>Get Started</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: 'relative', padding: '120px 24px 80px', textAlign: 'center', overflow: 'hidden' }}>
        <div className="hero-gradient" style={{ position: 'absolute', inset: 0 }} />
        <div className="grid-bg" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 860, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 999, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', fontSize: 13, color: '#A855F7', marginBottom: 24, fontFamily: 'JetBrains Mono, monospace' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', animation: 'pulse-glow 2s infinite' }} />
            AI AUTOMATION FOR BUSINESS
          </div>
          <h1 style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: 24 }}>
            Your Business.<br />
            <span style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7, #C084FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundSize: '200% 200%', animation: 'gradient-shift 4s ease infinite' }}>Powered by AI.</span>
          </h1>
          <p style={{ fontSize: 20, color: '#6B6B7B', lineHeight: 1.6, maxWidth: 560, margin: '0 auto 36px' }}>
            AI chatbots, voice agents, and automation workflows — built for your business, deployed in days, running 24/7.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" className="cta-btn" style={{ fontSize: 18, padding: '16px 36px' }}>Get Your AI Agent →</a>
            <a href="#services" className="cta-btn-outline" style={{ fontSize: 18, padding: '16px 36px' }}>See Services</a>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginTop: 64, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: '#A855F7', fontFamily: 'JetBrains Mono, monospace' }}>{s.value}</div>
                <div style={{ fontSize: 12, color: '#6B6B7B', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO - Terminal style */}
      <section style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div className="code-block">
            <div className="code-header">
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#EF4444' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#F59E0B' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#22C55E' }} />
              <span style={{ fontSize: 12, color: '#6B6B7B', marginLeft: 12, fontFamily: 'JetBrains Mono, monospace' }}>uywnix-terminal</span>
            </div>
            <div className="code-body" style={{ padding: '24px' }}>
              <div><span className="prompt">$</span> <span className="cmd">uywnix deploy --type chatbot --platform whatsapp</span></div>
              <div className="output" style={{ marginTop: 8 }}>
                <div>✓ Training on your business data...</div>
                <div>✓ Connecting to WhatsApp Business API...</div>
                <div>✓ Setting up 24/7 auto-response...</div>
                <div>✓ CRM integration: Active</div>
                <div style={{ color: '#22C55E', marginTop: 8 }}>→ Your AI chatbot is LIVE. Handling customers now.</div>
              </div>
              <div style={{ marginTop: 16 }}><span className="prompt">$</span> <span className="cmd">uywnix deploy --type voice-agent --phone +91XXXXXXXXXX</span></div>
              <div className="output" style={{ marginTop: 8 }}>
                <div>✓ Configuring voice AI model...</div>
                <div>✓ Setting up call routing...</div>
                <div>✓ Appointment booking: Active</div>
                <div style={{ color: '#22C55E', marginTop: 8 }}>→ Your voice agent is LIVE. Answering calls now.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: '80px 24px', background: 'var(--surface)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, color: '#A855F7', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 8 }}>// Services</div>
            <h2 style={{ fontSize: 44, fontWeight: 700, letterSpacing: '-0.03em' }}>What We Build</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
            {services.map((s, i) => (
              <div key={i} className="feature-card" style={{ padding: 36 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: `${s.color}15`, border: `1px solid ${s.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>{s.icon}</div>
                  <h3 style={{ fontSize: 22, fontWeight: 700 }}>{s.title}</h3>
                </div>
                <p style={{ fontSize: 15, color: '#6B6B7B', lineHeight: 1.6, marginBottom: 20 }}>{s.desc}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  {s.features.map((f, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#9CA3AF' }}>
                      <span style={{ color: s.color }}>✓</span> {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, color: '#A855F7', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 8 }}>// Industries</div>
            <h2 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.03em' }}>Built For Your Industry</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {industries.map((ind, i) => (
              <div key={i} className="feature-card" style={{ padding: 24, textAlign: 'center' }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>{ind.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{ind.name}</div>
                <div style={{ fontSize: 12, color: '#6B6B7B' }}>{ind.use}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '80px 24px', background: 'var(--surface)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, color: '#A855F7', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 8 }}>// Process</div>
            <h2 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.03em' }}>How It Works</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {process.map((p, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(168,85,247,0.05))', border: '1px solid rgba(124,58,237,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 700, color: '#A855F7', margin: '0 auto 16px', fontFamily: 'JetBrains Mono, monospace' }}>{p.step}</div>
                <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{p.title}</h4>
                <p style={{ fontSize: 14, color: '#6B6B7B', lineHeight: 1.5 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, color: '#A855F7', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 8 }}>// Pricing</div>
            <h2 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.03em' }}>Simple Pricing. No Surprises.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {pricing.map((p, i) => (
              <div key={i} className={`pricing-card ${p.featured ? 'featured' : ''}`} style={{ position: 'relative' }}>
                {p.featured && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', padding: '4px 16px', borderRadius: 999, background: 'linear-gradient(135deg, #7C3AED, #A855F7)', fontSize: 12, fontWeight: 600, color: 'white' }}>MOST POPULAR</div>}
                <div style={{ marginBottom: 24 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{p.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                    <span style={{ fontSize: 40, fontWeight: 800, fontFamily: 'JetBrains Mono, monospace' }}>{p.price}</span>
                    {p.period && <span style={{ fontSize: 14, color: '#6B6B7B' }}>{p.period}</span>}
                  </div>
                  <p style={{ fontSize: 14, color: '#6B6B7B', marginTop: 4 }}>{p.desc}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
                  {p.features.map((f, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
                      <span style={{ color: '#22C55E' }}>✓</span> {f}
                    </div>
                  ))}
                </div>
                <a href="#contact" className={p.featured ? 'cta-btn' : 'cta-btn-outline'} style={{ width: '100%', justifyContent: 'center', padding: '14px 24px' }}>
                  {p.price === 'Custom' ? 'Contact Us' : 'Get Started'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '80px 24px', background: 'var(--surface)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, color: '#A855F7', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 8 }}>// FAQ</div>
            <h2 style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.03em' }}>Questions?</h2>
          </div>
          {faqs.map((f, i) => (
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

      {/* CONTACT / CTA */}
      <section id="contact" style={{ padding: '100px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-gradient" style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 16 }}>Ready to Automate?</h2>
          <p style={{ fontSize: 18, color: '#6B6B7B', marginBottom: 32 }}>Tell us what you need. We will build it.</p>
          
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 20, padding: 36, textAlign: 'left' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Name</label>
                <input type="text" placeholder="Your name" style={{ width: '100%', padding: '12px 16px', borderRadius: 10, background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: 14, outline: 'none', fontFamily: 'Inter, sans-serif' }} />
              </div>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Phone / WhatsApp</label>
                <input type="text" placeholder="+91 XXXXX XXXXX" style={{ width: '100%', padding: '12px 16px', borderRadius: 10, background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: 14, outline: 'none', fontFamily: 'Inter, sans-serif' }} />
              </div>
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Business Type</label>
              <select style={{ width: '100%', padding: '12px 16px', borderRadius: 10, background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: 14, outline: 'none', fontFamily: 'Inter, sans-serif' }}>
                <option>Salon & Spa</option>
                <option>Real Estate</option>
                <option>E-Commerce</option>
                <option>Healthcare</option>
                <option>Restaurant</option>
                <option>Education</option>
                <option>Other</option>
              </select>
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>What do you need?</label>
              <textarea rows={3} placeholder="AI chatbot for WhatsApp, voice agent for calls, website with AI..." style={{ width: '100%', padding: '12px 16px', borderRadius: 10, background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)', fontSize: 14, outline: 'none', resize: 'vertical', fontFamily: 'Inter, sans-serif' }} />
            </div>
            <button className="cta-btn" style={{ width: '100%', justifyContent: 'center', fontSize: 16, padding: '16px 32px' }}>Send Inquiry →</button>
            <p style={{ textAlign: 'center', fontSize: 12, color: '#6B6B7B', marginTop: 12 }}>Or email us at contact@uywnix.com</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.04)', padding: '40px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #7C3AED, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 800, fontFamily: 'JetBrains Mono, monospace' }}>U</div>
            <span style={{ fontWeight: 600, fontSize: 16 }}>UYWNIX</span>
            <span style={{ fontSize: 12, color: '#6B6B7B', marginLeft: 8 }}>AI Automation for Business</span>
          </div>
          <div style={{ display: 'flex', gap: 20, fontSize: 13, color: '#6B6B7B' }}>
            <span>Delhi NCR, India</span>
            <a href="mailto:contact@uywnix.com" style={{ color: '#6B6B7B', textDecoration: 'none' }}>contact@uywnix.com</a>
            <a href="https://uywnix.com" style={{ color: '#6B6B7B', textDecoration: 'none' }}>uywnix.com</a>
          </div>
        </div>
      </footer>
    </main>
  );
}