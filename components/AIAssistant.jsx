
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hi! I am EduBot, your AI study assistant. How can I help you with your courses today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: input,
        config: {
          systemInstruction: 'You are EduBot, a helpful school LMS assistant. Keep responses professional, encouraging, and education-focused. Help students with mathematics, science, and scheduling questions.',
          temperature: 0.7
        }
      });

      setMessages(prev => [...prev, { role: 'assistant', text: response.text }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', text: "I'm having a bit of trouble connecting to my brain. Please try again later!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white w-80 md:w-96 h-[500px] rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          <div className="bg-blue-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bot size={24} />
              <div>
                <p className="font-bold text-sm">EduBot Assistant</p>
                <p className="text-[10px] text-blue-200">Online | Powered by AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-500 rounded-full p-1"><X size={20} /></button>
          </div>

          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl text-slate-400 italic text-xs animate-pulse">EduBot is thinking...</div>
              </div>
            )}
          </div>

          <div className="p-4 border-t bg-white">
            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
              <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about your studies..."
                className="flex-1 text-xs border border-slate-100 bg-slate-50 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
              />
              <button type="submit" className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition-all shadow-md">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all group"
        >
          <MessageSquare size={28} className="group-hover:rotate-12 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
