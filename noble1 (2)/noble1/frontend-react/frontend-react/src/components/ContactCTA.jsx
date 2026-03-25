import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const ContactCTA = () => {
    return (
        <section className="py-20 bg-[#030712] border-t border-white/5 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto flex flex-col items-center"
                >
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
                        Transforming Education <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                            with Innovative eLearning Solutions
                        </span>
                    </h3>

                    <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full my-8"></div>

                    <h4 className="text-lg md:text-xl font-medium text-gray-400 mb-12 max-w-2xl">
                        Contact us today to discuss how we can build tailored solutions for your unique educational needs.
                    </h4>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12">
                        <a href="mailto:contactus@noblenexus-ie.com" className="group flex items-center gap-4 text-white hover:text-teal-300 transition-colors">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-teal-500/20 group-hover:border-teal-500/30 transition-all shadow-xl backdrop-blur-md">
                                <Mail size={24} className="text-teal-400 group-hover:scale-110 transition-transform" />
                            </div>
                            <span className="font-bold text-lg tracking-wide">contactus@noblenexus-ie.com</span>
                        </a>
                        <div className="hidden sm:block w-px h-16 bg-white/10"></div>
                        <a href="tel:+353-871700653" className="group flex items-center gap-4 text-white hover:text-teal-300 transition-colors">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-teal-500/20 group-hover:border-teal-500/30 transition-all shadow-xl backdrop-blur-md">
                                <Phone size={24} className="text-teal-400 group-hover:scale-110 transition-transform" />
                            </div>
                            <span className="font-bold text-lg tracking-wide">+353-871700653</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactCTA;
