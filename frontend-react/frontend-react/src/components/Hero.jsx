
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialModal from './social/SocialModal';

const Hero = () => {
    const [isSocialOpen, setIsSocialOpen] = useState(false);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy pt-32 pb-20">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg.png"
                    alt="Background"
                    className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 bg-navy-950/40 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy/40 to-navy"></div>

                {/* Minimal Floating Particles */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-teal rounded-full animate-float opacity-50"></div>
                    <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float-delayed opacity-40"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping-slow opacity-30"></div>
                </div>
            </div>

            {/* Central Content */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center">

                {/* Animated Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/20 bg-teal/5 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(20,184,166,0.1)] animate-fade-in-up hover:border-teal/40 transition-colors cursor-default">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-teal"></span>
                    </span>
                    <span className="text-xs font-semibold text-teal tracking-widest uppercase">The Future of EdTech</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6 tracking-tight relative">
                    {/* Soft Glow Behind Text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

                    <span className="block text-white drop-shadow-lg mb-2">Empowering Education</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal via-cyan-400 to-blue-500 drop-shadow-md pb-2 animate-gradient-x">
                        Through Innovation
                    </span>
                </h1>

                {/* Subtext */}
                <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
                    Noble Nexus brings together AI-powered LMS, ERP, and digital classroom tools into one unified, enterprise-grade platform.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link to="/why-noble-nexus" className="group relative px-8 py-4 bg-gradient-to-r from-teal to-blue-600 text-white font-bold rounded-full shadow-[0_0_20px_rgba(20,184,166,0.5)] hover:shadow-[0_0_30px_rgba(20,184,166,0.8)] transition-all transform hover:-translate-y-1 active:scale-95 min-w-[200px] overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 origin-left"></div>
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Why Noble Nexus <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                    </Link>

                    <Link to="/contact" className="group px-8 py-4 bg-navy-900 border-2 border-teal/50 text-white font-bold rounded-full transition-all min-w-[180px] hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:bg-teal hover:text-navy-900 flex items-center justify-center">
                        Contact Us
                    </Link>

                    {/* New Design as a Service Button */}
                    <button
                        onClick={() => setIsSocialOpen(true)}
                        className="group px-8 py-4 bg-transparent hover:bg-teal/5 border border-teal/30 hover:border-teal/60 backdrop-blur-md text-teal font-medium rounded-lg transition-all min-w-[180px] hover:shadow-[0_4px_20px_rgba(20,184,166,0.1)] flex items-center justify-center gap-2"
                    >
                        Design as a Service
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </div>

            {/* Social Media Modal */}
            <SocialModal isOpen={isSocialOpen} onClose={() => setIsSocialOpen(false)} />
        </section>
    );
};

export default Hero;
