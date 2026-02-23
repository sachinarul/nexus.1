
import { Play } from 'lucide-react';

const SocialSection = () => {
    return (
        <section id="video-showcase" className="py-24 bg-navy-950 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Content & Video */}
                    <div className="text-left space-y-8">
                        {/* Header */}
                        <div>
                            <span className="text-teal font-medium tracking-widest text-sm uppercase mb-4 block">Our Vision</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                Noble Nexus <br />
                                <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Our Offerings</span>
                            </h2>
                        </div>

                        {/* Video Container */}
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10 group">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/44QapafwJt0?rel=0"
                                title="Noble Nexus - Our Offerings"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Description & Button */}
                        <div>
                            <p className="text-lg text-gray-300 font-light leading-relaxed mb-8">
                                Noble Nexus offers cutting-edge eLearning solutions to enhance modern education and training environments. Join us in shaping the future of learning.
                            </p>

                            <button className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white font-medium transition-all hover:scale-105 flex items-center gap-2 group">
                                <span className="w-8 h-8 rounded-full bg-teal/20 flex items-center justify-center group-hover:bg-teal text-teal group-hover:text-white transition-colors">
                                    <Play size={14} fill="currentColor" />
                                </span>
                                Watch Full Overview
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Image Placeholder */}
                    <div className="relative h-full min-h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group order-first lg:order-last">
                        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-black opacity-80 z-10 group-hover:opacity-60 transition-opacity duration-500"></div>
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                            alt="Team Collaboration"
                            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Overlay Content */}
                        <div className="absolute bottom-0 left-0 p-8 z-20">
                            <h3 className="text-2xl font-bold text-white mb-2">Empowering Educators</h3>
                            <p className="text-gray-300 text-sm">Providing the tools to inspire the next generation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialSection;
