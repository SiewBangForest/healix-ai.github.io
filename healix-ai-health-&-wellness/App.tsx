
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Home, Search, Brain, BarChart2, Users, BookOpen, 
  HelpCircle, Info, Mail, Menu, X, Heart, Sparkles,
  ChevronRight, LogIn
} from 'lucide-react';

import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import AIWellnessPage from './pages/AIWellnessPage';
import TrackerPage from './pages/TrackerPage';
import ScenarioLearningPage from './pages/ScenarioLearningPage';
import CommunityPage from './pages/CommunityPage';
import FAQPage from './pages/FAQPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PremiumPage from './pages/PremiumPage';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Explore', path: '/explore', icon: Search },
    { name: 'AI Wellness', path: '/ai-wellness', icon: Brain },
    { name: 'Tracker', path: '/tracker', icon: BarChart2 },
    { name: 'Learn', path: '/scenarios', icon: Sparkles },
    { name: 'Community', path: '/community', icon: Users },
    { name: 'Courses', path: '/premium', icon: BookOpen },
    { name: 'Help', path: '/faq', icon: HelpCircle },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                <Heart size={24} fill="white" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 tracking-tight">
                Healix
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-emerald-600 ${
                  location.pathname === link.path ? 'text-emerald-600' : 'text-slate-600'
                }`}
              >
                <link.icon size={18} />
                {link.name}
              </Link>
            ))}
            <Link
              to="/premium"
              className="ml-4 px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md shadow-emerald-100"
            >
              Activate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-emerald-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-600"
              >
                <link.icon size={20} />
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-slate-100">
              <Link
                to="/premium"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full px-4 py-3 bg-emerald-600 text-white rounded-xl text-center font-bold"
              >
                Activate Subscription
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <Heart className="text-emerald-500" fill="currentColor" size={24} />
            <span className="text-2xl font-bold text-white tracking-tight">Healix</span>
          </div>
          <p className="text-slate-400 leading-relaxed mb-6">
            AI-powered wellness education and personalized guidance to help you understand your body and improve your life.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Platform</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/explore" className="hover:text-emerald-400">Explore Content</Link></li>
            <li><Link to="/ai-wellness" className="hover:text-emerald-400">AI Assistant</Link></li>
            <li><Link to="/tracker" className="hover:text-emerald-400">Health Tracker</Link></li>
            <li><Link to="/scenarios" className="hover:text-emerald-400">Interactive Lessons</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-emerald-400">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-emerald-400">Contact Support</Link></li>
            <li><Link to="/premium" className="hover:text-emerald-400">Subscription Plans</Link></li>
            <li><Link to="/faq" className="hover:text-emerald-400">FAQ & Help</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-emerald-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-emerald-400">Terms of Service</a></li>
            <li><a href="#" className="hover:text-emerald-400">Unsubscribe</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Healix Wellness. All rights reserved. Non-medical informational content only.</p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/ai-wellness" element={<AIWellnessPage />} />
            <Route path="/tracker" element={<TrackerPage />} />
            <Route path="/scenarios" element={<ScenarioLearningPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/premium" element={<PremiumPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
