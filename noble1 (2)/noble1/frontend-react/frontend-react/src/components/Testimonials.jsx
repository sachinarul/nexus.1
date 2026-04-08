import React from 'react';
import { School, Cpu, Building2 } from 'lucide-react';

const Testimonials = () => {
    return (
        <section className="py-16 bg-[#ffffff] relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <span className="text-teal-600 font-bold tracking-widest text-sm uppercase mb-4 block">Trusted Feedback</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] mb-6">
                        Hear From Industry <br />
                        <span className="text-blue-600">Innovators</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Testimonial Cards */}
                    {[
                        { 
                            name: "Global University", 
                            quote: "Veda increased our student engagement by 40% in just one semester.", 
                            role: "Dean of Digital Learning",
                            icon: School,
                            color: "from-teal-500 to-teal-700"
                        },
                        { 
                            name: "Tech Learning Hub", 
                            quote: "The ERP automation saved our admin team over 20 hours per week.", 
                            role: "Director",
                            icon: Cpu,
                            color: "from-blue-500 to-blue-700"
                        },
                        { 
                            name: "Corporate Institute", 
                            quote: "Seamless onboarding and training. The best investment we made this year.", 
                            role: "HR Director",
                            icon: Building2,
                            color: "from-indigo-500 to-indigo-700"
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="relative">
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg flex items-center justify-center text-white transform rotate-3 hover:rotate-0 transition-transform duration-300`}>
                                    <item.icon size={28} strokeWidth={1.5} />
                                </div>
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
