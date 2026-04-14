'use client';
import { useState } from 'react';

// ==================== DATA ====================
const models = [
  { id: 'glm-5.1', name: 'GLM-5.1', provider: 'Ollama Cloud', free: true },
  { id: 'llama4', name: 'Llama 4', provider: 'Ollama Cloud', free: true },
  { id: 'mistral-large', name: 'Mistral Large', provider: 'Ollama Cloud', free: true },
  { id: 'qwen3', name: 'Qwen 3', provider: 'Ollama Cloud', free: true },
  { id: 'deepseek-r1', name: 'DeepSeek R1', provider: 'Ollama Cloud', free: true },
  { id: 'claude-4-sonnet', name: 'Claude 4 Sonnet', provider: 'Anthropic', free: false },
  { id: 'gpt-4o', name: 'GPT-4o', provider: 'OpenAI', free: false },
  { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro', provider: 'Google', free: false },
];

const platforms = [
  { id: 'telegram', name: 'Telegram', icon: '✈️', status: 'available' },
  { id: 'whatsapp', name: 'WhatsApp', icon: '💬', status: 'available' },
  { id: 'discord', name: 'Discord', icon: '🎮', status: 'available' },
  { id: 'webchat', name: 'WebChat', icon: '🌐', status: 'available' },
  { id: 'slack', name: 'Slack', icon: '💼', status: 'coming' },
];

// ==================== AUTH SCREEN ====================
function AuthScreen({ onLogin }) {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ name: name || email.split('@')[0], email });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050507' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 30%, rgba(124,58,237,0.2) 0%, transparent 60%)' }} />
      <div style={{ position: 'relative', zIndex: 1, width: 400, maxWidth: '90vw' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, background: 'linear-gradient(135deg, #7C3AED, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, fontWeight: 800, margin: '0 auto 16px', fontFamily: 'JetBrains Mono, monospace' }}>U</div>
          <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 4 }}>UYWNIX Claw</h1>
          <p style={{ color: '#6B6B7B', fontSize: 14 }}>Your 24/7 AI agent platform</p>
        </div>
        <form onSubmit={handleSubmit} style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 32 }}>
          {isSignup && (
            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Full Name</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Husayn" required style={{ width: '100%', padding: '12px 16px', borderRadius: 10, background: '#050507', border: '1px solid rgba(255,255,255,0.06)', color: '#E8E8ED', fontSize: 14, outline: 'none', fontFamily: 'Inter, sans-serif' }} />
            </div>
          )}
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@email.com" required style={{ width: '100%', padding: '12px 16px', borderRadius: 10, background: '#050507', border: '1px solid rgba(255,255,255,0.06)', color: '#E8E8ED', fontSize: 14, outline: 'none', fontFamily: 'Inter, sans-serif' }} />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required style={{ width: '100%', padding: '12px 16px', borderRadius: 10, background: '#050507', border: '1px solid rgba(255,255,255,0.06)', color: '#E8E8ED', fontSize: 14, outline: 'none', fontFamily: 'Inter, sans-serif' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #7C3AED, #A855F7)', color: 'white', border: 'none', borderRadius: 12, fontSize: 16, fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
            {isSignup ? 'Create Account' : 'Sign In'}
          </button>
          <p style={{ textAlign: 'center', fontSize: 13, color: '#6B6B7B', marginTop: 16 }}>
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <span onClick={() => setIsSignup(!isSignup)} style={{ color: '#A855F7', cursor: 'pointer', fontWeight: 500 }}>
              {isSignup ? 'Sign In' : 'Sign Up'}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

// ==================== DASHBOARD ====================
function Dashboard({ user, onLogout }) {
  const [agents, setAgents] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [selectedModel, setSelectedModel] = useState('glm-5.1');
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [agentName, setAgentName] = useState('');
  const [deploying, setDeploying] = useState(false);
  const [view, setView] = useState('dashboard'); // dashboard, create, agent

  const handleDeploy = () => {
    if (!agentName) return;
    setDeploying(true);
    setTimeout(() => {
      const newAgent = {
        id: Date.now(),
        name: agentName,
        model: selectedModel,
        platforms: [...selectedPlatforms],
        status: 'running',
        created: new Date().toLocaleDateString(),
        messages: 0,
      };
      setAgents(prev => [...prev, newAgent]);
      setDeploying(false);
      setShowCreate(false);
      setAgentName('');
      setSelectedPlatforms([]);
      setView('dashboard');
    }, 2500);
  };

  const toggleAgent = (id) => {
    setAgents(prev => prev.map(a => a.id === id ? { ...a, status: a.status === 'running' ? 'stopped' : 'running' } : a));
  };

  const deleteAgent = (id) => {
    setAgents(prev => prev.filter(a => a.id !== id));
  };

  return (
    <div style={{ minHeight: '100vh', background: '#050507' }}>
      {/* Sidebar */}
      <div style={{ position: 'fixed', left: 0, top: 0, bottom: 0, width: 220, background: '#0A0A10', borderRight: '1px solid rgba(255,255,255,0.06)', padding: '20px 16px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 32 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #7C3AED, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 800, fontFamily: 'JetBrains Mono, monospace' }}>U</div>
          <span style={{ fontWeight: 700, fontSize: 16 }}>UYWNIX Claw</span>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
          {[
            { id: 'dashboard', label: 'Dashboard', icon: '📊' },
            { id: 'create', label: 'New Agent', icon: '⚡' },
            { id: 'models', label: 'Models', icon: '🧠' },
            { id: 'settings', label: 'Settings', icon: '⚙️' },
          ].map(item => (
            <button key={item.id} onClick={() => item.id === 'create' ? (setShowCreate(true), setView('create')) : setView(item.id)} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10,
              background: view === item.id ? 'rgba(124,58,237,0.1)' : 'transparent',
              border: 'none', color: view === item.id ? '#A855F7' : '#6B6B7B', fontSize: 14, fontWeight: 500,
              cursor: 'pointer', textAlign: 'left', fontFamily: 'Inter, sans-serif', transition: 'all 0.2s',
            }}>
              <span>{item.icon}</span> {item.label}
            </button>
          ))}
        </nav>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #7C3AED, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600 }}>{user.name[0].toUpperCase()}</div>
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <div style={{ fontSize: 13, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.name}</div>
            <div style={{ fontSize: 11, color: '#6B6B7B', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.email}</div>
          </div>
          <button onClick={onLogout} style={{ background: 'none', border: 'none', color: '#6B6B7B', cursor: 'pointer', fontSize: 16 }}>→</button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: 220, padding: '24px 32px' }}>
        {/* DASHBOARD VIEW */}
        {view === 'dashboard' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <div>
                <h1 style={{ fontSize: 28, fontWeight: 700 }}>Dashboard</h1>
                <p style={{ color: '#6B6B7B', fontSize: 14, marginTop: 4 }}>Welcome back, {user.name}</p>
              </div>
              <button onClick={() => { setShowCreate(true); setView('create'); }} className="cta-btn" style={{ padding: '10px 20px', fontSize: 14 }}>+ New Agent</button>
            </div>

            {/* Stats Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 }}>
              {[
                { label: 'Active Agents', value: agents.filter(a => a.status === 'running').length, icon: '⚡', color: '#22C55E' },
                { label: 'Total Agents', value: agents.length, icon: '🤖', color: '#7C3AED' },
                { label: 'Messages', value: agents.reduce((sum, a) => sum + a.messages, 0), icon: '💬', color: '#3B82F6' },
                { label: 'Platforms', value: new Set(agents.flatMap(a => a.platforms)).size, icon: '🌐', color: '#F59E0B' },
              ].map((s, i) => (
                <div key={i} style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: 20 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 12, color: '#6B6B7B', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</span>
                    <span style={{ fontSize: 18 }}>{s.icon}</span>
                  </div>
                  <div style={{ fontSize: 28, fontWeight: 700, color: s.color, fontFamily: 'JetBrains Mono, monospace', marginTop: 8 }}>{s.value}</div>
                </div>
              ))}
            </div>

            {/* Agent List */}
            {agents.length === 0 ? (
              <div style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 60, textAlign: 'center' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🦞</div>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8 }}>No agents yet</h3>
                <p style={{ color: '#6B6B7B', fontSize: 14, marginBottom: 24 }}>Deploy your first AI agent in 60 seconds</p>
                <button onClick={() => { setShowCreate(true); setView('create'); }} className="cta-btn" style={{ padding: '12px 28px', fontSize: 14 }}>⚡ Create Your First Agent</button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {agents.map(agent => (
                  <div key={agent.id} style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: agent.status === 'running' ? '#22C55E' : '#6B6B7B', boxShadow: agent.status === 'running' ? '0 0 10px rgba(34,197,94,0.5)' : 'none' }} />
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 15 }}>{agent.name}</div>
                        <div style={{ fontSize: 12, color: '#6B6B7B', marginTop: 2 }}>{models.find(m => m.id === agent.model)?.name} · {agent.platforms.map(p => platforms.find(pl => pl.id === p)?.name).join(', ') || 'No platform'}</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <span style={{ fontSize: 12, padding: '4px 10px', borderRadius: 999, background: agent.status === 'running' ? 'rgba(34,197,94,0.1)' : 'rgba(107,107,123,0.1)', color: agent.status === 'running' ? '#22C55E' : '#6B6B7B', fontWeight: 600, letterSpacing: '0.05em' }}>{agent.status.toUpperCase()}</span>
                      <button onClick={() => toggleAgent(agent.id)} style={{ padding: '8px 14px', borderRadius: 8, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', color: '#E8E8ED', cursor: 'pointer', fontSize: 12, fontFamily: 'Inter, sans-serif' }}>
                        {agent.status === 'running' ? 'Stop' : 'Start'}
                      </button>
                      <button onClick={() => deleteAgent(agent.id)} style={{ padding: '8px 14px', borderRadius: 8, background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#EF4444', cursor: 'pointer', fontSize: 12, fontFamily: 'Inter, sans-serif' }}>
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* CREATE AGENT VIEW */}
        {view === 'create' && (
          <div style={{ maxWidth: 640 }}>
            <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Create New Agent</h1>
            <p style={{ color: '#6B6B7B', fontSize: 14, marginBottom: 32 }}>Deploy your AI agent in 60 seconds</p>

            <div style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 32 }}>
              {/* Agent Name */}
              <div style={{ marginBottom: 24 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>Agent Name</label>
                <input type="text" value={agentName} onChange={e => setAgentName(e.target.value)} placeholder="My AI Assistant" style={{ width: '100%', padding: '12px 16px', borderRadius: 10, background: '#050507', border: '1px solid rgba(255,255,255,0.06)', color: '#E8E8ED', fontSize: 14, outline: 'none', fontFamily: 'Inter, sans-serif' }} />
              </div>

              {/* Model Selection */}
              <div style={{ marginBottom: 24 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>Choose Model</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
                  {models.map(m => (
                    <button key={m.id} onClick={() => setSelectedModel(m.id)} style={{
                      padding: '12px 14px', borderRadius: 10,
                      border: selectedModel === m.id ? '1px solid #7C3AED' : '1px solid rgba(255,255,255,0.06)',
                      background: selectedModel === m.id ? 'rgba(124,58,237,0.08)' : 'transparent',
                      cursor: 'pointer', transition: 'all 0.2s', textAlign: 'left', color: 'white', fontFamily: 'Inter, sans-serif',
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 14, fontWeight: 600 }}>{m.name}</span>
                        {m.free && <span style={{ fontSize: 10, padding: '2px 6px', borderRadius: 4, background: 'rgba(34,197,94,0.1)', color: '#22C55E', fontWeight: 700 }}>FREE</span>}
                      </div>
                      <div style={{ fontSize: 11, color: '#6B6B7B', marginTop: 2 }}>{m.provider}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Platform Selection */}
              <div style={{ marginBottom: 28 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>Connect Platforms</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
                  {platforms.map(p => (
                    <button key={p.id} onClick={() => {
                      if (p.status === 'available') setSelectedPlatforms(prev => prev.includes(p.id) ? prev.filter(x => x !== p.id) : [...prev, p.id]);
                    }} style={{
                      padding: '14px 8px', borderRadius: 10,
                      border: selectedPlatforms.includes(p.id) ? '1px solid #7C3AED' : '1px solid rgba(255,255,255,0.06)',
                      background: selectedPlatforms.includes(p.id) ? 'rgba(124,58,237,0.08)' : 'transparent',
                      cursor: p.status === 'available' ? 'pointer' : 'not-allowed',
                      opacity: p.status === 'coming' ? 0.4 : 1,
                      textAlign: 'center', color: 'white', fontFamily: 'Inter, sans-serif', transition: 'all 0.2s',
                    }}>
                      <div style={{ fontSize: 22 }}>{p.icon}</div>
                      <div style={{ fontSize: 11, fontWeight: 500, marginTop: 4 }}>{p.name}</div>
                      {selectedPlatforms.includes(p.id) && <div style={{ fontSize: 9, color: '#22C55E', marginTop: 2 }}>Connected</div>}
                      {p.status === 'coming' && <div style={{ fontSize: 9, color: '#6B6B7B', marginTop: 2 }}>Soon</div>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Deploy */}
              <button onClick={handleDeploy} disabled={!agentName || deploying} style={{
                width: '100%', padding: '16px', background: (!agentName || deploying) ? '#1A1A24' : 'linear-gradient(135deg, #7C3AED, #A855F7)',
                color: 'white', border: 'none', borderRadius: 12, fontSize: 16, fontWeight: 600,
                cursor: (!agentName || deploying) ? 'not-allowed' : 'pointer', fontFamily: 'Inter, sans-serif', transition: 'all 0.3s',
              }}>
                {deploying ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
                    <span style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'inline-block' }} />
                    Provisioning...
                  </span>
                ) : (
                  '⚡ Deploy Agent'
                )}
              </button>
            </div>
          </div>
        )}

        {/* MODELS VIEW */}
        {view === 'models' && (
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>AI Models</h1>
            <p style={{ color: '#6B6B7B', fontSize: 14, marginBottom: 32 }}>500+ models available. Free models need no API key.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
              {models.map(m => (
                <div key={m.id} style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: 20 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <span style={{ fontWeight: 600, fontSize: 16 }}>{m.name}</span>
                    {m.free ? (
                      <span style={{ fontSize: 11, padding: '3px 8px', borderRadius: 999, background: 'rgba(34,197,94,0.1)', color: '#22C55E', fontWeight: 700 }}>FREE</span>
                    ) : (
                      <span style={{ fontSize: 11, padding: '3px 8px', borderRadius: 999, background: 'rgba(249,115,22,0.1)', color: '#F97316', fontWeight: 600 }}>BYOK</span>
                    )}
                  </div>
                  <div style={{ fontSize: 13, color: '#6B6B7B' }}>Provider: {m.provider}</div>
                  <div style={{ fontSize: 12, color: m.free ? '#22C55E' : '#F97316', marginTop: 8 }}>{m.free ? 'No API key needed' : 'Bring your own API key'}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SETTINGS VIEW */}
        {view === 'settings' && (
          <div style={{ maxWidth: 560 }}>
            <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Settings</h1>
            <p style={{ color: '#6B6B7B', fontSize: 14, marginBottom: 32 }}>Account & API configuration</p>
            <div style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>API Keys</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Anthropic (Claude)', 'OpenAI (GPT)', 'Google (Gemini)'].map(key => (
                  <div key={key} style={{ display: 'flex', gap: 10 }}>
                    <input type="password" placeholder={`Enter ${key} API key`} style={{ flex: 1, padding: '10px 14px', borderRadius: 8, background: '#050507', border: '1px solid rgba(255,255,255,0.06)', color: '#E8E8ED', fontSize: 13, outline: 'none', fontFamily: 'Inter, sans-serif' }} />
                    <button style={{ padding: '10px 16px', borderRadius: 8, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', color: '#A855F7', cursor: 'pointer', fontSize: 12, fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>Save</button>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 12, color: '#6B6B7B', marginTop: 12 }}>Free models (Ollama Cloud) work without any API key.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ==================== MAIN APP ====================
export default function Home() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <AuthScreen onLogin={setUser} />;
  }

  return <Dashboard user={user} onLogout={() => setUser(null)} />;
}