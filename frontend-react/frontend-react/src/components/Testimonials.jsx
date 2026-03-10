
const Testimonials = () => {
    return (
        <section className="py-16 bg-[#ffffff] relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <span className="text-teal-600 font-bold tracking-widest text-sm uppercase mb-4 block">Trusted Feedback</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] mb-6">
                        Hear From Industry <br />
                        <span className="text-teal-600">Innovators</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Testimonial Cards */}
                    {[
                        { name: "Global University", quote: "Nexus LMS increased our student engagement by 40% in just one semester.", role: "Dean of Digital Learning" },
                        { name: "Tech Learning Hub", quote: "The ERP automation saved our admin team over 20 hours per week.", role: "Director" },
                        { name: "Corporate Institute", quote: "Seamless onboarding and training. The best investment we made this year.", role: "HR Director" }
                    ].map((item, idx) => (
                        <div key={idx} className="relative">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0D9488] to-[#0F766E] shadow-sm"></div>
                                <div>
                                    <h4 className="text-[#0F172A] font-bold text-base">{item.name}</h4>
                                    <span className="text-[#64748B] text-xs font-bold uppercase tracking-wide">{item.role}</span>
                                </div>
                            </div>
                            <p className="text-[#334155] italic text-lg font-medium leading-relaxed">"{item.quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
