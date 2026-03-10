
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialModal from './social/SocialModal';

const Hero = () => {
    const [isSocialOpen, setIsSocialOpen] = useState(false);

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
            {/* Full Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/hero-bg.png')" }}
            >
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50"></div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="max-w-2xl">

                    {/* Left Column: Text & CTA */}
                    <div className="text-left">
                        {/* Animated Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-8 shadow-sm">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                            <span className="text-xs font-semibold text-white tracking-widest uppercase">The Future of EdTech</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 tracking-tight text-white">
                            Empowering Education <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] via-cyan-400 to-[#2563EB]">
                                Through Innovation
                            </span>
                        </h1>

                        {/* Subtext */}
                        <p className="text-xl text-white/90 font-medium max-w-xl mb-10 leading-relaxed">
                            Noble Nexus brings together AI-powered LMS, ERP, and digital classroom tools into one unified, enterprise-grade platform.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-3 xl:flex-nowrap">
                            <Link to="/why-noble-nexus" className="px-6 py-4 bg-[#2563EB] hover:bg-blue-700 text-[#FFFFFF] font-bold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 group whitespace-nowrap">
                                Why Noble Nexus <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>

                            <button onClick={() => setIsSocialOpen(true)} className="px-6 py-4 bg-[#0F766E] hover:bg-teal-700 text-[#FFFFFF] font-bold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap">
                                Design as a Service
                            </button>

                            <Link to="/contact" className="px-6 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/20 shadow-sm transition-all flex items-center justify-center whitespace-nowrap">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-70 hidden lg:block">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </div>

            {/* Social Media Modal */}
            <SocialModal isOpen={isSocialOpen} onClose={() => setIsSocialOpen(false)} />
        </section>
    );
};

export default Hero;
