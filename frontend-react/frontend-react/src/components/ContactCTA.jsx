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
                    <h3 className="text-3xl md:text-5xl font-display font-black text-white mb-4 tracking-tight">
                        Transforming Education <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#3B82F6]">
                            with Innovative eLearning Solutions
                        </span>
                    </h3>

                    {/* Cyan Line Accent matching Hero */}
                    <div className="w-16 h-1 bg-[#00E5FF] rounded-full my-8 shadow-[0_0_15px_#00E5FF]"></div>

                    <h4 className="text-xl md:text-2xl font-bold text-slate-300 mb-12">
                        Contact us for tailored solutions.
                    </h4>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-16 w-full">
                        
                        {/* Email Contact */}
                        <a href="mailto:contactus@noblenexus-ie.com" className="group flex items-center gap-5 text-slate-200 hover:text-white transition-colors w-full sm:w-auto justify-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#0A1128] border border-slate-700/60 flex items-center justify-center group-hover:border-[#00E5FF]/50 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all duration-300">
                                <Mail size={24} className="text-[#00E5FF]" />
                            </div>
                            <span className="font-bold text-lg md:text-xl tracking-wide group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all">
                                contactus@<br className="sm:hidden"/>noblenexus-ie.com
                            </span>
                        </a>

                        {/* Divider */}
                        <div className="hidden sm:block w-px h-16 bg-slate-800"></div>
                        <div className="sm:hidden h-px w-32 bg-slate-800"></div>

                        {/* Phone Contact */}
                        <a href="tel:+353-871700653" className="group flex items-center gap-5 text-slate-200 hover:text-white transition-colors w-full sm:w-auto justify-center">
                            <div className="w-14 h-14 rounded-2xl bg-[#0A1128] border border-slate-700/60 flex items-center justify-center group-hover:border-[#00E5FF]/50 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all duration-300">
                                <Phone size={24} className="text-[#00E5FF]" />
                            </div>
                            <span className="font-bold text-lg md:text-xl tracking-wide group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all">
                                +353-871700653
                            </span>
                        </a>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactCTA;
