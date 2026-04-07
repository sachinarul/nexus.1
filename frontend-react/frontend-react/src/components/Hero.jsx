import { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialModal from './social/SocialModal';

const Hero = () => {
    const [isSocialOpen, setIsSocialOpen] = useState(false);
    const [activeNode, setActiveNode] = useState(null);

    const nodes = [
        { label: 'AI-POWERED LMS', dotX: 0, dotY: -150, textX: 0, textY: -100 },
        { label: 'ENTERPRISE ERP', dotX: 130, dotY: -75, textX: 135, textY: 0 },
        { label: 'SECURE CLOUD', dotX: -130, dotY: -75, textX: -135, textY: 0 },
        { label: 'DIGITAL CLASSROOMS', dotX: 130, dotY: 75, textX: 135, textY: 115 },
        { label: 'PROCESS AUTOMATION', dotX: -130, dotY: 75, textX: -135, textY: 115 },
        { label: 'INSIGHT ANALYTICS', dotX: 0, dotY: 150, textX: 0, textY: 190 }
    ];

    return (
        <section className="relative pt-20 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-[#020617] min-h-screen flex items-center font-body selection:bg-[#00E5FF] selection:text-black">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
            }}></div>
            
            {/* Edge Gradients for Depth */}
            <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-cyan-900/10 blur-[150px] pointer-events-none z-0"></div>
            <div className="absolute -right-1/4 bottom-0 w-1/2 h-full bg-blue-900/10 blur-[150px] pointer-events-none z-0"></div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Left Column: Text & CTA */}
                    <div className="text-left">
                        {/* Cyan Line Accent */}
                        <div className="w-12 h-1 bg-[#00D2FF] mb-6 shadow-[0_0_10px_#00E5FF]"></div>

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.1] mb-6 tracking-[-0.02em] text-white">
                            Empowering <br />
                            Education <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#3B82F6]">
                                Through <br />
                                Innovation
                            </span>
                        </h1>

                        {/* Subtext */}
                        {/* Subtext */}
                        <p className="text-base text-slate-400 font-medium font-body max-w-[500px] mb-8 leading-relaxed">
                            Noble Nexus brings together AI-powered LMS, ERP, and digital classroom tools into one unified, enterprise-grade platform to unlock continuous value.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 xl:flex-nowrap">
                            <Link to="/contact" className="px-6 py-3 bg-[#3B82F6] hover:bg-blue-500 text-white font-heading font-semibold rounded shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 uppercase tracking-[0.1em] text-xs whitespace-nowrap">
                                Get Started
                            </Link>

                            <button onClick={() => setIsSocialOpen(true)} className="px-6 py-3 bg-[#0A1128] border border-slate-700 hover:border-slate-500 hover:bg-[#0F172A] text-white font-heading font-semibold rounded shadow-lg transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 uppercase tracking-[0.1em] text-xs whitespace-nowrap">
                                Design as a Service
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Animated Core Diagram matching the exact screenshot */}
                    <div className="relative w-full h-[500px] lg:h-[600px] hidden lg:flex items-center justify-center">
                        
                        {/* Radar Concrentric Circles with Animation */}
                        <div className="absolute w-[300px] h-[300px] rounded-full border border-slate-700/30 border-dashed animate-[spin_60s_linear_infinite]"></div>
                        <div className="absolute w-[440px] h-[440px] rounded-full border border-slate-700/20 border-dotted animate-[spin_40s_reverse_linear_infinite] hidden xl:block"></div>
                        
                        {/* Radar Cross Lines (matching the 300px circle) */}
                        <div className="absolute h-[320px] w-[1px] bg-slate-700/20"></div>
                        <div className="absolute w-[320px] h-[1px] bg-slate-700/20 rotate-[60deg]"></div>
                        <div className="absolute w-[320px] h-[1px] bg-slate-700/20 -rotate-[60deg]"></div>

                        {/* Center Hexagon Core */}
                        <div className="absolute z-20 w-[140px] h-[140px] flex items-center justify-center group cursor-pointer transition-transform duration-500 hover:scale-105">
                            <svg viewBox="0 0 100 100" className="absolute w-full h-full drop-shadow-[0_0_20px_rgba(0,190,255,0.8)] transition-all duration-500 group-hover:drop-shadow-[0_0_40px_rgba(0,229,255,1)]">
                                <defs>
                                    <linearGradient id="hexGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#0EA5E9" />
                                        <stop offset="100%" stopColor="#06B6D4" />
                                    </linearGradient>
                                </defs>
                                {/* Flat-topped Hexagon */}
                                <polygon points="25 5, 75 5, 95 50, 75 95, 25 95, 5 50" fill="#020617" stroke="url(#hexGrad)" strokeWidth="3" />
                            </svg>
                            <div className="z-30 text-center font-bold text-white text-[12px] tracking-[0.1em] leading-snug uppercase mt-1 drop-shadow-md group-hover:text-[#00E5FF] transition-colors duration-300">
                                NOBLE<br/>NEXUS<br/>CORE
                            </div>
                        </div>

                        {/* Render Nodes (Dots and Text synced by Hover State) */}
                        {nodes.map((node, i) => {
                            const isActive = activeNode === i;
                            return (
                                <div key={i}>
                                    {/* Glowing Dot */}
                                    <div 
                                        className={`absolute z-10 w-4 h-4 bg-[#00E5FF] rounded-full shadow-[0_0_20px_#00E5FF] transition-all duration-300 cursor-crosshair flex items-center justify-center ${isActive ? 'scale-[1.5] shadow-[0_0_35px_#00E5FF] bg-white' : ''}`}
                                        style={{ 
                                            top: '50%', left: '50%',
                                            transform: `translate(calc(-50% + ${node.dotX}px), calc(-50% + ${node.dotY}px))` 
                                        }}
                                        onMouseEnter={() => setActiveNode(i)}
                                        onMouseLeave={() => setActiveNode(null)}
                                    >
                                        {isActive && <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75"></div>}
                                    </div>

                                    {/* Label Box */}
                                    <div 
                                        className="absolute z-20 flex flex-col items-center justify-center transition-transform duration-300" 
                                        style={{ 
                                            top: '50%', left: '50%',
                                            transform: `translate(calc(-50% + ${node.textX}px), calc(-50% + ${node.textY}px))` 
                                        }}
                                    >
                                        <div 
                                            className={`px-3 py-2 bg-[#050B19] border rounded text-[10px] font-bold tracking-[0.05em] whitespace-nowrap shadow-[0_4px_15px_rgba(0,0,0,0.5)] cursor-pointer transition-all duration-300 ${isActive ? 'border-[#00E5FF] shadow-[0_0_25px_rgba(0,229,255,0.5)] scale-110 text-white' : 'border-slate-700/60 text-cyan-50/90'}`}
                                            onMouseEnter={() => setActiveNode(i)}
                                            onMouseLeave={() => setActiveNode(null)}
                                        >
                                            {node.label}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Social Media Modal */}
            <SocialModal isOpen={isSocialOpen} onClose={() => setIsSocialOpen(false)} />
        </section>
    );
};

export default Hero;
