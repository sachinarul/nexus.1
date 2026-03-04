import { motion } from "framer-motion";
import { Cpu, Network, GraduationCap } from "lucide-react";

const DashboardPreview = () => {
    return (
        <section className="relative z-20 px-4 mt-12 mb-10">
            <div className="container mx-auto max-w-[90%] lg:max-w-6xl flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-2xl overflow-hidden border border-gray-200 bg-[#ffffff] shadow-[0_0_30px_rgba(20,184,166,0.1)] group flex items-center justify-center min-h-[160px] h-40 sm:h-48 md:h-56 lg:h-64 w-full max-w-2xl lg:max-w-5xl xl:max-w-6xl"
                >
                    {/* Glowing effect behind image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-teal/20 via-purple-500/10 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>

                    {/* Dark overlay for contrast */}
                    <div className="absolute inset-0 bg-[#ffffff] z-10 opacity-70"></div>

                    {/* Highly relevant, constrained abstract network/education image */}
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=300&q=80"
                        alt="Empowering Education Through Innovation"
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-20"
                    />

                    {/* Floating Icons representing unified platform (LMS, ERP, Digital Classroom) */}
                    <div className="relative z-20 flex flex-col items-center p-6 text-center w-full h-full justify-center">
                        <div className="flex items-center justify-center gap-6 sm:gap-12 mb-3">
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-100 border-2 border-teal-500 flex items-center justify-center backdrop-blur-md shadow-md">
                                    <GraduationCap className="text-teal-700 w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
                                </div>
                                <span className="text-xs sm:text-sm font-extrabold text-[#000000] tracking-widest uppercase drop-shadow-sm">LMS</span>
                            </div>

                            <div className="w-6 sm:w-10 h-0.5 bg-gradient-to-r from-teal/30 to-purple-500/30 rounded-full"></div>

                            <div className="flex flex-col items-center gap-2 relative z-10">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-100 border-2 border-purple-500 flex items-center justify-center backdrop-blur-md shadow-md">
                                    <Network className="text-purple-600 w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2.5} />
                                </div>
                                <span className="text-xs sm:text-sm font-extrabold text-[#000000] tracking-widest uppercase drop-shadow-sm">Unified AI</span>
                            </div>

                            <div className="w-6 sm:w-10 h-0.5 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full"></div>

                            <div className="flex flex-col items-center gap-2">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center backdrop-blur-md shadow-md">
                                    <Cpu className="text-blue-600 w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
                                </div>
                                <span className="text-xs sm:text-sm font-extrabold text-[#000000] tracking-widest uppercase drop-shadow-sm">ERP</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DashboardPreview;
