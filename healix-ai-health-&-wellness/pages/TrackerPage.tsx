
import React, { useState } from 'react';
import { 
  Plus, TrendingUp, Calendar, AlertCircle, 
  Droplet, Moon, Activity, Smile, Utensils, Sparkles
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, BarChart, Bar, Cell 
} from 'recharts';

const TrackerPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly'>('weekly');
  
  const mockData = [
    { day: 'Mon', mood: 7, sleep: 6.5, energy: 6, water: 4 },
    { day: 'Tue', mood: 6, sleep: 7, energy: 7, water: 6 },
    { day: 'Wed', mood: 8, sleep: 8, energy: 9, water: 8 },
    { day: 'Thu', mood: 5, sleep: 5.5, energy: 4, water: 3 },
    { day: 'Fri', mood: 7, sleep: 7.5, energy: 8, water: 7 },
    { day: 'Sat', mood: 9, sleep: 9, energy: 9, water: 5 },
    { day: 'Sun', mood: 8, sleep: 8.5, energy: 7, water: 6 },
  ];

  const habits = [
    { name: 'Water Intake', value: '1.2L', goal: '2.5L', color: 'bg-blue-500', icon: <Droplet size={20} /> },
    { name: 'Sleep', value: '7.5h', goal: '8h', color: 'bg-indigo-500', icon: <Moon size={20} /> },
    { name: 'Activity', value: '45m', goal: '30m', color: 'bg-emerald-500', icon: <Activity size={20} /> },
    { name: 'Mood', value: 'Good', goal: 'Steady', color: 'bg-amber-500', icon: <Smile size={20} /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Your Wellness Tracker</h1>
          <p className="text-slate-500">Track habits, analyze trends, and unlock AI insights.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100">
            <Plus size={20} />
            Log Activity
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {habits.map((habit, idx) => (
          <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-2xl ${habit.color} text-white flex items-center justify-center`}>
                {habit.icon}
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{habit.name}</span>
                <p className="text-2xl font-bold text-slate-900">{habit.value}</p>
              </div>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div 
                className={`h-full ${habit.color}`} 
                style={{ width: `${Math.min(parseInt(habit.value) / parseInt(habit.goal) * 100, 100)}%` }}
              ></div>
            </div>
            <div className="mt-2 text-[10px] text-slate-400 text-right">Goal: {habit.goal}</div>
          </div>
        ))}
      </div>

      {/* Main Charts & Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Energy & Mood Trends */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <TrendingUp className="text-emerald-500" />
                Wellness Trends
              </h3>
              <div className="flex bg-slate-100 p-1 rounded-lg">
                <button 
                  onClick={() => setActiveTab('daily')}
                  className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${activeTab === 'daily' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}
                >Daily</button>
                <button 
                  onClick={() => setActiveTab('weekly')}
                  className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${activeTab === 'weekly' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}
                >Weekly</button>
              </div>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                  />
                  <Line type="monotone" dataKey="mood" stroke="#10b981" strokeWidth={4} dot={{r: 4, fill: '#10b981', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 8}} />
                  <Line type="monotone" dataKey="sleep" stroke="#6366f1" strokeWidth={4} dot={{r: 4, fill: '#6366f1', strokeWidth: 2, stroke: '#fff'}} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div> Mood Score
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div> Sleep (Hours)
              </div>
            </div>
          </div>

          {/* Micro Logs List */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Calendar className="text-amber-500" />
              Recent Logs
            </h3>
            <div className="space-y-4">
              {[
                { time: '10:30 AM', activity: 'Logged Breakfast', impact: '+2 Energy', color: 'emerald' },
                { time: '09:15 AM', activity: 'Morning Water Log', impact: 'Hydrated', color: 'blue' },
                { time: 'Yesterday', activity: 'Sleep: 8.5 Hours', impact: 'Great Recovery', color: 'indigo' },
              ].map((log, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="text-xs font-bold text-slate-400 w-20">{log.time}</div>
                    <div className="font-semibold text-slate-700">{log.activity}</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-${log.color}-100 text-${log.color}-700`}>
                    {log.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Analysis Sidebar */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 rounded-[2.5rem] text-white shadow-xl shadow-emerald-100">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              {/* Added Sparkles to imports for AI Trend Analysis header */}
              <Sparkles size={24} />
              AI Trend Analysis
            </h3>
            <div className="space-y-6">
              <div className="bg-white/10 rounded-2xl p-4 backdrop-blur">
                <p className="text-sm leading-relaxed">
                  Your energy levels peak on Wednesdays. This correlates with your consistent 8-hour sleep log on Tuesday nights.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-emerald-100 text-sm mb-2 uppercase tracking-widest">Habit Score</h4>
                <div className="text-5xl font-black">84<span className="text-2xl font-normal opacity-60">/100</span></div>
                <p className="text-xs text-emerald-200 mt-1">Up 12% from last week</p>
              </div>
              <button className="w-full py-3 bg-white text-emerald-600 rounded-xl font-bold text-sm hover:bg-emerald-50 transition-colors">
                View Weekly Report
              </button>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-100 p-6 rounded-[2.5rem]">
            <h4 className="flex items-center gap-2 font-bold text-amber-800 mb-2">
              <AlertCircle size={20} />
              Risk Alert
            </h4>
            <p className="text-sm text-amber-700 leading-relaxed mb-4">
              We noticed a drop in your water intake over the last 48 hours. This might explain your reported afternoon headaches.
            </p>
            <button className="text-amber-800 text-xs font-bold underline hover:no-underline">
              How to stay hydrated?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackerPage;
