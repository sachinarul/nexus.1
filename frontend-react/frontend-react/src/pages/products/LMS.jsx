import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ArrowRight, 
    Play, 
    CheckCircle2, 
    BrainCircuit, 
    LineChart, 
    FileVideo, 
    ShieldCheck, 
    Blocks, 
    Headset,
    GraduationCap,
    School,
    Building2,
    Settings,
    FileUp,
    Users,
    TrendingUp,
    Globe,
    Zap,
    Award,
    Crown,
    ChevronDown,
    Quote
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LMS = () => {
    const [openFaq, setOpenFaq] = useState(null);

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
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

    const lmsFeatures = [
        {
            icon: <BrainCircuit size={28} className="text-teal-400" />,
            title: "AI assisted Adaptive learning",
            desc: "Noble Nexus LMS continuously analyzes each learner's behavior, pace, and performance to dynamically adjust content pathways in real time. Rather than delivering a one-size-fits-all curriculum, the platform serves personalized learning journeys that meet every student exactly where they are. The result is faster mastery, higher retention, and measurably better outcomes — at scale."
        },
        {
            icon: <LineChart size={28} className="text-indigo-400" />,
            title: "Real-Time Progress Analytics",
            desc: "Gain deep, actionable visibility into learner performance with a live analytics dashboard that surfaces engagement trends, completion rates, assessment scores, and at-risk indicators the moment they emerge. Instructors and administrators receive automated alerts and AI-generated recommendations — enabling proactive intervention before small gaps become large problems. With 98% predictive analytics accuracy, Noble Nexus turns data into decisions."
        },
        {
            icon: <FileVideo size={28} className="text-purple-400" />,
            title: "Multi-Format Content Delivery",
            desc: "Deliver learning content in every format your audience needs — video lectures, SCORM/xAPI packages, interactive PDFs, live virtual classes, quizzes, and blended learning modules — all from a single, unified platform. Noble Nexus LMS natively supports industry-standard content formats so your existing library migrates seamlessly without rebuilding from scratch. Learners consume content the way they learn best; the platform handles the rest."
        },
        {
            icon: <ShieldCheck size={28} className="text-emerald-400" />,
            title: "Enterprise-Grade Security & Compliance",
            desc: "Noble Nexus LMS is built to meet the most rigorous institutional and regulatory standards, including WCAG 2.1 accessibility compliance, GDPR data protection, FERPA, and ISO 27001 security protocols. Role-based access controls, encrypted data storage, and audit-ready reporting ensure your institution's data and your learners' privacy are never compromised. For large institutions and government bodies, we offer dedicated cloud environments and custom data residency options."
        },
        {
            icon: <Blocks size={28} className="text-blue-400" />,
            title: "Seamless Tool Integration",
            desc: "Noble Nexus connects natively with the tools your teams already rely on — Zoom, Microsoft Teams, Google Workspace, SSO providers, and hundreds more via open API and pre-built connectors. There's no need to overhaul existing workflows; the platform embeds into your ecosystem and amplifies it. Centralized identity management and single sign-on ensure frictionless access for every user across every device."
        },
        {
            icon: <Headset size={28} className="text-rose-400" />,
            title: "24/7 Manual Support & Automation",
            desc: "Noble Nexus automates routine administrative tasks — including enrollment management, progress reporting, certificate issuance, and deadline reminders — freeing educators and administrators to focus on what matters most. Our dedicated manual support team is available around the clock to answer learner questions, provide guidance on resources, and resolve issues. Your institution operates efficiently with reliable human expertise backing you."
        }
    ];

    const whoIsItFor = [
        {
            icon: <GraduationCap size={32} className="text-teal-400" />,
            title: "Higher Education & Universities",
            desc: "Noble Nexus LMS gives universities and higher education institutions the enterprise infrastructure needed to manage complex, multi-department academic programs at global scale. From credit-bearing degree programs and hybrid lecture delivery to research collaboration portals and faculty performance dashboards, the platform consolidates every academic function into one intelligent system. With seamless integration into student information systems (SIS) and ERP platforms, your institution gains a fully connected digital campus that drives enrollment, retention, and outcomes."
        },
        {
            icon: <School size={32} className="text-indigo-400" />,
            title: "K-12 Schools",
            desc: "Noble Nexus LMS empowers K-12 schools to deliver engaging, age-appropriate digital learning experiences that keep students motivated and parents informed. The platform's adaptive learning engine supports differentiated instruction, allowing teachers to serve diverse classrooms — including students with special educational needs — without added workload. Real-time progress tracking gives educators and school administrators a clear view of achievement across every classroom, year group, and campus."
        },
        {
            icon: <Building2 size={32} className="text-purple-400" />,
            title: "Corporate & Government Training",
            desc: "For corporate L&D teams and government training departments, Noble Nexus LMS transforms compliance training, professional development, and workforce upskilling from a logistical challenge into a strategic advantage. The platform supports large-scale rollouts across distributed teams, multiple languages, and complex organizational hierarchies — with automated tracking, certification management, and audit reporting built in. Whether you're onboarding new hires, meeting regulatory requirements, or developing leadership talent, Noble Nexus delivers measurable ROI on every training dollar."
        }
    ];

    const howItWorks = [
        {
            icon: <Settings size={24} />,
            step: "Step 1",
            title: "Configure Your Digital Campus",
            desc: "Work with the Noble Nexus onboarding team to set up your branded LMS environment — including user roles, course structures, integrations, and compliance settings. Most institutions are fully operational within days, not months."
        },
        {
            icon: <FileUp size={24} />,
            step: "Step 2",
            title: "Build & Import Your Content",
            desc: "Upload existing SCORM packages, video libraries, PDFs, and live class schedules, or use the Noble Nexus content builder to create interactive courses from scratch. The platform accepts all major eLearning content formats out of the box."
        },
        {
            icon: <Users size={24} />,
            step: "Step 3",
            title: "Enroll Learners & Launch",
            desc: "Add learners individually, via bulk upload, or through automated enrollment rules connected to your SIS or HR system. With single sign-on enabled, learners access their personalized dashboard instantly — on any device, anywhere in the world."
        },
        {
            icon: <TrendingUp size={24} />,
            step: "Step 4",
            title: "Track, Analyze & Optimize",
            desc: "Monitor engagement, performance, and outcomes through the real-time analytics dashboard. AI-powered insights flag learners at risk, identify content gaps, and recommend curriculum improvements — so your institution continuously improves without guesswork."
        }
    ];

    const stats = [
        { label: "Countries Reached Globally", value: "150+", icon: <Globe size={24} className="text-teal-400" /> },
        { label: "Increase in Student Engagement", value: "40%", icon: <Users size={24} className="text-indigo-400" /> },
        { label: "Admin Task Automation Rate", value: "90%", icon: <Settings size={24} className="text-purple-400" /> },
        { label: "Predictive Analytics Accuracy", value: "98%", icon: <TrendingUp size={24} className="text-emerald-400" /> }
    ];

    const testimonials = [
        {
            quote: "Noble Nexus transformed how we deliver education across our 14 faculties. The AI-driven analytics alone have allowed us to identify at-risk students weeks earlier than before, and our course completion rates have climbed by over 30% in the first academic year. This is not just an LMS — it is a genuine transformation of how our university operates.",
            author: "Dr. Anika Mehra",
            role: "Vice-Chancellor for Digital Education, Northgate University"
        },
        {
            quote: "We rolled out Noble Nexus across 62 schools in our district in under three weeks, and the difference in teacher workload and student engagement has been remarkable. The platform handles attendance tracking, progress reporting, and parent notifications automatically — which has given our teachers back hours every week to focus on actual teaching. The support team has been outstanding from day one.",
            author: "James O'Sullivan",
            role: "Director of Education Technology, Eastbridge School District"
        },
        {
            quote: "Our compliance training used to be a manual, time-consuming process across 11,000 employees in six countries. Noble Nexus automated our entire certification workflow, cut our training administration time by 85%, and gave our L&D leadership real-time visibility we never had before. It passed every security and data residency requirement our procurement team put in front of it.",
            author: "Priya Nair",
            role: "Global Head of Learning & Development, Meridian Financial Group"
        }
    ];

    const pricingPlans = [
        {
            name: "STARTER",
            target: "For: Small schools, training teams, early-stage eLearning (up to 500 learners)",
            features: [
                "AI-powered adaptive learning engine (up to 500 active learners)",
                "Multi-format content delivery (video, PDF, SCORM)",
                "Core progress and completion analytics dashboard",
                "Standard integrations (Google Workspace, Zoom)",
                "Email support + onboarding documentation"
            ],
            buttonText: "Get Started Free",
            icon: <Zap className="text-teal-400" size={32} />
        },
        {
            name: "PROFESSIONAL",
            label: "Most Popular",
            target: "For: Universities, mid-size schools, growing corporate training teams (up to 5,000 learners)",
            features: [
                "Full AI adaptive learning + predictive performance analytics (98% accuracy)",
                "Live virtual classroom integration (Zoom, MS Teams)",
                "Advanced learner analytics with at-risk alerts and AI recommendations",
                "GDPR & WCAG 2.1 compliance tools + role-based access controls",
                "Priority 24/7 support + dedicated customer success manager"
            ],
            buttonText: "Start Your Free Trial",
            icon: <Award className="text-indigo-400" size={32} />,
            popular: true
        },
        {
            name: "ENTERPRISE",
            target: "For: Large universities, national school systems, government/corporate organizations (unlimited learners)",
            features: [
                "Unlimited learners with custom SLA and uptime guarantees",
                "Full enterprise integrations (SAP, Salesforce, custom SSO, open API access)",
                "Dedicated cloud environment + custom data residency options",
                "90% admin automation suite with white-label branding and custom domain",
                "24/7 dedicated support team + quarterly strategic review sessions"
            ],
            buttonText: "Request Enterprise Pricing",
            icon: <Crown className="text-purple-400" size={32} />
        }
    ];

    const faqs = [
        {
            q: "How long does onboarding take?",
            a: "Most institutions are up and running within 5–10 business days. Our dedicated onboarding team handles environment configuration, content migration, integration setup, and administrator training — ensuring your team is confident before go-live. For large enterprise deployments with complex integrations, a phased rollout plan is available to ensure zero disruption to existing operations."
        },
        {
            q: "Does Noble Nexus LMS support SCORM and xAPI content?",
            a: "Yes. Noble Nexus LMS fully supports SCORM 1.2, SCORM 2004, xAPI (Tin Can), and AICC formats. You can import your existing content library directly into the platform without reformatting or rebuilding. Our content compatibility team is available to assist with any edge cases or legacy format conversions at no additional charge."
        },
        {
            q: "Can learners access the platform on mobile devices?",
            a: "Absolutely. The Noble Nexus LMS is fully responsive and available as a dedicated iOS and Android application, enabling learners to access courses, complete assessments, participate in live sessions, and track their own progress from any device — online or offline. Downloaded content syncs automatically when connectivity is restored, ensuring learning is never interrupted."
        },
        {
            q: "How does Noble Nexus handle data security and learner privacy?",
            a: "Noble Nexus LMS is built on an ISO 27001-certified security framework with end-to-end encryption, multi-factor authentication, and role-based access controls as standard. We are fully GDPR-compliant and support FERPA requirements for educational institutions. Enterprise clients benefit from dedicated cloud environments, custom data residency configuration, and regular third-party penetration testing — with full audit logs available to your compliance team at any time."
        },
        {
            q: "Can we apply our own branding to the platform?",
            a: "Yes. Professional and Enterprise plan subscribers can fully white-label the Noble Nexus LMS with their own logo, color scheme, custom domain, and branded email communications. Your learners experience a seamless, institution-branded environment with no Noble Nexus branding visible unless you choose to include it. Custom branding is applied during onboarding and can be updated at any time through the platform's administration panel."
        }
    ];

    return (
        <div className="bg-[#0B0F19] min-h-screen font-sans text-gray-100 selection:bg-teal-500/30 selection:text-teal-200 overflow-hidden">
            
            {/* --- SECTION 1: HERO --- */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-1/4 w-[800px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none -z-10 mix-blend-screen animate-pulse-slow delay-1000"></div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-left">
                            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                                <span className="text-teal-300 text-xs font-bold tracking-widest uppercase">Next-Gen Education Array</span>
                            </motion.div>
                            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-display font-extrabold leading-tight mb-8 text-white">
                                The LMS Built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">Future of Learning</span>
                            </motion.h1>
                            <motion.p variants={fadeInUp} className="text-xl text-gray-400 leading-relaxed font-medium mb-10 max-w-2xl">
                                Noble Nexus LMS combines enterprise-grade infrastructure with AI-driven intelligence — delivering personalized, scalable, and fully connected learning experiences for institutions that refuse to stand still.
                            </motion.p>
                            <motion.div variants={fadeInUp} className="flex flex-wrap gap-5">
                                <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-400 text-[#000000] font-bold rounded-full shadow-lg hover:scale-105 transition-all text-sm uppercase tracking-wide flex items-center gap-2 group">
                                    Request a Free Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <button className="px-8 py-4 bg-transparent border border-gray-600 hover:border-teal-400 text-white font-bold rounded-full hover:bg-teal-500/10 transition-all text-sm uppercase tracking-wide flex items-center gap-2 group">
                                    <Play size={18} className="text-teal-400" /> Explore the Platform
                                </button>
                            </motion.div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }} className="relative group">
                            <div className="relative z-10 rounded-[2rem] overflow-hidden border border-gray-700/50 shadow-2xl bg-gray-900/50 backdrop-blur-xl">
                                <img src="/lms-hero.png" alt="LMS Dashboard" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-[2rem] blur opacity-20 -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 2: WHAT IS THE NOBLE NEXUS LMS? --- */}
            <section className="py-24 relative z-10 bg-[#070b14]">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative order-2 lg:order-1 group">
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-800 bg-gray-900/40 p-2">
                                <img src="/lms-about.png" alt="What is Noble Nexus LMS" className="w-full h-[500px] object-cover rounded-[1.5rem]" />
                            </div>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-left order-1 lg:order-2">
                            <motion.span variants={fadeInUp} className="text-teal-400 font-bold tracking-widest text-sm uppercase mb-4 block">Platform Overview</motion.span>
                            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold text-white mb-8">What is the <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">Noble Nexus LMS?</span></motion.h2>
                            <motion.div variants={fadeInUp} className="space-y-6">
                                <p className="text-lg text-gray-400 leading-relaxed font-medium">
                                    The Noble Nexus Learning Management System is a next-generation, AI-powered eLearning platform engineered for the scale and complexity of modern education. Designed for universities, K-12 institutions, and enterprise training organizations, it replaces outdated, siloed systems with a unified digital ecosystem that learns, adapts, and grows with your learners.
                                </p>
                                <p className="text-lg text-gray-400 leading-relaxed font-medium">
                                    Every feature — from intelligent content delivery to predictive performance analytics — is built to reduce administrative burden while dramatically improving learning outcomes. Noble Nexus LMS delivers the reliability, security, and innovation your institution demands.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 3: KEY FEATURES --- */}
            <section className="py-24 relative z-10 bg-[#0B0F19]">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.span variants={fadeInUp} initial="hidden" whileInView="visible" className="text-teal-400 font-bold tracking-widest text-sm uppercase mb-4 block">Core Capabilities</motion.span>
                        <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Intelligent features for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">modern education</span></motion.h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {lmsFeatures.map((f, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 hover:border-teal-500/30 transition-all group relative">
                                <div className="w-14 h-14 rounded-xl bg-gray-800/80 flex items-center justify-center mb-6 border border-gray-700/50 group-hover:scale-110 transition-transform">{f.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-4">{f.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION 4: WHO IS IT FOR? --- */}
            <section className="py-24 relative z-10 bg-[#070b14]">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.span variants={fadeInUp} initial="hidden" whileInView="visible" className="text-teal-400 font-bold tracking-widest text-sm uppercase mb-4 block">Targeted Solutions</motion.span>
                        <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Built for Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">Learning Environment</span></motion.h2>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {whoIsItFor.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-gray-900/40 border border-gray-800 rounded-[2rem] p-10 hover:bg-gray-800/60 transition-all h-full flex flex-col">
                                <div className="mb-8">{item.icon}</div>
                                <h3 className="text-2xl font-bold text-white mb-6">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed font-medium flex-grow">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION 5: HOW IT WORKS --- */}
            <section className="py-24 relative z-10 bg-[#0B0F19]">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white">How it <span className="text-teal-400">Works</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {howItWorks.map((step, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="relative group">
                                <div className="text-teal-400 font-bold mb-4 flex items-center gap-2">
                                    <span className="text-xs uppercase tracking-[0.2em]">{step.step}</span>
                                    <div className="h-px bg-teal-500/20 flex-grow"></div>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6 group-hover:bg-teal-500 group-hover:text-black transition-all">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION 6: STATS BANNER --- */}
            <section className="py-20 relative z-10 bg-gradient-to-r from-teal-500/10 via-indigo-500/10 to-purple-500/10 border-y border-white/5 backdrop-blur-sm">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="mb-4 inline-block p-3 rounded-2xl bg-white/5 border border-white/10">{stat.icon}</div>
                                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-xs font-bold text-teal-400 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION 7: TESTIMONIALS --- */}
            <section className="py-24 relative z-10 bg-[#070b14]">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <Quote size={48} className="text-teal-500/20 mx-auto mb-6" />
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Trust from <span className="text-teal-400">Leaders</span></h2>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <div key={i} className="bg-gray-900/40 border border-gray-800 p-10 rounded-[2rem] relative italic">
                                <p className="text-gray-300 leading-relaxed mb-8">"{t.quote}"</p>
                                <div className="not-italic">
                                    <p className="text-white font-bold">{t.author}</p>
                                    <p className="text-teal-400 text-sm">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION 8: PRICING --- */}
            <section className="py-24 relative z-10 bg-[#0B0F19]">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Investment <span className="text-teal-400">Plans</span></h2>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        {pricingPlans.map((plan, i) => (
                            <div key={i} className={`relative p-1 bg-gradient-to-b ${plan.popular ? 'from-teal-500 via-indigo-500 to-purple-500' : 'from-gray-700/50 to-gray-800/50'} rounded-[2.5rem] shadow-2xl overflow-hidden`}>
                                <div className="bg-[#0B0F19] rounded-[2.4rem] p-10 h-full flex flex-col">
                                    {plan.label && <div className="absolute top-8 right-8 px-4 py-1 rounded-full bg-teal-500 text-black text-[10px] font-bold uppercase tracking-widest">{plan.label}</div>}
                                    <div className="mb-8">{plan.icon}</div>
                                    <h3 className="text-3xl font-display font-black text-white mb-4">{plan.name}</h3>
                                    <p className="text-xs text-gray-500 font-bold mb-8 uppercase tracking-widest leading-relaxed">{plan.target}</p>
                                    <div className="flex-grow space-y-4 mb-10">
                                        {plan.features.map((f, j) => (
                                            <div key={j} className="flex gap-3 text-sm text-gray-300">
                                                <CheckCircle2 size={16} className="text-teal-400 flex-shrink-0 mt-0.5" />
                                                <span>{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all ${plan.popular ? 'bg-teal-500 text-black hover:bg-teal-400' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}>{plan.buttonText}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION 9: FAQ --- */}
            <section className="py-24 relative z-10 bg-[#070b14]">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Common <span className="text-teal-400">Questions</span></h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-gray-800 bg-gray-900/20 rounded-2xl overflow-hidden">
                                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors">
                                    <span className="text-lg font-bold text-white">{faq.q}</span>
                                    <ChevronDown size={20} className={`text-teal-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                            <div className="px-8 pb-8 text-gray-400 leading-relaxed">{faq.a}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION 10: FINAL CTA --- */}
            <section className="py-32 relative z-10 bg-[#0B0F19] overflow-hidden text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal-500/10 rounded-full blur-[150px] -z-10"></div>
                <div className="container mx-auto px-4 max-w-3xl">
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-display font-black text-white mb-8">Your Institution's <span className="text-teal-400">Smartest Move</span> Starts Here</motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-xl text-gray-400 font-medium mb-12">
                        Join educators, administrators, and training leaders in 150+ countries who have chosen Noble Nexus to power their next chapter. Whether you're ready to go live or just exploring, we'll show you exactly what's possible.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link to="/contact" className="w-full sm:w-auto px-12 py-5 bg-teal-500 text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-teal-400 transition-all shadow-[0_0_50px_rgba(20,184,166,0.3)]">Book a Free Demo</Link>
                        <button className="w-full sm:w-auto px-12 py-5 bg-transparent border border-gray-700 text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-white/5 transition-all">Start Your Free Trial</button>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default LMS;
