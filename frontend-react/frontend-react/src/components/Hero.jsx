import { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialModal from './social/SocialModal';

const Hero = () => {
    const [isSocialOpen, setIsSocialOpen] = useState(false);

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
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black leading-[1.1] mb-6 tracking-tight text-white">
                            Empowering <br />
                            Education <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#3B82F6]">
                                Through <br />
                                Innovation
                            </span>
                        </h1>

                        {/* Subtext */}
                        <p className="text-base text-slate-400 font-medium max-w-[500px] mb-8 leading-relaxed">
                            Noble Nexus brings together AI-powered LMS, ERP, and digital classroom tools into one unified, enterprise-grade platform to unlock continuous value.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 xl:flex-nowrap">
                            <Link to="/contact" className="px-6 py-3 bg-[#3B82F6] hover:bg-blue-500 text-white font-bold rounded shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wider text-xs whitespace-nowrap">
                                Get Started
                            </Link>

                            <button onClick={() => setIsSocialOpen(true)} className="px-6 py-3 bg-[#0A1128] border border-slate-700 hover:border-slate-500 hover:bg-[#0F172A] text-white font-bold rounded shadow-lg transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wider text-xs whitespace-nowrap">
                                Design as a Service
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Animated Core Diagram matching the exact screenshot */}
                    <div className="relative w-full h-[500px] lg:h-[600px] hidden lg:flex items-center justify-center">
                        
                        {/* Radar Concrentric Circles */}
                        <div className="absolute w-[360px] h-[360px] rounded-full border border-slate-700/30"></div>
                        <div className="absolute w-[240px] h-[240px] rounded-full border border-slate-800/40"></div>
                        
                        {/* Radar Cross Lines */}
                        <div className="absolute h-[360px] w-[1px] bg-slate-700/30"></div>
                        <div className="absolute w-[360px] h-[1px] bg-slate-700/30 rotate-[60deg]"></div>
                        <div className="absolute w-[360px] h-[1px] bg-slate-700/30 -rotate-[60deg]"></div>

                        {/* Center Hexagon Core (Flat-topped matching the image exactly) */}
                        <div className="absolute z-20 w-48 h-48 flex items-center justify-center">
                            <svg viewBox="0 0 100 100" className="absolute w-full h-full drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                                <defs>
                                    <linearGradient id="hexGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#2563EB" />
                                        <stop offset="100%" stopColor="#00E5FF" />
                                    </linearGradient>
                                </defs>
                                {/* Flat-topped Hexagon */}
                                <polygon points="25 5, 75 5, 95 50, 75 95, 25 95, 5 50" fill="#030B1C" stroke="url(#hexGrad)" strokeWidth="2.5" />
                            </svg>
                            <div className="z-30 text-center font-bold text-white text-[11px] tracking-[0.2em] leading-[1.8] uppercase mt-1">
                                NOBLE<br/>NEXUS<br/>CORE
                            </div>
                        </div>

                        {/* Orbiting Nodes mapping perfectly to the 360px circle */}
                        {[ 
                            { label: 'AI-POWERED LMS', x: 0, y: -180, textY: 30 },
                            { label: 'ENTERPRISE ERP', x: 156, y: -90, textY: 30 },
                            { label: 'SECURE CLOUD', x: -156, y: -90, textY: 30 },
                            { label: 'DIGITAL CLASSROOMS', x: 156, y: 90, textY: -30 },
                            { label: 'PROCESS AUTOMATION', x: -156, y: 90, textY: -30 },
                            { label: 'INSIGHT ANALYTICS', x: 0, y: 180, textY: -30 }
                        ].map((node, i) => (
                            <div key={i} className="absolute z-10 flex flex-col items-center justify-center" style={{ transform: `translate(${node.x}px, ${node.y}px)` }}>
                                {/* Glowing Dot positioned exactly on the radar intersections */}
                                <div className="z-10 w-3.5 h-3.5 bg-[#00E5FF] rounded-full shadow-[0_0_15px_#00E5FF]"></div>
                                
                                {/* Label Box aligned offset towards the center */}
                                <div className="absolute z-20 px-3 py-1.5 bg-[#0A1128]/95 border border-[#1E293B] rounded text-[9px] font-bold tracking-[0.1em] text-slate-300 backdrop-blur-md whitespace-nowrap shadow-lg transition-colors hover:border-[#00E5FF]/50" 
                                     style={{ transform: `translateY(${node.textY}px)` }}>
                                    {node.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Social Media Modal */}
            <SocialModal isOpen={isSocialOpen} onClose={() => setIsSocialOpen(false)} />
        </section>
    );
};

export default Hero;
