
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
        <div className="bg-navy-950 min-h-screen font-sans text-white selection:bg-purple-500 selection:text-white overflow-hidden">

            {/* --- Hero Section --- */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-navy-950/40 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950"></div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="text-left"
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold tracking-widest uppercase mb-6">
                                Enterprise-Grade Upskilling
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
                                Empower Your <br />
                                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">Workforce</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                                Develop a high-performance culture with customized corporate learning solutions. From onboarding to compliance, we streamline workforce development.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.8)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group">
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
                            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-navy-900/50 backdrop-blur-xl transform transition-transform duration-500 hover:rotate-y-2 hover:rotate-x-2">
                                <img
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                    alt="Corporate Training Room"
                                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute inset-0 bg-purple-900/20 mix-blend-overlay"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- About Section --- */}
            <section className="py-24 bg-navy-900/30 relative">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
                            Flexible, Scalable <span className="text-purple-400">Training Modules</span>
                        </h2>
                        <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto mb-12">
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
                                className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-colors"
                            >
                                <item.icon className="text-purple-400 mb-4" size={32} />
                                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Solutions Grid --- */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-purple-400 font-medium tracking-widest text-sm uppercase mb-4 block">Corporate Offerings</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Enterprise <span className="text-pink-400">Learning Solutions</span>
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
                                desc: "Standardized modules fully integrated with your existing LMS.",
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
                                className="group relative overflow-hidden rounded-2xl bg-navy-900 border border-white/5 hover:border-purple-500/30 transition-all h-[360px]"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-10 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/80 to-transparent"></div>

                                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform backdrop-blur-sm">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Impact Metrics --- */}
            <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-y border-white/5 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: "500+", label: "Enterprises" },
                            { value: "3M+", label: "Employees Trained" },
                            { value: "40%", label: "Faster Onboarding" },
                            { value: "99.9%", label: "Platform Uptime" }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-2">
                                <h4 className="text-4xl md:text-5xl font-bold text-white">{stat.value}</h4>
                                <p className="text-purple-400 font-medium uppercase tracking-widest text-xs">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Why Noble Nexus --- */}
            <section className="py-24 bg-navy-900/30">
                <div className="container mx-auto px-4 max-w-7xl text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-16">Why Noble Nexus?</h2>

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
                                className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 shadow-lg"
                            >
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white mb-6 mx-auto shadow-lg shadow-purple-500/20">
                                    <CheckCircle2 size={24} />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-3">{feat.title}</h4>
                                <p className="text-gray-400 text-sm">{feat.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA Section --- */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-900/10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                        Build a <br /> Future-Ready Workforce
                    </h2>
                    <p className="text-xl text-gray-300 mb-12">
                        Equip your team with the skills they need to succeed in the digital age.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            to="/"
                            onClick={() => window.scrollTo(0, 0)}
                            className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
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
