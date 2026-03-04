
import React from 'react';
import { motion } from 'framer-motion';
import {
    School,
    GraduationCap,
    Building2,
    Landmark,
    LayoutDashboard,
    PenTool,
    Library,
    Server,
    Cpu,
    ShieldCheck,
    Globe,
    Headphones,
    ArrowRight,
    CheckCircle2
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const WhyNobleNexus = () => {
    const navigate = useNavigate();

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="bg-[#FFFFFF] min-h-screen font-sans text-[#555555] selection:bg-[#F3F4F6] selection:text-[#0F766E] overflow-hidden">

            {/* --- Hero Section --- */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FFFFFF]">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-[0.05]"></div>
                <div className="absolute inset-0 bg-[#FFFFFF]/80 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF]/0 to-[#FFFFFF]"></div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="text-left"
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-[#F3F4F6] border border-[#E5E7EB] text-[#0F766E] text-xs font-bold tracking-widest uppercase mb-6">
                                The Future of EdTech
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6 text-[#111111]">
                                Build the Future of Learning — <br />
                                <span className="text-[#2563EB]">Together</span>
                            </h1>
                            <p className="text-xl text-[#555555] mb-8 leading-relaxed font-medium">
                                Your trusted partner in digital education and workforce transformation. We support institutions in building future-ready learning ecosystems with innovation and excellence.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/solutions" className="px-8 py-4 bg-[#0F766E] text-[#FFFFFF] font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-teal-700 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group">
                                    Explore Solutions <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/contact" className="px-8 py-4 bg-[#FFFFFF] border-2 border-[#0F766E] text-[#111111] font-bold rounded-full hover:bg-[#F8FAFC] shadow-sm transition-all flex items-center gap-2">
                                    Contact Us
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
                                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                    alt="Futuristic Digital Learning Environment"
                                    className="w-full h-auto object-cover transition-opacity opacity-100"
                                />
                                <div className="absolute inset-0 bg-[#FFFFFF] opacity-10"></div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-100 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl -z-10 animate-pulse-slow delay-1000"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Mission Section --- */}
            <section className="py-24 bg-[#F8FAFC] relative">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                    alt="Team Collaborating"
                                    className="w-full h-auto object-cover transition-all duration-700"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#111111] mb-6">
                                Our <span className="text-[#0F766E]">Mission</span>
                            </h2>
                            <h3 className="text-2xl font-medium text-[#333333] mb-6">
                                Build the future of learning—together.
                            </h3>
                            <p className="text-[#555555] text-lg leading-relaxed mb-8 font-medium">
                                We empower institutions with innovative technologies, expert support, and scalable platforms to thrive in today’s digital landscape. Our goal is to bridge the gap between education and technology, ensuring that learning is accessible, engaging, and effective for everyone.
                            </p>

                            <div className="flex gap-4">
                                <div className="p-4 bg-[#FFFFFF] rounded-xl border border-gray-200 shadow-sm">
                                    <h4 className="text-2xl font-bold text-[#111111] mb-1">Global</h4>
                                    <p className="text-xs text-[#555555] font-bold uppercase">Reach</p>
                                </div>
                                <div className="p-4 bg-[#FFFFFF] rounded-xl border border-gray-200 shadow-sm">
                                    <h4 className="text-2xl font-bold text-[#111111] mb-1">Expert</h4>
                                    <p className="text-xs text-[#555555] font-bold uppercase">Support</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Who We Serve Section --- */}
            <section className="py-24 bg-[#FFFFFF] relative border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[#0F766E] font-bold tracking-widest text-sm uppercase mb-4 block">Our Partners</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#111111] mb-6">Who We Serve</h2>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            { title: "Schools", icon: School, img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80", desc: "K-12 institutions creating modern classrooms." },
                            { title: "Universities", icon: GraduationCap, img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80", desc: "Higher-ed campuses transforming student experiences." },
                            { title: "Enterprises", icon: Building2, img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80", desc: "Businesses upskilling their global workforce." },
                            { title: "Government", icon: Landmark, img: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?auto=format&fit=crop&w=800&q=80", desc: "Public sector training and development centers." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                whileHover={{ y: -8 }}
                                className="group bg-[#FFFFFF] border border-gray-200 rounded-2xl overflow-hidden hover:border-teal-400 hover:shadow-xl transition-all h-[340px] flex flex-col shadow-sm relative"
                            >
                                <div className="h-48 w-full relative overflow-hidden bg-gray-100 shrink-0">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                <div className="relative p-6 pt-10 bg-[#FFFFFF] flex-grow flex flex-col shadow-[0_-15px_15px_-15px_rgba(255,255,255,1)]">
                                    {/* Floating Icon */}
                                    <div className="absolute -top-8 left-6 w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center text-[#0F766E] shadow-md border border-teal-100 group-hover:-translate-y-2 transition-transform duration-300">
                                        <item.icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#111111] mb-2">{item.title}</h3>
                                    <p className="text-[#555555] text-sm font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- Core Solutions Section --- */}
            <section className="py-24 relative overflow-hidden bg-[#F8FAFC]">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-[#2563EB] font-bold tracking-widest text-sm uppercase mb-4 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#111111] mb-6">
                            Core <span className="text-[#0F766E]">Solutions</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Card A: School Management ERP */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#FFFFFF] border border-gray-200 rounded-3xl overflow-hidden hover:border-teal-300 transition-all group shadow-sm hover:shadow-md"
                        >
                            <div className="h-64 relative overflow-hidden bg-gray-100">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80" alt="ERP Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center">
                                        <LayoutDashboard className="text-[#0F766E]" size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#111111]">School Management ERP</h3>
                                </div>
                                <p className="text-[#555555] mb-6 font-medium leading-relaxed">An all-in-one platform to manage academic, administrative, and communication processes seamlessly.</p>
                                <ul className="grid grid-cols-2 gap-y-3">
                                    {["Admissions", "Attendance", "Fees Management", "Parent Portal"].map((feat, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-[#333333] font-semibold">
                                            <CheckCircle2 size={16} className="text-[#0F766E]" /> {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Card B: Learning Design */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-[#FFFFFF] border border-gray-200 rounded-3xl overflow-hidden hover:border-purple-300 transition-all group shadow-sm hover:shadow-md"
                        >
                            <div className="h-64 relative overflow-hidden bg-gray-100">
                                <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80" alt="Learning Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center">
                                        <PenTool className="text-purple-600" size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#111111]">Learning Design</h3>
                                </div>
                                <p className="text-[#555555] mb-6 font-medium leading-relaxed">Outcome-driven learning experiences using proven instructional design principles and multimedia.</p>
                                <ul className="grid grid-cols-2 gap-y-3">
                                    {["Interactive Courses", "Multimedia Content", "Assessments", "Accessibility"].map((feat, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-[#333333] font-semibold">
                                            <CheckCircle2 size={16} className="text-purple-600" /> {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Card C: Content Management */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#FFFFFF] border border-gray-200 rounded-3xl overflow-hidden hover:border-amber-300 transition-all group shadow-sm hover:shadow-md"
                        >
                            <div className="h-64 relative overflow-hidden bg-gray-100">
                                <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1000&q=80" alt="Content Management" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center">
                                        <Library className="text-amber-600" size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#111111]">Content Management</h3>
                                </div>
                                <p className="text-[#555555] mb-6 font-medium leading-relaxed">Robust content management systems to organize, secure, and deliver digital learning resources.</p>
                                <ul className="grid grid-cols-2 gap-y-3">
                                    {["Cloud Storage", "Advanced Search", "Version Control", "Secure Access"].map((feat, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-[#333333] font-semibold">
                                            <CheckCircle2 size={16} className="text-amber-600" /> {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Card D: Managed Services */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-[#FFFFFF] border border-gray-200 rounded-3xl overflow-hidden hover:border-cyan-300 transition-all group shadow-sm hover:shadow-md"
                        >
                            <div className="h-64 relative overflow-hidden bg-gray-100">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80" alt="Managed Services" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center">
                                        <Server className="text-cyan-600" size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#111111]">Managed Services</h3>
                                </div>
                                <p className="text-[#555555] mb-6 font-medium leading-relaxed">End-to-end platform implementation, technical support, and infrastructure management.</p>
                                <ul className="grid grid-cols-2 gap-y-3">
                                    {["Deployment", "System Monitoring", "Maintenance", "24/7 Support"].map((feat, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-[#333333] font-semibold">
                                            <CheckCircle2 size={16} className="text-cyan-600" /> {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Why Choose Noble Nexus Section --- */}
            <section className="py-24 bg-[#FFFFFF] relative border-t border-gray-100">
                <div className="absolute inset-0 bg-[#F8FAFC] opacity-40"></div>
                <div className="container mx-auto px-4 max-w-7xl text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[#111111] mb-16">Why Choose Noble Nexus?</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Innovation-Driven", desc: "Always ahead of the curve with latest tech.", icon: Cpu },
                            { title: "Industry Expertise", desc: "Deep understanding of educational needs.", icon: GraduationCap },
                            { title: "Scalable Architecture", desc: "Systems that grow with your institution.", icon: Server },
                            { title: "Secure Infrastructure", desc: "Enterprise-grade data protection.", icon: ShieldCheck },
                            { title: "Dedicated Support", desc: "We are with you every step of the way.", icon: Headphones },
                            { title: "Global Standards", desc: "World-class compliance and quality.", icon: Globe }
                        ].map((feat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-8 rounded-2xl bg-[#FFFFFF] border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300 shadow-sm text-left"
                            >
                                <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center text-[#0F766E] mb-6 shadow-sm border border-teal-100">
                                    <feat.icon size={28} />
                                </div>
                                <h4 className="text-xl font-bold text-[#111111] mb-3">{feat.title}</h4>
                                <p className="text-[#555555] text-sm font-medium">{feat.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Impact & Trust Section --- */}
            <section className="py-20 bg-[#F3F4F6] border-y border-gray-200 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: "500+", label: "Institutions" },
                            { value: "2M+", label: "Learners" },
                            { value: "99.9%", label: "Uptime" },
                            { value: "24/7", label: "Support" }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-2">
                                <h4 className="text-4xl md:text-6xl font-bold text-[#111111]">{stat.value}</h4>
                                <p className="text-[#0F766E] font-bold uppercase tracking-widest text-xs">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA Section --- */}
            <section className="py-32 relative overflow-hidden bg-[#FFFFFF]">
                <div className="absolute inset-0 bg-[#F8FAFC] opacity-80"></div>
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-[#111111] mb-8">
                        Ready to Transform Learning?
                    </h2>
                    <p className="text-xl text-[#555555] mb-12 font-medium">
                        Join institutions worldwide building the future with Noble Nexus.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button
                            onClick={() => navigate('/contact')}
                            className="w-full sm:w-auto px-10 py-5 bg-[#0F766E] text-[#FFFFFF] font-bold text-lg rounded-full shadow-lg hover:bg-teal-700 hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
                        >
                            Get Started
                        </button>
                        <Link
                            to="/"
                            onClick={() => window.scrollTo(0, 0)}
                            className="w-full sm:w-auto px-10 py-5 bg-[#FFFFFF] border-2 border-[#0F766E] text-[#111111] font-bold text-lg rounded-full hover:bg-[#F3F4F6] transition-all shadow-sm"
                        >
                            Home
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default WhyNobleNexus;

