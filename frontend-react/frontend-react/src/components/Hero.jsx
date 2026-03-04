
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialModal from './social/SocialModal';

const Hero = () => {
    const [isSocialOpen, setIsSocialOpen] = useState(false);

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FFFFFF] min-h-screen flex items-center">
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 z-0 bg-[#FFFFFF]"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow delay-1000"></div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Text & CTA */}
                    <div className="text-left">
                        {/* Animated Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-200 bg-teal-50 mb-8 shadow-sm">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0F766E] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0F766E]"></span>
                            </span>
                            <span className="text-xs font-semibold text-[#0F766E] tracking-widest uppercase">The Future of EdTech</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 tracking-tight text-[#111111]">
                            Empowering Education <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] via-cyan-600 to-[#2563EB]">
                                Through Innovation
                            </span>
                        </h1>

                        {/* Subtext */}
                        <p className="text-xl text-[#555555] font-medium max-w-xl mb-10 leading-relaxed">
                            Noble Nexus brings together AI-powered LMS, ERP, and digital classroom tools into one unified, enterprise-grade platform.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <Link to="/why-noble-nexus" className="px-8 py-4 bg-[#2563EB] hover:bg-blue-700 text-[#FFFFFF] font-bold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 group">
                                Why Noble Nexus <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>

                            <Link to="/contact" className="px-8 py-4 bg-[#FFFFFF] border-2 border-gray-200 text-[#111111] font-bold rounded-full hover:bg-gray-50 hover:border-gray-300 shadow-sm transition-all flex items-center justify-center">
                                Contact Us
                            </Link>

                            <button onClick={() => setIsSocialOpen(true)} className="px-8 py-4 bg-[#0F766E] hover:bg-teal-700 text-[#FFFFFF] font-bold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2">
                                Design as a Service
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Hero Image (No weird shades) */}
                    <div className="relative group perspective-1000 hidden lg:block">
                        <div className="relative z-10 rounded-3xl overflow-hidden border border-gray-200 shadow-2xl bg-[#FFFFFF] transform transition-transform duration-500 hover:rotate-y-2 hover:rotate-x-2">
                            <img
                                src="/hero-bg.png"
                                alt="Noble Nexus Platform"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 min-h-[500px]"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                                }}
                            />
                        </div>
                        {/* Decorative background blobs to anchor the image */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-teal-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10 group-hover:opacity-100 transition-opacity opacity-60"></div>
                    </div>
                </div>
            </div>
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-70 hidden lg:block">
                <svg className="w-6 h-6 text-[#111111]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </div>

            {/* Social Media Modal */}
            <SocialModal isOpen={isSocialOpen} onClose={() => setIsSocialOpen(false)} />
        </section>
    );
};

export default Hero;
