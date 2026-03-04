
import React from 'react';
import { motion } from 'framer-motion';
import {
    GraduationCap,
    BookOpen,
    Lightbulb,
    MonitorSmartphone,
    Accessibility,
    Users,
    CheckCircle2,
    ArrowRight,
    Library,
    Presentation,
    LineChart
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const HigherEducation = () => {
    const navigate = useNavigate();

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="bg-[#F8FAFC] min-h-screen font-sans text-[#111111] selection:bg-blue-50 selection:text-[#111111] overflow-hidden">

            {/* --- Hero Section --- */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FFFFFF]">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 z-0"></div>
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
                                Advanced Academic Solutions
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6 text-[#111111]">
                                Transforming <br />
                                <span className="text-[#2563EB]">Higher Education</span>
                            </h1>
                            <p className="text-xl text-[#555555] font-medium mb-8 leading-relaxed">
                                Future-proof your institution with cutting-edge learning solutions. We redefine academic experiences through digital innovation and instructional excellence.
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
                                    src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                    alt="Futuristic University Campus"
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Floating Overlay */}
                                
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- About Section --- */}
            <section className="py-24 bg-[#FFFFFF] relative">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                    alt="University Smart Classroom"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-blue-100/20 mix-blend-overlay"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#111111] mb-6">
                                Modernizing <span className="text-[#2563EB]">Legacy Systems</span>
                            </h2>
                            <p className="text-[#555555] font-medium text-lg leading-relaxed mb-6">
                                From comprehensive courseware development to accessibility and DEI integration, we equip institutions with scalable, technology-driven solutions.
                            </p>
                            <p className="text-[#555555] font-medium text-lg leading-relaxed mb-8">
                                Our mission is to enhance learning outcomes and modernize legacy content, giving universities the tools they need to stay competitive in a rapidly evolving global educational landscape.
                            </p>

                            <ul className="space-y-4">
                                {["Scalable Digital Infrastructure", "Inclusive Learning Environments", "Data-Driven Academic Insights"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[#2563EB]">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        <span className="text-[#111111] font-bold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Solutions Grid --- */}
            <section className="py-24 relative overflow-hidden bg-[#F8FAFC]">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[#2563EB] font-bold tracking-widest text-sm uppercase mb-4 block">Holistic Offerings</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#111111] mb-6">
                            Comprehensive <span className="text-[#2563EB]">Higher-Ed Solutions</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Curriculum Development",
                                desc: "Streamline administrative tasks and academic processes with ERP solutions.",
                                icon: Library,
                                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                title: "Assessment Development",
                                desc: "Transform complex content into engaging learning experiences.",
                                icon: Presentation,
                                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                title: "Interactive Content",
                                desc: "End-to-end LMS setup with gamified learning modules.",
                                icon: MonitorSmartphone,
                                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                title: "eBook Development",
                                desc: "Sophisticated content management for digital learning resources.",
                                icon: BookOpen,
                                image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                title: "Accessibility Compliance",
                                desc: "Meeting global accessibility standards for inclusive education.",
                                icon: Accessibility,
                                image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
                            },
                            {
                                title: "Virtual Classrooms",
                                desc: "Advanced solutions for real-time collaboration and remote teaching.",
                                icon: Users,
                                image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
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

            {/* --- Why Noble Nexus --- */}
            <section className="py-24 bg-gray-50 border-y border-gray-200 relative">
                <div className="container mx-auto px-4 max-w-7xl text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[#111111] mb-16">Why Noble Nexus?</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Customized Solutions", desc: "SME-based tailored services for unique university needs." },
                            { title: "Innovative Ecosystem", desc: "Future-ready, scalable eLearning infrastructure." },
                            { title: "Proven Track Record", desc: "Trusted partner for major content transformation projects." },
                            { title: "Digital Accessibility", desc: "Full DEI integration ensuring learning for all." }
                        ].map((feat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-8 rounded-2xl bg-[#FFFFFF] border border-gray-200 hover:border-[#2563EB] hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-lg"
                            >
                                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-[#2563EB] mb-6 mx-auto shadow-sm">
                                    <Lightbulb size={24} />
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
                        Upgrade Your <br /> Institution Today
                    </h2>
                    <p className="text-xl text-[#555555] font-medium mb-12">
                        Partner with Noble Nexus to build a future-ready academic environment.
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

export default HigherEducation;

