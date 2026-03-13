
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
        <div className="bg-[#F8FAFC] min-h-screen font-sans text-[#111111] selection:bg-teal-50 selection:text-[#111111] overflow-hidden">

            {/* --- Hero Section --- */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1577896335477-2858506f9354?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-[#FFFFFF] z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-gray-50"></div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block py-1 px-3 rounded-full bg-teal-50 border border-teal-200 text-[#0F766E] text-xs font-bold tracking-widest uppercase mb-6"
                        >
                            Future-Ready Learning
                        </motion.span>
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6 text-[#111111]"
                        >
                            Empowering K-12 with <br />
                            <span className="text-[#2563EB]">Tailored Solutions</span>
                        </motion.h1>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-[#555555] mb-10 leading-relaxed font-medium"
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
                            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="px-8 py-4 bg-[#0F766E] text-[#FFFFFF] font-bold rounded-full shadow-md hover:bg-teal-700 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group w-full sm:w-auto justify-center">
                                Home <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/contact" className="px-8 py-4 bg-[#FFFFFF] border border-gray-200 text-[#111111] font-bold rounded-full hover:bg-gray-50 shadow-sm transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                                Contact Us
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-20 relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl group"
                    >

                        <img
                            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                            alt="Smart Classroom"
                            className="w-full h-[400px] lg:h-[600px] object-cover opacity-100 group-hover:scale-105 transition-transform duration-1000"
                        />
                    </motion.div>
                </div>
            </section>

            {/* --- About K-12 Section --- */}
            <section className="py-24 bg-[#FFFFFF] relative">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="order-2 lg:order-1"
                        >
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#111111] mb-6">
                                Reimagining the <br />
                                <span className="text-[#2563EB]">Classroom Experience</span>
                            </h2>
                            <p className="text-[#555555] text-lg leading-relaxed mb-6 font-medium">
                                Our K-12 solutions bridge the gap between traditional pedagogy and modern technology. We specialize in curriculum development, interactive tools, gamification, and STEM integration, ensuring every student has access to a world-class education.
                            </p>
                            <p className="text-[#555555] text-lg leading-relaxed mb-8 font-medium">
                                From DEI-compliant learning materials to immersive AR/VR experiences, we empower educators to create inclusive and engaging environments for the next generation.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {["STEM Integration", "Gamified Learning", "DEI Compliance", "AR/VR Labs"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                                        <CheckCircle2 size={18} className="text-[#0F766E]" />
                                        <span className="text-sm font-bold text-[#111111]">{item}</span>
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
                            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                    alt="Kids learning with tablets"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-[#F8FAFC] p-6 rounded-xl border border-gray-200 shadow-lg hidden md:block">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-[#0F766E]">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-[#111111]">100%</p>
                                        <p className="text-xs text-[#555555] font-bold uppercase tracking-wider">Student Engagement</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Comprehensive Solutions Grid --- */}
            <section className="py-24 relative overflow-hidden bg-[#F8FAFC]">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[#0F766E] font-bold tracking-widest text-sm uppercase mb-4 block">Our Offerings</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#111111] mb-6">
                            Comprehensive <span className="text-[#2563EB]">K-12 Solutions</span>
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
                                className="group relative overflow-hidden rounded-2xl bg-[#FFFFFF] border border-gray-200 hover:border-[#0F766E] hover:shadow-lg transition-all flex flex-col"
                            >
                                <div className="h-48 relative overflow-hidden bg-gray-100 shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6 relative z-10 bg-[#FFFFFF] flex-grow flex flex-col">
                                    <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-[#0F766E] mb-4 group-hover:scale-110 transition-transform shadow-sm">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#111111] mb-2">{item.title}</h3>
                                    <p className="text-[#555555] font-medium text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* --- Differentiators --- */}
            <section className="py-24 bg-[#FFFFFF]">
                <div className="container mx-auto px-4 max-w-7xl text-center">
                    <div className="mb-16">
                        <span className="text-[#0F766E] font-bold tracking-widest text-sm uppercase mb-4 block">Why Choose Us</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#111111]">The Noble Nexus Advantage</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Custom Solutions", desc: "SME-based tailored software." },
                            { title: "Innovative Ecosystem", desc: "Scalable cloud infrastructure." },
                            { title: "Curriculum Expertise", desc: "Global standards aligned." },
                            { title: "Accessibility Focus", desc: "DEI integrated learning." }
                        ].map((diff, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-[#F8FAFC] border border-gray-200 hover:border-[#0F766E] hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
                                <div className="w-16 h-16 rounded-full bg-teal-50 mx-auto flex items-center justify-center text-[#0F766E] mb-6">
                                    <Trophy size={28} />
                                </div>
                                <h4 className="text-xl font-bold text-[#111111] mb-3">{diff.title}</h4>
                                <p className="text-[#555555] font-medium text-sm">{diff.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA Section --- */}
            <section className="py-32 relative overflow-hidden bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-[#111111] mb-8">
                        Transform Your <br /> K-12 Institution Today
                    </h2>
                    <p className="text-xl text-[#555555] font-medium mb-12">
                        Join the digital revolution in education with Noble Nexus.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            to="/"
                            onClick={() => window.scrollTo(0, 0)}
                            className="w-full sm:w-auto px-10 py-5 bg-[#0F766E] text-[#FFFFFF] font-bold text-lg rounded-full shadow-md hover:bg-teal-700 hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
                        >
                            Home
                        </Link>
                        <Link
                            to="/contact"
                            className="w-full sm:w-auto px-10 py-5 bg-[#FFFFFF] border border-gray-200 text-[#111111] font-bold text-lg rounded-full hover:bg-gray-50 shadow-sm hover:shadow-md transition-all"
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


