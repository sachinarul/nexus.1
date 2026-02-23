
const Testimonials = () => {
    return (
        <section className="py-24 bg-navy-950 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <span className="text-teal font-medium tracking-widest text-sm uppercase mb-4 block">Trusted Feedback</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Hear From Industry <br />
                        <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Innovators</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Testimonial Cards */}
                    {[
                        { name: "Global University", quote: "Nexus LMS increased our student engagement by 40% in just one semester.", role: "Dean of Digital Learning" },
                        { name: "Tech High School", quote: "The ERP automation saved our admin team over 20 hours per week.", role: "Principal" },
                        { name: "Corporate Institute", quote: "Seamless onboarding and training. The best investment we made this year.", role: "HR Director" }
                    ].map((item, idx) => (
                        <div key={idx} className="p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/5 hover:-translate-y-2 transition-transform duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal to-purple"></div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">{item.name}</h4>
                                    <span className="text-gray-500 text-xs uppercase tracking-wide">{item.role}</span>
                                </div>
                            </div>
                            <p className="text-gray-300 italic text-lg leading-relaxed">"{item.quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
