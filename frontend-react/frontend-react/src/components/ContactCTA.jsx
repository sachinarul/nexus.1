import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const ContactCTA = () => {
    return (
        <section className="py-20 bg-[#0a0f1d] relative overflow-hidden">
            {/* Contact CTA Area */}
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto flex flex-col items-center"
                >
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
                        Transforming Education <br />
                        <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                            with Innovative eLearning Solutions
                        </span>
                    </h3>

                    <div className="w-12 h-1 bg-teal rounded-full my-6"></div>

                    <h4 className="text-lg font-medium text-gray-400 mb-10">
                        Contact us for tailored solutions.
                    </h4>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12">
                        <a href="mailto:contactus@noblenexus-ie.com" className="group flex items-center gap-4 text-white hover:text-teal-400 transition-colors">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-teal-500/20 group-hover:border-teal-500/30 transition-all shadow-lg">
                                <Mail size={20} className="text-teal-400" />
                            </div>
                            <span className="font-medium text-lg tracking-wide">contactus@noblenexus-ie.com</span>
                        </a>
                        <div className="hidden sm:block w-px h-12 bg-white/10"></div>
                        <a href="tel:+353-871700653" className="group flex items-center gap-4 text-white hover:text-teal-400 transition-colors">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-teal-500/20 group-hover:border-teal-500/30 transition-all shadow-lg">
                                <Phone size={20} className="text-teal-400" />
                            </div>
                            <span className="font-medium text-lg tracking-wide">+353-871700653</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactCTA;
