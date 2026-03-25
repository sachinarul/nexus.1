import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy selection:bg-teal selection:text-navy">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-teal/10 rounded-full blur-[120px]" />

                {/* Floating Particles */}
                {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full opacity-20"
                        style={{
                            width: Math.random() * 4 + 1 + 'px',
                            height: Math.random() * 4 + 1 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                        <span className="text-sm font-medium text-teal tracking-wide">AI-POWERED INFRASTRUCTURE</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
                        Re-Engineering <br />
                        <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">
                            Education
                        </span> for the <br />
                        Intelligence Era
                    </h1>

                    <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                        The world's first unified platform combining AI-powered personalized learning,
                        intelligent administration, and predictive analytics.
                        Built for institutions that demand the future.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-teal to-purple rounded-lg font-bold text-white overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,245,212,0.3)]">
                            <span className="relative z-10 flex items-center gap-2">
                                Explore Platform <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>

                        <button className="group px-8 py-4 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm font-bold text-white hover:bg-white/10 transition-all flex items-center gap-2">
                            <Play className="w-5 h-5 fill-current" /> Book a Demo
                        </button>
                    </div>
                </motion.div>

                {/* Right Content - Neural Sphere Animation */}
                <div className="relative h-[600px] w-full flex items-center justify-center perspective-1000">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative w-96 h-96"
                    >
                        {/* Core Sphere */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal/20 to-purple/20 blur-3xl animate-pulse" />

                        {/* Orbiting Rings */}
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className={`absolute inset-0 border border-teal/30 rounded-full`}
                                style={{
                                    transform: `rotateX(${60 + i * 20}deg) rotateY(${i * 45}deg)`,
                                    animation: `spin ${10 + i * 5}s linear infinite reverse`
                                }}
                            />
                        ))}

                        {/* Neural Nodes */}
                        <div className="absolute inset-0 animate-spin-slow">
                            {[...Array(12)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                        transform: `rotate(${i * 30}deg) translateY(-180px)`,
                                    }}
                                >
                                    <div className="absolute inset-0 animate-ping opacity-75 bg-teal rounded-full" />
                                </div>
                            ))}

                            {/* Connecting Lines (Svg overlay) */}
                            <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
                                <circle cx="50%" cy="50%" r="180" fill="none" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="10 20" />
                                <defs>
                                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#00F5D4" />
                                        <stop offset="100%" stopColor="#8B5CF6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        {/* Central Brain/Core */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-teal to-purple rounded-full blur-md opacity-80 animate-float" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
