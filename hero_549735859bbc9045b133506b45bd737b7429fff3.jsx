
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialModal from './social/SocialModal';

const Hero = () => {
    const [isSocialOpen, setIsSocialOpen] = useState(false);

    return (
        <section className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 overflow-hidden min-h-screen flex items-center">
            {/* Premium Background Image */}
            <div className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat transition-opacity duration-1000" style={{ backgroundImage: "url('/hero-bg-v2.png')" }}></div>

            {/* Glassmorphism Overlay for Text Clarity */}
            <div className="absolute inset-0 z-0 bg-white/40 backdrop-blur-[4px] bg-gradient-to-tr from-white/60 via-transparent to-teal-50/30"></div>

            {/* Atmospheric Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            {/* Bottom Fade Transition */}
            <div className="absolute bottom-0 left-0 w-full h-[200px] z-0 bg-gradient-to-t from-[#FFFFFF] to-transparent"></div>

            <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">



                {/* Main Heading */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black leading-tight mb-12 tracking-tight text-[#0F172A] max-w-4xl mx-auto">
                    Empowering Education <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#3B82F6]">
                        Through Innovation
                    </span>
                </h1>

                {/* Subtext */}
                <p className="text-xl text-[#334155] font-medium mx-auto mb-16 leading-[2.2] max-w-[800px]">
                    Noble Nexus brings together AI-powered LMS, ERP, and digital classroom tools into one unified, enterprise-grade platform.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center gap-8 xl:flex-nowrap">
                    <button onClick={() => setIsSocialOpen(true)} className="px-10 py-5 bg-[#0D9488] hover:bg-[#0B7A70] text-white font-bold rounded-full shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap">
                        Design as a Service
                    </button>
                    <Link to="/contact" className="px-10 py-5 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#1E40AF] text-white font-bold rounded-full shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap">
                        Get Started
                    </Link>
                </div>

            </div>
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-70 hidden lg:block text-slate-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </div>

            {/* Social Media Modal */}
            <SocialModal isOpen={isSocialOpen} onClose={() => setIsSocialOpen(false)} />
        </section>
    );
};

export default Hero;
