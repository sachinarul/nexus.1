import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const ContactCTA = () => {
    return (
        <section className="py-20 lg:py-28 bg-[#020617] relative overflow-hidden font-body selection:bg-[#00E5FF] selection:text-black">
            {/* Dark Theme Background Decor */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
            }}></div>
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#00E5FF]/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

            {/* Contact CTA Area */}
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto flex flex-col items-center py-8"
                >
                    <h3 className="text-3xl md:text-5xl font-heading font-black text-white mb-4 tracking-[-0.02em]">
                        Transforming Education <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#3B82F6]">
                            with Innovative eLearning Solutions
                        </span>
                    </h3>

                    {/* Cyan Line Accent matching Hero */}
                    <div className="w-16 h-1 bg-[#00E5FF] rounded-full my-8 shadow-[0_0_15px_#00E5FF]"></div>

                    <h4 className="text-xl md:text-2xl font-heading font-semibold text-slate-300 mb-12">
                        Contact us for tailored solutions.
                    </h4>

                    <div className="flex flex-col sm:flex-row items-stretch justify-center gap-6 md:gap-8 w-full max-w-4xl mx-auto">
                        
                        {/* Email Contact Callout */}
                        <a href="mailto:contactus@noblenexus-ie.com" className="group flex-1 flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-2xl bg-gradient-to-br from-[#00E5FF]/10 via-[#0A1128] to-[#0A1128] border border-[#00E5FF]/20 hover:border-[#00E5FF]/50 hover:bg-[#00E5FF]/5 transition-all duration-500 relative overflow-hidden shadow-lg shadow-black/20">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00E5FF]/10 rounded-full blur-[40px] group-hover:bg-[#00E5FF]/20 transition-all duration-500"></div>
                            
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center shrink-0 z-10 border border-[#00E5FF]/30 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] group-hover:scale-105 transition-all duration-300">
                                <Mail size={24} className="text-[#00E5FF]" />
                            </div>
                            
                            <div className="flex flex-col items-start z-10 text-left">
                                <span className="text-xs sm:text-sm font-heading font-semibold text-[#00E5FF] uppercase tracking-[0.1em] mb-0.5">Email Us</span>
                                <span className="font-heading font-bold text-base md:text-lg lg:text-xl text-slate-100 group-hover:text-white transition-all">
                                    contactus@<br className="sm:hidden lg:hidden"/>noblenexus-ie.com
                                </span>
                            </div>
                        </a>

                        {/* Phone Contact Callout */}
                        <a href="tel:+353-871700653" className="group flex-1 flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-2xl bg-gradient-to-br from-[#3B82F6]/10 via-[#0A1128] to-[#0A1128] border border-[#3B82F6]/20 hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/5 transition-all duration-500 relative overflow-hidden shadow-lg shadow-black/20">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#3B82F6]/10 rounded-full blur-[40px] group-hover:bg-[#3B82F6]/20 transition-all duration-500"></div>
                            
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center shrink-0 z-10 border border-[#3B82F6]/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:scale-105 transition-all duration-300">
                                <Phone size={24} className="text-[#3B82F6]" />
                            </div>
                            
                            <div className="flex flex-col items-start z-10 text-left">
                                <span className="text-xs sm:text-sm font-heading font-semibold text-[#3B82F6] uppercase tracking-[0.1em] mb-0.5">Call Us</span>
                                <span className="font-heading font-bold text-base md:text-lg lg:text-xl text-slate-100 group-hover:text-white transition-all">
                                    +353-871700653
                                </span>
                            </div>
                        </a>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactCTA;
