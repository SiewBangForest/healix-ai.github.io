
import React from 'react';
import { Heart, Target, Users, ShieldCheck, Sparkles } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <div className="w-20 h-20 bg-emerald-100 rounded-[2rem] flex items-center justify-center text-emerald-600 mx-auto mb-8">
          <Heart size={40} fill="currentColor" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Mission</h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Healix was founded on a simple belief: <span className="text-emerald-600 font-bold italic">Wellness education should be accessible, personalized, and engaging for everyone.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Simplifying Health Knowledge</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            The world of wellness can be overwhelming and full of misinformation. Healix uses advanced Artificial Intelligence to filter through the noise and provide clear, actionable, and science-backed lifestyle guidance.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                <Target size={14} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Personalized to You</h4>
                <p className="text-sm text-slate-500">No two bodies are the same. Our AI adapts its guidance based on your specific logs and concerns.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                <Users size={14} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Expert-AI Synergy</h4>
                <p className="text-sm text-slate-500">We combine the speed of AI with the deep intuition and vetting of human health experts.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="https://picsum.photos/seed/about/800/800" alt="Team" className="rounded-[3rem] shadow-2xl" />
          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 max-w-xs">
             <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="text-emerald-500" />
                <span className="font-bold text-slate-900">Safe & Non-Medical</span>
             </div>
             <p className="text-xs text-slate-500 leading-relaxed">
               Healix is designed as a wellness companion. We strictly follow data privacy guidelines and prioritize user safety above all.
             </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          <div>
             <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm mx-auto mb-6">
                <Sparkles />
             </div>
             <h4 className="font-bold text-slate-900 mb-3">Transparency</h4>
             <p className="text-sm text-slate-500">We are clear about where our information comes from and how our AI works.</p>
          </div>
          <div>
             <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm mx-auto mb-6">
                <Heart />
             </div>
             <h4 className="font-bold text-slate-900 mb-3">Empathy</h4>
             <p className="text-sm text-slate-500">Health journeys are personal and emotional. Our AI is designed to be supportive and kind.</p>
          </div>
          <div>
             <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm mx-auto mb-6">
                <Users />
             </div>
             <h4 className="font-bold text-slate-900 mb-3">Community</h4>
             <p className="text-sm text-slate-500">We believe in the power of collective wisdom and peer-to-peer inspiration.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
