
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
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                                    alt="Advanced Digital Learning and Collaboration"
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
                            <p className="text-[#555555] text-lg leading-relaxed font-medium">
                                We empower institutions with innovative technologies, expert support, and scalable platforms to thrive in today’s digital landscape. Our goal is to bridge the gap between education and technology with <strong>global reach</strong> and <strong>expert support</strong>, ensuring that learning is accessible, engaging, and effective for everyone.
                            </p>
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
                                className="bg-[#FFFFFF] border border-gray-200 rounded-2xl overflow-hidden flex flex-col shadow-sm relative h-[340px]"
                            >
                                <div className="h-48 w-full relative overflow-hidden bg-gray-100 shrink-0">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="relative p-6 pt-10 bg-[#FFFFFF] flex-grow flex flex-col">
                                    {/* Floating Icon */}
                                    <div className="absolute -top-8 left-6 w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center text-[#0F766E] shadow-sm border border-teal-100">
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
                    <div className="text-center mb-20">
                        <span className="text-[#2563EB] font-bold tracking-widest text-sm uppercase mb-4 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#111111] mb-6">
                            Core <span className="text-[#0F766E]">Solutions</span>
                        </h2>
                    </div>

                    <div className="space-y-24">
                        {[
                            {
                                title: "School Management Learning",
                                desc: "Our comprehensive School Management Learning platform is an all-in-one ecosystem designed to manage academic, administrative, and communication processes seamlessly. By integrating admissions, attendance tracking, and fees management into a unified parent and student portal, we provide institutions with the tools they need to foster a collaborative and efficient learning environment.",
                                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
                                icon: LayoutDashboard,
                                color: "text-[#0F766E]",
                                bgColor: "bg-teal-50"
                            },
                            {
                                title: "Learning Design",
                                desc: "We create outcome-driven learning experiences by applying proven instructional design principles and rich multimedia. Our approach focuses on developing interactive courses and high-quality digital content that ensures accessibility and engagement, helping learners achieve their educational goals through personalized and immersive pathways.",
                                image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80",
                                icon: PenTool,
                                color: "text-purple-600",
                                bgColor: "bg-purple-50"
                            },
                            {
                                title: "Content Management",
                                desc: "Our robust content management systems are built to organize, secure, and deliver digital learning resources at scale. Utilizing advanced cloud storage and version control, we offer institutions lightning-fast search capabilities and secure access protocols, ensuring that vital educational assets are always protected and easily accessible to authorized users.",
                                image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1000&q=80",
                                icon: Library,
                                color: "text-amber-600",
                                bgColor: "bg-amber-50"
                            },
                            {
                                title: "Managed Services",
                                desc: "Noble Nexus provides end-to-end platform implementation and dedicated infrastructure management to ensure your systems run flawlessly. From initial deployment and continuous system monitoring to proactive maintenance and 24/7 technical support, we handle the complexities of technology so you can focus on delivering exceptional education.",
                                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
                                icon: Server,
                                color: "text-cyan-600",
                                bgColor: "bg-cyan-50"
                            }
                        ].map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                                >
                                    {/* Image Section */}
                                    <div className="flex-1 w-full">
                                        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 aspect-video">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="flex-1 space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-2xl ${item.bgColor} flex items-center justify-center`}>
                                                <item.icon className={item.color} size={24} />
                                            </div>
                                            <h3 className="text-3xl font-bold text-[#111111]">{item.title}</h3>
                                        </div>
                                        <p className="text-[#555555] text-lg leading-relaxed font-medium">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
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
                                className="p-8 rounded-2xl bg-[#FFFFFF] border border-gray-200 shadow-sm text-left"
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

