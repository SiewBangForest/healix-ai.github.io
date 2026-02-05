
import React from 'react';
import { Users, MessageSquare, TrendingUp, Sparkles, Heart, Share2 } from 'lucide-react';

const CommunityPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Community Insights</h1>
          <p className="text-slate-600">See what works for others and share your wellness journey.</p>
        </div>
        <button className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100">
          Share Your Story
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* AI Trends Summary */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <TrendingUp size={120} />
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 relative">
                <Sparkles className="text-amber-500" size={24} />
                AI Community Summary
             </h3>
             <div className="space-y-4 relative">
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                  <p className="text-sm text-emerald-800 leading-relaxed font-medium">
                    "This week, 72% of users who reported high stress also noticed a 15% improvement in mood after following the '4-7-8 Breathing' micro-lesson."
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <p className="text-sm text-blue-800 leading-relaxed font-medium">
                    "A trending insight suggests that adding magnesium-rich foods to dinner has improved sleep quality for many in the community."
                  </p>
                </div>
             </div>
          </div>

          {/* User Discussions */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <MessageSquare className="text-indigo-500" />
              Latest Discussions
            </h3>
            {[
              { 
                user: 'Aria M.', 
                avatar: 'https://i.pravatar.cc/100?u=aria',
                content: 'Started the 7-day gut health challenge. Day 3 and I already feel less bloated! Who else is on this journey?',
                likes: 24, comments: 8, time: '2h ago'
              },
              { 
                user: 'Leo K.', 
                avatar: 'https://i.pravatar.cc/100?u=leo',
                content: 'The sleep tracker revealed I was drinking coffee too late. Switched to herbal tea after 4 PM and my sleep score jumped from 60 to 85.',
                likes: 56, comments: 12, time: '5h ago'
              },
              { 
                user: 'Elena R.', 
                avatar: 'https://i.pravatar.cc/100?u=elena',
                content: 'Does anyone have tips for managing morning anxiety? The breathing exercises help but I need more ideas.',
                likes: 12, comments: 15, time: 'Yesterday'
              }
            ].map((post, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-emerald-200 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <img src={post.avatar} alt={post.user} className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="font-bold text-slate-900">{post.user}</div>
                    <div className="text-xs text-slate-400">{post.time}</div>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">{post.content}</p>
                <div className="flex items-center gap-6 pt-4 border-t border-slate-50 text-slate-500">
                  <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
                    <Heart size={18} /> <span className="text-sm font-bold">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors">
                    <MessageSquare size={18} /> <span className="text-sm font-bold">{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-1.5 hover:text-slate-900 transition-colors ml-auto">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {/* Top Contributors */}
          <div className="bg-white p-6 rounded-[2.5rem] border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-6">Wellness Leaders</h4>
            <div className="space-y-4">
              {[
                { name: 'Dr. Wellness', role: 'Nutritionist', avatar: 'https://i.pravatar.cc/100?u=dr' },
                { name: 'Sofia Green', role: 'Yoga Coach', avatar: 'https://i.pravatar.cc/100?u=sofia' },
                { name: 'Marcus Bloom', role: 'Sleep Expert', avatar: 'https://i.pravatar.cc/100?u=marcus' },
              ].map((leader, i) => (
                <div key={i} className="flex items-center gap-3">
                  <img src={leader.avatar} alt={leader.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="text-sm font-bold text-slate-900">{leader.name}</div>
                    <div className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">{leader.role}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 bg-slate-50 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors">
              View All Experts
            </button>
          </div>

          {/* Guidelines */}
          <div className="p-6 rounded-[2.5rem] bg-amber-50 border border-amber-100">
            <h4 className="font-bold text-amber-900 mb-2">Safe Community</h4>
            <p className="text-xs text-amber-800 leading-relaxed">
              We focus on peer support and wellness tips. Any medical advice shared by users is for informational purposes only. Please report any harmful content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
