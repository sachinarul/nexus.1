
const About = () => {
    return (
        <section id="about" className="py-32 bg-navy relative z-10">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-20 items-center">


                    {/* Content */}
                    <div className="order-2 lg:order-1 space-y-8">
                        <div>
                            <span className="text-teal font-medium tracking-widest text-sm uppercase mb-4 block">Our DNA</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-white mb-6">
                                Innovative <br />
                                <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">eLearning Solutions</span> <br />
                                for Modern Education.
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Noble Nexus delivers next-generation eLearning solutions designed to transform traditional education into smart, digital learning ecosystems. Our platforms integrate technology, analytics, and user-friendly tools to enhance teaching effectiveness and student engagement.
                            </p>
                        </div>

                        <div className="space-y-6 border-l-2 border-white/10 pl-8">
                            <div className="group">
                                <p className="text-xl font-medium text-white mb-2 leading-relaxed">
                                    "We empower institutions to adapt, grow, and succeed in the digital education era."
                                </p>
                            </div>
                        </div>

                        <button className="text-teal hover:text-white font-semibold flex items-center gap-2 group transition-colors">
                            More About Us <span className="text-xl groyp-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>

                    {/* Visual */}
                    <div className="order-1 lg:order-2 relative perspective-1000">
                        <div className="relative z-10 transform transition-transform duration-700 hover:rotate-y-6 hover:rotate-x-6 shadow-2xl rounded-2xl overflow-hidden border border-white/10 group bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal/20 via-transparent to-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                            <img
                                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                alt="Noble Nexus Team Planning"
                                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity hover:mix-blend-normal"
                            />

                            {/* Floating Tech Badges */}
                            <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg text-white text-xs font-mono shadow-lg transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                AI: Active
                            </div>
                            <div className="absolute bottom-8 right-8 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg text-white text-xs font-mono shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                                Secure: Encrypted
                            </div>
                        </div>

                        {/* Blob Background */}
                        <div className="absolute -inset-10 bg-gradient-to-r from-teal to-purple blur-[80px] opacity-20 -z-10 animate-spin-slow"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
