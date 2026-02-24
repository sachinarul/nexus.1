
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    PenTool,
    Cpu,
    Database,
    Accessibility,
    Check,
    ArrowRight,
    Play,
    Star,
    Mail,
    Phone
} from 'lucide-react';

const services = [
    {
        image: "https://img.icons8.com/3d-fluency/94/graduation-cap.png",
        title: "School Management ERP",
        desc: "Advanced ERP systems to simplify and automate institutional operations, enhancing transparency and efficiency.",
        features: [
            "Student & Staff Management",
            "Attendance & Examination",
            "Fee & Finance Management",
            "Real-Time Analytics"
        ],
        gradient: "from-teal-400 to-emerald-500",
        shadow: "shadow-teal/20",
        delay: 0.1
    },
    {
        image: "https://img.icons8.com/3d-fluency/94/design.png",
        title: "Instructional Design",
        desc: "Engaging, learner-focused courses tailored to your academic goals with multimedia and gamified content.",
        features: [
            "Interactive Course Modules",
            "Multimedia Content",
            "Assessment Tools",
            "Personalized Paths"
        ],
        gradient: "from-purple-400 to-pink-500",
        shadow: "shadow-purple/20",
        delay: 0.2
    },
    {
        image: "https://img.icons8.com/3d-fluency/94/cloud-storage.png",
        title: "Managed eLearning",
        desc: "Complete technical support for your digital infrastructure. We handle the technology while you focus on teaching.",
        features: [
            "LMS Setup & Config",
            "Platform Maintenance",
            "24/7 Technical Support",
            "System Upgrades",
            "Scalable Infrastructure"
        ],
        gradient: "from-amber-400 to-orange-500",
        shadow: "shadow-amber/20",
        popular: true,
        delay: 0.3
    },
    {
        image: "https://img.icons8.com/3d-fluency/94/books.png",
        title: "Digital Content Mgmt",
        desc: "Organize and distribute educational content effortlessly with centralized libraries and secure cloud storage.",
        features: [
            "Centralized Library",
            "Secure Cloud Storage",
            "Version Control",
            "Collaborative Access"
        ],
        gradient: "from-cyan-400 to-blue-500",
        shadow: "shadow-cyan/20",
        delay: 0.4
    },
    {
        image: "https://img.icons8.com/3d-fluency/94/wheelchair.png",
        title: "Accessibility Compliance",
        desc: "Inclusive platforms supporting every learner. WCAG standards, screen readers, and adaptive interfaces.",
        features: [
            "WCAG Standards",
            "Screen Reader Ready",
            "Keyboard Navigation",
            "Adaptive Interfaces"
        ],
        gradient: "from-rose-400 to-red-500",
        shadow: "shadow-rose/20",
        delay: 0.5
    }
];

const Services = () => {
    return (
        <section id="services" className="py-32 bg-[#0a0f1d] relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block py-1 px-3 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-bold tracking-widest uppercase mb-6"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
                    >
                        Architecting the <br />
                        <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Future of Education</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg leading-relaxed"
                    >
                        Comprehensive EdTech solutions designed to empower institutions, educators, and learners through innovation and scalable technology.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: service.delay, duration: 0.5 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className={`relative p-8 rounded-3xl border transition-all duration-300 group flex flex-col h-full
                                ${service.popular
                                    ? 'bg-[#111827] border-teal/50 shadow-2xl shadow-teal/10 lg:-mt-8 lg:mb-8 z-10 scale-105'
                                    : 'bg-[#111827]/60 border-white/5 hover:border-white/10 hover:bg-[#111827]/80'}
                            `}
                        >
                            {/* Popular Badge */}
                            {service.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-black text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                                    <Star size={12} fill="currentColor" /> MOST POPULAR
                                </div>
                            )}

                            {/* Icon / Image Box */}
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg ${service.shadow}`}>
                                <div className="w-full h-full bg-[#0a0f1d] rounded-[14px] flex items-center justify-center overflow-hidden relative">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-10 h-10 object-contain drop-shadow-md z-10"
                                    />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                                {service.desc}
                            </p>

                            <div className="space-y-3 mb-8">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className={`mt-0.5 p-0.5 rounded-full bg-gradient-to-br ${service.gradient} opacity-80`}>
                                            <Check size={10} className="text-black stroke-[3]" />
                                        </div>
                                        <span className="text-sm text-gray-300">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 mt-auto">
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact CTA Area */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-10 text-center max-w-3xl mx-auto flex flex-col items-center"
                >
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
                        Transforming Education <br />
                        <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                            with Innovative eLearning Solutions
                        </span>
                    </h3>
                    
                    <div className="w-12 h-1 bg-teal rounded-full my-6"></div>
                    
                    <h4 className="text-lg font-medium text-gray-400 mb-10">
                        Contact us for tailored solutions.
                    </h4>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12">
                        <a href="mailto:contactus@noblenexus-ie.com" className="group flex items-center gap-4 text-white hover:text-teal-400 transition-colors">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-teal-500/20 group-hover:border-teal-500/30 transition-all shadow-lg">
                                <Mail size={20} className="text-teal-400" />
                            </div>
                            <span className="font-medium text-lg tracking-wide">contactus@noblenexus-ie.com</span>
                        </a>
                        <div className="hidden sm:block w-px h-12 bg-white/10"></div>
                        <a href="tel:+353-871700653" className="group flex items-center gap-4 text-white hover:text-teal-400 transition-colors">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-teal-500/20 group-hover:border-teal-500/30 transition-all shadow-lg">
                                <Phone size={20} className="text-teal-400" />
                            </div>
                            <span className="font-medium text-lg tracking-wide">+353-871700653</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ViewDemoButton = () => (
    <>
        <Play size={14} className="fill-current" /> View Demo
    </>
);

export default Services;
