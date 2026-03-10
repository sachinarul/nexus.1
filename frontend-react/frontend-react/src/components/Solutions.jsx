
const Solutions = () => {
    return (
        <section id="solutions" className="py-24 bg-[#FFFFFF] relative">
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="text-center mb-16">
                    <span className="text-[#0F766E] font-bold tracking-widest text-sm uppercase mb-4 block">Proven Impact</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[#111111] mb-6">
                        Solutions That <br />
                        <span className="text-[#2563EB]">Scale With You</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Solution Cards */}
                    {['Global Connectivity', 'Automated Grading', 'Student Retention', 'Hybrid Learning', 'Secure Payments', 'Data Privacy'].map((item, idx) => (
                        <div key={idx} className="p-8 border border-gray-200 rounded-2xl bg-[#F8FAFC] hover:border-teal-300 transition-all duration-300 shadow-md hover:shadow-lg group">
                            <h3 className="text-[#111111] text-xl font-bold mb-3 group-hover:text-[#0F766E] transition-colors">{item}</h3>
                            <p className="text-[#555555] font-medium text-sm leading-relaxed">
                                Deploy enterprise-grade infrastructure that adapts to your platform's growing needs.
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-[#F8FAFC]/5 to-blue-50/5 blur-[120px] rounded-full pointer-events-none"></div>
        </section>
    );
};

export default Solutions;
