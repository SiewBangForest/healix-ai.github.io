
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, CheckCircle, Zap, Shield, 
  ChevronRight, ArrowRight, Play, Heart,
  Moon, Coffee, Smile, Activity, BookOpen
} from 'lucide-react';

const HomePage: React.FC = () => {
  const categories = [
    { title: 'Skincare', icon: <Sparkles className="text-pink-500" />, desc: 'Understand your skin type and routine.' },
    { title: 'Sleep', icon: <Moon className="text-indigo-500" />, desc: 'Improve your sleep hygiene and rest.' },
    { title: 'Digestion', icon: <Coffee className="text-amber-500" />, desc: 'Gut health tips and nutrition guidance.' },
    { title: 'Stress', icon: <Smile className="text-emerald-500" />, desc: 'Anxiety control and relaxation habits.' },
  ];

  const steps = [
    { title: 'Activate', desc: 'Join the Healix community with a weekly or monthly subscription.' },
    { title: 'Track', desc: 'Log your daily habits, mood, sleep, and physical conditions.' },
    { title: 'Learn', desc: 'Get AI-powered insights and micro-lessons personalized for you.' },
    { title: 'Improve', desc: 'Build lasting healthy habits through interactive scenarios.' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/50 -skew-x-12 transform origin-top-right hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
                <Sparkles size={16} />
                <span>AI-Powered Wellness</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Understand Your Body. <span className="text-emerald-600">Improve Your Life</span> with AI.
              </h1>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
                Healix combines expert knowledge with advanced AI to give you personalized health insights, habit tracking, and interactive learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/premium" className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all text-center shadow-xl shadow-emerald-200">
                  Start Wellness Journey
                </Link>
                <Link to="/explore" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all text-center">
                  Try Free Tips
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/seed/health/800/1000" alt="Wellness" className="w-full h-auto object-cover" />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur rounded-2xl border border-white/50 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Today's Insight</h4>
                      <p className="text-sm text-slate-600">Drink 500ml of water now to boost afternoon energy levels.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-100 rounded-full flex items-center justify-center -rotate-12 z-0">
                 <Heart className="text-amber-500" size={48} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How Healix Works</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Four simple steps to a better, healthier version of you through AI education.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="text-6xl font-black text-slate-50 absolute -top-2 -right-2 transition-colors group-hover:text-emerald-50">0{idx+1}</div>
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 relative z-10">
                  {/* Fixed missing BookOpen icon by adding it to imports */}
                  {idx === 0 ? <CheckCircle /> : idx === 1 ? <Activity /> : idx === 2 ? <BookOpen /> : <ArrowRight />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Categories</h2>
              <p className="text-slate-600">Expert-curated content for every aspect of your life.</p>
            </div>
            <Link to="/explore" className="hidden md:flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all">
              Explore All <ChevronRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <Link to="/explore" key={idx} className="group p-8 rounded-3xl border border-slate-200 hover:border-emerald-300 transition-all hover:shadow-xl hover:shadow-emerald-50">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{cat.title}</h3>
                <p className="text-slate-500 text-sm mb-4">{cat.desc}</p>
                <div className="text-emerald-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ChevronRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => <Sparkles key={i} className="text-amber-400" fill="currentColor" size={24} />)}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight italic">
              "Healix changed the way I think about my health. The AI tips are incredibly accurate and the sleep tracker actually helped me fix my insomnia in just 2 weeks."
            </h2>
            <div className="flex items-center justify-center gap-4">
              <img src="https://i.pravatar.cc/100?u=sarah" alt="User" className="w-16 h-16 rounded-full border-4 border-emerald-800" />
              <div className="text-left">
                <div className="font-bold text-xl">Sarah Jenkins</div>
                <div className="text-emerald-400 text-sm">Premium Subscriber</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[3rem] p-12 md:p-16 text-center text-white shadow-2xl shadow-emerald-200 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform your life?</h2>
            <p className="text-emerald-50 mb-10 text-lg md:text-xl max-w-2xl mx-auto">
              Join thousands of users improving their health every day with personalized AI guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/premium" className="px-10 py-4 bg-white text-emerald-600 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all shadow-lg">
                Activate Subscription
              </Link>
              <Link to="/about" className="px-10 py-4 bg-transparent border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                Learn How it Works
              </Link>
            </div>
            <p className="mt-8 text-sm text-emerald-100 flex items-center justify-center gap-2">
              <Shield size={16} /> 100% Secure Payment • No Medical Advice
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
