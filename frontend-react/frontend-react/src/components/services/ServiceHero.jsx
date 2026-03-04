
import { motion } from 'framer-motion';

const ServiceHero = ({ title, subtitle, description, badge }) => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#FFFFFF] selection:bg-teal-50 selection:text-[#111111]">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-gray-50 via-white to-gray-50 pointer-events-none"></div>
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-teal-50 rounded-full blur-[120px] animate-pulse-slow pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-50 rounded-full blur-[120px] animate-pulse-slow delay-1000 pointer-events-none"></div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-200 bg-teal-50 backdrop-blur-md mb-8">
                        <span className="w-2 h-2 rounded-full bg-[#0F766E] animate-pulse"></span>
                        <span className="text-xs uppercase tracking-widest text-[#0F766E] font-bold">{badge}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
                        <span className="block text-[#111111] mb-2">{title}</span>
                        <span className="text-[#2563EB]">
                            {subtitle}
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-[#555555] max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="px-8 py-4 bg-[#0F766E] hover:bg-teal-700 text-white font-bold rounded-full shadow-md transition-all hover:scale-105 active:scale-95">
                            Schedule Demo
                        </button>
                        <button className="px-8 py-4 bg-[#F8FAFC] hover:bg-gray-100 border border-gray-200 text-[#111111] font-bold rounded-full transition-all shadow-sm">
                            View Case Studies
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceHero;
