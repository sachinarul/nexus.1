
import React from 'react';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    Users,
    BookOpen,
    BarChart3,
    ShieldCheck,
    GraduationCap,
    School,
    Smartphone,
    FileText,
    Settings,
    Server,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const LMS = () => {
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
                {/* Background Elements & Dark Overlays */}
                <div className="absolute inset-0 bg-navy-950/40 z-0"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow delay-1000"></div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="text-left"
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-bold tracking-widest uppercase mb-6">
                                Next-Gen EdTech
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6">
                                Smart <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">LMS</span> <br />
                                for Modern Schools
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                                Enrich your institution with intelligent management tools. A comprehensive Learning Management System designed for seamless collaboration, tracking, and growth.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold rounded-full shadow-[0_0_15px_rgba(20,184,166,0.5)] hover:shadow-[0_0_25px_rgba(20,184,166,0.8)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group">
                                    Home <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/contact" className="px-8 py-4 bg-navy-800 border-2 border-teal/50 text-white font-bold rounded-full hover:bg-teal hover:text-navy-900 shadow-[0_0_10px_rgba(20,184,166,0.3)] transition-all">
                                    Request Proposal
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
                                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                    alt="Futuristic Classroom Dashboard"
                                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                                {/* Floating UI Elements */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="absolute top-10 -left-10 bg-navy-800/90 backdrop-blur-md border border-teal/30 p-4 rounded-xl shadow-xl hidden lg:block"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center text-teal">
                                            <BarChart3 size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400">Student Engagement</p>
                                            <p className="text-lg font-bold text-white">+24% <span className="text-xs font-normal text-emerald-400">vs last month</span></p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Decorative Blob */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-purple-600 rounded-2xl blur-2xl opacity-20 -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- What is LMS Section --- */}
            <section className="py-24 bg-navy-900/50 relative">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">What is a <span className="text-teal">Learning Management System?</span></h2>
                        <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto mb-12">
                            A Learning Management System (LMS) is a powerful software application for the administration, documentation, tracking, reporting, automation, and delivery of educational courses, training programs, or learning and development programs. It is the central nervous system of modern education.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-black/40"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                            alt="LMS Dashboard Interface"
                            className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
                            <h3 className="text-2xl font-bold text-white mb-2">Centralized Command Center</h3>
                            <p className="text-gray-300">Monitor progress, manage content, and analyze performance from a single intuitive dashboard.</p>
                        </div>
                    </motion.div>

                    {/* Benefits Grid */}
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
                        {[
                            { icon: School, title: "Online Learning" },
                            { icon: BarChart3, title: "Performance Analytics" },
                            { icon: CheckCircle2, title: "Progress Tracking" },
                            { icon: BookOpen, title: "Course Management" },
                            { icon: Users, title: "Remote Collaboration" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-6 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-teal/30 transition-all group"
                            >
                                <item.icon className="w-8 h-8 text-teal mb-4 mx-auto group-hover:scale-110 transition-transform" />
                                <h4 className="font-semibold text-gray-200 group-hover:text-white">{item.title}</h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Core Services Grid --- */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-teal font-medium tracking-widest text-sm uppercase mb-4 block">Holistic Ecosystem</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Complete <span className="bg-gradient-to-r from-teal to-purple bg-clip-text text-transparent">Educational Management</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Student Management",
                                icon: GraduationCap,
                                desc: "Track improved outcomes with homework, timetables, and exam modules."
                            },
                            {
                                title: "Teacher Management",
                                icon: Users,
                                desc: "Empower educators with question banks, online testing, and automated grading."
                            },
                            {
                                title: "Parent Portal",
                                icon: Smartphone,
                                desc: "Keep families engaged with real-time updates on grades, attendance, and alerts."
                            },
                            {
                                title: "Admissions & Applications",
                                icon: FileText,
                                desc: "Streamline the enrollment process with online forms and interview tracking."
                            },
                            {
                                title: "Tailored Education",
                                icon: Settings,
                                desc: "Custom ERP and eLearning support adapted to specific institutional needs."
                            },
                            {
                                title: "System Administration",
                                icon: ShieldCheck,
                                desc: "Robust security, role-based access control, and seamless license management."
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 bg-navy-900 border border-white/5 rounded-2xl hover:border-teal/50 hover:shadow-[0_0_30px_rgba(20,184,166,0.1)] transition-all group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <service.icon size={100} />
                                </div>
                                <div className="w-14 h-14 bg-teal/10 rounded-xl flex items-center justify-center text-teal mb-6 group-hover:scale-110 transition-transform">
                                    <service.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal transition-colors">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Detailed Breakdown Sections --- */}
            {[
                {
                    title: "Student Management System",
                    desc: "A student-centric platform that puts learning first. Manage every aspect of the student lifecycle from a single interface.",
                    features: ["Interactive Homework Tracking", "Dynamic Timetable Management", "Online Examination Portal", "Automated Attendance Logs"],
                    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                    align: "left"
                },
                {
                    title: "Teacher Empowerment Suite",
                    desc: "Tools that give time back to teachers. Automate administrative tasks so educators can focus on what they do best: teaching.",
                    features: ["Extensive Question Banks", "Seamless Assignment Grading", "Performance Reporting Dashboard", "Digital Classroom Tools"],
                    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                    align: "right"
                },
                {
                    title: "System Administration & Security",
                    desc: "Enterprise-grade security and control. Ensure data privacy and operational integrity across the entire institution.",
                    features: ["Role-Based Access Control", "Encrypted Data Storage", "Centralized Billing & Licensing", "Audit Trails & Logs"],
                    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                    align: "left"
                },
                {
                    title: "Parent Engagement Portal",
                    desc: "Bridge the gap between home and school. Give parents real-time visibility into their child's academic journey.",
                    features: ["Real-time Gradebook Access", "Instant Attendance Alerts", "Direct Teacher Messaging", "Homework Supervision"],
                    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                    align: "right"
                },
                {
                    title: "Admissions & Enrollment Hub",
                    desc: "Go paperless with a fully digital admissions process. Track applications from inquiry to enrollment effortlessly.",
                    features: ["Customizable Application Forms", "Interview Scheduling Tools", "Document Upload & Verification", "Automated Acceptance Letters"],
                    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                    align: "left"
                },
                {
                    title: "Tailored Educational Ecosystems",
                    desc: "We adapt to you, not the other way around. Custom modules and branding to fit your institution's unique pedagogy.",
                    features: ["White-Label Interface", "Custom Report Cards", "Third-Party API Integrations", "Multi-Language Support"],
                    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                    align: "right"
                }

            ].map((section, idx) => (
                <section key={idx} className={`py-20 lg:py-32 ${idx % 2 === 1 ? 'bg-navy-900/30' : 'bg-transparent'}`}>
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className={`grid lg:grid-cols-2 gap-16 items-center ${section.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                            <motion.div
                                initial={{ opacity: 0, x: section.align === 'left' ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={section.align === 'right' ? 'lg:order-2' : ''}
                            >
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{section.title}</h3>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    {section.desc}
                                </p>
                                <ul className="space-y-4">
                                    {section.features.map((feat, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300">
                                            <div className="p-1 rounded-full bg-teal/20 text-teal">
                                                <CheckCircle2 size={16} />
                                            </div>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className={`relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group ${section.align === 'right' ? 'lg:order-1' : ''}`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-teal/20 to-purple/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 hover:grayscale-0 grayscale lg:grayscale-[0.3]"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>
            ))}

            {/* --- CTA Section --- */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-teal/90 opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display font-bold text-white mb-8"
                    >
                        Ready to Transform Your Institution?
                    </motion.h2>
                    <p className="text-xl text-gray-300 mb-12">
                        Join hundreds of forward-thinking schools using Noble Nexus to power their future.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            to="/"
                            onClick={() => window.scrollTo(0, 0)}
                            className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold text-lg rounded-full shadow-[0_0_20px_rgba(20,184,166,0.5)] hover:shadow-[0_0_30px_rgba(20,184,166,0.8)] hover:scale-105 active:scale-95 transition-all"
                        >
                            Home
                        </Link>
                        <Link
                            to="/contact"
                            className="w-full sm:w-auto px-10 py-5 bg-navy-900 border-2 border-teal/50 text-white font-bold text-lg rounded-full hover:bg-teal-500 hover:text-white transition-all shadow-lg"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LMS;
