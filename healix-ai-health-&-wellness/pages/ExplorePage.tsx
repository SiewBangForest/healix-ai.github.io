
import React, { useState } from 'react';
import { Search, Filter, Play, FileText, Lightbulb, Zap, ChevronRight } from 'lucide-react';

const ExplorePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Skincare', 'Digestion', 'Stress', 'Sleep', 'Mental Wellness', 'Nutrition'];
  
  const content = [
    { title: 'Acne Basics: The 3 Causes', type: 'Video', duration: '4 min', category: 'Skincare', image: 'https://picsum.photos/seed/skin/600/400' },
    { title: '5 Foods for a Happy Gut', type: 'Article', duration: '6 min read', category: 'Digestion', image: 'https://picsum.photos/seed/gut/600/400' },
    { title: 'The Science of Breathing', type: 'Video', duration: '3 min', category: 'Stress', image: 'https://picsum.photos/seed/breath/600/400' },
    { title: 'Sun Protection 101', type: 'Micro-Lesson', duration: '2 min', category: 'Skincare', image: 'https://picsum.photos/seed/sun/600/400' },
    { title: 'Managing Work Anxiety', type: 'Article', duration: '8 min read', category: 'Mental Wellness', image: 'https://picsum.photos/seed/work/600/400' },
    { title: 'The Perfect Sleep Routine', type: 'Video', duration: '5 min', category: 'Sleep', image: 'https://picsum.photos/seed/sleep/600/400' },
  ];

  const filteredContent = selectedCategory === 'All' 
    ? content 
    : content.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Search Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Explore Content Library</h1>
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search topics, articles, videos..."
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex overflow-x-auto gap-2 mb-10 pb-2 custom-scrollbar no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
              selectedCategory === cat 
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-100' 
              : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Lesson */}
      <div className="mb-16">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 aspect-[21/9] flex items-center group">
          <img src="https://picsum.photos/seed/featured/1200/500" alt="Featured" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
          <div className="relative p-8 md:p-16 max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Featured</span>
              <span className="text-emerald-300 text-sm font-bold">New Course Available</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Mastering Emotional Intelligence in 7 Days</h2>
            <p className="text-slate-200 text-lg mb-8 line-clamp-2">Learn practical tools to manage stress, improve relationships, and understand your emotional triggers.</p>
            <button className="px-8 py-3 bg-white text-slate-900 rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-50 transition-all">
              Start Learning Now <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredContent.map((item, idx) => (
          <div key={idx} className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="relative aspect-video">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-bold text-slate-800 flex items-center gap-1.5 uppercase tracking-wider">
                {item.type === 'Video' ? <Play size={12} fill="currentColor" /> : item.type === 'Article' ? <FileText size={12} /> : <Zap size={12} />}
                {item.type}
              </div>
            </div>
            <div className="p-6">
              <div className="text-xs font-bold text-emerald-600 mb-2 uppercase tracking-widest">{item.category}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2">{item.title}</h3>
              <div className="flex items-center justify-between text-slate-500 text-sm">
                <span className="flex items-center gap-1.5"><Lightbulb size={16} className="text-amber-500" /> {item.duration}</span>
                <button className="text-slate-400 group-hover:text-emerald-600 transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredContent.length === 0 && (
        <div className="text-center py-24">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
            <Search size={40} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">No content found in this category</h3>
          <p className="text-slate-500">Try choosing a different category or search for something else.</p>
          <button onClick={() => setSelectedCategory('All')} className="mt-6 text-emerald-600 font-bold underline">Show all content</button>
        </div>
      )}
    </div>
  );
};

export default ExplorePage;
