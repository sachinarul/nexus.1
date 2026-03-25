
import { motion } from 'framer-motion';
import { Users, TrendingUp, Eye, Activity } from 'lucide-react';

const SocialAnalytics = ({ data }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden group hover:border-teal/30 transition-colors"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Users size={24} className="text-teal mb-2" />
                <h3 className="text-2xl font-bold text-white">{data.analytics.followers.total}</h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Total Followers</p>
                <span className="text-green-400 text-xs mt-2 flex items-center gap-1">
                    <TrendingUp size={12} /> {data.analytics.growth}
                </span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden group hover:border-purple/30 transition-colors"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Activity size={24} className="text-purple-400 mb-2" />
                <h3 className="text-2xl font-bold text-white">{data.analytics.engagement}</h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Avg. Engagement</p>
                <div className="w-full bg-white/10 h-1 mt-3 rounded-full overflow-hidden">
                    <div className="bg-purple-500 h-full w-[65%] rounded-full"></div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden group hover:border-blue-500/30 transition-colors"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Eye size={24} className="text-blue-400 mb-2" />
                <h3 className="text-2xl font-bold text-white">{data.analytics.impressions}</h3>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Impressions (30d)</p>
                <div className="flex gap-1 mt-3">
                    <div className="w-1 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-1 h-5 bg-blue-400 rounded-full animate-pulse delay-75"></div>
                    <div className="w-1 h-2 bg-blue-600 rounded-full animate-pulse delay-150"></div>
                    <div className="w-1 h-4 bg-blue-300 rounded-full animate-pulse delay-200"></div>
                    <div className="w-1 h-3 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center relative overflow-hidden group hover:border-pink-500/30 transition-colors"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-16 h-16 mb-1">
                    {/* CSS Pie Chart Mockup */}
                    <svg viewBox="0 0 32 32" className="transform -rotate-90">
                        <circle cx="16" cy="16" r="16" fill="transparent" stroke="#333" strokeWidth="8" />
                        <circle cx="16" cy="16" r="16" fill="transparent" stroke="#ec4899" strokeWidth="8" strokeDasharray="75 100" />
                        <circle cx="16" cy="16" r="16" fill="transparent" stroke="#14b8a6" strokeWidth="8" strokeDasharray="40 100" strokeDashoffset="-75" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white">
                        Mix
                    </div>
                </div>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Audience Mix</p>
            </motion.div>
        </div>
    );
};

export default SocialAnalytics;
