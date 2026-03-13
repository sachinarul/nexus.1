
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SocialModal from './SocialModal';

const SocialCTA = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="py-24 bg-gradient-to-br from-black to-navy-950 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-purple/10 via-transparent to-teal/10 blur-[120px] rounded-full animate-spin-slow pointer-events-none"></div>
                </div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                        <span className="w-2 h-2 rounded-full bg-purple shadow-[0_0_10px_#8B5CF6] animate-pulse"></span>
                        <span className="text-xs uppercase tracking-widest text-purple font-semibold">Join the Conversation</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                        Connect With <br />
                        <span className="bg-gradient-to-r from-teal via-white to-purple bg-clip-text text-transparent">Noble Nexus</span>
                    </h2>

                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                        Stay ahead of the curve. Follow us for the latest EdTech trends, company updates, and success stories from campuses worldwide.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsModalOpen(true)}
                            className="group relative px-8 py-4 bg-white/5 backdrop-blur-lg border border-white/10 hover:border-teal/50 rounded-xl overflow-hidden shadow-2xl transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-teal/20 to-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative z-10 flex items-center gap-3 text-white font-bold">
                                View Our Social Presence
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </span>
                        </motion.button>

                        <div className="flex items-center gap-4 text-gray-500 text-sm">
                            <span>Trusted by 15k+ followers across platforms</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Feed Modal */}
            <SocialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default SocialCTA;
