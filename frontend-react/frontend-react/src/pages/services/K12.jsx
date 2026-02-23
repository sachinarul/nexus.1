
import React from 'react';
import { motion } from 'framer-motion';
import {
    BookOpen,
    MonitorSmartphone,
    Gamepad2,
    FileText,
    Accessibility,
    PenTool,
    CheckCircle2,
    ArrowRight,
    Users,
    School,
    Trophy,
    Target
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const K12Education = () => {
    const navigate = useNavigate();

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="bg-navy-950 min-h-screen font-sans text-white selection:bg-teal selection:text-navy-900 overflow-hidden">

            {/* --- Hero Section --- */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1577896335477-2858506f9354?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-navy-950/40 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950"></div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block py-1 px-3 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-bold tracking-widest uppercase mb-6"
                        >
                            Future-Ready Learning
                        </motion.span>
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6"
                        >
                            Empowering K-12 with <br />
                            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Tailored Solutions</span>
                        </motion.h1>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-300 mb-10 leading-relaxed font-light"
                        >
                            At Noble Nexus, we collaborate with schools to deliver innovative digital learning experiences that inspire curiosity and foster growth.
                        </motion.p>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold rounded-full shadow-[0_0_15px_rgba(20,184,166,0.5)] hover:shadow-[0_0_25px_rgba(20,184,166,0.8)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group w-full sm:w-auto justify-center">
                                Home <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/contact" className="px-8 py-4 bg-navy-800 border-2 border-teal/50 text-white font-bold rounded-full hover:bg-teal hover:text-navy-900 shadow-[0_0_10px_rgba(20,184,166,0.3)] transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                                Contact Us
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-20 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                            alt="Smart Classroom"
                            className="w-full h-[400px] lg:h-[600px] object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                        />
                    </motion.div>
                </div>
            </section>

            {/* --- About K-12 Section --- */}
            <section className="py-24 bg-navy-900/50 relative">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="order-2 lg:order-1"
                        >
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                                Reimagining the <br />
                                <span className="text-teal">Classroom Experience</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Our K-12 solutions bridge the gap between traditional pedagogy and modern technology. We specialize in curriculum development, interactive tools, gamification, and STEM integration, ensuring every student has access to a world-class education.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                From DEI-compliant learning materials to immersive AR/VR experiences, we empower educators to create inclusive and engaging environments for the next generation.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {["STEM Integration", "Gamified Learning", "DEI Compliance", "AR/VR Labs"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                                        <CheckCircle2 size={18} className="text-teal" />
                                        <span className="text-sm font-medium text-gray-200">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative order-1 lg:order-2"
                        >
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                    alt="Kids learning with tablets"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-teal/20 to-purple/20 mix-blend-overlay"></div>
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-navy-800 p-6 rounded-xl border border-white/10 shadow-xl hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center text-teal">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-white">100%</p>
                                        <p className="text-xs text-gray-400 uppercase tracking-wider">Student Engagement</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Comprehensive Solutions Grid --- */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-teal font-medium tracking-widest text-sm uppercase mb-4 block">Our Offerings</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Comprehensive <span className="text-purple-400">K-12 Solutions</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Curriculum Development",
                                desc: "ERP-integrated academic management and syllabus planning.",
                                icon: BookOpen,
                                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                title: "Assessment Systems",
                                desc: "Custom evaluation tools and online testing interfaces.",
                                icon: Target,
                                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                title: "Interactive Learning",
                                desc: "Gamified modules that make learning fun and engaging.",
                                icon: Gamepad2,
                                image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                title: "eBook Development",
                                desc: "Interactive digital textbooks and smart worksheets.",
                                icon: MonitorSmartphone,
                                image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                title: "Accessibility Compliance",
                                desc: "Inclusive education standards ensuring equal access for all.",
                                icon: Accessibility,
                                image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                title: "Lesson Planning",
                                desc: "Smart tools for teachers to create impactful lesson plans.",
                                icon: PenTool,
                                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80"
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative overflow-hidden rounded-2xl bg-navy-900 border border-white/5 hover:border-teal/30 transition-all h-[320px]"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/60 to-transparent"></div>

                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center text-teal mb-4 group-hover:scale-110 transition-transform backdrop-blur-sm">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Impact Stats --- */}
            <section className="py-20 bg-gradient-to-r from-teal-900/20 to-purple-900/20 border-y border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: "500+", label: "Partner Schools" },
                            { value: "1M+", label: "Students Impacted" },
                            { value: "95%", label: "Satisfaction Rate" },
                            { value: "24/7", label: "Expert Support" }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-2">
                                <h4 className="text-4xl md:text-5xl font-bold text-white">{stat.value}</h4>
                                <p className="text-teal font-medium uppercase tracking-widest text-xs">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Differentiators --- */}
            <section className="py-24 bg-navy-900/30">
                <div className="container mx-auto px-4 max-w-7xl text-center">
                    <div className="mb-16">
                        <span className="text-teal font-medium tracking-widest text-sm uppercase mb-4 block">Why Choose Us</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white">The Noble Nexus Advantage</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Custom Solutions", desc: "SME-based tailored software." },
                            { title: "Innovative Ecosystem", desc: "Scalable cloud infrastructure." },
                            { title: "Curriculum Expertise", desc: "Global standards aligned." },
                            { title: "Accessibility Focus", desc: "DEI integrated learning." }
                        ].map((diff, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-teal/30 hover:-translate-y-2 transition-all duration-300">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal/20 to-blue-500/20 mx-auto flex items-center justify-center text-white mb-6">
                                    <Trophy size={28} />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{diff.title}</h4>
                                <p className="text-gray-400 text-sm">{diff.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA Section --- */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-teal/90 opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                        Transform Your <br /> K-12 Institution Today
                    </h2>
                    <p className="text-xl text-gray-300 mb-12">
                        Join the digital revolution in education with Noble Nexus.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            to="/"
                            onClick={() => window.scrollTo(0, 0)}
                            className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold text-lg rounded-full shadow-[0_0_20px_rgba(20,184,166,0.5)] hover:shadow-[0_0_30px_rgba(20,184,166,0.8)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
                        >
                            Home
                        </Link>
                        <Link
                            to="/contact"
                            className="w-full sm:w-auto px-10 py-5 bg-navy-900 border-2 border-teal/50 text-white font-bold text-lg rounded-full hover:bg-teal-500 hover:text-white transition-all shadow-lg"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default K12Education;
