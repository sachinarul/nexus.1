
import { useState, useEffect } from 'react';
import { RefreshCw, Instagram, Linkedin, Facebook, ExternalLink, ArrowRight } from 'lucide-react';

const SocialDashboard = () => {
    const [loading, setLoading] = useState(false);
    const [lastUpdated, setLastUpdated] = useState(new Date());

    const refreshFeed = () => {
        setLoading(true);
        // In a real app, this would re-fetch data from the backend APIs
        setTimeout(() => {
            setLastUpdated(new Date());
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="flex flex-col h-full bg-navy-900/50">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8 px-2">
                <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-sm text-green-400 font-semibold tracking-wide uppercase">Live Connections</span>
                </div>

                <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>Synced: {lastUpdated.toLocaleTimeString()}</span>
                    <button onClick={refreshFeed} className="p-1.5 hover:bg-white/10 rounded-full transition-colors" title="Refresh Feed">
                        <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
                    </button>
                </div>
            </div>

            {/* Live Feeds Container */}
            <div className="grid lg:grid-cols-3 gap-6 h-full overflow-hidden">

                {/* Instagram Column */}
                <div className="flex flex-col gap-4 h-full">
                    <div className="flex items-center justify-between p-4 bg-[#C13584]/10 border border-[#C13584]/20 rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-[#C13584]/20 rounded-lg text-white">
                                <Instagram size={20} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm">Instagram</h3>
                                <p className="text-xs text-[#C13584] font-medium">@nexus_noble</p>
                            </div>
                        </div>
                        <a href="https://www.instagram.com/nexus_noble" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors">
                            <ExternalLink size={16} />
                        </a>
                    </div>

                    {/* Instagram Embed Placeholder / Wrapper */}
                    <div className="flex-1 bg-black/20 border border-white/5 rounded-2xl overflow-hidden relative group">
                        {/* Note: Instagram Basic Display API required for real feed */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-transparent to-black/80">
                            <Instagram size={48} className="text-gray-600 mb-4 group-hover:text-[#C13584] transition-colors" />
                            <h4 className="text-gray-300 font-medium mb-2">Instagram Feed Integration</h4>
                            <p className="text-xs text-gray-500 max-w-[200px] mb-6">
                                Connect the Instagram Basic Display API to stream your latest photos and reels here.
                            </p>
                            <a
                                href="https://www.instagram.com/nexus_noble"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 bg-[#C13584] hover:bg-[#a92b70] text-white text-xs font-bold rounded-full transition-all shadow-lg hover:shadow-[#C13584]/40"
                            >
                                View Official Feed
                            </a>
                        </div>
                    </div>
                </div>

                {/* Facebook Column - Real Iframe */}
                <div className="flex flex-col gap-4 h-full">
                    <div className="flex items-center justify-between p-4 bg-[#1877F2]/10 border border-[#1877F2]/20 rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-[#1877F2]/20 rounded-lg text-white">
                                <Facebook size={20} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm">Facebook</h3>
                                <p className="text-xs text-[#1877F2] font-medium">Noble Nexus Page</p>
                            </div>
                        </div>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors">
                            <ExternalLink size={16} />
                        </a>
                    </div>

                    <div className="flex-1 bg-black/20 border border-white/5 rounded-2xl overflow-hidden relative group">
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-transparent to-black/80">
                            <Facebook size={48} className="text-gray-600 mb-4 group-hover:text-[#1877F2] transition-colors" />
                            <h4 className="text-gray-300 font-medium mb-2">Facebook Page Integration</h4>
                            <p className="text-xs text-gray-500 max-w-[200px] mb-6">
                                Connect the Facebook Graph API to stream your latest posts and updates here.
                            </p>
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 bg-[#1877F2] hover:bg-[#155db2] text-white text-xs font-bold rounded-full transition-all shadow-lg hover:shadow-[#1877F2]/40"
                            >
                                View Official Page
                            </a>
                        </div>
                    </div>
                </div>

                {/* LinkedIn Column */}
                <div className="flex flex-col gap-4 h-full">
                    <div className="flex items-center justify-between p-4 bg-[#0A66C2]/10 border border-[#0A66C2]/20 rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-[#0A66C2]/20 rounded-lg text-white">
                                <Linkedin size={20} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm">LinkedIn</h3>
                                <p className="text-xs text-[#0A66C2] font-medium">noblenexus-ie</p>
                            </div>
                        </div>
                        <a href="https://www.linkedin.com/company/noblenexus-ie/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors">
                            <ExternalLink size={16} />
                        </a>
                    </div>

                    {/* LinkedIn Placeholder */}
                    <div className="flex-1 bg-black/20 border border-white/5 rounded-2xl overflow-hidden relative group">
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-transparent to-black/80">
                            <Linkedin size={48} className="text-gray-600 mb-4 group-hover:text-[#0A66C2] transition-colors" />
                            <h4 className="text-gray-300 font-medium mb-2">Company Updates</h4>
                            <p className="text-xs text-gray-500 max-w-[200px] mb-6">
                                Integrate the LinkedIn Marketing Developer Platform to display company posts.
                            </p>
                            <a
                                href="https://www.linkedin.com/company/noblenexus-ie/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-2 bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-bold rounded-full transition-all shadow-lg hover:shadow-[#0A66C2]/40"
                            >
                                View LinkedIn Page <ArrowRight size={12} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialDashboard;
