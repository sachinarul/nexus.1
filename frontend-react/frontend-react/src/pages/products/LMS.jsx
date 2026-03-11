
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
            <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-[#FFFFFF]">
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
                            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6 text-[#111111]">
                                Enriching Schools with <span className="text-[#0F766E]">Smart Management Tools</span> and Technology
                            </h1>

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
            <section className="pt-12 pb-8 bg-[#F8FAFC] relative">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-left"
                        >
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#111111] mb-8">What does <span className="text-teal-600">LMS stand for?</span></h2>
                            <div className="text-lg text-[#555555] leading-relaxed font-medium space-y-6">
                                <p>
                                    Learning management system (LMS), it is a type of software that hosts educational or training content for students or employees or customers. Using a learning management system makes it possible for businesses to transfer your training and development program into an online environment. Business leaders can organize learning programs and reduce the time required to create courses and distribute them to your colleagues or students.
                                </p>
                                <p>
                                    The learning management system can vary from a basic nursery rhyme audio/video CD to any sophisticated software to advance teaching management program or business. A standard learning management system can perform a variety of e-learning tasks such as providing materials to students, discussion through chat or teleconference between learners and instructors, tests, recording scores, report and track the progress of learners.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-[#FFFFFF] p-4">
                                <img
                                    src="/lms-definition.png"
                                    alt="What is LMS"
                                    className="w-full h-auto object-cover rounded-2xl"
                                />
                                {/* Decorative elements */}
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-100 rounded-full blur-2xl opacity-60 -z-10 animate-pulse"></div>
                                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-60 -z-10 animate-pulse delay-1000"></div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Services Heading Section */}
                    <div className="text-center mt-16 mb-8">
                        <span className="text-teal-600 font-bold tracking-widest text-sm uppercase mb-4 block">Platform Offerings</span>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-[#111111] mb-6">
                            Services under <span className="text-teal-600">LMS Product</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-teal-600 mx-auto rounded-full"></div>
                    </div>
                </div>
            </section>



            {/* --- Detailed Breakdown Sections --- */}
            {[
                {
                    title: "Student Management System",
                    desc: "A system that transforms the way our students engage with their academic information at their campus. We streamline your processes and automate systems to:",
                    features: ["Homework, assignments and project tracking", "Timetable and scheduling management", "Exams and grade management", "Student Profile Management", "Daily, monthly and cumulative attendance tracking", "Email exchange between teacher and management staff", "Informative dashboard to monitor progress"],
                    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                    align: "left"
                },
                {
                    title: "Teacher Management System",
                    desc: "Teachers handle critical information required to sustain the institution which is related to students and their performance which adds to the adherence of the institution such as:",
                    features: ["Manage Attendance", "Create multiple questions bank", "Create on-line test and assign to the students", "Upload assignments and assessments", "Report cards", "Performance register", "Updates to students and parents"],
                    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                    align: "right"
                },
                {
                    title: "Parent Management System",
                    desc: "This portal allows Parents to easily keep track of their children's academic progress and information. With quick access menus, Parents can stay updated on various aspects including:",
                    features: ["Students profile", "Grades and Progress", "Homework, assignments & project progress", "Attendance", "Email exchange between management and parents", "Notices and notifications", "SMS or Email Alerts"],
                    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                    align: "left"
                },
                {
                    title: "Student Application Management",
                    desc: "Online Admission Manager module will streamline the school’s entire admissions process. Begin with tracking detailed prospective student data during the inquiry stage, through interview, visit and ultimately registration.",
                    features: ["Save manual hours every day entering and tracking applicant progress", "Automatically keep parents, applicants and staff informed about applicant progress", "Integrated e-mail streamlines communication and reduces paper costs"],
                    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                    align: "right"
                },
                {
                    title: "Tailored Educational Management",
                    desc: "Revolutionize your educational institution with tailor-made company management solutions. Explore our services:",
                    features: ["ERP Systems for School Management", "Custom Course Development and Instructional Design", "Managed eLearning Services including LMS setup and support", "Digital Content Management Solutions tailored for modern education", "Accessibility Compliance Services for Inclusive Learning", "Integration of Virtual Classrooms and Mobile Learning"],
                    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                    align: "left"
                },
                {
                    title: "System Administration",
                    desc: "System Administrator module helps to setup entire application setup functions and maintenance including:",
                    features: ["Creating institutional licenses, payment details of subscription fees and balance dues", "3-tier securities – Module based, Role based and Functions based securities", "User’s authentications creations and password maintenance for the users"],
                    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
                    align: "right"
                }
            ].map((section, idx) => (
                <section key={idx} className={`py-12 lg:py-20 ${idx % 2 === 1 ? 'bg-[#F8FAFC]' : 'bg-[#FFFFFF]'}`}>
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
                                <img src={section.image} alt={section.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
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
                        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="w-full sm:w-auto px-10 py-5 bg-[#0F766E] text-[#FFFFFF] font-bold text-lg rounded-full shadow-md hover:bg-teal-700 hover:scale-105 active:scale-95 transition-all">Home</Link>
                        <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-[#FFFFFF] border border-gray-200 text-[#111111] font-bold text-lg rounded-full hover:bg-gray-50 shadow-sm hover:shadow-md transition-all">Contact Sales</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LMS;


