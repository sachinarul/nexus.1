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
    ArrowRight,
    BrainCircuit,
    Calculator
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ClassBridge = () => {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="bg-[#ffffff] min-h-screen font-sans text-gray-900 selection:bg-teal-200 selection:text-teal-900 overflow-hidden">

            {/* --- Hero Section --- */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#FFFFFF]">
                <div className="absolute inset-0 bg-[#FFFFFF] z-0"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow delay-1000"></div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            className="text-left"
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-teal-100 border border-teal-200 text-teal-700 text-xs font-bold tracking-widest uppercase mb-6">
                                ClassBridge (Cross Bridge)
                            </span>
                            <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-[#111111]">
                                EdTech <span className="text-[#0F766E]">AI Portal</span>
                            </h1>
                            <p className="text-xl text-[#555555] mb-8 leading-relaxed font-medium">
                                A full-featured, AI-powered EdTech platform designed to serve educational institutions of all sizes. Built on OpenAPI 3.1 with over 200 endpoints across 16 functional domains.
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
                                    src="/classbridge_hero.png"
                                    alt="ClassBridge Platform Overview"
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Overview Section --- */}
            <section className="py-24 bg-[#F8FAFC] relative">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-[#111111] mb-6">System <span className="text-teal-600">Architecture & Specs</span></h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            {[
                                { title: "API Version", value: "0.1.0 (OpenAPI 3.1)", icon: Server },
                                { title: "Endpoints", value: "200+ Endpoints", icon: LayoutDashboard },
                                { title: "Auth Method", value: "JWT / OAuth 2.0 / 2FA", icon: ShieldCheck },
                                { title: "AI Integration", value: "Tutor, Grading, Gen", icon: BrainCircuit }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center justify-center p-4">
                                    <item.icon className="w-8 h-8 text-teal-600 mb-4" />
                                    <h4 className="font-bold text-[#111111]">{item.title}</h4>
                                    <p className="text-sm text-[#555555] mt-1">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- Core Modules Breakdown --- */}
            {[
                {
                    title: "AI & Intelligence Engine",
                    desc: "ClassBridge embeds AI capabilities directly into the learning workflow. Automate grading, generate lesson plans, and provide 24/7 AI tutoring.",
                    features: ["AI Lesson Plan Generator (v1 & v2)", "AI Quiz Generator & Short Answer Grader", "AI Student Tutor (with file uploads)", "AI Grade Helper & Engagement Helper"],
                    image: "/classbridge_ai_engine.png",
                    align: "right"
                },
                {
                    title: "Veda Integration",
                    desc: "A built-in Veda module to create and manage structured online courses with sections, modules, and completion tracking. Full LTI and Moodle native integration.",
                    features: ["Module Completion Tracking", "Moodle Assignment & Grade Sync", "AI-Powered Course Chat", "Timetable & Attendance Marking"],
                    image: "/classbridge_lms.png",
                    align: "left"
                },
                {
                    title: "Enterprise Finance Module",
                    desc: "Full double-entry accounting tightly integrated with operational data. Includes Accounts Receivable, Payable, Inventory, Fixed Assets, and Payroll.",
                    features: ["General Ledger & Trial Balance", "Journal Entries & Reversals", "Payroll Run Generation & Payslips", "Fixed Asset Register & Depreciation"],
                    image: "/classbridge_finance.png",
                    align: "right"
                },
                {
                    title: "Student & Teacher Management",
                    desc: "Comprehensive lifecycle tools combining enrollment, health records, assignments, marking, and group collaboration into one interface.",
                    features: ["Student Enrollment & Progress Reporting", "Teacher Assignment & Quiz Workflows", "Multi-channel Communication & Alerts", "Leave Management System"],
                    image: "/classbridge_student_mgmt.png",
                    align: "left"
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
                        className="text-4xl md:text-5xl font-display font-bold text-[#111111] mb-8"
                    >
                        Ready to Transform Your Institution?
                    </motion.h2>
                    <p className="text-xl text-[#555555] font-medium mb-12">
                        Seamlessly connecting students, teachers, administrators, and parents.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            to="/contact"
                            className="w-full sm:w-auto px-10 py-5 bg-[#0F766E] text-[#FFFFFF] font-bold text-lg rounded-full shadow-md hover:bg-teal-700 hover:scale-105 active:scale-95 transition-all"
                        >
                            Explore Documentation
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ClassBridge;
