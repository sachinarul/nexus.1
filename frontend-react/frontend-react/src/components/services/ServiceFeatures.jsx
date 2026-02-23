
import { motion } from 'framer-motion';

const ServiceFeatures = ({ features }) => {
    return (
        <section className="py-24 bg-navy-950 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <span className="text-purple font-medium tracking-widest text-sm uppercase mb-4 block">Key Capabilities</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Designed for <br />
                        <span className="bg-gradient-to-r from-purple to-pink-500 bg-clip-text text-transparent">Maximum Impact</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-teal/30 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="text-3xl drop-shadow-lg">{feature.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal transition-colors">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceFeatures;
