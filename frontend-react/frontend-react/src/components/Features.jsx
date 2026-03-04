import { motion } from 'framer-motion';
import { Brain, Users, LineChart, Globe } from 'lucide-react';

const features = [
    {
        icon: Brain,
        title: "Adaptive Neural Networks",
        desc: "AI that learns your curriculum and adapts to student performance in real-time.",
        color: "from-teal to-blue-400"
    },
    {
        icon: Users,
        title: "Intelligent Administration",
        desc: "Automate 90% of administrative tasks with our unified ERP system.",
        color: "from-purple to-pink-500"
    },
    {
        icon: LineChart,
        title: "Predictive Analytics",
        desc: "Forecast enrollment trends and student outcomes with 98% accuracy.",
        color: "from-orange to-red-500"
    },
    {
        icon: Globe,
        title: "Borderless Education",
        desc: "Seamless virtual classrooms connecting 150+ countries instantly.",
        color: "from-cyan to-teal-400"
    }
];

const Features = () => {
    return (
        <section id="features" className="py-24 bg-[#F8FAFC] relative">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="text-[#0F766E] font-bold tracking-widest uppercase mb-4 block">
                        Core capabilities
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-[#111111]">
                        Built for the <br />
                        <span className="text-[#2563EB]">
                            Next Generation
                        </span>
                    </h2>
                </div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="group relative p-8 rounded-2xl bg-[#FFFFFF] border border-gray-200 hover:border-teal-300 transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden"
                        >
                            {/* Gradient Glow */}
                            <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${feature.color} bg-opacity-10 mb-6 shadow-sm`}>
                                    <feature.icon className="w-8 h-8 text-[#111111]" />
                                </div>

                                <h3 className="text-xl font-bold font-display mb-3 text-[#111111] group-hover:text-[#0F766E] transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-[#555555] font-medium text-sm leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
