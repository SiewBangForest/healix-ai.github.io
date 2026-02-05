
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Brain, Info, History, Trash2, Bot } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIWellnessPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am your Healix AI wellness companion. How can I help you improve your health, habits, or routine today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    // Prepare history for API
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await getGeminiResponse(userMessage, history);
    setMessages(prev => [...prev, { role: 'model', text: response || 'I am sorry, something went wrong.' }]);
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col h-[calc(100vh-80px)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white">
            <Brain size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900">Ask Healix AI</h1>
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold uppercase tracking-wider">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
              Personalized Guidance
            </div>
          </div>
        </div>
        <button 
          onClick={() => setMessages([{ role: 'model', text: 'Hello! I am your Healix AI wellness companion. How can I help you improve your health, habits, or routine today?' }])}
          className="p-2 text-slate-400 hover:text-red-500 transition-colors"
          title="Clear Chat"
        >
          <Trash2 size={20} />
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-grow overflow-y-auto mb-6 space-y-4 pr-2 custom-scrollbar">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                msg.role === 'user' ? 'bg-slate-200 text-slate-600' : 'bg-emerald-500 text-white'
              }`}>
                {msg.role === 'user' ? <History size={16} /> : <Bot size={16} />}
              </div>
              <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                ? 'bg-emerald-600 text-white rounded-tr-none' 
                : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex gap-3 max-w-[85%]">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                <Bot size={16} />
              </div>
              <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Disclaimer */}
      <div className="px-4 py-2 mb-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-3">
        <Info className="text-amber-500 shrink-0" size={18} />
        <p className="text-[10px] sm:text-xs text-amber-700 leading-tight">
          Disclaimer: Healix AI is for educational and wellness guidance purposes only. We do not provide medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider.
        </p>
      </div>

      {/* Input */}
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask about skincare, digestion, sleep..."
          className="w-full pl-6 pr-14 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
        />
        <button
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          className="absolute right-2 top-2 bottom-2 w-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center hover:bg-emerald-700 transition-colors disabled:bg-slate-300"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default AIWellnessPage;
