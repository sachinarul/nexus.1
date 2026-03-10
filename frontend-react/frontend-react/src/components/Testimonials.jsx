
const Testimonials = () => {
    return (
        <section className="py-24 bg-[#ffffff] relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <span className="text-teal-600 font-bold tracking-widest text-sm uppercase mb-4 block">Trusted Feedback</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[#000000] mb-6">
                        Hear From Industry <br />
                        <span className="text-teal-600">Innovators</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Testimonial Cards */}
                    {[
                        { name: "Global University", quote: "Nexus LMS increased our student engagement by 40% in just one semester.", role: "Dean of Digital Learning" },
                        { name: "Tech Learning Hub", quote: "The ERP automation saved our admin team over 20 hours per week.", role: "Director" },
                        { name: "Corporate Institute", quote: "Seamless onboarding and training. The best investment we made this year.", role: "HR Director" }
                    ].map((item, idx) => (
                        <div key={idx} className="p-8 bg-[#f8fafc] rounded-2xl border border-gray-200 hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-700"></div>
                                <div>
                                    <h4 className="text-[#000000] font-bold text-sm">{item.name}</h4>
                                    <span className="text-gray-500 text-xs font-bold uppercase tracking-wide">{item.role}</span>
                                </div>
                            </div>
                            <p className="text-[#374151] italic text-lg font-medium leading-relaxed">"{item.quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
