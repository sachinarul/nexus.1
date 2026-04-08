
import React from 'react';
import { motion } from 'framer-motion';
import {
    Briefcase,
    Target,
    TrendingUp,
    Smartphone,
    Accessibility,
    PackageCheck,
    CheckCircle2,
    ArrowRight,
    PlayCircle
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const CorporateLearning = () => {
    const navigate = useNavigate();

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="bg-[#F8FAFC] min-h-screen font-sans text-[#111111] selection:bg-blue-100 selection:text-[#111111] overflow-hidden">

            {/* --- Hero Section --- */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FFFFFF]">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF]/0 to-[#FFFFFF] z-0"></div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="text-left"
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-xs font-bold tracking-widest uppercase mb-6">
                                Enterprise-Grade Upskilling
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6 text-[#111111]">
                                Empower Your <br />
                                <span className="text-[#2563EB]">Workforce</span>
                            </h1>
                            <p className="text-xl text-[#555555] font-medium mb-8 leading-relaxed">
                                Develop a high-performance culture with customized corporate learning solutions. From onboarding to compliance, we streamline workforce development.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="px-8 py-4 bg-[#2563EB] text-[#FFFFFF] font-bold rounded-full shadow-md hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group">
                                    Home <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>

                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative perspective-1000 group"
                        >
                            <div className="relative z-10 rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-[#FFFFFF] backdrop-blur-xl transform transition-transform duration-500 hover:rotate-y-2 hover:rotate-x-2">
                                <img
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                    alt="Corporate Training Room"
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- About Section --- */}
            <section className="py-24 bg-[#FFFFFF] relative">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-[#111111] mb-8">
                            Flexible, Scalable <span className="text-[#2563EB]">Training Modules</span>
                        </h2>
                        <p className="text-lg text-[#555555] font-medium leading-relaxed max-w-3xl mx-auto mb-12">
                            Using custom corporate eLearning modules and SCORM-compliant courses, we create flexible, engaging, and scalable training solutions that adapt to your business needs.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        {[
                            { title: "Onboarding Efficiency", desc: "Reduce ramp-up time for new hires with streamlined digital paths.", icon: TrendingUp },
                            { title: "Compliance Mastery", desc: "Keep teams accredited with automated renewal tracking.", icon: Target },
                            { title: "Sales Enablement", desc: "Equip your revenue teams with product knowledge on-demand.", icon: Briefcase }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-blue-50 transition-colors shadow-sm"
                            >
                                <item.icon className="text-[#2563EB] mb-4" size={32} />
                                <h4 className="text-xl font-bold text-[#111111] mb-2">{item.title}</h4>
                                <p className="text-[#555555] font-medium text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Solutions Grid --- */}
            <section className="py-24 relative overflow-hidden bg-[#F8FAFC]">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[#2563EB] font-bold tracking-widest text-sm uppercase mb-4 block">Corporate Offerings</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#111111] mb-6">
                            Enterprise <span className="text-[#2563EB]">Learning Solutions</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Corporate eLearning",
                                desc: "Custom modules for effective onboarding and continuous skill development.",
                                icon: Briefcase,
                                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                title: "Customized Training",
                                desc: "Tailored learning packages specifically designed for your business goals.",
                                icon: Target,
                                image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                title: "Adaptive Microlearning",
                                desc: "Bite-sized, personalized learning modules for busy professionals.",
                                icon: Smartphone,
                                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                title: "Performance Analytics",
                                desc: "Robust reporting tools to track progress and identify skill gaps.",
                                icon: TrendingUp,
                                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                title: "Accessibility Compliance",
                                desc: "Inclusive digital learning environments for a diverse workforce.",
                                icon: Accessibility,
                                image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                title: "SCORM-Compliant Courses",
                                desc: "Standardized modules fully integrated with Veda.",
                                icon: PackageCheck,
                                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative overflow-hidden rounded-2xl bg-[#FFFFFF] border border-gray-200 hover:border-[#2563EB] hover:shadow-lg transition-all flex flex-col"
                            >
                                <div className="h-48 relative overflow-hidden bg-gray-100 shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6 relative z-10 bg-[#FFFFFF] flex-grow flex flex-col">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#2563EB] mb-4 group-hover:scale-110 transition-transform shadow-sm">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#111111] mb-2 group-hover:text-[#2563EB] transition-colors">{item.title}</h3>
                                    <p className="text-[#555555] font-medium text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Impact Metrics --- */}
            <section className="py-20 bg-gray-50 border-y border-gray-200 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: "500+", label: "Enterprises" },
                            { value: "3M+", label: "Employees Trained" },
                            { value: "40%", label: "Faster Onboarding" },
                            { value: "99.9%", label: "Platform Uptime" }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-2">
                                <h4 className="text-4xl md:text-5xl font-bold text-[#111111]">{stat.value}</h4>
                                <p className="text-[#2563EB] font-bold uppercase tracking-widest text-xs">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Why Noble Nexus --- */}
            <section className="py-24 bg-[#FFFFFF]">
                <div className="container mx-auto px-4 max-w-7xl text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[#111111] mb-16">Why Noble Nexus?</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Comprehensive Training", desc: "End-to-end corporate eLearning services." },
                            { title: "High-Quality Content", desc: "Interactive and scenario-based modules." },
                            { title: "Scalable Solutions", desc: "Flexible learning for growing global teams." },
                            { title: "Proven Track Record", desc: "Improved retention and workforce productivity." }
                        ].map((feat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-8 rounded-2xl bg-[#F8FAFC] border border-gray-200 hover:border-[#2563EB] hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-lg"
                            >
                                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-[#2563EB] mb-6 mx-auto shadow-sm">
                                    <CheckCircle2 size={24} />
                                </div>
                                <h4 className="text-lg font-bold text-[#111111] mb-3">{feat.title}</h4>
                                <p className="text-[#555555] font-medium text-sm">{feat.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA Section --- */}
            <section className="py-32 relative overflow-hidden bg-[#FFFFFF]">
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-[#111111] mb-8">
                        Build a <br /> Future-Ready Workforce
                    </h2>
                    <p className="text-xl text-[#555555] font-medium mb-12">
                        Equip your team with the skills they need to succeed in the digital age.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            to="/"
                            onClick={() => window.scrollTo(0, 0)}
                            className="w-full sm:w-auto px-10 py-5 bg-[#2563EB] text-[#FFFFFF] font-bold text-lg rounded-full shadow-md hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
                        >
                            Home
                        </Link>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default CorporateLearning;
