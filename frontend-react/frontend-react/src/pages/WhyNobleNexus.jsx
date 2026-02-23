
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
        <div className="bg-navy-950 min-h-screen font-sans text-white selection:bg-teal selection:text-navy-900 overflow-hidden">

            {/* --- Hero Section --- */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
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
                            <span className="inline-block py-1 px-3 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-bold tracking-widest uppercase mb-6">
                                The Future of EdTech
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
                                Build the Future of Learning — <br />
                                <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Together</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                                Your trusted partner in digital education and workforce transformation. We support institutions in building future-ready learning ecosystems with innovation and excellence.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/solutions" className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold rounded-full shadow-[0_0_15px_rgba(20,184,166,0.5)] hover:shadow-[0_0_25px_rgba(20,184,166,0.8)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group">
                                    Explore Solutions <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/contact" className="px-8 py-4 bg-navy-800 border-2 border-teal/50 text-white font-bold rounded-full hover:bg-teal hover:text-navy-900 shadow-[0_0_10px_rgba(20,184,166,0.3)] transition-all flex items-center gap-2">
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
                            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-navy-900/50 backdrop-blur-xl transform transition-transform duration-500 hover:rotate-y-2 hover:rotate-x-2">
                                <img
                                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                    alt="Futuristic Digital Learning Environment"
                                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-teal/20 to-purple/20 mix-blend-overlay"></div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal/20 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple/20 rounded-full blur-3xl -z-10 animate-pulse-slow delay-1000"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Mission Section --- */}
            <section className="py-24 bg-navy-900/50 relative">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                    alt="Team Collaborating"
                                    className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-navy-900/40 mix-blend-multiply"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                                Our <span className="text-teal">Mission</span>
                            </h2>
                            <h3 className="text-2xl font-light text-white mb-6">
                                Build the future of learning—together.
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                We empower institutions with innovative technologies, expert support, and scalable platforms to thrive in today’s digital landscape. Our goal is to bridge the gap between education and technology, ensuring that learning is accessible, engaging, and effective for everyone.
                            </p>

                            <div className="flex gap-4">
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                    <h4 className="text-2xl font-bold text-white mb-1">Global</h4>
                                    <p className="text-xs text-gray-400 uppercase">Reach</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                    <h4 className="text-2xl font-bold text-white mb-1">Expert</h4>
                                    <p className="text-xs text-gray-400 uppercase">Support</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Who We Serve Section --- */}
            <section className="py-24 bg-gradient-to-b from-navy-950 to-navy-900 relative">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-teal font-medium tracking-widest text-sm uppercase mb-4 block">Our Partners</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Who We Serve</h2>
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
                                whileHover={{ y: -10 }}
                                className="group relative overflow-hidden rounded-2xl bg-navy-900 border border-white/5 hover:border-teal/30 transition-all h-[320px] flex flex-col justify-end p-6"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/60 to-transparent"></div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center text-teal mb-4 group-hover:scale-110 transition-transform backdrop-blur-sm">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- Core Solutions Section --- */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-purple-400 font-medium tracking-widest text-sm uppercase mb-4 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Core <span className="text-teal">Solutions</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Card A: School Management ERP */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-navy-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-teal/30 transition-all group"
                        >
                            <div className="h-64 relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80" alt="ERP Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <LayoutDashboard className="text-teal" size={28} />
                                    <h3 className="text-2xl font-bold text-white">School Management ERP</h3>
                                </div>
                                <p className="text-gray-400 mb-6">An all-in-one platform to manage academic, administrative, and communication processes seamlessly.</p>
                                <ul className="grid grid-cols-2 gap-y-2">
                                    {["Admissions", "Attendance", "Fees Management", "Parent Portal"].map((feat, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                            <CheckCircle2 size={14} className="text-teal/70" /> {feat}
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
                            className="bg-navy-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all group"
                        >
                            <div className="h-64 relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80" alt="Learning Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <PenTool className="text-purple-400" size={28} />
                                    <h3 className="text-2xl font-bold text-white">Learning Design</h3>
                                </div>
                                <p className="text-gray-400 mb-6">Outcome-driven learning experiences using proven instructional design principles and multimedia.</p>
                                <ul className="grid grid-cols-2 gap-y-2">
                                    {["Interactive Courses", "Multimedia Content", "Assessments", "Accessibility"].map((feat, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                            <CheckCircle2 size={14} className="text-purple-400/70" /> {feat}
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
                            className="bg-navy-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-amber-400/30 transition-all group"
                        >
                            <div className="h-64 relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1000&q=80" alt="Content Management" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <Library className="text-amber-400" size={28} />
                                    <h3 className="text-2xl font-bold text-white">Content Management</h3>
                                </div>
                                <p className="text-gray-400 mb-6">Robust content management systems to organize, secure, and deliver digital learning resources.</p>
                                <ul className="grid grid-cols-2 gap-y-2">
                                    {["Cloud Storage", "Advanced Search", "Version Control", "Secure Access"].map((feat, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                            <CheckCircle2 size={14} className="text-amber-400/70" /> {feat}
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
                            className="bg-navy-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-cyan-400/30 transition-all group"
                        >
                            <div className="h-64 relative overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80" alt="Managed Services" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <Server className="text-cyan-400" size={28} />
                                    <h3 className="text-2xl font-bold text-white">Managed Services</h3>
                                </div>
                                <p className="text-gray-400 mb-6">End-to-end platform implementation, technical support, and infrastructure management.</p>
                                <ul className="grid grid-cols-2 gap-y-2">
                                    {["Deployment", "System Monitoring", "Maintenance", "24/7 Support"].map((feat, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                            <CheckCircle2 size={14} className="text-cyan-400/70" /> {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Why Choose Noble Nexus Section --- */}
            <section className="py-24 bg-navy-950 relative">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
                <div className="container mx-auto px-4 max-w-7xl text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-16">Why Choose Noble Nexus?</h2>

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
                                className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-teal/50 hover:bg-white/10 transition-all duration-300 shadow-lg text-left"
                            >
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal/20 to-blue-500/20 flex items-center justify-center text-teal mb-6 shadow-lg shadow-teal/10">
                                    <feat.icon size={28} />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">{feat.title}</h4>
                                <p className="text-gray-400 text-sm">{feat.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Impact & Trust Section --- */}
            <section className="py-20 bg-gradient-to-r from-teal-900/10 to-purple-900/10 border-y border-white/5 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
                        {[
                            { value: "500+", label: "Institutions" },
                            { value: "2M+", label: "Learners" },
                            { value: "99.9%", label: "Uptime" },
                            { value: "24/7", label: "Support" }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-2">
                                <h4 className="text-4xl md:text-6xl font-bold text-white">{stat.value}</h4>
                                <p className="text-teal font-medium uppercase tracking-widest text-xs">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Simple Testimonial Slider Placeholder */}
                    <div className="max-w-4xl mx-auto bg-navy-900/80 border border-white/10 rounded-3xl p-8 md:p-12 text-center backdrop-blur-md relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal via-purple-500 to-teal"></div>
                        <p className="text-2xl md:text-3xl font-light text-white italic mb-8">
                            "Noble Nexus transformed our campus into a digital powerhouse. The students are more engaged, and our administration is seamless."
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="User" className="w-12 h-12 rounded-full object-cover border-2 border-teal" />
                            <div className="text-left">
                                <h5 className="font-bold text-white">Sarah Jenkins</h5>
                                <p className="text-sm text-gray-400">Dean of Technology, Westford University</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CTA Section --- */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-teal/90 opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                        Ready to Transform Learning?
                    </h2>
                    <p className="text-xl text-gray-300 mb-12">
                        Join institutions worldwide building the future with Noble Nexus.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button
                            onClick={() => navigate('/contact')}
                            className="w-full sm:w-auto px-10 py-5 bg-white !text-black font-bold text-lg rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95 transition-all"
                        >
                            Get Started
                        </button>
                        <Link
                            to="/"
                            onClick={() => window.scrollTo(0, 0)}
                            className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-sm"
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
