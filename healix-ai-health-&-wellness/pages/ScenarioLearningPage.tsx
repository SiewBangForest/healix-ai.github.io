
import React, { useState } from 'react';
import { 
  Sparkles, ChevronRight, PlayCircle, 
  Brain, AlertTriangle, CheckCircle2,
  RefreshCw
} from 'lucide-react';
import { generateScenarioResponse } from '../services/geminiService';

const ScenarioLearningPage: React.FC = () => {
  const [currentScenario, setCurrentScenario] = useState<{
    id: string;
    title: string;
    description: string;
    image: string;
    options: { label: string; value: string }[];
  } | null>({
    id: 'work-stress',
    title: 'A Stressful Work Day',
    description: 'It is 3 PM, you have a deadline in 2 hours, and your energy is crashing. You feel a headache starting. What do you do?',
    image: 'https://picsum.photos/seed/stress/800/400',
    options: [
      { label: 'Drink a double espresso', value: 'caffeine' },
      { label: 'Do a 2-minute breathing exercise', value: 'breathing' },
      { label: 'Skip lunch to keep working', value: 'skip-meal' }
    ]
  });

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    analysis: string;
    bodyImpact: string;
    betterAlternative: string;
  } | null>(null);

  const handleChoice = async (choiceValue: string) => {
    if (!currentScenario) return;
    setIsLoading(true);
    
    const response = await generateScenarioResponse(currentScenario.description, choiceValue);
    setResult(response);
    setIsLoading(false);
  };

  const reset = () => {
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Interactive Scenario Learning</h1>
        <p className="text-slate-600">Learn how your daily choices impact your body through AI simulations.</p>
      </div>

      {!result ? (
        <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-xl animate-in fade-in zoom-in duration-500">
          <img src={currentScenario?.image} alt="Scenario" className="w-full h-64 object-cover" />
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-2 mb-4">
              <div className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wider">
                Active Scenario
              </div>
              <div className="text-slate-400 text-sm">• 3 minute lesson</div>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{currentScenario?.title}</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              {currentScenario?.description}
            </p>
            
            <div className="space-y-4">
              {currentScenario?.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleChoice(option.value)}
                  disabled={isLoading}
                  className="w-full flex items-center justify-between p-5 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700 transition-all group disabled:opacity-50"
                >
                  <span className="font-bold text-left">{option.label}</span>
                  <ChevronRight size={20} className="text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
            
            {isLoading && (
              <div className="mt-8 flex flex-col items-center gap-3">
                <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-sm font-bold text-emerald-600">AI is analyzing your choice...</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="animate-in slide-in-from-bottom duration-700">
          <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 md:p-12 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <Brain size={24} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Expert Analysis</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="flex items-center gap-2 mb-3 font-bold text-slate-800">
                  <AlertTriangle className="text-amber-500" size={20} />
                  Impact on your body
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{result.bodyImpact}</p>
              </div>
              <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100">
                <div className="flex items-center gap-2 mb-3 font-bold text-emerald-800">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  Practical Lesson
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{result.analysis}</p>
              </div>
            </div>

            <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 mb-10">
              <h4 className="font-bold text-indigo-900 mb-2">Better Choice Next Time:</h4>
              <p className="text-indigo-800 leading-relaxed italic">"{result.betterAlternative}"</p>
            </div>

            <button 
              onClick={reset}
              className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100"
            >
              <RefreshCw size={20} /> Try Another Choice
            </button>
          </div>
        </div>
      )}

      {/* Other Scenarios Gallery */}
      <div className="mt-16">
        <h3 className="text-xl font-bold text-slate-900 mb-6">More Interactive Lessons</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'The Insomnia Loop', category: 'Sleep', intensity: 'Medium' },
            { title: 'Choosing Lunch for Focus', category: 'Nutrition', intensity: 'Easy' },
            { title: 'The Social Anxiety Wall', category: 'Mental', intensity: 'Hard' },
          ].map((item, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden aspect-video border border-slate-200">
              <img src={`https://picsum.photos/seed/lesson${i}/600/400`} alt="Lesson" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">{item.category}</div>
                <h4 className="text-white font-bold leading-tight mb-2">{item.title}</h4>
                <div className="flex items-center gap-1.5 text-[10px] text-white/60 font-medium">
                  <PlayCircle size={14} /> Start Lesson • {item.intensity}
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur rounded-full p-2 text-white">
                <Sparkles size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScenarioLearningPage;
