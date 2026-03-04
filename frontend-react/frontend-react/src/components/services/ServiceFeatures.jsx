
import { motion } from 'framer-motion';

const ServiceFeatures = ({ features }) => {
    return (
        <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <span className="text-[#0F766E] font-bold tracking-widest text-sm uppercase mb-4 block">Key Capabilities</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[#111111] mb-6">
                        Designed for <br />
                        <span className="text-[#2563EB]">Maximum Impact</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#FFFFFF] border border-gray-200 rounded-2xl p-8 hover:bg-gray-50 hover:border-[#0F766E] transition-all duration-300 group shadow-sm"
                        >
                            <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="text-3xl drop-shadow-sm">{feature.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#111111] mb-3 group-hover:text-[#0F766E] transition-colors">{feature.title}</h3>
                            <p className="text-[#555555] text-sm leading-relaxed font-medium">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceFeatures;
