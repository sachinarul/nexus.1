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
        icon: "https://img.icons8.com/3d-fluency/94/graduation-cap.png",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        title: "Online Classroom System",
        desc: "Elevate your e-learning platform with our cutting-edge Online Classroom System. Engineered to seamlessly integrate into your digital workflow, this robust solution dramatically simplifies academic and administrative management. Replace manual overhead with automated course administration, effortless progress tracking, and insightful real-time analytics. We empower educators to focus on delivering high-quality instruction by providing a highly transparent, data-driven environment for both instructors and learners. Every element of your virtual classroom is meticulously synchronized to deliver a flawless, deeply engaging, and highly scalable online learning experience.",
        gradient: "from-teal-400 to-emerald-500",
        shadow: "shadow-teal/20",
        delay: 0.1
    },
    {
        icon: "https://img.icons8.com/3d-fluency/94/design.png",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        title: "Instructional Design",
        desc: "Transform standard curricula into captivating, interactive journeys with our premium Instructional Design services. We leverage deep, learner-centric methodologies to craft highly engaging course materials tailored specifically to your platform's unique goals. Our dynamic approach weaves together rich multimedia storytelling, interactive modules, and intelligent assessment tools with personalized gamification strategies that keep learners motivated. By aligning cutting-edge educational content with cognitive science, we deliver digital learning experiences that maximize knowledge retention and empower your students to consistently succeed.",
        gradient: "from-purple-400 to-pink-500",
        shadow: "shadow-purple/20",
        delay: 0.2
    },
    {
        icon: "https://img.icons8.com/3d-fluency/94/cloud-storage.png",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        title: "Managed eLearning",
        desc: "Eliminate technical complexities with our comprehensive Managed eLearning infrastructure. We expertly handle all intricate, behind-the-scenes operations—from complete platform staging and cloud configuration to routine maintenance and rapid system upgrades. This hands-off approach allows your team to focus exclusively on growing your educational community. Backed by 24/7 proactive technical support and an architecture built for elastic scalability, we guarantee that your e-learning platform remains remarkably robust, highly secure, and perfectly optimized to flawlessly handle surging student traffic.",
        gradient: "from-amber-400 to-orange-500",
        shadow: "shadow-amber/20",
        popular: true,
        delay: 0.3
    },
    {
        icon: "https://img.icons8.com/3d-fluency/94/books.png",
        image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        title: "Digital Content Mgmt",
        desc: "Organize, protect, and effortlessly distribute your vital educational resources with our centralized Digital Content Management solutions. Built upon highly secure and lightning-fast cloud architectures, our centralized libraries bring all your multimedia assets, collaborative files, and version-controlled documents into one unified hub. Your platform administrators and educators can seamlessly curate vast amounts of coursework, instantly deploy updates globally, and maintain precise control over access permissions. We guarantee an uninterrupted, intuitive experience where learners effortlessly find the exact tools they need.",
        gradient: "from-cyan-400 to-blue-500",
        shadow: "shadow-cyan/20",
        delay: 0.4
    },
    {
        icon: "https://img.icons8.com/3d-fluency/94/wheelchair.png",
        image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        title: "Accessibility Compliance",
        desc: "Champion a genuinely inclusive learning environment with our rigorous Accessibility Compliance services. We weave strict WCAG standards into the very fabric of your digital interfaces, flawlessly accommodating a beautifully diverse spectrum of learning needs. From robust screen reader compatibility and intuitive keyboard-only navigation to highly adaptive UI layouts designed for cognitive variability, our unwavering commitment to complete accessibility massively broadens your platform's reach. By breaking down technical barriers, we guarantee that every single learner can engage with confidence and achieve remarkable educational outcomes.",
        gradient: "from-rose-400 to-red-500",
        shadow: "shadow-rose/20",
        delay: 0.5
    }
];

const Services = () => {
    return (
        <section id="services" className="py-16 bg-[#F8FAFC] relative overflow-hidden">

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span
                        className="inline-block py-1.5 px-4 rounded-full bg-teal-50 border border-teal-200 text-[#0F766E] text-xs font-bold tracking-widest uppercase mb-6 shadow-sm"
                    >
                        Our Expertise
                    </span>
                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#0F172A] mb-6 leading-tight"
                    >
                        Architecting the <br />
                        <span className="text-[#2563EB]">Future of Education</span>
                    </h2>
                    <p
                        className="text-[#334155] text-lg leading-relaxed font-medium"
                    >
                        Comprehensive EdTech solutions designed to empower your platform, educators, and learners through innovation and scalable technology.
                    </p>
                </div>

                <div className="space-y-20">
                    {services.map((service, index) => {
                        const isEven = index % 2 === 0; // Swap the layout order

                        return (
                            <div
                                key={index}
                                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isEven ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Text Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className="flex-1 space-y-8"
                                >
                                    {service.popular && (
                                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-[#000000] text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                                            <Star size={12} fill="currentColor" /> MOST POPULAR
                                        </div>
                                    )}

                                    <div className="flex items-center gap-4">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5`}>
                                            <div className="w-full h-full bg-[#FFFFFF] rounded-[14px] flex items-center justify-center overflow-hidden">
                                                <img
                                                    src={service.icon}
                                                    alt={service.title}
                                                    className="w-8 h-8 object-contain drop-shadow-sm"
                                                />
                                            </div>
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl font-bold font-display text-[#0F172A]">
                                            {service.title}
                                        </h3>
                                    </div>

                                    <p className="text-[#334155] text-[1.05rem] leading-[1.8] font-medium text-justify">
                                        {service.desc}
                                    </p>
                                </motion.div>

                                {/* Image Section */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className="flex-1 w-full relative group perspective-1000"
                                >
                                    <div className={`absolute -inset-6 bg-gradient-to-tr ${service.gradient} opacity-20 rounded-[2.5rem] blur-2xl group-hover:opacity-30 transition-opacity duration-500 -z-10`}></div>

                                    <div className="relative rounded-[2rem] overflow-hidden transition-all duration-500 shadow-sm border border-gray-100">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-[350px] sm:h-[450px] object-cover"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Services;
