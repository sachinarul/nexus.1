
import { useState } from 'react';
import { Play, BookOpen, GraduationCap, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const SocialSection = () => {
    const [activeTab, setActiveTab] = useState('youtube');

    const tabs = [
        { id: 'youtube', label: 'Offerings', icon: Play },
        { id: 'lms', label: 'LMS Platform', icon: BookOpen },
        { id: 'classbridge', label: 'ClassBridge', icon: ShieldCheck },
    ];

    return (
        <section id="video-showcase" className="py-20 lg:py-32 bg-white relative overflow-hidden font-body">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
                
                {/* Header Area */}
                <div className="max-w-3xl mx-auto mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-teal-600 font-bold tracking-[0.2em] text-sm uppercase mb-4 block"
                    >
                        Our Vision
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display font-black text-[#0F172A] leading-tight mb-8"
                    >
                        Noble <span className="text-teal-600">Nexus</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto italic border-l-4 border-teal-500 pl-6 text-left"
                    >
                        "Empowering educators and organizations through innovative technology that transforms the way the world learns."
                    </motion.p>
                </div>

                {/* Tab Switcher */}
                <div className="flex justify-center mb-16 px-4">
                    <div className="bg-slate-100/80 backdrop-blur-md p-1.5 rounded-[24px] flex gap-2 border border-slate-200/50 shadow-inner">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold transition-all duration-500 ${
                                    activeTab === tab.id
                                        ? 'bg-white text-teal-600 shadow-xl scale-105'
                                        : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                                }`}
                            >
                                <tab.icon size={18} className={activeTab === tab.id ? 'animate-pulse' : ''} />
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Area with AnimatePresence */}
                <div className="max-w-5xl mx-auto relative min-h-[500px]">
                    <AnimatePresence mode="wait">
                        {activeTab === 'youtube' && (
                            <motion.div
                                key="youtube"
                                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="bg-slate-50 p-4 sm:p-8 rounded-[40px] border border-slate-100 shadow-2xl relative overflow-hidden group"
                            >
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500"></div>
                                <div className="relative w-full rounded-3xl overflow-hidden shadow-lg bg-black ring-1 ring-slate-200/50 aspect-video">
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src="https://www.youtube.com/embed/44QapafwJt0?rel=0"
                                        title="Noble Nexus - Our Offerings"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'lms' && (
                            <motion.div
                                key="lms"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="grid lg:grid-cols-2 gap-10 items-center bg-white p-8 lg:p-12 rounded-[40px] border border-slate-100 shadow-2xl overflow-hidden text-left"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-8 border border-teal-100">
                                        <GraduationCap size={24} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-6">Core LMS Platform</h3>
                                    <p className="text-slate-600 font-medium text-lg leading-relaxed mb-8">
                                        A powerful, intuitive Learning Management System designed to handle complex educational workflows with ease. Used by elite institutions globally to deliver state-of-the-art interactive content.
                                    </p>
                                    <ul className="space-y-4 mb-10">
                                        {[
                                            'SCORM & xAPI Compliant',
                                            'Interactive Lesson Builder',
                                            'Real-time Analytics Dashboard'
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-3 font-bold text-slate-700">
                                                <div className="w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center text-white">
                                                    <Zap size={12} fill="currentColor" />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/products/lms" className="inline-flex items-center gap-2 px-8 py-4 bg-teal-600 text-white font-bold rounded-2xl hover:bg-teal-700 hover:translate-x-1 transition-all shadow-lg">
                                        See LMS in Action <ArrowRight size={18} />
                                    </Link>
                                </div>
                                <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group relative">
                                    <img src="/modern_lms_dashboard_mockup_1772614506644.png" alt="LMS Preview" className="w-full h-auto group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'classbridge' && (
                            <motion.div
                                key="classbridge"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="grid lg:grid-cols-2 gap-10 items-center bg-[#0F172A] p-8 lg:p-12 rounded-[40px] border border-slate-800 shadow-2xl overflow-hidden text-left"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-8 border border-teal-500/20">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-6">ClassBridge AI Portal</h3>
                                    <p className="text-slate-400 font-medium text-lg leading-relaxed mb-8">
                                        Our flagship school management portal. A unified ecosystem that bridges teachers, students, parents, and administrators with AI-powered efficiency and total structural control.
                                    </p>
                                    <ul className="space-y-4 mb-10">
                                        {[
                                            'Multi-Tenant Institution Support',
                                            'Granular Role-Based Permissions',
                                            'Integrated Finance & HRM'
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-3 font-bold text-slate-300">
                                                <div className="w-5 h-5 rounded-full bg-teal-400 flex items-center justify-center text-[#0F172A]">
                                                    <Zap size={12} fill="currentColor" />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/products/classbridge" className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 text-[#0F172A] font-bold rounded-2xl hover:bg-teal-400 hover:translate-x-1 transition-all shadow-lg shadow-teal-500/20">
                                        Explore ClassBridge <ArrowRight size={18} />
                                    </Link>
                                </div>
                                <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900 group relative p-1">
                                    <img src="/classbridge_hero_viz.png" alt="ClassBridge Preview" className="w-full h-auto rounded-2xl " />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default SocialSection;
