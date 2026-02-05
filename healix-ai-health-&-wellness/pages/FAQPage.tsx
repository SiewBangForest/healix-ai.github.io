
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MessageCircle } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      q: "What is Healix?", 
      a: "Healix is an AI-powered health and wellness platform that provides personalized lifestyle education, habit tracking, and interactive learning scenarios to help you improve your overall wellbeing.",
      category: "General"
    },
    { 
      q: "Is Healix a medical service?", 
      a: "No. Healix provides non-medical wellness information and lifestyle guidance. It should not replace advice from a doctor or healthcare professional.",
      category: "General"
    },
    { 
      q: "How does the AI wellness assistant work?", 
      a: "Our AI (powered by Google Gemini) analyzes your inputs and tracker data to provide personalized tips, lesson recommendations, and habit improvement suggestions based on wellness research.",
      category: "AI Wellness"
    },
    { 
      q: "How do I activate a subscription?", 
      a: "You can activate your subscription through your mobile carrier or directly on our platform. We offer weekly, monthly, and premium plans.",
      category: "Subscription"
    },
    { 
      q: "Is my personal health data safe?", 
      a: "Absolutely. We use industry-standard encryption to protect your data. Your wellness logs and chat history are private and used only to improve your personalized experience.",
      category: "Privacy"
    },
    { 
      q: "How do I unsubscribe?", 
      a: "You can unsubscribe at any time through the 'Subscription' section in your profile settings or by contacting our support team via email or WhatsApp.",
      category: "Subscription"
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Help Center</h1>
        <p className="text-slate-600">Find answers to common questions about Healix.</p>
      </div>

      <div className="relative mb-12">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        <input 
          type="text" 
          placeholder="Search for help..."
          className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
        />
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">{faq.category}</span>
                <span className="font-bold text-slate-900">{faq.q}</span>
              </div>
              {openIndex === idx ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
            </button>
            {openIndex === idx && (
              <div className="px-5 pb-5 animate-in slide-in-from-top duration-300">
                <p className="text-slate-600 text-sm leading-relaxed pt-2 border-t border-slate-100">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 bg-emerald-900 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-2">Still need help?</h3>
          <p className="text-emerald-200">Our support team is available 24/7 to assist you.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white text-emerald-900 rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-50 transition-all">
            <MessageCircle size={20} /> Chat Support
          </button>
          <button className="px-6 py-3 bg-emerald-800 text-white border border-emerald-700 rounded-xl font-bold hover:bg-emerald-700 transition-all">
            Email Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
