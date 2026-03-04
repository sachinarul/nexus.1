
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
        <div className="bg-[#ffffff] min-h-screen font-sans text-gray-900 selection:bg-teal-200 selection:text-teal-900 overflow-hidden">

            {/* --- Hero Section --- */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FFFFFF]">
                {/* Background Elements & Overlays */}
                <div className="absolute inset-0 bg-[#FFFFFF] z-0"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow delay-1000"></div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="text-left"
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-teal-100 border border-teal-200 text-teal-700 text-xs font-bold tracking-widest uppercase mb-6">
                                Next-Gen EdTech
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6 text-[#111111]">
                                Smart <span className="text-[#0F766E]">LMS</span> <br />
                                for Modern Schools
                            </h1>
                            <p className="text-xl text-[#555555] mb-8 leading-relaxed font-medium">
                                Enrich your institution with intelligent management tools. A comprehensive Learning Management System designed for seamless collaboration, tracking, and growth.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="px-8 py-4 bg-[#0F766E] text-[#FFFFFF] font-bold rounded-full shadow-md hover:bg-teal-700 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group">
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
                                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                    alt="Futuristic Classroom Dashboard"
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Floating UI Elements */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="absolute top-10 -left-10 bg-[#FFFFFF] backdrop-blur-md border border-gray-200 p-4 rounded-xl shadow-lg hidden lg:block"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-[#0F766E]">
                                            <BarChart3 size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-[#555555] font-bold">Student Engagement</p>
                                            <p className="text-lg font-bold text-[#111111]">+24% <span className="text-xs font-normal text-[#0F766E]">vs last month</span></p>
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
            <section className="py-24 bg-[#F8FAFC] relative">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-[#111111] mb-6">What is a <span className="text-teal-600">Learning Management System?</span></h2>
                        <p className="text-lg text-[#555555] leading-relaxed font-medium max-w-3xl mx-auto mb-12">
                            A Learning Management System (LMS) is a powerful software application for the administration, documentation, tracking, reporting, automation, and delivery of educational courses, training programs, or learning and development programs. It is the central nervous system of modern education.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-[#FFFFFF]"
                    >
                        {/* Premium Dashboard Mockup Container */}
                        <div className="h-full min-h-[450px] relative overflow-hidden group bg-[#F8FAFC] flex items-center justify-center p-6 lg:p-12">
                            {/* Animated Background Gradients */}
                            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-teal-50 to-transparent opacity-60"></div>

                            {/* Floating Browser Mockup */}
                            <div className="relative z-10 w-full aspect-video rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-200 group-hover:-translate-y-2 transition-transform duration-500">
                                {/* Browser Header */}
                                <div className="h-6 bg-gray-100 border-b border-gray-200 flex items-center px-3 gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                                </div>

                                <img
                                    src="/modern_lms_dashboard_mockup_1772614506644.png"
                                    alt="Centralized LMS Dashboard"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Decorative Accent */}
                            <div className="absolute bottom-10 right-10 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl group-hover:bg-teal-500/20 transition-colors"></div>
                        </div>

                        {/* Text Content Column */}
                        <div className="p-10 lg:p-16 flex flex-col justify-center bg-gray-50/30">
                            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-[#0F766E] mb-6 shadow-sm">
                                <LayoutDashboard size={24} />
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-display font-bold text-[#111111] mb-6 leading-tight">
                                Centralized <br />
                                <span className="text-teal-600">Command Center</span>
                            </h3>
                            <p className="text-xl text-[#555555] font-medium leading-relaxed mb-8">
                                Monitor progress, manage content, and analyze performance from a single intuitive dashboard. All your education data, unified in one place.
                            </p>
                            <div className="space-y-4">
                                {["Real-time Analytics", "Seamless Content Control", "Intuitive User Design"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-[#333333] font-semibold">
                                        <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center">
                                            <CheckCircle2 size={12} className="text-[#0F766E]" />
                                        </div>
                                        {item}
                                    </div>
                                ))}
                            </div>
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
                                className="p-6 bg-gray-50 border border-gray-200 rounded-xl hover:bg-teal-50 hover:border-teal-200 transition-all group shadow-sm"
                            >
                                <item.icon className="w-8 h-8 text-teal-600 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                                <h4 className="font-bold text-[#111111] group-hover:text-teal-700">{item.title}</h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Core Services Grid --- */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-teal-600 font-bold tracking-widest text-sm uppercase mb-4 block">Holistic Ecosystem</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#111111] mb-6">
                            Complete <span className="text-teal-600">Educational Management</span>
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
                                className="p-8 bg-gray-50 border border-gray-200 rounded-2xl hover:border-teal-300 hover:shadow-lg transition-all group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                    <service.icon size={100} className="text-black" />
                                </div>
                                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
                                    <service.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-[#111111] mb-3 group-hover:text-teal-700 transition-colors">{service.title}</h3>
                                <p className="text-[#555555] font-medium text-sm leading-relaxed">{service.desc}</p>
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
                <section key={idx} className={`py-20 lg:py-32 ${idx % 2 === 1 ? 'bg-[#F8FAFC]' : 'bg-[#FFFFFF]'}`}>
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className={`grid lg:grid-cols-2 gap-16 items-center ${section.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                            <motion.div
                                initial={{ opacity: 0, x: section.align === 'left' ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={section.align === 'right' ? 'lg:order-2' : ''}
                            >
                                <h3 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">{section.title}</h3>
                                <p className="text-[#555555] font-medium text-lg mb-8 leading-relaxed">
                                    {section.desc}
                                </p>
                                <ul className="space-y-4">
                                    {section.features.map((feat, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[#111111] font-bold">
                                            <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center text-[#0F766E]">
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
                                className={`relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl group ${section.align === 'right' ? 'lg:order-1' : ''}`}
                            >
                                <div className="absolute inset-0 bg-teal-100/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>
            ))}

            {/* --- CTA Section --- */}
            <section className="py-32 relative overflow-hidden bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display font-bold text-[#111111] mb-8"
                    >
                        Ready to Transform Your Institution?
                    </motion.h2>
                    <p className="text-xl text-[#555555] font-medium mb-12">
                        Join hundreds of forward-thinking schools using Noble Nexus to power their future.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            to="/"
                            onClick={() => window.scrollTo(0, 0)}
                            className="w-full sm:w-auto px-10 py-5 bg-[#0F766E] text-[#FFFFFF] font-bold text-lg rounded-full shadow-md hover:bg-teal-700 hover:scale-105 active:scale-95 transition-all"
                        >
                            Home
                        </Link>
                        <Link
                            to="/contact"
                            className="w-full sm:w-auto px-10 py-5 bg-[#FFFFFF] border border-gray-200 text-[#111111] font-bold text-lg rounded-full hover:bg-gray-50 shadow-sm hover:shadow-md transition-all"
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


