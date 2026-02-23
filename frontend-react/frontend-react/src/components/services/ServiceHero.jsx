
import { motion } from 'framer-motion';

const ServiceHero = ({ title, subtitle, description, badge }) => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-navy selection:bg-teal selection:text-navy">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-navy-900 via-navy to-navy pointer-events-none"></div>
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-teal/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple/10 rounded-full blur-[120px] animate-pulse-slow delay-1000 pointer-events-none"></div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal/20 bg-teal/10 backdrop-blur-md mb-8">
                        <span className="w-2 h-2 rounded-full bg-teal animate-pulse"></span>
                        <span className="text-xs uppercase tracking-widest text-teal font-semibold">{badge}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
                        <span className="block text-white mb-2">{title}</span>
                        <span className="bg-gradient-to-r from-teal via-white to-purple bg-clip-text text-transparent">
                            {subtitle}
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="px-8 py-4 bg-teal hover:bg-teal-500 text-navy-950 font-bold rounded-full shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all hover:scale-105 active:scale-95">
                            Schedule Demo
                        </button>
                        <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 backdrop-blur-md text-white font-medium rounded-full transition-all">
                            View Case Studies
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceHero;
