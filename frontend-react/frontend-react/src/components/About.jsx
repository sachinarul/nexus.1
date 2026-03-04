import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section id="about" className="py-32 bg-[#F8FAFC] relative z-10 border-t border-gray-100">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-20 items-center">


                    {/* Content */}
                    <div className="order-2 lg:order-1 space-y-8">
                        <div>
                            <span className="text-[#0F766E] font-bold tracking-widest text-sm uppercase mb-4 block">Our DNA</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-[#111111] mb-6">
                                Innovative <br />
                                <span className="text-[#2563EB]">eLearning Solutions</span> <br />
                                for Modern Education.
                            </h2>
                            <p className="text-[#555555] text-lg leading-relaxed font-medium">
                                Noble Nexus delivers next-generation eLearning solutions designed to transform traditional education into smart, digital learning ecosystems. Our platforms integrate technology, analytics, and user-friendly tools to enhance teaching effectiveness and student engagement.
                            </p>
                        </div>

                        <div className="space-y-6 border-l-4 border-[#0F766E] pl-8">
                            <div className="group">
                                <p className="text-xl font-bold text-[#111111] mb-2 leading-relaxed">
                                    "We empower institutions to adapt, grow, and succeed in the digital education era."
                                </p>
                            </div>
                        </div>

                        <Link to="/why-noble-nexus" onClick={() => window.scrollTo(0, 0)} className="text-[#0F766E] hover:text-[#2563EB] font-bold flex items-center w-fit gap-2 group transition-colors">
                            More About Us <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>

                    {/* Visual */}
                    <div className="order-1 lg:order-2 relative perspective-1000">
                        <div className="relative z-10 transform transition-transform duration-700 hover:rotate-y-6 hover:rotate-x-6 shadow-2xl rounded-2xl overflow-hidden border border-gray-200 group bg-[#FFFFFF]">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                            <img
                                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                alt="Noble Nexus Team Planning"
                                className="w-full h-auto object-cover opacity-100 transition-opacity duration-500"
                            />

                            {/* Floating Tech Badges */}
                            <div className="absolute top-8 left-8 bg-[#FFFFFF]/95 backdrop-blur-md border border-gray-200 px-4 py-2 rounded-lg text-[#111111] text-xs font-mono shadow-md transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 font-bold">
                                AI: Active
                            </div>
                            <div className="absolute bottom-8 right-8 bg-[#FFFFFF]/95 backdrop-blur-md border border-gray-200 px-4 py-2 rounded-lg text-[#111111] text-xs font-mono shadow-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 font-bold">
                                Secure: Encrypted
                            </div>
                        </div>

                        {/* Blob Background */}
                        <div className="absolute -inset-10 bg-gradient-to-r from-teal-200 to-blue-200 blur-[80px] opacity-30 -z-10 animate-spin-slow"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
