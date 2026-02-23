
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe } from 'lucide-react';
import SocialDashboard from './SocialDashboard';

const SocialModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 transition-all"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 pointer-events-none"
                    >
                        <div className="bg-[#0F121E] border border-white/10 w-full max-w-[90vw] h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto relative ring-1 ring-white/5">

                            {/* Header */}
                            <div className="px-8 py-5 border-b border-white/5 flex items-center justify-between bg-white/[0.02] backdrop-blur-md sticky top-0 z-10">
                                <div>
                                    <h2 className="text-2xl font-display font-bold text-white flex items-center gap-2">
                                        <Globe size={24} className="text-teal" />
                                        Noble Nexus <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-blue-500">Live Hub</span>
                                    </h2>
                                    <p className="text-gray-400 text-xs mt-1 tracking-wide">
                                        Real-time social intelligence dashboard • Dublin • Remote
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all border border-transparent hover:border-white/10"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Dashboard Content */}
                            <div className="flex-1 overflow-hidden p-6 md:p-8 bg-gradient-to-br from-[#0F121E] via-[#0a0c14] to-black relative">
                                {/* Ambient Background Glow */}
                                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/5 rounded-full blur-[100px] animate-pulse-slow"></div>
                                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/5 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
                                </div>

                                <div className="relative z-10 h-full">
                                    <SocialDashboard />
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default SocialModal;
