
const Solutions = () => {
    return (
        <section id="solutions" className="py-24 bg-navy relative">
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <span className="text-teal font-medium tracking-widest text-sm uppercase mb-4 block">Proven Impact</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Solutions That <br />
                        <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Scale With You</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Solution Cards */}
                    {['Global Connectivity', 'Automated Grading', 'Student Retention', 'Hybrid Learning', 'Secure Payments', 'Data Privacy'].map((item, idx) => (
                        <div key={idx} className="p-8 border border-white/5 rounded-2xl bg-white/5 hover:border-teal/30 transition-all duration-300 group">
                            <h3 className="text-white text-xl font-bold mb-3 group-hover:text-teal transition-colors">{item}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Deploy enterprise-grade infrastructure that adapts to your institution's growing needs.
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-teal/5 to-purple/5 blur-[120px] rounded-full pointer-events-none"></div>
        </section>
    );
};

export default Solutions;
