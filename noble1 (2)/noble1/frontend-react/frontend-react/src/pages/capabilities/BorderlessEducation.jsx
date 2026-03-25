import { motion } from 'framer-motion';
import { ArrowRight, Globe, Video, Users, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
    { icon: Globe, title: "Global virtual classrooms", desc: "Instantly create high-definition global classrooms spanning multiple countries without latency." },
    { icon: Video, title: "Live interactive lessons", desc: "Whiteboarding, interactive quizzes, and low-lag video processing ensuring fluid class dynamics." },
    { icon: Users, title: "Video conferencing integration", desc: "Native integration directly within our secure platform, eliminating the need for third-party apps." },
    { icon: Layers, title: "Collaborative learning tools", desc: "Synchronized note taking, breakout rooms, and seamless real-time document editing." }
];

const BorderlessEducation = () => {
    return (
        <div className="pt-24 min-h-screen bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Hero Section */}
                <div className="bg-[#FFFFFF] rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col lg:flex-row relative mb-24">
                    <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center relative z-10">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-50 to-transparent right-0 opacity-50"></div>
                        <div className="relative z-10">
                            <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-6 tracking-tight leading-tight">
                                Borderless Education with
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500 block mt-2">Virtual Classrooms</span>
                            </h1>
                            <p className="text-lg text-[#555555] leading-relaxed mb-10 max-w-lg font-medium">
                                Noble Nexus enables seamless virtual learning environments connecting students and educators worldwide. Our secure digital classrooms support interactive sessions, collaborative learning, and real-time engagement.
                            </p>
                            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-full shadow-lg transition-transform active:scale-95 group">
                                Start Connecting
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative bg-gray-50 min-h-[400px]">
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#FFFFFF] opacity-20 z-10"></div>
                        <img
                            src="/capabilities/borderless_education_1772795216470.png"
                            alt="Borderless Education via Virtual Classrooms"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Features Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[#111111] font-display">Key Capabilities</h2>
                    <div className="w-24 h-1 bg-cyan-600 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-[#FFFFFF] p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
                        >
                            <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center text-cyan-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-[#111111] mb-3 group-hover:text-cyan-600 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-[#555555] text-sm leading-relaxed font-medium">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default BorderlessEducation;
