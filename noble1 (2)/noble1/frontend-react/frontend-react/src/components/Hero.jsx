
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialModal from './social/SocialModal';

const ecosystemNodes = [
    'Veda',
    'Enterprise ERP',
    'Digital Classrooms',
    'Insight Analytics',
    'Process Automation',
    'Secure Cloud'
];

const Hero = () => {
    const [isSocialOpen, setIsSocialOpen] = useState(false);

    return (
        <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-32 overflow-hidden min-h-[95vh] flex items-center bg-[#030712]">
            {/* Elegant dark geometric/mesh background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Glowing orbs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1E3A8A] rounded-full blur-[150px] opacity-40 translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0891B2] rounded-full blur-[120px] opacity-30 -translate-x-1/3 translate-y-1/3"></div>
                
                {/* Grid Pattern overlay */}
                <div 
                    className="absolute inset-0 opacity-[0.03]" 
                    style={{ 
                        backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 40%, transparent 100%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 40%, transparent 100%)'
                    }}
                ></div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
                    
                    {/* Left Column: Text Content */}
                    <div className="w-full lg:w-5/12 flex flex-col items-start text-left">
                        {/* Decorative dash */}
                        <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-8 rounded-full"></div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-extrabold leading-[1.1] mb-8 text-white tracking-tight">
                            Empowering Education <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 block mt-2">
                                Through Innovation
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-blue-100/80 font-medium mb-10 max-w-xl leading-relaxed border-l-2 border-white/10 pl-6">
                            Noble Nexus brings together Veda, ERP, and digital classroom tools into one unified, enterprise-grade platform to unlock continuous value.
                        </p>

                        <div className="flex flex-wrap items-center gap-6">
                            <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded shadow-lg shadow-blue-500/20 hover:shadow-cyan-500/30 transition-all uppercase tracking-wider text-sm flex items-center justify-center gap-2 relative overflow-hidden group">
                                <span className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                                <span className="relative z-10">Get Started</span>
                            </Link>

                            <button onClick={() => setIsSocialOpen(true)} className="px-8 py-4 border border-cyan-500/50 hover:border-cyan-400 bg-cyan-950/30 hover:bg-cyan-900/40 text-cyan-50 font-bold rounded shadow-lg transition-all uppercase tracking-wider text-sm flex items-center justify-center backdrop-blur-sm">
                                Design as a Service
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Interactive Ecosystem Wheel (Infosys Conceptual Graphic alternative) */}
                    <div className="w-full lg:w-7/12 flex justify-center items-center mt-12 lg:mt-0 relative h-[400px] md:h-[500px] perspective-1000">
                        {/* Orbit rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[380px] h-[280px] md:h-[380px] rounded-full border border-blue-500/20 shadow-[inset_0_0_50px_rgba(59,130,246,0.1)]"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] md:w-[600px] h-[420px] md:h-[600px] border border-cyan-500/10 rounded-full border-dashed animate-[spin_60s_linear_infinite_reverse]"></div>
                        
                        {/* Connecting rays (mocking spokes) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent rotate-0"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent rotate-60"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -rotate-60"></div>

                        {/* Center Hub */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-32 h-32 md:w-40 md:h-40">
                            {/* Hexagon shape using clip-path */}
                            <div className="w-full h-full bg-gradient-to-br from-blue-700 to-cyan-400 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.4)] transition-transform duration-500 hover:scale-105" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                                <div className="w-[94%] h-[94%] bg-[#0B1120] flex items-center justify-center p-4 text-center" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                                    <span className="font-bold text-white text-sm md:text-base leading-tight uppercase tracking-widest">
                                        Noble<br />Nexus<br />Core
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Orbiting Satellite Nodes */}
                        {ecosystemNodes.map((node, i) => {
                            const angle = (i * 60 - 90) * (Math.PI / 180); // Start at top
                            // Use smaller radius on mobile, larger on tablet+
                            const radiusMobile = 140; 
                            const radiusMd = 190;
                            // Calculate CSS positioning variables
                            const topX = `calc(50% + ${Math.cos(angle)} * var(--radius))`;
                            const topY = `calc(50% + ${Math.sin(angle)} * var(--radius))`;

                            return (
                                <div 
                                    key={node} 
                                    className="absolute z-30 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer"
                                    style={{
                                        '--radius': '140px', // Fallback
                                        left: topX,
                                        top: topY,
                                    }}
                                >
                                    {/* Responsive override for medium up */}
                                    <style>{`
                                        @media (min-width: 768px) {
                                            div[data-node="${i}"] {
                                                --radius: ${radiusMd}px !important;
                                            }
                                        }
                                    `}</style>
                                    
                                    {/* Tech Icon / Dot */}
                                    <div data-node={i} className="w-4 h-4 md:w-5 md:h-5 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)] group-hover:scale-150 group-hover:bg-white transition-all duration-300"></div>
                                    
                                    {/* Label container floating outside */}
                                    <div className={`absolute whitespace-nowrap bg-[#0F172A] border border-blue-500/30 px-3 py-1.5 md:px-4 md:py-2 rounded translate-y-6 md:translate-y-8 text-cyan-50 text-[10px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md opacity-80 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:border-cyan-400 group-hover:text-cyan-400 transition-all duration-300 ${i > 1 && i < 4 ? 'translate-y-8' : ''}`}>
                                        {node}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <SocialModal isOpen={isSocialOpen} onClose={() => setIsSocialOpen(false)} />
        </section>
    );
};

export default Hero;
