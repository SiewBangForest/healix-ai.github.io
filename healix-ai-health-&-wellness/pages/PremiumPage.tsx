
import React from 'react';
import { Check, Shield, Star, Crown, Zap, Gift } from 'lucide-react';

const PremiumPage: React.FC = () => {
  const plans = [
    {
      name: 'Weekly',
      price: '$2.99',
      period: 'per week',
      desc: 'Great for testing the waters.',
      features: ['AI Assistant Access', 'Daily Habit Tracking', 'Micro-Lessons Library'],
      color: 'slate',
      cta: 'Choose Weekly'
    },
    {
      name: 'Monthly',
      price: '$9.99',
      period: 'per month',
      desc: 'Most popular for serious seekers.',
      features: ['Everything in Weekly', 'Interactive Scenarios', 'AI Trend Reports', 'Community Insights'],
      color: 'emerald',
      popular: true,
      cta: 'Start 7-Day Free Trial'
    },
    {
      name: 'Premium',
      price: '$19.99',
      period: 'per month',
      desc: 'The ultimate wellness experience.',
      features: ['Everything in Monthly', 'Expert-Led Video Courses', '1-on-1 AI Coaching', 'Priority Support'],
      color: 'indigo',
      cta: 'Upgrade to Premium'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-bold mb-6">
          <Crown size={16} />
          <span>Healix Plus</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Unlock Your Full Potential</h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Upgrade your plan to get personalized AI insights, deep-dive courses, and structural guidance for a healthier lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {plans.map((plan, idx) => (
          <div key={idx} className={`relative bg-white rounded-[2.5rem] p-8 border-2 transition-all hover:shadow-2xl ${
            plan.popular ? 'border-emerald-500 shadow-xl shadow-emerald-50 -translate-y-4' : 'border-slate-100'
          }`}>
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-white text-xs font-black uppercase tracking-widest rounded-full">
                Most Popular
              </div>
            )}
            <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-emerald-600' : 'text-slate-900'}`}>{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-black text-slate-900">{plan.price}</span>
              <span className="text-slate-400 text-sm">{plan.period}</span>
            </div>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">{plan.desc}</p>
            
            <div className="space-y-4 mb-10">
              {plan.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-3">
                  <div className={`mt-1 p-0.5 rounded-full ${plan.popular ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                    <Check size={14} />
                  </div>
                  <span className="text-sm text-slate-600">{feat}</span>
                </div>
              ))}
            </div>

            <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
              plan.popular 
              ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-200' 
              : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: <Shield />, title: 'Secure Payment', desc: 'PCI compliant transactions via your carrier.' },
          { icon: <Zap />, title: 'Instant Access', desc: 'Unlock premium content immediately after activation.' },
          { icon: <Gift />, title: 'Cancel Anytime', desc: 'No long term contracts, manage via SMS or web.' },
          { icon: <Star />, title: 'Expert Knowledge', desc: 'Vetted content from certified wellness coaches.' },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
              {item.icon}
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumPage;
