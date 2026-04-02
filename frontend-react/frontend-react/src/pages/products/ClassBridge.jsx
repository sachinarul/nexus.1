import React from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck,
    Lock,
    GraduationCap,
    BookOpen,
    ClipboardCheck,
    Calculator,
    MessageSquare,
    Calendar,
    Users,
    FileText,
    UserPlus,
    Building,
    UserCheck,
    User,
    Heart,
    ArrowRight,
    Server,
    Database,
    Cloud
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ClassBridge = () => {
    // Animation constants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const features = [
        {
            title: "Multi-Tenant School Management",
            description: "Every school on ClassBridge operates in its own completely isolated environment. Student data, staff records, academic content, and financials are all scoped to your institution. Whether you're a single school or a group of institutions, each tenant stays separate and secure.",
            icon: ShieldCheck
        },
        {
            title: "Role-Based Access Control",
            description: "Not everyone should see everything. ClassBridge uses a granular permission system where every user — from the Root Admin to a Parent — only sees and does what their role allows. No more accidental data exposure, no more workarounds.",
            icon: Lock
        },
        {
            title: "Academic Management",
            description: "Everything academic lives here. Teachers can upload timetables, schedule exams, set assignments, and publish progress cards. Students can view their schedule, check grades, and track their own progress.",
            icon: GraduationCap
        },
        {
            title: "Class Groups & Learning Management",
            description: "Teachers can create class groups, upload study materials, build quizzes, manage a question bank, and export grade reports. Students can access course content, submit work, and track their learning progress.",
            icon: BookOpen
        },
        {
            title: "Attendance Tracking",
            description: "Both student and staff attendance is built into ClassBridge. Teachers can mark daily attendance, admins can review records, and the system flags patterns automatically. No spreadsheets, no paper registers.",
            icon: ClipboardCheck
        },
        {
            title: "Finance & Payroll",
            description: "Staff can view their salary slips directly from their dashboard. Admins and finance managers have access to payroll overviews and finance reports. Access is strictly role-gated — a teacher only sees their own records.",
            icon: Calculator
        },
        {
            title: "Internal Communication",
            description: "Built-in messaging system for internal emails and notifications. Teachers can message parents, admins can broadcast announcements, and everyone gets notified about what matters to them in a professional way.",
            icon: MessageSquare
        },
        {
            title: "Leave Management",
            description: "Staff and students can apply for leave directly through the platform. Managers and admins can review pending requests, approve or reject them, and maintain a complete leave history — all without a separate HR tool.",
            icon: Calendar
        },
        {
            title: "Parent Portal",
            description: "Parents are not left out. They can log in to view their child's attendance, assignments, progress reports, and receive direct messages from teachers. Transparency between school and home.",
            icon: Users
        },
        {
            title: "Documents & Health Records",
            description: "Student documents and health records are stored securely within each student's profile. Authorised staff can upload, view, and update records as needed with full role-based access controls.",
            icon: FileText
        }
    ];

    const roles = [
        {
            role: "Root Admin",
            desc: "Full platform control. Manages all schools, creates institution accounts, and has visibility across the entire system.",
            icon: UserPlus
        },
        {
            role: "Institution Admin",
            desc: "Manages everything within their school. Users, roles, permissions, classes, timetables, finances, and more.",
            icon: Building
        },
        {
            role: "Principal",
            desc: "Oversees academic activity, staff performance, and school-wide reports with read-level visibility across all departments.",
            icon: UserCheck
        },
        {
            role: "Teacher",
            desc: "Manages their classes, students, assignments, quizzes, attendance, and communicates with parents — all from one dashboard.",
            icon: BookOpen
        },
        {
            role: "Student",
            desc: "Views their timetable, assignments, exam schedules, progress cards, and course materials in a clean personal dashboard.",
            icon: User
        },
        {
            role: "Parent / Guardian",
            desc: "Stays informed about their child's attendance, grades, and school communications without needing to call the school.",
            icon: Heart
        }
    ];

    return (
        <div className="bg-[#FFFFFF] min-h-screen text-slate-900 font-sans overflow-x-hidden selection:bg-teal-100">
            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-teal-50 rounded-full blur-[120px] opacity-40"></div>
                <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[150px] opacity-30"></div>
            </div>

            {/* --- Hero Section --- */}
            <section className="relative pt-32 pb-20 lg:pt-52 lg:pb-32 z-10">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                        >
                            <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-slate-900 text-white text-xs font-bold tracking-widest uppercase mb-8">
                                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                                Noble Nexus Product
                            </span>
                            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-8 text-[#0F172A]">
                                Introducing <span className="text-teal-600">ClassBridge</span>
                            </h1>
                            <h2 className="text-2xl font-medium text-slate-600 mb-6 leading-relaxed">
                                A complete school management platform built for institutions that want real structure, real control, and real results — not just another tool that adds more chaos.
                            </h2>
                            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-2xl">
                                Managing a school is hard. Between tracking attendance, handling assignments, managing staff, communicating with parents, and keeping finances in order — most institutions are stitching together five different tools that don't talk to each other. ClassBridge changes that. It's a single, unified platform built from the ground up for schools and universities, where every role has a purpose and every action is accounted for.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact" className="px-8 py-4 bg-[#0F172A] text-white font-bold rounded-2xl shadow-xl hover:bg-slate-800 transition-all flex items-center gap-2 group">
                                    Reserve Implementation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a href="#features" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-2xl shadow-sm hover:border-slate-300 transition-all">
                                    Explore Modules
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-teal-600/5 blur-[40px] rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-2xl bg-white p-2">
                                <img
                                    src="/classbridge_hero_viz.png"
                                    alt="ClassBridge Dashboard Preview"
                                    className="w-full h-auto rounded-[24px]"
                                />
                            </div>
                            
                            {/* Decorative Floating Card */}
                            <motion.div 
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-teal-50 max-w-[200px]"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                                        <ShieldCheck size={18} />
                                    </div>
                                    <span className="font-bold text-xs uppercase tracking-wider text-slate-400">Security</span>
                                </div>
                                <p className="text-sm font-bold text-slate-800">Isolated Multi-Tenant Architecture</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Section: What ClassBridge Does --- */}
            <section id="features" className="py-24 bg-slate-50/50 border-y border-slate-100 relative">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl lg:text-5xl font-display font-bold text-[#0F172A] mb-8">What <span className="text-teal-600">ClassBridge Does</span></h2>
                        <p className="text-xl text-slate-600 leading-relaxed mb-16">
                            ClassBridge brings your entire institution into one place. From the moment a student enrolls to the day they graduate, every interaction — academic, administrative, and financial — is tracked, managed, and accessible to the right people at the right time.
                        </p>
                    </motion.div>

                    <motion.div 
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 text-left"
                    >
                        {features.map((feature, idx) => (
                            <motion.div 
                                key={idx}
                                variants={fadeInUp}
                                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                
                <div className="container mx-auto px-4 max-w-7xl mt-24">
                    <div className="rounded-[40px] overflow-hidden border border-slate-200 shadow-xl bg-white p-4">
                        <img 
                            src="/classbridge_features_overview.png" 
                            alt="Feature Landscape" 
                            className="w-full h-auto rounded-[28px]"
                        />
                    </div>
                </div>
            </section>

            {/* --- Section: Who It's For --- */}
            <section className="py-32 relative">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-20">
                        <motion.h2 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-4xl lg:text-5xl font-display font-bold text-[#0F172A]"
                        >
                            Designed Around <span className="text-teal-600">Real People</span>
                        </motion.h2>
                        <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
                            ClassBridge is designed around the real people who run and attend institutions every day.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {roles.map((role, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col p-8 rounded-3xl bg-[#F8FAFC] border border-slate-100 hover:border-teal-200 transition-colors group"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-teal-600 border border-slate-100 group-hover:bg-teal-50 border group-hover:border-teal-100 transition-all">
                                        <role.icon size={20} />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900">{role.role}</h4>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {role.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Section: Why ClassBridge & CTA --- */}
            <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-teal-400/5 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[150px]"></div>
                
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2 className="text-4xl lg:text-5xl font-display font-bold leading-tight mb-8">
                                Why Choose <span className="text-teal-400">ClassBridge?</span>
                            </h2>
                            <div className="space-y-8">
                                <p className="text-xl text-slate-300 leading-relaxed">
                                    Most school software is either too simple to be useful or too complex to actually use. ClassBridge hits the middle — powerful enough for large institutions, simple enough that a teacher can figure it out on day one.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 text-teal-400"><Server size={24} /></div>
                                        <div>
                                            <h4 className="font-bold text-lg">Secure Backend</h4>
                                            <p className="text-slate-400 text-sm mt-1">High-performance FastAPI & PostgreSQL core.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 text-teal-400"><Cloud size={24} /></div>
                                        <div>
                                            <h4 className="font-bold text-lg">Cloud Scalability</h4>
                                            <p className="text-slate-400 text-sm mt-1">Designed to grow with your institution seamlessly.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                    <p className="text-slate-300 italic">
                                        "No long implementations. No training weeks. Just a platform that works the way your school already does — only better."
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white text-slate-900 p-12 rounded-[40px] text-center shadow-2xl relative"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100 rounded-bl-full opacity-30"></div>
                            <GraduationCap size={48} className="mx-auto text-teal-600 mb-8" />
                            <h3 className="text-3xl font-display font-bold mb-6">Ready to Transform Your School?</h3>
                            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                                Get a complete walkthrough of the ClassBridge ecosystem and see how it fits your institution.
                            </p>
                            <Link to="/contact" className="inline-flex items-center justify-center w-full py-5 bg-[#0F172A] text-white font-bold text-xl rounded-2xl hover:bg-slate-800 hover:scale-[1.02] transition-all shadow-xl">
                                Request Access <ArrowRight size={22} className="ml-3" />
                            </Link>
                            <div className="mt-8 flex justify-center gap-6 text-slate-400 grayscale opacity-60">
                                <Building size={24} />
                                <Database size={24} />
                                <ShieldCheck size={24} />
                                <Cloud size={24} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ClassBridge;
