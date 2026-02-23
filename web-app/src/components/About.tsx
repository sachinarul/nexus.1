
const About = () => {
    return (
        <section id="about" className="py-24 bg-navy relative overflow-hidden">
            {/* Decorative Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-teal/10 to-transparent pointer-events-none opacity-20" />

            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                {/* Left Image/Mockup */}
                <div className="relative group perspective-1000">
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:scale-105 transition-transform duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                            alt="Strategic Planning"
                            className="w-full h-auto transform grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple to-teal blur-2xl opacity-20 -z-10 animate-pulse" />
                </div>

                {/* Right Content */}
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-teal">Our Vision</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
                        Education Reimagined <br />
                        <span className="text-clip bg-gradient-to-r from-teal to-purple text-transparent bg-clip-text">
                            From The Ground Up.
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        At Noble Nexus, we don't just build software. We architect the future of learning.
                        By fusing cutting-edge AI with pedagogical expertise, we empower institutions to
                        transcend traditional boundaries and unlock human potential at scale.
                    </p>

                    <ul className="space-y-4 pt-4">
                        {['Global Infrastructure', 'AI-Driven Personalization', 'Enterprise-Grade Security'].map((item) => (
                            <li key={item} className="flex items-center gap-3 text-gray-300">
                                <div className="w-6 h-6 rounded-full bg-teal/10 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
