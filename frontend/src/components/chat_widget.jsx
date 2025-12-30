import React, { useState } from 'react';

function ChatWindow({ onClose }) {
  return (
    <div className="chat-window">
      <div className="chat-header">
        <span>AI Resume Assistant</span>
        <button onClick={onClose}>×</button>
      </div>

      <div className="chat-body">
        <div className="bot">
          Hi! Ask me anything about my experience, skills, or projects.
        </div>
      </div>

      <div className="chat-input">
        <input placeholder="Type your question..." />
        <button>Send</button>
      </div>
    </div>
  );
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="chatbot-icon" onClick={() => setOpen(true)}>
       🤖
      </div>

      {open && <ChatWindow onClose={() => setOpen(false)} />}
    </>
  );
}