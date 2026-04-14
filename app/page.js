'use client';
import { useState, useEffect } from 'react';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

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

// ─── Auth Screen ───
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
      const res = await fetch(`${API}/auth/${mode}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Auth failed');
      localStorage.setItem('token', data.token);
      onAuth(data.user, data.token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050507' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 30%, rgba(124,58,237,0.2) 0%, transparent 60%)' }} />
      <div style={{ position: 'relative', zIndex: 1, width: 420, maxWidth: '90vw' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: 'linear-gradient(135deg, #7C3AED, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 800, margin: '0 auto 16px', fontFamily: 'JetBrains Mono, monospace', boxShadow: '0 0 40px rgba(124,58,237,0.3)' }}>🦞</div>
          <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em' }}>UYWNIX Claw</h1>
          <p style={{ color: '#6B6B7B', fontSize: 14, marginTop: 4 }}>Your personal 24/7 AI agent platform</p>
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

// ─── Dashboard ───
function Dashboard({ user, token, onLogout }) {
  const [agents, setAgents] = useState([]);
  const [stats, setStats] = useState({ activeAgents: 0, totalAgents: 0, platforms: 0, messages: 0 });
  const [view, setView] = useState('dashboard');
  const [loading, setLoading] = useState(true);

  // Create agent form state
  const [agentName, setAgentName] = useState('');
  const [selectedModel, setSelectedModel] = useState('glm-5.1');
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [deploying, setDeploying] = useState(false);

  const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };

  const fetchAgents = async () => {
    try {
      const res = await fetch(`${API}/agents`, { headers });
      const data = await res.json();
      setAgents(data.agents || []);
    } catch {}
  };

  const fetchStats = async () => {
    try {
      const res = await fetch(`${API}/stats`, { headers });
      const data = await res.json();
      setStats(data);
    } catch {}
  };

  useEffect(() => { fetchAgents().then(() => setLoading(false)); fetchStats(); }, []);

  const createAgent = async () => {
    if (!agentName) return;
    setDeploying(true);
    try {
      const res = await fetch(`${API}/agents`, { method: 'POST', headers, body: JSON.stringify({ name: agentName, model: selectedModel, platforms: selectedPlatforms }) });
      const data = await res.json();
      if (data.agent) { setAgents(prev => [data.agent, ...prev]); setAgentName(''); setSelectedPlatforms([]); setView('dashboard'); }
    } catch {}
    setDeploying(false);
    fetchStats();
  };

  const toggleAgent = async (id, currentStatus) => {
    const newStatus = currentStatus === 'running' ? 'stopped' : 'running';
    try {
      await fetch(`${API}/agents/${id}`, { method: 'PATCH', headers, body: JSON.stringify({ status: newStatus }) });
      setAgents(prev => prev.map(a => a.id === id ? { ...a, status: newStatus } : a));
    } catch {}
    fetchStats();
  };

  const deleteAgent = async (id) => {
    try {
      await fetch(`${API}/agents/${id}`, { method: 'DELETE', headers });
      setAgents(prev => prev.filter(a => a.id !== id));
    } catch {}
    fetchStats();
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'create', label: 'New Agent', icon: '⚡' },
    { id: 'models', label: 'Models', icon: '🧠' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#050507', display: 'flex' }}>
      {/* Sidebar */}
      <div style={{ width: 240, background: '#0A0A10', borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', position: 'fixed', top: 0, bottom: 0, left: 0 }}>
        <div style={{ padding: '20px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #7C3AED, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🦞</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 16, letterSpacing: '-0.01em' }}>UYWNIX</div>
            <div style={{ fontSize: 10, color: '#6B6B7B', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Claw</div>
          </div>
        </div>
        <nav style={{ padding: '8px 12px', flex: 1 }}>
          {navItems.map(item => (
            <button key={item.id} onClick={() => setView(item.id)} style={{
              display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '10px 14px', borderRadius: 10,
              background: view === item.id ? 'rgba(124,58,237,0.12)' : 'transparent',
              border: 'none', color: view === item.id ? '#A855F7' : '#6B6B7B', fontSize: 14, fontWeight: view === item.id ? 600 : 400,
              cursor: 'pointer', textAlign: 'left', fontFamily: 'Inter, sans-serif', marginBottom: 4, transition: 'all 0.15s',
            }}>
              <span>{item.icon}</span> {item.label}
            </button>
          ))}
        </nav>
        <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg, #7C3AED, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700 }}>{user.name?.[0]?.toUpperCase() || 'U'}</div>
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <div style={{ fontSize: 13, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.name}</div>
            <div style={{ fontSize: 11, color: '#6B6B7B', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.email}</div>
          </div>
          <button onClick={onLogout} style={{ background: 'none', border: 'none', color: '#6B6B7B', cursor: 'pointer', fontSize: 18, padding: 4 }} title="Sign out">→</button>
        </div>
      </div>

      {/* Main */}
      <div style={{ marginLeft: 240, flex: 1, padding: '32px 40px', minHeight: '100vh' }}>
        {/* DASHBOARD */}
        {view === 'dashboard' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
              <div>
                <h1 style={{ fontSize: 28, fontWeight: 700 }}>Welcome back, {user.name?.split(' ')[0]}</h1>
                <p style={{ color: '#6B6B7B', fontSize: 14, marginTop: 4 }}>{agents.length === 0 ? 'Deploy your first AI agent in 60 seconds' : `${stats.activeAgents} active agent${stats.activeAgents !== 1 ? 's' : ''}`}</p>
              </div>
              <button onClick={() => setView('create')} style={{ padding: '12px 24px', background: 'linear-gradient(135deg, #7C3AED, #A855F7)', color: 'white', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>+ New Agent</button>
            </div>
            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 }}>
              {[
                { label: 'Active', value: stats.activeAgents, icon: '⚡', color: '#22C55E' },
                { label: 'Total', value: stats.totalAgents, icon: '🤖', color: '#7C3AED' },
                { label: 'Platforms', value: stats.platforms, icon: '💬', color: '#3B82F6' },
                { label: 'Messages', value: stats.messages, icon: '📨', color: '#F59E0B' },
              ].map((s, i) => (
                <div key={i} style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 22 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 12, color: '#6B6B7B', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{s.label}</span>
                    <span style={{ fontSize: 20 }}>{s.icon}</span>
                  </div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: s.color, fontFamily: 'JetBrains Mono, monospace', marginTop: 8 }}>{s.value}</div>
                </div>
              ))}
            </div>
            {/* Agents list or empty state */}
            {agents.length === 0 ? (
              <div style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 80, textAlign: 'center' }}>
                <div style={{ fontSize: 56, marginBottom: 20 }}>🦞</div>
                <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 8 }}>No agents yet</h2>
                <p style={{ color: '#6B6B7B', fontSize: 15, marginBottom: 28, maxWidth: 360, marginLeft: 'auto', marginRight: 'auto' }}>Deploy your first AI agent. It takes 60 seconds and runs 24/7.</p>
                <button onClick={() => setView('create')} style={{ padding: '14px 32px', background: 'linear-gradient(135deg, #7C3AED, #A855F7)', color: 'white', border: 'none', borderRadius: 12, fontSize: 16, fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>⚡ Create First Agent</button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {agents.map(agent => (
                  <div key={agent.id} style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 14, padding: '18px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <div style={{ width: 10, height: 10, borderRadius: '50%', background: agent.status === 'running' ? '#22C55E' : '#6B6B7B', boxShadow: agent.status === 'running' ? '0 0 12px rgba(34,197,94,0.5)' : 'none' }} />
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 15 }}>{agent.name}</div>
                        <div style={{ fontSize: 12, color: '#6B6B7B', marginTop: 2 }}>{MODELS.find(m => m.id === agent.model)?.name || agent.model} · {(agent.platforms || []).map(p => PLATFORMS.find(pl => pl.id === p)?.name).filter(Boolean).join(', ') || 'No platform'}</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: 11, padding: '4px 10px', borderRadius: 999, background: agent.status === 'running' ? 'rgba(34,197,94,0.1)' : 'rgba(107,107,123,0.1)', color: agent.status === 'running' ? '#22C55E' : '#6B6B7B', fontWeight: 600, letterSpacing: '0.05em' }}>{agent.status?.toUpperCase()}</span>
                      <button onClick={() => toggleAgent(agent.id, agent.status)} style={{ padding: '7px 14px', borderRadius: 8, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#E8E8ED', cursor: 'pointer', fontSize: 12, fontFamily: 'Inter, sans-serif' }}>{agent.status === 'running' ? 'Stop' : 'Start'}</button>
                      <button onClick={() => deleteAgent(agent.id)} style={{ padding: '7px 14px', borderRadius: 8, background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)', color: '#EF4444', cursor: 'pointer', fontSize: 12, fontFamily: 'Inter, sans-serif' }}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* CREATE */}
        {view === 'create' && (
          <div style={{ maxWidth: 600 }}>
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
                  {MODELS.map(m => (
                    <button key={m.id} onClick={() => setSelectedModel(m.id)} style={{ padding: '14px', borderRadius: 12, border: selectedModel === m.id ? '1px solid #7C3AED' : '1px solid rgba(255,255,255,0.06)', background: selectedModel === m.id ? 'rgba(124,58,237,0.08)' : 'transparent', cursor: 'pointer', textAlign: 'left', color: 'white', fontFamily: 'Inter, sans-serif', transition: 'all 0.15s' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: 14, fontWeight: 600 }}>{m.name}</span>
                        {m.free && <span style={{ fontSize: 10, padding: '2px 7px', borderRadius: 4, background: 'rgba(34,197,94,0.1)', color: '#22C55E', fontWeight: 700 }}>FREE</span>}
                      </div>
                      <div style={{ fontSize: 11, color: '#6B6B7B', marginTop: 2 }}>{m.provider}</div>
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: 28 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>Connect Platforms</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
                  {PLATFORMS.map(p => (
                    <button key={p.id} onClick={() => setSelectedPlatforms(prev => prev.includes(p.id) ? prev.filter(x => x !== p.id) : [...prev, p.id])} style={{ padding: '14px 8px', borderRadius: 12, border: selectedPlatforms.includes(p.id) ? '1px solid #7C3AED' : '1px solid rgba(255,255,255,0.06)', background: selectedPlatforms.includes(p.id) ? 'rgba(124,58,237,0.08)' : 'transparent', cursor: 'pointer', textAlign: 'center', color: 'white', fontFamily: 'Inter, sans-serif', transition: 'all 0.15s' }}>
                      <div style={{ fontSize: 22 }}>{p.icon}</div>
                      <div style={{ fontSize: 11, fontWeight: 500, marginTop: 4 }}>{p.name}</div>
                      {selectedPlatforms.includes(p.id) && <div style={{ fontSize: 9, color: '#22C55E', marginTop: 2, fontWeight: 600 }}>Connected</div>}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={createAgent} disabled={!agentName || deploying} style={{ width: '100%', padding: '16px', background: (!agentName || deploying) ? '#1A1A24' : 'linear-gradient(135deg, #7C3AED, #A855F7)', color: 'white', border: 'none', borderRadius: 12, fontSize: 16, fontWeight: 700, cursor: (!agentName || deploying) ? 'not-allowed' : 'pointer', fontFamily: 'Inter, sans-serif', transition: 'all 0.3s' }}>
                {deploying ? 'Provisioning...' : '⚡ Deploy Agent'}
              </button>
            </div>
          </div>
        )}

        {/* MODELS */}
        {view === 'models' && (
          <>
            <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 4 }}>AI Models</h1>
            <p style={{ color: '#6B6B7B', fontSize: 14, marginBottom: 32 }}>500+ models. Free ones need no API key.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
              {MODELS.map(m => (
                <div key={m.id} style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 24 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <span style={{ fontWeight: 600, fontSize: 17 }}>{m.name}</span>
                    {m.free ? <span style={{ fontSize: 11, padding: '4px 10px', borderRadius: 999, background: 'rgba(34,197,94,0.1)', color: '#22C55E', fontWeight: 700 }}>FREE</span> : <span style={{ fontSize: 11, padding: '4px 10px', borderRadius: 999, background: 'rgba(249,115,22,0.1)', color: '#F97316', fontWeight: 600 }}>BYOK</span>}
                  </div>
                  <div style={{ fontSize: 13, color: '#6B6B7B' }}>Provider: {m.provider}</div>
                  <div style={{ fontSize: 12, color: m.free ? '#22C55E' : '#F97316', marginTop: 8 }}>{m.free ? 'No API key needed' : 'Bring your own API key'}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* SETTINGS */}
        {view === 'settings' && (
          <div style={{ maxWidth: 560 }}>
            <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 4 }}>Settings</h1>
            <p style={{ color: '#6B6B7B', fontSize: 14, marginBottom: 32 }}>API keys & account</p>
            <div style={{ background: '#0A0A10', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: 28 }}>
              <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>API Keys</h3>
              <p style={{ fontSize: 13, color: '#6B6B7B', marginBottom: 20 }}>Free models work without keys. Add keys for Claude, GPT-4o, Gemini.</p>
              {['Anthropic (Claude)', 'OpenAI (GPT)', 'Google (Gemini)'].map(key => (
                <div key={key} style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
                  <input type="password" placeholder={`${key} API key`} style={{ flex: 1, padding: '12px 14px', borderRadius: 10, background: '#050507', border: '1px solid rgba(255,255,255,0.08)', color: '#E8E8ED', fontSize: 13, outline: 'none', fontFamily: 'Inter, sans-serif' }} />
                  <button style={{ padding: '10px 18px', borderRadius: 10, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', color: '#A855F7', cursor: 'pointer', fontSize: 13, fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>Save</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main ───
export default function Home() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const t = localStorage.getItem('token');
    if (t) {
      setToken(t);
      fetch(`${API}/auth/me`, { headers: { Authorization: `Bearer ${t}` } })
        .then(r => r.json())
        .then(data => { if (data.user) setUser(data.user); })
        .catch(() => localStorage.removeItem('token'));
    }
  }, []);

  const handleAuth = (u, t) => { setUser(u); setToken(t); };
  const handleLogout = () => { localStorage.removeItem('token'); setUser(null); setToken(null); };

  if (!user) return <AuthScreen onAuth={handleAuth} />;
  return <Dashboard user={user} token={token} onLogout={handleLogout} />;
}