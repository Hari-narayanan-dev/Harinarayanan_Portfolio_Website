import { useState, useRef, useEffect } from "react";

// const API_URL = "http://localhost:8000/api/chat";
const API_URL = "https://harinarayanan-portfolio-website.onrender.com/api/chat";

/* ─── Keyframes injected once ────────────────────────────────────────────── */
const KEYFRAMES = `
  @keyframes slideUp   { from { opacity:0; transform:translateY(20px) scale(.97) } to { opacity:1; transform:translateY(0) scale(1) } }
  @keyframes slideDown { from { opacity:1; transform:translateY(0) scale(1) }      to { opacity:0; transform:translateY(20px) scale(.97) } }
  @keyframes msgIn     { from { opacity:0; transform:translateY(8px) }             to { opacity:1; transform:translateY(0) } }
  @keyframes ripple    { 0%{transform:scale(1);opacity:.7} 100%{transform:scale(2);opacity:0} }
  @keyframes orbitA    { from{transform:rotate(0deg)   translateX(11px) rotate(0deg)}   to{transform:rotate(360deg)  translateX(11px) rotate(-360deg)} }
  @keyframes orbitB    { from{transform:rotate(120deg) translateX(11px) rotate(-120deg)} to{transform:rotate(480deg) translateX(11px) rotate(-480deg)} }
  @keyframes orbitC    { from{transform:rotate(240deg) translateX(11px) rotate(-240deg)} to{transform:rotate(600deg) translateX(11px) rotate(-600deg)} }
  @keyframes corePulse { 0%,100%{r:4.5;opacity:.9} 50%{r:5.5;opacity:1} }
  @keyframes dotBounce { 0%,80%,100%{transform:translateY(0);opacity:.4} 40%{transform:translateY(-5px);opacity:1} }
  @keyframes statusGlow{ 0%,100%{opacity:1} 50%{opacity:.4} }
  @keyframes fabSpin   { from{transform:rotate(-90deg) scale(.5);opacity:0} to{transform:rotate(0deg) scale(1);opacity:1} }
`;
let injected = false;
function injectKeyframes() {
  if (injected || typeof document === "undefined") return;
  const s = document.createElement("style");
  s.textContent = KEYFRAMES;
  document.head.appendChild(s);
  injected = true;
}

/* ─── AI Orbit Icon (FAB) ──────────────────────────────────────────────────
   Three coloured dots orbiting a glowing core — unmistakably "AI"          */
function AIOrbitIcon({ size = 28 }) {
  const orbitAnims = ["orbitA", "orbitB", "orbitC"];
  const colors = ["#a78bfa", "#60a5fa", "#f472b6"];
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" style={{ animation: "fabSpin .35s ease-out" }}>
      <defs>
        <radialGradient id="coreG" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e0e7ff" />
          <stop offset="100%" stopColor="#6366f1" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* Faint orbit rings */}
      <circle cx="16" cy="16" r="11" stroke="rgba(165,180,252,0.15)" strokeWidth=".8" strokeDasharray="3 2" />
      <circle cx="16" cy="16" r="7"  stroke="rgba(165,180,252,0.1)"  strokeWidth=".6" />
      {/* Orbiting dots */}
      {orbitAnims.map((anim, i) => (
        <g key={i} style={{ transformOrigin:"16px 16px", animation:`${anim} ${2.4 + i*0.4}s linear infinite` }}>
          <circle cx="16" cy="16" r="2.2" fill={colors[i]} filter="url(#glow)" opacity=".9" />
        </g>
      ))}
      {/* Glowing core */}
      <circle cx="16" cy="16" r="4.5" fill="url(#coreG)" filter="url(#glow)"
        style={{ animation: "corePulse 2s ease-in-out infinite" }} />
      {/* Inner star cross */}
      <line x1="16" y1="13" x2="16" y2="19" stroke="rgba(255,255,255,0.6)" strokeWidth="1" strokeLinecap="round"/>
      <line x1="13" y1="16" x2="19" y2="16" stroke="rgba(255,255,255,0.6)" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

/* ─── Close (X) Icon ──────────────────────────────────────────────────────── */
function CloseIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ─── Typing dots ─────────────────────────────────────────────────────────── */
function TypingIndicator() {
  return (
    <div style={S.row}>
      <div style={S.avatarBot}><AIOrbitIcon size={15} /></div>
      <div style={{ ...S.bubble, ...S.botBubble, padding: "11px 16px" }}>
        {[0,1,2].map(i => (
          <span key={i} style={{ ...S.dot, animationDelay: `${i*0.18}s` }} />
        ))}
      </div>
    </div>
  );
}

/* ─── Single message ──────────────────────────────────────────────────────── */
function Message({ msg }) {
  const isUser = msg.role === "user";
  return (
    <div style={{ ...S.row, justifyContent: isUser ? "flex-end" : "flex-start",
      animation: "msgIn .22s ease-out" }}>
      {!isUser && <div style={S.avatarBot}><AIOrbitIcon size={15} /></div>}
      <div style={{ ...S.bubble, ...(isUser ? S.userBubble : S.botBubble) }}>
        <span style={S.msgText}>{msg.text}</span>
        <span style={S.ts}>{msg.time}</span>
      </div>
      {isUser && (
        <div style={S.avatarUser}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
      )}
    </div>
  );
}

/* ─── Main ChatBox export ─────────────────────────────────────────────────── */
export default function ChatBox({ title = "AI Assistant", placeholder = "Ask me anything…" }) {
  injectKeyframes();

  const [open, setOpen]       = useState(false);
  const [closing, setClosing] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, role: "bot", text: "Hi! I'm your AI assistant. How can I help you?", time: now() },
  ]);
  const [input, setInput]   = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef  = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  function openChat() { setClosing(false); setOpen(true); }
  function closeChat() {
    setClosing(true);
    setTimeout(() => { setOpen(false); setClosing(false); }, 280);
  }

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMessages(p => [...p, { id: Date.now(), role: "user", text, time: now() }]);
    setLoading(true);
    try {
      const res  = await fetch(API_URL, { method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ message: text }) });
        console.log(res);
      const data = await res.json();
      setMessages(p => [...p, { id: Date.now()+1, role:"bot", text: data.reply, time: now() }]);
    } catch {
      setMessages(p => [...p, { id: Date.now()+1, role:"bot",
        text:"⚠️ Couldn't reach the server.", time: now() }]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  }

  return (
    <>
      {/* ── Floating panel ────────────────────────────────────────────────── */}
      {(open || closing) && (
        <div style={{ ...S.panel, animation: closing ? "slideDown .28s ease-in forwards" : "slideUp .28s ease-out" }}>

          {/* Header */}
          <div style={S.header}>
            <div style={S.hLeft}>
              <div style={S.hIconWrap}><AIOrbitIcon size={24} /></div>
              <div>
                <div style={S.hTitle}>{title}</div>
                <div style={S.hSub}>
                  <span style={S.statusDot} />
                  <span style={S.statusTxt}>Online</span>
                </div>
              </div>
            </div>
            <div style={S.hRight}>
              <button style={S.iconBtn} title="Clear"
                onClick={() => setMessages([{ id: 1, role:"bot",
                  text:"Hi! I'm your AI assistant. How can I help you?", time: now() }])}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2">
                  <polyline points="3 6 5 6 21 6"/>
                  <path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/>
                </svg>
              </button>
              <button style={S.iconBtn} title="Close" onClick={closeChat}>
                <CloseIcon />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div style={S.messages}>
            {messages.map(m => <Message key={m.id} msg={m} />)}
            {loading && <TypingIndicator />}
            <div ref={bottomRef} />
          </div>

          {/* Input bar */}
          <div style={S.inputBar}>
            <textarea ref={inputRef} style={S.textarea} rows={1}
              value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey} placeholder={placeholder} disabled={loading} />
            <button style={{ ...S.sendBtn, opacity: input.trim() && !loading ? 1 : 0.38 }}
              onClick={send} disabled={!input.trim() || loading} title="Send">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* ── FAB button ────────────────────────────────────────────────────── */}
      {!open && !closing && (
        <div style={S.fabWrapper}>
          <span style={S.fabLabel}>Ask anything about Hari to AI</span>
          <button style={S.fab} onClick={openChat} title="Open AI Assistant">
            <AIOrbitIcon size={28} />
            <span style={{ ...S.ring, animationDelay:"0s" }} />
            <span style={{ ...S.ring, animationDelay:"0.8s" }} />
          </button>
        </div>
      )}
    </>
  );
}

function now() {
  return new Date().toLocaleTimeString([], { hour:"2-digit", minute:"2-digit" });
}

/* ─── Styles ──────────────────────────────────────────────────────────────── */
const S = {
  /* Panel */
  panel: {
    position: "fixed",
    bottom: "96px",
    right: "24px",
    width: "360px",
    height: "510px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    overflow: "hidden",
    background: "linear-gradient(160deg,#0d0d14 0%,#111118 100%)",
    border: "1px solid rgba(255,255,255,0.07)",
    boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04) inset, 0 0 60px rgba(99,102,241,0.08)",
    fontFamily: "'DM Sans','Segoe UI',sans-serif",
    zIndex: 9998,
  },

  /* Header */
  header: {
    display:"flex", alignItems:"center", justifyContent:"space-between",
    padding:"11px 16px",
    background:"rgba(255,255,255,0.025)",
    borderBottom:"1px solid rgba(255,255,255,0.06)",
  },
  hLeft:    { display:"flex", alignItems:"center", gap:"11px" },
  hIconWrap:{
    width:"40px", height:"40px", borderRadius:"12px",
    background:"linear-gradient(135deg,rgba(99,102,241,0.25),rgba(139,92,246,0.15))",
    border:"1px solid rgba(165,180,252,0.2)",
    display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
  },
  hTitle:   { color:"#f0f0f8", fontSize:"13.5px", fontWeight:"600", letterSpacing:".02em" },
  hSub:     { display:"flex", alignItems:"center", gap:"5px", marginTop:"2px" },
  statusDot:{
    width:"7px", height:"7px", borderRadius:"50%",
    background:"#4ade80", boxShadow:"0 0 7px #4ade80",
    animation:"statusGlow 2s ease-in-out infinite",
    display:"inline-block",
  },
  statusTxt:{ color:"rgba(255,255,255,0.28)", fontSize:"10px", fontWeight:"500" },
  hRight:   { display:"flex", gap:"2px" },
  iconBtn: {
    background:"transparent", border:"none", cursor:"pointer",
    color:"rgba(255,255,255,0.35)", padding:"7px", borderRadius:"8px",
    display:"flex", alignItems:"center",
  },

  /* Messages */
  messages:{
    flex:1, overflowY:"auto", padding:"14px 13px",
    display:"flex", flexDirection:"column", gap:"10px",
    scrollbarWidth:"thin", scrollbarColor:"rgba(255,255,255,0.08) transparent",
  },
  row: { display:"flex", alignItems:"flex-end", gap:"8px" },
  avatarBot:{
    width:"26px", height:"26px", borderRadius:"50%",
    background:"rgba(99,102,241,0.22)", border:"1px solid rgba(99,102,241,0.4)",
    display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
  },
  avatarUser:{
    width:"26px", height:"26px", borderRadius:"50%",
    background:"rgba(244,114,182,0.15)", border:"1px solid rgba(244,114,182,0.3)",
    color:"#f9a8d4",
    display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
  },
  bubble:{
    maxWidth:"220px", padding:"9px 13px", borderRadius:"16px",
    display:"flex", flexDirection:"column", gap:"4px",
  },
  botBubble:{
    background:"rgba(255,255,255,0.055)",
    border:"1px solid rgba(255,255,255,0.07)",
    borderBottomLeftRadius:"4px",
  },
  userBubble:{
    background:"linear-gradient(135deg,#5b5ef4,#7c3aed)",
    border:"1px solid rgba(139,92,246,0.35)",
    borderBottomRightRadius:"4px",
    boxShadow:"0 4px 14px rgba(99,102,241,0.28)",
  },
  msgText:{ color:"#e6e6f2", fontSize:"13.5px", lineHeight:"1.55", wordBreak:"break-word" },
  ts:{ color:"rgba(255,255,255,0.22)", fontSize:"9.5px", alignSelf:"flex-end" },
  dot:{
    width:"6px", height:"6px", borderRadius:"50%",
    background:"rgba(255,255,255,0.4)", display:"inline-block",
    animation:"dotBounce .9s ease-in-out infinite",
  },

  /* Input */
  inputBar:{
    display:"flex", alignItems:"flex-end", gap:"8px",
    padding:"11px 13px",
    borderTop:"1px solid rgba(255,255,255,0.055)",
    background:"rgba(255,255,255,0.018)",
  },
  textarea:{
    flex:1, background:"rgba(255,255,255,0.05)",
    border:"1px solid rgba(255,255,255,0.09)", borderRadius:"12px",
    color:"#e6e6f2", fontSize:"13.5px", padding:"9px 12px",
    resize:"none", outline:"none", fontFamily:"inherit", lineHeight:"1.5",
    maxHeight:"90px", overflowY:"auto",
  },
  sendBtn:{
    width:"37px", height:"37px", borderRadius:"11px",
    background:"linear-gradient(135deg,#6366f1,#7c3aed)",
    border:"none", cursor:"pointer",
    display:"flex", alignItems:"center", justifyContent:"center",
    color:"#fff", flexShrink:0,
    transition:"opacity .2s, transform .15s",
    boxShadow:"0 4px 12px rgba(99,102,241,0.38)",
  },

  /* FAB */
    fabWrapper: {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    zIndex: 9999,
  },
    fabLabel: {
    background: "rgba(10,10,18,0.92)",
    border: "1px solid rgba(165,180,252,0.2)",
    borderLeft: "2px solid rgba(99,102,241,0.6)",   // indigo accent
    color: "rgba(255,255,255,0.82)",
    fontSize: "12.5px",
    fontWeight: "500",
    fontFamily: "'DM Sans','Segoe UI',sans-serif",
    padding: "8px 14px",
    borderRadius: "20px",
    whiteSpace: "nowrap",
    backdropFilter: "blur(10px)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
    letterSpacing: "0.01em",
    animation: "slideUp .35s ease-out",
  },
  fab: {
  position: "relative",          // ← changed from "fixed"
  width: "58px", height: "58px", borderRadius: "50%",
  background: "linear-gradient(145deg,#4338ca,#6d28d9)",
  border: "1.5px solid rgba(165,180,252,0.25)",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  boxShadow: "0 8px 28px rgba(99,102,241,0.55)",
  flexShrink: 0,
  outline: "none",
  },
  ring:{
    position:"absolute",
    width:"58px", height:"58px", borderRadius:"50%",
    border:"2px solid rgba(99,102,241,0.5)",
    animation:"ripple 2.2s ease-out infinite",
    pointerEvents:"none",
  },
  fabTip:{
    position:"absolute",
    right:"68px",
    background:"rgba(15,15,25,0.92)",
    border:"1px solid rgba(255,255,255,0.08)",
    color:"rgba(255,255,255,0.75)",
    fontSize:"11.5px", fontWeight:"500",
    padding:"5px 10px", borderRadius:"8px",
    whiteSpace:"nowrap",
    pointerEvents:"none",
    opacity:0,
    transition:"opacity .2s",
    /* shown on parent hover via CSS — works as a hint without JS */
  },
};
