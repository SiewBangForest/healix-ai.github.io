
import React from 'react';
import { Mail, MessageCircle, MapPin, Send, Phone, Globe } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Get in Touch</h1>
        <p className="text-slate-600">Have questions? We're here to help you on your wellness journey.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Subject</label>
              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20">
                <option>Technical Support</option>
                <option>Subscription Issues</option>
                <option>Business Partnerships</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Message</label>
              <textarea rows={5} placeholder="How can we help?" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20"></textarea>
            </div>
            <button className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all">
              <Send size={20} /> Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Support</div>
                  <div className="text-lg font-bold text-slate-900">hello@healixwellness.ai</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">WhatsApp Support</div>
                  <div className="text-lg font-bold text-slate-900">+1 (555) 000-HEAL</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Main Office</div>
                  <div className="text-lg font-bold text-slate-900">Silicon Valley, California</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
            <h3 className="text-xl font-bold mb-4">Business & Partnerships</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Are you a wellness coach, nutrition expert, or brand looking to collaborate on educational content?
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                 <Phone size={16} /> Partner Hotline: +1 (555) 999-TEAM
              </div>
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                 <Globe size={16} /> healixwellness.ai/partners
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
